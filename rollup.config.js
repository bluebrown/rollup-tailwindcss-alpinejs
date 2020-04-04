import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

const production = !process.env.ROLLUP_WATCH


const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project 
    content: [
        'public/*.html',
        'src/*.js',
    ],
  
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})


export default {
    input: 'src/main.js',
    output: {
        file: 'public/bundle.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        postcss({
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                ...production
                    ? [purgecss]
                    : []
            ]
        }),
        resolve(),
        commonjs(),
        production && terser(),
    ]
}
