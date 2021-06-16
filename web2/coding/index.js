$(function(){
	$('.left-jiazhuang').css('background','#366DF9');
	$('.left-jiazhuang').css('color','white');
	$('.right-jiaju').css('display','none');
	$('.right-jiancai').css('display','none');
	$('.right-ruodian').css('display','none');
	$('.right-shiyanshi').css('display','none');
	$('.right-gengduo').css('display','none');
	$('#shipin-li-1 a').css('color','white')
	$('.shipin-li-1').css('background','white');
	$('.shipin-li-1').css('color','black');
	$('.shipin-2').css('display','none');
	$('.shipin-3').css('display','none');
	$('.shipin-4').css('display','none');
	$('.shipin-5').css('display','none');
    //alert("打开了js");
    $('.zaixiansheji').mouseenter(function(){
    	$('.jieshao').css('background-image','url(images/hydz.jpg)');
	    })
    $('.jisuxuanran').mouseenter(function(){
    	$('.jieshao').css('background-image','url(images/jsxr.jpg)');
    })
    $('.zhenshixiaoguo').mouseenter(function(){
    	$('.jieshao').css('background-image','url(images/zssp.jpg)');
    })
    $('.cailiaoguanli').mouseenter(function(){
    	$('.jieshao').css('background-image','url(images/clgl.jpg)');
    })
    $('.dingzhisheji').mouseenter(function(){
    	$('.jieshao').css('background-image','url(images/zxsj.jpg)');
    })
    $('.quanjing').mouseenter(function(){
    	$('.jieshao').css('background-image','url(images/qjxr.jpg)');
    })
    $('.VRtiyan').mouseenter(function(){
    	$('.jieshao').css('background-image','url(images/vrimg.jpg)');
    })
    $('.gengduogongneng').mouseenter(function(){
    	$('.jieshao').css('background-image','url(images/jsxr.jpg)');
    })
    $('.left-gengduo').mouseenter(function(){
    	$(this).css('background','#366DF9');
    	$(this).css('color','white');
    	$('.right-gengduo').css('display','block');
    	$('.right-jiaju').css('display','none');
    	$('.right-jiancai').css('display','none');
    	$('.right-shiyanshi').css('display','none');
    	$('.right-jiazhuang').css('display','none');
    	$('.right-ruodian').css('display','none');
    	$('.left-jiazhuang').css('background','white');
    	$('.left-jiancai').css('background','white');
    	$('.left-jiaju').css('background','white');
    	$('.left-shiyanshi').css('background','white');
    	$('.left-ruodian').css('background','white');
    	$('.left-jiazhuang').css('color','black');
    	$('.left-jiancai').css('color','black');
    	$('.left-jiaju').css('color','black');
    	$('.left-shiyanshi').css('color','black');
    	$('.left-ruodian').css('color','black');
    })
    $('.left-jiaju').mouseenter(function(){
    	$(this).css('background','#366DF9');
    	$(this).css('color','white');
    	$('.right-gengduo').css('display','none');
    	$('.right-jiaju').css('display','block');
    	$('.right-jiancai').css('display','none');
    	$('.right-shiyanshi').css('display','none');
    	$('.right-jiazhuang').css('display','none');
    	$('.right-ruodian').css('display','none');

    	$('.left-gengduo').css('background','white');
    	$('.left-jiancai').css('background','white');
    	$('.left-shiyanshi').css('background','white');
    	$('.left-jiazhuang').css('background','white');
    	$('.left-ruodian').css('background','white');
    	$('.left-gengduo').css('color','black');
    	$('.left-jiancai').css('color','black');
    	$('.left-shiyanshi').css('color','black');
    	$('.left-jiazhuang').css('color','black');
    	$('.left-ruodian').css('color','black');
    })
    $('.left-shiyanshi').mouseenter(function(){
    	$(this).css('background','#366DF9');
    	$(this).css('color','white');
    	$('.right-gengduo').css('display','none');
    	$('.right-jiaju').css('display','none');
    	$('.right-jiancai').css('display','none');
    	$('.right-shiyanshi').css('display','block');
    	$('.right-jiazhuang').css('display','none');
    	$('.right-ruodian').css('display','none');
    	$('.left-gengduo').css('background','white');
    	$('.left-jiancai').css('background','white');
    	$('.left-jiaju').css('background','white');
    	$('.left-jiazhuang').css('background','white');
    	$('.left-ruodian').css('background','white');
    	$('.left-gengduo').css('color','black');
    	$('.left-jiancai').css('color','black');
    	$('.left-jiaju').css('color','black');
    	$('.left-jiazhuang').css('color','black');
    	$('.left-ruodian').css('color','black');
    })
    $('.left-jiazhuang').mouseenter(function(){
    	$(this).css('background','#366DF9');
    	$(this).css('color','white');
    	$('.right-gengduo').css('display','none');
    	$('.right-jiaju').css('display','none');
    	$('.right-jiancai').css('display','none');
    	$('.right-shiyanshi').css('display','none');
    	$('.right-jiazhuang').css('display','block');
    	$('.right-ruodian').css('display','none');

    	$('.left-gengduo').css('background','white');
    	$('.left-jiancai').css('background','white');
    	$('.left-jiaju').css('background','white');
    	$('.left-shiyanshi').css('background','white');
    	$('.left-ruodian').css('background','white');
    	$('.left-gengduo').css('color','black');
    	$('.left-jiancai').css('color','black');
    	$('.left-jiaju').css('color','black');
    	$('.left-shiyanshi').css('color','black');
    	$('.left-ruodian').css('color','black');
    })
    $('.left-jiancai').mouseenter(function(){
    	$(this).css('background','#366DF9');
    	$(this).css('color','white');
    	$('.right-gengduo').css('display','none');
    	$('.right-jiaju').css('display','none');
    	$('.right-jiancai').css('display','block');
    	$('.right-shiyanshi').css('display','none');
    	$('.right-jiazhuang').css('display','none');
    	$('.right-ruodian').css('display','none');

    	$('.left-gengduo').css('background','white');
    	$('.left-jiazhuang').css('background','white');
    	$('.left-jiaju').css('background','white');
    	$('.left-shiyanshi').css('background','white');
    	$('.left-ruodian').css('background','white');
    	$('.left-gengduo').css('color','black');
    	$('.left-jiazhuang').css('color','black');
    	$('.left-jiaju').css('color','black');
    	$('.left-shiyanshi').css('color','black');
    	$('.left-ruodian').css('color','black');
    })
    $('.left-ruodian').mouseenter(function(){
    	$(this).css('background','#366DF9');
    	$(this).css('color','white');
    	$('.right-gengduo').css('display','none');
    	$('.right-jiaju').css('display','none');
    	$('.right-jiancai').css('display','none');
    	$('.right-shiyanshi').css('display','none');
    	$('.right-jiazhuang').css('display','none');
    	$('.right-ruodian').css('display','block');
    	$('.left-jiazhuang').css('background','white');
    	$('.left-jiancai').css('background','white');
    	$('.left-jiaju').css('background','white');
    	$('.left-shiyanshi').css('background','white');
    	$('.left-jiancai').css('background','white');
    	$('.left-jiazhuang').css('color','black');
    	$('.left-jiancai').css('color','black');
    	$('.left-jiaju').css('color','black');
    	$('.left-shiyanshi').css('color','black');
    	$('.left-jiancai').css('color','black');
    })
    $('.tupian-a1-2').click(function(){
    	layui.use('layer', function(){
	      	var layer = layui.layer;
			layer.open({
	            type:2,  // type的5种类型，0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
	            area:['1200px','800px'],		// 显示区域大小
	            title:'3D云设计全景效果图演示',		// 弹出层的标题，
	            shade:0.6,							// 这个好像是标题背景的透明度
	            maxmin:false,						// 这里设置是否有最大最小按钮。
	            anim:1,	  // 这里设置的是弹出层出现时的动画效果，有6种，这里是默认的第1种，
	            content:'http://www.gebiw.cn/110C3/iHouse3D/iHouse.html'	// 这里表示打开的url地址。
	        })
	    })
    })
    $('.tupian-a1-1').click(function(){
    	layui.use('layer', function(){
	      	var layer = layui.layer;
			layer.open({
	            type:1,  // type的5种类型，0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
	            area:['800px','860px'],		// 显示区域大小
	            title:'3D云设计平面效果图演示，像素800*800',		// 弹出层的标题，
	            shade:0.6,							// 这个好像是标题背景的透明度
	            maxmin:false,						// 这里设置是否有最大最小按钮。
	            anim:1,	  // 这里设置的是弹出层出现时的动画效果，有6种，这里是默认的第1种，
	            content:'<div><img src="images/4-max.jpg" alt="" style="width: 800px;"></div>'	// 这里表示打开的url地址。
	        })
	    })
    })
    $('.tupian-a2-2').click(function(){
    	layui.use('layer', function(){
	      	var layer = layui.layer;
			layer.open({
	            type:2,  // type的5种类型，0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
	            area:['1200px','800px'],		// 显示区域大小
	            title:'3D云设计全景效果图演示',		// 弹出层的标题，
	            shade:0.6,							// 这个好像是标题背景的透明度
	            maxmin:false,						// 这里设置是否有最大最小按钮。
	            anim:1,	  // 这里设置的是弹出层出现时的动画效果，有6种，这里是默认的第1种，
	            content:'http://www.gebiw.cn/1685/iHouse.html'	// 这里表示打开的url地址。
	        })
	    })
    })
    $('.tupian-a2-1').click(function(){
    	layui.use('layer', function(){
	      	var layer = layui.layer;
			layer.open({
	            type:1,  // type的5种类型，0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
	            area:['800px','860px'],		// 显示区域大小
	            title:'3D云设计平面效果图演示，像素800*800',		// 弹出层的标题，
	            shade:0.6,							// 这个好像是标题背景的透明度
	            maxmin:false,						// 这里设置是否有最大最小按钮。
	            anim:1,	  // 这里设置的是弹出层出现时的动画效果，有6种，这里是默认的第1种，
	            content:'<div><img src="images/8-max.jpg" alt="" style="width: 800px;"></div>'	// 这里表示打开的url地址。
	        })
	    })
    })
    $('.tupian-a3-2').click(function(){
    	layui.use('layer', function(){
	      	var layer = layui.layer;
			layer.open({
	            type:2,  // type的5种类型，0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
	            area:['1200px','800px'],		// 显示区域大小
	            title:'3D云设计全景效果图演示',		// 弹出层的标题，
	            shade:0.6,							// 这个好像是标题背景的透明度
	            maxmin:false,						// 这里设置是否有最大最小按钮。
	            anim:1,	  // 这里设置的是弹出层出现时的动画效果，有6种，这里是默认的第1种，
	            content:'http://www.gebiw.cn/2682/ihouse.html'	// 这里表示打开的url地址。
	        })
	    })
    })
    $('.tupian-a3-1').click(function(){
    	layui.use('layer', function(){
	      	var layer = layui.layer;
			layer.open({
	            type:1,  // type的5种类型，0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
	            area:['800px','860px'],		// 显示区域大小
	            title:'3D云设计平面效果图演示，像素800*800',		// 弹出层的标题，
	            shade:0.6,							// 这个好像是标题背景的透明度
	            maxmin:false,						// 这里设置是否有最大最小按钮。
	            anim:1,	  // 这里设置的是弹出层出现时的动画效果，有6种，这里是默认的第1种，
	            content:'<div><img src="images/9-max.jpg" alt="" style="width: 800px;"></div>'	// 这里表示打开的url地址。
	        })
	    })
    })
    $('.tupian-a4-2').click(function(){
    	layui.use('layer', function(){
	      	var layer = layui.layer;
			layer.open({
	            type:2,  // type的5种类型，0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
	            area:['1200px','800px'],		// 显示区域大小
	            title:'3D云设计全景效果图演示',		// 弹出层的标题，
	            shade:0.6,							// 这个好像是标题背景的透明度
	            maxmin:false,						// 这里设置是否有最大最小按钮。
	            anim:1,	  // 这里设置的是弹出层出现时的动画效果，有6种，这里是默认的第1种，
	            content:'http://www.gebiw.cn/110C1/ihouse3d/iHouse.html'	// 这里表示打开的url地址。
	        })
	    })
    })
    $('.tupian-a4-1').click(function(){
    	layui.use('layer', function(){
	      	var layer = layui.layer;
			layer.open({
	            type:1,  // type的5种类型，0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
	            area:['800px','860px'],		// 显示区域大小
	            title:'3D云设计平面效果图演示，像素800*800',		// 弹出层的标题，
	            shade:0.6,							// 这个好像是标题背景的透明度
	            maxmin:false,						// 这里设置是否有最大最小按钮。
	            anim:1,	  // 这里设置的是弹出层出现时的动画效果，有6种，这里是默认的第1种，
	            content:'<div><img src="images/2-max.jpg" alt="" style="width: 800px;"></div>'	// 这里表示打开的url地址。
	        })
	    })
    })
    $('.tupian-a5-2').click(function(){
    	layui.use('layer', function(){
	      	var layer = layui.layer;
			layer.open({
	            type:2,  // type的5种类型，0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
	            area:['1200px','800px'],		// 显示区域大小
	            title:'3D云设计全景效果图演示',		// 弹出层的标题，
	            shade:0.6,							// 这个好像是标题背景的透明度
	            maxmin:false,						// 这里设置是否有最大最小按钮。
	            anim:1,	  // 这里设置的是弹出层出现时的动画效果，有6种，这里是默认的第1种，
	            content:'http://www.gebiw.cn/1147/ihouse.html'	// 这里表示打开的url地址。
	        })
	    })
    })
    $('.tupian-a5-1').click(function(){
    	layui.use('layer', function(){
	      	var layer = layui.layer;
			layer.open({
	            type:1,  // type的5种类型，0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
	            area:['800px','860px'],		// 显示区域大小
	            title:'3D云设计平面效果图演示，像素800*800',		// 弹出层的标题，
	            shade:0.6,							// 这个好像是标题背景的透明度
	            maxmin:false,						// 这里设置是否有最大最小按钮。
	            anim:1,	  // 这里设置的是弹出层出现时的动画效果，有6种，这里是默认的第1种，
	            content:'<div><img src="images/7-max.jpg" alt="" style="width: 800px;"></div>'	// 这里表示打开的url地址。
	        })
	    })
    })
    $('.tupian-a6-2').click(function(){
    	layui.use('layer', function(){
	      	var layer = layui.layer;
			layer.open({
	            type:2,  // type的5种类型，0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
	            area:['1200px','800px'],		// 显示区域大小
	            title:'3D云设计全景效果图演示',		// 弹出层的标题，
	            shade:0.6,							// 这个好像是标题背景的透明度
	            maxmin:false,						// 这里设置是否有最大最小按钮。
	            anim:1,	  // 这里设置的是弹出层出现时的动画效果，有6种，这里是默认的第1种，
	            content:'http://www.gebiw.cn/3695/iHouse.html'	// 这里表示打开的url地址。
	        })
	    })
    })
    $('.tupian-a6-1').click(function(){
    	layui.use('layer', function(){
	      	var layer = layui.layer;
			layer.open({
	            type:1,  // type的5种类型，0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
	            area:['800px','860px'],		// 显示区域大小
	            title:'3D云设计平面效果图演示，像素800*800',		// 弹出层的标题，
	            shade:0.6,							// 这个好像是标题背景的透明度
	            maxmin:false,						// 这里设置是否有最大最小按钮。
	            anim:1,	  // 这里设置的是弹出层出现时的动画效果，有6种，这里是默认的第1种，
	            content:'<div><img src="images/11-max.jpg" alt="" style="width: 800px;"></div>'	// 这里表示打开的url地址。
	        })
	    })
    })
    $('.women').click(function(){
    	layui.use('layer', function(){
	      	var layer = layui.layer;
			layer.open({
	            type:1,  // type的5种类型，0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
	            area:['800px','650px'],		// 显示区域大小
	            title:false,
	            shade:0.6,							// 这个好像是标题背景的透明度
	            maxmin:false,						// 这里设置是否有最大最小按钮。
	            anim:1,	  // 这里设置的是弹出层出现时的动画效果，有6种，这里是默认的第1种，
	            content:'<div><h1 style="line-height:100px;text-align:center">我们的自述</h1><p style="width:700px;margin-left:50px;text-indent: 2em;">ihouse3d是深圳市螺山电子商务有限公司是一家专业的在线3D云设计系统软件开发商，团队骨干有着16年丰富的在线3D云设计系统，Flash3D引擎，计算机图形图像开发经验，为客户提供符合客户业务需求的在线3D云设计系统，内嵌到客户方企业网站，可对接客户方在线商城,ERP,财务,物流,等信息化系统，并针对客户方技术人员提供培训等一站式服务，我们将商业与技术完美结合起来，以使我们的客户可以在快速发展的互联网家装行业领域中获得更有效的竞争力。</p><p style="width:700px;margin-left:50px;margin-top:20px;text-indent: 2em;">公司成立以来，先后为众多家装公司，家装平台，系统集成，物联网监控平台，家居工厂等类型客户提供在线3D云设计系统定制开发服务，将3D云设计系统与客户方其它信息化系统对接，实现客户方前端设计系统与后端管理系统相结合、提升客户方企业运营效率。</p><p  style="width:700px;margin-left:50px;margin-top:20px;text-indent: 2em;">我们一直秉承“只做符合客户业务需求的3D云设计系统”和“坚持原创”的核心价值观，以“为客户赢得客户”为已任，用我们的激情与智慧，勤奋与努力，帮助聚集在家居行业的家装平台，家装公司，家居工厂，以及其它需要在线3D云设计作为设计与展示工具的行业提供“完全符合客户业务需求”的3D云设计系统。</p><p  style="width:700px;margin-left:50px;margin-top:20px;text-indent: 2em;">我们坚信，中国的每一个需要在线3D云设计的行业，每一家希望打通前端设计与后端管理系统信息化，一体化的公司，都需要一个“独一无二”的在线3D云设计系统，用来了解网站平台访客，快速响应业主或客户需求，最大程度的实现前端业务系统与后端管理系统信息化，一体化。</p><h2   style="width:700px;margin-left:50px;margin-top:20px;">联系我们</h2><p  style="width:700px;margin-left:50px;margin-top:10px;">地址：深圳市宝安区百佳润商务中心</p><p  style="width:700px;margin-left:50px;margin-top:10px;">电话：18557536920（微信同号）</p></div>'	// 这里表示打开的url地址。
	        })
	    })
		})
		$('#shipin-li-1').click(function(){
			$('#shipin-li-1 a').css('color','white')
			$('#shipin-li-2 a').css('color','black')
			$('#shipin-li-3 a').css('color','black')
			$('#shipin-li-4 a').css('color','black')
			$('#shipin-li-5 a').css('color','black')
		})
		$('#shipin-li-2').click(function(){
			$('#shipin-li-1 a').css('color','black')
			$('#shipin-li-2 a').css('color','white')
			$('#shipin-li-3 a').css('color','black')
			$('#shipin-li-4 a').css('color','black')
			$('#shipin-li-5 a').css('color','black')
		})
		$('#shipin-li-3').click(function(){
			$('#shipin-li-1 a').css('color','black')
			$('#shipin-li-2 a').css('color','black')
			$('#shipin-li-3 a').css('color','white')
			$('#shipin-li-4 a').css('color','black')
			$('#shipin-li-5 a').css('color','black')
		})
		$('#shipin-li-4').click(function(){
			$('#shipin-li-1 a').css('color','black')
			$('#shipin-li-2 a').css('color','black')
			$('#shipin-li-3 a').css('color','black')
			$('#shipin-li-4 a').css('color','white')
			$('#shipin-li-5 a').css('color','black')
		})
		$('#shipin-li-5').click(function(){
			$('#shipin-li-1 a').css('color','black')
			$('#shipin-li-2 a').css('color','black')
			$('#shipin-li-3 a').css('color','black')
			$('#shipin-li-4 a').css('color','black')
			$('#shipin-li-5 a').css('color','white')
		})
    $('.right-tel1').mouseover(function(){
      $('.right-tel2').css("display","block");
   })
    $('.right-tel1').mouseout(function(){
      $('.right-tel2').css("display","none");
   	})
    function number(){
        var shoujinumber = $('.shouji').val().length;
       //alert(shoujinumber);
        if(shoujinumber != 11){
            alert("您的手机号输入有误，我们无法联系到您的哦！");
        }else{
            liuyan();
        }
    }
    function liuyan(){
        var iptext = $('#ip').val();
        var url = window.location.href;
        var anniuming = $(this).attr('name');
        var chengshi = $('#city').val();
        var chenhu = $('.chenhu').val();
        var shouji = $('.shouji').val();
        var chanpin = '定制开发3D云设计软件';
        //alert("您点击了提交按钮");
        $.ajax({
            type:'POST',
            url:'liuyan.php',
            data:{url:url,iptext:iptext,chengshi:chengshi,chenhu:chenhu,shouji:shouji,anniuming:anniuming,xiangmu:'3D云设计定制开发',chanpin:chanpin},
            success:function(data){
                alert(data);
            },
            error:function(){
                alert('保存访客数据到数据库失败！')
            },
        })
    }
    $('.top-btn').click(function(){ 
        number()
    })
    $('#demo-sq-a').mouseenter(function(){
        $('.demo-erweima').css("display","block")
    })
    $('#demo-sq-a').mouseout(function(){
        $('.demo-erweima').css("display","none")
		})
		$(".shangqiao_click").click(function(event) {
			if ($('#nb_invite_ok').length > 0) {
				$('#nb_invite_ok').click();
			}
		});
		// 留言js代码开始；
		$('.form-btn').click(function(){
			var iptext = $('#ip').val();
			var url = window.location.href;
			var anniuming = $(this).attr('name');
			var chengshi = $('#city').val();
			var gongsiming = $('.gongsiming').val();
			var shouji = $('.shouji').val();
			var chenhu = $('.chenhu').val();
			var weixin = $('.weixin').val();
			var chanpin = '定制开发3D云设计软件';
			var xuqiuxiangqing = $('#xuqiuxiangqing').val();
			//alert(gongsiming+phone+chenhu+weixin+xuqiuxiangqing);
			$.ajax({
				type:'POST',
				url:'liuyan.php',
				data:{url:url,iptext:iptext,gongsiming:gongsiming,chengshi:chengshi,chenhu:chenhu,shouji:shouji,weixin:weixin,xuqiuxiangqing:xuqiuxiangqing,anniuming:anniuming,xiangmu:'3D云设计定制开发',chanpin:chanpin},
				success:function(data){
					alert(data);
					$('.gongsiming').val('');
					$('.shouji').val('');
					$('.chenhu').val('');
					$('.weixin').val('');
					$('#xuqiuxiangqing').val('');
					layer.msg('您的定制开发需求已经提交，我们会马上安排项目经理与您联系！');
				},
				error:function(){
					alert('提交失败，请联系在线客服提交定制开发需求！')
				},
			})
		})
		// 留言 js 代码结束；
})