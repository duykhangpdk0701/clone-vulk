import { Button } from "@/components/Common";
import { FaceElement } from "./Common";
import face8Img from "@/assets/img/hero/8.jpg";
import ListBrand from "./ListBrand";

const HeroSection = () => {
    return (
        <section className="min-h-screen p-12 pb-8 bg-bg-primary">
            <div className="container mx-auto max-w-[1152px] mt-12 p-3">
                <div className="max-w-[40rem] mx-auto text-center">
                    <h1 className="text-[40px] font-bold font-mono leading-[1.125] mb-3">
                        The Modern Community Platform For{" "}
                        <span className="text-primary-purple">Creators</span>
                    </h1>
                    <p className="text-text-medium text-xl font-light leading-tight mb-6">
                        Bring together your discussions , memberships, and
                        content. Integrate a thriving community all under your
                        own brand.
                    </p>
                    <div className="flex justify-center gap-2">
                        <Button type="primary" className="min-w-[140px]">
                            Free Trial
                        </Button>
                        <Button className="min-w-[140px]">Learn More</Button>
                    </div>
                </div>
                <div className="mt-4">
                    <div>
                        <div className="grid grid-cols-[1fr_1fr_2fr_1fr_1fr] content-center">
                            <FaceElement imgUrl={face8Img} />
                            <div className="flex flex-col gap-6">
                                <FaceElement imgUrl={face8Img} />
                                <FaceElement imgUrl={face8Img} />
                            </div>
                            <div>
                                <FaceElement imgUrl={face8Img} />
                                <div className="flex">
                                    <FaceElement imgUrl={face8Img} />
                                    <FaceElement imgUrl={face8Img} />
                                </div>
                            </div>
                            <div>
                                <FaceElement imgUrl={face8Img} />
                                <FaceElement imgUrl={face8Img} />
                            </div>
                            <div>
                                <FaceElement imgUrl={face8Img} />
                                <FaceElement imgUrl={face8Img} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ListBrand />
        </section>
    );
};

export default HeroSection;
