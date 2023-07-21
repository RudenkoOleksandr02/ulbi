import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            { // для работы модулей css
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')), // для каких файлов которые не включают в себя модуль, должны обрабатываться как обычные css
                        localIdentName: isDev // в продакшн автосгенирированные название, в разработке читаемые
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                }
            },
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