/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "CardHeight": "390px",
        "imageCard": "150px",
        "smallImageCard": "250px",
        "button": "53px"

      },

      fontFamily: {
        "SansitaSwashed": ["Sansita Swashed"],
        "DMSerifDisplay": ["DM Serif Display"],
        "raleway": ["Raleway"],
        "kantumruy": ['Kantumruy Pro'],
        "poppins": ["Poppins"],
        "gothic":["Gothic A1"]
      },
      fontSize: {
        "18": "18px",
        "16": "16px"
      },
      width: {
        "CardWidth": "280px",
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
        "title": "#26264F",
       "bgfooter": "#2F3367",
       "textFooter":"#FFFFFF",
       "search":"#444B8C",
       "active":"#00C9EB",
       'custom-color': {
          DEFAULT:'#F8CC77',
          '16': 'rgba(248, 204, 119, 0.16)',
          '90': 'rgba(248, 204, 119, 0.9)',
          '80': 'rgba(248, 204, 119, 0.8)',
          '100':'rgba(253, 209, 121)'
        },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(to right, rgba(248, 204, 119, 0.8) 80%, rgba(248, 204, 119, 0.16) 20%)',
        },

      }
    },
  },
  plugins: [],
}

