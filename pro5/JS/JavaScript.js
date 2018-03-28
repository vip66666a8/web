// JavaScript Document
window.onload=function(){
	var obtn = document.getElementById('btn')
	//获取页面可视区域高度
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	//添加开关，滚动条滚动时定时器不执行
	var isTop = true;
	
	//3.滚动条滚动时触发
	window.onscroll=function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		//当滚动条高度大于等于可视区域高度时，显示按钮
		if(osTop >= clientHeight){
			obtn.style.display = 'block';
		}else{
			obtn.style.display = 'none';	
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}
	obtn.onclick = function(){
		//2.设置定时器
		timer = setInterval(function(){
			//1.获取滚动条距离顶部的高度
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop/5);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed; //把200赋值给支持的浏览器
			
			isTop = true;
			if(osTop == 0){
				clearInterval(timer);
				}
		},50)

	}

}


$(function(){
	
	var oUl = $("#list");
	oUl.find('.ospan').click(function(){
		$(this).next().show();
		$(this).hide();	
	
	});
	oUl.find('.aspan').click(function(){
		$(this).parent().hide();
		$(this).parent().prev().show();	
	});
	
})




















function showSubmenu(li){
		
		var submenu = li.getElementsByTagName("ul")[0];
		submenu.style.display="block";	
		
	}
function hideSubmenu(li){
			var submenu = li.getElementsByTagName("ul")[0];
			submenu.style.display="none";
	}