import customPlugin from "./src/plugin"
export default [
    {
        input: "src/index.js",
        output: {
            dir: "dist/index.js",
            format: "iife",
        },
        plugins: [
            customPlugin
        ],
    }
]