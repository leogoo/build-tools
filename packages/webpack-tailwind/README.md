### babel

babel-loader：使用 Babel 和 webpack 来转译 JavaScript 文件。
@babel/core：babel 的核心模块
@babel/preset-env：转译 ES2015+的语法
@babel/preset-react：转译 react 的 JSX
@babel/plugin-proposal-class-properties：用来编译类(class)
@babel/plugin-transform-runtime：防止污染全局，代码复用和减少打包体积

### react

1. import 时省略文件后缀

```js
resolve: {
  extensions: ['.ts', '.tsx' ,'.js', '.json', '.less'],
},
```

### css

1. 模块化

```js
{
  test: /\.less$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
        },
      },
    },
    'less-loader'
  ]
}
```

1. ts

```js
// typings.d.ts
declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

// tsconfig.json
"include": [
  "./src/**/*",
  "typings.d.ts"
]
```
