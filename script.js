window.alert("hello")
console.log("loaded")
setInterval(function(){
    //1. div要素をクラス名で取得
    var elems = document.getElementsByClassName("ytd-comment-replies-renderer");
    
    //2. 要素を一つづつ取り出す
    for (var i in elems) {
      
      //3. 先頭の要素を取得
      var e = elems[0];

      //4. 取得した要素を削除
      e.parentNode.removeChild(e);
    }
},1000);