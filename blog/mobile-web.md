HTML
  H5
  Q:doctype?
  A:告诉浏览器，改文档按照HTML5格式方式来渲染。

  HTML5技术模块
  -语义
    例如，header、footer、aside、nav、article等标签，更恰当地
    描述内容。

  -连通性
    采用最新的http/2，spdy协议来提升加载速度。
    原来的http1加载方式，需要为每个资源建立一个链接，耗时耗力
    体现在网络层面、服务器层面（需另外分析）。
    最新的协议有如下优点：
    二进制协议。
    多路复用。在一个链接可以支持多个流。socket
    优先权和依赖。屏幕滚动时，浏览器可以知道那个图片的优先级变高。
    头部压缩。
    随时复位。下载可暂停，开重开。
    服务器推送。

  -离线&存储
    sessionStorage：会话级别(session)数据，reload、resource都不
    会失效。
    localStorage：本地存储，除非自己删除，否则永不过期。

  -多媒体
    webRTC， 使用adapter.js

  -2D/3D绘画&效果
    canvas，WebGL，svg

  -性能&集成
    WebWorkers 后台线程，脱离主线程（用户交互的）。后台计算file的
    md5值
    XMLHttpRequest Level 2 （Fetch？？？）
    History API, history.js
    焦点管理
    document.activeElement and document.hasFocus
    requestAnimationElement
    在线离线事件
    navigator.onLine navigator.offLine, XMLHttpRequest status

  -设备访问
    使用camera API
    触控事件
    touchstart touchmove touchend 300ms问题 点击穿透问题
    使用地理位置信息
    检查设备方向 横屏还是竖屏

  -样式
    新背景 box-shadow
    新边框 border-image
    动画 CSS translate CSS Animation (transform3D(0,0,0)性能优化)
    排版
    text-overflow hyphenation 阴影 decoration @font-face 加载网络字体

  其他重要问题
    安全性
      XSS 跨域CORF
        XMLHttpRequest or fetch，Web Fonts，WebGL textures，canvas 
        drawImage，CSSOM，script
    性能
      http cache
        私有缓存，如浏览器缓存
        共享缓存，如cdn，服务端代理缓存等

        HTTP/1.1 200 OK
        Date: Fri, 30 Oct 1998 13:19:41 GMT
        Server: Apache/1.3.3 (Unix)
        Cache-Control: max-age=3600, must-revalidate
        Expires: Fri, 30 Oct 1998 14:19:41 GMT
        Last-Modified: Mon, 29 Jun 1998 02:28:12 GMT
        ETag: "3e86-410-3596fbbc"
        Content-Length: 1040
        Content-Type: text/html
        ----
        Expires和Cache-Control同时存在时，Cache-Control优先级高
        Last-Modified和ETag同时用于Client发If-Modified-Since请求。

      http 压缩

  https ssl 握手过程

  http 状态码
    100
    200
      200 OK
    300
      304 Not Modifed
    400
    500

  jsonp

CSS
  样式
  盒模型
  定位
  选择器 id

JavaScript
  基于原型的语言。prototype
  内置对象
  for...in 和 for...of
  for in 遍历下标，for of遍历值