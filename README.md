### vue 集成 element-plus

```js
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";

const app = createApp(App);
app.use(ElementPlus).mount("#app");
```

### vite federation

1. 远端项目定义入口文件，并导出组件

```js
federation({
  name: "remote-app",
  filename: "remoteEntry.js",
  // 导出
  exposes: {
    "./MyForm": "./src/components/MyForm.vue",
  },
  shared: ["vue"],
});
```

2. 本地项目引入远端文件

```js
federation({
  // 定义远程模块入口
  remotes: {
    'remote-app': 'http://localhost:3001/assets/remoteEntry.js',
  },
  // 共享依赖声明
  shared: ['vue'],
}),
```

3. 本地使用，直接从入口引入

```js
import RemoteForm from "remote-app/MyForm";
```
