import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        fontFamily: {
            heading: ["Vollkorn"],
            display: ["Poppins"],
        },
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.5rem",
            xl: [
                "2rem",
                {
                    fontWeight: "500",
                },
            ],
            "2xl": "3rem",
            "3xl": [
                "4rem",
                {
                    fontWeight: "700",
                },
            ],
        },
        extend: {
            boxShadow: {
                custom: "2px 2px 4px 0px rgba(0, 0, 0, 0.04), -2px -2px 4px 0px rgba(0, 0, 0, 0.04)",
            },
            colors: {
                secondary: {
                    color: "#3059bd",
                    light: {
                        1: "#426bcf",
                        2: "#5f82d7",
                        3: "#7c99de",
                        4: "#99afe5",
                        5: "#b6c6ed",
                    },
                    dark: {
                        1: "#284ba0",
                        2: "#213e83",
                        3: "#1a3066",
                        4: "#122249",
                    },
                },
                primary: {
                    color: "#49a47c",
                    light: {
                        1: "#5bb68e",
                        2: "#74c1a0",
                        3: "#8dcdb1",
                        4: "#8dcdb1",
                        5: "#c0e3d4",
                    },
                    dark: {
                        1: "#3e8b69",
                        2: "#327256",
                        3: "#275843",
                        4: "#1c3f30",
                        5: "#10231b",
                    },
                },
                accent: {
                    color: "#BE2D3E",
                    light: {
                        1: "#CF3043",
                        2: "#D85A69",
                        3: "#E2838E",
                        4: "#ECACB4",
                        5: "#F5D6D9",
                    },
                    dark: {
                        1: "#A52736",
                        2: "#7C1D28",
                        3: "#53131B",
                        4: "#3E0F14",
                        5: "#150507",
                    },
                },
                text: {
                    color: "#0D0D0D",
                    light: {
                        1: "#7E7E81",
                        2: "#98989A",
                        3: "#B2B2B3",
                        4: "#CBCBCD",
                        5: "#E5E5E6",
                    },
                    dark: {
                        1: "#656567",
                        2: "#4C4C4D",
                        3: "#323234",
                        4: "#262627",
                        5: "#0D0D0D",
                    },
                },
                surface: {
                    color: "#F2F2F2",
                    light: {
                        1: "#7E7E81",
                        2: "#98989A",
                        3: "#B2B2B3",
                        4: "#CBCBCD",
                        5: "#E5E5E6",
                    },
                    dark: {
                        1: "#656567",
                        2: "#4C4C4D",
                        3: "#323234",
                        4: "#262627",
                        5: "#0D0D0D",
                    },
                },
                success: {
                    color: "#2ecc71",
                    light: {
                        1: "#2fd072",
                        2: "#59d98e",
                        3: "#82e3aa",
                        4: "#acecc7",
                        5: "#d5f6e3",
                    },
                    dark: {
                        1: "#26a65b",
                        2: "#1c7d44",
                        3: "#13532e",
                        4: "#0e3e22",
                        5: "#05150b",
                    },
                },
                error: {
                    color: "#E74C3C",
                    light: {
                        1: "#e3301c",
                        2: "#e95949",
                        3: "#ee8377",
                        4: "#f4aca4",
                        5: "#f9d6d2",
                    },
                    dark: {
                        1: "#b62616",
                        2: "#881d11",
                        3: "#5b130b",
                        4: "#440e08",
                        5: "#170503",
                    },
                },
                warning: {
                    color: "#E67E22",
                    light: {
                        1: "#e67919",
                        2: "#eb9447",
                        3: "#f0ae75",
                        4: "#f5c9a3",
                        5: "#fae4d1",
                    },
                    dark: {
                        1: "#b86114",
                        2: "#8a480f",
                        3: "#5c300a",
                        4: "#452408",
                        5: "#170c03",
                    },
                },
            },
        },
    },

    plugins: [forms],
};
