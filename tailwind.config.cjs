const config = {
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  
    plugins: [require('flowbite/plugin')],
  
    darkMode: 'class',
  
    theme: {
      extend: {
        fontFamily: {
            Rubik: ['Rubik', 'serif']
        },
        colors: {
            // flowbite-svelte
            primary: {
                '50': '#effbfc',
                '100': '#d5f3f8',
                '200': '#b1e7f0',
                '300': '#7bd4e5',
                '400': '#3eb8d2',
                '500': '#239fbc',
                '600': '#1f7e9b',
                '700': '#20667e',
                '800': '#225468',
                '900': '#214758',
                '950': '#102d3c',
            },
            'dark-blue': {
                '50': '#dae0e3',
                '100': '#ced6da',
                '200': '#c1ccd1',
                '300': '#9cadb5',
                '400': '#526f7e',
                '500': '#083146',
                '600': '#072c3f',
                '700': '#062535',
                '800': '#051d2a',
                '900': '#041822',
            }, 
            'light-blue': {
                "50": "#eef7fb",
                "100": "#e9f4fa",
                "200": "#e3f2f9",
                "300": "#d2eaf5",
                "400": "#b1daee",
                "500": "#8fcae7",
                "600": "#81b6d0",
                "700": "#6b98ad",
                "800": "#56798b",
                "900": "#466371",
            }, 
            'orange': {
                '50': '#fef9ee',
                '100': '#fef1d6',
                '200': '#fbdfad',
                '300': '#f8c779',
                '400': '#f5a542',
                '500': '#f18515',
                '600': '#e36f13',
                '700': '#bc5512',
                '800': '#964316',
                '900': '#793915',
                '950': '#411b09',
            },
            'light-orange': {
                '50': '#fffeea',
                '100': '#fff9c5',
                '200': '#fff485',
                '300': '#ffe746',
                '400': '#ffd71b',
                '500': '#ffb703',
                '600': '#e28b00',
                '700': '#bb6202',
                '800': '#984b08',
                '900': '#7c3e0b',
                '950': '#481f00',
            },

        }
      }
    }
  };
  
  module.exports = config;