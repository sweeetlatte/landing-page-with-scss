import "../slider.scss";

interface Props {
    content: string;
    author: string;
    position: string;
}

export default function SlideTitle({ content, author, position }: Props) {
    return (
        <div className="slide-title">
            <div className="title-content">{content}</div>
            <div>
                <div className="title-author">{author}</div>
                <div className="title-position">{position}</div>
            </div>
        </div>
    );
}
