import React, { useState, useEffect } from "react";

function ImageSlider({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images]);

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative text-white w-full h-[500px] mt-4">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={`http://127.0.0.1:8000/storage/${image}`}
                    alt={`Image ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-fit transition-opacity duration-500 ${
                        index === currentImageIndex
                            ? "opacity-100"
                            : "opacity-0"
                    }`}
                />
            ))}
        </div>
    );
}

export default ImageSlider;
