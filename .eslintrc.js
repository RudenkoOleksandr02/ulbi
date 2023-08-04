module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,jsx}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'

    },
    plugins: [
        'react'
    ],
    rules: {
        'react/jsx-indent': [2, 4], // количество отступов в jsx
        'react/jsx-indent-props': [2, 4], // количество отступов пропсов
        '@typescript-eslint/indent': [2, 4], // общее количество отступов
        '@typescript-eslint/strict-boolean-expressions': 'warn', // строгая проверка логических выражений
        'react/react-in-jsx-scope': 'off', // использование jsx без импорта react
        '@typescript-eslint/explicit-function-return-type': 'off', // без возврата типов функций
        '@typescript-eslint/no-misused-promises': 'warn', //  неправильное использование промисов
        '@typescript-eslint/no-floating-promises': 'warn', // промисы не сохраняются в переменную и не оборачиваются then catch
        'react/no-deprecated': 'off', //  помогает обнаружить устаревшие функции, методы или свойства в коде React
        '@typescript-eslint/naming-convention': 'warn' // соглашения о наименованиях и идентификаторах
    },
    globals: {
        __IS_DEV__: true // глобальная переменная
    }
}
