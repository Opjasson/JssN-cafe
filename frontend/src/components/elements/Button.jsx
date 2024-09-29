import React from "react";

function Button(props) {
    const { children, variant = "bg-slate-400", onClick= () => {}, type="button"} = props;
    return (
        <div>
            <button type={type} onClick={onClick} className={`px-5 ${variant} rounded`}>{children}</button>
        </div>
    );
}

export default Button;
