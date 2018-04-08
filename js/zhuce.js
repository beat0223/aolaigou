//手机号正则
var regp=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;

//密码正则
var regpwd=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
//短信验证码格式
var regdx=/^\d{4,6}$/;


//手机号

	
	$(".div2>input").focus(function(){
		$(".div2>p").html("请输入注册的手机号").css("display","block");
}).blur(function(){
	var phone = $(".div2>input").val()
	if($(".div2>input").val()==""){
		$(".div2>p").css("display","none");
	}else if(!regp.test(phone)){
//		console.log(phone)
//		console.log(regp.test($(".div2>input").val()))
		$(".div2>p").html("账号暂时只开放手机号码注册").css({"display":"block","color":"red"});
		
	}
	
});


//密码
$(".div3>input").focus(function(){
	
		$(".div3>p").html("6-20位字符,可使用字母 数字 或字符的组合").css("display","block");	
}).blur(function(){
	var pwd=$(".div3>input").val();//密码
	if($(".div3>input").val()==""){
		$(".div3>p").css("display","none");

	}else if(!regpwd.test(pwd)){
		$(".div3>p").css("display","none");
		$(".div3>p").html("密码长度只能在6-20位字符之间").css({"display":"block","color":"red"});
	}
	
});



//再次输入密码
$(".div4>input").focus(function(){
	if($(".div4>input").val()==""){
		$(".div4>p").html("请再次输入密码").css("display","block");
	}
	
}).blur(function(){
		var pwd=$(".div3>input").val();
		var re_pwd=$(".div4>input").val();
	if($(".div4>input").val()==""){
		
		$(".div4>p").css("display","none");
	}else if(re_pwd != $(".div3>input").val()){
		
		if(re_pwd!=pwd){
			$(".div4>p").css("display","none");
			$(".div4>p").html("两次输入密码不一			致").css({"display":"block","color":"red"});
		}
		
	}
	
	
	
	
});



////验证码
//$(".div5>input").focus(function(){
//	if($(".div5>input").val()==""){
//		$(".div5>p").html("输入验证码").css("display","block");
//	}
//	
//}).blur(function(){
//	if($(".div5>input").val()==""){
//		$(".div5>p").css("display","none");
//		$(".div5>p").html("请输入验证码").css({"display":"block","color":"red"});
//	}
//	
//	
//});




$(".div7>a").click(function(){
	
var phone = $(".div2>input").val();//手机号

var pwd=$(".div3>input").val();//密码

var re_pwd=$(".div4>input").val();//确认密码
  
  
  // 验证码与短信验证码先注销 之后在进行判断
//var yzm=$(".div5>input").val();//验证码
//
//var duanxin=$('.div6>input').val();//短信验证码
//var regdx=/^\d{4,6}$/;

	if(phone =="" || pwd=="" || re_pwd==""){ //|| duanxin==""
		//console.log($(".div2 .tip1"));
		$(".div2>p").html("请输入手机号").css({"display":"block","color":"red"});
		$(".div3>p").html("请输入密码").css({"display":"block","color":"red"});
		$(".div4>p").html("请输入密码").css({"display":"block","color":"red"});
		$(".div6>p").html("请输入验证码").css({"display":"block","color":"red"});
		
	}else{
		$(".div2>p").css({"display":"none"});
		$(".div3>p").css({"display":"none"});
		$(".div4>p").css({"display":"none"});
		$(".div6>p").css({"display":"none"});
			var arr =[];
			var a;
			getCookies(/^u/,function(nam,val){
			
			var nam=nam.replace("u","")
			if(nam==""){
				a=1  //1 代表未注册
				arr.push(a)
				alert("注册成功");
			}else if($(".div2>input").val()==nam){
				a=0  //0 代表已存在
				arr.push(a)

			}else{
				a=1  //1 代表未注册
				arr.push(a)				
			}
			
			
		})
			if(arr.indexOf(0)!=-1){
				alert("用户名已被占用")
			}else if(arr.indexOf(1)!=-1){
				setCookie("u"+$(".div2>input").val(),$(".div3>input").val(),7)
				alert("注册成功");
			}
			

	//假设注册成功 setCookie("u"+$(".div2>input").val(),$(".div3>input").val(),7)
	

	}
	
	window.location.href="http://127.0.0.1:8020/aolaigou/login.html?__hbt=1514781556521";
});



//console.log($(".div1>.span2>a"));
$(".div1>.span2>a").click(function(){
	window.location.href="http://127.0.0.1:8020/aolaigou/login.html?__hbt=1514781556521";
});







