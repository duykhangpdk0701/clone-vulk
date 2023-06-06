import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface IContentContainer {
    subTitle: string;
    title: string;
    text: string;
    img: string;
    link?: string;
    imageRight?: boolean;
    hideBubble?: boolean;
}

const ContentContainer:React.FC<IContentContainer> = ({ subTitle, title, text, img, link = '#', imageRight, hideBubble}) => {
    return (
        <div className={`flex items-center justify-between ${imageRight ? 'flex-row-reverse' : ''}`}>
            <div className="w-5/12">
                <div className="text-gradient font-bold mb-2">{subTitle}</div>
                <div className="font-mono font-bold text-[40px] leading-[45px] mb-6">
                    {title}
                </div>
                <div className="text-[18px] leading-[28px] mb-5">
                    {text}
                </div>
                <div className="group text-primary-purple flex items-center cursor-pointer font-medium text-[18px]">
                    <a href={link} className="group mr-5">
                        Learn More
                    </a>
                    <span className="group-hover:translate-x-2 transition-all duration-300">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </div>
            </div>
            <div className="w-6/12 relative">
                <img
                    src={img}
                    alt=""
                    className="relative h-full w-full z-10"
                />
                <div className={`z-0 absolute left-0 top-0 img-morph bg-primary-purple_light w-[350px] h-[350px] ${hideBubble ? 'hidden' : ''}`}></div>
            </div>
        </div>
    );
};

export default ContentContainer;
