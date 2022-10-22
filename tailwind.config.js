/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{ //so if you want to add custom colors you got to put it in the theme -> extend -> colors object smh
        'custom-blue' : '#4B7FBD',
        'custom-purple' : '#725AA8',
      },
      padding:{
        '1/2' : '50%',
        full: '100%',
      },
    },
  },
  plugins: [],
};
