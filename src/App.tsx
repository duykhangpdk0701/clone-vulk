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

            <div
                data-v-4eb9d07b=""
                data-v-b0db8ddf=""
                className="animated-waves"
            >
                <svg
                    data-v-4eb9d07b=""
                    className="waves wave-footer-dark"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shape-rendering="auto"
                >
                    <defs data-v-4eb9d07b="">
                        <path
                            data-v-4eb9d07b=""
                            id="a-wave-1"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        ></path>
                    </defs>
                    <g data-v-4eb9d07b="" className="parallax">
                        <use
                            data-v-4eb9d07b=""
                            xlinkHref="#a-wave-1"
                            x="48"
                            y="0"
                            fill="rgba(255,255,255,0.7)"
                        ></use>
                        <use
                            data-v-4eb9d07b=""
                            xlinkHref="#a-wave-1"
                            x="48"
                            y="3"
                            fill="rgba(255,255,255,0.5)"
                        ></use>
                        <use
                            data-v-4eb9d07b=""
                            xlinkHref="#a-wave-1"
                            x="48"
                            y="5"
                            fill="rgba(255,255,255,0.3)"
                        ></use>
                        <use
                            data-v-4eb9d07b=""
                            xlinkHref="#a-wave-1"
                            x="48"
                            y="7"
                            fill="#fff"
                        ></use>
                    </g>
                </svg>
            </div>

            <div className="h-[300px]"></div>
            <Footer />
        </>
    );
}

export default App;
