import { FC, ReactNode } from "react";

interface IButton {
    children: ReactNode;
    type?: "primary" | "oulined";
    className?: string;
    fullWidth?: boolean;
}

export const Button: FC<IButton> = (props) => {
    const { children, type, className, fullWidth } = props;
    return (
        <button
            className={`button ${
                type == "primary" ? "button--primary" : ""
            } ${className}`}
            style={{ width: fullWidth ? "100%" : "initial" }}
        >
            {children}
        </button>
    );
};
