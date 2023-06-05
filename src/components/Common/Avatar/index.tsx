import { FC } from "react";

interface IAvatar {
    alt?: string;
    src: string;
    className?: string;
}

const Avatar: FC<IAvatar> = (props) => {
    const { src, alt, className } = props;
    return (
        <img
            src={src}
            alt={alt}
            className={`object-cover rounded-full w-12 h-12 ${className}`}
        />
    );
};

export default Avatar;
