/*
setCookie("a1", "你好 hello 123");
setCookie("a2", "你好 hello 123", 1, "/");
setCookie("a3", "你好 hello 123", 1);
setCookie("a4", "你好 hello 123", "/");
*/		
//设置( 创建、修改、删除)
function setCookie(_name, _value, _date, _path){
	var str = "";
	switch( typeof(_date) ){
		case "undefined":
			break;
		case "number":
			var d = new Date();
			d.setDate( d.getDate()+_date );
			str = "expires="+d.toGMTString()+";";
			if( _path ){
				str += "path="+_path+";";
			}
			break;
		case "string":
			str = "path="+_date+";";
			break;
	}
	//str = _name+"="+encodeURIComponent(_value)+";"+str;
	// 希望存储的内容支持多种格式
	var json = {
		"value" : _value
	};	
	var jsonstr = JSON.stringify(json);
	//console.log(str);
	document.cookie = _name+"="+encodeURIComponent(jsonstr)+";"+str;
}
// 获取（  查询）
function getCookie(_name){
	var str = document.cookie;
	var arr = str.split("; ");	// 分号和空格
	var i=0, l=arr.length;
	for( ; i<l; i++){
		var col = arr[i].split("=");
		if( col[0] == _name ){
			//return decodeURIComponent(col[1]);
			var json = JSON.parse(decodeURIComponent(col[1]));
			return json.value;
		}
	}
	//return "";
}

function removeCookie(_name){
	setCookie(_name, "", -1);
}


// 获取以n开头的所有的cookie
// getCookies(/^c/, fn)
function getCookies(reg, fn){
	var str = document.cookie;
	var arr = str.split("; ");	// 分号和空格
	var i=0, l=arr.length;
	var arr2 = [];
	for( ; i<l; i++){
		var col = arr[i].split("=");
		// _n = "c";
		// "/^"+_n+"/"		"/^c/"
		// eval("/^c/")		 /^c/
		//if( eval("/^c/").test(col[0]) ){
		if( reg.test(col[0]) ){
			var json = JSON.parse(decodeURIComponent(col[1]));
			//return json.value;
			arr2.push([col[0],json.value]);
			// 执行回调函数
			if( fn ){
				fn(col[0], json.value);
			}
		}
	}	
	return arr2;
}
