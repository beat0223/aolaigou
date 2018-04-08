$.getJSON("js/hot_liebiao.json",function(response){
	//console.log(response);
	//console.log($(response));
	var str="";
	$(response).each(function(index,ele){
		//console.log(index);
		//console.log(ele);//{tu: "img/liebiaoCggUFlgN9aqAVzpMAAOARAyGn0o282=130x130.JPG", miaoshu: "[支持自提] adidas/阿迪达斯  阿迪达斯三叶草男鞋2017秋新款贝壳头低帮休闲小白鞋板鞋 AQ8334", price: "￥599", mai: "立即抢购"}
		//console.log($(response)[index]);
		//console.log(response[index]);//{tu: "img/liebiaoCggUFlgN9aqAVzpMAAOARAyGn0o282=130x130.JPG", miaoshu: "[支持自提] adidas/阿迪达斯  阿迪达斯三叶草男鞋2017秋新款贝壳头低帮休闲小白鞋板鞋 AQ8334", price: "￥599", mai: "立即抢购"}
		
		//console.log(ele.tu);//img/liebiaoCggUFlgN9aqAVzpMAAOARAyGn0o282=130x130.JPG
	/*	str+="<li><img src='ele.tu'/><a class='des' hre='#'>"+ele.miaoshu+"</a><p>"+ele.price+"</p><a href='#' class='two'>"+ele.mai+"</a></li>";*/
    	str+=`<li>
		<img src='${ele.tu}'>
		<a class='des' href='#'>${ele.miaoshu}</a>
		<p>${ele.price}</p>
		<a href='#' class='two'>${ele.mai}</a>
		</li>`;
		$(".ul2").html(str);
		//console.log($(".two"));
		$(".two").click(function(){
			window.location.href="http://127.0.0.1:8020/aolaigou/xiangqing.html?__hbt=1514636960829";
			return false;
		})
	})
})



/*引入liebiao_list.json文件*/
/*$.getJSON("js/liebiao_list.json",function(response){
	//console.log(response);//(5) [{…}, {…}, {…}, {…}, {…}]
	//console.log($(response));//jQuery.fn.init(5) [{…}, {…}, {…}, {…}, {…}]
	var str="";
	$(response).each(function(index,ele){
		//console.log(index);//0 1 2 3 4
		//console.log(ele);//{tu: "img-liebiao/CggUFlhKZp6ADLJTAAEzDJ7QeeU392=140x140.jpg", xinxi: "wissblue/维仕蓝  户外休闲加宽加厚吊床 WA8053", price: "￥59"}
		//console.log($(response)[index]);//{tu: "img-liebiao/CggUFlhKZp6ADLJTAAEzDJ7QeeU392=140x140.jpg", xinxi: "wissblue/维仕蓝  户外休闲加宽加厚吊床 WA8053", price: "￥59"}
		//console.log(response[index])//{tu: "img-liebiao/CggUFlhKZp6ADLJTAAEzDJ7QeeU392=140x140.jpg", xinxi: "wissblue/维仕蓝  户外休闲加宽加厚吊床 WA8053", price: "￥59"}
		//console.log($(response)[index].xinxi);//5 wissblue/维仕蓝  户外休闲加宽加厚吊床 WA8053
		//console.log(ele.xinxi);//5 wissblue/维仕蓝  户外休闲加宽加厚吊床 WA8053
		str+="<li><img src='ele.tu'><p>"+ele.xinxi+"</p><span>"+ele.price+"</span></li>";
		$(".l_ul1").html(str);
	})
})*/



$.getJSON("js/liebiao_list.json",function(response){
	//console.log(response.one);
    var arr=response.one;
    var strtop="";//不应该是局部变量  应该提前声明是字符串
	arr.forEach(function(ele,index){
		//进行字符串拼接  ${}是传值方式
		strtop+=`<li>
		<img src=${ele.tu}>
		<p>${ele.xinxi}</p>
		<span>${ele.price}</span>
		</li>`;
		
	})
	//遍历完成后 再将结果添加到列表中
	$(".l_ul1").html(strtop);
	
	//console.log(response.two);
	var col = response.two;
	var strbottom = "";
	col.forEach((ele,index)=>{
		strbottom+=`<li>
		<img src=${ele.tu}>
		<p>${ele.xinxi}</p>
		<span>${ele.price}</span>
		</li>`;
	})
	$(".l_two").html(strbottom);
})