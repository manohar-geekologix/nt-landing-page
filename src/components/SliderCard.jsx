'use client'
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';

const SliderCard = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        className: "center overflow-hidden",
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <>
            <Slider {...settings}>
                <div>
                    <Image width={2000} height={2000} className='w-full' src="/images/opt-scrn.png" alt="Legend 1" />
                </div>
                <div>
                    <Image width={2000} height={2000} className='w-full' src="/images/livescrn.png" alt="Legend 2" />
                </div>
                <div>
                    <Image width={2000} height={2000} className='w-full' src="/images/opt-chain.png" alt="Legend 3" />
                </div>
                <div>
                    <Image width={2000} height={2000} className='w-full' src="/images/opt-sum.png" alt="Legend 3" />
                </div>
                <div>
                    <Image width={2000} height={2000} className='w-full' src="/images/advscrn.png" alt="Legend 3" />
                </div>
            </Slider>
        </>
    )
}

export default SliderCard