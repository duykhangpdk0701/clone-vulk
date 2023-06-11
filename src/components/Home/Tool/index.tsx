import ListTool from "./ListTool";
import Tougue from "./Tougue";

const TheToolSection = () => {
    return (
        <section className="relative px-0 md:px-5 md:p-12 dark:text-text-dark-title">
            <Tougue className="absolute right-0 top-[75px] w-[720px] h-[539px] z-0 fill-bg-primary dark:fill-bg-dark-primary" />

            <div className="container relative max-w-[1152px] mx-auto z-10">
                <div className="py-6">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-2/4 p-3">
                            <div className="max-w-full lg:max-w-[480px] mx-auto">
                                <iframe
                                    className="mx-auto w-full"
                                    height={440}
                                    src="https://www.youtube.com/embed/TEjw5wscKOg"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/4 p-3">
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
