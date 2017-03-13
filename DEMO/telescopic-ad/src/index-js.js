var oPage=document.getElementById("page-demo"),
    oTopAdWrap=document.getElementById("top-img-area"),
    oBigAdImg=document.getElementById("adBig"),
    oSmallAdImg=document.getElementById("adSmall"),
    oBtnwWrap=oTopAdWrap.getElementsByClassName("j-btn-group")[0],
    btnShowBig=oTopAdWrap.getElementsByClassName("j-show-big")[0],
    btnShowSmall=oTopAdWrap.getElementsByClassName("j-show-small")[0],
    btnClose=oTopAdWrap.getElementsByClassName("j-colse")[0];
var staytime = 3000;//停留时间

var pageUtility={
    init:function () {
        this.bind();
        this.initStyle();
    },
    initStyle:function () {
        var self=this;
        oBtnwWrap.style.display="none";
        setTimeout(self.displayad, staytime);
    },
    bind:function () {
        var self=this;
        //点击展开
        btnShowBig.onclick=function (e) {
            e.preventDefault();
            self.displayShot(oBigAdImg,"block");
            self.displayShot(oSmallAdImg,"none");
            self.displayShot(btnShowSmall,"block");
            self.displayShot(btnShowBig,"none");
        };

        //点击收起
        btnShowSmall.onclick=function (e) {
            e.preventDefault();
            self.displayShot(oBigAdImg,"none");
            self.displayShot(oSmallAdImg,"block");
            self.displayShot(btnShowSmall,"none");
            self.displayShot(btnShowBig,"block");
        };

        //点击关闭
        btnClose.onclick=function (e) {
            e.preventDefault();
            self.displayShot(oTopAdWrap,"none");
        };
    },
    displayad:function () {
        pageUtility.displayShot(oSmallAdImg,"block");
        pageUtility.displayShot(oBigAdImg,"none");
        pageUtility.displayShot(oBtnwWrap,"block");
    },
    displayShot:function (ele,des) {
        ele.style.display=des;
    }
};
pageUtility.init();
