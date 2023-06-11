import ContentContainer from "./ContentContainer";
import Image from "@/assets/illustrations/creator-feature-1.png";
import Imag2 from "@/assets/illustrations/creator-feature-2.png";
import Image3 from "@/assets/illustrations/creator-feature-3.svg";

const Content = () => {
    return (
        <section className="px-5 md:px-6 lg:px-12 dark:bg-bg-dark-secondary text-text-dark-title">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-[100px]">
                    <ContentContainer
                        subTitle="Engagement"
                        title="Enaging discussions and connections"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
                        img={Image}
                    />
                </div>
                <div className="mb-[100px]">
                    <ContentContainer
                        subTitle="Experience"
                        title="Branded community experience"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
                        img={Imag2}
                        imageRight
                    />
                </div>
                <div className="mb-[100px]">
                    <ContentContainer
                        subTitle="Integrations"
                        title="Easily connects with your tools"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
                        img={Image3}
                        hideBubble
                    />
                </div>
            </div>
        </section>
    );
};

export default Content;
