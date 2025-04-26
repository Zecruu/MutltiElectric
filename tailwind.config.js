/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // Scan HTML and JS files in the root
  theme: {
    extend: {
      colors: {
        'electric-blue': '#007BFF',
        'dark-gray': '#222222',
        'light-gray': '#F7F7F7',
        'footer-dark-blue': '#000428',
        'footer-light-blue': '#004e92',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example font, can be changed
        // Add a bold headline font later if needed
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards'
      },
      // Custom utility classes for animation delays
      // Will be accessible as animation-delay-300, animation-delay-600, etc.
      animationDelay: {
        300: '300ms',
        600: '600ms',
        900: '900ms',
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(to right, #000428, #004e92)',
      }
    },
  },
  plugins: [
    // Plugin for animation delay utilities
    function ({ addUtilities, theme }) {
      const animationDelays = theme('animationDelay', {});
      const utilities = Object.entries(animationDelays).map(([key, value]) => {
        return {
          [`.animation-delay-${key}`]: {
            'animation-delay': value,
          },
        };
      });
      addUtilities(utilities);
    },
  ],
} 