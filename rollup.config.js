import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

const pkgName = "git-scan";

export default [
  {
    input: "src/main.ts",
    plugins: [typescript(), terser()],
    output: {
      file: `umd/${pkgName}.js`,
      format: "umd",
      name: "gitScan",
      esModule: false,
    },
  },
  {
    input: {
      index: "src/main.ts",
      isGitInstalled: "src/isGitInstalled.ts",
      isGitRepo: "src/isGitRepo.ts",
    },
    plugins: [typescript(), terser()],
    output: [
      {
        dir: "esm",
        format: "esm",
      },
      {
        dir: "cjs",
        format: "cjs",
        exports: "auto",
      },
    ],
  },
];
