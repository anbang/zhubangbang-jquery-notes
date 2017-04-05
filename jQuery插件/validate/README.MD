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

API中文使用介绍

http://www.runoob.com/jquery/jquery-plugin-validate.html

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


# 一，3个方法内的属性

### validata(options)

validata的参数说明：http://jqueryvalidation.org/validate/

- debug         可以帮助了解验证信息
- rules         给不同name值定制的规则

        rules:{
            test_01:{
                required:true,
                min:10,
                max:100
            },
            test_02:{
                required:true
            },
            test_03:{
                required:true
            },
            test_04:{
                required:true
            },
            test_05:{
                required:true
            }
        },

- messages      rules中name规则的提示语

        messages:{
            test_01:{
                required:"请输入test01",
                min:"最小值不低于10",
                max:"最大值不高于100"
            },
            test_02:{
                required:"请输入test02"
            },
            test_03:{
                required:"请输入test03"
            },
            test_04:{
                required:"请输入test04"
            },
            test_05:{
                required:"请输入test05"
            }
        },

- submitHandler     提交处理（通过后，可以在此处写要做哪些事情）

        submitHandler:function (form) {
            //form:当前验证的form
            var $fm=$(form);
            console.log("这里通过验证后的回调函数",form,$fm);
        }

- invalidHandler    无效处理（用户没有通过验证时的处理）

        invalidHandler:function (event, validator) {
            //event: 事件
            //validator：验证器的实例
            var errors = validator.numberOfInvalids();
            if (errors) {
                var message = errors == 1
                    ? '有1项需要输入的数据没有验证通过'
                    : '您有 ' + errors + ' 项需要输入的数据没有验证通过';
                $(".j-msg-error").show().find("span").html(message);
            } else {
                $(".j-msg-error").hide();
            }
            console.log("用户填写的数据无法通过验证",event, validator);
        },

- ignore        验证时忽略所有包含"ignore"这个类名的元素

        ignore:".ignore",

    这个除非特殊情况下，否则不要修改；插件默认配置的是

        ignore: ":hidden",

    不校验隐藏的数据；

    这个插件的ignore的核心代码是

    ```
    if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
        settings[ eventType ].call( validator, this, event );
    }
    ```

除非您要验证隐藏的input，否则强烈不建议直接修改ignore，推荐下面这种写法

    ignore:".ignore,:hidden",

如果您仅仅只是增加要验证隐藏区域的数据，您完全没有必要修改ignore的配置

推荐在submitHandler里面另作验证；

原理是通过验证所有显示input的rulu后，走进submitHandler这个函数内，在这个函数内再做一次验证；如果验证通过，再做下一步处理；　

- groups    把2个或以上rules内的验证，用空格隔开放在一起进行验证；如下

```
    groups:{
        nameGroup:"first_name last_name"
    },
    rules:{
        first_name:{
            required:true
        },
        last_name:{
            required:true
        }
    },
    messages:{
        first_name:{
            required:"请输入贵姓"
        },
        last_name:{
            required:"请输入您的名字"
        }
    },
```

像上面这种的验证，如果没有groups的包含，会逐条输出错误信息；但是在groups内配置后，

如果 first_name 和 last_name 都验证失败了,但是错误信息只输出其中一条；因为输入区域是在多个地方，一般会在errorPlacement内重新配置错误消息都输入区域

- onsubmit      设置提交时是否验证，默认是true;提交时验证。设置为 false 就用其他方法去验证。

        onsubmit: false,    //如果设置为false，提交都时候并不验证；

下面的onfocusout／onkeyup／onclick 同理

- onfocusout    失去焦点时验证（不包括复选框/单选按钮）。

验证元素失去焦点的时候（排除复选框，单选框，按钮），如果没有输入任何内容，则跳过所有规则；

- onkeyup   在 keyup 时验证。
- onclick   在点击复选框和单选按钮时验证。
- focusInvalid  提交表单后，未通过验证的表单（第一个或提交之前获得焦点的未通过验证的表单）会获得焦点。
- focusClearup

    如果是 true 那么当未通过验证的元素获得焦点时，移除错误提示。避免和 focusInvalid 一起用。

    默认是false

- errorClass        默认是error，可以配置为自定义

插件内的配置是：

		errorClass: "error",

- validClass        默认valid

		validClass: "valid",

和error都是插件内用于控制样式的；

- errorElement    错误消息的标签，默认是label

		errorElement: "label",

- wrapper   默认没有包裹的标签，当使用有序或者无序元素的时候，可以配置这里；
- errorLabelContainer       把错误信息统一放在一个容器里面。
- errorContainer

显示或者隐藏验证信息，可以自动实现有错误信息出现时把容器属性变为显示，无错误时隐藏，用处不大。

一般这三个属性同时使用，实现在一个容器内显示所有错误提示的功能，并且没有信息时自动隐藏。

```
errorContainer: "div.error",
errorLabelContainer: $("#signupForm div.error"),
wrapper: "li"
```

- showErrors
- errorMap
- errorList
- errorPlacement

                errorPlacement: function (error, el) { //错误处理
                    var msg = error.html(),
                        $p = el.closest('div.wui-form-item');
                    if ($p.length == 0) {
                        $p = el.closest('div.wui-form-itemother')
                    }

                    var $explain = $p.children('.wui-form-explain');

                    if (msg !== '') {
                        if ($explain.length == 0) {
                            $explain = $('<p class="wui-form-explain wui-tiptext"></p>');
                            $explain.appendTo($p);
                        }
                        $explain.html('<i class="iconfont">&#xe611;</i>' + msg);
                        $p.addClass('wui-form-item-error');
                    } else {
                        $explain.remove();
                        //$explain.html('');
                        $p.removeClass('wui-form-item-error');
                    }

                },
- error
- success
- highlight
- unhighlight
- ignoreTitle

### valid()

验证方法是否有效，该方法不接受任何参数

### rules

- rules("add",{required: true})
- rules("remove",{required: true})

# 添加自定义的验证规则

```
// 邮政编码验证
jQuery.validator.addMethod("isZipCode", function(value, element) {
    var tel = /^[0-9]{6}$/;
    return this.optional(element) || (tel.test(value));
}, "请正确填写您的邮政编码");
```