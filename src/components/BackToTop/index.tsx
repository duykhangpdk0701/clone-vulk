import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

const BackToTop = () => {
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const onScroll = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        const winScroll = document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = winScroll / height;

        setScrollTop(scrolled);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <div
            className={`bottom-10 right-10 h-12 w-12 text-primary-purple cursor-pointer animate-appear ${
                isVisible ? "md:fixed" : "hidden"
            }`}
            onClick={scrollToTop}
        >
            <svg
                fill="none"
                className="progress-circle svg-content"
                width="100%"
                height="100%"
                viewBox="-1 -1 102 102"
            >
                <path
                    stroke="#7703fc"
                    stroke-width="4"
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        transition: "stroke-dashoffset 10ms linear 0s;",
                        strokeDasharray: "307.919, 307.919",
                        strokeDashoffset: 308 - 308 * scrollTop,
                    }}
                ></path>
            </svg>
            <span className="absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]">
                <FontAwesomeIcon icon={faChevronUp} />
            </span>
        </div>
    );
};

export default BackToTop;
