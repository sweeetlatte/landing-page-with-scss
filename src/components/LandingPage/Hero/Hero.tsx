import Button from "../../Button";
import Images from "./Images";
import Navigation from "./Navigation";

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__navigation">
                <Navigation />
            </div>
            <div className="hero__title">Make your interior extraordinary</div>
            <div className="hero__group-images">
                <Button
                    text="Scroll Down Scroll Down&nbsp;"
                    icon="arrow-down"
                />
                <Images />
            </div>
        </div>
    );
}
