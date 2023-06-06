import { useState } from "react";
import ReasonContent from "./ReasonContent";
import Img from "../../../assets/illustrations/creator-highlight-1.png";
import Img2 from "../../../assets/illustrations/creator-highlight-2.png";
import Img3 from "../../../assets/illustrations/creator-highlight-3.png";

const Reasons = () => {
    const [show, setShow] = useState<string>("discussions");

    return (
        <div className="max-w-[1200px] mx-auto py-20">
            <div className="text-center p-12">
                <span className="text-xl font-bold leading-none text-gradient">
                    Why you should try our Optimization solution
                </span>
                <h2 className="text-[32px] font-bold font-mono leading-tight">
                    Three reasons you’ll love our solution
                </h2>
            </div>
            <div className="max-w-[780px] mx-auto">
                <div className="flex justify-evenly mb-10">
                    <button
                        className="border-2 p-2"
                        onClick={() => setShow("discussions")}
                    >
                        Discussions
                    </button>
                    <button
                        className="border-2 p-2"
                        onClick={() => setShow("privateSpaces")}
                    >
                        Private Spaces
                    </button>
                    <button
                        className="border-2 p-2"
                        onClick={() => setShow("persionalReports")}
                    >
                        Personal Reports
                    </button>
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
    );
};

export default Reasons;
