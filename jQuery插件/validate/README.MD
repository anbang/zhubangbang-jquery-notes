# jquery.validata的源码分析；

在与后端进行交互的时候，验证是必不可少的操作；下面是用法实例；

```
    var $page=$("body");
    var $form=$page.find("form.j-test-form");
    var pageUtility={
        init:function () {
            this.validate();
        },
        validate:function () {
            $form.validate({
                debug:true
            });
        }
    };
    pageUtility.init();
```


### 扩展了哪些东西？

一.validata插件是在jquery对象上扩展三个主要方法；

```
$.extend($.fn, {
    validate:function(options){},
    valid:function(){},
    rules:function(){}
});
```

- validata(options) //主函数，用来验证所选的表单；
- valid
- rules

二.自定义了伪类选择器，方便改变视图层；

```
$.extend( $.expr[ ":" ], {
    blank:function(){},
    filled:function(){},
    unchecked:function(){}

});
```

- blank     :选择没有value值的元素；
- filed     ：有value值的元素
- unchecked ：没有选中的元素

三.自定义了验证器，并且验证起暴露了一些属性和方法，方便用户进行定制开发；

```
$.validator=function(options,form){};
$.validator.format=function(source,form){};
$.extend($.validator,{
    defaults:function(){},
    setDefaults:function(){},
    messages:function(){},
    autoCreateRanges:function(){},
    prototype:function(){},
    classRuleSettings:function(){},
    addClassRules:function(){},
    classRules:function(){},
    normalizeAttributeRule:function(){},
    attributeRules:function(){},
    dataRules:function(){},
    staticRules:function(){},
    normalizeRules:function(){},
    normalizeRule:function(){},
    addMethod:function(){},
    methods:function(){},
});
```


# 一，3个主方法

### validata(options)

- debug
- submitHandler
- invalidHandler
- ignore
- rules
- messages
- groups
- onsubmit
- onfocusout
- onkeyup