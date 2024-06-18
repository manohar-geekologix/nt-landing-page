import Image from 'next/image';
import Link from 'next/link';

const PriceingTable = () => {
    const rightArrow = <Image alt='yes' src={'/icons/right-tick.svg'} width={20} height={20} />
    const crossArrow = <Image alt='no' src={'/icons/crossarrow.svg'} width={20} height={20} />
    const tdata = [
        { feature: "Multi-device sync of data", basic: rightArrow, pro: rightArrow, business: rightArrow },
        { feature: "Option Charts", basic: rightArrow, pro: rightArrow, business: rightArrow },
        { feature: "Index Contributors", basic: rightArrow, pro: rightArrow, business: rightArrow },
        { feature: "Max Pain Chart (Stocks & Indices)", basic: rightArrow, pro: rightArrow, business: rightArrow },
        { feature: "Multi-strike Comparison", basic: rightArrow, pro: rightArrow, business: rightArrow },
        { feature: "Custom Alerts", basic: rightArrow, pro: rightArrow, business: rightArrow },
        { feature: "Trading View Chart (w Live Data)", basic: rightArrow, pro: rightArrow, business: rightArrow },
        { feature: "WhatsApp Alerts", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Options Screener", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Live Market Screener", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Advanced Stock Screener", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Trending OI", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Live Analytics (Nifty 50, BN, FN & Sensex)", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "SAR notification alerts", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Live NSE Option Chain and Stock Quotes after Broker Connect", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "GPT Alerts after Broker Connect", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Download Max Pain & Option Chain", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Ads-free experience", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Trading Desk (coming soon)", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Intraday Backtesting (coming soon)", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "NT Signals (coming soon)", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Option Simulator (Nifty, BN, FinNifty)", basic: crossArrow, pro: crossArrow, business: rightArrow },
    ];
    
    return (
        <div className='container max-md:pt-10 pb-10 md:pb-16'>
            <div className="md:mt-16 md:mb-10 mb-5 text-5xl font-bold text-center text-zinc-800 max-md:text-4xl">
                Pricing Plan
            </div>
            <div className="overflow-auto bg-white">
                <table className='border-collapse border border-zinc-200 w-full'>
                    <thead>
                        <th className='max-w-36'>
                            <td>
                                <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-lg">
                                    <div className="flex gap-4 text-zinc-800">
                                        <div className="text-start my-auto text-lg lg:text-2xl font-bold">
                                            Compare plans
                                        </div>
                                        <div className="hidden lg:block justify-center px-2 lg:px-5 py-2 text-sm lg:text-base font-medium rounded-3xl border border-solid border-neutral-400">
                                            60% Off
                                        </div>
                                    </div>
                                    <div className="mt-3 text-xs md:text-sm font-medium leading-5 text-start text-neutral-400">
                                        Choose your workspace plan according to your <br /> organisational
                                        plan
                                    </div>
                                </div>
                            </td>
                        </th>
                        <th className='border-l border-zinc-200 max-w-32'>
                            <td className='flex flex-col justify-center items-center p-2 md:p-3 lg:p-7'>
                                <div className="max-md:px-5">
                                    <div className="flex flex-col lg:flex-row gap-2 justify-center item-center">
                                        <div className="text-3xl font-bold text-zinc-800">Free</div>
                                        <div className="text-sm md:mt-4 font-medium leading-5 text-neutral-400">
                                            / Lifetime
                                        </div>
                                    </div>
                                </div>
                                <Link target='_blank' href={'https://www.niftytrader.in/primeplans'} className="justify-center items-center py-1 lg:py-3 mt-7 text-[12px] md:text-base font-bold text-center text-white bg-[#236AD4] rounded w-full cursor-pointer hover:bg-white hover:text-[#236AD4] border-2 border-[#236AD4] duration-200">
                                    Create Free Account
                                </Link>
                            </td>
                        </th>
                        <th className='border-l border-zinc-200 max-w-32'>
                            <td className='flex flex-col justify-center items-center p-2 md:p-3 lg:p-7'>
                                <div className="max-md:px-5">
                                    <div className="flex flex-col lg:flex-row gap-2 justify-center item-center">
                                        <div className="text-3xl font-bold text-zinc-800 text-nowrap">₹ 849</div>
                                        <div className="text-sm md:mt-4 font-medium leading-5 text-neutral-400">
                                            / Month
                                        </div>
                                    </div>
                                </div>
                                <Link target='_blank' href={'https://www.niftytrader.in/primeplans'} className="justify-center items-center py-3 mt-7 text-[12px] md:text-base font-bold text-center text-white bg-[#236AD4] rounded w-full cursor-pointer hover:bg-white hover:text-[#236AD4] border-2 border-[#236AD4] duration-200">
                                    Login to Buy
                                </Link>
                            </td>
                        </th>
                        <th className='border-l border-zinc-200 max-w-32'>
                            <td className='flex flex-col justify-center items-center p-2 md:p-3 lg:p-7'>
                                <div className="max-md:px-5">
                                    <div className="flex flex-col lg:flex-row gap-2 justify-center item-center">
                                        <div className="text-3xl font-bold text-zinc-800 text-nowrap">₹ 4310</div>
                                        <div className="text-sm md:mt-4 font-medium leading-5 text-neutral-400">
                                            / Year
                                        </div>
                                    </div>
                                </div>
                                <Link target='_blank' href={'https://www.niftytrader.in/primeplans'} className="justify-center items-center py-3 mt-7 text-[12px] md:text-base font-bold text-center text-white bg-[#236AD4] rounded w-full cursor-pointer hover:bg-white hover:text-[#236AD4] border-2 border-[#236AD4] duration-200">
                                    Login to Buy
                                </Link>
                            </td>
                        </th>
                    </thead>
                    <tbody>
                        {tdata.map(i => (
                            <tr key={i.feature}>
                                <td className='max-w-72 border border-zinc-200'>
                                    <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-sm lg:text-lg">
                                        {i.feature}
                                    </div>
                                </td>
                                <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52'>
                                    <div className="flex items-center justify-center">
                                        {i.basic}
                                    </div>
                                </td>
                                <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52'>
                                    <div className="flex items-center justify-center">
                                        {i.pro}
                                    </div>
                                </td>
                                <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52'>
                                    <div className="flex items-center justify-center">
                                        {i.business != 'Unlimited' ? i.business : (
                                            <div className='text-center'>
                                                <span>Unlimited</span> <br />
                                                <span className='text-zinc-400'>Pages Add-ons on Demand</span>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PriceingTable