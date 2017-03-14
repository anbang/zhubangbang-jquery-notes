在介绍jquery插件编写时我们先来介绍一下编写jquery插件的规范，虽然这些规范不一定都适用，但对养成一个良好的编程习惯还是有好处的。

当你熟悉了这些编程习惯的时候相信你已经是一个jquery插件编写高手了。

# 一、给你的插件加上完整的注释

以前我在编写插件的时候不爱加注释，嫌太麻烦，这是一个非常不好的习惯，不过现在我已经改了这个不好的习惯。

编写插件注释不仅仅是给用户看更重要的是给自己看，一个插件往往需要多次修改，没有谁能完全记住每次修改时的目的。将注释当成编写插件的一部分，养成随手注释的习惯，由其是在编写javascript时

##### 1、在全部代码前加文件说明注释

    /**
    * $.getip
    * @extends jquery.1.X.X 基于的版本号
    * @fileOverview 创建文字提示框
    * @author 作者名字
    * @email  abc@abc.com
    * @site   www.jsdaxue.com
    * @version 0.1
    * @date 2015-12-02
    * Copyright (c) 2010-2015 作者名字
    * @example
    * $("a").getip();
    */
    (function($){
    .......
    })(jQuery);
    
通过上面的注释来介绍本插件的版本号，使用说明等相关信息，相关的命名参考;
    
    @param  @argument 指定参数名和说明来描述一个函数参数 
    @returns        描述函数的返回值 
    @author         指示代码的作者 
    @deprecated     指示一个函数已经废弃，而且在将来的代码版本中将彻底删除。要避免使用这段代码 
    @see            创建一个HTML链接，指向指定类的描述 
    @version        指定发布版本 
    @requires           创建一个HTML链接，指向这个类所需的指定类 
    @throws @exception  描述函数可能抛出的异常的类型 
    {@link}             创建一个HTML链接，指向指定的类。这与@see很类似，但{@link}能嵌在注释文本中 
    @fileoverview       这是一个特殊的标记。如果在文件的第一个文档块中使用这个标记，则指定该文档块的余下部分将用来提供这个文件的概述 
    @class              提供类的有关信息，用在构造函数的文档中 
    @constructor        明确一个函数是某个类的构造函数 
    @type               指定函数的返回类型 
    @extends            指示一个类派生了另一个类。JSDoc通常自己就可以检测出这种信息，不过，在某些情况下则必须使用这个标记 
    @private            指示一个类或函数是私有的。私有类和函数不会出现在HTML文档中，除非运行JSDoc时提供了--private命令行选项 
    @final              指示一个值是常量值。要记住JavaScript无法真正保证一个值是常量 
    @ignore             JSDoc忽略有这个标记的函数

##### 2、给函数加注释

比如以下代码是yijs.Yitip一个方法setContent：

    yijs.Yitip.prototype = {
     /**
     * 向提示框添加内容
     * @param {Object | String} content 内容
     */
     setContent : function(content){
        ...........
     }
    }
    
##### 3、给参数加注释

     //默认参数
     $.fn.yitip.defaults = {
         applyTo : null,                //目标容器
         content : "",                  //内容
         position : "topMiddle",        //提示框位置
         offest : {"left":0,"top":0},   //提示框位置偏移
         color : "yellow"               //提示框颜色
     }

##### 4、函数体内关键代码加上注释

    //点击搜索的时候；
    $page.on("click","#search",function(e){
        e.preventDefault();
        deviceId=$page.find("#keyword").val();
        self.searchModule();
    });

    //重置的时候
    $page.on("click", "#reset", function () {
        window.location.href = url;
    });

    //鼠标回车搜素的时候；
    $page.on("keypress","#keyword",function(e){
        e = e || window.event;
        if (e.keyCode==13){
            deviceId = $(this).val();
            self.searchModule()
        }
    });

    //鼠标离开的时候
    $page.on("blur","#keyword",function(e){
        deviceId = $(this).val();
    });

# 二、jquery变更规范

在javascript世界中，没有真正意义的共有变量、私有变量、常量等概念，当你的javascript代码达到一定数量级时，过段时间你回头看自己的代码，都会把自己搞晕。

- 请在私有变量前加“_”

        var _pos = this.pos;

- 常量请大写
    
        this.DATA_COLOR = "color";
    
- jquery对象变量前加“$”

        var $page=$("#page-demo");//获取当前页面的
    
- object、array变量前加“o”、“a”
    - 很多人喜欢给数组变量加个”s”，这也是可以的，按个人习惯，如果你觉得有必要还可以给函数前加个“fn”(个人不喜欢加fn)。

# 三、jquery插件开发的一些建议

### 1、请多使用data()方法

query中data()方法非常有用，尤其在jquery插件开发中，因为data()所创建的缓存，可以完整的保存各种数据类型的数据，这是其他缓存机制无法比拟的。

### 2、请使用on来绑定事件

很多朋友爱这样写代码：

    $(".yitip").click(function(){
        ........
    })
    
但在jquery插件开发过程中我们提倡使用on;

    $testArea.on('click',".yitip",function(){
        .........
    })
    
这是事件委托的写法，方便以后的维护

### 3、善用typeof

typeof用于判断数据类型，这个方法在参数判断中非常有用处

4、插件名加个独有前缀

jquery插件成千上万，插件撞车时很容易的事，比如提示框插件：

    $.fn.tip = function(options){    }
    
但tip的冲突率无疑很高，但是加个字符串作为前缀，就减少了撞车机率;比如 balabalaTip 等；

# 四、其他规范

### 设置版本号

有很多插件作者将版本号作为插件的一个属性，也是一个比较好的做法，比如：

    $.fn.yitip.version = 0.1

你可以不设置为属性，但在你的文件头务必加上版本注释，比如：

    /**
    * $.balabalaTip
    * @version 0.1
    */
    
作为一个属性，有一个很大优势，就是可以根据版本号来判断和冗余一些功能；

### 使用闭包

     ;(function($){
        //Code goes here
     })(jQuery);
     
这个是来自jQuery 官方的插件开发规格要求，使用这种编写方法有什么好呢
- 1，避免全局依赖
- 2，避免第三方破坏
- 3，兼容jQuery 操作符 '$' 和 jQuery'

jQuery传递进来作为局部变量存在，而非全局变量，这样可以加快解析流程，以及影响最小化。

在立即函数执行前面会加上";"这个符号。这是为了防止前面的其他插件没有正常关闭。

### 扩展方法的选择

 jQuery 提供了2个给用户扩展的基类，
 
    $.extend 和 $.fn.extend

- $.extend      //用于扩展自身方法， 如 $.ajax, $.getJSON 等
- $.fn.extnd    //用来扩展jQuery 包括方法和对jQuery对象的操作，

为了保持jQuery 的完整性，推荐使用$.fn.extend

如果仅仅是冗余默认参数，使用$.extend 

### 选择器

jQuery提供了功能强大，并兼容多种css版本的选择器，不过发现很多同学在使用选择器时并未注重效率的问题。 

- a) 尽量使用Id选择器，jQuery的选择器使用的API都是基于getElementById或getElementsByTagName，因此可以知道 效率最高的是Id选择器，因为jQuery会直接调用getElementById去获取dom，而通过样式选择器获取jQuery对象时往往会使用 getElementsByTagName去获取然后筛选。我个人喜欢，$page下面去查找元素；下面的元素用class；$page用id; 

- b) 样式选择器应该尽量明确指定tagName, 如果开发人员使用样式选择器来获取dom，且这些dom属于同一类型，例如获取所有className为jquery的div，那么我们应该使用的写法 是$('div.jquery')而不是$('.jquery')，这样写的好处非常明显，在获取dom时jQuery会获取div然后进行筛选，而不是 获取所有dom再筛选。

- c) 避免迭代，很多同学在使用jQuery获取指定上下文中的dom时喜欢使用迭代方式，如$('.jquery .child')，获取className为jquery的dom下的所有className为child的节点，其实这样编写代码付出的代价是非常大 的，

jQuery会不断的进行深层遍历来获取需要的元素，即使确实需要，我们也应该使用诸如$(selector,context), $('selector1>selector2'), $(selector1).children(selector2), $(selctor1).find(selector2)之类的方式。

### 属性和方法要分离开

假如我们在UI层设置了某个颜色，这个颜色在属性里面配置好的；

但是我们并不一定能够保证，别人也需要这个颜色；个人是推荐再配一个 setColour 供用户去自定义；

属性和方法的思路可以参考腾讯地图的API设置（当前其它地图的API也都大同小异）；

http://lbs.qq.com/javascript_v2/doc/index.html#g0