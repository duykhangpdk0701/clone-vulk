import { FC } from "react";

interface IFaceElement {
    imgUrl: string;
    minHeight?: number;
    className?: string;
}

export const FaceElement: FC<IFaceElement> = (props) => {
    const { imgUrl, minHeight, className } = props;
    return (
        <div className={`px-3 flex items-center ${className}`}>
            <div
                className="min-h-[280px] rounded-3xl w-full bg-center bg-cover"
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    minHeight,
                }}
            ></div>
        </div>
    );
};
