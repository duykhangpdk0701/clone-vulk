import ListCommunity from "./ListCommunity";

const CommunitySection = () => {
    return (
        <section className="p-2.5 md:p-12 dark:text-text-dark-title">
            <div className="container max-w-[1152px] mx-auto">
                <div className="text-center md:p-12 pb-0 md:pb-12">
                    <span className="text-xl leading-none font-bold text-gradient">
                        Strong Communities
                    </span>
                    <h2 className="text-[32px] font-bold font-mono leading-tight">
                        Easily setup a premium communty
                    </h2>
                </div>

                <div className="py-6 pt-0 mb:pt-6">
                    <ListCommunity />
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
