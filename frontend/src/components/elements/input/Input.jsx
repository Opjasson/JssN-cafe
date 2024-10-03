import React from "react";

function Input(props) {
    const { type, placeholder, name } = props;
    return (
        <div>
            <input
                placeholder={placeholder}
                name={name}
                type={type}
                id={name}
                className="block w-full px-3 border-2 border-slate-300"
            />
        </div>
    );
}

export default Input;
