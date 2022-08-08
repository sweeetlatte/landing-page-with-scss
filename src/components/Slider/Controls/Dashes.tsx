import { useContext } from "react";
import { SliderContext } from "../Slider";
import Dash from "./Dash";

import "../slider.scss";

export default function Dashes() {
    const { slidesCount } = useContext(SliderContext);

    const renderDashes = () => {
        const dots = [];
        for (let i = 0; i < slidesCount; i++) {
            dots.push(<Dash key={`dot-${i}`} number={i} />);
        }

        return dots;
    };

    return <div className="dots">{renderDashes()}</div>;
}
