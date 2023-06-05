import { FC } from "react";
import { Card } from "../../../Common";
import Avatar from "../../../Common/Avatar";

interface IPersonCard {
    name: string;
    posision: string;
    desc: string;
    imgUrl: string;
}

const PersonCard: FC<IPersonCard> = (props) => {
    const { name, posision, desc, imgUrl } = props;

    return (
        <Card className="p-8 w-[480px] min-w-[480px] my-6 mx-3">
            {/* card head */}
            <div className="flex mb-4">
                <Avatar src={imgUrl} alt={name} />
                <div className="ml-3">
                    <p className="text-[14.4px] font-semibold font-mono">
                        {name}
                    </p>
                    <p className="text-[14.4px]">{posision}</p>
                </div>
            </div>

            <div>
                <p className="text-[15.2px]">{desc}</p>
            </div>
        </Card>
    );
};

export default PersonCard;
