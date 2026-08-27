import ExploreGraph from "@/components/ExploreGraph";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowSkillGraphWorks from "@/components/HowGraphSkillsWork";
import Navbar from "@/components/Navbar";


export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <ExploreGraph/>
                <HowSkillGraphWorks/>
            </main>
        </>
    );
}