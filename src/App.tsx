import Footer from "./components/footer";
import "./App.css";
import WhyShouldTrySection from "./components/Home/WhyShouldTry";
import MentorSection from "./components/Home/Mentor";

function App() {
    return (
        <>
            <main>
                <WhyShouldTrySection />
                <MentorSection />
            </main>
            <Footer />
        </>
    );
}

export default App;
