import Button from "../../Button";
import "./form.scss";

export default function Form() {
    return (
        <div className="form">
            <div className="title">
                We are ready to answer all your questions
            </div>
            <form>
                <div>
                    <label htmlFor="name">Your Name*</label>
                    <br />
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Your Email*</label>
                    <br />
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="msg">Write your message</label>
                    <br />
                    <textarea id="msg" name="msg" required />
                </div>
                <Button
                    text="Get in Touch Get in Touch&nbsp;"
                    icon="arrow-right"
                />
            </form>
        </div>
    );
}
