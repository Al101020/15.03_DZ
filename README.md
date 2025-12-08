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

+++++++++++++++++++++++++++++++
      до переделки на TS
 + + + + + + + + + + + + + + +

+++++++++++++++++++++++++++++++
2025.12.04

  Создал на гитХаб новый(пустой) репозиторий: 15.03_DZ
  
  Клонировал к себе на ПК(с помощью Git Bash Here):
git clone https://github.com/Al101020/15.03_DZ.git
  Перешел в созданный каталог:
cd 15.03_DZ
  Запустил VSCode в созданом:
code -n .
  В тенрминале запустил установку:
yarn create vite my-app --template react
  my-app - наименование проекта(каталог-название).
  После установки появилась папка my-app, теперь содержимое этой папки перекидываю в родительскую папку:
mv my-app/* ./
  и файл .gitignore:
mv my-app/.* ./
  А папку my-app удаляю

Пример:
https://timmousk.com/blog/react-loop-through-array-of-objects/


+1++++++++++++++++++++++++++++++++
1-задание: Рейтинг фильмов
===

Необходимо реализовать компонент, отображающий рейтинг фильма в виде звёзд:
![Список фильмов](./public/assets/preview1.png)

## Описание компонента

Для отображения рейтинга создайте компонент `Stars`, который принимает следующие атрибуты:

- `count` — рейтинг фильма, _число_, по умолчанию `0`.

Если рейтинг меньше `1` или больше `5`, или вообще не число, то компонент не должен иметь какого-либо представления в
DOM.

Звёзды рейтинга должны быть представлены тегом `<ul>` с классом `card-body-stars`. Для отображения символа звезды внутри
тега `<li>` используйте компонент `Star`.

## Пример использования

```jsx
// Внутри App
return (
    <Stars count={1}/>
);
```

Компонент должен дать следующий код:

```html

<ul class="card-body-stars u-clearfix">
    <li>
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
            <path d="M0 0h18v18H0z" fill="none"/>
        </svg>
    </li>
</ul>
```

## Реализация

Необходимо реализовать компонент `Stars`. Не забудьте, что отдельная звезда должна быть представлена компонентом `Star`.

Важно: вам нужно реализовать только отображение звёздочек, карточку фильма не нужно.

++++++++++++++++++++++++++++++++1+
+2++++++++++++++++++++++++++++++++
Список предложений
===

Необходимо вывести список предложений каталога Etsy.com, используя библиотеку React. После загрузки данных и отрисовки список должен выглядеть так:
![Список предложений](./public/assets/preview2.png)

## Данные списка предложений

Данные для списка доступны в формате JSON в каталоге `data`. Вам нужно их скопировать и хранить в виде константы в переменной. Для создания JS-объектов используйте `JSON.parse`.

Это _массив объектов_, каждый _объект_ представляет одно предложение. У предложения доступно множество свойств, но в приложении необходимо использовать следующие:
- `listing_id` — уникальный идентификатор предложения, _число_;
- `url` — ссылка на предложение, _строка_;
- `MainImage` — информация об изображении, _объект_, нам необходимо использовать свойство `url_570xN` для получения адреса главной картинки, _строка_;
- `title` — название предложения, _строка_;
- `currency_code` — код валюты, _строка_;
- `price` — цена, _строка_;
- `quantity` — доступное количество, _число_.

## Описание компонента

Для отображения списка создайте компонент `Listing`, который принимает следующие атрибуты:
- `items` — список предложений, _массив объектов_, по умолчанию пустой массив.

Компонент должен создавать на основе списка предложений следующий HTML-код:
```html
<div class="item-list">
  <div class="item">
    <div class="item-image">
      <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
        <img src="https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg">
      </a>
    </div>
    <div class="item-details">
      <p class="item-title">Woodland Fairy</p>
      <p class="item-price">$3.99</p>
      <p class="item-quantity level-medium">12 left</p>
    </div>
  </div>
</div>
```

Если название предложения превышает `50` символов, то необходимо выводить только первые `50` символов, и добавлять символ `…` в конце.

При выводе стоимости предложения необходимо учитывать валюту. Если цена задана:
- в долларах США, код `USD`, то цену вывести в формате `$50.00`;
- в евро, код `EUR`, то цену вывести в формате `€50.00`;
- в остальных случаях цену вывести в формате `50.00 GBP`, где `GBP` — код валюты.

Вывести остаток, подсветив его в зависимости от количества, используя класс `level-*`:
- `level-low` — если остаток меньше `10` включительно;
- `level-medium` — если остаток меньше `20` включительно;
- `level-high` — если остаток больше `20`.

## Реализация

Необходимо отобразить данные списка предложений, используя компонент `Listing`.

Используйте приложенный CSS-файл для стилизации.
+++++++++++++++++++++++++++++++++++++2+

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
