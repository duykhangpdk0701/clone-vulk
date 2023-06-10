import React, { useState, useEffect, createContext, useContext } from "react";
import WhyShouldTrySection from "./components/Home/WhyShouldTry";
import MentorSection from "./components/Home/Mentor";
import Creator from "./components/Home/Creator";
import Reasons from "./components/Home/Reasons";
import Content from "./components/Home/Content";
import BackToTop from "./components/BackToTop";
import HeroSection from "./components/Home/Hero";
import TheToolSection from "./components/Home/Tool";
import CommunitySection from "./components/Home/Community";
import Footer from "@/components/footer";
import ForYouSection from "./components/Home/ForYou";
import Header from "./components/Header";
import "./App.css";

interface IContext {
    darkTheme:boolean;
    setDarkTheme?: React.Dispatch<React.SetStateAction<boolean>>;
    handleOnChagneTheme?: () => void;
}

const Context = createContext<IContext>({
    darkTheme: false,
});

export const useStore = () => {
    return useContext(Context);
};

function App() {
    const [darkTheme, setDarkTheme] = useState<boolean>(true);

    const handleOnChagneTheme = () => {
        setDarkTheme((pre) => {
            if (!pre) {
                localStorage.theme = "dark";
            } else {
                localStorage.theme = "light";
            }
            return !pre;
        });
    };

    const setting = {
        darkTheme,
        setDarkTheme,
        handleOnChagneTheme
    };

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            setDarkTheme(true);
        } else {
            setDarkTheme(false);
            document.documentElement.classList.remove("dark");
        }
    }, [darkTheme]);

    return (
        <Context.Provider value={setting}>
            <BackToTop />
            <Header />
            <main className="dark:bg-bg-dark-secondary">
                <HeroSection />
                <TheToolSection />
                <CommunitySection />
                <ForYouSection />
                <Creator />
                <Reasons />
                <Content />
                <WhyShouldTrySection />
                <MentorSection />
            </main>

            <Footer />
        </Context.Provider>
    );
}

export default App;
