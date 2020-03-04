---
title: 使用Verdaccio搭建私有npm仓库
date: 2020-03-03
tags:
 - npm
 - package
categories:
 - Notes
---

::: tip
公司前段时间搭建了一个npm组件仓库, 在此总结一下经验。使用`nrm`、`pm2`、`verdaccio`进行搭建。
:::

<p align="center">
  <img src="/assets/img/npm_logo.png" height="80px" style="margin-right: 50px"/>
  <img src="/assets/img/verdaccio_logo.png" height="80px"/>
</p>


<!-- more -->

## 服务器环境搭建
- 服务器系统: `Linux CentoOS 7 x64`
- 运行环境: `Node.js`
- 使用工具库: `nrm`、`pm2`、`verdaccio`、

### 连接到到服务器
```bash
ssh root@192.168.1.80
```
`192.168.1.80` 是组件库所部署的内部服务IP地址

### 安装所需工具库
安装 `Node.js` 环境
```bash
sudo install epel-release
sudo yum install nodejs
```

Linux安装的是旧版本的 `npm` ,这里我们更新一下 `npm` 版本
```bash
sudo npm install npm -g
```
安装依赖环境
```bash
sudo npm install verdaccio pm2 nrm -g
```

- **nrm**: npm源管理器
- **pm2**: 进程守护工具
- **verdaccio**: 运行npm服务器的插件; 支持身份验证、中间件和存储插件


### 配置服务器环境
为了生成`verdaccio`的配置文件, 需要先在服务器根目录用户根目录运行一次`verdaccio`
```bash
verdaccio
```

运行成功之后, 修改`verdaccio`的默认配置文件, 
```bash
yum install vim   #安装vim工具包
vim .config/verdaccio/config.yml  #修改配置
```
在配置文件中添加`listen:0.0.0.0:4000`的配置, 开放`verdaccio`服务器的端口(默认为`4873`)。如下图所示:

![image](./img/NPM_Server_1.png)
修改完成后, 退出并保存。


### 启动**verdaccio**服务
上面我们提到, 启动`verdaccio`服务只需要在终端运行`verdaccio`就可以了。但是如果关闭了终端, `verdaccio`服务就不能一直保持运行了。这个时候我们就需要用到上面安装的`pm2`进行进程守护, 保持`verdaccio`持续运行。

```bash
pm2 start verdaccio
```
pm2运行成功后, 终端会显示下图的提示
![image](./img/NPM_Server_2.png)
::: tip
也可以通过`pm2 ls`命令查看正在运行进程列表。
:::

为了让同一局域网内的其他设备能够访问到`verdaccio`服务器, 还需要开放`Linux`服务器的`4000`端口(`verdaccio`服务运行端口)。

更新`yum`包
```bash
yum -y install yum-utils
```
安装或更新`openssl`
```bash
yum -y install openssl  #安装
yum -y update openssl   #更新
```
启动
```bash
yum-config-manager --enable cr 
yum update
```
开放端口
```bash
firewall-cmd --permanent --add-port=4000/tcp 
```
重新加载防火墙配置
```bash
firewall-cmd --reload
```

现在, 私有`npm`仓库服务器就已经搭建成功。浏览器访问服务器的地址(这里为`192.168.1.96:4000`), 就可以看到`verdaccio`服务器已经在运行。

![image](./img/NPM_Server_3.png)

