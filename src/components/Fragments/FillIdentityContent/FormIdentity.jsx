import { useState } from "react";

const FormIdentity = () => {

    const options = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
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
                <label for="formGroupExampleInput" className="form-label">Example label</label>
                <input type="text" className="form-control" id="formGroupExampleInput"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Example label</label>
                <input type="text" className="form-control" id="formGroupExampleInput"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Example label</label>
                <input type="text" className="form-control" id="formGroupExampleInput"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Example label</label>
                <input type="number" className="form-control" id="formGroupExampleInput"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Example label</label>
                <input type="number" className="form-control" id="formGroupExampleInput"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Example label</label>
                <select onChange={handleChange} class="form-select" aria-label="Default select example">
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                </select>
            </div>

            {selectedItems.length > 0 && (
                <div className="mt-4 p-4 border rounded bg-gray-100">
                <h3 className="font-semibold mb-2">Pilihan Anda:</h3>
                <div className="flex flex-wrap gap-2">
                    {selectedItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#132A4D] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md"
                    >
                        {item}
                        <button
                        onClick={() => handleRemove(item)}
                        className="text-white bg-red-500 hover:bg-red-700 rounded-full px-2 py-1 text-xs"
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