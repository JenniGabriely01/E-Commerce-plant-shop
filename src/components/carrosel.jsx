import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


export default function Carrosel({ slides }) {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let NextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden relative">

            <div className="text-4xl mb-4">
                <button className="bg-[#C1DCDC] rounded-full p-2 shadow-lg mr-3"
                    onClick={previousSlide}>
                    <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
                </button>
                <button className="bg-[#C1DCDC] rounded-full p-2 shadow-lg"
                    onClick={NextSlide}>
                    <MdKeyboardArrowRight></MdKeyboardArrowRight>
                </button>
            </div>

            <div
                className={`flex transition ease-out duration-40`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s) => {
                    return <img src={s} />;
                })}
            </div>


        </div>

    )
}