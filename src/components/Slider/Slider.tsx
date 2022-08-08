import { useEffect, useState, createContext, TouchEventHandler } from "react";
import PropTypes from "prop-types";
import { getImages } from "./imagesApi";

import Arrows from "./Controls/Arrows";
import Dashes from "./Controls/Dashes";

import SlidesList from "./SlideList/SlideList";

import { IItems } from "./data";

const defaultValue: any = null;

export const SliderContext = createContext(defaultValue);

interface Props {
    width: string;
    height: string;
    autoPlay: boolean;
    autoPlayTime: number;
}

const Slider = function ({ width, height, autoPlay, autoPlayTime }: Props) {
    const [items, setItems] = useState<Array<IItems>>([]);
    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const images = await getImages();
            setItems(images);
        };
        loadData();
    }, []);

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    };

    const goToSlide = (number: number) => {
        setSlide(number % items.length);
    };

    const handleTouchStart = (e: { touches: { clientX: any }[] }) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e: any) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    };

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]); // when images uploaded or slide changed manually we start timer

    return (
        <div
            style={{ width, height }}
            className="slider"
            onTouchStart={
                handleTouchStart as unknown as
                    | TouchEventHandler<HTMLDivElement>
                    | undefined
            }
            onTouchMove={handleTouchMove}
        >
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slidesCount: items.length,
                    slideNumber: slide,
                    items,
                }}
            >
                <Arrows />
                <SlidesList />
                <Dashes />
            </SliderContext.Provider>
        </div>
    );
};

Slider.propTypes = {
    autoPlay: PropTypes.bool,
    autoPlayTime: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
};

Slider.defaultProps = {
    autoPlay: false,
    autoPlayTime: 5000,
    width: "100%",
    height: "100%",
};

export default Slider;
