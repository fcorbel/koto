import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: "src/globals/app.scss",
  globalScript: "src/globals/app.ts",
  outputTargets: [
    {
      type: "www"
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        "src/globals/variables.scss",
        "src/globals/reset.scss",
        "src/globals/mixins.scss",
        "src/globals/colors.scss",
        "src/globals/typography.scss"
      ]
    })
  ]
};
