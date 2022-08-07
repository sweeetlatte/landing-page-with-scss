import "./project.scss";

import proj1 from "../../../assets/images/proj-1.png";
import proj2 from "../../../assets/images/proj-2.png";
import proj3 from "../../../assets/images/proj-3.png";

export default function Images() {
    return (
        <div className="proj-images">
            <img src={proj1} alt="project 1" />
            <img src={proj2} alt="project 2" />
            <img src={proj3} alt="project 3" />
        </div>
    );
}
