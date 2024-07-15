# 武大模拟器 WHU Simulator

## 项目简介

WHU Simulator 是一个模拟器项目，使用react构建

## 如何开始

请按照以下步骤启动项目：

### 1. 安装 Node.js 和 Yarn

首先，确保你已经安装了 Node.js 和 Yarn。如果尚未安装，请按照以下步骤操作：

#### 安装 nvm-windows

1. 前往 [nvm-windows 的 GitHub 页面](https://github.com/coreybutler/nvm-windows/releases)。
2. 下载最新的 nvm-setup.zip 并运行安装程序。
3. 按照安装向导完成安装。

#### 使用 nvm-windows 安装 Node.js

1. 打开命令提示符或 PowerShell。
2. 安装 18 版本的 Node.js：

   ```bash
   nvm install 18
   ```

3. 使用安装的 Node.js 版本：

   ```bash
   nvm use 18
   ```

4. 验证安装：

   ```bash
   node -v
   npm -v
   ```

#### 安装 Yarn

使用 npm 安装 Yarn：

```bash
npm install -g yarn
```

### 2. 安装项目依赖

进入项目目录，并运行以下命令以安装所有依赖：

```bash
yarn install
```

### 3. 启动开发服务器

安装依赖后，运行以下命令启动开发服务器：

```bash
yarn dev
```

开发服务器启动后，你可以在浏览器中访问项目。通常情况下，开发服务器会运行在 `http://localhost:3000` 或其他指定端口。

## 如何发布

### 1. 构建项目

如果你需要构建生产环境的静态文件，运行以下命令：

```bash
yarn build
```

构建完成后，生成的静态文件将位于 `docs` 目录中。

### 2. 部署到github

```bash
git push
```

推送到github后，github会自动构建网页
