import Avatar from "./Common/Avatar";
import Person from "@/assets/img/avatar/12.jpg";
import Person2 from "@/assets/img/avatar/14.jpg";
import Person3 from "@/assets/img/avatar/17.jpg";
import Person4 from "@/assets/img/avatar/19.jpg";
import Person5 from "@/assets/img/avatar/21.jpg";
import { Button } from "@/components/Common";

const Creator = () => {
    return (
        <section className="bg-bg-section2">
            <div className="max-w-[1200px] mx-auto py-20">
                <div className="text-center p-12">
                    <span className="text-xl font-bold leading-none text-gradient">
                        Meet our Creators
                    </span>
                    <h2 className="text-[32px] font-bold font-mono leading-tight">
                        Our Featured Creators
                    </h2>
                </div>
                <div className="max-w-[780px] mx-auto">
                    <div className="flex flex-col md:flex-row mb-10">
                        <p className="text-text-medium w-full md:w-1/2 px-6 py-3 md:px-0 md:py-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Idem iste, inquam, de voluptate quid sentit?
                            Hanc quoque iucunditatem, si vis, transfer in
                            animum; Erat enim Polemonis. Apparet statim, quae
                            sint officia, quae actiones. Ita prorsus, inquam.
                        </p>
                        <p className="text-text-medium w-full md:w-1/2 px-6 py-3 md:px-0 md:py-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Idem iste, inquam, de voluptate quid sentit?
                            Hanc quoque iucunditatem, si vis, transfer in
                            animum; Erat enim Polemonis. Apparet statim, quae
                            sint officia, quae actiones. Ita prorsus, inquam.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="mb-10 w-full flex justify-evenly">
                            <Avatar img={Person} />
                            <Avatar img={Person2} />
                            <Avatar img={Person3} />
                            <Avatar img={Person4} />
                            <Avatar img={Person5} />
                        </div>
                        <Button type="primary" className="border-2 p-2">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Creator;
