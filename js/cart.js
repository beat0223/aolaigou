// 数量加减
			$(function(){
				// 初始值
				$(".count-msg .add").prev().val(1);
				// 加
				$(".count-msg .add").click(function(){
					
					var n = $(this).prev().val();
		
					var num = parseInt(n) +1;
					if(num > 999){
						alert("购物车数量不能超过999件");
						//console.log(num);
						//console.log(n);
						$(this).prev().val(1);
						return;	
					}
					
					$(this).prev().val(num);
					// 小计
					var subTotal = Number($(this).parent().parent().siblings(".price-msg").find("b").html()) * parseInt($(this).prev().val());
					$(this).parent().parent().siblings(".sub-total-msg").find("b").html(subTotal.toFixed(2));
					//console.log(subTotal)
					// 总计
					setTotal();
					// 总量
					setCount();
					
				});
				//console.log($(".count-msg").find("input[type=text]"))
				
				// 数量失去焦点
				$(".count-msg").find("input[type=text]").blur(function(){
					
					var n = $(this).val();
					var subTotal = Number($(this).parent().parent().siblings(".price-msg").find("b").html()) * n;
					$(this).parent().parent().siblings(".sub-total-msg").find("b").html(subTotal.toFixed(2));
					if(n >= 999){
						alert("购物车数量不能超过999件")
					}
					
					setTotal();
					setCount();
				})
				// 减
				
				$(".count-msg .min").click(function(){
					//console.log($(".count-msg .min").next().val()-1)
					var n = $(this).next().val();
					var num = parseInt(n) - 1;
					if(num < 1){
						if(confirm("确定要删除吗?")){
							$(this).parent().parent().parent().css("display","none");
						}
						
					}
					
					$(this).next().val(num);
					var subTotal = Number($(this).parent().parent().siblings(".price-msg").find("b").html()) * Number($(this).next().val());
					$(this).parent().parent().siblings(".sub-total-msg").find("b").html(subTotal.toFixed(2));
					
					setTotal();
					setCount();
				})
				
				
				//总价
				function setTotal(){
					var result = 0;
					$(".count-msg .count-table").each(function(){
						result +=parseInt($(this).find("input").val()) * parseFloat($(this).parent().siblings(".price-msg").find("b").html());
						
					});
					
					//console.log(result)
					$(".account-price").find("b").html(result.toFixed(2));
					
				}
				setTotal();
				
				// 总数
				function setCount(){
					var countTotal = 0;
					$(".count-msg .count-table").each(function(){
						countTotal += parseInt($(this).find("input").val());
					});
					
					$(".account .account-count").find("span").html(countTotal);
					
					// 上方标题栏数量
					$(".mycart-box p").find("span").find("b").html(countTotal);
					
					//logo栏数量
					$(".logocon .cart").find("span").html(countTotal);
				}
				
				setCount();	
				
				// 删除操作
				$(".operate-msg a").click(function(){
					$(this).parent().parent().hide();
				})
				
				//console.log($("#cart-num").not("i").html());
				
				
			})





/*$(function(){	
	$.ajax({
		"type":"GET",
		"url": "js/cart.json",
		"dataType":"json",
		success:function(data){
			var str ="";
			var arr = data;
			for(var i = 0; i < arr.length; i++){
				str += '<dd><div class="name-msg">' +
									'<div class="name-le"><img src="'+arr[i].img +'" alt="" /></div>' +
									'<div class="name-rg">'+
										'<p><a href="javascript:;">' + arr[i].text +
										'</a>' +
											'<p>'+ arr[i].productCode +'</p>'+
										'</p>'+
										'<p class="sale">'+ arr[i].saleArea+'</p>'+
									'</div>' +
								'</div>' +
								'<div class="property-msg">' +
									'<div class="property-details"><p>'+
										'<lable>'+ arr[i].propertyMsg+'</lable>' +
										'<span>'+arr[i].Detail+'</span>' +
									'</p></div>'+
								'</div>' +
								'<div class="price-msg">' +
									'<b>'+arr[i].priceMsg+'</b>' +
									'<p></p>' +
								'</div>' +
								'<div class="count-msg" id="countMsg">' +
									'<div class="count-table">' +
										'<span class="min">-</span>' +
										'<input type="text" value="1"/>'+
										'<span class="add">+</span>' +
									'</div>' +
								'</div><div class="sub-total-msg"><b>￥46.31</b></div><div class="operate-msg">' +
									'<a href="javascript:;"><i></i></a>'+
								'</div></dd>'
			}
			
			$(".goods-box dl").append(str);
		}
	})
})*/
