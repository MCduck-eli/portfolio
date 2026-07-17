import About from "../components/about";
import CompanyLogos from "../components/companyLogos";
import Contact from "../components/contact";
import DoubleCarousel from "../components/doubleCarousel";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Services from "../components/services";
// @ts-ignore
import Testimonials from "../components/testimonials";

const Page = () => {
    return (
        <>
            <Hero />
            <CompanyLogos />
            <DoubleCarousel />
            <About />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
        </>
    );
};

export default Page;
