import React from "react";

interface IButtonBase {
    text: string;
    className?: string;
    primary?: boolean;
}

const ButtonBase: React.FC<IButtonBase> = ({ text, className, primary }) => {
    return (
        <div
            className={`${
                primary ? "bg-primary-purple" : ""
            } rounded-xl cursor-pointer opacity-90 hover:opacity-100 ${className}`}
        >
            {text}
        </div>
    );
};

export default ButtonBase;
