import { useState } from "react";
import ReasonContent from "./ReasonContent";
import Img from "../../../assets/illustrations/creator-highlight-1.png";
import Img2 from "../../../assets/illustrations/creator-highlight-2.png";
import Img3 from "../../../assets/illustrations/creator-highlight-3.png";
import { Button } from "@/components/Common";

const Reasons = () => {
    const [show, setShow] = useState<string>("discussions");

    return (
        <div className="dark:bg-bg-dark-secondary text-text-dark-title">
            <div className="max-w-[1200px] min-h-[920px] md:min-h-[1100px] mx-auto py-20 ">
                <div className="text-center md:p-12">
                    <span className="text-xl font-bold leading-none text-gradient">
                        Why you should try our Optimization solution
                    </span>
                    <h2 className="text-[32px] font-bold font-mono leading-tight">
                        Three reasons you’ll love our solution
                    </h2>
                </div>
                <div className="max-w-[780px] mx-auto px-8">
                    <div className="flex flex-col md:flex-row items-center md:justify-evenly mb-6 mt-10 md:mt-0 min-h-[54px]">
                        <Button
                            className={`min-w-[200px] mb-4 border-2 ${
                                show == "discussions" ?
                                "border-primary-purple text-primary-purple" : 'dark:border-bg-dark-border'
                            }`}
                            handleClick={() => setShow("discussions")}
                        >
                            Discussions
                        </Button>
                        <Button
                            className={`min-w-[200px] mb-4 border-2 ${
                                show == "privateSpaces" ?
                                "border-primary-purple text-primary-purple" : 'dark:border-bg-dark-border'
                            }`}
                            handleClick={() => setShow("privateSpaces")}
                        >
                            Private Spaces
                        </Button>
                        <Button
                            className={`min-w-[200px] mb-4 border-2 ${
                                show == "persionalReports" ?
                                "border-primary-purple text-primary-purple" : 'dark:border-bg-dark-border'
                            }`}
                            handleClick={() => setShow("persionalReports")}
                        >
                            Personal Reports
                        </Button>
                    </div>
                    {show == "discussions" && (
                        <ReasonContent
                            text={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zenonis est, inquam, hoc Stoici. Neutrum vero, inquit ille. Immo alio genere; Mihi enim satis est, ipsis non satis. Tum mihi Piso: Quid ergo? Cur"
                            }
                            img={Img}
                            className="animate-appear"
                        />
                    )}
                    {show == "privateSpaces" && (
                        <ReasonContent
                            text={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zenonis est, inquam, hoc Stoici. Neutrum vero, inquit ille. Immo alio genere; Mihi enim satis est, ipsis non satis."
                            }
                            img={Img2}
                            className="animate-appear"
                        />
                    )}
                    {show == "persionalReports" && (
                        <ReasonContent
                            text={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zenonis est, inquam, hoc Stoici. Neutrum vero, inquit ille. Immo alio genere; Mihi enim satis est, ipsis non satis. Tum mihi Piso."
                            }
                            img={Img3}
                            className="animate-appear"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reasons;
