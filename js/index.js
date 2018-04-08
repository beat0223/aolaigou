/*轮播图*/
var i=1;
var timer=setInterval(function(){
	if(i==3){
		i=1;
	}
	//console.log($(".banner1>a>img"));//jQuery.fn.init(2) [img.img1, img.img2, prevObject: jQuery.fn.init(1), context: document, selector: ".banner1>a>img"]
	//console.log($(".banner1>img"));//jQuery.fn.init [prevObject: jQuery.fn.init(1), context: document, selector: ".banner1>img"]
	$(".banner1>a>img").css("display","none");
	//console.log($(".banner1>a>.img"+i));//jQuery.fn.init [img.img1, prevObject: jQuery.fn.init(1), context: document, selector: ".banner1>a>.img1"]
	//console.log($(".banner1>a>img"+i));//jQuery.fn.init [prevObject: jQuery.fn.init(1), context: document, selector: ".banner1>a>img1"]
	$(".banner1>a>.img"+i).css("display","block");
	i++;
},3000)

/*$(".banner").mouseenter(function(){
	clearInterval(timer);
}).mouseleave(function(){
	timer=setInterval(function(){
		if(i==3){
			i=1;
		}
	
		$(".banner1>a>img").css("display","none");
	
		$(".banner1>a>.img"+i).css("display","block");
		i++;
	},1000)
});*/

$("li").mouseenter(function(){
	clearInterval(timer);
}).mouseleave(function(){
	timer=setInterval(function(){
		if(i==3){
			i=1;
		}
	
		$(".banner1>a>img").css("display","none");
	
		$(".banner1>a>.img"+i).css("display","block");
		i++;
	},3000)
});

$("ul").click(function(e){
	var e=e || event;
	var trg=e.target || e.srcElement;
	//console.log(e.target);//<li class="li1">1</li>
	//console.log($("e.target"));//jQuery.fn.init [prevObject: jQuery.fn.init(1), context: document, selector: "e.target"]
	//console.log($(e.target));//jQuery.fn.init [li.li1, context: li.li1]
	//console.log($(e.target).index())//0或1
	$(".banner1>a>img").css("display","none");
	$(".banner1>a>.img"+($(e.target).index()+1)).css("display","block")
})

$(".pre_img").mouseenter(function(){
	clearInterval(timer);
}).mouseleave(function(){
	timer=setInterval(function(){
		if(i==3){
			i=1;
		}
	
		$(".banner1>a>img").css("display","none");
	
		$(".banner1>a>.img"+i).css("display","block");
		i++;
	},3000)
})
$(".pre_img").click(function(){
	//console.log($(".pre_img"));//jQuery.fn.init [a.pre_img, prevObject: jQuery.fn.init(1), context: document, selector: ".pre_img"]
	//console.log($(".pre_img").index());//2(html里的第三个a标签)
	$(".banner1>a>img").css("display","none");
	$(".banner1>a>.img"+($(".pre_img").index()-1)).css("display","block");
	return false;
})

$(".next_img").mouseenter(function(){
	clearInterval(timer);
}).mouseleave(function(){
	timer=setInterval(function(){
		if(i==3){
			i=1;
		}
	
		$(".banner1>a>img").css("display","none");
	
		$(".banner1>a>.img"+i).css("display","block");
		i++;
	},3000)
})
$(".next_img").click(function(){
	//console.log($(".next_img"));//jQuery.fn.init [a.next_img, prevObject: jQuery.fn.init(1), context: document, selector: ".next_img"]
	//console.log($(".next_img").index());//3(html里的第四个a标签)
	$(".banner1>a>img").css("display","none");
	$(".banner1>a>.img"+($(".next_img").index()-1)).css("display","block");
	return false;
})

/*广告*/
$.getJSON("js/index.json",function(response){
	//console.log(response);
	var str="";
	response.forEach(function(ele,index){
		//console.log(response[index])
		str+=`<li class="box"><img src='${response[index].big_url}'></li>`;
	})
	$(".img_list").html(str);
})


/*//找到所有的楼层 和 所有的 楼层号
	var boxs = document.getElementsByClassName("box");//楼层
	var list = document.getElementsByClassName("floorli");//楼层号
	var floor=document.getElementsByClassName("floor")[0];
	//触发滚动条  控制对应的楼层号显示
	window.onscroll = function(){
		//当滚动条滚动到某个距离时  显示楼层号
		var sTop = document.body.scrollTop || document.documentElement.scrollTop;
		if( sTop >150 ){
			floor.style.display = "block";
		}else{
			floor.style.display = "none";
		}
		//每次触发滚动条时，遍历每一个楼层， 楼层中满足  ：  
		//  Math.abs(楼层的offsetTop - 页面滚走的距离) < 某个楼层高度的一半  说明当前楼层在视口中面积最大
		//     当前的楼层号应该是高亮的
		//遍历每一个楼层  找到符合条件的那个楼层
		for(var i = 0 ; i < boxs.length ; i ++){
			//console.log(i);//0 1 2 3 4 5
			if( Math.abs(boxs[i].offsetTop-sTop)  < boxs[i].offsetHeight/2){
				//满足条件说明i对应的楼层号是高亮的
				list[i].style.backgroundColor = "orange";
			}else{
				list[i].style.backgroundColor = "#ccc";
			}
		}
	}
	//回到顶部
	bcTop.onclick = function(){
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
	//点击左侧楼层号   对应的楼层显示
	for( var i = 0 ; i < list.length ; i++ ){
		//console.log(i);//0 1 2 3 4 5
		list[i].index = i;
		//console.log(list[i]);//<li class="floorli">1</li>
							//<li class="floorli">2</li>
							//<li class="floorli">3</li>
							//<li class="floorli">4</li>
							//<li class="floorli">5</li>
							//<li class="floorli">6</li>
		//console.log(list[i].index);//0 1 2 3 4 5
		//console.log(i);//0 1 2 3 4 5
		list[i].onclick = function(){
			for( var j = 0 ; j < list.length ; j++ ){
				//console.log(j);
				list[j].style.backgroundColor = "#ccc";
			}
			this.style.backgroundColor = "orange";
			document.body.scrollTop = document.documentElement.scrollTop=boxs[this.index].offsetTop;
		}
	}*/













/*top-main中的分类*/
//top-main中的分类,鼠标划过分类，出现fenlei_box这个div
//console.log($(".nav>.classification"));//jQuery.fn.init [a.classification, prevObject: jQuery.fn.init(1), context: document, selector: ".nav>.classification"]
$(".nav>.classification").mouseenter(function(){
	$(".fenlei_box").css("display","block");
}).mouseleave(function(){
	$(".fenlei_box").css("display","none");
});
$(".fenlei_box").mouseenter(function(){
	$(".fenlei_box").css("display","block");
}).mouseleave(function(){
	$(".fenlei_box").css("display","none");
});

//console.log($(".fenlei_box_top ul li"));
//console.log($(".fenlei_box_middle ol li"));
var $uli=$(".fenlei_box_top ul li");
var $oli=$(".fenlei_box_middle ol li");
$uli.addClass("normal");
$uli.eq(0).removeClass().addClass("click");
$oli.addClass("hide");
$oli.eq(0).removeClass().addClass("show");
$uli.click(function(){
	var $index=$(this).index();
	$(this).removeClass().addClass("click").siblings().removeClass().addClass("normal");
			
	$oli.eq($index).removeClass().addClass("show").siblings().removeClass().addClass("hide");
	return false;
});

//console.log($(".fenlei_box_middle ol li img"))
$(".fenlei_box_middle ol li img").click(function(){
	window.location.href="http://127.0.0.1:8020/aolaigou/liebiao.html?__hbt=1514878665948"
})



/*$(function(){
	$.get("js/hotfenlei.json",function(data){
		//console.log(data);//[{…}, {…}, {…}, {…}]
		new app($(".fenlei_box_top ul"),$(".fenlei_box_middle ol"),data)
		//console.log($(".fenlei_box_top ul"));
		//console.log($(".fenlei_box_middle ol"));
	})
});
function app(elul,elol,data){
	//console.log(elul);//jQuery.fn.init [ul, prevObject: jQuery.fn.init(1), context: document, selector: ".fenlei_box_top ul"]
	//console.log(elol);//jQuery.fn.init [ul, prevObject: jQuery.fn.init(1), context: document, selector: ".fenlei_box_top ul"]
	//console.log(data);//(4) [{…}, {…}, {…}, {…}]
	this.elul=elul;
	this.elol=elol;
	this.data=data;
	this.Init();
}
app.prototype={
	Init:function(){
		var that=this;
		for(var i=0; i<this.data.length; i++){
			this.i=i;
			//console.log(i);//0 1 2 3
			//console.log(this.data.length);//4
			//for(var j=0; j<this.data[i].miaoshu.length; j++){
				//console.log(j);//0 1 2 3
				//console.log(this.data[i]);.miaoshu"]);
				//console.log(this.data[i].miaoshu.length);//4
				var li1=$("<li></li>");
				$(this.elul).append(li1);
				var a1=$("<a href='#'></a>");
				li1.append(a1);
				a1.html(this.data[i].miaoshu);
			//}
			
			var li2=$("<li></li>");
			$(this.elol).append(li2);
			
			
		}
	}
}*/




//侧边栏
//console.log($(".right_guide>ul>li"));
$(".right_guide>ul>li").mouseenter(function(){
	//console.log($(this));
	//console.log($(this).find("p"));
	$(this).find("p").stop().animate({"left":"-48px"},500);
}).mouseleave(function(){
	$(this).find("p").stop().animate({"left":"48px"},500);
})
//console.log($(".right_guide>ul>li").last());
$(".right_guide>ul>li").last().click(function(){
	//console.log($("body,html"));
	$("body,html").animate({"scrollTop":0},1000);
})






