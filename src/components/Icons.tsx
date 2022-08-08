interface Props {
    stroke?: string;
    fill?: string;
    text?: string;
}

const ArrowDown = ({ stroke = "#181716" }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
    >
        <path
            id="ArrowDown"
            d="M16.869,0a16.934,16.934,0,0,1,5.018-12.021A17.2,17.2,0,0,1,34-17m0,0a17.25,17.25,0,0,1-6.556-1.294,17.146,17.146,0,0,1-5.558-3.685,17,17,0,0,1-3.714-5.515A16.886,16.886,0,0,1,16.869-34M34-17H0"
            transform="translate(1 1) rotate(90)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

const ArrowRight = ({ stroke = "#181716" }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
    >
        <path
            id="ArrowRight"
            d="M16.869,0a16.934,16.934,0,0,1,5.018-12.021A17.2,17.2,0,0,1,34-17m0,0a17.25,17.25,0,0,1-6.556-1.294,17.146,17.146,0,0,1-5.558-3.685,17,17,0,0,1-3.714-5.515A16.886,16.886,0,0,1,16.869-34M34-17H0"
            transform="translate(1 35)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

const CircleText = ({ text }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 2300 1000"
    >
        <title>Scroll Down</title>
        <defs>
            <path
                d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                id="textcircle"
            >
                <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="30s"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    repeatCount="indefinite"
                />
            </path>
        </defs>
        <text dy="70" textLength="1220">
            <textPath xlinkHref="#textcircle">{text}</textPath>
        </text>
    </svg>
);

const StraightArrowLeft = ({ stroke = "black" }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15.325"
        height="12.708"
        viewBox="0 0 15.325 12.708"
    >
        <path
            id="Vector_11"
            data-name="Vector 11"
            d="M0,5.647H14.118M0,5.647,5.647,0M0,5.647l5.647,5.647"
            transform="translate(0.707 0.707)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
        />
    </svg>
);

const StraightArrowRight = ({ stroke = "white" }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15.325"
        height="12.708"
        viewBox="0 0 15.325 12.708"
    >
        <path
            id="Vector_11"
            data-name="Vector 11"
            d="M0-5.647H14.118M0-5.647,5.647,0M0-5.647l5.647-5.647"
            transform="translate(14.618 0.707) rotate(180)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
        />
    </svg>
);

const Icons = {
    ArrowDown,
    ArrowRight,
    CircleText,
    StraightArrowLeft,
    StraightArrowRight,
};

export default Icons;
