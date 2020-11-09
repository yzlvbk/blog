# 手写Koa2源码

## Koa

概述:Koa 是一个新的 **web** **框架**， 致力于成为 **web** **应用**和 **API** **开发**领域中的一个更小、更富有 表现力、更健壮的基石。

koa是Express的下一代基于Node.js的web框架

 koa2完全使用Promise并配合 async 来实现异步

特点:

- 轻量，无捆绑 
- 中间件架构
-  优雅的API设计
- 增强的错误处理

##  koa使用

```js
const koa = require('koa')
const app = new koa()

// 中间件的执行
// app.use((req,res) => {
//     res.writeHead(200)
//     res.end('hi kaikeba')
// })
// const delay = () => Promise.resolve(resolve => setTimeout(() => resolve(), 2000));


// app.use(async (ctx, next) => {
//     ctx.body = "1";
//     setTimeout(() => {
//         ctx.body += "2";
//     }, 2000);
//     await next();
//     ctx.body += "3";
// });

// app.use(async (ctx, next) => {
//     ctx.body += "4";
//     await delay();
//     await next();
//     ctx.body += "5";
// });

// app.use(async (ctx, next) => {
//     ctx.body += "6";
// });

// 静态文件处理
const static = require('./static')
app.use(static(__dirname + '/public'));

// 使用路由
const Router = require('./router')
const router = new Router()

router.get('/index', async ctx => { ctx.body = 'index page'; });
router.get('/post', async ctx => { ctx.body = 'post page'; });
router.get('/list', async ctx => { ctx.body = 'list page'; });
router.post('/index', async ctx => { ctx.body = 'post page'; });

// 路由实例输出父中间件 router.routes()
app.use(router.routes());

app.listen(3000)
```

## koa核心

- context
- 中间件

### 实现context

koa为了能够简化API，引入上下文context概念，将原始请求对象req和响应对象res封装并挂载到 context上，并且在context上设置getter和setter，从而简化操作。

```js
// request.js
module.exports = {
  get url() {
    return this.req.url
  },

  get method() {
    return this.req.method.toLowerCase()
  }
}

// response.js
module.exports = {
  get body() {
    return this._body
  },

  set body(val) {
    this._body = val
  }
}

// context.js
module.exports = {
  get url() {
    return this.request.url
  },
  get body() {
    return this.response.body
  },
  set body(val) {
    this.response.body = val
  },
  get method() {
    return this.request.method
  }
}
```

### 中间件

Koa中间件机制:Koa中间件机制就是函数式组合概念 Compose的概念，将一组需要顺序执行的函数复合为一个函数，外层函数的参数实际是内层函数的返回值。洋葱圈模型可以形象表示这种机 制，是源码中的精髓和难点。

## 手写完整koa源码

```js
const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./response')

class koa {
  constructor() {
    this.middlewares = []
  }

  use(middleware) {
    this.middlewares.push(middleware)
  }

  listen(...args) {
    const server = http.createServer(async (req, res) => {
      // 创建上下文
      let ctx = this.createContext(req, res)

      // 合成中间件
      const fn = this.compose(this.middlewares)
      await fn(ctx)

      res.end(ctx.body)
    })
    server.listen(...args)
  }

  // 构建上下文环境
  createContext(req, res) {
    const ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)

    ctx.req = ctx.request.req = req
    ctx.res = ctx.request.res = res

    return ctx
  }

  // 合成函数
  compose(middlewares) {
    return function (ctx) {
      return dispatch(0)
      function dispatch(i) {
        let fn = middlewares[i]
        if (!fn) {
          return Promise.resolve()
        }
        return Promise.resolve(
          fn(ctx, function next() {
            return dispatch(i + 1)
          })
        )
      }
    }
  }
}

module.exports = koa
```

## 手写koa-router源码

```js
class Router {
    constructor() {
      this.stack = [];
    }
  
    register(path, methods, middleware) {
      let route = {path, methods, middleware}
      this.stack.push(route);
    }
    // 现在只支持get和post，其他的同理
    get(path,middleware){
      this.register(path, 'get', middleware);
    }
    post(path,middleware){
      this.register(path, 'post', middleware);
    }
    routes() {
      let stock = this.stack;
      return async function(ctx, next) {
        let currentPath = ctx.url;
        let route;
  
        for (let i = 0; i < stock.length; i++) {
          let item = stock[i];
          if (currentPath === item.path && item.methods.indexOf(ctx.method) >= 0) {
            // 判断path和method
            route = item.middleware;
            break;
          }
        }
  
        if (typeof route === 'function') {
          route(ctx, next);
          return;
        }
  
        await next();
      };
    }
  }
  module.exports = Router;
```

## 手写koa-static源码

```js
// static.js
const fs = require("fs");
const path = require("path");

module.exports = (dirPath = "./public") => {
  return async (ctx, next) => {
    if (ctx.url.indexOf("/public") === 0) {
      // public开头 读取文件
      const url = path.resolve(__dirname, dirPath);
      const fileBaseName = path.basename(url);
      const filepath = url + ctx.url.replace("/public", "");
      console.log(filepath);
      // console.log(ctx.url,url, filepath, fileBaseName)
      try {
        stats = fs.statSync(filepath);
        if (stats.isDirectory()) {
          const dir = fs.readdirSync(filepath);
          // const
          const ret = ['<div style="padding-left:20px">'];
          dir.forEach(filename => {
            console.log(filename);
            // 简单认为不带小数点的格式，就是文件夹，实际应该用statSync
            if (filename.indexOf(".") > -1) {
              ret.push(
                `<p><a style="color:black" href="${
                  ctx.url
                }/${filename}">${filename}</a></p>`
              );
            } else {
              // 文件
              ret.push(
                `<p><a href="${ctx.url}/${filename}">${filename}</a></p>`
              );
            }
          });
          ret.push("</div>");
          ctx.body = ret.join("");
        } else {
          console.log("文件");

          const content = fs.readFileSync(filepath);
          ctx.body = content;
        }
      } catch (e) {
        // 报错了 文件不存在
        ctx.body = "404, not found";
      }
    } else {
      // 否则不是静态资源，直接去下一个中间件
      await next();
    }
  };
};
```

