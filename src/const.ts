import packageJson from "../package.json";

export const isDev = process.env.NODE_ENV === "development";
// console.log("isDev: ", isDev);
export const ghRoot = isDev ? "" : packageJson.homepage;
// console.log(`ghRoot:[${ghRoot}] `);
