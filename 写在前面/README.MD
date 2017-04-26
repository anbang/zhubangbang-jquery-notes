- 因为jQuery选择器返回的是一个对象，所以不能根据这个对象来作为判断（对象总是真的）
```
    //error
    if($("#div1")){
        //do something
    }
    //right
    if($("#div1").length>0){
        //do something
    }

    if($("#div1").length){
        //do something
    }

    //right
    if($("#div1")[0]){
        //do something
    }
```
的