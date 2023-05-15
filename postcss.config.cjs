// module.exports = {
//     plugins: {
//         // "postcss-preset-env": {stage: 2},
//     }
// }

module.exports = {
    plugins: {
        "autoprefixer": {},
        "postcss-nesting": {},
        "postcss-nested": {},
        "postcss-import": {},
        "postcss-initial": { reset: 'inherited' },
        "postcss-preset-env": { stage: 2 },
        "postcss-for": {},
        "postcss-calc": {},
        "postcss-custom-media": {},
    }
}