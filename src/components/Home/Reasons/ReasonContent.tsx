interface IReasonContent {
    text: string;
    img: string;
    className?: string;
}


const ReasonContent:React.FC<IReasonContent> = ({text, img, className}) => {
    return (
        <div className={className}>
            <p className="text-text-medium mb-5">
                {text}
            </p>
            <img src={img} alt="" className="w-full" />
        </div>
    );
};

export default ReasonContent;
