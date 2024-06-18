'use client'
import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';

const SliderCard = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isBlurring, setIsBlurring] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        afterChange: (current) => {
            setIsBlurring(true);
            setTimeout(() => {
                setCurrentSlide(current);
                setIsBlurring(false);
            }, 100);
        },
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    };

    const labels = [
        "Advanced Stock Screener",
        "Option Chain",
        "Option Simulator",
        "Live Market Screener",
        "Option Screener",
    ];

    return (
        <div className='relative pt-12 pb-4 md:pb-0 md:pt-0 bg-black'>
            <div className={`text-white font-semibold text-center absolute z-30 text-lg md:text-2xl lg:text-3xl top-2.5 md:top-5 left-1/2 transform -translate-x-1/2 transition-all duration-300 text-nowrap ${isBlurring ? 'animate-blurOut' : 'animate-blurIn'}`}>
                {labels[currentSlide]}
            </div>
            <div className="md:bg-[url('/slider/slider.svg')] bg-origin-border bg-no-repeat bg-cover bg-center h-[260px] md:h-[500px] w-full absolute z-10"></div>
            <div className="relative z-0 bg-no-repeat md:bg-black flex justify-center items-center">
                <Slider {...settings} className="relative z-0 overflow-hidden max-w-full">
                    <div className='px-0 md:px-4'>
                        <Image width={800} height={100} className='w-[800px] h-[230px] md:h-[470px]' src="/slider/screenshot/opt-scrn.png" alt="Legend 1" />
                    </div>
                    <div className='px-0 md:px-4'>
                        <Image width={800} height={100} className='w-[800px] h-[230px] md:h-[470px]' src="/slider/screenshot/livescrn.png" alt="Legend 2" />
                    </div>
                    <div className='px-0 md:px-4'>
                        <Image width={800} height={100} className='w-[800px] h-[230px] md:h-[470px]' src="/slider/screenshot/opt-chain.png" alt="Legend 3" />
                    </div>
                    <div className='px-0 md:px-4'>
                        <Image width={800} height={100} className='w-[800px] h-[230px] md:h-[470px]' src="/slider/screenshot/opt-sum.png" alt="Legend 3" />
                    </div>
                    <div className='px-0 md:px-4'>
                        <Image width={800} height={100} className='w-[800px] h-[230px] md:h-[470px]' src="/slider/screenshot/advscrn.png" alt="Legend 3" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SliderCard;
