import React from "react";

interface IButton {
    text: string;
    className?: string;
    primary?: boolean;
}

const Button: React.FC<IButton> = ({ text, className, primary }) => {
    return (
        <div
            className={`${primary ? 'bg-primary-purple' : ''} rounded-xl cursor-pointer opacity-90 hover:opacity-100 ${className}`}
        >
            {text}
        </div>
    );
};

export default Button;
