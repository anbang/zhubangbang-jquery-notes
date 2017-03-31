该插件的github网址：https://github.com/PaulGuo/Juicer

一个比较好用的数据输出插件；

# 解决的问题：

前端输出数据；用juicer省的自己拼接字符串了；

# 引入

- 可以直接在页面中使用
    比如你可以直接这么使用

            <script src="./src/juicer.js"></script>

- 如果cmd或者amd的写法，可以配置在里面

    比如

            var juicer = require("juicer");

# 用法的例子

见HTML文件；

# 一些说明

如果您用自定义的注册事件，官方文档上的介绍并不确切的；

用法说明

    function number_format(number, decimals, dec_point, thousands_sep){}
    juicer.register('beautifyAmount',number_format);//注册函数,用的时候使用注册的beaytifyAmount这个函数；

    //使用如下
    ${(item.amount/100)|beautifyAmount,"2",".",","}

这里的注册函数参数对应的

- beautifyAmount 的第1个参数是管道分隔符前面的 (item.amount/100)；
- beautifyAmount 的第2个参数是 "2"
- beautifyAmount 的第3个参数是 "."
- beautifyAmount 的第4个参数是 ","

如果有1个以上的参数，注册函数名字后面用,分割；

官方介绍的是：

- ${name}
- ${name|function}
- ${name|function, arg1, arg2}

官方文档上写传餐的时候，其实注册后面并不是arg1,arg2；而应该是arg2,arg3





