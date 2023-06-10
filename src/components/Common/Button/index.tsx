import { FC, ReactNode } from "react";

interface IButton {
    children: ReactNode;
    type?: "primary" | "oulined";
    className?: string;
    fullWidth?: boolean;
    handleClick?: () => void;
}

export const Button: FC<IButton> = (props) => {
    const { children, type, className, fullWidth, handleClick } = props;
    return (
        <button
            className={`button ${
                type == "primary" ? "button--primary " : "dark:bg-bg-dark-secondary dark:text-text-dark-title"
            } ${className}`}
            style={{ width: fullWidth ? "100%" : "initial" }}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
