import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";

import "../slider.scss";

interface IProps {
    data: {
        url: string;
        content: string;
        author: string;
        position: string;
    };
}

export default function Slide({
    data: { url, content, author, position },
}: IProps) {
    return (
        <div className="slide">
            <SlideImage src={url} alt={content} />
            <SlideTitle content={content} author={author} position={position} />
        </div>
    );
}
