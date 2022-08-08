import { Key, useContext } from "react";

import Slide from "./Slide";
import { SliderContext } from "../Slider";

import "../slider.scss";

export default function SlidesList() {
    const { slideNumber, items } = useContext(SliderContext);

    return (
        <div
            className="slide-list"
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            {items.map(
                (
                    slide: {
                        url: string;
                        content: string;
                        author: string;
                        position: string;
                    },
                    index: Key | null | undefined
                ) => (
                    <Slide key={index} data={slide} />
                )
            )}
        </div>
    );
}
