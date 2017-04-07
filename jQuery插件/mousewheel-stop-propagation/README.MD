# 鼠标滚轮的阻止事件

该插件只封了一个方法，但是已经够用了，用法如下

		$('#div-stop').mousewheelStopPropagation();

阻止事件传播；

该方法接受2个参数

    // defaults
    wheelstop: null, // Function
    emulateNaturalScrolling: true // Boolean