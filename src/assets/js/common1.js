	var CLASS_ACTIVE = 'mui-active';
	/**
	 * 自动消失提示框
	 */
	$.toast = function(message) {
		var toast = document.createElement('div');
		toast.classList.add('mui-toast-container');
		toast.innerHTML = '<div class="' + 'mui-toast-message' + '">' + message + '</div>';
		toast.addEventListener('webkitTransitionEnd', function() {
			if(!toast.classList.contains(CLASS_ACTIVE)) {
				toast.parentNode.removeChild(toast);
			}
		});
		document.body.appendChild(toast);
		toast.offsetHeight;
		toast.classList.add(CLASS_ACTIVE);
		setTimeout(function() {
			toast.classList.remove(CLASS_ACTIVE);
		}, 2000);
		//}
	};

	/**
	 * 产生随机整数，包含下限值，但不包括上限值
	 * @param {Number} lower 下限
	 * @param {Number} upper 上限
	 * @return {Number} 返回在下限到上限之间的一个随机整数
	 */
	function random(lower, upper) {
		return Math.floor(Math.random() * (upper - lower)) + lower;
	}
	/**
	 *获取年月日时分秒 
	 */
	function getnowDate() {
		var myDate = new Date();
		var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
		var month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
		var day = myDate.getDate(); //获取当前日(1-31)
		var hours = myDate.getHours(); //获取当前小时数(0-23)
		var minutes = myDate.getMinutes(); //获取当前分钟数(0-59)
		var seconds = myDate.getSeconds(); //获取当前秒数(0-59)
		return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" +
			seconds + "";
	}

	function ajax() {
		var ajaxData = {
			type: arguments[0].type || "GET",
			url: arguments[0].url || "",
			async: arguments[0].async || "true",
			data: arguments[0].data || null,
			dataType: arguments[0].dataType || "text",
			contentType: arguments[0].contentType || "application/x-www-form-urlencoded",
			beforeSend: arguments[0].beforeSend || function() {},
			success: arguments[0].success || function() {},
			error: arguments[0].error || function() {}
		}
		ajaxData.beforeSend()
		var xhr = createxmlHttpRequest();
		xhr.responseType = ajaxData.dataType;
		xhr.open(ajaxData.type, ajaxData.url, ajaxData.async);
		xhr.setRequestHeader("Content-Type", ajaxData.contentType);
		xhr.send(convertData(ajaxData.data));
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {
					ajaxData.success(xhr.response)
				} else {
					ajaxData.error()
				}
			}
		}
	}

	function createxmlHttpRequest() {
		if(window.ActiveXObject) {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} else if(window.XMLHttpRequest) {
			return new XMLHttpRequest();
		}
	}

	function convertData(data) {
		if(typeof data === 'object') {
			var convertResult = "";
			for(var c in data) {
				convertResult += c + "=" + data[c] + "&";
			}
			convertResult = convertResult.substring(0, convertResult.length - 1)
			return convertResult;
		} else {
			return data;
		}
	}
	/**
	 * 返回dom元素
	 * @param {Object} arg
	 */
	function parseDom(arg) {
		var objE = document.createElement("div");
		objE.innerHTML = arg;
		return objE.firstElementChild;
	};
	/**
	 *获取当前时间组成申请单编号 
	 */
	function getCurrentTime() {
		var myDate = new Date();
		var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
		var month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
		var day = myDate.getDate(); //获取当前日(1-31)
		var hours = myDate.getHours(); //获取当前小时数(0-23)
		var minutes = myDate.getMinutes(); //获取当前分钟数(0-59)
		var seconds = myDate.getSeconds(); //获取当前秒数(0-59)
		if(month < 10) {
			month = "0" + month;
		}
		if(day < 10) {
			day = "0" + day;
		}
		return year + "" + month + "" + day + "" + hours + "" + minutes + "" +
			seconds + "";
	}
	//时间日期转换成string
	function data_string(str, value) {
		if(value == "yyyy-MM-dd hh:mm:ss") {
			var d = eval('new ' + str.substring(1, str.length - 2));
			var ar_date = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
			for(var i = 0; i < ar_date.length; i++) ar_date[i] = dFormat(ar_date[i]);
			return ar_date.slice(0, 3).join('-') + ' ' + ar_date.slice(3).join(':');

			function dFormat(i) {
				return i < 10 ? "0" + i.toString() : i;
			}
		} else if(value == "yyyy-MM-dd") {
			var d = eval('new ' + str.substring(1, str.length - 2));
			var ar_date = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
			for(var i = 0; i < ar_date.length; i++) ar_date[i] = dFormat(ar_date[i]);
			return ar_date.join('-');

			function dFormat(i) {
				return i < 10 ? "0" + i.toString() : i;
			}
		}
	}

	Date.prototype.format = function(fmt) {
		var o = {
			"M+": this.getMonth() + 1, //月份 
			"d+": this.getDate(), //日 
			"h+": this.getHours(), //小时 
			"m+": this.getMinutes(), //分 
			"s+": this.getSeconds(), //秒 
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
			"S": this.getMilliseconds() //毫秒 
		};
		if(/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		for(var k in o) {
			if(new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return fmt;

	}

	function dateStr(str) {
		var sqtime = str;
		var time1 = sqtime.substring(0, 4);
		var time2 = sqtime.substring(4, 6);
		var time3 = sqtime.substring(6, 8);
		var time4 = sqtime.substring(8, 10);
		var time5 = sqtime.substring(10, 12);
		var time6 = sqtime.substring(12, 14);
		var timenow = time1 + "-" + time2 + "-" + time3 + " " + time4 + ":" + time5 + ":" + time6;
		return timenow;
	}

	function isContains(str, substr) {
		return str.indexOf(substr) >= 0;
	}

	function openPrograss(content) {
		$('body').loading({
			loadingWidth: 240,
			title: content,
			name: 'test',
			discription: '',
			direction: 'column',
			type: 'origin',
			originBg: '#ECCFBB',
			originDivWidth: 40,
			originDivHeight: 30,
			originWidth: 6,
			originHeight: 4,
			smallLoading: false,
			titleColor: '#fff',
			titleSize: 1,
			//		loadingBg: 'rgba(56,43,14,0.8)',
			loadingMaskBg: 'rgba(66,66,66,0.3)'
		});
	}

	function closePrograss() {
		removeLoading('test');
	}

	/**
	 *获取当前时间yyyy-mm-dd
	 */
	function getNowDatestr() {
		var myDate = new Date();
		var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
		var month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
		var day = myDate.getDate(); //获取当前日(1-31)
		var hours = myDate.getHours(); //获取当前小时数(0-23)
		var minutes = myDate.getMinutes(); //获取当前分钟数(0-59)
		var seconds = myDate.getSeconds(); //获取当前秒数(0-59)
		if(month < 10) {
			month = "0" + month;
		}
		if(day < 10) {
			day = "0" + day;
		}
		if(hours < 10) {
			hours = "0" + hours;
		}
		if(minutes < 10) {
			minutes = "0" + minutes;
		}
		if(seconds < 10) {
			seconds = "0" + seconds;
		}
		return year + "-" + month + "-" + day + "";
	}

	function datepicker() {
		//	自定义datepicker
		(function($) {
			$.init();
			var btns = $('.dp');
			btns.each(function(i, btn) {
				btn.onclick = function() {
					var _self = this;
					var optionsJson = '{"type":"date"}';
					var options = JSON.parse(optionsJson);
					var ppl = this;
					_self.picker = new $.DtPicker(options);
					_self.picker.show(function(rs) {
						ppl.value = rs.text;
						_self.picker.dispose();
						_self.picker = null;
					});

				}
			});
		})(mui);
	}

	function dateFormat_1(longTypeDate) {
		var dateType = "";
		var date = new Date();
		date.setTime(longTypeDate);
		dateType += date.getFullYear(); //年 
		dateType += "\n" + getMonth(date); //月  
		dateType += "-" + getDay(date); //日 
		return dateType;
	}

	function dateFormat_2(longTypeDate) {
		var dateType = "";
		var date = new Date();
		date.setTime(longTypeDate);
		dateType += date.getFullYear(); //年 
		dateType += "-" + getMonth(date); //月  
		dateType += "-" + getDay(date); //日 
		return dateType;
	}

	function dateFormat_yyyymmddhhmmss(longTypeDate) {
		var dateType = "";
		var date = new Date();
		date.setTime(longTypeDate);
		dateType += date.getFullYear(); //年 
		dateType += "-" + getMonth(date); //月  
		dateType += "-" + getDay(date); //日 
		dateType += "  " + getHours(date); //时 
		dateType += ":" + getMinutes(date); //分
		dateType += ":" + getSeconds(date); //分
		return dateType;
	}

	function dateFormat_3(longTypeDate) {
		var dateType = "";
		var date = new Date();
		date.setTime(longTypeDate);
		dateType += date.getFullYear(); //年 
		return dateType;
	}

	function dateFormat_4(longTypeDate) {
		var dateType = "";
		var date = new Date();
		date.setTime(longTypeDate);
		dateType += "" + getMonth(date); //月  
		dateType += "-" + getDay(date); //日 
		return dateType;
	}
	//返回 01-12 的月份值  
	function getMonth(date) {
		var month = "";
		month = date.getMonth() + 1; //getMonth()得到的月份是0-11 
		if(month < 10) {
			month = "0" + month;
		}
		return month;
	}
	//返回01-30的日期 
	function getDay(date) {
		var day = "";
		day = date.getDate();
		if(day < 10) {
			day = "0" + day;
		}
		return day;
	}
	//返回小时
	function getHours(date) {
		var hours = "";
		hours = date.getHours();
		if(hours < 10) {
			hours = "0" + hours;
		}
		return hours;
	}
	//返回分
	function getMinutes(date) {
		var minute = "";
		minute = date.getMinutes();
		if(minute < 10) {
			minute = "0" + minute;
		}
		return minute;
	}
	//返回秒
	function getSeconds(date) {
		var second = "";
		second = date.getSeconds();
		if(second < 10) {
			second = "0" + second;
		}
		return second;
	}
	var colorList = ['#32C5E9', '#37A2DA', '#67E0E3', '#9FE6B8', '#FFDB5C', '#FF9F7F', '#FB7293', '#E062AE', '#E690D1', '#E7BCF3'];
	//验证是否手机号
	function checkPhone(phone) {
		if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
			return false;
		} else {
			return true;
		}
	}
	Date.prototype.format = function(fmt) {
		var o = {
			"M+": this.getMonth() + 1, //月份        
			"d+": this.getDate(), //日        
			"h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时        
			"H+": this.getHours(), //小时        
			"m+": this.getMinutes(), //分        
			"s+": this.getSeconds(), //秒        
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度        
			"S": this.getMilliseconds() //毫秒        
		};
		var week = {
			"0": "\u65e5",
			"1": "\u4e00",
			"2": "\u4e8c",
			"3": "\u4e09",
			"4": "\u56db",
			"5": "\u4e94",
			"6": "\u516d"
		};
		if(/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		if(/(E+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[this.getDay() + ""]);
		}
		for(var k in o) {
			if(new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return fmt;
	}
	/*页面跳转工具方法*/
	function jumpPage1(data) {
		mui.openWindow({
			url: data,
			extras: {},
			createNew: true,
			waiting: {
				autoShow: false
			}
		})
	}
	//显示一个按钮的提示框
	function showAlert(content, isClose) {
		mui.alert(content, '提示', function() {
			if(isClose) {
				mui.back();
			}
		});
	}
	//是否登录
	function isLogin() {
		var user = localStorage.getItem('user');
		if(user != null) {
			if(user.indexOf("mobilePhone") != -1) {
				var userEntity = JSON.parse(user);
				if(userEntity != null) {
					return userEntity;
				} else {
					return "-1";
				}
			} else {
				if(user != 'null') {
					var jiemi = uncompileStr(user);
					var userEntity = JSON.parse(jiemi);
					if(userEntity != null) {
						return userEntity;
					} else {
						return "-1";
					}
				} else {
					return "-1";
				}
			}
		} else {
			return "-1";
		}

	}
	/*转换成时间工具类*/
	function formatDateTime(inputTime) {
		var date = new Date(inputTime);
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		m = m < 10 ? ('0' + m) : m;
		var d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		var h = date.getHours();
		h = h < 10 ? ('0' + h) : h;
		var minute = date.getMinutes();
		var second = date.getSeconds();
		minute = minute < 10 ? ('0' + minute) : minute;
		second = second < 10 ? ('0' + second) : second;
		return y + '-' + m + '-' + d;
	};
	//日志打印
	function outlog(content) {
		console.log(content);
	}

	//校验是否为空
	function checkStr(str) {
		if(str == '' || str == null || str == undefined) {
			str = '无';
		}
		return str;
	}
	//校验是否为空至成0
	function checkStrOfZero(str) {
		if(str == '' || str == null || str == undefined) {
			str = 0;
		}
		return str;
	}
	//校验是否为空至成-
	function checkStrOfNodata(str) {
		if(str == '' || str == null || str == undefined) {
			str = '-';
		}
		return str;
	}
	//07改变成7
	function checkStrOfNoZero(str) {
		if(str < 10) {
			str = str.substring(1, 2);
		}
		return str;
	}
	//校验是否为空
	function checkStr1(str) {
		if(str == '' || str == null || str == undefined) {
			str = '无';
		}
		return str;
	}
	//取消浏览器的所有事件，使得active的样式在手机上正常生效
	document.addEventListener('touchstart', function() {
		return false;
	}, true);
	// 禁止选择
	document.oncontextmenu = function() {
		return false;
	};
	//格式化时间
	function formatDateTimeforyyyymmddhhmmss(inputTime) {
		var date = new Date(inputTime);
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		m = m < 10 ? ('0' + m) : m;
		var d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		var h = date.getHours();
		h = h < 10 ? ('0' + h) : h;
		var minute = date.getMinutes();
		var second = date.getSeconds();
		minute = minute < 10 ? ('0' + minute) : minute;
		second = second < 10 ? ('0' + second) : second;
		return y + '-' + m + '-' + d + " " + h + ":" + minute + ":" + second;
	};

	//判断是微信app的浏览器
	function isWechat() {
		var userAgent = navigator.userAgent.toLowerCase();
		if(userAgent.match(/MicroMessenger/i) == "micromessenger") {
			return true;
		} else {
			return false;
		}
	}
	//判断是微信app的浏览器
	function isAlipay() {
		var userAgent = navigator.userAgent.toLowerCase();
		if(userAgent.match(/Alipay/i) == "alipay") {
			return true;
		} else {
			return false;
		}
	}
	String.prototype.replaceAll = function(s1, s2) {　　
		return this.replace(new RegExp(s1, "gm"), s2);　　
	}

	function compileStr(code) { //对字符串进行加密       
		var c = String.fromCharCode(code.charCodeAt(0) + code.length); 
		for(var i = 1; i < code.length; i++) {
			c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1)); 
		}
		return escape(c);
	}

	function uncompileStr(code) {
		code = unescape(code);
		var c = String.fromCharCode(code.charCodeAt(0) - code.length);
		for(var i = 1; i < code.length; i++) {
			c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
		}
		return c;
	}

	//阿拉伯数字转换为简写汉字
	function Arabia_To_SimplifiedChinese(Num) {
		for(i = Num.length - 1; i >= 0; i--) {
			Num = Num.replace(",", "") //替换Num中的“,”
			Num = Num.replace(" ", "") //替换Num中的空格
		}
		if(isNaN(Num)) { //验证输入的字符是否为数字
			//alert("请检查小写金额是否正确");
			return;
		}
		//字符处理完毕后开始转换，采用前后两部分分别转换
		part = String(Num).split(".");
		newchar = "";
		//小数点前进行转化
		for(i = part[0].length - 1; i >= 0; i--) {
			if(part[0].length > 10) {
				//alert("位数过大，无法计算");
				return "";
			} //若数量超过拾亿单位，提示
			tmpnewchar = ""
			perchar = part[0].charAt(i);
			switch(perchar) {
				case "0":
					tmpnewchar = "零" + tmpnewchar;
					break;
				case "1":
					tmpnewchar = "一" + tmpnewchar;
					break;
				case "2":
					tmpnewchar = "二" + tmpnewchar;
					break;
				case "3":
					tmpnewchar = "三" + tmpnewchar;
					break;
				case "4":
					tmpnewchar = "四" + tmpnewchar;
					break;
				case "5":
					tmpnewchar = "五" + tmpnewchar;
					break;
				case "6":
					tmpnewchar = "六" + tmpnewchar;
					break;
				case "7":
					tmpnewchar = "七" + tmpnewchar;
					break;
				case "8":
					tmpnewchar = "八" + tmpnewchar;
					break;
				case "9":
					tmpnewchar = "九" + tmpnewchar;
					break;
			}
			switch(part[0].length - i - 1) {
				case 0:
					tmpnewchar = tmpnewchar;
					break;
				case 1:
					if(perchar != 0) tmpnewchar = tmpnewchar + "十";
					break;
				case 2:
					if(perchar != 0) tmpnewchar = tmpnewchar + "百";
					break;
				case 3:
					if(perchar != 0) tmpnewchar = tmpnewchar + "千";
					break;
				case 4:
					tmpnewchar = tmpnewchar + "万";
					break;
				case 5:
					if(perchar != 0) tmpnewchar = tmpnewchar + "十";
					break;
				case 6:
					if(perchar != 0) tmpnewchar = tmpnewchar + "百";
					break;
				case 7:
					if(perchar != 0) tmpnewchar = tmpnewchar + "千";
					break;
				case 8:
					tmpnewchar = tmpnewchar + "亿";
					break;
				case 9:
					tmpnewchar = tmpnewchar + "十";
					break;
			}
			newchar = tmpnewchar + newchar;
		}
		//替换所有无用汉字，直到没有此类无用的数字为止
		while(newchar.search("零零") != -1 || newchar.search("零亿") != -1 || newchar.search("亿万") != -1 || newchar.search("零万") != -1) {
			newchar = newchar.replace("零亿", "亿");
			newchar = newchar.replace("亿万", "亿");
			newchar = newchar.replace("零万", "万");
			newchar = newchar.replace("零零", "零");
		}
		//替换以“一十”开头的，为“十”
		if(newchar.indexOf("一十") == 0) {
			newchar = newchar.substr(1);
		}
		//替换以“零”结尾的，为“”
		if(newchar.lastIndexOf("零") == newchar.length - 1) {
			newchar = newchar.substr(0, newchar.length - 1);
		}
		return newchar;
	}

	function delHtmlTag(str) {
		var str = str.replace(/<[^>]+>/g, "").replace('&nbsp;', '').replace('&ldquo;', '').trim(); //正则去掉所有的html标记
		return str;
	}
	//格式化数字
	function number_format(number, decimals, dec_point, thousands_sep) {
		/*
		 * 参数说明：
		 * number：要格式化的数字
		 * decimals：保留几位小数
		 * dec_point：小数点符号
		 * thousands_sep：千分位符号
		 * */
		number = (number + '').replace(/[^0-9+-Ee.]/g, '');
		var n = !isFinite(+number) ? 0 : +number,
			prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
			sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
			dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
			s = '',
			toFixedFix = function(n, prec) {
				var k = Math.pow(10, prec);
				return '' + Math.ceil(n * k) / k;
			};

		s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
		var re = /(-?\d+)(\d{3})/;
		while(re.test(s[0])) {
			s[0] = s[0].replace(re, "$1" + sep + "$2");
		}

		if((s[1] || '').length < prec) {
			s[1] = s[1] || '';
			s[1] += new Array(prec - s[1].length + 1).join('0');
		}
		return s.join(dec);
	}

	function getIp() {
		var ip = "127.0.0.1";
		var Context = plus.android.importClass("android.content.Context");
		if(mui.os.android) {
			//WifiManager
			var Context = plus.android.importClass("android.content.Context");
			var WifiManager = plus.android.importClass("android.net.wifi.WifiManager");
			var wifiManager = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);
			var WifiInfo = plus.android.importClass("android.net.wifi.WifiInfo");

			if(!wifiManager.isWifiEnabled()) { //未连接wifi
				var Enumeration = plus.android.importClass("java.util.Enumeration");
				var NetworkInterface = plus.android.importClass("java.net.NetworkInterface");
				var Inet4Address = plus.android.importClass("java.net.Inet4Address");
				var en = NetworkInterface.getNetworkInterfaces();
				while(plus.android.invoke(en, "hasMoreElements")) {
					var ni = plus.android.invoke(en, "nextElement");
					var interfaceName = ni.getDisplayName();
					//console.log("tag", "网络名字" + interfaceName);
					var enumIpAddr = plus.android.invoke(ni, "getInetAddresses")
					while(plus.android.invoke(enumIpAddr, "hasMoreElements")) {
						var inetAddress = plus.android.invoke(enumIpAddr, "nextElement");
						if(!plus.android.invoke(inetAddress, "isLoopbackAddress") && inetAddress instanceof Inet4Address) {
							ip = plus.android.invoke(inetAddress, "getHostAddress");
							return ip;
						}
					}
				}
			} else { //连接wifi
				var wifiInfo = wifiManager.getConnectionInfo();
				ip = intToIp(wifiInfo.getIpAddress());
				var wifiInfo = wifiManager.getConnectionInfo();
				var ipAddress = wifiInfo.getIpAddress();
				ip = intToIp(ipAddress);
			}
		}
		return ip;
	}

	function intToIp(i) {
		return(i & 0xFF) + "." + ((i >> 8) & 0xFF) + "." + ((i >> 16) & 0xFF) + "." + ((i >> 24) & 0xFF);
	}

	function callPhone(phone) {
		var Intent = plus.android.importClass("android.content.Intent");           
		var Uri = plus.android.importClass("android.net.Uri");           
		var main = plus.android.runtimeMainActivity();           
		var uri = Uri.parse("tel:" + phone);           
		var call = new Intent("android.intent.action.CALL", uri);   
		main.startActivity(call);
	}

	var jcgk1str = "晋城市，古称建兴、泽州、泽州府，是山西省辖地级市，位于山西省东南部，晋豫两省接壤处，全境居于晋城盆地，总面积9490平方公里，自古为兵家必争之地，素有'河东屏翰、中原咽喉、三晋门户'的美誉。" +
		"晋城市是华夏文化发祥地之一，两万年前便留下高都遗址、塔水河、下川等人类遗址。是女娲补天、愚公移山、禹凿石门、商汤筹雨等神话发源地，高僧慧远、名将陈龟、名医王叔和、天文学家刘羲叟、李俊民、郝经、荆浩、贾鲁、陈卜、孔三传、张慎言、王国光、陈廷敬等名人故里。全市现有文物总量6767处，其中国家重点文保单位66处。包括冶底岱庙、青莲寺、崇寿寺、玉皇庙、阳阿古城、海会寺、开化寺、程颢书院、崇安寺、炎帝陵、柳氏民居以及湘峪古堡、天官王府、皇城相府、长平之战遗址群、羊头山石窟、中华名山析城山、太行至尊王莽岭等众多名胜古迹和自然遗产。 [2-5]" +
		"晋城市古为冶炼之都，有“九头十八匠”之称。是战国“阳阿古剑”产地，境内泽州铁器、兰花炭曾名扬海内 。蟒河、历山等保护区，生长有猕猴、大鲵等稀有动物，素有山西'生物资源宝库'之称。 [6-7] " +
		"晋城市是山西省中高档铸件、电力、畜牧业基地。二广、晋侯（阳翼）、陵沁、环城高速与207国道交织成网，太焦、嘉南及侯月铁路贯穿全境，拥有国家森林城市、国家园林城市等多项荣誉。";

	var jcgk21str = "黄土塬区\n晋城市六种地貌类型之一。集中于团池黄土塬区。分布在丹河上游干支流沿崖，高平盆地的外围，北起团池，南到悬壶南，东达云泉，西止原村，环高平盆地且多与之相交错，为高平宽谷的北段。本区为新生界红土、黄土堆积区，海拔800～1000米。";
	var jcgk22str = "盆地与宽谷区\n晋城市六种地貌类型之一。集中于团池黄土塬区。分布在丹河上游干支流沿崖，高平盆地的外围，北起团池，南到悬壶南，东达云泉，西止原村，环高平盆地且多与之相交错，为高平宽谷的北段。本区为新生界红土、黄土堆积区，海拔800～1000米。";
	var jcgk23str = "丘陵区\n晋城市六种地貌类型之一。集中于团池黄土塬区。分布在丹河上游干支流沿崖，高平盆地的外围，北起团池，南到悬壶南，东达云泉，西止原村，环高平盆地且多与之相交错，为高平宽谷的北段。本区为新生界红土、黄土堆积区，海拔800～1000米。";
	var jcgk24str = "中低山区\n晋城市六种地貌类型之一。集中于团池黄土塬区。分布在丹河上游干支流沿崖，高平盆地的外围，北起团池，南到悬壶南，东达云泉，西止原村，环高平盆地且多与之相交错，为高平宽谷的北段。本区为新生界红土、黄土堆积区，海拔800～1000米。";
	var jcgk25str = "中山区\n晋城市六种地貌类型之一。集中于团池黄土塬区。分布在丹河上游干支流沿崖，高平盆地的外围，北起团池，南到悬壶南，东达云泉，西止原村，环高平盆地且多与之相交错，为高平宽谷的北段。本区为新生界红土、黄土堆积区，海拔800～1000米。";
	var jcgk26str = "高中山区\n晋城市六种地貌类型之一。集中于团池黄土塬区。分布在丹河上游干支流沿崖，高平盆地的外围，北起团池，南到悬壶南，东达云泉，西止原村，环高平盆地且多与之相交错，为高平宽谷的北段。本区为新生界红土、黄土堆积区，海拔800～1000米。";

	var jcgk3str = "全市上下坚持以习近平新时代中国特色社会主义思想为指引，按照省委“一个指引、两手硬”工作思路和要求，努力践行新发展理念，结构调整深入推进，转型升级势头强劲，民生保障持续改善，经济运行的积极因素不断累积，经济增长总体平稳。" +
		"初步核算，全年全市生产总值1151.5亿元，按可比价格计算，比上年增长6.1%。其中，第一产业增加值50.7亿元，增长1.3%，占生产总值的比重为4.4%；第二产业增加值618.9亿元，增长5.1%，占生产总值的比重为53.7%；第三产业增加值481.9亿元，增长8.0%，占生产总值的比重为41.9%。第三产业中，金融保险业增加值75.2亿元，增长8.0%；交通运输、仓储和邮政业增加值85.4亿元，增长12.0%；批发和零售业增加值65.0亿元，增长3.0%；住宿和餐饮业增加值32.9亿元，增长6.4%；营利性服务业增加值50.0亿元，增长9.6%。人均地区生产总值49487元，按2017年平均汇率计算为7326美元。";

	//数组去重
	function removeDuplicatedItem(ar) {
		var ret = [];

		for(var i = 0, j = ar.length; i < j; i++) {
			if(ret.indexOf(ar[i]) === -1) {
				ret.push(ar[i]);
			}
		}

		return ret;
	}

	function appLog(content) {
		console.log(content);
	}

	function getDayZjDay(day1, day2) {
		var getDate = function(str) {
			var tempDate = new Date();
			var list = str.split("-");
			tempDate.setFullYear(list[0]);
			tempDate.setMonth(list[1] - 1);
			tempDate.setDate(list[2]);
			return tempDate;
		}
		var date1 = getDate(day1);
		var date2 = getDate(day2);
		if(date1 > date2) {
			var tempDate = date1;
			date1 = date2;
			date2 = tempDate;
		}
		date1.setDate(date1.getDate() + 1);
		var dateArr = [];
		var i = 0;
		while(!(date1.getFullYear() == date2.getFullYear() &&
				date1.getMonth() == date2.getMonth() && date1.getDate() == date2
				.getDate())) {
			var dayStr = date1.getDate().toString();
			if(dayStr.length == 1) {
				dayStr = "0" + dayStr;
			}

			var dayStrMonth = date1.getMonth().toString();
			if(dayStrMonth.length == 1) {
				dayStrMonth = "0" + (date1.getMonth() + 1);
			}
			dateArr[i] = date1.getFullYear() + "-" + dayStrMonth + "-" +
				dayStr;
			i++;
			date1.setDate(date1.getDate() + 1);
		}
		dateArr.splice(0, 0, day1)
		dateArr.push(day2);
		return dateArr;

	}

	function getHourZjHour(hour1, hour2) {
		var hourArr = [];
		hourArr.push(hour1);
		var length = parseInt(hour2) - parseInt(hour1);
		var hournew = parseInt(hour1);
		for(var i = 0; i < length; i++) {
			hournew = hournew + 1;
			if(hournew < 10) {
				hournew = "0" + hournew;
			}
			hourArr.push(hournew);
		}
		return hourArr;
	}

	function loadScript(src, callback) {
		var script = document.createElement('script'),
			head = document.getElementsByTagName('head')[0];
		script.type = 'text/javascript';
		script.charset = 'UTF-8';
		script.src = src;
		if(script.addEventListener) {
			script.addEventListener('load', function() {
				callback();
			}, false);
		} else if(script.attachEvent) {
			script.attachEvent('onreadystatechange', function() {
				var target = window.event.srcElement;
				if(target.readyState == 'loaded') {
					callback();
				}
			});
		}
		head.appendChild(script);
	}