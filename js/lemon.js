
function highlightCode() {
    hljs.initHighlightingOnLoad();
    var pres = document.querySelectorAll("figure");
    hljs.configure({
        languages: ["java", "javascript"]
    });
    for (var i = 0; i < pres.length; i++) {
        hljs.highlightBlock(pres[i]);
    }
}
highlightCode();


function getByClass(parent, cls){
    if(parent.getElementsByClassName){
      return parent.getElementsByClassName(cls);
    }else{
      var res = [];
      var reg = new RegExp(' ' + cls + ' ', 'i')
      var ele = parent.getElementsByTagName('*');
      for(var i = 0; i < ele.length; i++){
        if(reg.test(' ' + ele[i].className + ' ')){
          res.push(ele[i]);
        }
      }
      return res;
    }
  }