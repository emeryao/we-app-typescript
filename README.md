# WeApp TypeScript
A WeApp project template in [TypeScript](http://www.typescriptlang.org/) using [VS Code](http://code.visualstudio.com/)  
[VS Code](http://code.visualstudio.com/)下基于[TypeScript](http://www.typescriptlang.org/)的微信小程序项目模板

## About
This is a WeApp project template using TypeScript where `async/await` can be used freely even targetting ES5

## Usage
* There are some node module dependencies should be installed globally or locally:  

|Node Module|Command|
|-----|-----|
|TypeScript>2.1.4|`npm install -g typescript`|
|TSLint|`npm install -g tslint`|
|Gulp|`npm install -g gulp`|  

* After installing those modules run the command of `npm install` to install dev dependencies then the project can be built by the command `gulp` which runs the default task in [gulpfile.js](./gulpfile.js)

* These VS Code extensions is recommeded to be installed:
    * [WeApp Snippets](https://marketplace.visualstudio.com/items?itemName=emeryao.we-app-vscode)
    * [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

* All files are built into a **dist** folder so it is the **`dist`** folder which will be referenced in Wexin dev tool for a WeApp instead of the ~~project folder~~ or the folder of ~~`src`~~

## async/await
* `async/await` can be used freely when targetting ES5 with the [ES6-promise polyfill](https://github.com/stefanpenner/es6-promise) imported
* The sample code about async/await can be found in [app.ts](./src/app.ts) and [http-client.ts](./src/utils/http-client.ts)
* The first commented line should be reserved to import the ES6-promise polyfill after TypeScript compilation and this line of code shoud be added with adjusting the relative path of `es6-promise.min.js` to the file where `async/await` is used

```typescript
// var Promise = require('./utils/es6-promise.min').Promise;
``` 

## Last Update
`2016.12.09`