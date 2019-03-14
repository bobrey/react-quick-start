## 项目说明

源于慕课网 https://www.imooc.com/learn/1023, https://coding.imooc.com/class/229.html, 
教程在此基础上删去了业务性代码, 将知识点进行提炼.

教程采用文字 + `commit` 的方式. 使用 commit 代替直接粘贴代码的好处是, 更加方便的比照代码, 更加清晰的了解代码的改动.

### 目录

- React 基础教程

- React 第三方包

### TODO

- Redux

- 与 flask 联调

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

## React 第三方包

### 1. 组件库 AntD

Commit: https://github.com/dyq666/react-quick-start/commit/b91e7dc5822659b480929a35eb49477dbdb0828a

安装 `npm install --save antd`

使用步骤:

- 在文件中引入 css `import 'antd/dist/antd.css';`
- 在官方文档查询组件 [AntD 文档](https://ant.design/docs/react/introduce-cn), 按照官方的代码模仿即可, 本例使用了 `List Input Button`

Commit: https://github.com/dyq666/react-quick-start/commit/8131c00216c465fcde7a7052890f5c05cdd499ce

将行内样式放入 `css` 中. 理论上使用 AntD 不要覆盖原有样式. 使用 css 文件时注意命名冲突, 无论在哪引入都会是全局的样式.

### 2. Ajax 请求 Axios

Commit: https://github.com/dyq666/react-quick-start/commit/88bb160c4acb8aa3b87e8a8bb8f875c95c05ee24

安装 `npm install --save axios`

在本地模拟数据时可以直接获取 `public` 中的文件即可. 例如 `axios.get('/api/index.json')` 就是获取 `/public/index.json`.

### 3. 自定义样式 styled-components & iconfont

Commit: https://github.com/dyq666/react-quick-start/commit/c80e095987f9097fe66f25a3cb1d4588ca13324b

安装 `npm install --save styled-components`

这个包支持在 js 中写样式, 并且是局部样式, 不用考虑 css 命名的问题. 这里完成了 `search` 组件. 注意 `render` 中只能返回一个节点, 因此需要在外层包一层 `div`.

如果不想增加额外的 `div` 就使用 `React.Fragment` 完成, 这步放在后面的 Commit 完成了 (https://github.com/dyq666/react-quick-start/commit/9f07b5ace562c365fd70e886d094c302d2998734).

Commit: https://github.com/dyq666/react-quick-start/commit/607bfa598125c08981cb2cacf2ee01b3438f31ff & https://github.com/dyq666/react-quick-start/commit/997c81b662c206a01af6eb49a409108cb885becb

Iconfont 的引入和使用.

在 [官网](https://www.iconfont.cn/) 添加项目使用的 icon, 然后点击购物车, 点击下载代码.

![download-iconfont](https://i.loli.net/2019/03/12/5c87ba8770cef.png)

下载后根据将 css/font 文件放入项目中 (具体有哪些文件, 可以参考 commit). 然后修改 `iconfont.css` 中的 url,  css-name.

在全局引入样式后, 直接使用对应的 css-name 即可.

Commit: https://github.com/dyq666/react-quick-start/commit/dde8921e5ace66b8359dc711e5ab208bb231dc4e

搜索监听 focus/blur 来改变样式, 但是现在样式改变没有渐变, 不自然.

### 4. 样式渐变 React Transition

Commit: https://github.com/dyq666/react-quick-start/commit/05c17513e1aadafc96fa62b37d8345b973f1b6b6

安装 `npm install --save react-transition-group`

在需要渐变的组件外包一层 `CSSTransition`

参数说明:

- in, 监听的一个布尔值, 有改动则会触发动画渐变
- timeout, 渐变时间
- classNames, 指定一系列渐变 css-class 的前缀, 具体见下.

in 为 `True` 时会触发 `search-enter` 和 `search-enter-active`, search 是上面 `classNames` 中指定的.

in 为 `False` 时会触发 `search-exit` 和 `search-exit-active`

### 5. 路由 React Router Dom

Commit: https://github.com/dyq666/react-quick-start/commit/f3b084a4fb1666f60f3dca31bb01346ada8ec68d

使用步骤:

- 在最外层组件(`App`) 上包裹 `BrowserRouter` 确保内层的组件都可以使用路由.
- 使用 `Route` 创建路由, `exact` 代表完全匹配才会使用后面配置的组件. 否则 `/detail` 路由也会渲染 `/` 中配置的组件.
- `:id` 可在 `this.props.match.params.id` 上获取, 用到的时候使用 `console.log(this.props)` 或使用上面增加的 chorme 插件观察即可, 不用死记.
- 在其他组件中使用 <Link> 代替 <a> 进行跳转, 使用 <a> 进行跳转会重新请求, 浪费性能.

### 6. 按需加载组件 React Loadable

Commit: https://github.com/dyq666/react-quick-start/commit/fb03c2dad32406ca7f92bf0f78e55c62bf0361dc

把之前路由中的 Detail 单独拆分出.

Commit: https://github.com/dyq666/react-quick-start/commit/fe68bf869f5b76497792eb38db67ffd4a494757e

使用步骤:

- 创建一个 `loadable.js`
- 创建按需加载组件, 参数 loader 指定引入的组件, 参数 loading 表示加载过程中显示的内容

**测试** 打开开发者工具, Network -> JS, 点击去详情页按钮, 发现新加载了一个 js 文件.
