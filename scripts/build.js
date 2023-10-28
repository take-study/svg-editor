import * as esbuild from "esbuild";

let ebc = await esbuild.context({
  entryPoints: {
    "./index": "./test/*",
  },
  outdir: "./dist",
  sourcemap: "both",
  outbase: "./src",
  bundle: false,
  platform: "browser",
  loader: { ".html": "copy" },
  bundle: true,
});

await ebc.watch();
await ebc.serve({
  host: "localhost",
  port: 8080,
  servedir: "./dist",
});
