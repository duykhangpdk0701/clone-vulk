import ListCommunity from "./ListCommunity";

const CommunitySection = () => {
    return (
        <section className="p-12">
            <div className="container max-w-[1152px] mx-auto">
                <div className="text-center p-12">
                    <span className="text-xl leading-none font-bold text-gradient">
                        Strong Communities
                    </span>
                    <h2 className="text-[32px] font-bold font-mono leading-tight">
                        Easily setup a premium communty
                    </h2>
                </div>

                <div className="py-6">
                    <ListCommunity />
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
