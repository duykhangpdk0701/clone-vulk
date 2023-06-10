import React from "react";

interface IWave {
    color: string[];
}

const Wave: React.FC<IWave> = ({ color }) => {

    return (
        <div className="animated-waves dark:bg-bg-dark-secondary">
            <svg
                className="waves wave-footer-dark h-[120px] w-full"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shape-rendering="auto"
            >
                <defs>
                    <path
                        id="a-wave-1"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    ></path>
                </defs>
                <g className="parallax">
                    <use
                        className="animate-wave"
                        xlinkHref="#a-wave-1"
                        x="48"
                        y="0"
                        fill={color[0]}
                    ></use>
                    <use
                        className="animate-wave"
                        xlinkHref="#a-wave-1"
                        x="48"
                        y="3"
                        fill={color[1]}
                    ></use>
                    <use
                        className="animate-wave"
                        xlinkHref="#a-wave-1"
                        x="48"
                        y="5"
                        fill={color[2]}
                    ></use>
                    <use
                        className="animate-wave"
                        xlinkHref="#a-wave-1"
                        x="48"
                        y="7"
                        fill={color[3]}
                    ></use>
                </g>
            </svg>
        </div>
    );
};

export default Wave;
