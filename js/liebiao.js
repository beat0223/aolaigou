


/*$.get("js/list.json",function(arr){
	//console.log(arr);//(40) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
	for(var i=0,l=arr.length; i<l; i++){
		//console.log(i);//0 1 2 3 4 5 6 7 8 9 10...39
		var li=$("<li></li>");
		$(".l_ul2").append(li);
		var dl=$("<dl></dl>");
		li.append(dl);
		var dt=$("<dt></dt>");
		dl.append(dt);
		var imgBig=$("<img/>");
		dt.append(imgBig);
		//imgBig.attr({"src":arr[i].images[i]});
		imgBig.css({"width":"220px","height":"220px"});
		var dd1=$("<dd></dd>");
		dl.append(dd1);
		var ol=$("<ol></ol>");
		dd1.append(ol);
		for(var j=0,lj=arr[i].images.length; j<lj; j++){
			var oli=$("<li></li>");
			ol.append(oli);
			var imgSmall=$("<img/>");
			oli.append(imgSmall);
			imgSmall.attr({"src":arr[i].images[i]});
		}
		var dd2=$("<dd></dd>");
		dl.append(dd2);
		var b=$("<b></b>");
		dd2.append(b);
		b.html(arr[i].price1);
		var s=$("<s></s>")
		dd2.append(s);
		s.html(arr[i].price2);
		var span=$("<span></span>");
		dd2.append(span);
		span.html(arr[i].price3);
		var dd3=$("<dd></dd>");
		dl.append(dd3);
		var span2=$("<span></span>");
		dd3.append(span2);
		span2.html(arr[i].mioashu1);
		var a=$("<a></a>");
		dd3.append(a);
		a.html(arr[i].mioashu2)
	}
})
*/
$(function(){
	$.get("js/list.json",function(data){
		//console.log(data);
		new app($(".list_box"), data)
		//console.log($(".list_box"));
	})
});

function app(elem, data){
	//console.log(elem);//Object { 0: <div.list_box>, length: 1, prevObject: Object, context: HTMLDocument → liebiao.html, selector: ".list_box" }
	this.elem = elem;
	this.data = data;
	this.Init();
}
app.prototype = {
	Init : function(){
		var that = this;
		for(var i=0,l=this.data.length; i<l; i++){
			this.i = i;
			var div1 = $("<div></div>");
			$(this.elem).append(div1);
			div1.addClass("listbox");
			var ul1=$("<ul></ul>");
			div1.append(ul1);
			ul1.addClass("addul");
			var li1=$("<li></li>");
			ul1.append(li1);
			li1.addClass("li1");
		
			
			var imgBig=$("<img/>")
			imgBig.attr({"src":this.data[i].imageBig[0]});
			li1.append(imgBig);
			imgBig.addClass("imgB");
			
			
			
			
			
			var ol1=$("<ol></ol>");
			div1.append(ol1);
			ol1.addClass('addol');
			for(var j=0; j<this.data[i]['imageSmall'].length; j++){
				var li2=$("<li></li>");//循环创建了5个li
				ol1.append(li2);
				li2.addClass("li2");
				var imgSmall=$("<img/>");
				imgSmall.attr({"src":this.data[i]['imageSmall'][j]});
				li2.append(imgSmall);
			}
			
			var p1=$("<p></p>");
			$(".listbox").append(p1);
			p1.addClass("p1");
			var span1=$("<span></span>")
			p1.append(span1);
			span1.html(this.data[i].price1);
			span1.addClass("span1");
			var del=$("<del></del>");
			p1.append(del);
			del.html(this.data[i].price2);
			var span3=$("<span></span>");
			p1.append(span3);
			span3.html(this.data[i].price3);
			span3.addClass("span3");
			var p2=$("<p></p>");
			$(".listbox").append(p2);
			p2.addClass("p2");
			var a1=$("<a href='#'></a>");
			p2.append(a1);
			a1.html(this.data[i].mioashu1);
			a1.addClass("a1");
			var a2=$("<a href='#'></a>");
			p2.append(a2);
			a2.html(this.data[i].mioashu2);
			a2.addClass("a2");
		}
		
		
		
		
		$(this.elem).find(".listbox").mouseenter(function(){
			console.log($(this.elem).find(".listbox"));
			that.enter($(this));
		});
		$(this.elem).find(".listbox").click(function(){
			//console.log($(this.elem).find(".listbox"));
			that.click($(this));
		})
	},
	enter : function(el){
		//console.log(el);//Object { 0: <div.listbox>, context: <div.listbox>, length: 1 }
		var that = this;
		el.find("ol>li").mouseenter(function(){
			var s = $(this).index();
			el.find("ul>li>img").attr({"src":that.data[that.i].imageBig[s]});
		});
		
	},
	click:function(eltu){
		//console.log(eltu);//jQuery.fn.init [div.listbox, context: div.listbox]
		var that=this;
		/*//console.log(eltu.find("ul li"));
		eltu.find("ul li").click(function(){
			window.location.href="http://127.0.0.1:8020/aolaigou/xiangqing.html?__hbt=1514879722307"
		})*/
		eltu.click(function(){
			window.location.href="http://127.0.0.1:8020/aolaigou/xiangqing.html?__hbt=1514879722307"
		})
		
	}
}



/*//点击a_btn 出现div
//console.log($(".a_btn"))
$(".a_btn").click(function(){
	//console.log($(".ziliao"));
	//$(".ziliao").css("display","block");
	$(".ziliao").animate({"top":"800px"},1000)
	//$("body").animate({"scrollTop":600},1000);
	return false;
	
});
$(".shouqi").click(function(){
	$(".ziliao").css("display","none");
	return false;
})*/



	console.log($(".li1"));
			$(".li1").click(function(){
				window.location.href="http://127.0.0.1:8020/aolaigou/xiangqing.html?__hbt=1514636960829";
			})