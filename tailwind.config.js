/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            borderWidth: {
                "1": "1px"
            },
            colors: {
                "discord": "#5865f2",
                "brand-100": "#9688ff",
                "brand-200": "#796cdc"
            }
        },
    },
    plugins: [],
}