import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { Button } from "../Common";
import Logo from "../../assets/logo.svg";
import DropdownLeftContent from "./DropdownLeftContent";
import DropdownRightContent from "./DropdownRightContent";
import DropdownRightContentImage from "./DropdownRightContentImage";
import { useStore } from "@/App";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { setCloseAction, setOpenAction } from "@/context/slice/menuSlice";

const Header = () => {
    const { darkTheme, handleOnChagneTheme } = useStore();
    const [fixedHeader, setFixedHeader] = useState<boolean>(false);
    const isMenuOpen = useAppSelector((state) => state.menu.isOpen);
    const dispatch = useAppDispatch();

    const onScroll = () => {
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
        <div
            className={`fixed ${
                fixedHeader ? "bg-bg-section shadow-xl" : "bg-transparent"
            } dark:text-text-light dark:bg-bg-dark-third left-0 w-screen top-0 bg-section z-50 overflow-x-hidden transition-all border-b-[1px] border-primary-border_button dark:border-bg-dark-border`}
        >
            <div className="hidden md:flex max-w-[1240px] px-5 mx-auto justify-between items-center h-[80px]">
                <div className="flex justify-between gap-5 items-center w-5/12 h-full">
                    <img src={Logo} alt="" className="h-10 w-10 " />
                    <div className="group relative h-full">
                        <div className="cursor-pointer h-full flex items-center group-hover:text-primary-purple">
                            <span className="mr-2 font-semibold font-mono">
                                Product
                            </span>
                            <span className="inline-block group-hover:rotate-180 transition-all">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </div>
                        <div className="group-hover:w-1/3 absolute w-0 top-5 left-0 h-1 rounded bg-primary-purple transition-all"></div>
                        <div className="dark:bg-bg-dark-third hidden group-hover:block bg-bg-section fixed left-0 top-[81px] w-full shadow-xl animate-appear">
                            <div className="max-w-[1200px] mx-auto flex justify-between items-center pt-10 pb-20 text-[18px]">
                                <DropdownLeftContent
                                    title="Awesome Features"
                                    text="Vulk is a Vue 3 UI kit that makes it easy to build gorgeous interfaces."
                                    linkText="Theme colors overview"
                                    itemTitle1="DEMOS"
                                    itemArray1={[
                                        "Landing pages",
                                        "About pages",
                                        "Pricing pages",
                                        "Profile pages",
                                    ]}
                                    itemArray2={[
                                        "Blog pages",
                                        "Auth pages",
                                        "Layouts",
                                        "Components",
                                    ]}
                                />
                                <DropdownRightContent />
                            </div>
                        </div>
                    </div>
                    <div className="group relative h-full">
                        <div className="cursor-pointer h-full flex items-center group-hover:text-primary-purple">
                            <span className="mr-2 font-semibold font-mono">
                                Pricing
                            </span>
                            <div className="group-hover:w-1/3 absolute w-0  top-5 left-0 h-1 rounded bg-primary-purple transition-all"></div>
                        </div>
                    </div>
                    <div className="group relative h-full">
                        <div className="cursor-pointer h-full flex items-center group-hover:text-primary-purple">
                            <span className="mr-2 font-semibold font-mono">
                                Company
                            </span>
                            <span className="inline-block group-hover:rotate-180 transition-all">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </div>
                        <div className="group-hover:w-1/3 absolute w-0  top-5 left-0 h-1 rounded bg-primary-purple transition-all"></div>
                        <div className="dark:bg-bg-dark-third hidden group-hover:block bg-bg-section fixed left-0 top-[81px] w-full shadow-xl animate-appear">
                            <div className="max-w-[1200px] mx-auto flex justify-between items-center pt-10 pb-20 text-[18px]">
                                <DropdownLeftContent
                                    title="We build the future"
                                    text="Vulk is a Vue 3 UI kit that makes it easy to build gorgeous interfaces."
                                    linkText="More about us"
                                    itemTitle1="WHO WE ARE"
                                    itemTitle2="REACH US"
                                    itemArray1={[
                                        "Meet the team",
                                        "Work with us",
                                        "Our values",
                                        "Hire us",
                                    ]}
                                    itemArray2={[
                                        "Contact",
                                        "Help Center",
                                        "Support",
                                        "Terms",
                                    ]}
                                />
                                <DropdownRightContentImage />
                            </div>
                        </div>
                    </div>
                    <div className="group relative h-full flex">
                        <div className="cursor-pointer h-full flex items-center group-hover:text-primary-purple">
                            <span className="mr-2 font-semibold font-mono">
                                Resources
                            </span>
                            <span className="inline-block group-hover:rotate-180 transition-all">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </div>
                        <div className="group-hover:w-1/3 absolute w-0  top-5 left-0 h-1 rounded bg-primary-purple transition-all"></div>
                        <div className="dark:bg-bg-dark-third hidden group-hover:block bg-bg-section fixed left-0 top-[81px] w-full shadow-xl animate-appear">
                            <div className="max-w-[1200px] mx-auto flex justify-between items-center pt-10 pb-20 text-[18px]">
                                <DropdownLeftContent
                                    title="Resources"
                                    text="Read our latest in business news, ecommerce, and data trends. Explore our customer resources."
                                    linkText="Open component library"
                                    itemTitle1="LEARN"
                                    itemTitle2="BLOCKS"
                                    itemArray1={[
                                        "Components",
                                        "Colors",
                                        "Utilities",
                                        "Plugins",
                                    ]}
                                    itemArray2={[
                                        "Features",
                                        "Content",
                                        "Team",
                                        "Testimonials",
                                    ]}
                                />
                                <DropdownRightContentImage />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div
                        className="h-3 bg-bg-switch mr-10 w-[30px] rounded-lg relative cursor-pointer"
                        onClick={handleOnChagneTheme}
                    >
                        <div
                            className={`flex items-center shadow-md justify-center border-text-light rounded-full w-full h-[30px] absolute top-1/2 -left-1/2 -translate-y-1/2 transition-all ${
                                darkTheme
                                    ? "translate-x-full rotate-180 bg-primary-purple"
                                    : "bg-primary-white"
                            }`}
                        >
                            <span
                                className={`${
                                    darkTheme && "text-primary-white rotate-180"
                                }`}
                            >
                                {darkTheme ? (
                                    <FontAwesomeIcon icon={faMoon} />
                                ) : (
                                    <FontAwesomeIcon icon={faSun} />
                                )}
                            </span>
                        </div>
                    </div>
                    <Button type="primary">Vulk</Button>
                </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex justify-between items-center h-[80px] px-8">
                <img src={Logo} alt="" className="h-10 w-10 " />
                <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faBars}
                    onClick={() => {
                        console.log("hello my name is Khang");
                        dispatch(
                            isMenuOpen ? setCloseAction() : setOpenAction()
                        );
                    }}
                />
            </div>
        </div>
    );
};

export default Header;
