# rollup-tailwindcss-alpinejs-starter

This repo contains a minimal working example of how to create an application using Rollup, and the postcss plugic tailwindcss. It also imports aplinejs that pairs nicely with tailwindcss to create a richer interactions more.

## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/bluebrown/rollup-tailwindcss-alpinejs-starter
cd rollup-tailwind-boilerplate && npm install
```

`npm run start` will run `npm watch` and `npm run serve` in parallel. 

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging. 

`npm serve` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:5000](http://localhost:5000).

`npm run watch` will continually rebuild the application as your source files change.

Note that postcss is configured to only create a smaller production output when rollup does not run i watchmode. This means use the build command to create your production bundle and the start command for development. 
