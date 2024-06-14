import Image from 'next/image';
import Link from 'next/link';

const PriceingTable = () => {
    const rightArrow = <Image alt='yes' src={'/icons/right-tick.svg'} width={20} height={20} />
    const crossArrow = <Image alt='no' src={'/icons/crossarrow.svg'} width={20} height={20} />
    const tdata = [
        { feature: "Number of Users", basic: 1, pro: 3, business: 1 },
        { feature: "Users Per Page", basic: '3 Pages', pro: '50 Pages', business: 'Unlimited' },
        { feature: "Includes essential features to get started", basic: rightArrow, pro: rightArrow, business: rightArrow },
        { feature: "More advanced features for increased productivity", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Designing & Development", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Customizable options to meet your specific needs", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Secure data storage", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Email Support", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "24/7 customer support", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Analytics and reporting", basic: crossArrow, pro: rightArrow, business: rightArrow },
        { feature: "Account Management", basic: rightArrow, pro: rightArrow, business: rightArrow }
    ];
    return (
        <div className='container my-16'>
            <div className="mt-16 mb-10 text-5xl font-bold text-center text-zinc-800 max-md:text-4xl">
                Pricing Plan
            </div>
            <div className="overflow-auto">
                <table className='border-collapse border border-zinc-200 w-full'>
                    <thead>
                        <th className='max-w-40'>
                            <td>
                                <div className="px-4 lg:px-8 py-4 text-zinc-800 leading-7 font-medium text-lg">
                                    <div className="flex gap-4 text-zinc-800">
                                        <div className="text-start my-auto text-lg lg:text-2xl font-bold">
                                            Compare plans
                                        </div>
                                        <div className="hidden lg:block justify-center px-2 lg:px-5 py-2.5 text-sm lg:text-base font-medium rounded-3xl border border-solid border-neutral-400">
                                            60% Off
                                        </div>
                                    </div>
                                    <div className="mt-3 text-sm font-medium leading-5 text-start text-neutral-400">
                                        Choose your workspace plan according to your <br /> organisational
                                        plan
                                    </div>
                                </div>
                            </td>
                        </th>
                        <th className='border-l border-zinc-200 max-w-60'>
                            <td className='flex flex-col justify-center items-center p-3 lg:p-7'>
                                <div className="max-md:px-5">
                                    <div className="flex flex-col lg:flex-row gap-2 justify-center item-center">
                                        <div className="text-4xl font-bold text-zinc-800">Free</div>
                                        <div className="text-sm mt-4 font-medium leading-5 text-neutral-400">
                                            / Lifetime
                                        </div>
                                    </div>
                                </div>
                                <Link target='_blank' href={'https://www.niftytrader.in/primeplans'} className="justify-center items-center px-3 lg:px-16 py-4 mt-7 text-base font-bold text-center text-white bg-[#236AD4] rounded w-full cursor-pointer hover:bg-white hover:text-[#236AD4] border-2 border-[#236AD4] duration-200 text-nowrap">
                                    Create Free Account
                                </Link>
                            </td>
                        </th>
                        <th className='border-l border-zinc-200 max-w-60'>
                            <td className='flex flex-col justify-center items-center p-3 lg:p-7'>
                                <div className="max-md:px-5">
                                    <div className="flex flex-col lg:flex-row gap-2 justify-center item-center">
                                        <div className="text-4xl font-bold text-zinc-800 text-nowrap">₹ 849</div>
                                        <div className="text-sm mt-4 font-medium leading-5 text-neutral-400">
                                            / Month
                                        </div>
                                    </div>
                                </div>
                                <Link target='_blank' href={'https://www.niftytrader.in/primeplans'} className="justify-center items-center px-3 lg:px-16 py-4 mt-7 text-base font-bold text-center text-white bg-[#236AD4] rounded w-full cursor-pointer hover:bg-white hover:text-[#236AD4] border-2 border-[#236AD4] duration-200">
                                    Login to Buy
                                </Link>
                            </td>
                        </th>
                        <th className='border-l border-zinc-200 max-w-60'>
                            <td className='flex flex-col justify-center items-center p-3 lg:p-7'>
                                <div className="max-md:px-5">
                                    <div className="flex flex-col lg:flex-row gap-2 justify-center item-center">
                                        <div className="text-4xl font-bold text-zinc-800 text-nowrap">₹ 4310</div>
                                        <div className="text-sm mt-4 font-medium leading-5 text-neutral-400">
                                            / Year
                                        </div>
                                    </div>
                                </div>
                                <Link target='_blank' href={'https://www.niftytrader.in/primeplans'} className="justify-center items-center px-1 lg:px-16 py-4 mt-7 text-base font-bold text-center text-white bg-[#236AD4] rounded w-full cursor-pointer hover:bg-white hover:text-[#236AD4] border-2 border-[#236AD4] duration-200">
                                    Login to Buy
                                </Link>
                            </td>
                        </th>
                    </thead>
                    <tbody>
                        {tdata.map(i => (
                            <tr key={i.feature}>
                                <td className='max-w-72 min-w-60 h-[80px] border border-zinc-200'>
                                    <div className="px-4 lg:px-8 py-4 text-zinc-800 leading-7 font-medium text-sm *:lg:text-lg">
                                        {i.feature}
                                    </div>
                                </td>
                                <td className='border border-zinc-200'>
                                    <div className="flex items-center justify-center">
                                        {i.basic}
                                    </div>
                                </td>
                                <td className='border border-zinc-200'>
                                    <div className="flex items-center justify-center">
                                        {i.pro}
                                    </div>
                                </td>
                                <td className='border border-zinc-200'>
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