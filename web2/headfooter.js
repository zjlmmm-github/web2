var edition = 'ihouse'//'kz'=开装,'ihouse'=iHouse3D,'suzhou'=苏州园林,'fanmei'=泛美,'banma'=斑马仓
var m_strWebService = ''
InitHead();
$(function () {

})

function InitHead() {
    var html = `<div class="container">
				<div class="row">
					<div class="col-lg-2 col-md-3 col-sm-4">
						<div class="site-logo">
							<!--<a href="index.html"><img src="assets/img/logo.png" alt=""></a> --> 
							<a href="index.html">
								<div style="top:-16px;position: absolute;">
								<p style="color:#fff;font-size:40px;font-weight:bolder;line-height:80px;">iHouse3D</p>
								</div>
							</a>

						 							
						</div>
					</div>
					
					<div class="col-lg-10 col-md-9 col-sm-8">
						<div class="header_right">
							<nav id="main-menu" class="ml-auto">
								<ul>
								  <li><a href="index.html">首页</a></li>
								  <li><a href="#features">资料中心</a>
									<ul class="menu_child" style="font-weight: bold;">
										<li><a href="apidoc.html" style="color: #000">在线接口文档</a></li>
										<!--<li><a href=".html" style="color: #000">FAQ</a></li>-->
										<li><a href="video.html" style="color: #000">功能视频</a></li>
										<li><a href="docs/docs.html" target="_blank" style="color:#ffaa10">技术资料</a></li>
										<li><a href="echarts.html" target="_blank" style="color: #000">大数据资源</a></li>
									</ul>
								  </li>
								  <li><a href="#screenshots">资源下载</a>
									<ul class="menu_child" style="font-weight: bold;">
										<li><a href="model.html" style="color: #000; "><font color="#ffaa10">免费</font>模型资源</a></li>
										<li><a href="bmp.html" style="color: #000;"><font color="#ffaa10">免费</font>贴图资源</a></li>
										<li><a href="scene.html" style="color: #000">场景资源</a></li>
										<li><a href="resources.html"  style="color:#000">第三方资源</a></li>
									</ul>
								  </li>								  
								 <li><a href="#pricing" style="color:#fff010">商务合作</a>
									<ul class="menu_child" style="font-weight: bold;">
										<li><a href="price.html" style="color:#000">产品报价</li>
										<li><a href="dev.html" style="color:#000">定制开发</a></li>
										<li><a href="agent.html" style="color:#000">招商加盟</a></li>
									</ul>
								  </li>	
								 <li><a href="#blog">关于我们</a>
									<ul class="menu_child" style="font-weight: bold;">
										<li><a href="about.html" style="color:#000">关于我们</a></li>
										<li><a href="post.html" style="color:#000">招聘职位</a></li>
										<li><a href="address.html" style="color:#000">联系我们</a></li>
									</ul>
								  </li>								 
								 <li></li>
								 <li></li>
								 <li><a href="#download" onclick="gotoInformation()">开发者中心</a></li>								  
								  <li id="_loginBtn"><a href="#contact" onclick="loginOpen()" id="loginBtn">登录/注册</a>
								  </li>
                                  <li id="_loginName" style="display: none">
                                    <a href="#contact" id="loginName"></a>
                                    <div class="menu_child" style="width: 200px;border-radius: 5px">
								    <div class="information-user"><p class="information-name" id="informationName"></p><img src="assets/img/头像.png" id="headerImg" width="30" height="30" style="border-radius: 15px;background:#ffffff;margin-top: 25px"></div>
                                <div class="information-yunbi"><span>云币:</span><span id="information-bi">0</span></div>
                                <a href="information.html"><p class="information-yunbi" style="cursor: pointer">开发者中心</p></a>
                                <!--                    <div class="information-icon"><p><span class="iconfont">&#xe661;</span>上传</p><p><span class="iconfont">&#xe626;</span><span>消息</span></p></div>-->
                                <p class="out" onclick="loginOut()">退出</p>
                                  </div>
                                    </li>
								</ul>
							</nav>
							<div id="mobile_menu">
							
</div>					
						</div>
					</div>
				</div>
			</div>`;
    $('#navigation').append(html);

    var html1 = `<div class="container">		
				<div class="row">						
					<div class="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
						<div class="footer_logo" style="margin-top:20px;">
							<h1 style="color:#fff;font-size:40px;font-weight:bolder;line-height:80px;">iHouse3D</h1>
							<p>深耕于3D虚拟现实在行业中的应用，陪伴大家一起成长，用技术创造美好未来。</p>
						</div>
						<div class="social_profile" style="margin-top:-10px;">
							<ul>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-instagram"></i></a></li>
								<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li><a href="#"><i class="fa fa-youtube"></i></a></li>
							</ul>
						</div>							
					</div><!--- END COL -->						
					<div class="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
						<div class="single_footer" style="margin-top:20px;">
							<h4>公司</h4>
							<ul>
								<li><a href="about.html">关于我们</a></li>
								<li><a href="post.html">招聘职位</a></li>
								<li><a href="address.html">联系我们</a></li>								
							</ul>
						</div>
					</div><!--- END COL -->	
					<div class="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset="0">
						<div class="single_footer single_footer_address" style="margin-top:20px;">
							<h4>微信公众号</h4>
							<ul>
								<li><img src="assets/img/公众号.jpg" width="140"></li>						
							</ul>
						</div>
					</div><!--- END COL -->
					<div class="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s" data-wow-offset="0">
						<div class="single_footer single_footer_address" style="margin-top:20px;">
							<h4>杭州浩思云科技有限公司</h4>
							<p>公司地址: 杭州市江干区同协路1279号西子智慧产业园14号楼505室</p>
							<p>联系电话: 13123910766</p>
							<p>邮件: 754452577@qq.com</p>
							<p></p>
						</div>
					</div>
				</div>				
			</div>`;
    $('.footer-top').append(html1);

    var html2 = `<div class="container">
				<div class="row">					
					<div class="col-lg-12 col-sm-12 col-xs-12 text-center">
						<div class="single_footer">
							<p class="copyright">COPYRIGHT © 2017-2021 杭州浩思云科技有限公司技术支持 WWW.IHOUSE3D.COM 版权所有| <a
							href="https://beian.miit.gov.cn/" target="_blank" class="beianhao">浙ICP备17034442号-1</a></p>
						</div>
					</div>				
				</div>			
			</div>`;
    $('.footer-top').append(html2);
}

$(function () {
    $('.login_heager span').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        let int = $(this).index();
        if (int == 0) {
            $('.login_1').show();
            $('.login_2').hide();
        } else if (int == 1) {
            $('.login_1').hide();
            $('.login_2').show();
        }
    });
});

function loginOpen() {
    $('#login').show();
    linkTO = ''
}
var load_WebService = ''
login_cont();
function login_cont() {
    if (edition === 'kz') {
        m_strWebService = 'http://3d.kaizhuang.com/'
        load_WebService = 'http://3d.kaizhuang.com:'
    } else if (edition === 'ihouse') {
        m_strWebService = 'http://www.ihouse3d.com.cn/'
        load_WebService = 'http://www.ihouse3d.com.cn:'
    } else if (edition === 'suzhou') {
        m_strWebService = 'http://192.168.3.66/'
        load_WebService = 'http://192.168.3.66:'
    } else if (edition === 'fanmei') {
        m_strWebService = 'http://www.gzfanmei.cn/'
        load_WebService = 'http://www.gzfanmei.cn:'
    }else if (edition === 'banma'){
        m_strWebService = 'http://121.196.209.132/'
        load_WebService = 'http://121.196.209.132:'
    }
    let html
    if (edition === 'ihouse') {
        console.log(1)
        html = `<div id="sn-qq" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="" style=" width:0px;">
            <div class="modal-body" style="height: 0px;">
                <iframe height="100%" width="100%" frameBorder="0" style="outline: none;"></iframe>
            </div>
        </div>
    </div>
</div>
<div class="login-bg" id="login">
			    <div class="login-box">
			        <img src="assets/img/11.jpg" class="login-img">
			        <div>
			            <div class="close-box">
			                <div class="close" onclick="loginClose()"></div>
			            </div>
			            <div id="idLogin">
			                <div class="login_heager">
			                    <span class="login-text active">登录</span>
			                    <span class="login-text">用户注册</span>
			                </div>
			                <div class="login_1">
			                    <input type="text" class="id-input" autocomplete="off" required="required" placeholder="输入手机号/邮箱" id="name">
			                    <input type="password" class="id-input" autocomplete="off" required="required" placeholder="输入密码"
			                           id="password">
			                           <p style="margin-left: 76px;font-size: 12px;color:red;margin-top: 5px">初始密码:123456</p>
			                    <p class="login-btn" onclick="handleLoginClick()">登录</p>
			                </div>
			                <div class="login_2" style="display: none;">
			                    <input type="text" class="id-input" autocomplete="off" required="required" placeholder="请输入手机号" id="phone">
			                    <div class="input-cont">  
			                        <input type="text" class="id-input" autocomplete="off" required="required" placeholder="输入验证码"
			                               id="verification">
			                        <span class="verificationCode-btn" onclick="getPhoneNum(this)">获取验证码</span>
			                    </div>
			                    <p style="margin-left: 76px;font-size: 12px;color:red;margin-top: 5px">初始密码:123456</p>
			                    <p class="login-btn" onclick="verificationCodeLoginClick()">登录</p>
			                </div>  
			            </div>
			            <div id="wx-qrcode" style="display: none;margin-left: 120px"></div>
			            <div id="loginBtn-Box">
			                <p class="other-title">第三方登录</p>
			                <div class="other-box">
			                    <div class="wx" onclick="weChat()"></div>
			                    <div class="qq" onclick="qqLogin()"></div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
<div class="floating_ck">
    <dl>
        <dt></dt>
        <dd class="chongzhi">
            <span onclick="gotoRecharge()">充值</span>
        </dd>
        <dd class="consult lx">
            <span>在线咨询</span>
            <div class="floating_left lx"><a
                    rel="nofollow" style="color: #ffffff">在线咨询</a>
            </div>
        </dd>
        <dd class="qrcord">
            <span>扫一扫</span>
            <div class="floating_left floating_ewm" style="height:300px;">
                <i></i>
                <p class="qrcord_p01">扫一扫<br>欢迎洽谈合作</p>
                <p class="qrcord_p02">联系电话<br><b>13123910766</b></p>
            </div>
        </dd>
        <dd class="jsjl">
        <a href="https://jq.qq.com/?_wv=1027&k=z49Ez0Dt"
                    rel="nofollow" style="color: #ffffff;line-height: 40px" target="_blank">
                    <span>技术群</span>  
            <div class="floating_left" ><a href="https://jq.qq.com/?_wv=1027&k=z49Ez0Dt"
                    rel="nofollow" style="color: #ffffff;line-height: 40px" target="_blank" class="qun">加入qq技术交流群</a>
                    <p style="color: #ffffff">群号:651290333</p>
            </div>     
</a>
             
        </dd>
        </dl>
    </div>`;

    } else if (edition === 'kz') {
        html = `<div class="login-bg" id="login">
			    <div class="login-box">
<!--			        <img src="image/11.jpg" class="login-img">-->
			        <div>
			            <div class="close-box">
			                
			            </div>
			            <div id="idLogin" style="margin-top: 45px">
			            <p style="    font-size: 24px;
    text-align: center;
  
    font-weight: bold;">开装3D云后台管理系统</p>
			                <div class="login_heager" style="margin-top: 20px;">
			                    <span class="login-text active">登录</span>
			                  
			                </div>
			                <div class="login_1">
			                    <input type="text" class="id-input" autocomplete="off" required="required" placeholder="输入手机号/邮箱" id="name" style="margin-left:167px ">
			                    <input type="password" class="id-input" autocomplete="off" required="required" placeholder="输入密码"
			                           id="password" style="margin-left:167px ">
			                    <p class="login-btn" onclick="handleLoginClick()">登录</p>
			                </div>
			            </div>
			            <div id="wx-qrcode" style="display: none;margin-left: 120px"></div>
<!--			            <div id="loginBtn-Box">-->
<!--			                <p class="other-title">第三方登录</p>-->
<!--			                <div class="other-box">-->
<!--			                    <div class="wx" onclick="weChat()"></div>-->
<!--			                    <div class="qq" onclick="qqLogin()"></div>-->
<!--			                </div>-->
<!--			            </div>-->
			        </div>
			    </div>
			</div>`;

    } else if (edition === 'fanmei') {
        html = `<div class="login-bg" id="login">
			    <div class="login-box">
			        <img src="assets/img/11.jpg" class="login-img">
			        <div>
			            <div class="close-box">
			                <div class="close" onclick="loginClose()"></div>
			            </div>
			            <div id="idLogin">
			                <div class="login_heager">
			                    <span class="login-text active">泛美实验室后台</span>
			                   
			                </div>
			                <div class="login_1">
			                    <input type="text" class="id-input" autocomplete="off" required="required" placeholder="输入手机号/邮箱" id="name">
			                    <input type="password" class="id-input" autocomplete="off" required="required" placeholder="输入密码"
			                           id="password">
			                           <p style="margin-left: 76px;font-size: 12px;color:red;margin-top: 5px">初始密码:123456</p>
			                    <p class="login-btn" onclick="handleLoginClick()">登录</p>
			                </div>
			                <div class="login_2" style="display: none;">
			                    <input type="text" class="id-input" autocomplete="off" required="required" placeholder="请输入手机号" id="phone">
			                    <div class="input-cont">  
			                        <input type="text" class="id-input" autocomplete="off" required="required" placeholder="输入验证码"
			                               id="verification">
			                        <span class="verificationCode-btn" onclick="getPhoneNum(this)">获取验证码</span>
			                    </div>
			                    <p style="margin-left: 76px;font-size: 12px;color:red;margin-top: 5px">初始密码:123456</p>
			                    <p class="login-btn" onclick="verificationCodeLoginClick()">登录</p>
			                </div>  
			            </div>
			            <div id="wx-qrcode" style="display: none;margin-left: 120px"></div>
			            <div id="loginBtn-Box" style="display: none">
			                <p class="other-title">第三方登录</p>
			                <div class="other-box">
			                    <div class="wx" onclick="weChat()"></div>
			                    <div class="qq" onclick="qqLogin()"></div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>`
    } else if (edition === 'suzhou') {
        html = `<div class="login-bg" id="login">
			    <div class="login-box">
			        <img src="assets/img/11.jpg" class="login-img">
			        <div>
			            <div class="close-box">
			                <div class="close" onclick="loginClose()"></div>
			            </div>
			            <div id="idLogin">
			                <div class="login_heager">
			                    <span class="login-text active">园林环境后台</span>
			                   
			                </div>
			                <div class="login_1">
			                    <input type="text" class="id-input" autocomplete="off" required="required" placeholder="账号" id="name">
			                    <input type="password" class="id-input" autocomplete="off" required="required" placeholder="输入密码"
			                           id="password">
			                           <p style="margin-left: 76px;font-size: 12px;color:red;margin-top: 5px">初始密码:123456</p>
			                    <p class="login-btn" onclick="handleLoginClick()">登录</p>
			                </div>
			                <div class="login_2" style="display: none;">
			                    <input type="text" class="id-input" autocomplete="off" required="required" placeholder="请输入手机号" id="phone">
			                    <div class="input-cont">  
			                        <input type="text" class="id-input" autocomplete="off" required="required" placeholder="输入验证码"
			                               id="verification">
			                        <span class="verificationCode-btn" onclick="getPhoneNum(this)">获取验证码</span>
			                    </div>
			                    <p style="margin-left: 76px;font-size: 12px;color:red;margin-top: 5px">初始密码:123456</p>
			                    <p class="login-btn" onclick="verificationCodeLoginClick()">登录</p>
			                </div>  
			            </div>
			            <div id="wx-qrcode" style="display: none;margin-left: 120px"></div>
			            <div id="loginBtn-Box" style="display: none">
			                <p class="other-title">第三方登录</p>
			                <div class="other-box">
			                    <div class="wx" onclick="weChat()"></div>
			                    <div class="qq" onclick="qqLogin()"></div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>`
    }else if (edition==='banma'){
        html = `<div class="login-bg" id="login">
			    <div class="login-box">
			        <img src="assets/img/11.jpg" class="login-img">
			        <div>
			            <div class="close-box">
			                <div class="close" onclick="loginClose()"></div>
			            </div>
			            <div id="idLogin">
			                <div class="login_heager">
			                    <span class="login-text active">斑马仓后台</span>
			                   
			                </div>
			                <div class="login_1">
			                    <input type="text" class="id-input" autocomplete="off" required="required" placeholder="账号" id="name">
			                    <input type="password" class="id-input" autocomplete="off" required="required" placeholder="输入密码"
			                           id="password">
			                           <p style="margin-left: 76px;font-size: 12px;color:red;margin-top: 5px">初始密码:123456</p>
			                    <p class="login-btn" onclick="handleLoginClick()">登录</p>
			                </div>
			                <div class="login_2" style="display: none;">
			                    <input type="text" class="id-input" autocomplete="off" required="required" placeholder="请输入手机号" id="phone">
			                    <div class="input-cont">  
			                        <input type="text" class="id-input" autocomplete="off" required="required" placeholder="输入验证码"
			                               id="verification">
			                        <span class="verificationCode-btn" onclick="getPhoneNum(this)">获取验证码</span>
			                    </div>
			                    <p style="margin-left: 76px;font-size: 12px;color:red;margin-top: 5px">初始密码:123456</p>
			                    <p class="login-btn" onclick="verificationCodeLoginClick()">登录</p>
			                </div>  
			            </div>
			            <div id="wx-qrcode" style="display: none;margin-left: 120px"></div>
			            <div id="loginBtn-Box" style="display: none">
			                <p class="other-title">第三方登录</p>
			                <div class="other-box">
			                    <div class="wx" onclick="weChat()"></div>
			                    <div class="qq" onclick="qqLogin()"></div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>`
    }
    $('body').append(html);
}

function verificationCodeLoginClick() {
    let tcode = document.getElementById('verification').value
    if (phoneNum === '' || tcode === '') {
        alert('请输入手机号或者验证码！')
    } else {
        if (tcode !== smsCode) {
            alert('验证码错误！')
        } else {
            let password = "123456"
            let authcode = ''
            let ip = ''
            CreateUserAccount(phoneNum, phoneNum, password, authcode, ip, phoneNum)
        }
    }
}

var phoneNum = ''
var firstTime = 60
var smsCode = ''

function getPhoneNum(obj) {
    let int_phone = $('#phone').val(), verification_int = $('#verification').val();
    if (!(/^1[3456789]\d{9}$/.test(int_phone))) {
        alert("手机号码有误，请重填");
        $('#phone').val('');
        return false;
    }
    phoneNum = document.getElementById('phone').value
    $.ajax({
        type: 'POST',
        async: false,
        url: m_strWebService + 'PhoneRegister.asmx/GetSMSCode',
        data: {
            PhoneNumber: phoneNum
        },
        success: function (data) {
            data = JSON.parse(data)
            if (data.code === '1') {
                smsCode = data.smscode
                let changeFun = setInterval(function () {
                    if (firstTime > 0) {
                        obj.innerHTML = firstTime + '秒后可获取'
                        firstTime = firstTime - 1
                    } else {
                        obj.innerHTML = '获取验证码'
                        firstTime = 60
                        clearInterval(changeFun)
                    }
                    console.log(firstTime)
                }, 1000)
            }
        }
    })
}


function CreateUserAccount(userID, userName, userPassword, authcode, loginIP, phoneNum) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', m_strWebService + 'service1.asmx', true);
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
        '  <soap12:Body>' +
        '    <AutoLogin_SJS xmlns="http://tempuri.org/">' +
        '      <strUserAccount>' + userID + '</strUserAccount>' +
        '      <strUserName>' + encodeURIComponent(userName) + '</strUserName>' +
        '      <strPSW>' + userPassword + '</strPSW>' +
        '      <strAuthcode>' + authcode + '</strAuthcode>' +
        '      <strIP>' + loginIP + '</strIP>' +
        '      <strPhoneNumber>' + phoneNum + '</strPhoneNumber>' +
        '    </AutoLogin_SJS>' +
        '  </soap12:Body>' +
        '</soap12:Envelope>';

    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                var strRes = xmlhttp.responseXML.getElementsByTagName("soap:Body")[0].childNodes[0].childNodes[0].textContent
                let arrRes = strRes.split('~');
                if (arrRes[0] !== '1') {
                    if (arrRes[0] === '0') {
                        alert('创建失败!')
                    } else if (arrRes[0] === '-1') {
                        alert('该手机号已注册,请用手机号直接登录！')
                    }
                } else {
                    $.cookie('ut', arrRes[3], {expires: 12})
                    $.cookie('gsID', arrRes[5], {expires: 12})
                    $.cookie('name', arrRes[1], {expires: 12})
                    $.cookie('useid', arrRes[1], {expires: 12})
                    $.cookie('passWord', userPassword, {expires: 12})
                    // document.cookie = 'ut=' + arrRes[3]
                    // document.cookie = 'gsID=' + arrRes[5]
                    // document.cookie = 'name=' + arrRes[1]
                    // document.cookie = 'useid=' + arrRes[1]
                    // document.cookie = 'passWord=' + userPassword
                    location.reload()
                }
            }
        }
    }
}

function loginClose() {
    document.getElementById('login').style.display = 'none'
    document.getElementById('idLogin').style.display = 'block'
    document.getElementById('loginBtn-Box').style.display = 'block'
    document.getElementById('wx-qrcode').style.display = 'none'
}

function GetRequest() {
    var url = document.cookie;
    var theRequest = {};
    var strs = url.split(";");
    for (var i = 0; i < strs.length; i++) {
        strs[i] = strs[i].replace(" ", "")
        theRequest[strs[i].split("=")[0].substring(0, 5)] = strs[i].split("=")[1];
    }

    return theRequest;
}

var cookie = GetRequest()
var name = cookie.name
var useId = cookie.useId

function load() {
    if (document.getElementById('loginName') !== null) {

        let link = location.href
        link = link.split('/')
        link = link[link.length - 1]
        link = link.split('?')[0]
        if (link !== 'information.html') {
            $('head').append('<script> var _hmt = _hmt || [];\n' +
                '    (function() {\n' +
                '        var hm = document.createElement("script");\n' +
                '    hm.src = "https://hm.baidu.com/hm.js?e1b014acd7cf1f9633da67f74c9a99b4";\n' +
                '    var s = document.getElementsByTagName("script")[0];\n' +
                '    s.parentNode.insertBefore(hm, s); })();\n' +
                '    </script>')
        }
        if (name !== 'undefined') {
            document.getElementById('loginName').innerHTML = name
            document.getElementById('informationName').innerHTML = name
            let payData = {
                type: 2,
                user_account: name
            }
            console.log(cookie.pho)
            if (cookie.pho !== undefined) {
                payData.user_account = cookie.pho
            }
            $.ajax({
                type: 'POST',
                url: m_strWebService + 'PayWebService.asmx/Payment',
                dataType: 'json',
                data: {
                    PayData: JSON.stringify(payData)
                },
                success: function (data) {
                    // console.log(data)
                    document.getElementById('information-bi').innerHTML = data.count
                    $('#_loginName').hover(function () {
                        $.ajax({
                            type: 'POST',
                            url: m_strWebService + 'PayWebService.asmx/Payment',
                            dataType: 'json',
                            data: {
                                PayData: JSON.stringify(payData)
                            },
                            success: function (data) {
                                // console.log(data)
                                document.getElementById('information-bi').innerHTML = data.count
                            }
                        })
                    })
                }
            })
            $('#_loginName').show()
            $('#_loginBtn').hide()
            if (useId !== undefined) {
                name = useId
            }
        }
    }
}

load()

function handleLoginClick() {
    name = document.getElementById('name').value
    passWord = document.getElementById('password').value

    let password = document.getElementById('password').value
    let code = getRadomNum(6)
    let xmlhttp = new XMLHttpRequest();
    let ip = ''
    xmlhttp.open('POST', m_strWebService + 'service1.asmx', true);
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
        '  <soap12:Body>' +
        '    <Login xmlns="http://tempuri.org/">' +
        '      <strName>' + name + '</strName>' +
        '      <strPSW>' + password + '</strPSW>' +
        '      <strAuthcode>' + code + '</strAuthcode>' +
        '      <strIP>' + ip + '</strIP>' +
        '    </Login>' +
        '  </soap12:Body>' +
        '</soap12:Envelope>';

    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);

    xmlhttp.onreadystatechange = function () {
        console.log(1)
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                // console.log(xmlhttp.responseXML);

                var value = xmlhttp.responseXML.getElementsByTagName("soap:Body")[0].childNodes[0].childNodes[0].textContent
                // console.log(value.slice(0,1))
                let txt = value.split('~')
                if (value.slice(0, 1) === '1') {
                    let thisTime = txt[7]
                    let year = new Date().getFullYear(); //得到年份
                    let month = new Date().getMonth() + 1;//得到月份
                    let date = new Date().getDate();//得到日期
                    let time = year + '-' + month + '-' + date
                    let duibi = timeDis(thisTime, time)
                    if (duibi === 'false') {
                        let companyId = txt[5]
                        // console.log(txt)
                        // document.cookie = 'name=' + name
                        $.cookie('name', name, {expires: 12})
                        $.cookie('passWord', passWord, {expires: 12})
                        $.cookie('gsID', companyId, {expires: 12})
                        $.cookie('fold', txt[2], {expires: 12})
                        $.cookie('ut', txt[9], {expires: 12})
                        $.cookie('uid', txt[8], {expires: 12})
                        // document.cookie = 'passWord=' + passWord
                        // document.cookie = 'gsID=' + companyId
                        // document.cookie = 'fold=' + txt[2]
                        // document.cookie = 'ut=' + txt[9]
                        // document.cookie = 'uid=' + txt[8]
                        location.reload()
                    } else {
                        alert('账号已到期！')
                    }


                } else {
                    alert('账号或者密码错误！')
                }


            }
        }
    }

}

function timeDis(a, b) {
    var arr = a.split("-");
    var starttime = new Date(arr[0], arr[1], arr[2]);
    var starttimes = starttime.getTime();
    var arrs = b.split("-");
    var endTime = new Date(arrs[0], arrs[1], arrs[2]);
    var endTimes = endTime.getTime();
    // 进行日期比较
    if (endTimes >= starttimes) {
        let flag = "true";
        return flag;
    } else {
        let flag = "false";
        return flag;
    }
}

function getRadomNum(capacity) {
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var res = "";
    for (var i = 0; i < capacity; i++) {
        var id = Math.ceil(Math.random() * chars.length);
        res += chars[id];
    }
    return res;
}

function weChat() {
    document.getElementById('idLogin').style.display = 'none'
    document.getElementById('loginBtn-Box').style.display = 'none'
    document.getElementById('wx-qrcode').style.display = 'block'
    thirdLogin.wx("wx-qrcode");
}

function qqLogin() {
    document.getElementById('idLogin').style.display = 'none'
    document.getElementById('loginBtn-Box').style.display = 'none'
    var url = thirdLogin.qq();
    $("#sn-qq iframe").attr("src", url);
}

function gotoInformation() {
    if (name !== 'undefined') {
        location.href = 'information.html'
    } else {
        loginOpen()
    }
}

function loginOut() {
    clearAllCookie()
    let url = location.href
    let txt = url.split('/')
    txt = txt[txt.length - 1]
    txt = txt.split('?')[0]
    console.log(txt)
    if (txt === 'information.html' || txt === '_information.html') {
        location.href = 'index.html'
    } else {
        location.reload()
    }
}

function clearAllCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
}

function gotoRecharge() {
    if (name !== 'undefined') {
        window.location.href = 'information.html?type=recharge'
    } else {
        document.getElementById('login').style.display = 'block'
    }
}

function gotoQj() {
    if (name === 'undefined') {
        document.getElementById('login').style.display = 'block'
    } else {
        window.open('http://www.ihouse3d.com.cn/h5/Panoramagram/index.html?username=' + name)
    }
}

$(function () {
    $('.lx').on('click', function () {
        if ($('#nb_invite_ok').length > 0) {
            $('#nb_invite_ok').click();
        }
    })
})

function goTo3D() {
    //window.open('http://www.ihouse3d.com.cn/h5/')
    let cookie = GetRequest();
    if (cookie.name === undefined || cookie.name === null || cookie.name === '') {
        // window.open('http://www.ihouse3d.com.cn/h5/index.html')
        loginOpen()
    } else {
        let userName = cookie.name;
        let timeStamp = Date.parse(new Date());
        timeStamp = parseInt(timeStamp) / 1000;
        let random = timeStamp; //随机数
        let encodeData = `auth=${random}&timestamp=${timeStamp}&userid=${userName}&username=${userName}&key=PkRp3lrUAyL95Ku7FHzYvFA92LRugz0tFqrquFgzZQrHqZvFZpB2qqz`;
        let singData = hex_md5(encodeData).toLowerCase();

        window.open(`http://www.ihouse3d.com.cn/h5/index.html?auth=${random}&timestamp=${timeStamp}&userid=${userName}&username=${userName}&sign=${singData}`);
    }
}

addScript('assets/js/jquery.cookie.js')

function addScript(url) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(script);
}