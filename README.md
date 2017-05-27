## 这是一个可以使开发者非常容易上手的 `react-native-template` 。
1. Dva 相关资料请看这里 --> [Dvajs](https://github.com/dvajs/dva)。
2. react-native-router-flux 相关资料请看 -->[react-native-router-flux](https://github.com/aksonov/react-native-router-flux)。

## 如何下载?
### 1. 新建项目(推荐)
1. 安装 `yarn` 和 `react-native-cli`。
```
npm install -g yarn react-native-cli
```
> 已安装 yarn 和 react-native-cli 的请忽略本步骤。

2. 可选步骤，设置国内镜像源。
```
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```

3. 使用 `react-native-cli` 初始化项目。
```
react-native init ExampleEasyStart --template easy-start
```


### 2. 克隆本项目
```
git clone git@github.com:96qbhy/react-native-template-easy-start.git
cd react-native-template-easy-start
yarn #or npm install
```

## 如何运行？

### 1. 安卓
```
react-native run-android
```

### 2. iOS
```
react-native run-ios
```


> APP入口文件是 `app/index.js`
