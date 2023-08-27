import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                main: '#FF1801',
                'neutral': {
                    50: '#F9FAFB',
                    100: '#E8E6E1',
                    200: '#D3CEC4',
                    300: '#B8B2A7',
                    400: '#A39E91',
                    500: '#857F72',
                    600: '#625D52',
                    700: '#504B40',
                    800: '#423D33',
                    900: '#27241D',
                },
                'red': {
                    50: '#FFEEEE',
                    100: '#FACDCD',
                    200: '#F29B9B',
                    300: '#E66A6A',
                    400: '#D64545',
                    500: '#BA2525',
                    600: '#A61B1B',
                    700: '#911111',
                    800: '#780A0A',
                    900: '#610404',
                },
            },
        },
    },

    plugins: [forms],
};
