//console.log($(".phone"));//jQuery.fn.init [a.phone, prevObject: jQuery.fn.init(1), context: document, selector: ".phone"]
$(".phone").mouseover(function(){
	$(".weixin").css("display","block");
}).mouseout(function(){
	$(".weixin").css("display","none");
});
$(".weixin").mouseover(function(){
	$(".weixin").css("display","block");
}).mouseout(function(){
	$(".weixin").css("display","none");
})








/*//鼠标移入小图，显示对应的大图
//console.log($(".details1_m>.details1_m1>ul>li"));
var $liSmall=$(".details1_m>.details1_m1>ul>li");
var $liBig=$(".ulBig>li");
$liBig.addClass("hide");
$liBig.eq(0).removeClass().addClass("show");
$liSmall.addClass("normal");
//$liSmall.eq(0).removeClass().addClass("hover");

$liSmall.mouseover(function(){
	//console.log($(".ulBig>li"));
	//$(".ulBig>li>img").css("display","block");
	var $index=$(this).index();//小图下标
	//console.log($index);//0 1 2 3 4
	//console.log($(this));
	//$(this).removeClass().addClass("hover").siblings().removeClass().addClass("normal");
	//console.log($liBig.eq($index));	
	$liBig.eq($index).removeClass().addClass("show").siblings().removeClass().addClass("hide");
})



//鼠标移入哪个大图，就让对应的放大镜中的大图显示
//console.log($(".glass>img"));
var $glassImg=$(".glass>img");
$glassImg.addClass("yin");
$glassImg.eq(0).removeClass().addClass("xian");
$liBig.mouseover(function(){
	var $indexG=$(this).index();
	//console.log($indexG);//0
	//console.log($(this));
	$(this).removeClass().addClass("show").siblings().removeClass().addClass("hide");
	$glassImg.eq($indexG).removeClass().addClass("xian").siblings().removeClass().addClass("yin");
})*/





//鼠标在大图区域上移动，让遮罩层跟着移动，并让鼠标在遮罩层的中心;遮罩层要实现边界处理;实现放大镜效果
function Scale( box, width, height, b, imgsrc ){
	var that = this;
	this.box = box;
	this.width = width;
	this.height = height;
	this.b = b;
	this.imgsrc = imgsrc;
	
	this.init();
	
	this.div1.bind("mousemove", function(e){
		var x = e.clientX-that.box.offset().left;
		var y = e.clientY-that.box.offset().top;
		 x = x - that.glass.width()/2;
		 y = y - that.glass.height()/2;
		if(x<0){x=0}
		if(y<0){y=0}
		var maxX=that.div1.width()-that.glass.width();
		if(x>maxX){x=maxX}
		var maxY=that.div1.height()-that.glass.height();
		if(y>maxY){y=maxY}
		//document.title = x+" , "+y;
		that.move(x, y);
	});
	
	this.div1.bind("mouseenter", this.over.bind(this));
	this.div1.bind("mouseleave", this.out.bind(this));
}

Scale.prototype.init = function(){
	// 放大镜的所有依赖的结构创建出来
	// 小div
	var div1 = $("<div></div>");
	this.box.append(div1);
	div1.css({"width":this.width, "height":this.height});
	this.div1 = div1;
	// 大div
	var div2 = $("<div></div>");
	this.box.append(div2);
	div2.css({"width":this.width, "height":this.height, "left":this.width+50});
	//"left":this.width+10s0(小div与大div的间距)
	this.div2 = div2;
	div2.addClass("div2");
	// 小div中的图片
	var img1 = $("<img/>");
	div1.append(img1);
	img1.attr({"src":this.imgsrc}).css({"width":this.width, "height":this.height});
	// 小div中图片上面的div，起遮罩层的作用
	var mask = $("<div></div>");
	div1.append(mask);
	mask.css({"width":this.width, "height":this.height, "opacity":.7, "background":"black"});
	// 小div中的放大镜
	var glass = $("<div></div>");
	div1.append(glass);
	glass.css({"width":this.width/this.b, "height":this.height/this.b, "overflow":"hidden", "display":"none"});
	this.glass = glass;
	// 放大镜中的图片
	var img3 = $("<img/>");
	glass.append(img3);
	img3.attr({"src":this.imgsrc}).css({"width":this.width, "height":this.height});
	this.img3 = img3;
	// 大div中的图片
	var img2 = $("<img/>");
	div2.append(img2);
	img2.attr({"src":this.imgsrc}).css({"width":this.width*this.b, "height":this.height*this.b});
	this.img2 = img2;
	
}
Scale.prototype.move = function(x, y){
	this.glass.css({"left":x, "top":y});
	this.img3.css({"left":-x, "top":-y});
	this.img2.css({"left":-x*this.b, "top":-y*this.b});
}
Scale.prototype.over = function(){
	this.glass.css({"display":"block"});
	this.div2.fadeIn();
}
Scale.prototype.out = function(){
	this.glass.css({"display":"none"});
	this.div2.fadeOut();
}



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







	/*$.get("js/xiangqing.json",function(data){
		//console.log(data);//[{…}]
		for(var i=0; i<data.length; i++){
			//console.log(i);//0
			//console.log(data.length);1
			var ul1=$("<ul></ul>");
			$(".details1_m1").append(ul1);
			ul1.addClass("ul1");
			
			var ul2=$("<ul></ul>");
			$(".scale").append(ul2);
			ul2.addClass("ul2");
			
			for(var j=0; j<data[i].img_small.length; j++){
				//console.log(j);//0 1 2 3 4
				//console.log(data[i].img_small[j]);
				var li1=$("<li></li>");
				ul1.append(li1);
				li1.addClass("li1");
				
				var imgSmall=$("<img/>");
				li1.append(imgSmall);
				imgSmall.attr({"src":data[i].img_small[j]});
			}
			
			for(var n=0; n<data[i].img_big.length; n++){
				//console.log(n);//0 1 2 3 4
				//console.log(data[i].img_big[n]);
				var li2=$("<li></li>");
				ul2.append(li2);
				li2.addClass("li2");
				
				var imgBig=$("<img/>");
				li2.append(imgBig);
				imgBig.attr({"src":data[i].img_big[n]});
			}
			//console.log($(".details1_m1>.ul1>.li1"))
			$(".details1_m1>.ul1>.li1").mouseenter(function(){
				var index=$(this).index();
				//console.log($(".scale>.ul2>.li2>img"));
				$(".scale>.ul2>.li2>img").attr({"src":data[i].img_big[index]})
			})
		}
		
		
		
		
	})*/


/*商品介绍 售后服务*/
//console.log($(".intro1_tab ul li"));
//console.log($(".intro1_tab ol li"));
var $uli=$(".intro1_tab ul li");
var $oli=$(".intro1_tab ol li");
$uli.addClass("normal");
$uli.eq(0).removeClass().addClass("click");
$oli.addClass("hide");
$oli.eq(0).removeClass().addClass("show");
$uli.click(function(){
	//console.log($(this));
	var $index=$(this).index();
	$(this).removeClass().addClass("click").siblings().removeClass().addClass("normal");
	//console.log($oli.eq($index));
	$oli.eq($index).removeClass().addClass("show").siblings().removeClass().addClass("hide");
	return false;
})








//console.log($(".bottom3 .jia"));
$(".bottom3 .jia").click(function(){
	//console.log($(".bottom3 span"));
	//console.log($(".bottom3 span").html());//1
	var num=$(".bottom3 span").html();
	num++;
	$(".bottom3 span").html(num);
	return false;
})

//console.log($(".bottom3 .jian"));
$(".bottom3 .jian").click(function(){
	//console.log($(".bottom3 span").html());//1
	var num=$(".bottom3 span").html();
	num--;
	if(num<1){
		num=1;
	}
	$(".bottom3 span").html(num);
	/*if(num<1){
		num=1;
	}*/
	return false;
})




//添加到购物车效果
//console.log($(".bottom3 .cart"));
$(".bottom3 .cart").click(function(){
	//console.log($(".right_guide .count"));
	//console.log($(".right_guide .count").html());//0
	var num=$(".right_guide .count").html();
	num++;
	$(".right_guide .count").html(num);
	
	/*//console.log($(".bottom3 span").html());
	var num1=$(".bottom3 span").html();
	//num1++;
	$(".bottom3 span").html(num1);
	var num2=$(".right_guide .count").html();
	//num2++;
	//$(".right_guide .count").html(num2);
	$(".right_guide .count").html(num1+num2);*/
	
	// 商品保存在cookie中
	// 当点击添加到购物车按钮时，判断之前是否已经将这个商品保存了
			var goods = getCookie("g"+obj.id);
			if( goods ){	// 表示之前保存过
				obj.num = goods.num+1;//Number()
			}else{	// 之前没有保存过
				obj.num = 1;
			}
			// 保存到cookie
			setCookie("g"+obj.id, obj, 7);
			// 显示购物车中的所有的商品
			cartShow();
	return false;
})






// 显示购物车中所有的商品
cartShow();
function cartShow(){
	box.innerHTML = "";
	var i = 0;
	getCookie(/^g/, function(cookieName, cookieValue){		
		var obj = cookieValue;
		i+=obj.num;//Number()
		// 创建li
		var li = document.createElement("li");
		box.appendChild(li);
		// 创建图片
		var img = document.createElement("img");
		li.appendChild(img);
		img.src = obj.img;
		// 创建商品名称
		var h4 = document.createElement("h4");
		li.appendChild(h4);
		h4.innerHTML = obj.title;
		// 创建单价
		var span = document.createElement("span");
		li.appendChild(span);
		span.className = "price";
		span.innerHTML = obj.price;
		// 数量
		var div = document.createElement("div");
		div.className = "count";
		li.appendChild(div);
		
		var jian = document.createElement("input");
		jian.type = "button";
		jian.value = "-";
		div.appendChild(jian);
		jian.onclick = function(){
			count.value -= 1;
			cart.innerHTML = cart.innerHTML-1;
			if( count.value <= 0 ){
				removeCookie("g"+obj.id);
				li.parentNode.removeChild(li);
			}else{
				obj.num--;
				setCookie("g"+obj.id, obj, 7);				
			}			
		}
				
		var count = document.createElement("input");
		count.type = "text";
		count.value = obj.num;
		div.appendChild(count);
		count.onblur = function(){
			var n = this.value;
			if( /^\d+$/.test(n) ){
				var cok = getCookie("g"+obj.id);
				cart.innerHTML = parseInt(cart.innerHTML)+(n-cok.num);
				obj.num = Number(n);
				setCookie("g"+obj.id, obj, 7);					
			}
		}
		
		var jia = document.createElement("input");
		jia.type = "button";
		jia.value = "+";
		div.appendChild(jia);
		jia.onclick = function(){
			count.value = parseInt(count.value)+1;
			cart.innerHTML = parseInt(cart.innerHTML)+1;
			obj.num++;
			setCookie("g"+obj.id, obj, 7);	
		}
		
	});
	cart.innerHTML = i;
}