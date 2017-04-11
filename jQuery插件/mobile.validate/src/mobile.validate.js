/**
 * Created by broszhu on 2017/4/11.
 */

var mainFun=function ($) {

    //主要使用方法，可挂载在$form上
    $.extend($.fn,{
        validate:function (options) {

        }
    });

    //自定义伪类选择器，方便改变视图层
    $.extend($.expr[":"],{
        noValue:function (arg) {
            return !$.trim(""+$(arg).val());
        },
        hasValue:function (arg) {
            return Boolean($.trim(""+$(arg).val()));
        },
        unchecked:function (arg) {
            return !$(arg).prop("checked");
        }
    });

    //验证器的构造函数
    $.validate=function (options,form) {
        this.settings=$.extend(true,{},$.validator.defaults,options);
        this.currentForm=form;
        this.init();
    };

    //格式化提示语
    /*
    * 例子：请填写{0}
    * var template = jQuery.validator.format("请填写{0}");
    * alert("店铺名称");//请填写店铺名称
    * */
    $.validate.format=function (source) {
        return function () {
            var args=$.makeArray(source);//转为数组
            args.unshift(source);
            return $.validate.format.apply(this,args);
        }
    };

    $.extend($.validate,{
        defaults:{},
        setDefaults:function (settings) {
            $.extend($,validator.defaults,settings);
        },

        //methods
        methods:{
            required:function (val, ele, param) {

            },
            email:function (val, ele) {

            },
            url:function (val, ele) {

            },
            date:function (val, ele) {

            },
            dateISO:function (val, ele) {

            },
            number:function (val, ele) {

            },
            digits:function (val, ele) {

            },
            bankcard:function (val, ele) {

            },
            minlength:function (val, ele) {

            },
            maxlength:function (val, ele) {

            },
            min:function (val, ele) {

            },
            max:function (val, ele) {

            },
            range:function (val, ele) {

            },
            equalTo:function (val, ele) {

            },
            remote:function (val, ele) {

            },
            idcard:function (val, ele) {

            },
            chinalengh:function (val, ele) {

            },
            tel:function (val, ele) {

            },
            phone:function (val, ele) {

            }
        },

        //message 根据项目中的用法，默认的message其实并不用，都是自己写提示的,后期考虑删除掉
        message:{
            required: "必填项",
            remote: "不是合法值",
            email: "必须输入正确格式的电子邮件",
            url: "必须输入正确格式的网址",
            date: "必须输入正确格式的日期",
            dateISO: "必须输入正确格式的日期(ISO)，例如：2009-06-23，1998/01/22 只验证格式",
            number: "必须输入合法的数字",
            digits: "必须输入整数",
            creditcard: "必须输入合法的信用卡号",
            equalTo: "输入值不想等",
            maxlength: $.validator.format( "长度最多不超过 {0} 个." ),
            minlength: $.validator.format( "长度最少不低于 {0} 字." ),
            rangelength: $.validator.format( "输入长度必须介于 {0} 和 {1} 个之间." ),
            range: $.validator.format( "请输入 {0} 到 {1} 之间到数字." ),
            max: $.validator.format( "输入的值不能大于 {0}." ),
            min: $.validator.format( "输入的值不能小于 {0}." )
        },
        prototype:{

        },
        addMethod:function (name,method,message) {

        }
    });
};
//注入jquery
(function (factory) {
    if(typeof define === 'function'&&define.amd){
        define(["jquery"],function (jquery) {
            factory(jquery);//注入jquery
        });
    }else if(typeof define === 'function'&&define.cmd){
        define('jquery',function (require,exports,moudles) {
            factory(require('jquery'));//注入jquery
        });
    }else{
        factory(jQuery);
    }
})(mainFun);