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

            <div className="h-[300px]"></div>
            <Footer />
        </>
    );
}

export default App;
