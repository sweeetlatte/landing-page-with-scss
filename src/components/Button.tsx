import Icons from "./Icons";

interface Props {
    text: string;
    icon: string;
    color?: string;
}

export default function Button({ text, icon, color }: Props) {
    const handleOnClick = () => {};

    return (
        <div className="button" onClick={handleOnClick}>
            <Icons.CircleText text={text} />
            <div className="arrow-down-container">
                {icon === "arrow-down" && <Icons.ArrowDown stroke={color} />}
                {icon === "arrow-right" && <Icons.ArrowRight stroke={color} />}
            </div>
        </div>
    );
}
