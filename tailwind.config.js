/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'netron': ['Netron', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'nusar': ['nusar', 'sans-serif']
      },
      colors: {
        'primary-purple': '#613aeb',
        'primary-pink': '#9e00b7',
        'glow-purple': '#614ad3',
      },
      animation: {
        'glow': 'glow 1s alternate infinite',
        'glitch': 'glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'fadeInUp': 'fadeInUp 1.2s ease-out 1.5s forwards',
        'flip': 'flip 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        glow: {
          'from': { textShadow: '0px 0px 2px #fff, 0px 0px 5px #614ad3' },
          'to': { textShadow: '0px 0px 12px #fff, 0px 0px 30px #614ad3' }
        },
        'glitch-color': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        flip: {
          'to': { transform: 'rotateX(-180deg)' }
        }
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      rotate: {
        'x-180': 'rotateX(180deg)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective-400': {
          'perspective': '400px',
        },
        '.rotate-x-180': {
          'transform': 'rotateX(180deg)',
        },
        '.flipped': {
          'transform': 'rotateX(-180deg)',
          'transition': 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
        },
        '.card': {
          'position': 'relative',
          'width': '100%',
          'height': '100%',
          'transform-style': 'preserve-3d',
          'transition': 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
        },
        '.card-face': {
          'position': 'absolute',
          'width': '100%',
          'height': '100%',
          'backface-visibility': 'hidden',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
        '.card-face-back': {
          'transform': 'rotateX(180deg)',
        }
      });
    },
  ],
}