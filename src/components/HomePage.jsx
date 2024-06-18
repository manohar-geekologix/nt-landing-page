import dynamic from "next/dynamic";
const Testimonials = dynamic(() => import('./Testimonial'))
const Faq = dynamic(() => import('./Faq'))
const Footer = dynamic(() => import('./Footer'))
const FeatureCard = dynamic(() => import('./FeatureCard'))
const MainBanner = dynamic(() => import('./MainBanner'))
const SliderCard = dynamic(() => import('./SliderCard'));
const PriceingTable = dynamic(() => import('./PriceingTable'), { ssr: false });

function HomePage() {
    return (
        <>
            <MainBanner />
            <SliderCard />
            <FeatureCard />
            <Testimonials />
            <PriceingTable />
            <Faq />
            <Footer />
        </>
    );
}

export default HomePage