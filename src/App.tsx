import Footer from "./components/Footer";
import WhyShouldTrySection from "./components/Home/WhyShouldTry";
import MentorSection from "./components/Home/Mentor";
import Creator from "./components/Home/Creator";
import Reasons from "./components/Home/Reasons";
import Content from "./components/Home/Content";
import BackToTop from "./components/BackToTop";
import "./App.css";

function App() {
    return (
        <>
            <BackToTop/>
            <main>
                <Creator/>
                <Reasons/>
                <Content />
                <WhyShouldTrySection />
                <MentorSection />
            </main>

            <Footer />
        </>
    );
}

export default App;
