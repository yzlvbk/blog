#### Sipke-button:

1.css 中currentColor属性

2.ReactDOM.findDOMNode 可以获取元素节点

#### sipke-affix

1.callback red用法

```tsx
public componentDidMount() {
    console.log(this.affixRef)
  }
public render() {
    return (
      <div className="sipke-affix" ref={this.saveAffixRef}>
        <div className="sipke-affix-wrapper">affix</div>
      </div>
    );
  }
```

2.string ref 使用 (已被弃用)

```tsx
class MyComponent extends React.Component {
  componentDidMount() {
    this.refs.myRef.focus();
  }
  render() {
    return <input ref="myRef" />;
  }
}
```

3.React.creatRef 使用

```tsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.myRef.current.focus();
  }
  render() {
    return <input ref={this.myRef} />;
  }
}		
```

#### Spike-tabs

React.children.map

在使用children过程中发现children不包含map方法

这里使用React.Children.map将children转化为固定array类型，也就包含了map方法。

```tsx
render(){
        const { children} = this.props;
        return React.Children.map(children, (child: any, index) => {
            console.log(child)
            return (
              <div>
                {child}
              </div>
            );
          });  
    }
```

#### Spike-message

React.createElement()用法

Spike-modal

ReactDOM.createPortal(component, document.body)

