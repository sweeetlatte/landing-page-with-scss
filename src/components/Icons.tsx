interface Props {
    stroke?: string;
    fill?: string;
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

const CircleText = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 2300 1000"
    >
        <title>Visit Site Link</title>
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
            <textPath xlinkHref="#textcircle">Scroll Down Scroll Down</textPath>
        </text>
    </svg>
);

const Icons = { ArrowDown, CircleText };

export default Icons;
