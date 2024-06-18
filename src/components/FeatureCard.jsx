import Link from 'next/link';
import { MdOutlineQueryStats, MdOutlineTroubleshoot, MdOutlineFindInPage, MdOutlineInsertLink } from "react-icons/md";

const FeatureCard = () => {
    const features = [
        {
            src: <MdOutlineTroubleshoot className='h-[30px] md:h-[55px] w-[30px] md:w-[55px] font-medium' />,
            alt: 'Advanced Stock Screener',
            url: 'https://www.niftytrader.in/advanced-stock-screener',
            title: 'Advanced Stock Screener',
            description: 'Access advanced filters like volume shockers, price action, range breakout, opening price clues, and more for efficient stock screening.'
        },
        {
            src: <MdOutlineQueryStats className='h-[30px] md:h-[55px] w-[30px] md:w-[55px] font-medium' />,
            alt: 'Live Market Screener',
            url: 'https://www.niftytrader.in/stock-screener',
            title: 'Live Market Screener',
            description: 'Access real-time market data and dynamic filters to ensure timely trades without outdated information.'
        },
        {
            src: <MdOutlineFindInPage className='h-[30px] md:h-[55px] w-[30px] md:w-[55px] font-medium' />,
            alt: 'Options Screener',
            url: 'https://www.niftytrader.in/options-screener',
            title: 'Options Screener',
            description: 'Quickly identify optimal trading opportunities in the options market with our real-time data and advanced filters.'
        },
        {
            src: <MdOutlineInsertLink className='h-[30px] md:h-[55px] w-[30px] md:w-[55px] font-medium' />,
            alt: 'Advanced Option Chain',
            url: 'https://www.niftytrader.in/nse-option-chain/nifty',
            title: 'Advanced Option Chain',
            description: 'Stay ahead with highlighted data on Greeks, PCR, Vol PCR, and Expected Range for the Day feature for confident target setting.'
        }
    ];
    return (
        <div className='container bg-red-500 md:pt-14'>
            <div className="grid grid-cols-2 overflow-auto grid-rows-1 md:grid-cols-2 xl:grid-cols-4 justify-between px-1 md:px-5 md:gap-5 gap-2 mx-4 md:mx-0 py-2 md:py-6">
                {features.map((feature, index) => (
                    <Link target='_blank' href={feature.url} key={index} className="group hover:text-[#4399EB] hover:bg-[#F8FBFF]  rounded-2xl shadow-md md:shadow-none md:rounded-[32px] hover:shadow-custom transition ease-in-out duration-300 max-md:mt-5 bg-white">
                        <div className="flex flex-col grow px-4 md:py-6 py-2 w-full rounded-[32px]">
                            {feature.src}
                            <div className="mt-3 text-base md:text-2xl font-semibold text-zinc-800 group-hover:text-[#4399EB] transition ease-in-out duration-300">
                                {feature.title}
                            </div>
                            <div className="mt-1 text-sm md:text-base text-neutral-400 group-hover:text-[#4399EB] transition ease-in-out duration-300">
                                {feature.description}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="py-12 max-w-full rounded-lg">
                <div className="flex flex-col items-center lg:flex-row gap-5 lg:pl-20 max-md:flex-col max-md:gap-0 bg-[url('/images/mob_banner2.svg')] md:bg-[url('/images/banner2.png')] bg-cover lg:bg-auto bg-no-repeat bg-right py-5 lg:p-12 justify-between shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)] ">
                    <div className="flex flex-col">
                        <div className="flex z-10 flex-col self-stretch my-auto text-zinc-800">
                            <div className="text-lg md:text-3xl xl:text-[38px] font-bold text-center lg:text-start text-white md:text-zinc-800">
                                Missing Trades Because of Outdated Data?
                            </div>
                            <div className="mt-2 md:mt-6 text-sm md:text-xxl xl:text-[26px] font-medium w-100 text-center lg:text-start text-white md:text-zinc-800">
                                Get the Live Market Screening with Dynamic Filters
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-end ml-5 mt-5 md:mt-0 mb-4 lg:mb-0">
                        <div className="flex overflow-hidden relative flex-col grow justify-center items-center md:items-end xl:text-3xl font-semibold text-white max-md:px-5">
                            <Link target='_blank' href={'https://www.niftytrader.in/primeplans'} className="text-white justify-center px-10 md:py-4 py-3 rounded-lg max-md:px-5 bg-gradient-to-r from-[#537E95] to-[#004063] cursor-pointer hover:from-transparent hover:to-transparent border-2 border-[#537E95] hover:border-[#004063] hover:text-[#004063] duration-300">
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