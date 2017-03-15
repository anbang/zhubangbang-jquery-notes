### 查询任何没有包含class为“selected”的子节点。

    <div id="page">
        <ul>
            <li>1</li>
            <li class="selected">2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
    <script>
        var $page=$("#page");
        //查询任何没有包含class为“selected”的子节点。
        var $targetDom=$page.find("li").filter(":not(.selected)");
        console.log($targetDom);
    </script>
    
### 筛选包含某个类的元素

尽可能使用标签名来作为类名的前缀

    var $page=$("#page");
    var $targetDom=$page.find("li.selected");
    console.log($targetDom);
    
### 根据某个类，是否存在来添加或是删除该类。

正确地使用ToggleClass

有些开发者使用：

    a.hasClass('blueButton') ? a.removeClass('blueButton') : a.addClass('blueButton');
    
toggleClass 这个方法允许你使用下面的语句来很容易地做到这一点;

    a.toggleClass('blueButton'); 
    
### 用class为test的div替换某个元素;

    $page.find(".j-test-replace-with").replaceWith(function () {
        var tempDiv=document.createElement("div");
        tempDiv.innerHTML="innerHTML";
        tempDiv.className="test";
        return tempDiv;//"replaceWith这个方法可以返回文本，也可以HTML元素"
    })
    
### 判断某个元素是否为空

    !$('#keks').html();//空格不属于空
    
### 一堆无序的li；鼠标点击某个li，它的所有哥哥们背景颜色变为灰色，所有弟弟们的背景颜色标为绿色；

    $page.on("click","ul > li",function () {
        $(this).css('background-color', '#a23419')
               .prevAll().css('background-color', '#5f5f5f');
        $(this).nextAll().css('background-color', '#73A200');
    });
    
### 如何把函数绑定到事件上

    $page.on("click","ele.class",function () {
        //todo something
    });
    
### 如何使用多个属性来进行过滤有着不同类型的input元素

    var elements = $('#someid input[type=sometype][value=somevalue]').get();
    
### 如何使用jQuery来预加载图像

    jQuery.preloadImages = function () {
     for (var i = 0; i < arguments.length; i++) {
      $("<img />").attr('src', arguments[i]);
     }
    };
    //用法  
    $.preloadImages('image1.gif', '/path/to/image2.png', 'some/image3.jpg');
    
### 如何找到一个已经被选中的option元素

    $page.find('option:selected');
    
### 如何隐藏一个包含了某个值文本的元素  

    $page.find("li:contains('4')").hide();
    
### 如何禁用右键单击上下文菜单    

    $(document).on('contextmenu', function (e) {
        return false;
    });
    
### 如何检查某个元素是否存在

    if ($page.find('#someDiv').length) {
        //存在
    }

### 在一段时间之后自动隐藏或关闭元素

    $page.find(".area_name").delay(3000).hide(500);
    
    delay用于将队列中的函数延时执行。他既可以推迟动画队列的执行，也可以用于自定义队列。
    
### 如何限制"textarea"域中的字符的个数

    jQuery.fn.maxLength = function (max) {
        this.each(function () {
            var type = this.tagName.toLowerCase();
            var inputType = this.type ? this.type.toLowerCase() : null;
            if (type == "input" && inputType == "text" || inputType == "password") {
                this.maxLength = max;
            } else if (type == "textarea") {
                this.onkeyup = function () {
                    if (this.value.length > max) {
                        this.value = this.value.substring(0, max);
                    }
                };
            }
        });
    };
    //用法
    $('#mytextarea').maxLength(15);
    
    也可以用 jquery.validate.js 这个插件，设置maxLength属性
    
### 如何设置断言？

### 如何在jQuery中克隆一个元素

    var cloned = $page.find('#somediv').clone();
    
### 在jQuery中如何测试某个元素是否可见

    if ($page.find(element).is(':visible') == 'true') {
        //该元素是可见的  
    }
    
### 如何把一个元素放在屏幕的中心位置

    jQuery.fn.center = function () {
        this.css('position', 'absolute');
        this.css('top', ($(window).height() - this.height())/ 2 +$(window).scrollTop() + 'px');
        this.css('left', ($(window).width() - this.width())/ 2 + $(window).scrollLeft() + 'px');
        return this;
    };
    //这样来使用上面的函数：
    $(".area_name").center();
    
###  如何把有着某个特定名称的所有元素的值都放到一个数组中

    var arrInputValues = [];
    $("input[name='test']").each(function () {
        arrInputValues.push($(this).val());
    });
    console.log(arrInputValues);
    
### 获得父级te上的device_id  device_name属性/HTML上怎么写，JS怎么写

    //HTML上通过data来设置
    var sourceData=$(this).closest("tr").data();
    
### 记录jQuery事件日志，输出到控制台

    jQuery.log = jQuery.fn.log = function (msg) {
        if (console) {
            console.log(msg, this);
        }
        return this;
    };
    $page.find(".test-log").hide().log('test-log').addClass('someClass');
    
### 点击链接强制在新窗口打开;如果再加上新窗口的高度是500，宽度是800的附加条件呢？

    var newwindow;
    $page.on('click' ,"a", function (e) {
        e.preventDefault();
        newwindow = window.open($(this).attr('href'), '', 'height=500,width=800');
        if (window.focus) {
            newwindow.focus();
        }
    });
    
### 选项卡当前元素添加active的类目，其它的兄弟元素，如果active的类目，需移除

    $page.on("click","tab-item",function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

### 如何切换页面上的所有复选框（全选/全不选）

    var tog = false;
    $page.on("click",".j-switch",function (e) {
        e.preventDefault();
        $page.find("input[type=checkbox]").prop("checked", !tog);
        tog = !tog;
    });
    
### 如何基于一些输入文本来过滤一个元素列表

    //如果元素的值和输入的文本相匹配的话,该元素将被返回
    $page.find('.someClass').filter(function () {
        return $(this).attr('value') == $('input#someId').val();
    });
    
### 如何把整个的列表元素,变成可点击的

    <ul class="test-ul">
        <li><a href="https://translate.google.cn/#en/zh-CN/switch">1</a></li>
        <li><a href="https://translate.google.cn/#en/zh-CN/switch">1</a></li>
        <li><a href="https://translate.google.cn/#en/zh-CN/switch">1</a></li>
        <li><a href="https://translate.google.cn/#en/zh-CN/switch">1</a></li>
        <li><a href="https://translate.google.cn/#en/zh-CN/switch">1</a></li>
        <li><a href="https://translate.google.cn/#en/zh-CN/switch">1</a></li>
        <li><a href="https://translate.google.cn/#en/zh-CN/switch">1</a></li>
    </ul>
    
    var $page=$("#page");
    $page.on("click","ul > li",function (e) {
        e.preventDefault();
        window.location=$(this).find("a").attr("href");
    });
    
### 如何检查图像是否已经被完全加载进来
    
    <img src="book.png" alt="Book" id="book" />
    $('#book').load(function() {
      // Handler for .load() called.
    });
    
    只要图像已被加载，该处理程序被调用；在一般情况下，没有必要等待所有图像完全装入。如果代码可以更早的执行，通常最好把它在发送到.ready()方法处理。
    
### 如何检查cookie是否启用

    var dt = new Date();
    dt.setSeconds(dt.getSeconds() + 60);
    document.cookie = "cookietest=1;expires=" + dt.toGMTString();
    var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;
    if (!cookiesEnabled) {
        console.log("没有启用cookie",document.cookie.cookietest);
    }else{
        console.log("启用cookie",document.cookie);
    }

**expires属性**

指定了coolie的生存期，默认情况下coolie是暂时存在的，他们存储的值只在浏览器会话期间存在，当用户推出浏览器后这些值也会丢失，如果想让cookie存在一段时间，就要为expires属性设置为未来的一个过期日期。现在已经被max-age属性所取代，max-age用秒来设置cookie的生存期。

**path属性**

它指定与cookie关联在一起的网页。在默认的情况下cookie会与创建它的网页，该网页处于同一目录下的网页以及与这个网页所在目录下的子目录下的网页关联。

**domain属性**

domain属性可以使多个web服务器共享cookie。domain属性的默认值是创建cookie的网页所在服务器的主机名。不能将一个cookie的域设置成服务器所在的域之外的域。
例如让位于order.example.com的服务器能够读取catalog.example.com设置的cookie值。如果catalog.example.com的页面创建的cookie把自己的path属性设置为“/”，把domain属性设置成“.example.com”，那么所有位于catalog.example.com的网页和所有位于orlders.example.com的网页，以及位于example.com域的其他服务器上的网页都可以访问这个coolie。

**secure属性**

它是一个布尔值，指定在网络上如何传输cookie，默认是不安全的，通过一个普通的http连接传输

### 如何让cookie过期

    var date = new Date();
    date.setTime(date.getTime() + (10 * 60 * 1000));//10的地方可修改
    $.cookie('example', 'foo', { expires: date });
    
### 如何使用一个可点击的链接来替换页面中任何的URL

    $.fn.replaceUrl = function () {
        var regexp = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
        this.each(function () {
            $(this).html(
                $(this).html().replace(regexp, '<a href="$1">$1</a>')
            );
        });
        return $(this);
    };
    //用法　
    $('p').replaceUrl();