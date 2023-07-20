import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoader} from "./buildLoader";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options
    return {
        mode: mode, // development или production
        entry: paths.entry, // resolve склеивает участки пути | entry входная точка приложения | __dirname корневая папка
        output: { // настройка куда и как будет делаться сборка приложения
            filename: "[name].[contenthash].js", // имя собранного файла | [name] - шаблон для имени (по умолчанию main) | [contenthash] - решение проблемы с кешированием (если у файла новое имя, браузер его подгружает)
            path: paths.build, // куда попадет файл
            clean: true // подчищает файлы
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoader() // лоудеры, нужны для сборки файлов которые не являются js или json
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined, // делает карты исходного кода, по которым можно отследить в каком файде произошла ошибка
        devServer: isDev ? buildDevServer(options) : undefined
    }
}