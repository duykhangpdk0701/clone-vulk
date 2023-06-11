import asunaBrand from "@/assets/img/brand/asuna.svg";
import vonmoBrand from "@/assets/img/brand/vonmo.svg";
import covenantBrand from "@/assets/img/brand/covenant.svg";
import grubspotBrand from "@/assets/img/brand/grubspot.svg";
import infiniteBrand from "@/assets/img/brand/infinite.svg";

const ListBrand = () => {
    return (
        <div className="max-w-[840px] mx-auto mt-10">
            <p className="text-text-light text-base leading-normal text-center">
                Helping creators work faster at
            </p>
            <div className="mb-12 overflow-x-auto">
                <ul className="flex justify-center items-center w-[840px]">
                    <li className="px-4">
                        <img
                            src={asunaBrand}
                            alt="asuna"
                            className="w-28 dark:invert"
                        />
                    </li>

                    <li className="px-4">
                        <img
                            src={vonmoBrand}
                            alt="vonmo"
                            className="w-28 dark:invert"
                        />
                    </li>

                    <li className="px-4">
                        <img
                            src={covenantBrand}
                            alt="covenant"
                            className="w-28 dark:invert"
                        />
                    </li>

                    <li className="px-4">
                        <img
                            src={grubspotBrand}
                            alt="grubpot"
                            className="w-28 dark:invert"
                        />
                    </li>

                    <li className="px-4">
                        <img
                            src={infiniteBrand}
                            alt="infinite"
                            className="w-28 dark:invert"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ListBrand;
