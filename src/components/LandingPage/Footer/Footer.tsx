import "./footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <div className="brand">
                In<span>side.</span>
            </div>
            <div className="email">email@gmail.com</div>
            <div className="social">
                <div>Instagram</div>
                <div>Facebook</div>
                <div>Linkedin</div>
                <div>Twitter</div>
            </div>
            <div className="copyright">
                <div>© Copyright GDN</div>
                <div>Privacy - Security</div>
            </div>
        </div>
    );
}
