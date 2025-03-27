import { useState } from "react";
import EditIcon from '../../../assets/EditPen.png';

const Content = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [fields, setFields] = useState(Array(6).fill(""));

    const handleInputChange = (index, value) => {
        const newFields = [...fields];
        newFields[index] = value;
        setFields(newFields);
    };

    const toggleEdit = () => {
    setIsEditing(!isEditing);
    };

    return (
        <div className="progress-trackers">
            <h3>Progress Tracker</h3>
            <div>
                <div className="progress-tracker">
                    <div className="tracker-container">
                        {fields.map((value, index) => (
                        <input
                            key={index}
                            type="text"
                            value={value}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            readOnly={!isEditing}
                            className={isEditing ? "editable" : ""}
                            
                        />
                        ))}
                    </div>
                </div>
            </div>
            
            <button onClick={toggleEdit} className="edit-button">
                <img src={EditIcon} width={15} style={{marginRight: "5px"}}/>
                {isEditing ? "Simpan" : "Edit"}
            </button>
            
        </div>
    )
}

export default Content;