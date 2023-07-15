import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import {buildPlugins} from "./config/build/buildPlugins";
import {buildLoader} from "./config/build/buildLoader";
import {buildResolvers} from "./config/build/buildResolvers";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";

/*{
    RANDOM: path.resolve(__dirname, "src", "index.ts")
}*/
const mode = "development"
const isDev = mode === "development"
const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, 'public', 'index.html')
}
const config: webpack.Configuration = buildWebpackConfig({
    mode: "development",
    paths,
    isDev

})

export default config;