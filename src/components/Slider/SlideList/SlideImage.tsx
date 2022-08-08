import "../slider.scss";

interface Props {
    src: string;
    alt: string;
}

export default function SlideImage({ src, alt }: Props) {
    return <img src={src} alt={alt} className="slide-image" />;
}
