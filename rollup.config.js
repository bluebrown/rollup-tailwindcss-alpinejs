import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';

const isProduction = !process.env.ROLLUP_WATCH;

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['public/*.html', 'src/*.ts', 'src/*.js'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

export default {
  input: 'src/main.ts',
  output: {
    file: 'public/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    typescript(),
    postcss({
      plugins: [require('tailwindcss'), require('autoprefixer'), ...(isProduction ? [purgecss] : [])],
    }),
    resolve(),
    commonjs(),
    isProduction && terser(),
  ],
};
