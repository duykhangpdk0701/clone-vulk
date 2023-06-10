import { SwipeableDrawer } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import {
    setCloseAction,
    setOpenAction,
    setValueAction,
} from "@/context/slice/menuSlice";

import Logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
    faChevronDown,
    faMoon,
    faSun,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useStore } from "@/App";
import { Button } from "../Common";
import DropdownLeftContent from "./DropdownLeftContent";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    const dispatch = useAppDispatch();

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value > 0 ? (
                <div className="flex justify-end h-[70px] items-center px-5">
                    <FontAwesomeIcon
                        className="text-2xl cursor-pointer"
                        icon={faArrowLeft}
                        onClick={() => {
                            dispatch(setValueAction(0));
                        }}
                    />
                </div>
            ) : (
                <div className="flex justify-between items-center h-[70px] px-5">
                    <img src={Logo} alt="vulk" className="h-10 w-10 " />

                    <FontAwesomeIcon
                        icon={faXmark}
                        className="text-2xl cursor-pointer"
                        onClick={() => dispatch(setCloseAction())}
                    />
                </div>
            )}

            {children}
        </div>
    );
}

const SpHeader = () => {
    const open = useAppSelector((state) => state.menu.isOpen);
    const value = useAppSelector((state) => state.menu.value);
    const { darkTheme, handleOnChagneTheme } = useStore();
    const dispatch = useAppDispatch();

    return (
        <SwipeableDrawer
            anchor="top"
            open={open}
            onClose={() => dispatch(setCloseAction())}
            onOpen={() => dispatch(setOpenAction())}
        >
            <div className="">
                <TabPanel value={value} index={0}>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <div className="group relative">
                            <div
                                className="cursor-pointer h-full flex items-center group-hover:text-primary-purple"
                                onClick={() => dispatch(setValueAction(1))}
                            >
                                <div className="group-hover:w-1/3 absolute w-0  top-0 left-0 h-1 rounded bg-primary-purple transition-all"></div>
                                <span className="mr-2 font-semibold font-mono">
                                    Pricing
                                </span>
                                <span className="inline-block group-hover:-rotate-90 transition-all">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="cursor-pointer h-full flex items-center group-hover:text-primary-purple">
                                <div className="group-hover:w-1/3 absolute w-0  top-0 left-0 h-1 rounded bg-primary-purple transition-all"></div>
                                <span className="mr-2 font-semibold font-mono">
                                    Pricing
                                </span>
                            </div>
                        </div>

                        <div className="group relative">
                            <div
                                className="cursor-pointer h-full flex items-center group-hover:text-primary-purple"
                                onClick={() => dispatch(setValueAction(2))}
                            >
                                <span className="mr-2 font-semibold font-mono">
                                    Pricing
                                </span>
                                <span className="inline-block group-hover:-rotate-90 transition-all">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                                <div className="group-hover:w-1/3 absolute w-0  top-0 left-0 h-1 rounded bg-primary-purple transition-all"></div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div
                                className="cursor-pointer h-full flex items-center group-hover:text-primary-purple"
                                onClick={() => dispatch(setValueAction(3))}
                            >
                                <span className="mr-2 font-semibold font-mono">
                                    Pricing
                                </span>
                                <span className="inline-block group-hover:-rotate-90 transition-all">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                                <div className="group-hover:w-1/3 absolute w-0  top-0 left-0 h-1 rounded bg-primary-purple transition-all"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-5 mt-12 mb-12 px-5">
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
                                        darkTheme &&
                                        "text-primary-white rotate-180"
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
                        <Button fullWidth type="primary">
                            Vulk
                        </Button>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <h2 className="text-[25px] font-medium text-center mb-3">
                        Resources
                    </h2>
                    <p className="text-center text-text-medium text-base mb-2 px-5">
                        Read our latest in business news, ecommerce, and data
                        trends. Explore our customer resources
                    </p>
                    <div className="mb-5 group/dropdown text-primary-purple flex items-center justify-center cursor-pointer font-medium text-base">
                        <a href="#" className="group mr-5">
                            Theme colors overview
                        </a>
                        <span className="group-hover/dropdown:translate-x-2 transition-all duration-300">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="font-medium">DEMOS</div>

                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col items-center mb-5 gap-1">
                        <div className="font-medium">DEMOS</div>

                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <h2 className="text-[25px] font-medium text-center mb-3">
                        Resources
                    </h2>
                    <p className="text-center text-text-medium text-base mb-2 px-5">
                        Read our latest in business news, ecommerce, and data
                        trends. Explore our customer resources
                    </p>
                    <div className="mb-5 group/dropdown text-primary-purple flex items-center justify-center cursor-pointer font-medium text-base">
                        <a href="#" className="group mr-5">
                            Theme colors overview
                        </a>
                        <span className="group-hover/dropdown:translate-x-2 transition-all duration-300">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="font-medium">DEMOS</div>

                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col items-center mb-5 gap-1">
                        <div className="font-medium">DEMOS</div>

                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <h2 className="text-[25px] font-medium text-center mb-3">
                        Resources
                    </h2>
                    <p className="text-center text-text-medium text-base mb-2 px-5">
                        Read our latest in business news, ecommerce, and data
                        trends. Explore our customer resources
                    </p>
                    <div className="mb-5 group/dropdown text-primary-purple flex items-center justify-center cursor-pointer font-medium text-base">
                        <a href="#" className="group mr-5">
                            Theme colors overview
                        </a>
                        <span className="group-hover/dropdown:translate-x-2 transition-all duration-300">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="font-medium">DEMOS</div>

                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col items-center mb-5 gap-1">
                        <div className="font-medium">DEMOS</div>

                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                        <div className="group/item relative mb-1 cursor-pointer w-fit">
                            <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all text-sm text-text-medium">
                                Landing page
                            </div>
                            <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                        </div>
                    </div>
                </TabPanel>
            </div>
        </SwipeableDrawer>
    );
};

export default SpHeader;
