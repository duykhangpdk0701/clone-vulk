import ListBrand from "./ListBrand";

const MentorSection = () => {
    return (
        <section className="p-12 pb-40">
            <div className="text-center p-12">
                <span className="text-xl leading-none">
                    From the best companies
                </span>
                <h2 className="text-[32px] font-bold font-mono leading-tight">
                    Who are our business mentors?
                </h2>
            </div>

            <div className="max-w-[940px] mx-auto pt-12">
                <ListBrand />
            </div>
        </section>
    );
};

export default MentorSection;
