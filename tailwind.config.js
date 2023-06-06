/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
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
            primary: {
                purple: "#7703fc",
                bg_light_footer: "#252e3c",
                bg_input: "#2f3a4c",
                border_input: "#3c4b62",
                white: "#FCFCFC",
            },
            error: {
                light: "#EF5350",
            },
            black: "black",
        },
        extend: {},
    },
    plugins: [],
};
