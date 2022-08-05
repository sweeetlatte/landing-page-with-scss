import "./aboutUs.scss";

import about1 from "../../../assets/images/about-1.png";
import about2 from "../../../assets/images/about-2.png";

export default function Images() {
    return (
        <div className="about-images">
            <img src={about1} alt="about 1" />
            <img src={about2} alt="about 2" />
        </div>
    );
}
