import { FC, ReactNode } from "react";

interface IButton {
    children: ReactNode;
    type?: "primary" | "oulined";
    className?: string;
}

export const Button: FC<IButton> = (props) => {
    const { children, type, className } = props;
    return (
        <button
            className={`button ${
                type == "primary" ? "button--primary" : ""
            } ${className}`}
        >
            {children}
        </button>
    );
};
