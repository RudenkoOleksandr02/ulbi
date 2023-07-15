import webpack from "webpack";

export function buildLoader(): webpack.RuleSetRule[] {
    const typescriptLoader = { // порядок лоудеров имеет значение, по хорошему их нужно выносить
        test: /\.tsx?$/, // файлы которые нужно пропустить через лоудеры
        use: 'ts-loader', // этот лоудер используется для typescript
        exclude: /node_modules/, // исключение
    }
    return [
        typescriptLoader,
    ]
}