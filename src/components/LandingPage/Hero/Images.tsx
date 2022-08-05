import hero1 from "../../../assets/images/hero-1.png";
import hero2 from "../../../assets/images/hero-2.png";

export default function Images() {
    return (
        <div className="images">
            <img src={hero1} alt="hero 1" />
            <img src={hero2} alt="hero 2" />
        </div>
    );
}
