import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({ // создает html с подключенными скриптами
            template: paths.html // шаблон для html
        }),
        new webpack.ProgressPlugin(), // прогресс сборки
        new MiniCssExtractPlugin({ // для css
            filename: 'css/[name].[contenthash:8].css', // расположение и название файлов
            chunkFilename: 'css/[name].[contenthash:8].css' // css для ассинхронных файлов
        })
    ]
}