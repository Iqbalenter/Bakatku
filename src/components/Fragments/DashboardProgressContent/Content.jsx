import { useEffect, useState } from "react";
import EditIcon from '../../../assets/EditPen.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Content = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [fields, setFields] = useState([]);
    const [originalFields, setOriginalFields] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        const storedData = localStorage.getItem("progressData");
        if (storedData) {
            const parsed = JSON.parse(storedData);
            const entries = Object.keys(parsed);

            if (entries.length === 0) {
                setFields(["No Progress Available"]);
            } else {
                setFields(entries);
                setOriginalFields(entries);
            }
        } else {
            setFields(["No Progress Available"]);
        }
    }, []);

    const handleInputChange = (index, value) => {
        const newFields = [...fields];
        newFields[index] = value;
        setFields(newFields);
    };

    const handleDeleteField = (index) => {
        const updatedFields = [...fields];
        updatedFields.splice(index, 1);
        setFields(updatedFields);
    };

    const handleAddField = () => {
        setFields([...fields, ""]);
    };

    const toggleEdit = async () => {
        const token = localStorage.getItem("token");

        if (isEditing) {
            // Update title if changed
            for (let i = 0; i < originalFields.length; i++) {
                const oldTitle = originalFields[i];
                const newTitle = fields[i];

                if (oldTitle && newTitle && oldTitle !== newTitle) {
                    try {
                        await axios.put(`${import.meta.env.VITE_API_URL}/progress/update-title`, {
                            oldTitle,
                            newTitle
                        }, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                                "Content-Type": "application/json"
                            }
                        });
                        console.log(`Updated: ${oldTitle} ➝ ${newTitle}`);
                    } catch (error) {
                        console.error(`Failed to update ${oldTitle}:`, error);
                        alert(`Failed to update progress "${oldTitle}"`);
                    }
                }
            }

            // Add new fields
            const newFieldsOnly = fields.slice(originalFields.length).filter(f => f.trim() !== "");
            if (newFieldsOnly.length > 0) {
                const progressPayload = newFieldsOnly.map(title => ({ title, status: false }));
                try {
                    await axios.post(`${import.meta.env.VITE_API_URL}/progress`, {
                        progress: progressPayload
                    }, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    });
                    console.log("Successfully added new fields:", progressPayload);
                } catch (error) {
                    console.error("Failed to add new fields:", error);
                    alert("Failed to add new progress items");
                }
            }

            // Delete removed fields
            const deletedFields = originalFields.filter(original => !fields.includes(original));
            for (const title of deletedFields) {
                try {
                    await axios.delete(`${import.meta.env.VITE_API_URL}/progress/delete-title`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        },
                        data: { title }
                    });
                    console.log(`Deleted: ${title}`);
                } catch (error) {
                    console.error(`Failed to delete ${title}:`, error);
                    alert(`Failed to delete progress "${title}"`);
                }
            }

            alert("Update completed");
            setOriginalFields([...fields]);
        }

        setIsEditing(!isEditing);
    };

    return (
        <div className="progress-trackers">
            <h3>Progress Tracker</h3>
            <div className="progress-tracker">
                <div className="tracker-container">
                    {fields.map((value, index) => (
                        <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                            <input
                                type="text"
                                value={value}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                readOnly={!isEditing}
                                className={isEditing ? "editable" : ""}
                                style={{ flexGrow: 1 }}
                            />
                            {isEditing && (
                                <button
                                    onClick={() => handleDeleteField(index)}
                                    style={{
                                        marginLeft: "8px",
                                        backgroundColor: "red",
                                        color: "white",
                                        border: "none",
                                        padding: "5px 10px",
                                        borderRadius: "4px",
                                        cursor: "pointer"
                                    }}
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    ))}
                    {isEditing && (
                        <button
                            onClick={handleAddField}
                            style={{
                                marginTop: "10px",
                                padding: "6px 12px",
                                backgroundColor: "#3b82f6",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer"
                            }}
                        >
                            + Add Field
                        </button>
                    )}
                </div>
            </div>

            <button onClick={toggleEdit} className="edit-button" style={{ marginTop: "15px" }}>
                <img src={EditIcon} width={15} style={{ marginRight: "5px" }} />
                {isEditing ? "Save" : "Edit"}
            </button>
        </div>
    );
};

export default Content;
