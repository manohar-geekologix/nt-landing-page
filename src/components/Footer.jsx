import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className="px-20 py-20 mt-10 w-full min-h-[500px] max-md:px-5 bg-[url('/images/footerbanner.svg')] bg-no-repeat bg-cover">
                <div className='container flex justify-center 2xl:justify-end items-center'>
                    <div className="flex flex-col items-center justify-center 2xl:w-[50%] 2xl:pr-60">
                        <div className="mt-8 text-3xl lg:text-5xl font-light text-center text-zinc-800">
                            <span className="">Screening Like a Pro with</span>
                            <br />
                            <span className="font-semibold block my-4">Nifty Trader</span>
                        </div>
                        <div className="text-xl lg:text-2xl text-center text-neutral-400">
                            Stop wasting time and start winning! Get access to Nifty Trader&apos;s Stock Screeners today!
                        </div>
                        <Link target='_blank' href={'https://www.niftytrader.in/primeplans'}>
                            <div className="text-center px-16 py-5 mt-10 text-xl lg:text-3xl font-medium text-white bg-[#4399EB] rounded-lg max-md:px-6 max-md:mr-2.5 cursor-pointer hover:bg-white hover:text-[#4399EB] border-2 border-[#4399EB] duration-200">
                                Start Free Trial Now
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-between self-stretch px-16 py-4 w-full bg-neutral-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div className="flex gap-4">
                    <Link href={'https://www.facebook.com/niftytraderin'} target='_blank'>
                        <Image
                            src={'/icons/facebook.svg'}
                            width={35}
                            height={35}
                            alt='facebook'
                            className='cursor-pointer'
                        />
                    </Link>
                    <Link href={'https://x.com/niftytraderin'} target='_blank'>
                        <Image
                            src={'/icons/x.svg'}
                            width={35}
                            height={35}
                            alt='x'
                            className='cursor-pointer'
                        />
                    </Link>
                    <Link href={'https://www.youtube.com/@NiftyTraderIndia'} target='_blank'>
                        <Image
                            src={'/icons/yt.svg'}
                            width={35}
                            height={35}
                            alt='yt'
                            className='cursor-pointer'
                        />
                    </Link>
                    <Link href={'https://www.linkedin.com/company/niftytrader'} target='_blank'>
                        <Image
                            src={'/icons/linkdin.svg'}
                            width={35}
                            height={35}
                            alt='linkdin'
                            className='cursor-pointer'
                        />
                    </Link>
                    <Link href={'https://www.instagram.com/niftytraderin/'} target='_blank'>
                        <Image
                            src={'/icons/ig.svg'}
                            width={35}
                            height={35}
                            alt='ig'
                            className='cursor-pointer'
                        />
                    </Link>
                    <Link href={'https://t.me/NiftyTraderIn'} target='_blank'>
                        <Image
                            src={'/icons/tg.svg'}
                            width={35}
                            height={35}
                            alt='tg'
                            className='cursor-pointer'
                        />
                    </Link >
                </div >
                <Link href={'https://www.niftytrader.in'} target='_blank' className="text-xl font-semibold text-center text-white underline">
                    www.niftytrader.in
                </Link>
            </div >
        </>
    )
}

export default Footer