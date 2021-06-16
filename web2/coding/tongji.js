$(function(){

function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function getUrl(){
	var url = window.location.href;
	return url;
}
function guid() {
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
function setCookie(key,value,expires){
	var ddate=new Date();
	ddate.setDate(ddate.getDate()+expires)
	document.cookie=key+'='+value+';expires='+ddate;
}
function getCookie(name){
	var arrstr2 = document.cookie.split('; ')
	for(var i=0;i<arrstr2.length;i++){
		var arr2=arrstr2[i].split('=');
		if(arr2[0]==name){
			return arr2[1]
	    }
	}
	return ''
}
function loadPage(){
	if(getCookie('userid')==''){
		var userid = guid();
		setCookie('userid',userid,30)
		return userid;

	}else{
		var userid = getCookie('userid');
		return userid;
	}
}
function loadurl(){
	if(getCookie('url')==''){
		var urltext = getUrl();
		setCookie('url',urltext,30)
		return urltext;
	}else{
		var urltext = getCookie('url');
		return urltext;
	}
}
	var xiangmuming = "3D云设计定制开发";
	var userid  = loadPage();
	//alert(userid);
	var url = loadurl();
	var iptext = $('#ip').val();
	var chengshi = $('#city').val();
	//alert(url);
	var referrer = document.referrer;
	$.ajax({
		type:'POST',
		url:'fangke.php',
		data:{userid:userid,url:url,referrer:referrer,xiangmuming:xiangmuming,ip:iptext,chengshi:chengshi},
		success:function(data){
			//alert(data);
		},
		error:function(){
			//alert('保存访客数据到数据库失败！')
		},
	})
	// 首页申请按钮时的事件
	$('.liuyan-btn').click(function(){
		var anniuming = $(this).attr('name');
		//var number = $('.cp-top a').index(this);
		//var cpming = $('#indexcp' + number).text();
		$.ajax({
			type:'POST',
			url:'maidian.php',
			data:{userid:userid,pageurl:url,anniuming:anniuming,xiangmuming:xiangmuming},
			success:function(data){
				//alert(data);
			},
			error:function(){
				//alert('保存访客数据到数据库失败！')
			},
		})
	})
	// 点击产品页时的事件；
/*	$('.cpshenqing').click(function(){
		var chanpinminger = $('#chanpinming').text();
		//alert(chanpinminger);
		$.ajax({
			type:'POST',
			url:'zhuce.php',
			data:{userid:userid,chanpinming:chanpinminger},
		})
	})
	
	// 第一版页面，第二版本埋点
	$('.cp-top a').click(function(){
		var cpming = $(this).attr('name');
		$.ajax({
			type:'POST',
			url:'zhuce.php',
			data:{userid:userid,chanpinming:cpming},
		})
	})
*/
})
