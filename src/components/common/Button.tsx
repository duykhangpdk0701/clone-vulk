import React from "react";

interface IButton {
    text: string;
    className?: string;
}

const Button: React.FC<IButton> = ({ text, className }) => {
    return (
        <div
            className={`bg-primary-purple rounded-xl cursor-pointer opacity-90 hover:opacity-100 ${className}`}
        >
            {text}
        </div>
    );
};

export default Button;
