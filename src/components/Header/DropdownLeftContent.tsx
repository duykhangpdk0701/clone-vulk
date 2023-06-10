import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface IDropdownLeftContent {
    title: string;
    text: string;
    linkText: string;
    link?: string;
    itemTitle1?: string;
    itemArray1: [string, string, string, string];
    itemTitle2?: string;
    itemArray2: [string, string, string, string];
}

const DropdownLeftContent: React.FC<IDropdownLeftContent> = ({
    title,
    text,
    linkText,
    link = "#",
    itemTitle1,
    itemArray1,
    itemTitle2,
    itemArray2,
}) => {
    return (
        <div className="w-8/12 flex text-[16px]">
            <div className="w-6/12 pr-10">
                {" "}
                <div className="text-[25px] font-medium">{title}</div>
                <div className="text-text-medium my-5">{text}</div>
                <div className="group/dropdown text-primary-purple flex items-center cursor-pointer font-medium text-[18px]">
                    <a href={link} className="group mr-5">
                        {linkText}
                    </a>
                    <span className="group-hover/dropdown:translate-x-2 transition-all duration-300">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </div>
            </div>
            <div className="w-6/12 flex flex-wrap">
                <div className="w-full flex h-[30px]">
                    <div className="w-6/12 font-medium">{itemTitle1}</div>
                    <div className="w-6/12 font-medium">{itemTitle2}</div>
                </div>
                <div className="w-6/12 text-text-medium">
                    {itemArray1.map((item) => {
                        return (
                            <div className="group/item relative mb-1 cursor-pointer">
                                <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all">
                                    {item}
                                </div>
                                <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                            </div>
                        );
                    })}
                </div>
                <div className="w-6/12 text-text-medium">
                    {itemArray2.map((item) => {
                        return (
                            <div className="group/item relative mb-1 cursor-pointer">
                                <div className="group-hover/item:text-primary-purple group-hover/item:translate-x-[10px] transition-all">
                                    {item}
                                </div>
                                <div className="absolute top-1/4 left-0 h-0 group-hover/item:h-1/2 w-[3px] bg-primary-purple transition-all"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DropdownLeftContent;
