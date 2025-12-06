2025.12.05
  Со звёздами(повторение компонентов) смотрел:
https://carlrippon.com/repeat-element-n-times-in-jsx/

2025.12.04

Создал папку 15.003-ts, на ней ПКМ 'Open Git Bash here'. Дальше команда:
$ npm create vite@latest my-vau-app -- --template react-ts
- пошли вопросы: 
Need to install the following packages: -перевод- Необходимо установить следующие пакеты: - нажал y -> enter:
create-vite@8.2.0
Ok to proceed? (y) y

> npx
> create-vite my-vau-app --template react
|
o  Use rolldown-vite (Experimental)?: -перевод- Используете rolldown-vite (экспериментальный)? - выбрал нет -> enter:
|  No
|
*  Install with npm and start now? -перевод- Установите с помощью npm и запустите прямо сейчас? - выбрал да(нада было нет) -> enter:
|  Yes /   > No

	Перекинул содержимое папки my-vau-app в 15.003 командой:
mv my-vau-app/* ./
	остался файл .gitignore - его тоже перекинул в 15.003 в ручную, а можно командой:
mv my-vau-app/.* ./
	и удаляем папку my-vau-app. Изапускаем CodeVS командой:
code -n .


+++++++++++++++++++++++++++++++++++++++++++
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
