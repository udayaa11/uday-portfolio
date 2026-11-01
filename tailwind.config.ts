import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./components/**/*.vue', './pages/**/*.vue', './app.vue', './data/**/*.ts'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#08080c', 900: '#0e0e14', 800: '#16161f', 700: '#22222e' },
        accent: { DEFAULT: '#8b5cf6', soft: '#a78bfa' },
        cyan: { glow: '#22d3ee' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
}
