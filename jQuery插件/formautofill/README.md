# jQuery form autofill

jQuery插件简单地自动填充一个空的表单与数据。该插件只封了一个方法autofill；

## 用法

您需要一个  form

```html
<form id="f">
    name <input type="text" name="name">
    email <input type="text" name="email">
    love jQuery
    <input type="radio" name="lovejquery" value="yes"> yes
    <input type="radio" name="lovejquery" value="no"> no
</form>
```

数据 __data__ （可以.data() 方法获取的）

```javascript
var data = {
    "name": "John Doe",
    "email": "johndoe@mail.com",
    "lovejquery": "yes"
}
```

直接选择目标form，然后autofill就可以了

```javascript
$("#f").autofill( data );
```


##### 具体的用法如下

http://labs.creative-area.net/jquery.formautofill/doc/

### 默认配置如下

        var settings = {
                findbyname: true,
                restrict: true
            }

##### 默认通过findbyname,源码如下

        if ( settings.findbyname ) {
            //by name
        }else{
            //by id
        }

##### restrict 是配置当前代码执行环境的上下文；

插件内的代码逻辑如下：

        elt = ( settings.restrict ) ? self.find( selector ) : $( selector );

如果为true，则在当前的form下查找某个name/id，当前代码执行的上下文是this【$("#f")】；

如果为false，则在整个文档内查询的；