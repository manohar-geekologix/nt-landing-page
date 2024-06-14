import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const FeatureCard = () => {
    const features = [
        {
            src: '/icons/advscrneer.svg',
            alt: 'Advanced Stock Screener',
            url: 'https://www.niftytrader.in/advanced-stock-screener',
            title: 'Advanced Stock Screener',
            description: 'Access advanced filters like volume shockers, price action, range breakout, opening price clues, and more for efficient stock screening.'
        },
        {
            src: '/icons/livescreener.svg',
            alt: 'Live Market Screener',
            url: 'https://www.niftytrader.in/stock-screener',
            title: 'Live Market Screener',
            description: 'Access real-time market data and dynamic filters to ensure timely trades without outdated information.'
        },
        {
            src: '/icons/option-screener.svg',
            alt: 'Options Screener',
            url: 'https://www.niftytrader.in/options-screener',
            title: 'Options Screener',
            description: 'Quickly identify optimal trading opportunities in the options market with our real-time data and advanced filters.'
        },
        {
            src: '/icons/advoptionscreener.svg',
            alt: 'Advanced Option Chain',
            url: 'https://www.niftytrader.in/nse-option-chain/nifty',
            title: 'Advanced Option Chain',
            description: 'Stay ahead with highlighted data on Greeks, PCR, Vol PCR, and Expected Range for the Day feature for confident target setting.'
        }
    ];
    return (
        <div className='container'>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between px-5 mt-10 gap-5">
                {features.map((feature, index) => (
                    <Link target='_blank' href={feature.url} key={index} className="group hover:text-[#4399EB] hover:bg-[#F8FBFF]  rounded-[32px] hover:shadow-custom transition ease-in-out duration-300 max-md:mt-5">
                        <div className="flex flex-col grow px-4 py-6 w-full rounded-[32px]">
                            <Image
                                width={80}
                                height={80}
                                src={feature.src}
                                alt={feature.alt}
                            />
                            <div className="mt-3 text-2xl font-semibold text-zinc-800 group-hover:text-[#4399EB] transition ease-in-out duration-300">
                                {feature.title}
                            </div>
                            <div className="mt-1 text-base text-neutral-400 group-hover:text-[#4399EB] transition ease-in-out duration-300">
                                {feature.description}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="lg:pl-20 my-12 max-w-full shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)] rounded-lg">
                <div className="flex flex-col items-center lg:flex-row gap-5 max-md:flex-col max-md:gap-0 bg-[url('/images/banner2.png')] bg-cover lg:bg-auto bg-no-repeat  bg-right p-5 lg:p-12 justify-between">
                    <div className="flex flex-col">
                        <div className="flex z-10 flex-col self-stretch my-auto text-zinc-800">
                            <div className="text-2xl md:text-3xl xl:text-5xl font-bold text-center lg:text-start text-white md:text-zinc-800">
                                Missing Trades Because of Outdated Data?
                            </div>
                            <div className="mt-2 md:mt-6 text-xl md:text-xxl xl:text-3xl font-medium w-100 text-center lg:text-start text-white md:text-zinc-800">
                                Get the Live Market Screening with Dynamic Filters
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-end ml-5 mt-5 md:mt-0 max-md:ml-0 mb-7 lg:mb-0">
                        <div className="flex overflow-hidden relative flex-col grow justify-center items-center md:items-end xl:text-3xl font-semibold text-white max-md:px-5">
                            <Link target='_blank' href={'https://www.niftytrader.in/primeplans'} className="text-white justify-center px-10 py-5 rounded-lg max-md:px-5 bg-gradient-to-r from-[#537E95] to-[#004063] cursor-pointer">
                                Get Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard