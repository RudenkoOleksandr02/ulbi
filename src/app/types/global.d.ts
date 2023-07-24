declare module '*.scss' { // для корректного импорта модулей с нужным расширением
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}