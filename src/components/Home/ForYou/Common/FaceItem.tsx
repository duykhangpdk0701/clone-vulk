import { FC } from "react";

interface IFaceItem {
    className?: string;
    width?: number;
    height?: number;
    imgUrl: string;
    alt?: string;
}

const FaceItem: FC<IFaceItem> = (props) => {
    const { className, width, height, imgUrl, alt } = props;

    return (
        <div className={` absolute z-0 ${className}`}>
            <img
                className="rounded-[1.25rem] object-cover"
                src={imgUrl}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    );
};

export default FaceItem;
