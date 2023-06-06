/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
            },
            transparent: "transparent",
            bg: {
                section: '#fff',
                section2: '#f5f6fa',
            },
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
                    "100%": { opacity: 1},
                },
            },
            animation: {
                appear: "appear 0.5s ease-in-out",
            },
        },
    },
    plugins: [],
};
