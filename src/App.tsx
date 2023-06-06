import Footer from "./components/footer";
import "./App.css";
import WhyShouldTrySection from "./components/Home/WhyShouldTry";
import MentorSection from "./components/Home/Mentor";
import IntergrationSection from "./components/Home/Intergration";

function App() {
    return (
        <>
            <main>
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
