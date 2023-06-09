import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const DropdownRightContent = () => {
    return (
        <div className="w-4/12 border-l-[1px] border-primary-border_button pl-10">
            <div className="text-[25px] font-medium">Vulk documentation</div>
            <div className="text-text-medium my-5">
                Learn more about how you can get the most from the Vulk
                component library.
            </div>
            <div className="group/dropdown text-primary-purple flex items-center cursor-pointer font-medium text-[18px]">
                <a href={"#"} className="group mr-5">
                    Learn More
                </a>
                <span className="group-hover/dropdown:translate-x-2 transition-all duration-300">
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
            </div>
        </div>
    );
};

export default DropdownRightContent;
