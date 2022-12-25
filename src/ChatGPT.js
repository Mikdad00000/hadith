import React, { useState } from "react";

const InputDynamic = () => {
    const [inputs, setInputs] = useState([{ value: "" }]);
    const handleChange = (e, index) => {
        const values = [...inputs];
        values[index].value = e.target.value;
        setInputs(values);
    };
    const handleAdd = () => {
        const values = [...inputs];
        values.push({ value: "" });
        setInputs(values);
    };
    const handleRemove = (index) => {
        const values = [...inputs];
        values.splice(index, 1);
        setInputs(values);
    };
    return (
        <div>
            {inputs.map((input, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={input.value}
                        onChange={(e) => handleChange(e, index)}
                    />
                    <button type="button" onClick={() => handleRemove(index)}>
                        -
                    </button>
                    <button type="button" onClick={handleAdd}>
                        +
                    </button>
                </div>
            ))}
        </div>
    );
};

export default InputDynamic;
