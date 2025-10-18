import FormsSection from "../components/landing-page/FormsSection";
import HeroSection from "../components/landing-page/HeroSection";
import ProgramsSection from "../components/landing-page/ProgramsSection";
import SocialSection from "../components/landing-page/SocialSection";
import TestimonialsSection from "../components/landing-page/TestimonialsSection";

export function LandingPage(){
    return (
        <>
        <HeroSection/>
        <ProgramsSection/>
        <TestimonialsSection/>
        <SocialSection/>
        <FormsSection/>
        </>
    )
}