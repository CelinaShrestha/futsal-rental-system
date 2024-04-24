import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "@/Components/Button";

function SwipeToSlide({ data }) {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4, // Adjust this value to control the number of cards displayed
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") {
            sliderRef.current.slickNext();
        } else if (e.key === "ArrowLeft") {
            sliderRef.current.slickPrev();
        }
    };

    return (
        // <div onKeyDown={handleKeyDown} tabIndex="0" className="mt-4">
        //     <Slider ref={sliderRef} {...settings}>
        //         {data.map((d) => (
        //             <div
        //                 key={d.id}
        //                 className="bg-white h-[420px] text-text rounded-xl w-[400px] mx-auto border border-gray-200 shadow-md"
        //             >
        //                 <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
        //                     <img
        //                         src={`http://127.0.0.1:8000/storage/${d.images[0]}`}
        //                         alt=""
        //                         className="h-full w-full rounded-t-xl object-cover"
        //                     />
        //                 </div>

        //                 <div className="flex flex-col justify-center gap-4 p-4">
        //                     <div className="flex items-center justify-between">
        //                         <div className="flex-col gap-2">
        //                             <p className="text-lg text-text font-medium">
        //                                 {d.title}
        //                             </p>
        //                             <p className="">
        //                                 {d.location}
        //                             </p>
        //                         </div>
        //                         <p className="text-accent-color text-sm">
        //                             Rs. {d.price}/hr
        //                         </p>
        //                     </div>

        //                     <p className="">{d.short_description}</p>
        //                     <Button size="sm" variant="primary">
        //                         View More
        //                     </Button>
        //                 </div>
        //             </div>
        //         ))}
        //     </Slider>
        // </div>
        <div tabIndex="0" className="mt-4">
            <Slider ref={sliderRef} {...settings}>
                {data.map((d) => (
                    <div className="relative flex rounded-lg border border-gray-100 bg-white shadow-md w-fit">
                        <div className="w-full h-[200px]">
                            <img
                                className="h-full w-full object-cover rounded-t-md"
                                src={`http://127.0.0.1:8000/storage/${d.images[0]}`}
                                alt="court image"
                            />
                            {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                                39% OFF
                            </span> */}
                        </div>
                        <div className="mt-4 px-5 pb-5">
                            <a href="#">
                                <h5 className="text-lg font-semibold tracking-tight text-text">
                                    {d.title}
                                </h5>
                            </a>
                            <div className="mt-2 mb-5 flex items-center justify-between">
                                <p>
                                    <span className="text-lg font-semibold text-text">
                                        रु{d.price}
                                    </span>
                                    <span className="text-sm text-text line-through">
                                        रु69
                                    </span>
                                </p>
                                <div className="flex items-center">
                                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                                        5.0
                                    </span>
                                </div>
                            </div>
                            <Button size="sm" variant="secondary">
                                View More
                            </Button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className + " text-gray-600"} onClick={onClick}>
            {/* <FaChevronRight /> */}
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className + " text-gray-600 "} onClick={onClick}>
            {/* <FaChevronLeft /> */}
        </div>
    );
};

export default SwipeToSlide;
