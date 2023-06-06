import ListTool from "./ListTool";
import Tougue from "./Tougue";

const TheToolSection = () => {
    return (
        <section className="relative p-12">
            <Tougue className="absolute -z-10 right-0 top-[75px] w-[720px] h-[539px]" />

            <div className="container max-w-[1152px] mx-auto">
                <div className="py-6">
                    <div className="flex items-center">
                        <div className="w-2/4 p-3">
                            <iframe
                                className="mx-auto"
                                height={440}
                                width={480}
                                src="https://www.youtube.com/embed/TEjw5wscKOg"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="w-2/4 p-3">
                            <h2 className="text-[32px] font-bold font-mono">
                                The Tool for Creators
                            </h2>
                            <ListTool />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheToolSection;
