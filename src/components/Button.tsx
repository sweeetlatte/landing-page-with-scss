import Icons from "./Icons";

interface Props {
    text: string;
    icon: string;
}

export default function Button({ text, icon }: Props) {
    const handleOnClick = () => {};

    return (
        <div className="button" onClick={handleOnClick}>
            <Icons.CircleText text={text} />
            <div className="arrow-down-container">
                {icon === "arrow-down" && <Icons.ArrowDown />}
                {icon === "arrow-right" && <Icons.ArrowRight />}
            </div>
        </div>
    );
}
