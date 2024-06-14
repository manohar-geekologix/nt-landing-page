import Image from 'next/image';
import Marquee from "react-fast-marquee";

const testimonialData = [
    {
        "name": "Bhanvadiya Maheshbhai Narotambhai",
        "imageUrl": "images/bhanvadiya.svg",
        "testimonial": "Superb app! You guys are great. Everything's at my fingertips now: option analysis, EMA, pivot points, company profiles, gaps up/down, FII & DII data, ban lists... What's not here?!   You keep nothing hidden. Thank you very much, guys! Thanks a lot!"
    },
    {
        "name": "Rajkumar Sahani",
        "imageUrl": "images/rajkumari.svg",
        "testimonial": `The website and app are incredibly intuitive and easy to navigate. Whether you’re a seasoned trader or a beginner, you’ll find everything you need right at your fingertips.
        Overall, NiftyTrader has exceeded my expectations in every way.`
    },
    {
        "name": "Anjan Banerjee",
        "imageUrl": "images/profile.svg",
        "testimonial": "This is the app I've been looking for for a long time. I couldn't find it anywhere else. It seems their understanding of user needs aligns perfectly with what I was exactly looking for. Thanks, guys, for making this possible!"
    },
    {
        "name": "Vishwanath Hegde",
        "imageUrl": "images/Vishwanath.svg",
        "testimonial": "Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many many thanks. Request all traders to use this app."
    }
];

const Testimonials = () => {
    return (
        <div className="container my-26">
            <div className="pt-5 self-center text-5xl font-bold text-center text-zinc-800 max-md:max-w-full max-md:text-4xl">
                Client Testimonials
            </div>
            <div className='my-5'>
                <Marquee pauseOnHover={true} direction='left' speed='150'>
                    <div className="flex">
                        <div className="whitespace-nowrap">
                            <div className='flex gap-5 justify-between py-4 pl-4 mt-4 w-full max-md:flex-wrap max-md:max-w-full'>
                                {testimonialData.map(item => (
                                    <div key={item.name} className="p-6 bg-white shadow-custom rounded-[32px] max-md:px-5 max-md:max-w-full w-[500px] lg:w-[807px] overflow-hidden">
                                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                            <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                                                <Image
                                                    loading="lazy"
                                                    src={item.imageUrl}
                                                    width={100}
                                                    height={100}
                                                    alt={item.name}
                                                    className="shrink-0 max-w-full rounded-full aspect-square w-[172px] max-md:mt-10"
                                                />
                                            </div>
                                            <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                                                <div className="flex flex-col self-stretch my-auto text-zinc-800 max-md:mt-10 max-md:max-w-full">
                                                    <div className="text-2xl font-semibold max-md:max-w-full">
                                                        {item?.name}
                                                    </div>
                                                    <div className="mt-1.5 text-base max-md:max-w-full text-wrap">
                                                        {item?.testimonial}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Marquee>

                <Marquee pauseOnHover={true} direction='right' speed='150'>
                    <div className="flex">
                        <div className="whitespace-nowrap">
                            <div className='flex gap-5 justify-between py-4 pl-4 mt-4 w-full max-md:flex-wrap max-md:max-w-full'>
                                {testimonialData?.reverse().map(item => (
                                    <div key={item.name} className="p-6 bg-white shadow-custom rounded-[32px] max-md:px-5 max-md:max-w-full w-[500px] lg:w-[807px] overflow-hidden">
                                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                            <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                                                <Image
                                                    alt={item.name}
                                                    loading="lazy"
                                                    src={item.imageUrl}
                                                    width={100}
                                                    height={100}
                                                    className="shrink-0 max-w-full rounded-full aspect-square w-[172px] max-md:mt-10"
                                                />
                                            </div>
                                            <div className="flex flex-col flex-nowrap ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                                                <div className="flex flex-col self-stretch my-auto text-zinc-800 max-md:mt-10 max-md:max-w-full">
                                                    <div className="text-2xl font-semibold max-md:max-w-full">
                                                        {item?.name}
                                                    </div>
                                                    <div className="mt-1.5 text-base max-md:max-w-full text-wrap">
                                                        {item?.testimonial}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Testimonials;