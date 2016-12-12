# WeApp TypeScript
A WeApp project template in [TypeScript](http://www.typescriptlang.org/) using [VS Code](http://code.visualstudio.com/)  
[VS Code](http://code.visualstudio.com/)下基于[TypeScript](http://www.typescriptlang.org/)的微信小程序项目模板

## About / 关于
This is a WeApp project template using TypeScript where `async/await` can be used freely even targetting ES5
使用TypeScript的微信小程序项目模板 可以在目标ES5的时候随意地使用`async/await`

## Usage / 使用
* There are some node module dependencies should be installed globally or locally:  
* 全局或本地安装下列Node依赖模块：

|Node Module|Command|
|-----|-----|
|TypeScript>2.1.4|`npm install -g typescript`|
|Typings|`npm install -g typings`|
|TSLint|`npm install -g tslint`|
|Gulp|`npm install -g gulp`|  

* After installing those modules run the command of `npm install` and `typings install` to install dev dependencies and typings dependencies then the project can be built by the command `gulp` which runs the default task in [gulpfile.js](./gulpfile.js)
* 安装完以上模块后 使用命令`npm install` 和 `typings install`来安装开发依赖模块和Typings依赖 然后就可以通过`gulp`命令编译整个项目

* These VS Code extensions is recommeded to be installed:
* 推荐安装下列VS Code插件：
    * [WeApp Snippets](https://marketplace.visualstudio.com/items?itemName=emeryao.we-app-vscode)
    * [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

* All files are built into a **dist** folder so it is the **`dist`** folder which will be referenced in Wexin dev tool for a WeApp instead of the ~~project folder~~ or the folder of ~~`src`~~
* 所有文件都被编译到 **dist** 文件夹下 所以在微信开发者工具中应该引用 **`dist`** 文件夹 而不是 ~~项目文件夹~~ 或者 ~~`src`文件夹~~

## async/await
* `async/await` can be used freely when targetting ES5 with the [ES6-promise polyfill](https://github.com/stefanpenner/es6-promise) imported
* 引用[ES6-promise polyfill](https://github.com/stefanpenner/es6-promise)后可以在指向ES5时随意地使用`async/await`
* The sample code about `async/await` can be found in [app.ts](./src/app.ts) and [http-client.ts](./src/utils/http-client.ts)
* `async/await`相关的示例代码在[app.ts](./src/app.ts)和[http-client.ts](./src/utils/http-client.ts)文件中
* The first commented line should be reserved to import the ES6-promise polyfill after TypeScript compilation and this line of code shoud be added with adjusting the relative path of `es6-promise.min.js` to the file where `async/await` is used
* 文件中的第一行注释是用来在TypeScript编译之后引入ES6-promise polyfill的 所以应该被保留 并且 所有用到`async/await`的文件都应该在调整文件相对路径后添加这行代码

```typescript
// var Promise = require('./utils/es6-promise.min').Promise;
``` 

## Last Update
`2016.12.12`