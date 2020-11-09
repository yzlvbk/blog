module.exports = {
  base: '/blog/',
  title: 'DataV-React',
  description: 'React 大屏数据展示组件库',
  head: [
    ['meta', { name: 'keywords', content: 'datav,data,bi,开源,免费,大屏' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: 'https://unpkg.com/react@16.9.0/umd/react.development.js' }],
    ['script', { src: 'https://unpkg.com/react-dom@16.9.0/umd/react-dom.development.js' }],
    ['script', { src: 'https://unpkg.com/@jiaminghi/data-view-react/umd/datav.min.js' }],
  ],
  host: 'localhost',
  port: 5000,
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '支持',
        link: '/support/'
      },
      {
        text: 'Demo',
        link: '/demo/'
      },
      {
        text: 'GitHub',
        items: [
          {
            text: '项目源码仓库',
            link: 'https://github.com/DataV-Team/DataV-React'
          },
          {
            text: '文档及Demo源码仓库',
            link: 'https://github.com/DataV-Team/datav.react.jiaminghi.com'
          }
        ]
      }
    ],
    sidebar: {
      '/': [
        ['/guide/', 'guide'],
        {
          title: 'Vue',
          collapsable: false,
          children: [
            '/vue/vue组件化.md',
            '/vue/手写vue源码.md',
            '/vue/Vue虚拟DOM和diff算法.md',
            '/vue/vue初始化流程.md',
            '/vue/Vue-Router原理.md',
            '/vue/Typescript在Vue项目中用法.md',
            '/vue/Vue服务端渲染SSR流程、理解和使用场景.md'
          ]
        },
        {
          title: 'React',
          collapsable: false,
          children: [
            '/react/React基础.md',
            '/react/React组件化.md',
            '/react/React Hook.md',
            '/react/手写Redux.md',
            '/react/手写React-Redux.md'
          ]
        },
        {
          title: 'Node',
          collapsable: false,
          children: [
            '/node/深入浅出Node.md',
            '/node/Node基础.md',
            '/node/Node封装http服务器.md',
            '/node/Express路由.md',
            '/node/Express中间件.md',
            '/node/Express文件上传.md',
            '/node/AJAX上传图片.md',
            '/node/Express文件下载.md',
            '/node/Express使用cookie.md',
            '/node/Cookie加密.md',
            '/node/session应用.md',
          ]
        },
        {
          title: 'Mysql',
          collapsable: false,
          children: [
            '/mysql/Mac重置mysql密码.md',
            '/mysql/启动Mysql和杀死mysql进程.md',
            '/mysql/数据库基本操作.md',
            '/mysql/数据库查询.md',
            '/mysql/子查询.md',
            '/mysql/连接查询.md',
            '/mysql/SQL排序.md',
            '/mysql/事务.md',
            '/mysql/分组.md',
            '/mysql/分页.md',
            '/mysql/聚合.md',
            '/mysql/视图.md',
            '/mysql/范式规则.md'
          ]
        },
        {
          title: 'Three.js',
          collapsable: false,
          children: [
            '/three/Three.js设置线条宽度.md',
            '/three/Three.js在场景中添加文字.md'
          ]
        },
        {
          title: 'Webpack',
          collapsable: false,
          children: [
            '/webpack/webpack.md'
          ]
        }
      ],
      sidebarDepth: 2, // 侧边栏显示2级
    }
  }
}

