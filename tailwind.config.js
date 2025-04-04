const {pxToRem} = require('@captaincss/captaincss/helpers');
const theme = require("tailwindcss/defaultTheme");

export default {
    content: ['./templates/**/*.twig'],
    safelist: [
        {
            pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
            variants: ['sm', 'md', 'lg', 'xl', '2xl']

        },
        {
            pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/,
            variants: ['sm', 'md', 'lg', 'xl', '2xl']
        },
        'bg-white',
        'bg-navy',
        'bg-light-grey'
    ],
    theme: {
        container: {
            center: true,
            padding: '16px'
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1432px'
        },
        extend: {
            colors: {
                'navy': '#1C2841',
                'light-grey': '#E7E7E7',
                'brand-blue': '#009ddc',
                'curious-blue': {
                    '50': '#f0faff',
                    '100': '#e0f4fe',
                    '200': '#b9eafe',
                    '300': '#7cdafd',
                    '400': '#36c9fa',
                    '500': '#0cb3eb',
                    '600': '#009ddb',
                    '700': '#0172a3',
                    '800': '#066086',
                    '900': '#0b506f',
                    '950': '#07334a',
                },
                'dark-grey': '#282b27',
                'grey': '#363e33',
                'dark-green': '#256a0f',
                'green': '#a6da94',
                'light-green': '#b2f09d',
            },
            fontSize: {
                h1: [pxToRem(40), pxToRem(45)],
                h2: [pxToRem(35), pxToRem(40)],
                h3: [pxToRem(30), pxToRem(35)],
                h4: [pxToRem(25), pxToRem(30)],
                h5: [pxToRem(20), pxToRem(25)],
                h6: [pxToRem(18), pxToRem(23)],
                'h1-desktop': [pxToRem(55), pxToRem(60)],
                'h2-desktop': [pxToRem(50), pxToRem(55)],
                'h3-desktop': [pxToRem(45), pxToRem(40)],
                'h4-desktop': [pxToRem(35), pxToRem(40)],
                'h5-desktop': [pxToRem(30), pxToRem(35)],
                'h6-desktop': [pxToRem(25), pxToRem(30)]
            },
            fontFamily: {
                'anonymous': ['"Anonymous Pro"', 'monospace'],
                'bungee' : ["Bungee", "sans-serif"],
                'telex' : ["Telex", "sans-serif"],
            },
            transitionProperty: {
                'height': 'height',
                'width': 'width',
                'max-height': 'max-height'
            },
            typography: (theme) => (
                {
                    DEFAULT: {
                        css: {
                            'max-width': 'none',
                            a: {
                                '&:hover': {
                                    'text-decoration': 'underline'
                                },
                            }
                        },
                    },
                }
            ),
            backgroundImage: {
                '404': 'url("https://picsum.photos/1920/1080/?random=true")'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
}
