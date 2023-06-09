import { FC } from "react";

interface IFaceElement {
    imgUrl: string;
    minHeight?: number;
    className?: string;
}

export const FaceElement: FC<IFaceElement> = (props) => {
    const { imgUrl, minHeight, className } = props;
    return (
        <div
            className={`rounded-3xl w-full bg-center bg-cover ${className}`}
            style={{
                backgroundImage: `url(${imgUrl})`,
                minHeight,
            }}
        ></div>
    );
};
