##### top
## Webpack & Babel & TS & ESLint & SASS & Tailwindcss

[돌아가기](https://github.com/Chocobe/-Study-Webpack)


<br /><br />


## 1. 프로젝트 생성

[[ 09-webpack-babel-ts-sass-eslint-prettier ]](https://github.com/Chocobe/-Study-Webpack/tree/master/09-webpack-babel-ts-sass-eslint-prettier) 와 동일한 환경으로 프로젝트를 생성 합니다.

이후, ``Tailwindcss`` 를 추가로 설치해 보겠습니다.



<br/>

[🔺 Top](#top)

<br/><hr/><br/>



## 2. ``Tailwindcss`` 관련 Package 설치하기

``Tailwind`` 를 사용하기 위해서는 아래의 라이브러리를 설치해야 합니다.

* ``tailwindcss``: ``Tailwindcss`` 라이브러리
* ``postcss``: ``Tailwindcss`` 는 ``Postcss`` 위에 만들어 졌기 때문에, 함께 설치하여야 합니다.
* ``postcss-preset-env``: ``Postcss`` 의 ``preset-env`` 라이브러리
* ``postcss-loader``: ``Postcss`` 로더

<br />

```bash
npm i -D postcss postcss-preset-env postcss-loader tailwindcss
```



<br/>

[🔺 Top](#top)

<br/><hr/><br/>



## 3. ``Postcss`` 설정파일 만들기 - ``postcss.config.js``

프로젝트 루트 경로에 ``postcss.config.js`` 파일을 생성 합니다.

그리고 다음과 같이 작성 합니다.

```javascript
// postcss.config.js

var tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    "postcss-preset-env", 
    tailwindcss
  ],
};
```



<br/>

[🔺 Top](#top)

<br/><hr/><br/>



## 4. ``Tailwindcss`` 설정파일 만들기 - ``npx tailwindcss init``

``Tailwindcss`` 의 설정파일은 ``npx`` 를 통해 기본 구조까지 만들 수 있습니다.

터미널에 다음 명령을 사용하여 ``tailwindcss.config.js`` 를 생성 합니다.

```bash
npx tailwindcss init
```

<br />

위 명령이 실행되면, ``tailwindcss.config.js`` 파일이 생성되고, 다음과 같은 기본 구조가 작성되어 있습니다.

```javascript
// tailwind.config.js

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

<br />

위 설정에서 ``purge`` 속성만 추가해 보겠습니다.

``purge`` 속성은 지정한 파일에서 사용하지 않는 ``Tailwindcss`` 기능을 제거해 줍니다.

```javascript
// tailwind.config.js

module.exports = {
  purge: [
    "./dist/*.html"
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```



<br/>

[🔺 Top](#top)

<br/><hr/><br/>



## 3. ``Tailwindcss`` 기본 스타일시트 가져오기 - ``style.scss``

``Tailwindcss`` 의 기능을 사용하기 위해서는, 스타일시트에 다음과 같은 설정이 필요 합니다.

(만약 ``SASS`` 를 사용하지 않는다면, ``css`` 파일로 만들면 됩니다.)

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<br />

작성한 ``style.scss`` 를 ``app.ts`` 에서 ``import`` 합니다.

```typescript
import style.scss

// ... 생략 ...
```



<br/>

[🔺 Top](#top)

<br/><hr/><br/>



## 4. ``webpack.config.js`` 에서 로더 추가하기

이제 마지막 설정으로 ``webpack.config.js`` 에서 스타일시트 로더를 추가해 줍니다.

주의할 점은, 로더 순서에 맞게 작성해야 합니다.

순서는 다음과 같습니다.

1. ``sass-loader``
2. ``postcss-loader``
3. ``css-loader``
4. ``style-loader``

```javascript
// webpack.config.js

module.exports = {
  // 생략

  module: {
    rules: [
      // ... Babel 설정 생략 ...

      // 스타일시트 로더 설정
      {
        test: /\.s?(a|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        exclude: /(node_modules|dist)/,
      },
    ],
  },
};
```

<br />

지금까지 설정이 정상적으로 작성 되었다면, ``SCSS`` 와 ``Tailwindcss`` 를 함께 사용할 수 있습니다.



<br/>

[🔺 Top](#top)

<br/><hr/><br/>
