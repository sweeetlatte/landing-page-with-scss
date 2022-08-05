import "./hero.scss";

export default function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation__title">
                In<span>side.</span>
            </div>
            <div>
                <div>Home</div>
                <div>About us</div>
                <div>Projects</div>
                <div>Article</div>
            </div>
            <div className="navigation__subtitle">Contact</div>
        </div>
    );
}
