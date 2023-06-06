import { Button } from "@/components/Common";
import { FaceElement } from "./Common";
import face8Img from "@/assets/img/hero/8.jpg";
import face1Img from "@/assets/img/hero/1.jpg";
import face4Img from "@/assets/img/hero/4.jpeg";
import face2bImg from "@/assets/img/hero/2b.jpg";
import ListBrand from "./ListBrand";
import face11Img from "@/assets/img/hero/11.jpg";
import face5Img from "@/assets/img/hero/5.png";
import face9aImg from "@/assets/img/hero/9a.jpg";
import face3Img from "@/assets/img/hero/3.png";
import face7Img from "@/assets/img/hero/7.jpg";
import face10Img from "@/assets/img/hero/10.jpg";

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
                    <div className="flex items-center">
                        <div className="w-[16.6%] px-3">
                            <FaceElement imgUrl={face8Img} />
                        </div>

                        <div className="w-[16.6%] px-3">
                            <FaceElement imgUrl={face1Img} className="mb-6" />
                            <FaceElement
                                imgUrl={face4Img}
                                className="min-h-[340px]"
                            />
                        </div>

                        <div className="w-[33.2%] px-3">
                            <FaceElement imgUrl={face2bImg} className="mb-6" />
                            <div className="flex items-center">
                                <div className="w-[66.4%] px-3">
                                    <FaceElement
                                        imgUrl={face11Img}
                                        className="min-h-[180px]"
                                    />
                                </div>
                                <div className="w-[33.2%] px-3">
                                    <FaceElement
                                        imgUrl={face5Img}
                                        className="min-h-[100px]"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-[16.6%] px-3">
                            <FaceElement
                                imgUrl={face9aImg}
                                className="mb-6 min-h-[340px]"
                            />
                            <FaceElement imgUrl={face3Img} />
                        </div>

                        <div className="w-[16.6%] px-3">
                            <FaceElement
                                imgUrl={face7Img}
                                className="mb-6 min-h-[180px]"
                            />
                            <FaceElement imgUrl={face10Img} />
                        </div>
                    </div>
                </div>
            </div>
            <ListBrand />
        </section>
    );
};

export default HeroSection;
