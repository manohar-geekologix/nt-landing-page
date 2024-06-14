'use client'
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: 'What is the NiftyTrader Prime plan?',
            answer: 'The prime plan is a subscription-based plan that provides access to a variety of premium features on NiftyTrader.',
        },
        {
            question: 'What are the premium features included with the prime plan?',
            answer: 'The prime plan includes access to various screeners, Live analytics, custom watchlists, real-time market data, and stock alerts, SAR notifications in real time & much more.',
        },
        {
            question: 'Can I try the premium features before I subscribe to the prime plan?',
            answer: 'Yes, you can request your friends to share a free trial of NiftyTrader Prime. Simply request for a trial on your social media account and if any of your friends is a NiftyTrader Prime member, they can offer you a limited period trial of NiftyTrader prime plan.',
        },
        {
            question: 'How do I subscribe to the prime plan?',
            answer: 'To subscribe to the prime plan, simply visit our pricing page and select the subscription length that works best for you. You will be prompted to enter your payment information and will then have immediate access to all of the premium features included with the prime plan.',
        },
        {
            question: 'Can I upgrade my subscription level?',
            answer: 'Yes, you can upgrade your subscription level within 1 week of purchasing the prime plan. Please contact care@niftytrader.in, and they will assist you with the process to upgrade.',
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept a variety of payment methods, including major credit cards, UPI, Net Banking, Paytm, and Debit Cards.',
        },
        {
            question: 'Do you offer any discounts or promotions?',
            answer: 'Yes, we occasionally offer discounts and promotions to our subscribers. Be sure to follow us on social media or subscribe to our email newsletter to stay up-to-date on the latest offers.',
        },
    ];

    return (
        <div className='container'>
            <div className="mt-10 text-5xl font-bold text-center text-zinc-800 max-md:text-4xl">
                FAQ
            </div>
            <div className='mx-5 lg:mx-32'>
                {faqData.map((item, index) => (
                    <div key={index} className='mb-2'>
                        <div
                            onClick={() => toggleFaq(index)}
                            className={`flex flex-nowrap gap-3.5 items-center justify-between px-3 py-4 lg:py-6 mt-4 w-full text-lg font-medium bg-white border-b border-solid border-zinc-800 text-zinc-800 cursor-pointer`}
                        >
                            <div>{item.question}</div>
                            {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                            <div className='px-3 py-4 lg:py-6 w-full text-lg font-medium text-zinc-800'>
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
