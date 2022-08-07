import "./landingPage.scss";

import AboutUs from "../components/LandingPage/AboutUs/AboutUs";
import Footer from "../components/LandingPage/Footer/Footer";
import Form from "../components/LandingPage/Form/Form";
import Hero from "../components/LandingPage/Hero/Hero";
import Project from "../components/LandingPage/Project/Project";
import Testimonial from "../components/LandingPage/Testimonial/Testimonial";

export default function LandingPage() {
    return (
        <div className="landing-page">
            <Hero />
            <AboutUs />
            <Project />
            <Testimonial />
            <Form />
            <Footer />
        </div>
    );
}
