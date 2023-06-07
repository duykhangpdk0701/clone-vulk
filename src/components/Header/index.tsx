import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { Button } from "../Common";
import Logo from "../../assets/logo.svg";

const Header = () => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [fixedHeader, setFixedHeader] = useState<boolean>(false);

    const onScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY > 100) {
            setFixedHeader(true);
        } else {
            setFixedHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={`fixed ${fixedHeader ? 'bg-bg-section shadow-xl' : 'bg-transparent'} left-0 w-screen top-0 bg-section z-50 overflow-x-hidden transition-all`}>
            <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4">
                <div className="flex justify-between items-center w-5/12">
                    <img src={Logo} alt="" className="h-10 w-10" />
                    <div className="group cursor-pointer hover:text-primary-purple relative">
                        <span className="mr-2 font-semibold font-mono">
                            Product
                        </span>
                        <span className="inline-block group-hover:rotate-180 transition-all">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                        <div className="group-hover:w-1/3 absolute w-0 -top-1 left-0 h-1 rounded bg-primary-purple transition-all"></div>
                    </div>
                    <div className="group cursor-pointer hover:text-primary-purple relative">
                        <span className="mr-2 font-semibold font-mono">
                            Pricing
                        </span>
                        <div className="group-hover:w-1/3 absolute w-0 -top-1 left-0 h-1 rounded bg-primary-purple transition-all"></div>
                    </div>
                    <div className="group cursor-pointer hover:text-primary-purple relative">
                        <span className="mr-2 font-semibold font-mono">
                            Company
                        </span>
                        <span className="inline-block group-hover:rotate-180 transition-all">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                        <div className="group-hover:w-1/3 absolute w-0 -top-1 left-0 h-1 rounded bg-primary-purple transition-all"></div>
                    </div>
                    <div className="group cursor-pointer hover:text-primary-purple relative">
                        <span className="mr-2 font-semibold font-mono">
                            Resources
                        </span>
                        <span className="inline-block group-hover:rotate-180 transition-all">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                        <div className="group-hover:w-1/3 absolute w-0 -top-1 left-0 h-1 rounded bg-primary-purple transition-all"></div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div
                        className="h-3 bg-bg-switch mr-10 w-[30px] rounded-lg relative cursor-pointer"
                        onClick={() => setDarkTheme(!darkTheme)}
                    >
                        <div
                            className={`flex items-center shadow-md justify-center border-text-light rounded-full w-full h-[30px] absolute top-1/2 -left-1/2 -translate-y-1/2 transition-all ${
                                darkTheme
                                    ? "translate-x-full rotate-180 bg-primary-purple"
                                    : "bg-primary-white"
                            }`}
                        >
                            <span className={`${darkTheme && 'text-primary-white rotate-180'}`}>
                                { darkTheme ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                            </span>
                        </div>
                    </div>
                    <Button type="primary">Vulk</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
