# WeApp TypeScript
A WeApp project template in [TypeScript](http://www.typescriptlang.org/) using [VS Code](http://code.visualstudio.com/)  
[VS Code](http://code.visualstudio.com/)下基于[TypeScript](http://www.typescriptlang.org/)的微信小程序项目模板

## About / 关于
This is a WeApp project template using TypeScript  
使用TypeScript的微信小程序项目模板

## Usage / 使用
* Install dependencies with command
    ```batch
    npm install
    ```
* Build the project with command
    ```batch
    gulp
    ```

* All files are built into a **dist** folder so it is the **`dist`** folder which will be referenced in Wexin dev tool for a WeApp instead of the ~~project folder~~ or the folder of ~~`src`~~
* 所有文件都被编译到 **dist** 文件夹下 所以在微信开发者工具中应该引用 **`dist`** 文件夹 而不是 ~~项目文件夹~~ 或者 ~~`src`文件夹~~

* These VS Code extensions is recommeded to be installed:
* 推荐安装下列VS Code插件：
    * [WeApp Snippets](https://marketplace.visualstudio.com/items?itemName=emeryao.we-app-vscode)
    * [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

* It is **strongly recommeded** to get the TypeScript declaration file for WeApp API:  
* 墙裂推荐
    * With [`npm`](https://www.npmjs.com/) installed (which is already stored in package.json)  

    ```batch
    npm install typed-we-app --save-dev
    ```

    * With [`typings`](https://github.com/typings/typings) installed  

    ```batch
    typings install github:Emeryao/typed-we-app -SG
    ```

## Last Update
`2017.07.13`