import { FC } from "react";

interface ITougue {
    className?: string;
}

const Tougue: FC<ITougue> = (props) => {
    const { className } = props;
    return (
        <svg
            className={className}
            data-v-7267784e=""
            data-v-b0db8ddf=""
            width="853"
            height="639"
            viewBox="0 0 853 639"
            fill="currentColor"
            // fill={ localStorage.theme === "dark" ? '#0C0C18' :'#f5f6fa'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                data-v-7267784e=""
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M749.122 631.529C1037.86 631.529 1280 555.156 1280 317.386C1280 79.6165 1128.79 10 840.046 10C551.305 10 10 218.672 10 456.442C10 694.212 460.381 631.529 749.122 631.529Z"
            ></path>
            <path
                data-v-7267784e=""
                className="opacity-50"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M657.644 621.529C914.556 621.529 1130 545.156 1130 307.386C1130 69.6165 995.456 0 738.545 0C481.634 0 0 208.672 0 446.442C0 684.212 400.733 621.529 657.644 621.529Z"
            ></path>
        </svg>
    );
};

export default Tougue;
