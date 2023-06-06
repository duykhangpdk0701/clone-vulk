import FeatureIntergration from "@/assets/img/intergration/creator-feature-3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const IntergrationSection = () => {
    return (
        <section className="p-12">
            <div className="container mx-auto max-w-[1152px]">
                <div className="flex items-center">
                    <div className="w-[41.4%]">
                        <h3 className="text-base leading-none font-bold text-gradient text-gradient">
                            Integrations
                        </h3>
                        <h2 className="text-[40px] font-bold font-mono leading-tight mb-6">
                            Easily connects with your tools
                        </h2>
                        <p className="text-text-medium text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quos quidem tibi studiose et diligenter
                            tractandos magnopere censeo. Duo Reges: constructio
                            interrete. Ad eas enim res ab Epicuro praecepta
                            dantur.
                        </p>

                        <a href="#" className="action-link">
                            <span className="mr-3">Learn More</span>

                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                    <div className="w-2/4 p-3 ml-[8.3%]">
                        <img
                            src={FeatureIntergration}
                            alt="Easily connects with your tools"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntergrationSection;
