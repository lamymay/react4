

1. 行内样式
```html
<div
　　style={{
　　　　width:'200px',
　　　　height:'80px',
　　　　backgroundColor:'yellow',
　　　　fontSize:'24px',
　　　　textAlign:'center'
　　}}
>This is Page1!</div>

```

2. 声明样式
```typescript
render(){
　　let mystyle={
　　　　width:'200px',
　　　　height:'80px',
　　　　backgroundColor:'yellow',
　　　　fontSize:'24px',
　　　　textAlign:'center'
　　}
　　return(<div>
　　　　<h2 style={mystyle}>This is Page1!</h2>
　　</div>);
}
```


3. 引入样式
require('./mystyle.css');
