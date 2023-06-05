import PersonCard from "./Common/PersonCard";
import { ReactFragment } from "react";
import Marquee from "react-fast-marquee";

import Person1Img from "../../../assets/img/avatar/person1.jpg";

const data = [
    {
        name: "Nelly Olsen",
        position: "Mike Williams Founder @Covenant",
        desc: "Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we’ve ever had before.",
        imgUrl: Person1Img,
    },

    {
        name: "Nelly Olsen",
        position: "Mike Williams Founder @Covenant",
        desc: "Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we’ve ever had before.",
        imgUrl: Person1Img,
    },

    {
        name: "Nelly Olsen",
        position: "Mike Williams Founder @Covenant",
        desc: "Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we’ve ever had before.",
        imgUrl: Person1Img,
    },

    {
        name: "Nelly Olsen",
        position: "Mike Williams Founder @Covenant",
        desc: "Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we’ve ever had before.",
        imgUrl: Person1Img,
    },
];

const WhyShouldTrySection = () => {
    return (
        <section>
            <div className="text-center p-12">
                <span className="text-xl leading-none">
                    Why you should try our Optimization solution
                </span>
                <h2 className="text-[32px] font-bold font-mono leading-tight">
                    Three reasons you’ll love our solution
                </h2>
            </div>

            <div>
                <div>
                    <Marquee>
                        {data.map((item, index) => (
                            <>
                                <PersonCard
                                    name={item.name}
                                    desc={item.desc}
                                    posision={item.position}
                                    key={index}
                                    imgUrl={item.imgUrl}
                                />

                                <PersonCard
                                    name={item.name}
                                    desc={item.desc}
                                    posision={item.position}
                                    key={index}
                                    imgUrl={item.imgUrl}
                                />
                            </>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default WhyShouldTrySection;
