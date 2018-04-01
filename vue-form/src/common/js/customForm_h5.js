function drag(o) {
  //默认参数，传入的参数o之后会与之合并
  var options =
    {
      dragArea: "dragArea",
      dropArea: "dropArea",
    }
  //document.getElementById捕捉到的节点
  var target =
    {
      dragArea: null,
      dropArea: null,
    }
  //后面用于判断鼠标移动的时候是把元素底部的边变蓝还是上部的边变蓝
  var deraction =
    {
      index: -1,
      deraction: 0,
      flag: -1,
    }

  //正在拖拽的元素
  var dragTarget;
  var empty = function (obj) {
    if (obj == undefined || obj == null || obj == "")
      return true;

    return false;
  }
  var exception = function (tip) {
    console.log("dragErr:" + tip);
    throw new Error(tip);
  }
  var getTarget = function (id) {
    var target = document.getElementById(id);
    if (empty(target))
      throw new Error("无法找到这个id")
    return target;
  }
  //  ========== 
  //  = 获取鼠标所在的坐标位置 = 
  //  ========== 
  var getPageLocation = function (event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    return { 'x': x, 'y': y };
  }
  var insertAfter = function (newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
      // 如果最后的节点是目标元素，则直接添加。因为默认是最后
      parent.appendChild(newElement);
    }
    else {
      //如果不是，则插入在目标元素的下一个兄弟节点的前面。也就是目标元素的后面
      parent.insertBefore(newElement, targetElement.nextSibling);
    }
  }
  var insertBefore = function (newElement, targetElement) {
    targetElement.parentNode.insertBefore(newElement, targetElement)
  }
  //  ========== 
  //  = 将每个表单区的上下边界恢复成原样 = 
  //  ========== 
  var setBorderDefault = function () {
    if (target.dropArea.children.length > 0)
      for (var i = 0; i < target.dropArea.children.length; i++) {
        target.dropArea.children[i].style.borderBottom = "";
        target.dropArea.children[i].style.borderTop = "";
      }
  }
  //  ========== 
  //  = 获取CSS = 
  //  ========== 
  var getCss = function (o, key) {
    return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
  }
  var preventDefault = function (e) {
    e.preventDefault();
  }

  ///  ========== 
  //  = 将表单元素拖拽到右边删掉 = 
  //  ========== 
  var dragOut = function (e) {
    e.preventDefault();
    if (deraction.flag == 2) {
      dragTarget.parentNode.removeChild(dragTarget);
      setBorderDefault();
    }

  }
  //  ========== 
  //  = 开始拖动 = 
  //  ========== 
  var dragStart = function (e) {
    dragTarget = e.target;
    //区分拖拽的元素是要新增呢还是要交换位置，记录到flag上，1表示要新增，2表示交换位置
    if (dragTarget.parentNode.id == options.dragArea) {
      deraction.flag = 1;
    }
    else {
      deraction.flag = 2;
      target.dragArea.addEventListener("dragover", preventDefault);
    }
  }
  //  ========== 
  //  = 拖动经过 = 
  //  ========== 
  var dragOver = function (e) {
    e.preventDefault();
    var pageLocation = getPageLocation();
    var index = -1;
    //检测目前鼠标正落在哪个表单元素上面
    if (target.dropArea.children.length > 0) {
      for (var i = 0; i < target.dropArea.children.length; i++) {
        var pos = target.dropArea.children[i].getBoundingClientRect();
        if (pageLocation.y >= pos.bottom)
          continue;
        index = i;
        break;
      }
    }
    else {
      index = 0;
      deraction["deraction"] = 0;
      deraction["index"] = -1;
      deraction["flag"] = 1;
      return;
    }
    if (index != -1) {
      var pos = target.dropArea.children[index].getBoundingClientRect();
      setBorderDefault();
      //鼠标落在表单元素宽度中间以上的部分，则上边变蓝
      if ((pos.bottom + pos.top) / 2 > pageLocation.y)//元素的上边变蓝
      {
        deraction["deraction"] = -1;
        deraction["index"] = index;
        target.dropArea.children[index].style.borderTop = "1px solid blue";
      }
      else//元素的下边变蓝
      {
        deraction["deraction"] = 1;
        deraction["index"] = index;
        target.dropArea.children[index].style.borderBottom = "1px solid blue";
      }

    }
    else//当前拖拽的是第一个表单元素
    {
      deraction["deraction"] = 0;
      deraction["index"] = -1;
    }
  }
  //  ========== 
  //  = 拖动结束 = 
  //  ========== 
  var dragEnd = function (e) {
    setBorderDefault();
    target.dragArea.removeEventListener("dragover", preventDefault);
  }
  //  ========== 
  //  = 放置 = 
  //  ========== 
  var drop = function (e) {
    e.preventDefault();
    if (deraction.index != -1) {
      var index = deraction.index;
      if (deraction.deraction > 0) {
        var node;
        //flag为1，插入表单元素，否则就是换位置
        if (deraction.flag == 1) {
          node = dragTarget.cloneNode(true);
          node.addEventListener("dragstart", dragStart);
          node.addEventListener("dragend", dragEnd);
        }
        else {
          node = dragTarget
        }
        insertAfter(node, target.dropArea.children[index]);
      }
      else if (deraction.deraction < 0) {
        var node;
        if (deraction.flag == 1) {
          node = dragTarget.cloneNode(true);
          node.addEventListener("dragstart", dragStart);
          node.addEventListener("dragend", dragEnd);
        }
        else {
          node = dragTarget
        }
        insertBefore(node, target.dropArea.children[index]);
      }
      //target.dropArea=document.getElementById("dropArea");
    }
    else if (deraction.flag == 1)//第一个插入的表单元素
    {
      var node = dragTarget.cloneNode(true);
      node.addEventListener("dragstart", dragStart);
      node.addEventListener("dragend", dragEnd);
      target.dropArea.appendChild(node)
    }
    deraction.index = -1;
    //  setBorderDefault();
  }
  //  ========== 
  //  = 初始化 = 
  //  ========== 
  var init = function () {
    extend(arguments)
    if (!empty(options.dragArea)) {
      target.dragArea = getTarget(options.dragArea);
      target.dragArea.addEventListener("drop", dragOut);
      if (target.dragArea.children.length > 0)
        for (var i = 0; i < target.dragArea.children.length; i++) {
          target.dragArea.children[i].setAttribute("draggable", "true");
          target.dragArea.children[i].addEventListener("dragstart", dragStart);
          target.dragArea.children[i].addEventListener("dragend", dragEnd);
        }
    }
    else {
      exception("请设置拖拽区域");
    }
    if (!empty(options.dropArea)) {
      target.dropArea = getTarget(options.dropArea);
      target.dropArea.addEventListener("drop", drop);
      target.dropArea.addEventListener("dragover", dragOver);
    }
    else {
      exception("请设置存取地址");
    }
  }
  //  ========== 
  //  = 合并参数 = 
  //  ========== 
  var extend = function (n) {
    for (var p in n) if (!options.hasOwnProperty(p) || (options.hasOwnProperty(p) && options[p] != n[p]))
      options[p] = n[p];
  }
  //执行
  if (arguments.length > 1)
    var args = arguments[0];
  init.apply(this, args);
}
export default drag;

