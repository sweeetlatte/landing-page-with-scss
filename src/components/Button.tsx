import React from "react";
import Icons from "./Icons";

export default function Button() {
    const handleOnClick = () => {};

    return (
        <div className="group-images__button" onClick={handleOnClick}>
            <Icons.CircleText />
            <div className="arrow-down-container">
                <Icons.ArrowDown />
            </div>
        </div>
    );
}
