Create React App + Wasm Lib

After installing all the dependencies:

1. In the `lib` dir: `wasm-pack build`
2. In the `demo-web` dir: `npm start` for local dev or `npm run build` to build the site (into demo-web/build folder)

It is not currently setup to watch and rebuild the lib too, probably best to use `watchexec` or similar for that