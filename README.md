# rollup-tailwindcss-alpinejs-starter

This repo contains a bare-bones example of how to create an application using Rollup, and the postcss plugic tailwindcss. It also imports an example module from `node_modules` and converts it from CommonJS.

## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/bluebrown/rollup-tailwind-boilerplate
cd rollup-tailwind-boilerplate
npm install

# or
npx degit "bluebrown/rollup-tailwind-boilerplate" my-app
cd my-app
npm install
```

The `public/index.html` file contains a `<script src='bundle.js'>` tag, which means we need to create `public/bundle.js`. The `rollup.config.js` file tells Rollup how to create this bundle, starting with `src/main.js` and including all its dependencies, including [date-fns](https://date-fns.org).

Rollup has been configured to use postcss with the tailwind plugin. The css is bundled inside the bundle.js file. The `tailwind.config.js` file holds the tailwind configuration and in `src/main.css`, which is imported into `src/index.js`, the tailwind directives are used.

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:5000](http://localhost:5000).

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run `npm start` and `npm run watch` in parallel.

## License

[MIT](LICENSE).
