import face4Img from "@/assets/img/hero/4.jpeg";
import face1Img from "@/assets/img/hero/1.jpg";
import face7Img from "@/assets/img/hero/7.jpg";
import face9Img from "@/assets/img/hero/9.jpg";
import face6Img from "@/assets/img/hero/6.jpg";

import face2Img from "@/assets/img/hero/2.jpg";
import face3Img from "@/assets/img/hero/3.png";
import face8Img from "@/assets/img/hero/8.jpg";
import face5Img from "@/assets/img/hero/5.png";
import face10Img from "@/assets/img/hero/10.jpg";
import FaceItem from "./Common/FaceItem";

const Face = () => {
    return (
        <>
            {/* left half */}
            <FaceItem
                imgUrl={face4Img}
                width={300}
                height={400}
                alt="person image"
                className="hidden lg:block -left-[120px] -top-[80px] w-[160px]"
            />
            <FaceItem
                imgUrl={face1Img}
                width={300}
                height={400}
                alt="person image"
                className="hidden md:block left-[-15px] lg:left-[100px] right-[100px] top-[20px] w-[140px] scale-75 lg:scale-1"
            />
            <FaceItem
                imgUrl={face7Img}
                width={300}
                height={400}
                alt="person image"
                className="hidden lg:block -left-[80px] top-[180px] w-[140px]"
            />
            <FaceItem
                imgUrl={face9Img}
                width={300}
                height={400}
                alt="person image"
                className="hidden md:block left-[0px] lg:left-[140px] top-[260px] w-[140px] scale-75 lg:scale-1"
            />
            <FaceItem
                imgUrl={face6Img}
                width={300}
                height={400}
                alt="person image"
                className="hidden md:block -left-[30px] lg:left-[20px] top-[450px] w-[130px] scale-75 lg:scale-1"
            />
            {/* right hafl */}
            <FaceItem
                imgUrl={face2Img}
                width={300}
                height={400}
                alt="person image"
                className="hidden lg:block md:-right-[170px] lg:-right-[120px] -top-[80px] w-[160px]"
            />
            <FaceItem
                imgUrl={face3Img}
                width={300}
                height={400}
                alt="person image"
                className="hidden md:block right-[-15px] lg:right-[100px] top-[20px] w-[140px] scale-75 lg:scale-1"
            />
            <FaceItem
                imgUrl={face8Img}
                width={300}
                height={400}
                alt="person image"
                className="hidden lg:block -right-[130px] lg:-right-[80px] top-[180px] w-[140px]"
            />
            <FaceItem
                imgUrl={face5Img}
                width={300}
                height={400}
                alt="person image"
                className="hidden md:block right-[0px] lg:right-[140px] top-[260px] w-[140px] scale-75 lg:scale-1 "
            />
            <FaceItem
                imgUrl={face10Img}
                width={300}
                height={400}
                alt="person image"
                className="hidden md:block -right-[30px] lg:right-[20px] top-[450px] w-[130px] scale-75 lg:scale-1"
            />
        </>
    );
};

export default Face;
