import webpack from "webpack";

export function buildLoader(): webpack.RuleSetRule[] {
    const styleLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }
    // если не использовать тайпскрипт - нужен babel-loader
    const typescriptLoader = { // порядок лоудеров имеет значение, по хорошему их нужно выносить
        test: /\.tsx?$/, // файлы которые нужно пропустить через лоудеры
        use: 'ts-loader', // этот лоудер используется для typescript
        exclude: /node_modules/, // исключение
    }
    return [
        typescriptLoader,
        styleLoader
    ]
}