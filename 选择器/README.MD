选择器是jQuery的根基，在jQuery中，对事件处理，遍历DOM和AJAX操作都依赖于选择器，如果能熟练都使用选择器，将有事半功倍都效果；

jQuery选择器分为两大部分：选择对象和筛选条件。

选择对象表示要获取什么对象，

筛选条件是对获取的对象进行筛选，最终留下符合某些特征的对象。

# 1.选择对象

### 1).基本

- \#id ID选择器， 根据给定的ID匹配一个元素。例如：$("#id")     返回单个元素
- element 标签选择器，根据给定的元素名匹配所有元素。例如：$("div")  返回集合元素
- .class 类名选择器 根据给定的类匹配元素。例如：$(".style1")，更推荐$("span.style1")这样都写法;     返回集合元素
- \* 通配符选择器，匹配所有元素。例如：$("*")        返回集合元素
- ·selector1,selector2,selectorN 群组选择器，将每一个选择器匹配到的元素合并后一起返回。例如：$("#id,div,span.style1")     返回集合元素

### 2).表单 

- :button 匹配所有按钮。例如：$(":button")
- :checkbox 匹配所有复选框。例如：$(":checkbox")
- :file 匹配所有文件域。例如：$(":File")
- :hidden 匹配所有不可见元素，或者type为hidden的元素。例如：$("input:hidden")
- :image 匹配所有图像域。例如：$(":image")
- :input 匹配所有 input, textarea, select 和 button 元素。例如：$(":input")
- :password 匹配所有密码框。例如：$(":password")
- :radio 匹配所有单选按钮。例如：$(":radio")
- :reset 匹配所有重置按钮。例如：$(":reset")
- :submit 匹配所有提交按钮。例如：$(":submit")
- :text 匹配所有的单行文本框。例如：$(":text")
- :header 匹配如 h1, h2, h3之类的标题元素。例如：$(":header").css("background", "#EEE");

# 二.筛选条件

### 1).属性筛选

- [attribute] 匹配包含给定属性的元素。例如：$("div[id]")
- [attribute=value] 匹配给定的属性是某个特定值的元素。例如：$("input[name='man']");(这个比较常用)
- [attribute!=value] 匹配所有含有指定的属性，但属性不等于特定值的元素。例如：$(input[name!='man');
- [attribute^=value] 匹配给定的属性是以某些值开始的元素。例如：$("input[name^='man']")
- [attribute$=value] 匹配给定的属性是以某些值结尾的元素。例如：$("input[name$='man']")
- [attribute*=value] 匹配给定的属性是以包含某些值的元素。例如：$("input[name*='man'")
- [selector1][selector2][selectorN] 同时满足多个条件。例如：$("input[id][name$='man']")

##### 可见性搜索

- :hidden 匹配所有的不可见元素。例如：$("tr:hidden")
- :visible 匹配所有的可见元素。例如：$("tr:visible")

##### 表单的属性筛选

- :checked 匹配所有选中的被选中元素(复选框、单选框等，不包括select中的option)。例如：$("input:checked")
- :selected 匹配所有选中的option元素。例如：$("select option:selected")
- :disabled 匹配所有不可用元素。例如：$("input:disabled")
- :enabled 匹配所有可用元素。例如：$("input:enabled")

### 2).内容筛选

- :contains(text) 匹配包含给定文本的元素。例如：$("div:contains('John')")
- :empty 匹配所有不包含子元素或者文本的空元素。例如：$("td:empty")
- :has(selector) 匹配含有选择器所匹配的元素的元素。例如：$("div:has(p)");
- :parent 匹配含有子元素或者文本的元素。例如：$("td:parent")

### 3).层级筛选

- ancestor descendant 在给定的祖先元素下匹配所有的后代元素。例如：$("form input") 返回集合元素
- parent > child 在给定的父元素下匹配所有的子元素。例如：$("form > input");和上面的区别是，后代选择器是选择所有的后代，而这个是选择子元素，并非所有的后代
- prev + next 匹配所有紧接在 prev 元素后的 next 元素。例如：$("label + input")
- prev ~ siblings 匹配 prev 元素之后的所有 siblings 元素。例如：$("form ~ input") 上面选择的是下一个弟弟，这个选择是所有弟弟；

上面2个比较常用，下面2个因为有有更加方便和性能好的方法代替，所以很少会用到；
```
$(".one").next();
$(".one").nextAll();
$(".one").siblings();
```

###### 子元素筛选

- :first-child 匹配第一个子元素。例如：$("ul li:first-child")
- :last-child 匹配最后一个子元素。例如：$("ul li:last-child")
- :nth-child(index/even/odd/equation) 匹配其父元素下的第N个子或奇偶元素。例如：$("ul li:nth-child(2)")
- :only-child 如果某个元素是父元素中唯一的子元素，那将会被匹配。例如：$("ul li:only-child")

### 4).方法筛选/基本筛选

- :animated 匹配所有正在执行动画效果的元素。例如：$("div:animated");
- eq(index) 匹配一个给定索引值的元素。例如：$("tr:eq(1)")
- :even 匹配所有索引值为偶数的元素，从 0 开始计数。例如：$("tr:even")
- :first 匹配找到的第一个元素。例如：$("tr:first")     返回单个元素
- :gt(index) 匹配所有大于给定索引值的元素，从 0 开始计数。例如：$("tr:gt(0)")
- :last 匹配找到的最后一个元素。例如：$("tr:last")      返回最后一个元素
- :lt(index) 匹配所有小于给定索引值的元素。例如：$("tr:lt(2)")
- :not(selector) 去除所有与给定选择器匹配的元素。例如：$("input:not(:checked)")
- :odd 匹配所有索引值为奇数的元素，从 0 开始计数。例如：$("tr:odd")

项目中一般不会直接选择，而是会有层级的筛选的概念；

    var $page=$("#page-demo"),//这是先获取页面的ID；这时候$page是页面中最大的；
        $customDate=$page.find(".custom-date");//在页面中查找class是custom-date的元素,获得的是数组；
        
    //类似原生中的这种写法；
    var oTempPar=document.getElementById("page"),
        oTempChildren=oTempPar.getElementsByClassName("custom-date");//这时候获得的是数组；
        
    这样写出来的代码方便调试和维护；如果所有的jQuery对象都是直接获取，维护起来太蛋疼了；