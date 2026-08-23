"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import About from "../components/about";
import CompanyLogos from "../components/companyLogos";
import Contact from "../components/contact";
import DoubleCarousel from "../components/doubleCarousel";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Services from "../components/services";
import Footer from "../components/shared/footer";
// @ts-ignore
import Testimonials from "../components/testimonials";
import WelcomeOverlay from "../components/welcome-overlay";

const Page = () => {
    const router = useRouter();
    const [welcomeName, setWelcomeName] = useState<string | null>(null);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const userStr = localStorage.getItem("user");
        if (!userStr) {
            router.push("/auth");
        } else {
            try {
                const user = JSON.parse(userStr);
                const hasShownWelcome = sessionStorage.getItem("welcome_shown");
                if (!hasShownWelcome && user?.name) {
                    setWelcomeName(user.name);
                    sessionStorage.setItem("welcome_shown", "true");
                }
            } catch (e) {
                router.push("/auth");
            }
            setIsChecking(false);
        }
    }, [router]);

    if (isChecking) {
        return <div className="min-h-screen bg-[#0a0718]" />;
    }

    return (
        <>
            <WelcomeOverlay
                name={welcomeName}
                onComplete={() => setWelcomeName(null)}
            />

            <Hero />
            <CompanyLogos />
            <DoubleCarousel />
            <About />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
};

export default Page;
