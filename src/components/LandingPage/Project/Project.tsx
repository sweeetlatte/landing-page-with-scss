import "./project.scss";

import Texts from "./Texts";
import Images from "./Images";
import Button from "../../Button";

export default function Project() {
    return (
        <div className="project">
            <Texts />
            <Images />
            <Button
                text="View More View More&nbsp;"
                icon="arrow-right"
                color="#ff7433"
            />
        </div>
    );
}
