import { useContext } from "react";

import Icons from "../../Icons";
import { SliderContext } from "../Slider";

import "../slider.scss";

export default function Arrows() {
    const { changeSlide } = useContext(SliderContext);

    return (
        <div className="arrows">
            <div onClick={() => changeSlide(-1)}>
                <Icons.StraightArrowLeft />
            </div>
            <div onClick={() => changeSlide(1)}>
                <Icons.StraightArrowRight />
            </div>
        </div>
    );
}
