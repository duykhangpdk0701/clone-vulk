import Footer from "./components/footer";
import "./App.css";
import WhyShouldTrySection from "./components/Home/WhyShouldTry";
import MentorSection from "./components/Home/Mentor";
import IntergrationSection from "./components/Home/Intergration";
import HeroSection from "./components/Home/Hero";
import TheToolSection from "./components/Home/Tool";
import CommunitySection from "./components/Home/Community";

function App() {
    return (
        <>
            <main>
                <HeroSection />
                <TheToolSection />
                <CommunitySection />
                <IntergrationSection />
                <WhyShouldTrySection />
                <MentorSection />
            </main>

            <div className="h-[300px]"></div>
            <Footer />
        </>
    );
}

export default App;
