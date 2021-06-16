var app=new Vue({
	el:'#app',
	data(){
		return{
			left_options: [{
	          value: '选项1',
	          label: '技术交流QQ群: 651290333'
	        }],
	        left_value: '选项1',
	        data_1:[{
        	        	name:'装修视图',
        	        	data:[{
        	        		name:'平面视图',
        	        		data:['墙体定位','平面布置','家具尺寸']
        	        	},{
        	        		name:'立面视图',
        	        		data:['客餐厅立面1-A','客餐厅立面1-B','客餐厅立面1-C']
        	        	}]
        	        },{
        	        	name:'安装说明',
    	        		data:['强电定位','弱电定位','强电管路施工-顶','强电管路施工-地','弱电管路施工-顶','弱电管路施工-地','水路施工','灯控关系']
        	        }]
		}
	},
	methods:{

	}
});


$(function(){
	$('.kz_three>.three_cneter').css({
		'overflow':'hidden',
		'height':'35px'
	});
	$('.kz_three>.three_cneter>.three_cneter_header>i').css({'transform': 'rotate(-90deg)'});

	$('.kz_three>.three_cneter').eq(0).removeAttr('style');
	$('.kz_three>.three_cneter').eq(0).children('div.three_cneter_header').children('i').removeAttr('style');

	$('.three_cneter_header').click(function(){
		let _height=$(this).parent().height();
		if (_height==35) {
			$(this).children('i').eq(0).removeAttr('style');
			$(this).parent().removeAttr('style');
		}else{
			$(this).children('i').eq(0).css('transform','rotate(-90deg)');
			$(this).parent().css({
				'overflow':'hidden',
				'height':'35px'
			});
		}
	});
	
	$('.three_cneter_item').click(function(){
		$('.kz_three .three_cneter_item').removeClass('active');
		$(this).addClass('active');
		
	});
});


init();
var m_strHttp;
function init() {	
	// 创建墙体立面
	AddFloorplan();
}

function AddFloorplan()
{
	var tempNode =`	<div class="three_cneter_item" onclick="OnShow(-1)">
						<i class="el-icon-link"></i><span >平面布置</span>
						<div class="three_setItem">
							<i class="el-icon-document-copy"></i>
							<i class="el-icon-delete"></i>
						</div>
					</div>`;	
	$('#mFloor').append(tempNode);	
}


function OnShow(strHttp, bMode)
{
	if( bMode == 1)
	{
		$('.canvas').attr('src','https://'+strHttp);	
		m_strHttp = 'https://'+strHttp;			
		return;
	}
	$('.canvas').attr('src','http://'+strHttp);	
	m_strHttp = 'http://'+strHttp;	
}

function OpenWindow()
{
	window.open(m_strHttp)
};