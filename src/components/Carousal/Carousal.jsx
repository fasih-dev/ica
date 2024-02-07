import React, { useState, useEffect } from 'react';
import image1 from '../../assets/CarousalImg/img1.jpg';
import image2 from '../../assets/CarousalImg/img2.png';
import image3 from '../../assets/CarousalImg/img3.png';
import image4 from '../../assets/CarousalImg/img4.png';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const handleImageLoad = (index) => {
        if (index === carouselItems.length - 1) {
            setImagesLoaded(true);
        }
    };

    useEffect(() => {
        if (imagesLoaded) {
            const interval = setInterval(() => {
                handleNextClick();
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [imagesLoaded, currentIndex]);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const carouselItems = [
        { image: image1, alt: 'Slide 1' },
        { image: image2, alt: 'Slide 2' },
        { image: image3, alt: 'Slide 3' },
        { image: image4, alt: 'Slide 4' },
    ];

    return (
        <div className="relative">
            <div className="relative overflow-hidden w-full min-h-[490px] bg-white">
                <div
                    className="absolute top-0 left-0 w-full h-full flex flex-nowrap transition-transform ease-in-out duration-1000"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {carouselItems.map((item, index) => (
                        <div key={index} className="flex-none w-full h-full">
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-full object-cover 
                                "
                                onLoad={() => handleImageLoad(index)}

                            />
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="button"
                className="absolute inset-y-0 left-0 inline-flex justify-center items-center w-12 h-full text-gray-800 hover:bg-gray-800/[.1]"
                onClick={handlePrevClick}
            >
                <ion-icon name="caret-back-circle" size="large" style={{ color: 'gray' }}></ion-icon>
                <span className="sr-only">Previous</span>
            </button>

            <button
                type="button"
                className="absolute inset-y-0 right-0 inline-flex justify-center items-center w-12 h-full text-gray-800 hover:bg-gray-800/[.1]"
                onClick={handleNextClick}
            >
                <ion-icon name="caret-forward-circle" size="large" style={{ color: 'gray' }}></ion-icon>
                <span className="sr-only">Next</span>
            </button>

            <div className="flex justify-center absolute bottom-3 left-0 right-0 space-x-2">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 ${currentIndex === index ? 'bg-gray-700' : 'border border-gray-400'} rounded-full`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
