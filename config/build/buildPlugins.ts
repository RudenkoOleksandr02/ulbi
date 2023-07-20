import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({ // создает html с подключенными скриптами
            template: paths.html // шаблон для html
        }),
        new webpack.ProgressPlugin() // прогресс сборки
    ]
}