import dataBrand from "./dataBrand";

const ListBrand = () => {
    return (
        <div className="flex flex-wrap">
            {dataBrand.map((item, index) => (
                <div
                    className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5  p-3"
                    key={index}
                >
                    <div className="min-h-[50px] flex justify-center items-center">
                        <img
                            className="min-w-[90px] max-w-[90px] mx-auto block dark:invert"
                            src={item.imgUrl}
                            alt={item.title}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListBrand;
