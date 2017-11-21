### 微信分享 [官网](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)

#### 1. 引入
- 常用的下载微信SDK的方法(npm)：
    ```
        npm install --save weixin-js-sdk
    ```
- 打开下面的网址，直接下载文件
    [微信SDK](https://res.wx.qq.com/open/js/jweixin-1.2.0.js)

#### 2. 注意事项

- 在配置接口列表的具体信息wx.ready()之前，我们需要配置权限验证信息。前端发送数据请求具体配置信息(appId, timestamp, nonceStr, signature)。我们需要将当前地址作为参数发送给后台。而这个地址必须是通过**encodeURIComponent**编码的。
    如果不编码，只有在第一次打开页面时配置才会成功，二次转发的signature都会无效。

- 在SPA中，变化的URL需要在每次url变化时都需要进行调用。
    