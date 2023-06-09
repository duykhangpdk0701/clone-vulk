import Avatar from "./Common/Avatar";
import Person from "@/assets/img/avatar/12.jpg";
import Person2 from "@/assets/img/avatar/14.jpg";
import Person3 from "@/assets/img/avatar/17.jpg";
import Person4 from "@/assets/img/avatar/19.jpg";
import Person5 from "@/assets/img/avatar/21.jpg";
import { Button } from "@/components/Common";
import Wave from "@/components/Common/Wave";

const Creator = () => {
    return (
        <section className="">
            <Wave
                color={[
                    "rgba(245,246,250,0.8)",
                    "rgba(245,246,250,0.6)",
                    "rgba(245,246,250,0.4)",
                    "rgba(245,246,250,0.2)",
                ]}
            />
            <div className="bg-bg-section2">
                <div className="max-w-[1200px] mx-auto py-20 px-8 md:px-0">
                    <div className="text-center p-12">
                        <span className="text-xl font-bold leading-none text-gradient">
                            Meet our Creators
                        </span>
                        <h2 className="text-[32px] font-bold font-mono leading-tight">
                            Our Featured Creators
                        </h2>
                    </div>
                    <div className="max-w-[780px] mx-auto">
                        <div className="flex flex-col md:flex-row items-center mb-10">
                            <p className="text-text-medium md:w-1/2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Idem iste, inquam, de voluptate
                                quid sentit? Hanc quoque iucunditatem, si vis,
                                transfer in animum; Erat enim Polemonis. Apparet
                                statim, quae sint officia, quae actiones. Ita
                                prorsus, inquam.
                            </p>
                            <p className="text-text-medium md:w-1/2 mt-5 md:mt-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Idem iste, inquam, de voluptate
                                quid sentit? Hanc quoque iucunditatem, si vis,
                                transfer in animum; Erat enim Polemonis. Apparet
                                statim, quae sint officia, quae actiones. Ita
                                prorsus, inquam.
                            </p>
                        </div>
                        <div className="">
                            <div className="mb-10 flex justify-between md:justify-evenly">
                                <Avatar img={Person} />
                                <Avatar img={Person2} />
                                <Avatar img={Person3} />
                                <Avatar img={Person4} />
                                <Avatar img={Person5} />
                            </div>
                            <div className="text-center">
                                <Button
                                    type="primary"
                                    className="min-w-[140px]"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Creator;
