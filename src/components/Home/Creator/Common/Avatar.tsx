import React from "react";

interface IAvatar {
    img: string;
    className?: string;
}

const Avatar: React.FC<IAvatar> = ({ img, className }) => {
    return (
        <div
            className={`group w-fit relative ${className}`}
        >
            <img
                src={img}
                className="relative z-10 object-cover rounded-full w-16 h-16 group-hover:scale-110 transition-all"
            />
            <div className="hidden group-hover:block z-0 absolute top-[-170px] left-1/2 translate-x-[-50%] w-[250px] text-[14px] bg-primary-white border-2 border-primary-border_input rounded-xl p-5 shadow-xl animate-appear">
                <div className="flex mb-3">
                    <img
                        src={img}
                        className={`relative z-10 object-cover rounded-full w-10 h-10`}
                    />
                    <div className="ml-4">
                        <div className="font-bold">Mila Jensen</div>
                        <div className="text-text-light">Influencer</div>
                    </div>
                </div>
                <div className="text-text-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>
            <div className="hidden md:block z-0 absolute rounded-full w-full h-full top-0 left-0 border-2 border-primary-purple scale-50 group-hover:scale-150 transition-all delay-75"></div>
        </div>
    );
};

export default Avatar;
