import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainBanner = () => {
    return (
        <>
            <div className="relative bg-[url('/images/banner.svg')] bg-no-repeat bg-cover h-full xl:h-[80vh]">
                <div className="container absolute bg-[url('/images/banner-circle.svg')] bg-no-repeat h-full"></div>
                <div className="fixed flex z-10 gap-5 justify-between px-16 py-4 w-full text-base font-medium text-center text-white border-b border-solid bg-neutral-900 bg-opacity-50 border-zinc-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <Image
                        width={100}
                        height={100}
                        loading="lazy"
                        src="/images/logo.svg"
                        alt='logo'
                        className="shrink-0 max-w-full aspect-[4.35] w-[200px]"
                    />
                    <Link href={'https://www.niftytrader.in/'} target='_blank'>
                        <div className="justify-center px-6 py-2 my-auto rounded border border-white border-solid max-md:px-5">
                            Visit Website
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col 2xl:flex-row items-center justify-center gap-2 h-full w-100">
                    <div className="flex flex-col max-md:ml-0 max-md:w-full py-28 md:py-10 lg:py-0">
                        <div className="flex flex-col max-md:ml-0 max-md:w-full text-center 2xl:text-start">
                            <div className="flex flex-col justify-center self-stretch px-6 py-16 my-auto text-2xl font-bold text-white backdrop-blur-[9.149999618530273px] rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                <h1 className="text-6xl tracking-tighter uppercase max-md:max-w-full max-md:text-4xl">
                                    Stock Screening Simplifed!
                                </h1>
                                <div className="mt-8 max-md:max-w-full">
                                    Find Winning Stock Faster with Nifty Trader&apos;s <br /> Advanced Stock Screening Tool
                                </div>
                                <Link target='_blank' href='https://www.niftytrader.in/primeplans' className="px-8 self-center 2xl:self-start py-4 mt-8 text-center cursor-pointer bg-[#13A8D7] rounded max-md:px-5 hover:bg-transparent border-2 border-[#13A8D7] hover:text-[#13A8D7] duration-300">
                                    Free Trial
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full md:w-[80%] lg:w-[60%] 2xl:w-1/2 md:mb-4">
                        <div className="md:rounded-[40px] overflow-hidden w-full 2xl:w-[776px] h-[452px]">
                            <iframe title='video' width="100%" height="100%" src="https://www.youtube.com/embed/oA33nRYepaQ?si=sbnIJy3lAxAh-9cx" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center self-stretch px-16 py-16 w-full text-center bg-neutral-200 text-zinc-800 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[1209px]">
                    <div className="text-5xl font-bold tracking-tighter uppercase max-md:max-w-full max-md:text-4xl">
                        The Ultimate Destination For Stock Market Insight
                    </div>
                    <div className="mx-6 mt-4 text-2xl max-md:mr-2.5 max-md:max-w-full">
                        Join 1 million Traders & Investors who trust Nifty Trader for smart
                        trading & real-time stock insights.
                    </div>
                    <div className="group flex gap-2.5 justify-center self-center cursor-pointer px-8 py-4 mt-4 text-xl font-medium rounded border border-solid border-zinc-800 max-md:px-5">
                        <div>Explore Features</div>
                        <Image
                            loading='lazy'
                            src={'/icons/right-arrow.svg'}
                            width={25}
                            height={25}
                            alt='right arrow'
                            className='group-hover:rotate-[360deg] transform duration-500'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBanner