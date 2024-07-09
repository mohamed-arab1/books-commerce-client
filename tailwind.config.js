/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "CardHeight": "539px",
        "imageCard": "300px",
        "smallImageCard": "250px",
        "button": "53px"

      },

      fontFamily: {
        "SansitaSwashed": ["Sansita Swashed"],
        "DMSerifDisplay": ["DM Serif Display"],
        "raleway": ["Raleway"],
        "kantumruy": ['Kantumruy Pro'],
        "poppins": ["Poppins"]
      },
      fontSize: {
        "18": "18px",
        "16": "16px"
      },
      width: {
        "CardWidth": "337px",
        "smallCardWidth": "260px",
        "button": "123px"
      },
      borderRadius: {
        "card": "10px"
      },
      padding: {
        "33px": "33px"

      },
      boxShadow: {
        'cardshadow': '10px 2px 5px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        "star": "#FFC444",
        "bgCard": "#F8F8F8",
        "buttons": '#D9D9D9',
        "title": "#26264F"
      }
    },
  },
  plugins: [],
}

