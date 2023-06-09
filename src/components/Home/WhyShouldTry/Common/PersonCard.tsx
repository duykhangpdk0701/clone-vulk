import { FC } from "react";

import Avatar from "../../../Common/Avatar";
import { Card } from "@/components/Common/Card";

interface IPersonCard {
    name: string;
    posision: string;
    desc: string;
    imgUrl: string;
}

const PersonCard: FC<IPersonCard> = (props) => {
    const { name, posision, desc, imgUrl } = props;

    return (
        <Card className="p-8 w-[480px] min-w-[480px] my-6 mx-3 dark:bg-bg-dark-card dark:border-bg-dark-border">
            {/* card head */}
            <div className="flex mb-4">
                <Avatar src={imgUrl} alt={name} />
                <div className="ml-3">
                    <p className="text-[14.4px] font-semibold font-mono dark:text-text-dark-title">
                        {name}
                    </p>
                    <p className="text-[14.4px] text-text-light">{posision}</p>
                </div>
            </div>

            <div>
                <p className="text-[15.2px] text-text-medium">{desc}</p>
            </div>
        </Card>
    );
};

export default PersonCard;
