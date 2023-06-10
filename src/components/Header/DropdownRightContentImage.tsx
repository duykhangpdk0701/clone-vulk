import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "../../assets/img/nav-tile.jpeg";

const DropdownRightContentImage = () => {
    return (
        <div className="w-4/12 border-l-[1px] border-primary-border_button pl-10 z-40 dark:border-bg-dark-border">
            <div className="relative">
                <img
                    src={Image}
                    alt=""
                    className="rounded-3xl z-40 w-full relative"
                />
                <div className="text-[15px] absolute -translate-x-1/2 z-50 left-1/2 -bottom-8 bg-bg-section rounded-xl shadow-lg p-5 w-10/12">
                    <p className="text-text-medium">
                        Get started and discover tips to grow your business and
                        increase your income.
                    </p>
                    <div className="group/dropdown text-primary-purple flex items-center cursor-pointer font-medium text-[18px]">
                        <a href={"#"} className="group mr-5">
                            Learn more
                        </a>
                        <span className="group-hover/dropdown:translate-x-2 transition-all duration-300">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropdownRightContentImage;
