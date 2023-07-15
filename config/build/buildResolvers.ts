import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // для каких файлов при импорте не нужно указывать расширения
    }
}