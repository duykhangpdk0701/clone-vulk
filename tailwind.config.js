import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            robo: ["Roboto", "sans-serif"],
            mono: ["Montserrat", "sans-serif"],
        },

        colors: {
            text: {
                medium: "#747990",
                light: "#a2a5b9",
                link: "#7703fc",
                dark: {
                    title: "#fcfcfc",
                },
            },
            bg: {
                primary: "#f5f6fa",
                section: "#fff",
                section2: "#f5f6fa",
                switch: "#ededed",
                dark: {
                    primary: "#0C0C18",
                    secondary: "#0f0f1f",
                    third: "#0a0a14",
                    card: "#18182f",
                    border: '#222244',
                },
            },
            transparent: "transparent",
            primary: {
                purple: "#7703fc",
                purple_light: "#ebd9ff",
                bg_light_footer: "#252e3c",
                bg_input: "#2f3a4c",
                border_input: "#3c4b62",
                border_button: "#e5e5e5",
                white: "#FCFCFC",
            },
            error: {
                light: "#EF5350",
            },
            black: "black",
        },
        extend: {
            keyframes: {
                appear: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                wave: {
                    "0%": { transform: "translateX(-90px)" },
                    "100%": { transform: "translateX(85px)" },
                },
            },
            animation: {
                appear: "appear 0.5s ease-in-out",
                wave: "wave 18s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite",
            },
        },
    },
    plugins: [
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    "animation-delay": (value) => {
                        return {
                            "animation-delay": value,
                        };
                    },
                },
                {
                    values: theme("transitionDelay"),
                }
            );
        }),
    ],
};
