//console.log($(".div2>input"));
$(".div2>input").focus(function(){
	$("#user").html("").css("display","none");
}).blur(function(){
	//手机号正则
	var regp=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	var strp=$(".div2>input").val();
	if($(".div2>input").val()==""){
		$("#user").html("请输入邮箱/手机号").css({"display":"block","color":"red"});
	}else if(!regp.test(strp)){
		$("#user").html("请输入邮箱/手机号").css({"display":"block","color":"red"});

	}
	
	
})




//console.log($(".div5>a"));
$(".div5>a").click(function(){
			//手机号正则
	var regp=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	var strp=$(".div2>input").val();
	
	var phone=$(".div2>input").val();
	var pwd=$(".div3>input").val();
	if(getCookie("u"+phone)==pwd){
		alert("登陆成功");
		window.location.href="http://127.0.0.1:8020/aolaigou/index.html?__hbt=1514794157026";
	}else if($(".div2>input").val()==""){
		$("#user").html("请输入用户名").css({"display":"block","color":"red"});
	}else if(!regp.test(strp)){
		$("#user").html("请输入邮箱/手机号").css({"display":"block","color":"red"});
		$("#mima").html("").css("display","none");
	}else if($(".div3>input").val() != ""){
		$("#mima").html("").css("display","none");
	}else{
		$("#user").html("").css("display","none");
		$("#mima").html("请输入密码").css({"display":"block","color":"red"});
	}
	return false;
})



//console.log($(".div1>a"));
$(".div1>a").click(function(){
	window.location.href="http://127.0.0.1:8020/aolaigou/zhuce.html?__hbt=1514785276521";
})
