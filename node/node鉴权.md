# node鉴权

## 一、session-cookie

1. 服务器在接受客户端首次访问时在服务器端创建seesion，然后保存seesion(我们可以将 seesion保存在内存中，也可以保存在redis中，推荐使用后者)，然后给这个session生成一个唯一的标识字符串,然后在响应头中set-cookie种下这个唯一标识字符串。
2. 签名。这一步通过秘钥对sid进行签名处理，避免客户端修改sid。(非必需步骤)
3. 浏览器中收到请求响应的时候会解析响应头，然后将sid保存在本地cookie中，浏览器在下次http请求的请求头中会带上该域名下的cookie信息
4. 服务器在接受客户端请求时会去解析请求头cookie中的sid，然后根据这个sid去找服务器端保存的该客户端的session，然后判断该请求是否合法

```js
const koa = require('koa')
const router = require('koa-router')()
const static = require('koa-static')
const session = require('koa-session')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyParser')
const app = new koa()

// 配置项
const SESS_CONFIG = {
  key: 'sid', // cookie键名
  maxAge: 86400000, // 有效期，默认一天
  httpOnly: true, // 仅服务器修改
  signed: true // 签名cookie
}

//配置session的中间件
app.use(cors({
  credentials: true
}))

// 签名key keys作用 用来对cookie进行签名
app.keys = ['some secret']

app.use(static(__dirname + '/'))
app.use(bodyParser())
app.use(session(SESS_CONFIG, app))

app.use((ctx, next) => {
  if (ctx.url.indexOf('login') > -1) {
    next()
  } else {
    console.log('session', ctx.session.userinfo)
    if (!ctx.session.userinfo) {
      ctx.body = { message: '登录失败' }
    } else {
      next()
    }
  }
})

router.post('/login', async (ctx) => {
  const { body } = ctx.request
  console.log('body', body)
  // 设置session
  ctx.session.userinfo = body.username
  ctx.body = { message: '登录成功' }
})

router.post('/logout', async ctx => {
  // 删除cookie
  delete ctx.session.userinfo
  ctx.body = { message: '登出系统' }
})

router.get('/getUser', async ctx => {
  ctx.body = { message: '获取数据成功', userinfo: ctx.session.userinfo }
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)
```

## 二、JWT（JSON Web Token）

1. 客户端使用用户名跟密码请求登录
2. 服务端收到请求，去验证用户名与密码
3. 验证成功后，服务端会签发一个令牌(Token)，再把这个 Token 发送给客户端
4. 客户端收到 Token 以后可以把它存储起来，比如放在 Cookie 里或者 Local Storage 里 5. 客户端每次向服务端请求资源的时候需要带着服务端签发的 Token
5. 服务端收到请求，然后去验证客户端请求里面带着的 Token，如果验证成功，就向客户端返回请求的数据

```js
const koa = require('koa')
const router = require('koa-router')()
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const jwt = require("jsonwebtoken")
const jwtAuth = require("koa-jwt")
const app = new koa()

const secret = "it's a secret"

app.use(static(__dirname + '/'))
app.use(bodyParser())

router.post('/login-token', ctx => {
  const { body } = ctx.request
  // 登录逻辑，略
  // 设置token
  const userinfo = body.username;
  ctx.body = {
    message: '登录成功',
    user: userinfo,
    // 生成token返回客户端
    token: jwt.sign(
      {
        data: userinfo,
        // 设置token过期时间 一小时后，秒为单位
        exp: Math.floor(Date.now() / 1000) + 60 * 60
      },
      secret
    )
  }
})

router.get('/getUser-token', jwtAuth({ secret }), ctx => {
  // 验证通过，state.user
  console.log(ctx.state)

  // 获取session
  ctx.body = {
    message: '获取数据成功',
    userinfo: ctx.state.user
  }
})


app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)
```

## 对比session-cookie和token

- session要求服务端存储信息，并且根据id能够检索，而token不需要(因为信息就在token 中，这样实现了服务端无状态化)。在大规模系统中，对每个请求都检索会话信息可能是一 个复杂和耗时的过程。但另外一方面服务端要通过token来解析用户身份也需要定义好相应 的协议(比如JWT)
- session一般通过cookie来交互，而token方式更加灵活，可以是cookie，也可以是 header，也可以放在请求的内容中。不使用cookie可以带来跨域上的便利性。
- token的生成方式更加多样化，可以由第三方模块来提供
- token若被盗用，服务端无法感知，cookie信息存储在用户自己电脑中，被盗用风险略小