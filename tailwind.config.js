/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "app/templates/**/*.{html,js}",
        "app/templates/includes/**/*.{html,js}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "radial-circle":
                    "radial-gradient(circle at center center, #0F2C41,  #0F172A, #0F172A)"
            },
            colors: {
                color1: "#0F172A",
                color2: "#D8E6FB",
                color3: "orange"
            },
            fontFamily: {
                ubuntu: ["Ubuntu", "sans-serif"]
            }
        },
        plugins: []
    }
};