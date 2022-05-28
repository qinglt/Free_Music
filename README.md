# Free_Music
免费在线音乐平台
# 架构

​	本音乐网站的开发主要利用 VUE 框架开发前台和后台，后端接口用 Spring Boot + MyBatis 来实现，数据库使用的是 MySQL



# 安装使用

> 环境要求

电脑需要node和java环境已经maven环境



> 软件推荐

Webstorm和Intellij idea(idea自带maven环境)

## 修改

1、从百度云下载资源，链接: https://pan.baidu.com/s/1IChhxCP_0I72-zNq6EEjEQ?pwd=b67g 提取码: b67g 

修改music-website-1.0.1\music-server\src\main\resources\application.yml文件，将其修改为自己电脑中资源的路径




## 运行

> 后端

1、软件运行

你可以用idea软件打开music-serve文件夹，找到HwMusicApplication运行




也可以进入 music-server 文件夹，运行下面命令启动服务器

```js
./mvnw spring-boot:run
```



> 后端

进入 music-client 文件夹，运行下面命令启动前台项目

```js
npm install // 安装依赖

npm run dev // 启动前台项目
```

进入 music-manage 文件夹，运行下面命令启动后台管理项目

```js
npm install // 安装依赖

npm run dev // 启动后台管理项目
```
