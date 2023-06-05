import { FC, ReactNode } from "react";

interface ICard {
    children: ReactNode;
    className?: string;
}

export const Card: FC<ICard> = (props) => {
    const { children, className } = props;

    return (
        <div
            className={`shadow-[0px_8px_16px_-2px_rgba(10,10,10,0.1),0_0_0_1px_rgba(10,10,10,0.02)] rounded-xl bg-white border border-[#e5e5e5] ${className}`}
        >
            {children}
        </div>
    );
};
