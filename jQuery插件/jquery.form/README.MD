jquery.form 无刷新上传文件，主要

官方的地址：https://github.com/jquery-form/form

该插件封装了2个主要的方法；

- ajaxForm
- ajaxSubmit

 它们集合了从控制表单元素到决定如何管理提交进程的功能;除此之外，此插件还包括这些方法

- formToArray
- formSerialize

是将一个form中所有的表单元素以name作为key，value作为值进行序列化操作，
这就需要你必须为每一个表单元素设置表单元素name属性及填充表单元素value的值，
最好也设置id方便jquery定位表单元素。若要使用此方法你必须设置表单元素name属性及填充表单元素value的值，

- fieldSerialize

是将form中表单元素进行序列化以name作为key，value作为值进行序列化操作，
这就需要你必须为每一个表单元素设置表单元素name属性及填充表单元素value的值。

- fieldValue
- clearForm

清除表单元素。该方法将所有的文本（text）输入字段、密码（password）输入字段和文本区域（textarea）字段置空，
清除任何select元素中的选定，以及将所有的单选（radio）按钮和多选（checkbox）按钮重置为非选定状态。

- clearFields   清除字段元素。只有部分表单元素需要清除时才方便使用。
- resetForm         通过调用表单元素原有的DOM方法，将表单恢复到初始状态。

        $('#myFormId').resetForm();

- enable
- selected
- ajaxSubmit.debug

# options 对象的参数
ajaxForm和ajaxSubmit都支持众多的选项参数，这些选项参数可以使用一个Options对象来提供。Options只是一个JavaScript对象，它包含了如下一些属性与值的集合：

- target
- url
- type
- beforeSubmit

表单提交前被调用的回调函数。“beforeSubmit”回调函数作为一个钩子（hook），
被提供来运行预提交逻辑或者校验表单数据。如果“beforeSubmit”回调函数返回false，那么表单将不被提交。
“beforeSubmit”回调函数带三个调用参数：数组形式的表单数据，jQuery表单对象，
以及传入ajaxForm/ajaxSubmit中的Options对象。

- success

表单成功提交后调用的回调函数。如果提供“success”回调函数，当从服务器返回响应后它被调用。
然后由dataType选项值决定传回responseText还是responseXML的值。

- dataType

期望返回的数据类型。null、“xml”、“script”或者“json”其中之一。
dataType提供一种方法，它规定了怎样处理服务器的响应。这个被直接地反映到jQuery.httpData方法中去。

- semantic
- resetForm     布尔标志，表示如果表单提交成功是否进行重置。
- clearForm     布尔标志，表示如果表单提交成功是否清除表单数据


DEMO：

        //创建上传文件的临时表单
        function createForm(url) {
            var temporary=document.createElement("form");
            temporary.action=url+"?r="+Math.random();
            temporary.method="post";
            temporary.enctype="multipart/form-data";
            temporary.style.display="none";
            document.body.appendChild(temporary);//创建表单后一定要加上这句否则得到的form不能上传。document后要加上body,否则火狐下不行。
            return $(temporary)
        }

        upRarFile:function($this){
            var _this=this;
            var $fileInputWrap = $this.closest(".upload-file-box");
            var $fileInputLabel = $fileInputWrap.find(".j-add-file");//上传的显示按钮;
            var $uploadFileFormItem = $this.closest(".upload-file-form");
            var $uploadPicFormItemClone = $uploadFileFormItem.clone();

            //格式过滤
            var fileLocPath = $this.val(),
                fileExt = fileLocPath.substring(fileLocPath.lastIndexOf('.'));
            if(!fileLocPath){
                return;
            }
            if (!(fileExt.toLowerCase() === ".zip" )) {
                kit.showMsg({
                    cls: 'error',
                    second: 2,
                    subTitle: '压缩包格式必须为：zip 格式，请重新上传',
                    afterHide:function(){
                        $clickContact.trigger("click");
                    }
                });
                return;
            }

            uploadFileName=fileLocPath.slice(12);//去除路径中的 C:\fakepath\
            //创建临时form上传文件
            var $pruductFormUploader = createForm("/container/upload_file");
            $uploadFileFormItem.appendTo($pruductFormUploader);
            var options = {
                type: 'post',
                dataType: 'html',
                //timeout: 15000,
                beforeSubmit: function () {
                    //loading。。。
                    $fileInputLabel.html('<i class="iconfont wui-txt-sm">&#xe65c;</i> 上传中...');
                    //还原 input type="file" 位置
                    $fileInputWrap.prepend($uploadPicFormItemClone);
                    $uploadPicFormItemClone.find(".j-upload-file").val("");
                },
                success: function (data) {
                    //格式为json
                    if (Object.prototype.toString.call(data) != '[object Object]') {
                        data = $.parseJSON(data);
                    }
                    if (data.success) {
                        //成功后
                        _this.filePreview(data.data);
                    }  else {
                        kit.showMsg({
                            cls: 'error',
                            second: 3,
                            subTitle: data.msg + ",请重新上传"
                        });
                    }
                    //删除临时form
                    resetUploader()
                },
                error: function () {
                    kit.showMsg({
                        cls: 'error',
                        second: 3,
                        subTitle: "上传文件的接口调用失败，请重新上传"
                    });
                    resetUploader()
                }
            };
            $pruductFormUploader.ajaxSubmit(options);
            //图片上传后重置表单
            function resetUploader() {
                $fileInputLabel.html('<i class="iconfont wui-txt-sm">&#xe6c2;</i> 添加</label>');
                $pruductFormUploader.remove();
            }
        },