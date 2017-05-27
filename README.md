# WeApp TypeScript
A WeApp project template in [TypeScript](http://www.typescriptlang.org/) using [VS Code](http://code.visualstudio.com/)  
[VS Code](http://code.visualstudio.com/)下基于[TypeScript](http://www.typescriptlang.org/)的微信小程序项目模板

## About / 关于
This is a WeApp project template using TypeScript  
使用TypeScript的微信小程序项目模板

## Usage / 使用
* There are some node module dependencies should be installed globally or locally:  
* 全局或本地安装下列Node依赖模块：

|Node Module|Command|
|-----|-----|
|TypeScript|`npm install -g typescript`|
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

* It is **strongly recommeded** to get the TypeScript declaration file for WeApp API:  
* 墙裂推荐
    * With [`npm`](https://www.npmjs.com/) installed  

    ```batch
    npm install typed-we-app --save-dev
    ```

    * With [`typings`](https://github.com/typings/typings) installed  

    ```batch
    typings install github:Emeryao/typed-we-app -SG
    ```

## Last Update
`2017.05.27`