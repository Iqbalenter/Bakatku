import { useState } from "react";

const FormIdentity = () => {

    const options = ["UI Design", "Web Developer", "Data Science", "Blockchain Developer"];
    const [selectedItems, setSelectedItems] = useState([]);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue && !selectedItems.includes(selectedValue)) {
        setSelectedItems([...selectedItems, selectedValue]);
        }
    };

    const handleRemove = (item) => {
        setSelectedItems(selectedItems.filter((selected) => selected !== item));
    };

    return (
        <div className="form-identity">
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Pekerjaan saat ini</label>
                <input type="text" className="form-control" id="formGroupExampleInput"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Aktivitas kamu sehari hari</label>
                <input type="text" className="form-control" id="formGroupExampleInput"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Hobi kamu</label>
                <input type="text" className="form-control" id="formGroupExampleInput"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Berapa tahun pengalaman kerja</label>
                <input type="number" className="form-control" id="formGroupExampleInput"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Pilih skill yang anda inginkan</label>
                <select onChange={handleChange} class="form-select" aria-label="Default select example">
                        <option value="" disabled selected></option>
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                </select>
            </div>

            {selectedItems.length > 0 && (
                <div className="mt-4 p-4 border rounded bg-white">
                    <div className="flex flex-wrap gap-2">
                        {selectedItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2"
                            >
                                {item}
                                <button
                                    onClick={() => handleRemove(item)}
                                    className="mx-2 text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="login-button-container">
                <button className="login-button">Selanjutnya</button>
            </div>
        </div>
    )
}

export default FormIdentity;