import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

/*{
    RANDOM: path.resolve(__dirname, "src", "index.ts")
}*/

const config: webpack.Configuration = {
    mode: "development", // development или production
    entry: path.resolve(__dirname, "src", "index.ts"), // resolve склеивает участки пути | entry входная точка приложения | __dirname корневая папка
    output: { // настройка куда и как будет делаться сборка приложения
        filename: "[name].[contenthash].js", // имя собранного файла | [name] - шаблон для имени (по умолчанию main) | [contenthash] - решение проблемы с кешированием (если у файла новое имя, браузер его подгружает)
        path: path.resolve(__dirname, "build"), // куда попадет файл
        clean: true // подчищает файлы
    },
    plugins: [
        new HTMLWebpackPlugin({ // создает html с подключенными скриптами
            template: path.resolve(__dirname, 'public', 'index.html') // шаблон для html
        }),
        new webpack.ProgressPlugin() // прогресс сборки
    ],
    module: {
        rules: [ // лоудеры, нужны для сборки файлов которые не являются js или json
            {
                test: /\.tsx?$/, // файлы которые нужно пропустить через лоудеры
                use: 'ts-loader', // этот лоудер используется для typescript
                exclude: /node_modules/, // исключение
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // для каких файлов при импорте не нужно указывать расширения
    },
}

export default config;