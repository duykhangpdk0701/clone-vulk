import { Button } from "@/components/Common";
import Face from "./Face";

const ForYouSection = () => {
    return (
        <section className="py-12 px-6 md:pb-[9.875rem] overflow-x-hidden dark:text-text-dark-title">
            <div>
                <div className="cointainer max-w-[1152px] mx-auto">
                    <div className="py-0 md:py-12">
                        <div className="relative">
                            <div className="max-w-[27.5rem] mx-auto px-4 text-center">
                                <h2 className="text-[32px] font-mono font-bold leading-[1.125] mb-6">
                                    The Tool made for creators like you
                                </h2>
                                <p className="text-base leading-normal text-text-medium">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Zenonis est, inquam, hoc
                                    Stoici. Neutrum vero, inquit ille. Immo alio
                                    genere; Mihi enim satis est, ipsis non
                                    satis. Tum mihi Piso: Quid ergo? Cur
                                </p>

                                <p className="text-base leading-normal text-text-medium mt-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Zenonis est, inquam, hoc
                                    Stoici. Neutrum vero, inquit ille. Immo alio
                                    genere; Mihi enim satis est, ipsis non
                                    satis. Tum mihi Piso: Quid ergo? Cur
                                </p>

                                <p className="text-base leading-normal text-text-medium mt-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Zenonis est, inquam, hoc
                                    Stoici. Neutrum vero, inquit ille. Immo alio
                                    genere; Mihi enim satis est, ipsis non
                                    satis. Tum mihi Piso: Quid ergo? Cur
                                </p>
                                <div className="mt-4">
                                    <Button
                                        type="primary"
                                        fullWidth
                                        className="max-w-[340px]"
                                    >
                                        Start Your Community
                                    </Button>
                                </div>
                            </div>

                            <Face />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForYouSection;
