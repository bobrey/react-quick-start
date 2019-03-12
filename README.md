## React 基础教程

### 1. 初始化项目

Commit: https://github.com/dyq666/react-quick-start/commit/439156b943bfbbdba714259fb3a04ba2193e4355 (此次 commit 是下面脚手架命令自动生成的)

参考 [官方文档-新建项目](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app), 输入以下命令:

- `npx create-react-app quick-start`
- `cd quick-start && npm start`

**测试** 打开 `http://localhost:3000/` 看见 react 欢迎界面.

Commit: https://github.com/dyq666/react-quick-start/commit/da892863e63dd529c8d7c6ee8990d0100fa6077e

为了便于入门, 为项目瘦身, 仅保留核心代码.

- `src/index.js` 所有 js 的入口.
- `public/index.html` html, 由于是单页应用, 只有一个 html, index.js 中的 `#root` 就在此.
- `src/App.js` 根组件, 不是必要的, 但是通常这么做.

Commit: https://github.com/dyq666/react-quick-start/commit/6e93cf3fd977db908e18d72b5ffa4e212f9edffa

增加 `reset.css`, 消除所有默认样式.

**测试** 打开页面, 看到 `Hello, dyq!` .

### 2. 完成页面布局

Commit: https://github.com/dyq666/react-quick-start/commit/a9a0db3a1350ec917227ee811a396a3c62d18395

创建 `TodoList/index.js` , 完成一些简单的布局. 并在构造函数中创建数据 (`this.state`, 必须是这个命名), 用数据渲染页面, 在模板中使用 `{}` 包裹 js 语句 (可以简单的理解为一行 js 代码). 

`key` 是与虚拟 dom 相关的, 先不用管, 先设为 item 即可.

看起来`import React` 并没有使用, 但实际上类似 html 的模板语法都是由 `React` 提供的.

**测试** 打开页面, 看到基本的布局, 并且数据来源于 `this.state`.

Commit: https://github.com/dyq666/react-quick-start/commit/cf7ff59bb3f351e92835df55e6419195d9e6eaa9

使用 es7 语法, 替换 `constructor`

### 3. 完成增加 TodoItem

Commit: https://github.com/dyq666/react-quick-start/commit/ba4841e63b5f6d2eda575993ac3471bcccaadcb8

创建两个事件监听的 handler, 所有 handler 必须 `bind(this)`. 否则会出现错误: `TypeError: Cannot read property 'setState' of undefined`. 原因在于, `this` 不指向组件类, 因此没有 React 的内置方法 `setState`

`setState` 是组件中的一个核心方法, [官方文档-setState](https://reactjs.org/docs/react-component.html#setstate). 简单的说如果要改变组件内的数据, 就要调用 `setState`, 不要直接改动 `this.state`. 本例中使用了两种参数类型, 第一个参数可以是对象, 也可以是函数, 函数的参数可以方便的获取到当前的 `state` , 然后 react 会把第一个参数与当前的 `state` 合并.

**测试** 打开页面, 可以输入内容并提交.

Commit: https://github.com/dyq666/react-quick-start/commit/ced7ca27c169c0a2190c49071d632108798dea02

使用箭头函数代替手动绑定 `this`. 所有自己增加的函数都推荐是用箭头函数, 而 React.Component 提供的则使用普通函数, 例如 `render`.

Commit: https://github.com/dyq666/react-quick-start/commit/aec8d1749a34ccab3f9f9679af54ae0db0ef47e6

通过数组中的 index 来删除对应的 TodoItem.

几个注意点:

- 不要直接改动 `curState` 中的内容, 例如在操作 `todoItems` 时先拷贝一份, 在改动. 保证函数无副作用 (例如这里应该不改变参数的值).
- React 中的事件监听需要返回一个函数, 但是我们又需要向函数中指定参数, 因此在外层包一层箭头函数.

**测试** 打开页面, 点击 todoItem, 即可删除.

### 4. 安装 Chorme React DevTools

打开 Chorme 商店, 安装 React Developer Tools.

打开开发者工具, 选中 React tab, 即可看到下图内容, 这种方式比 `Elements tab` 中的 dom 树更易于调试 React App, 例如右侧可以看到 `state`.

![react-devtools](https://i.loli.net/2019/03/12/5c879990d226e.png)

### 5. 父子组件

Commit: https://github.com/dyq666/react-quick-start/commit/30c3aefdbad317fbaa73604e2cd2be6c8aa122de

父组件 `TodoList`, 子组件 `TodoItem`, 父组件向子组件通过属性的方式进行传值, 子组件通过 `this.props` 来接收. 子组件不允许向父组件传值, 通常是通过父组件传递的 `func` 来对父组件的属性进行操作.

**测试** 打开页面, 增加, 删除都可以.