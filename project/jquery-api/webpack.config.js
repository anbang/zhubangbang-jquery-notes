var webpack=require("webpack");
//var commonsPlugin=new webpack.optimize.CommonsChunkPlugin("common.js");
/*使用了一个 CommonsChunkPlugin 的插件，它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用 */

module.exports={
    //插件项
    //plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        page1: "./page1",
        //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
        page2: ["./entry1", "./entry2"]
        //该段代码最终会生成一个 page1.js 和 page2.js，并存放到 ./project-dist 文件夹下。
    },
    //入口文件输出配置
    output: {
        path: './project-dist',//保存到的路径；
        //filename: "[name].bundle.js",
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}//npm install url-loader --save-dev
        ]
    },
    //其它解决方案配置
    resolve: {
        root: 'http://a.taobao.fm/', //绝对路径;查找module的话从这里开始查找
        extensions: ['', '.js', '.json', '.scss'],//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        alias: {//模块别名定义，方便后续直接引用别名，无须多写长长的地址
            "validate": "plugin/jquery-validation/dist/jquery.validate.min.js",//后续直接 require('validate') 即可
            "page": "module/paging/dist/page.js",
            "dialog": "module/dialog/dist/dialog.js",
            "popbox": "module/popbox/dist/popbox.js",
            "autopopbox": "module/popbox/dist/autopopbox.js",
            "kit": "module/utility/dist/kit.js",
            "utility": "module/utility/dist/utility.js",
            "fixbox": "module/fixbox/dist/fixbox.js",
            "store": "module/store/dist/store.js",
            "mousewheel": "plugin/jquery-mousewheel/jquery.mousewheel.min.js",
            "mousewheelStopPropagation": "plugin/jquery-mousewheel-stop-propagation/mousewheelStopPropagation.min.js",
            "loading": "module/loading/dist/loading",
            "juicer": "module/juicer/dist/juicer",
            "select": "module/select/dist/select",
            "formautofill": "plugin/jquery-formautofill/jquery.formautofill.min.js",
            "uploadForm": "plugin/jquery.form/jquery.form.js",
            "underscore": "module/underscore/dist/underscore",
            "scrollLoad": "module/scroll-load/dist/scroll-load",
            "croppic": "module/croppic/dist/croppic",
            "dropdown": "module/dropdown/dist/dropdown",
            "dropdownsearch": "module/dropdown/dist/dropdown-search",
            "placeholder": "module/placeholder/dist/placeholder",
            'switchable': 'plugin/jquery.switchable/src/switchable.js',
            'carousel': 'plugin/jquery.switchable/src/carousel.js',
            "inputcomplete": "module/inputcomplete/dist/inputcomplete",
            "input-maxlength": "module/input-maxlength/dist/input-maxlength.js",
            "moment": "module/momentjs/dist/moment.js",
            "daterangepicker": "module/daterangepicker/dist/daterangepicker.js",
            "solartolunar": "module/solartolunar/dist/solartolunar.js",
            "festival": "module/solartolunar/dist/festival.js",
            "month-picker": "module/month-picker/dist/month-picker.js",
            "clipboard": "module/clipboard/dist/clipboard.min.js"
        }
    }
};


(function () {
    //<script src="http://a.taobao.fm/project/ibeacon-agent/config.js?t=636126539464309860" data-init="staff-list"></script>
    var dev = true, //上线时,修改为 false  dev === true
        scripts = document.scripts,
        script = scripts[scripts.length - 1],
        boot = script.getAttribute('data-init'),//staff-list
        dir = script.getAttribute('src');//http://a.taobao.fm/project/ibeacon-agent/config.js?t=636126539464309860

    dir = dir.slice(0, dir.lastIndexOf('/') + 1);//http://a.taobao.fm/project/ibeacon-agent/
    //dev
    if (dev) {
        if (location.href.indexOf('debug') === -1) {}
        dir = dir + 'src/';
    } else {
        dir = dir + 'dist/';
    }

    /*
     * 上面获取路径脚本需要立刻执行
     * 将加载脚本放到domReady后执行,避免ie浏览器终止操作错误
     */
    $(function () {
        if (boot) {
            //seajs.use(dir + boot);
            module.exports.entry=dir + boot;
        }
    });
})();