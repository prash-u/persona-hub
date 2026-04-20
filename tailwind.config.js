export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1.25rem",
                lg: "2rem",
                xl: "2.5rem"
            },
            screens: {
                "2xl": "1320px"
            }
        },
        extend: {
            fontFamily: {
                sans: ['"Manrope"', "ui-sans-serif", "system-ui", "sans-serif"],
                display: ['"Fraunces"', "ui-serif", "Georgia", "serif"]
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))"
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))"
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))"
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))"
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))"
                }
            },
            boxShadow: {
                glow: "0 24px 80px rgba(7, 14, 28, 0.16)",
                soft: "0 18px 36px rgba(10, 16, 28, 0.08)"
            },
            backgroundImage: {
                grid: "linear-gradient(to right, rgba(121, 140, 165, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(121, 140, 165, 0.08) 1px, transparent 1px)"
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" }
                }
            },
            animation: {
                float: "float 10s ease-in-out infinite"
            }
        }
    },
    plugins: []
};
