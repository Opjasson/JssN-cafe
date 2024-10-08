import React from "react";

function Input(props) {
    const { type, placeholder, name, onChange = () => {}, value } = props;
    return (
        <div>
            <input
                required
                placeholder={placeholder}
                name={name}
                type={type}
                id={name}
                onChange={onChange}
                value={value}
                className="block w-full px-3 border-2 border-slate-300"
            />
        </div>
    );
}

export default Input;
