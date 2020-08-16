

原因主要还是React打包生成的.js文件过大，导致访问的速度很慢，所以要想办法压缩.js文件的大小。

这是项目部署时，各个文件的大小。

image.png
app.js的文件达到了1400多kb，腾讯云的访问速度大概需要15~20s（首屏渲染时间超过1.5s都是不能忍的）。

抛开代码内部可优化的问题，主要是因为使用了antd-design的库（已经使用了antd-design的按需加载），这个东西挺大的。

下图是我在使用按需加载之后，且把antd-design的打包至vender.js中后的结果。

app.js明显减小，但vender.js明显增大。

链接：https://www.jianshu.com/p/0064580adf8a


# React Antd 按需加载
https://www.jianshu.com/p/bb6bf56478a9

安装 customize-cra
//yarn add react-app-rewired customize-cra
npm install react-app-rewired customize-cra --save
npm install babel-plugin-import --save


  "scripts": {
//    "start": "react-scripts start",
//    "build": "react-scripts build",
//    "test": "react-scripts test",
//    "eject": "react-scripts eject",
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"

  },
