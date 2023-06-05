import PersonCard from "./Common/PersonCard";
import Marquee from "react-fast-marquee";

import { Fragment } from "react";
import dataPerson from "./dataPerson";

const WhyShouldTrySection = () => {
    return (
        <section>
            <div className="text-center p-12">
                <span className="text-xl font-bold leading-none text-gradient">
                    Why you should try our Optimization solution
                </span>
                <h2 className="text-[32px] font-bold font-mono leading-tight">
                    Three reasons you’ll love our solution
                </h2>
            </div>

            <div>
                <div>
                    <Marquee>
                        {dataPerson.map((item, index) => (
                            <Fragment key={index}>
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
                            </Fragment>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default WhyShouldTrySection;
