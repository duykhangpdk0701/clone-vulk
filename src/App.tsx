import WhyShouldTrySection from "./components/Home/WhyShouldTry";
import MentorSection from "./components/Home/Mentor";
import Creator from "./components/Home/Creator";
import Reasons from "./components/Home/Reasons";
import Content from "./components/Home/Content";
import BackToTop from "./components/BackToTop";
import "./App.css";
import IntergrationSection from "./components/Home/Intergration";
import HeroSection from "./components/Home/Hero";
import TheToolSection from "./components/Home/Tool";
import CommunitySection from "./components/Home/Community";
import Footer from "@/components/footer";

function App() {
    return (
        <>
            <BackToTop />
            <main>
                <HeroSection />
                <TheToolSection />
                <CommunitySection />
                <Content />
                <Reasons />
                <Creator />
                <IntergrationSection />
                <WhyShouldTrySection />
                <MentorSection />
            </main>

            <Footer />
        </>
    );
}

export default App;
