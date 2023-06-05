import asunaBrand from "@/assets/img/brand/ausna.svg";

const data = [
    {
        title: "asuna",
        imgUrl: asunaBrand,
    },
];

const ListBrand = () => {
    return (
        <div>
            {data.map((item) => (
                <img src={item.imgUrl} alt={item.title} />
            ))}
        </div>
    );
};

export default ListBrand;
