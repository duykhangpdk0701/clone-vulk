import toolData from "./ToolData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ListTool = () => {
    return (
        <div className="flex flex-wrap">
            {toolData.map((item) => (
                <div className="w-2/4 p-3">
                    <div className="py-2">
                        <h3 className="font-semibold mb-2 font-base font-mono">
                            {item.title}
                        </h3>
                        <p className="text-[15.2px] text-text-medium leading-normal">
                            {item.desc}
                        </p>
                        <a href="#" className="action-link mt-2 text-[15.2px]">
                            <span className="mr-3">Learn More</span>
                            <FontAwesomeIcon
                                className="font-light"
                                icon={faArrowRight}
                            />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListTool;
