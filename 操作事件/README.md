### 操作事件

### 浏览器事件
- resize    浏览器窗口的大小发生改变
- scroll    滚动条的位置发生变化

### 文档加载

- ready     DOM加载完成
- holdReady
- load()    元素加载完毕
- unload()  用户离开页面

### 事件绑定
- on
- off
- one
- trigger
- triggerHandler

### 表单事件
- change    表单元素的值发生变化
- blur      表单元素失去焦点
- focus     表单元素获得焦点
- select    用户选中文本框中的内容
- submit    用户递交表单

### 键盘事件
- keyup         松开键盘
- keydown       按下键盘（长时间按键，只返回一个事件）
- keypress      按下键盘（长时间按键，将返回多个事件）

### 鼠标事件
- click         鼠标单击
- dbclick       鼠标双击
- hover         同时为mouseenter和mouseleave事件指定处理函数
- contextmenu
- mousedown     按下鼠标
- mouseup       松开鼠标
- mouseover     鼠标进入（进入子元素也触发）
- mouseout      鼠标离开（离开子元素也触发）
- mousemove     鼠标在元素内部移动
- mouseenter()  鼠标进入（进入子元素不触发）
- mouseleave()  鼠标离开（离开子元素不触发）

### 事件对象
- event.pageX 事件发生时，鼠标距离网页左上角的水平距离
- event.pageY 事件发生时，鼠标距离网页左上角的垂直距离
- event.type 事件的类型（比如click）
- event.which 按下了哪一个键,keycode的标准化
- event.data 在事件对象上绑定数据，然后传入事件处理函数
- event.target 事件针对的网页元素
- event.preventDefault() 阻止事件的默认行为（比如点击链接，会自动打开新页面）
- event.stopPropagation() 停止事件向上层元素冒泡
