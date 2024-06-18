'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const MainBanner = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const navBarClasses = `fixed flex z-50 gap-0 md:gap-5 justify-between items-center px-16 py-4 w-full text-base font-medium text-center text-white max-md:flex-wrap max-md:px-5 max-md:max-w-full duration-500 ${scrollPosition > 650 ? 'bg-neutral-900/100' : 'bg-neutral-900/50'}`

    return (
        <>
            <div className="relative bg-[url('/images/mob_hero_section.svg')] md:bg-[url('/images/hero_section_bg.svg')] bg-no-repeat bg-cover bg-start h-full 2xl:h-[80vh]">
                <div className={navBarClasses}>
                    <Image
                        width={100}
                        height={100}
                        loading="lazy"
                        src="/images/logo.svg"
                        alt='logo'
                        className="shrink-0 max-w-full aspect-[4.35] w-[150px] md:w-[200px]"
                    />
                    <Link href={'https://www.niftytrader.in/'} target='_blank'>
                        <div className="justify-center text-sm md:text-md px-6 py-2 my-auto rounded border border-white border-solid max-md:px-5 hover:bg-white hover:text-black duration-300">
                            Visit Website
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col 2xl:flex-row items-center justify-center gap-2 container !bg-transparent size-full">
                    <div className="flex flex-col max-md:ml-0 max-md:w-full py-10 lg:py-0 w-full">
                        <div className="flex flex-col max-md:ml-0 max-md:w-full text-center 2xl:text-start">
                            <div className="flex flex-col justify-center self-stretch md:px-6 pb-5 py-16 my-auto text-white rounded-[32px] max-md:mt-10 max-md:max-w-full">
                                <h1 className="text-6xl uppercase max-md:max-w-full max-md:text-4xl font-bold">
                                    Stock Screening Simplifed!
                                </h1>
                                <div className="mt-3 md:mt-8 max-md:max-w-full font-medium md:text-xl">
                                    Find Winning Stock Faster with Nifty Trader&apos;s <br /> Advanced Stock Screening Tool
                                </div>
                                <Link target='_blank' href='https://www.niftytrader.in/primeplans' className="px-8 self-center 2xl:self-start md:py-4 py-2 mt-3 md:mt-8 text-center cursor-pointer bg-[#13A8D7] rounded max-md:px-5 hover:bg-transparent border-2 border-[#13A8D7] hover:text-[#13A8D7] duration-300 font-bold md:text-xl">
                                    Free Trial
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 flex flex-col justify-center items-end w-full md:w-[80%] lg:w-[60%] 2xl:w-1/2 md:mb-4">
                        <div className="md:rounded-[40px] overflow-hidden w-full 2xl:w-[776px] h-[250px] md:h-[452px]">
                            <iframe title='video' width="100%" height="100%" src="https://www.youtube.com/embed/oA33nRYepaQ?si=sbnIJy3lAxAh-9cx" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center self-stretch lg:px-16 py-8 md:py-16 w-full text-center bg-neutral-200 text-zinc-800 max-md:max-w-full">
                <div className="flex flex-col max-w-full">
                    <div className="text-2xl md:text-4xl font-semibold uppercase max-md:max-w-full">
                        The Ultimate Destination For Stock Market Insight
                    </div>
                    <div className="mx-6 mt-4 text-base md:text-2xl max-md:mr-2.5 max-md:max-w-full">
                        Join 1 million Traders & Investors who trust Nifty Trader for smart
                        trading & real-time stock insights.
                    </div>
                    <div className="group flex gap-2.5 justify-center self-center cursor-pointer px-8 md:py-4 py-2 mt-4 text-xl font-medium rounded border border-solid border-zinc-800 max-md:px-5">
                        <div className='text-base md:text-xl'>Explore Features</div>
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