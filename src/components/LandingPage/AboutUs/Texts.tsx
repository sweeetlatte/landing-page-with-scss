import "./aboutUs.scss";

import Button from "../../Button";

export default function Texts() {
    return (
        <div className="about-texts">
            <div>Design agency is defined by our approach.</div>
            <div>
                Design Agency is an award-winning studio with a talent for
                envisioning inspired environments and brands. We provide
                exceptional designs.
            </div>
            <Button text="Learn More Learn More&nbsp;" icon="arrow-right" />
        </div>
    );
}
