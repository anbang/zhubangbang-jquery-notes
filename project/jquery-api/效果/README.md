#

# 基本
show([s,[e],[fn]])
hide([s,[e],[fn]])
toggle([s],[e],[fn])

# 滑动
slideDown([s],[e],[fn])
slideUp([s,[e],[fn]])
slideToggle([s],[e],[fn])

# 淡入淡出
fadeIn([s],[e],[fn])
fadeOut([s],[e],[fn])
fadeTo([[s],o,[e],[fn]])
fadeToggle([s,[e],[fn]])

# 自定义
animate(p,[s],[e],[fn])1.8*
stop([c],[j])1.7*
delay(d,[q])
finish([queue])1.9+

# 设置
jQuery.fx.off
jQuery.fx.interval

参数详解：

- s 是指speed；三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)
- e 是指easing;用来指定切换效果，默认是"swing"，可用参数"linear"
- fn:在动画完成时执行的函数，每个元素执行一次。