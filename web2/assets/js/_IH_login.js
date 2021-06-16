function loginOpen() {
    $('#login').show();
}

login_cont();

function login_cont() {
    let html = `<div class="login-bg" id="login">
			    <div class="login-box">
<!--			        <img src="image/11.jpg" class="login-img">-->
			        <div>
			            <div class="close-box">
			                
			            </div>
			            <div id="idLogin">
			            <p style="    font-size: 24px;
    text-align: center;
  
    font-weight: bold;">开装云平台管理后台</p>
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
    $('body').append(html);
}
