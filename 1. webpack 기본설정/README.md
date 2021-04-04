##### top
# Webpack 기본 설정

[돌아가기](https://github.com/Chocobe/-Study-Webpack)

## 1. NPM 프로젝트 생성

다음 명령을 통해 기본값을 사용한 NPM 프로젝트를 생성 합니다.

```bash
// 터미널 입력
npm init -y
```

<br/>

프로젝트가 생성되면 ``package.json`` 파일이 생성 됩니다.

<img src="./readmeAssets/Webpack 의 기본 설정-01-01.png" width="500px"><br/>



<br/>

[🔺 Top](#top)

<br/><hr/><br/>



## 2. ``webpack`` , ``webpack-cli`` 설치

프로젝트에 webpack 을 사용하기 위해서는 ``webpack`` 과 ``webpack-cli`` 라이브러리가 필요 합니다.

주의할 점은, ``devDependencies`` 로 설치해야 합니다.

(webpack 은 개발을 위한 라이브러리 입니다)


```bash
// 터미널 입력
npm i -D webpack webpack-cli
```

<br/>

설치가 완료되면, ``package.json`` 에 다음과 같이 ``devDependencies`` 가 추가 됩니다.

<img src="./readmeAssets/Webpack 의 기본 설정-02-01.png" width="500px"><br/>

또한, 프로젝트 ``root`` 경로에 ``package.lock.json`` 파일과 ``node_modules`` 폴더가 생성되며, 설치한 라이브러리가 위치하게 됩니다.



<br/>

[🔺 Top](#top)

<br/><hr/><br/>



## 3. ``index.html`` 과 ``app.js`` 파일 생성 및 작성

테스트를 위한 ``index.html`` 을 생성 하고 코드를 작성 합니다.

<details>
<summary>index.html 코드보기</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>

  <body>
    <header>
      <h1>Webpack 스터디 정리</h1>
    </header>

    <div class="main">
      Now Loading...
    </div>

    <script lang="javascript" src="./dist/app.bundle.js">
  </body>
</html>
```
</details>


<br/><br/>


그리고 ``webpack 의 진입점`` 으로 사용될 ``app.js`` 파일을 생성하고 코드를 작성 합니다.

``webpack`` 의 동작 방식은 ``하나의 진입점`` 을 통해 프로젝트의 ``module`` 을 연결하는 방식 입니다.

<details>
<summary>app.js 코드보기</summary>

```javascript
/**
 * @returns {void}
 */
function initApp() {
  const mainElement = document.querySelector(".main");
  mainElement.innerText = "Hello, Webpack !";
}

initApp();
```
</details>


<br/><br/>


webpack 의 빌드가 성공적으로 된다면, ``Hello, Webpack !`` 문자열이 출력될 예정 입니다.



<br/>

[🔺 Top](#top)

<br/><hr/><br/>



## 4. ``webpack.config.js`` 생성 및 설정

``webpack`` 의 ``build`` 기능을 사용하기 위해, ``webpack.config.js`` 파일을 생성합니다.

<details>
<summary>webpack.config.js 코드보기</summary>

```javascript
var path = require("path");

module.exports = {
  // 빌드 모드 설정: "none" | "production" | "development"
  mode: "none",
  // 진입점
  entry: "./app.js",
  // 빌드결과 파일명, 경로
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```
</details>



<br/>

[🔺 Top](#top)

<br/><hr><br/>



## 5. ``build`` 명령 등록

``package.json`` 에 ``build`` 명령어를 등록 합니다.

```json
{
  // 생략
  "main": "./app.js",
  "scripts": {
    "build": "webpack"
  },

  // 생략
}
```



<br/>

[🔺 Top](#top)

<br/><hr><br/>



## 6. 빌드 실행

터미널에 ``build`` 명령을 실행 합니다.

```bash
npm run build
```

정상적으로 ``build`` 가 되었다면, 터미널에 다음과 같은 메시지가 출력 됩니다.

<img src="./readmeAssets/Webpack 의 기본 설정-06-01.png" width="500px"><br/>


<br/><br/>


그리고 ``webpack.config.js`` 의 ``output`` 에 설정한 위치에 ``build 결과`` 파일이 생성 됩니다.

<img src="./readmeAssets/Webpack 의 기본 설정-06-02.png" width="500px"><br/>


<br/>

[🔺 Top](#top)

<br/><hr/><br/>