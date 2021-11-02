/**
 * VScode javaScript Development Setup
 *
 *             ｜ Formatting   ｜ Linting                    ｜ Type checking
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Package     ｜ Prettier     ｜ eslint                     ｜ Typescript
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *             ｜              ｜ eslint-config-airbnb-base  ｜ @types/node
 * Additional­  ｜              ｜ eslint-config-prettier     ｜
 * dependencies｜              ｜ eslint-plugin-import       ｜
 *             ｜              ｜ eslint-plugin-node         ｜
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *             ｜              ｜                            ｜
 * Config file ｜ .prettierrc  ｜  .eslintrc.js              ｜  jsconfig.json
 *             ｜              ｜                            ｜
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * VScode      ｜              ｜                            ｜
 * extensions  ｜      O       ｜             O              ｜      X
 *             ｜              ｜                            ｜
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 */

// Formtting, Linting, Type Checking
// Formtting : Prettier
// Linting : ESLint
//--------------------------------------------------------------------

// Typescript Installation & Setting // Use

// 터미널창에 npm intall --save-dev typescript 입력
// 작성하고 하고 싶은 js파일 첫줄에 // @ts-cheak추가
// 여기까지가 js에서 작동하는 typescript
// node까지 하고 싶으면
// 터미널에 npm intall --svae-dev @types/node
//--------------------------------------------------------------------

// Prettier Definition

// 코드 포멧터(Code Formatter)란 개발자가 작성한 코드를 정해진
// 코딩 스타일을 따르도록 변환해주는 도구를 말합니다.
// Prettier는 이러한 코드 포멧터 중에서도 최근에 가장 인기를
// 많이 얻어 거의 표준이 되고 가고 있는 자바스크립트 라이브러리 입니다.
// 쟁쟁한 오픈 소스 프로젝트들과 수많은 기업들이
// Prettier를 정식 코드 포멧터를 채택해서 사용하고 있습니다.
//--------------------------------------------------------------------

// Prettier Installation & Setting

// Node.js 다운(npm 같이 다운됨)
// 마켓플레이스에서 Prettier 다운
// 터미널 창에서 npm init -y을 입력하여 package.json 다운
// package.json파일에서 "scripts" 부분을 제외한 나머지 부붙 삭제(필요없음)
// 터미널에서 npm install --save-dev prettier 입력
// 입력시 node_modules와 package-lock.json 파일 생성됨
// 새파일 .pretterrc 생성
// 새폴더 .vscode 생성 그안에 settings.json 파일 생성
// settings.json 파일에 이코드 작성(js에서 prettier를 사용 가능하게 만듦)
// {
//     "[javascript]" : {
//         "editor.formatOnSave": true,
//         "editor.defaultFormatter" : "esbenp.prettier-vscode"
//     }
// }
//--------------------------------------------------------------------

// Prettier Use

// .prettier 처음 만들시 {}입력
// {안에} "blank" : true/false를입력
// 만약 추가하고 싶을 시 마지막 줄에 ','를 붙이고 다음 줄
// https://steemit.com/kr/@shimdh/prettier
//--------------------------------------------------------------------

// ESLint Definition

// JavaScript 코드 에서 발견되는 문제 패턴을 식별하기 위한 정적 코드 분석 도구입니다.
// Nicholas C. Zakas가 2013년에 만들었습니다. [1] [2] ESLint의 규칙은 구성 가능하며 사용자 정의된 규칙을 정의하고 로드할 수 있습니다.
// ESLint는 코드 품질 과 코딩 스타일 문제를 모두 다룹니다 .
// ESLint는 ECMAScript의 현재 표준 과 미래 표준을 위한 초안의 실험적 구문을 지원합니다 .
// JSX 또는 TypeScript를 사용하는 코드 는 플러그인이나 트랜스파일러를 사용할 때도 처리할 수 있습니다.
//--------------------------------------------------------------------

// ESLint, airbnb(JavaScript Style Guide) Installation & Setting

// 마켓플레이스에서 ESLint 다운
// 터미널에 npm install --svae-dev eslint 입력
// .eslintrc.js 파일 생성
// 터미널에 npm install --svae-dev eslint-config-airbnb-base eslint-plugin-import 입력(config-airbnb-base는 airbnb 다운 eslint-plugin-import는 airbnb가 필요하는 의존 것 다운)
// 충돌 방지를 위해 터미널에 npm install --svae-dev eslint-config-prettier 입력
// 이러면 prettier에서 새미콜론 제거때문에 생기는 코드 오류 해결 가능
// .eslintrc.js 파일에 아래 코드 입력 (만약 코드가 오류가 뜰시 vscode 오른쪽 밑에 있는 X표시를 눌러 허용)
// module.exports = {
//     extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],
//   }
//--------------------------------------------------------------------

// ESLint Use

// 만약 ESLint의 적용이 끝나고 let var console.log등을 쓰면 오류가 날 것이다.
// 이는 규정 때문인데 이를 만약 특정 규정만 배제하고 싶으면
// 그 코드위에  // eslint-disable-next-lin no-'blnak'를 추가하면 다음줄은 오류가생기지 않는다
// 다른 방법으론 그 오류를 클릭하고 빠른 수정을 누르면 다양한 방식의 해결 방안을 제시 해준다

//--------------------------------------------------------------------

// const overrides =
// {
//     DATABASE_HOST: 'myhost.com',
//     DATABASE_PASSWORD: 'mypassword',
// }

// const config = {
//     DATABASE_HOST: 'default.host.com',
//     DATABASE_PASSWORD : '****',
//     DATABASE_USERNAME : 'myuser',
//     ...overrides,
// }
