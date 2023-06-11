import ListBrand from "./ListBrand";

const MentorSection = () => {
    return (
        <section className="px-5 py-12  md:p-12 pb-40 dark:text-text-dark-title">
            <div className="text-center px-5 py-12  md:p-12">
                <span className="text-xl leading-none font-bold text-gradient">
                    From the best companies
                </span>
                <h2 className="text-[32px] font-bold font-mono leading-tight">
                    Who are our business mentors?
                </h2>
            </div>

            <div className="max-w-[940px] mx-auto md:pt-12">
                <ListBrand />
            </div>
        </section>
    );
};

export default MentorSection;
