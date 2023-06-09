import communityData from "./dataCommunity";
import { Icon } from "@iconify/react";

const ListCommunity = () => {
    return (
        <div className="flex flex-wrap">
            {communityData.map((item) => (
                <dl className="p-3 w-full md:w-2/4 lg:w-1/4">
                    <div className="py-4">
                        <div
                            className="w-8 h-8 mb-3 flex justify-center items-center rounded-lg"
                            style={{ backgroundColor: item.iconBgColor }}
                        >
                            <Icon color={item.color} icon={item.icon} />
                        </div>
                        <dt className="text-base font-semibold font-mono mb-2">
                            {item.title}
                        </dt>
                        <dd className="text-sm text-text-medium leading-normal">
                            {item.desc}
                        </dd>
                    </div>
                </dl>
            ))}
        </div>
    );
};

export default ListCommunity;
