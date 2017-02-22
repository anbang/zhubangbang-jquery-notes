var $page=$("body"),
    $adBig=$page.find("#adBig"),
    $adSmall=$page.find("#adSmall"),
    $btnGroup=$page.find(".j-btn-group");
var changetime = 1000;
var staytime = 3000;
var pageUtility={
    init:function () {
        this.bind();
        this.initAnimate();
    },
    bind:function () {
        var self=this;
        setTimeout(self.displayad, staytime);
        //点击展开
        $page.on("click",".j-unfolded-btn",function (e) {
            e.preventDefault();
            $adBig.slideDown("slow");
            $adSmall.slideUp(changetime);
            $page.find(".j-closure-btn").show();
            $(this).hide();
        });
        //点击收起
        $page.on("click",".j-closure-btn",function (e) {
            e.preventDefault();
            $adBig.slideUp(changetime);
            $adSmall.slideDown("slow");
            $page.find(".j-unfolded-btn").show();
            $(this).hide()
        });
        //点击关闭
        $page.on("click",".j-colse",function (e) {
            e.preventDefault();
            $btnGroup.hide()
        });
    },
    initAnimate:function () {
        $adBig.slideDown("slow");
        $btnGroup.hide();
    },
    displayad:function () {
        $adBig.slideUp(changetime, function() {
            $adSmall.slideDown(changetime);
            $btnGroup.animate({
                top: "2px",
                toggle: "show"
            }, changetime)
        })
    }
};
pageUtility.init();