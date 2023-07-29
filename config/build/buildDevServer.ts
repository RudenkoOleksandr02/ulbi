import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true, // автоматически открывает в браузере страницу приложения
        historyApiFallback: true, // позволяет проксировать запросы через index page
        hot: true
    }
}