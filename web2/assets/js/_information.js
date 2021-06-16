var img1 = '', img2 = '', img3 = '', img4 = '', qjUrl = '', videoUrl = '', modelName = '', modelType = '', modelId = '',
    fileName = ''
var uploadFile
var linkTO
var addr = 'http://www.ihouse3d.com/'


var useId = cookie.useid
var headerImg = cookie.heade
var ut = cookie.ut
var name = cookie.name
var _pwd = cookie.passW
var payData = {
    type: 2,
    user_account: name
}

function getUrl() {
    var url = location.search;
    var theRequest = {};
    if (url.indexOf("?") !== -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest
}

var urlData = getUrl()
var type = urlData.type
var urlName = urlData.username
var pwd = base64_decode(decodeURIComponent(urlData.pwd))

function openPano() {
    window.open('http://www.ihouse3d.com.cn/h5/Panoramagram/index.html?username=' + name)
}

function setIframeHeight(iframe) {
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
    }
};

function reinitIframe() {
    var iframe = document.getElementById("3dyunWeb");
    try {
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        var height = bHeight
        if (height < dHeight) {
            height = dHeight
        }
        iframe.height = height;
    } catch (ex) {
    }
}

function getBi() {
    $.ajax({
        type: 'POST',
        url: 'http://www.ihouse3d.com.cn/PayWebService.asmx/Payment',
        dataType: 'json',
        data: {
            PayData: JSON.stringify(payData)
        },
        success: function (data) {

            document.getElementById('_biNum').innerHTML = data.count
            document.getElementById('information-bi').innerHTML = data.count
        }
    })
}

window.setInterval("reinitIframe()", 1000);
window.onload = function () {

    setIframeHeight(document.getElementById('3dyunWeb'));
    if (name === 'undefined') {
        document.cookie = 'name=' + urlName
        document.cookie = 'passWord=' + pwd
        let password = document.getElementById('password').value
        let code = '';

        //如果不是h5前端调用，需要加上随机数(前端调用后台不踢出前端登录的帐号)
        if (-1 == window.location.href.indexOf('?username=')) {
            code = getRadomNum(6);
        }

        let xmlhttp = new XMLHttpRequest();
        let ip = ''
        xmlhttp.open('POST', 'http://www.ihouse3d.com.cn/service1.asmx', true);
        var sr =
            '<?xml version="1.0" encoding="utf-8"?>' +
            '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
            '  <soap12:Body>' +
            '    <Login xmlns="http://tempuri.org/">' +
            '      <strName>' + urlName + '</strName>' +
            '      <strPSW>' + pwd + '</strPSW>' +
            '      <strAuthcode>' + code + '</strAuthcode>' +
            '      <strIP>' + ip + '</strIP>' +
            '    </Login>' +
            '  </soap12:Body>' +
            '</soap12:Envelope>';

        xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.send(sr);

        xmlhttp.onreadystatechange = function () {

            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {


                    var value = xmlhttp.responseXML.getElementsByTagName("soap:Body")[0].childNodes[0].childNodes[0].textContent
                    //
                    let txt = value.split('~')
                    let thisTime = txt[7]
                    let year = new Date().getFullYear(); //得到年份
                    let month = new Date().getMonth() + 1;//得到月份
                    let date = new Date().getDate();//得到日期
                    let time = year + '-' + month + '-' + date
                    let duibi = timeDis(thisTime, time)
                    if (duibi === 'false') {
                        let companyId = txt[5]
                        //
                        document.cookie = 'gsID=' + companyId
                        document.cookie = 'fold=' + txt[2]
                        document.cookie = 'ut=' + txt[9]
                        document.cookie = 'uid=' + txt[8]
                        if (value.slice(0, 1) === '1') {
                            location.reload()
                        } else {
                            alert('账号或者密码错误！')
                        }
                    } else {
                        alert('该账号已到期！')
                    }

                }
            }
        }
    }
    if (type === 'detail') {

    } else if (type === 'recharge') {
        $('.add-title-active').removeClass("add-title-active")
        $('#rechargeTitle').addClass('add-title-active')
        document.getElementById('3dyun').style.display = 'none'
        document.getElementById('recharge').style.display = 'block'
    }
    // if (name !== "undefined") {
    //
    //     document.getElementById('_name').innerHTML = name
    //     $.ajax({
    //         url: `http://www.ihouse3d.com.cn/service1.asmx/ExecuteQuery`,
    //         type: "post",
    //         dataType: "json",
    //         async: false,
    //         contentType: "application/x-www-form-urlencoded",
    //         data: {
    //             Database: "render",
    //             Sql: `select * from accounttype_function`
    //         },
    //         success: function (data) {
    //             if ("1" == data.code) {
    //                 let JData = JSON.parse(data.data);
    //                 let userList = []
    //                 if (true == JData.ok) {
    //                     let itemArr = JData.Table
    //                     for (let i = 0; i < itemArr.length; i++) {
    //                         let item = {
    //                             type: itemArr[i].type,
    //                             name: itemArr[i].name
    //                         }
    //                         userList.push(item)
    //                     }
    //                     let obj = userList.filter(function (ele) {
    //                         return ele.type === ut
    //                     })
    //                     if (obj.length !== 0) {
    //                         document.getElementById('ut').innerHTML = obj[0].name
    //                     } else if (ut === '11') {
    //                         document.getElementById('ut').innerHTML = '管理员'
    //                     }
    //
    //                 }
    //             } else {
    //
    //             }
    //         },
    //         complete: function (xmlHttpRequest) {
    //
    //         },
    //         error: function (err) {
    //
    //
    //         }
    //     })
    //     if (headerImg !== undefined) {
    //         document.getElementById('headerImg').src = headerImg
    //         document.getElementById('_headerImg').src = headerImg
    //     }
    // }
    if (useId !== undefined) {
        name = useId
        payData.user_account = cookie.pho
    }
    // $.ajax({
    //     type: 'POST',
    //     async: false,
    //     url: 'http://www.ihouse3d.com.cn/PayWebService.asmx/Payment',
    //     dataType: 'json',
    //     data: {
    //         PayData: JSON.stringify(payData)
    //     },
    //     success: function (data) {
    //
    //         document.getElementById('_biNum').innerHTML = data.count
    //     }
    // })
    // if (cookie.ut === '11') {
    //     // document.getElementById('rjht').style.display = 'block'
    //     // document.getElementById('bst').style.display = 'block'
    //     // document.getElementById('_bst').style.display = 'block'
    //     // document.getElementById('_bst-new').style.display = 'block'
    //     // document.getElementById('fq').style.display = 'block'
    //     // document.getElementById('fh').style.display = 'block'
    //     document.getElementById('adminBtn').style.display = 'block'
    //     // document.getElementById('adminModel').style.display = 'block'
    //     // document.getElementById('trouble').style.display = 'block'
    //     // // document.getElementById('ddcodeTitle').style.display = 'block'
    //     // document.getElementById('btn-title').style.display = 'block'
    //     // document.getElementById('dx').style.display = 'block'
    //     // document.getElementById('dy').style.display = 'block'
    //     // document.getElementById('sh').style.display = 'block'
    //     // document.getElementById('kz').style.display = 'block'
    // }


    $('#myInfor .mHeaderTab div').click(function () {

        $(this).siblings().removeClass('mTab-active');
        $(this).addClass('mTab-active');

        var int = $(this).index();
        if (int === 0) {
            document.getElementById('userSearch').style.display = 'none'
            document.getElementById('myPage').style.display = 'none'
            QueryPayInfo()
            let type = $('.rechargeRecord').attr('data');
            if (type == 'false') {

            }
            $('.rechargeRecord').hide();
            $('.consumerRecords,.personalRecords').fadeOut(300, function () {
                $('.rechargeRecord').fadeIn();
            });
        } else if (int === 1) {
            document.getElementById('userSearch').style.display = 'none'
            document.getElementById('myPage').style.display = 'none'
            handleConsumption()

            let type = $('.consumerRecords').attr('data');


            if (type == 'false') {


            }

            $('.consumerRecords,.personalRecords').hide();
            $('.rechargeRecord').fadeOut(300, function () {
                $('.consumerRecords').fadeIn();
            });
        } else if (int === 2) {
            // document.getElementById('seacher').style.display='block'
            document.getElementById('myPage').style.display = 'block'
            document.getElementById('userSearch').style.display = 'block'

            userBalance()
            $('.personalRecords').hide()
            $('.rechargeRecord,.consumerRecords').fadeOut(300, function () {
                $('.personalRecords').fadeIn();
            });

        }
    });


    $('._small-item').click(function () {
        $('.small-active').removeClass('small-active');
        $(this).addClass('small-active')
    });

    $('.pay-btn_1').click(function () {
        var int = $('.personal-detail-small>._small-item.small-active').index();

        if (int === 1) {
            PagePay(100);
            //
        } else if (int === 2) {
            PagePay(200);
            //
        }
    });
    $('.pay-btn_2').click(function () {
        PagePay(500);
    });
    $('.pay-btn_3').click(function () {
        PagePay(1000);
    });
    $('.pay-btn_4').click(function () {
        PagePay(2000);
    });
}

function userBalance() {
    let url = 'http://www.ihouse3d.com.cn/service1.asmx/GetUserList'
    if (name === 'chenx' || name === 'zhouqj' || name === 'hah') {
        url = 'http://www.ihouse3d.com.cn/service1.asmx/GetAllUserList_SJS'
    }
    $('.personalRecords>.my-table-body').html('')
    $.ajax({
        type: 'POST',
        url: url,
        async: false,
        data: {
            strCompanyID: '2'
        },
        success: function (data) {
            nameArr.length = 0
            let str = $(data).find("string").html();
            let strs = str.split('#')
            let autoArr = []
            for (let i = 1; i < strs.length; i++) {
                let name = strs[i].split('~')[0]
                autoArr.push(strs[i].split('~'))
                let strName = '/'
                if (strs[i].split('~')[13] !== '') {
                    strName = strs[i].split('~')[13]
                }
                let strTel = '/'
                if (strs[i].split('~')[2] !== '') {
                    strTel = strs[i].split('~')[2]
                }
                let time = '/'
                if (strs[i].split('~')[14] !== '') {
                    time = strs[i].split('~')[14]
                }
                let obj = {
                    name: name,
                    bi: 0,
                    strName: strName,
                    tel: strTel,
                    time: time
                }
                nameArr.push(obj)
            }


        }
    })
    $.ajax({
        type: 'POST',
        url: 'http://www.ihouse3d.com.cn/PayWebService.asmx/Payment',
        async: false,
        data: {
            PayData: "{type:'3',user_account:''}"
        },
        success: function (data) {
            let indexArr = []
            data = JSON.parse(data)
            let list = JSON.parse(data.dataList)

            for (let i = 0; i < list.length; i++) {
                for (let a = 0; a < nameArr.length; a++) {
                    if (nameArr[a].name === list[i].user_account) {
                        let item = {
                            name: nameArr[a].name,
                            index: a,
                            bi: list[i].total_money
                        }
                        indexArr.push(item)
                    }
                }
            }

            for (let i = 0; i < indexArr.length; i++) {
                nameArr[indexArr[i].index].bi = indexArr[i].bi
            }
            nameArr.reverse()
            pushName(nameArr)
        }
    })
}

function pushName(Arr) {
    $('.personalRecords>.my-table-body').html('')
    let nameInfo = []
    let num = 15
    if (Arr.length < num) {
        num = Arr.length
    }
    for (let i = 0; i < num; i++) {
        nameInfo[i] = `<tr>
                            <td class="tdName" id='tdName${i}'>${Arr[i].name}</td>
                            <td>${Arr[i].strName}</td>
                            <td id='bi${i}'>${Arr[i].bi}</td>
                            <td>${Arr[i].tel}</td>
                            <td>${Arr[i].time}</td>
                        </tr>`
        $('.personalRecords>.my-table-body').append(nameInfo[i])
    }
    for (let i = 0; i < num; i++) {
        let id = 'tdName' + i
        let obj = document.getElementById(id)
        let father = obj.parentNode
        father.oncontextmenu = function (env) {
            let e = env || window.event;
            userName = Arr[i].name
            userNameId = id
            // 获取菜单，让菜单显示出来
            let context = document.getElementById("clickMenu");
            context.style.display = "none";
            context.style.display = "block";

            //  让菜单随着鼠标的移动而移动
            //  获取鼠标的坐标
            let x = e.clientX;
            let y = e.clientY;

            //  获取窗口的宽度和高度
            let w = window.innerWidth;
            let h = window.innerHeight;

            //  调整宽度和高度
            context.style.left = Math.min(w - 202, x) + "px";
            context.style.top = Math.min(h - 230, y) + "px";
            return false;
        }
    }
    $("#myPage").sPage({
        page: 1,//当前页码，必填
        total: Arr.length,//数据总条数，必填
        pageSize: 15,//每页显示多少条数据，默认10条
        totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
        showTotal: true,//是否显示总条数，默认关闭：false
        showSkip: true,//是否显示跳页，默认关闭：false
        showPN: true,//是否显示上下翻页，默认开启：true
        prevPage: "上一页",//上翻页文字描述，默认“上一页”
        nextPage: "下一页",//下翻页文字描述，默认“下一页”
        backFun: function (page) {
            $('.personalRecords>.my-table-body').html('');
            let firstNum = page * 15 - 15
            let lastNum = firstNum + 15
            if (lastNum > Arr.length) {
                for (let i = firstNum; i < Arr.length; i++) {
                    let nameInfo = `<tr>
                            <td class="tdName" id='tdName${i}'>${Arr[i].name}</td>
                            <td>${Arr[i].strName}</td>
                            <td id='bi${i}'>${Arr[i].bi}</td>
                            <td>${Arr[i].tel}</td>
                            <td>${Arr[i].time}</td>
                        </tr>`
                    $('.personalRecords>.my-table-body').append(nameInfo)
                    let id = 'tdName' + i
                    let obj = document.getElementById(id)
                    let father = obj.parentNode
                    father.oncontextmenu = function (env) {
                        let e = env || window.event;
                        userName = Arr[i].name
                        userNameId = id
                        // 获取菜单，让菜单显示出来
                        let context = document.getElementById("clickMenu");
                        context.style.display = "none";
                        context.style.display = "block";

                        //  让菜单随着鼠标的移动而移动
                        //  获取鼠标的坐标
                        let x = e.clientX;
                        let y = e.clientY;

                        //  获取窗口的宽度和高度
                        let w = window.innerWidth;
                        let h = window.innerHeight;

                        //  调整宽度和高度
                        context.style.left = Math.min(w - 202, x) + "px";
                        context.style.top = Math.min(h - 230, y) + "px";
                        return false;
                    }
                }
            } else {
                for (let i = firstNum; i < lastNum; i++) {
                    let nameInfo = `<tr>
                            <td class="tdName" id='tdName${i}'>${Arr[i].name}</td>
                            <td>${Arr[i].strName}</td>
                            <td id='bi${i}'>${Arr[i].bi}</td>
                            <td>${Arr[i].tel}</td>
                            <td>${Arr[i].time}</td>
                        </tr>`
                    $('.personalRecords>.my-table-body').append(nameInfo)
                    let id = 'tdName' + i
                    let obj = document.getElementById(id)
                    let father = obj.parentNode
                    father.oncontextmenu = function (env) {
                        let e = env || window.event;
                        userName = Arr[i].name
                        userNameId = id
                        // 获取菜单，让菜单显示出来
                        let context = document.getElementById("clickMenu");
                        context.style.display = "none";
                        context.style.display = "block";

                        //  让菜单随着鼠标的移动而移动
                        //  获取鼠标的坐标
                        let x = e.clientX;
                        let y = e.clientY;

                        //  获取窗口的宽度和高度
                        let w = window.innerWidth;
                        let h = window.innerHeight;

                        //  调整宽度和高度
                        context.style.left = Math.min(w - 202, x) + "px";
                        context.style.top = Math.min(h - 230, y) + "px";
                        return false;
                    }
                }
            }
        }
    });
}

function searchUser() {
    let txt = document.getElementById('searchTxt').value
    let newArr = nameArr.filter(function (ele) {
        return ele.name.includes(txt)
    })

    pushName(newArr)
}

function allUser() {
    pushName(nameArr)
}

var userName = '', userNameId = ''
document.onclick = function () {
    document.getElementById("clickMenu").style.display = 'none'
}
var qxArr = []

//电脑网站支付
function PagePay(int_1) {
    $.ajax({
        url: "http://www.ihouse3d.com.cn:5005/Alipay/PagePay",
        type: "POST",
        dataType: "text",
        contentType: "application/x-www-form-urlencoded",
        data: {
            "OutTradeNo": RandomNumber(), //商户订单号,64个字符以内、可包含字母、数字、下划线；需保证在商户端不重复   20150320010101001
            "subject": "扫码支付测试", //订单标题
            "body": "扫码支付描述信息", //订单描述
            "TotalAmount": 0.01,   //支付金额
            "ProductCode": "FAST_INSTANT_TRADE_PAY",
            "NotifyUrl": "http://*/notify/alipay/pagepay", //支付宝服务器主动通知商户服务器里指定的页面http/https路径
            "ReturnUrl": "http://www.ihouse3d.com/web2/payreturn.html?type=0&useraccount=" + name, //支付成功后回调页面,type=0 (云币充值) useraccount=用户登录平台的帐号
            // "ReturnUrl": "http://www.ihouse3d.com/information.html?type=detail"
        },
        success: function (data) {
            // $('#form-div').append(data);
            //
            localStorage.setItem("payData", data);

            window.open("payOut.html", '_parent');
            // location.href = "payOut.html"
        },
        error: function (err) {

        }
    })
}

//
function RandomNumber() {
    var timestamp = (new Date(" 2018/06/22 08:00:20")).getTime() / 1000;
    var num = Math.floor(Math.random() * (1 - 100) + 1);

    return timestamp + num;
}


function ProcessFile1(e) {
    var file = document.getElementById('file1').files[0];
    let size = file.size
    if (size > 3145728) {
        alert('图片大于3M，请重新选择')
    } else {
        var reader = new FileReader();
        reader.onload = function (event) {
            var txt = event.target.result;
            img1 = txt
            $("#big-pic").attr('src', txt);//将图片base64字符串赋值给img的src
            //
            document.getElementById('big-img-txt').style.display = 'none'
            document.getElementById('qjBox').style.display = 'none'
            document.getElementById('video').style.display = 'none'
            document.getElementById('big-pic').style.display = 'block'
            document.getElementById('file1').style.display = 'none'
            document.getElementById('small-add1').style.display = 'none'
            document.getElementById('small-add-txt1').style.display = 'none'
            document.getElementById('small-pic1').style.display = 'block'
            document.getElementById('small-pic1').src = img1

        };
        reader.readAsDataURL(file);
    }

}

function ProcessFile2(e) {
    var file = document.getElementById('file2').files[0];
    let size = file.size
    if (size > 3145728) {
        alert('图片大于3M，请重新选择')
    } else {
        var reader = new FileReader();
        reader.onload = function (event) {
            var txt = event.target.result;
            img2 = txt
            $("#big-pic").attr('src', txt);//将图片base64字符串赋值给img的src
            //
            document.getElementById('big-img-txt').style.display = 'none'
            document.getElementById('qjBox').style.display = 'none'
            document.getElementById('video').style.display = 'none'
            document.getElementById('big-pic').style.display = 'block'
            document.getElementById('file2').style.display = 'none'
            document.getElementById('small-add2').style.display = 'none'
            document.getElementById('small-add-txt2').style.display = 'none'
            document.getElementById('small-pic2').style.display = 'block'
            document.getElementById('small-pic2').src = img2
        };
        reader.readAsDataURL(file);
    }

}

function ProcessFile3(e) {
    var file = document.getElementById('file3').files[0];
    let size = file.size
    if (size > 3145728) {
        alert('图片大于3M，请重新选择')
    } else {
        var reader = new FileReader();
        reader.onload = function (event) {
            var txt = event.target.result;
            img3 = txt
            $("#big-pic").attr('src', txt);//将图片base64字符串赋值给img的src
            //
            document.getElementById('big-img-txt').style.display = 'none'
            document.getElementById('qjBox').style.display = 'none'
            document.getElementById('video').style.display = 'none'
            document.getElementById('big-pic').style.display = 'block'
            document.getElementById('file3').style.display = 'none'
            document.getElementById('small-add3').style.display = 'none'
            document.getElementById('small-add-txt3').style.display = 'none'
            document.getElementById('small-pic3').style.display = 'block'
            document.getElementById('small-pic3').src = img3
        };
        reader.readAsDataURL(file);
    }

}

function ProcessFile4(e) {
    var file = document.getElementById('file4').files[0];
    let size = file.size
    if (size > 3145728) {
        alert('图片大于3M，请重新选择')
    } else {
        var reader = new FileReader();
        reader.onload = function (event) {
            var txt = event.target.result;
            img4 = txt
            $("#homeImg").attr('src', txt);//将图片base64字符串赋值给img的src
            //
            document.getElementById('homeImg').style.display = 'block'
            document.getElementById('file4').style.display = 'none'
            document.getElementById('homeImg-txt').style.display = 'none'
            document.getElementById('home-add').style.display = 'none'
        };
        reader.readAsDataURL(file);
    }

}

function ProcessFile5(e) {
    var file = document.getElementById('file5').files[0];

    fileName = file.name
    document.getElementById('max-title').innerHTML = file.name
    // if (file) {
    //     var reader = new FileReader();
    //     reader.onload = function (event) {
    //         var txt = event.target.result;
    //         img3 = txt
    //         $("#homeImg").attr('src', txt);//将图片base64字符串赋值给img的src
    //         //
    //         document.getElementById('homeImg').style.display='block'
    //         document.getElementById('file4').style.display = 'none'
    //         document.getElementById('home-add').style.display = 'none'
    //     };
    // }
    // reader.readAsDataURL(file);
}

function ProcessFile6(e) {
    let obj = document.getElementById('changeFile1')
    var file = obj.files[0];
    let size = file.size
    if (size > 3145728) {
        alert('图片大于3M，请重新选择')
        obj.type = 'text'
        obj.type = 'file'
    } else {
        var reader = new FileReader();
        reader.onload = function (event) {
            var txt = event.target.result;
            img1 = txt
            $("#big-pic").attr('src', txt);//将图片base64字符串赋值给img的src
            //
            document.getElementById('big-img-txt').style.display = 'none'
            document.getElementById('qjBox').style.display = 'none'
            document.getElementById('video').style.display = 'none'
            document.getElementById('big-pic').style.display = 'block'
            document.getElementById('file1').style.display = 'none'
            document.getElementById('small-add1').style.display = 'none'
            document.getElementById('small-add-txt1').style.display = 'none'
            document.getElementById('small-pic1').style.display = 'block'
            document.getElementById('small-pic1').src = img1
            obj.type = 'text'
            obj.type = 'file'
        };
        reader.readAsDataURL(file);
    }

}

function ProcessFile7(e) {
    let obj = document.getElementById('changeFile2')
    var file = obj.files[0];
    let size = file.size
    if (size > 3145728) {
        alert('图片大于3M，请重新选择')
        obj.type = 'text'
        obj.type = 'file'
    } else {
        var reader = new FileReader();
        reader.onload = function (event) {
            var txt = event.target.result;
            img2 = txt
            $("#big-pic").attr('src', txt);//将图片base64字符串赋值给img的src
            //
            document.getElementById('big-img-txt').style.display = 'none'
            document.getElementById('qjBox').style.display = 'none'
            document.getElementById('video').style.display = 'none'
            document.getElementById('big-pic').style.display = 'block'
            document.getElementById('file2').style.display = 'none'
            document.getElementById('small-add2').style.display = 'none'
            document.getElementById('small-add-txt2').style.display = 'none'
            document.getElementById('small-pic2').style.display = 'block'
            document.getElementById('small-pic2').src = img2
            obj.type = 'text'
            obj.type = 'file'
        };
        reader.readAsDataURL(file);
    }
}

function ProcessFile8(e) {
    let obj = document.getElementById('changeFile3')
    var file = obj.files[0];
    let size = file.size
    if (size > 3145728) {
        alert('图片大于3M，请重新选择')
        obj.type = 'text'
        obj.type = 'file'
    } else {
        var reader = new FileReader();
        reader.onload = function (event) {
            var txt = event.target.result;
            img3 = txt
            $("#big-pic").attr('src', txt);//将图片base64字符串赋值给img的src
            //
            document.getElementById('big-img-txt').style.display = 'none'
            document.getElementById('qjBox').style.display = 'none'
            document.getElementById('video').style.display = 'none'
            document.getElementById('big-pic').style.display = 'block'
            document.getElementById('file3').style.display = 'none'
            document.getElementById('small-add3').style.display = 'none'
            document.getElementById('small-add-txt3').style.display = 'none'
            document.getElementById('small-pic3').style.display = 'block'
            document.getElementById('small-pic3').src = img3
            obj.type = 'text'
            obj.type = 'file'
        };
        reader.readAsDataURL(file);
    }

}

function ProcessFile9(e) {
    let obj = document.getElementById('changeFile4')
    var file = obj.files[0];
    let size = file.size
    if (size > 3145728) {
        alert('图片大于3M，请重新选择')
        obj.type = 'text'
        obj.type = 'file'
    } else {
        var reader = new FileReader();
        reader.onload = function (event) {
            var txt = event.target.result;
            img4 = txt
            $("#homeImg").attr('src', txt);//将图片base64字符串赋值给img的src
            //
            document.getElementById('homeImg').style.display = 'block'
            obj.type = 'text'
            obj.type = 'file'
        };
        reader.readAsDataURL(file);
    }

}

// function contentLoaded() {
//     document.getElementById('file1').addEventListener('change',
//         ProcessFile1, false);
//     document.getElementById('file2').addEventListener('change',
//         ProcessFile2, false);
//     document.getElementById('file3').addEventListener('change',
//         ProcessFile3, false);
//     document.getElementById('file4').addEventListener('change',
//         ProcessFile4, false);
//     document.getElementById('file5').addEventListener('change',
//         ProcessFile5, false);
//     document.getElementById('changeFile1').addEventListener('change',
//         ProcessFile6, false);
//     document.getElementById('changeFile2').addEventListener('change',
//         ProcessFile7, false);
//     document.getElementById('changeFile3').addEventListener('change',
//         ProcessFile8, false);
//     document.getElementById('changeFile4').addEventListener('change',
//         ProcessFile9, false);
// }

// var model=document.getElementById('model');
// var input=model.querySelectorAll('input');
// window.addEventListener("DOMContentLoaded", contentLoaded, false);

function changeBigPic(e) {
    if (e === 1 && img1 !== '') {
        document.getElementById('qjBox').style.display = 'none'
        document.getElementById('video').style.display = 'none'
        document.getElementById('big-pic').style.display = 'block'
        document.getElementById('big-pic').src = img1
    } else if (e === 2 && img2 !== '') {
        document.getElementById('qjBox').style.display = 'none'
        document.getElementById('video').style.display = 'none'
        document.getElementById('big-pic').style.display = 'block'
        document.getElementById('big-pic').src = img2
    } else if (e === 3 && img3 !== '') {
        document.getElementById('qjBox').style.display = 'none'
        document.getElementById('video').style.display = 'none'
        document.getElementById('big-pic').style.display = 'block'
        document.getElementById('big-pic').src = img3
    }
}

function handleSeeBtn(e) {
    let url = document.getElementById(e).value
    if (e === 'qjUrl') {
        qjUrl = url
        document.getElementById('big-img-txt').style.display = 'none'
        document.getElementById('qjBox').src = url
        document.getElementById('video').style.display = 'none'
        document.getElementById('big-pic').style.display = 'none'
        document.getElementById('qjBox').style.display = 'block'
    } else {
        videoUrl = url
        document.getElementById('big-img-txt').style.display = 'none'
        document.getElementById('video').src = url
        document.getElementById('big-pic').style.display = 'none'
        document.getElementById('qjBox').style.display = 'none'
        document.getElementById('video').style.display = 'block'
    }
}

var nameArr = []

function changeType(type) {
    if (type === 'detail') {
        $('.add-title-active').removeClass("add-title-active");
        $('#addTitle').addClass('add-title-active');
        $('#recharge').hide();
        $('#myInfor').hide();
        $('#3dyun').hide();
        $('#hcode').hide();
        $('#ddcode').hide();
        $('#BtnPage').hide();
        $('#qj-Box').hide();
        $('#detail').show();
    } else if (type === 'recharge') {
        $('.add-title-active').removeClass("add-title-active");
        $('#rechargeTitle').addClass('add-title-active');
        $('#detail').hide();
        $('#myInfor').hide();
        $('#3dyun').hide();
        $('#hcode').hide();
        $('#ddcode').hide();
        $('#BtnPage').hide();
        $('#qj-Box').hide();
        $('#recharge').show();
    } else if (type === 'myInfor') {
        $('.add-title-active').removeClass("add-title-active");
        $('#myInforTitle').addClass('add-title-active');
        $('#detail').hide();
        $('#recharge').hide();
        $('#3dyun').hide();
        $('#hcode').hide();
        $('#ddcode').hide();
        $('#BtnPage').hide();
        $('#qj-Box').hide();
        $('#myInfor').show();

        QueryPayInfo();
    } else if (type === '3dyun') {
        $('.add-title-active').removeClass("add-title-active");
        $('#3dyunTitle').addClass('add-title-active');
        $('#detail').hide();
        $('#recharge').hide();
        $('#myInfor').hide();
        $('#hcode').hide();
        $('#ddcode').hide();
        $('#BtnPage').hide();
        $('#qj-Box').hide();
        $('#3dyun').show();
        $('#3dyunWeb').attr('src', '3dyun.html?dis=1')
        $('#3dyunWeb').attr('height', '')
    } else if (type === 'word') {
        $('.add-title-active').removeClass("add-title-active");
        $('#wordBtn').addClass('add-title-active');
        $('#detail').hide();
        $('#recharge').hide();
        $('#myInfor').hide();
        $('#hcode').hide();
        $('#ddcode').hide();
        $('#BtnPage').hide();
        $('#qj-Box').hide();
        $('#3dyun').show();
        $('#3dyunWeb').attr('src', 'word.html')
    } else if (type === 'ddcode') {
        $('.add-title-active').removeClass("add-title-active");
        $('#ddcodeTitle').addClass('add-title-active');
        $('#detail').hide();
        $('#recharge').hide();
        $('#myInfor').hide();
        $('#3dyun').hide();
        $('#hcode').hide();
        $('#BtnPage').hide();
        $('#ddcode').show();
    } else if (type === 'hcode') {
        $('.add-title-active').removeClass("add-title-active");
        $('#hcodeTitle').addClass('add-title-active');
        $('#detail').hide();
        $('#recharge').hide();
        $('#myInfor').hide();
        $('#3dyun').hide();
        $('#ddcode').hide();
        $('#BtnPage').hide();
        $('#qj-Box').hide();
        $('#hcode').show();
        loadHZ()
    } else if (type === 'Btn') {
        $('.add-title-active').removeClass("add-title-active");
        $('#btn-title').addClass('add-title-active');
        $('#detail').hide();
        $('#recharge').hide();
        $('#myInfor').hide();
        $('#3dyun').hide();
        $('#ddcode').hide();
        $('#hcode').hide();
        $('#qj-Box').hide();
        $('#BtnPage').show();
    } else if (type === 'pano') {
        $('.add-title-active').removeClass("add-title-active");
        $('#panoTitle').addClass('add-title-active');
        $('#detail').hide();
        $('#recharge').hide();
        $('#myInfor').hide();
        $('#3dyun').hide();
        $('#ddcode').hide();
        $('#hcode').hide();
        $('#BtnPage').hide();
        $('#qj-Box').show();
    } else if (type === 'rili') {
        $('.add-title-active').removeClass("add-title-active");
        $('#riliBtn').addClass('add-title-active');
        $('#riliBox').show()
    } else if (type === 'qj') {
        $('.add-title-active').removeClass("add-title-active");
        $('#qjBtn').addClass('add-title-active');
        $('#detail').hide();
        $('#recharge').hide();
        $('#myInfor').hide();
        $('#hcode').hide();
        $('#ddcode').hide();
        $('#BtnPage').hide();
        $('#qj-Box').hide();
        $('#3dyun').show();
        $('#3dyunWeb').attr('src', 'http://www.ihouse3d.com.cn/h5/plugins/ImageToVr/index.html')
        $('#3dyunWeb').attr('height', '1500')
    } else if (type === 'tt') {
        $('.add-title-active').removeClass("add-title-active");
        $('#tietu').addClass('add-title-active');
        $('#detail').hide();
        $('#recharge').hide();
        $('#myInfor').hide();
        $('#hcode').hide();
        $('#ddcode').hide();
        $('#BtnPage').hide();
        $('#qj-Box').hide();
        $('#3dyun').show();
        $('#3dyunWeb').attr('src', 'cpetry/index.html')

    }
}

function closeRili() {
    $('#riliBox').hide()
}

function openAdminRecharge() {
    let name = userName
    let id = userNameId
    let num = id.replace('tdName', '')
    let biId = 'bi' + num
    let biNum = document.getElementById(biId).innerHTML
    document.getElementById('admin-user').innerHTML = name
    document.getElementById('admin-bi').innerHTML = biNum
    document.getElementById('admin').style.display = 'block'

}

function openAdminRecord() {
    let name = userName
    $('._rechargeRecord>.my-table-body').html('');
    $.ajax({
        url: "http://www.ihouse3d.com.cn/PayWebService.asmx/QueryPayInfo",
        type: "POST",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: {
            "UserAccount": name
        },
        success: function (data) {
            //成功

            if ("1" === data.code) {
                let dataList = $.parseJSON(data.dataList);
                let item_html = '';
                if (dataList.length === 0) {
                    item_html = '<tr><td colspan=5>暂无充值信息~</td></tr>'
                } else {
                    for (var i = 0; i < dataList.length; i++) {
                        item_html += `<tr>
                            <td>${dataList[i].timestamp}</td>
                            <td>${dataList[i].user_account}</td>
                            <td>云币充值</td>
                            <td>${dataList[i].description}</td>
                            <td>${dataList[i].pay_way}</td>
                        </tr>`;
                    }
                }

                $('._rechargeRecord>.my-table-body').html(item_html);
            } else if ("0" === data.code) {
                let _item_html = ''
                _item_html = '<tr><td colspan=5>暂无充值信息~</td></tr>'
                $('._rechargeRecord>.my-table-body').html(_item_html);
            }
            //失败信息

        },
        error: function (err) {

        }
    })
    document.getElementById('admin-rechargeRecord').style.display = 'block'
}

function openAdminConsumer() {
    let name = userName
    let payData = {
        type: 4,
        user_account: name
    }
    $('._consumerRecords>.my-table-body').html('');
    $.ajax({
        type: 'POST',
        url: 'http://www.ihouse3d.com.cn/PayWebService.asmx/Payment',
        data: {
            payData: JSON.stringify(payData)
        },
        success: function (data) {
            data = JSON.parse(data)
            if (data.code === '0') {
                let item_html = '<tr><td colspan=5>暂无消费记录~</td></tr>'
                $('._consumerRecords>.my-table-body').append(item_html)
            } else if (data.code === '1') {
                let itemArr = JSON.parse(data.dataList)

                let consumptionInfo = []
                for (let i = 0; i < itemArr.length; i++) {
                    if (itemArr[i].count > 0) {
                        itemArr[i].count = 0 - itemArr[i].count
                    }
                    consumptionInfo[i] = `<tr>
                            <td>${itemArr[i].date}</td>
                            <td>${itemArr[i].user_account}</td>
                            <td>${itemArr[i].count}</td>
                            <td>${itemArr[i].description}</td>
                            <td>云币消费</td>
                        </tr>`
                    $('._consumerRecords>.my-table-body').append(consumptionInfo[i])

                }
            }
            document.getElementById('admin-consumerRecords').style.display = 'block'
        }
    })
}

function closeAdmin() {
    document.getElementById('admin').style.display = 'none'
}

function closeAdminRecord() {
    document.getElementById('admin-rechargeRecord').style.display = 'none'
}

function closeAdminConsumer() {
    document.getElementById('admin-consumerRecords').style.display = 'none'
}

function handleAdminClick(txt) {
    let num = document.getElementById('biNum').value
    let name = document.getElementById('admin-user').innerHTML
    if (txt === 'add') {
        let PayData = {
            type: 0,
            user_account: name,
            count: num,
            description: "管理员充值"
        }
        $.ajax({
            type: 'POST',
            url: 'http://www.ihouse3d.com.cn/PayWebService.asmx/Payment',
            data: {
                PayData: JSON.stringify(PayData)
            },
            success: function (data) {
                data = JSON.parse(data)
                if (data.code === '1') {
                    alert('充值成功')
                    document.getElementById('admin').style.display = 'none'
                    userBalance()
                }
            }
        })
    } else if (txt === 'delete') {
        let PayData = {
            type: 1,
            user_account: name,
            count: num,
            description: "管理员扣费"
        }
        $.ajax({
            type: 'POST',
            url: 'http://www.ihouse3d.com.cn/PayWebService.asmx/Payment',
            data: {
                PayData: JSON.stringify(PayData)
            },
            success: function (data) {
                data = JSON.parse(data)
                if (data.code === '1') {
                    alert('扣除成功')
                    document.getElementById('admin').style.display = 'none'
                    userBalance()
                }
            }
        })
    }
}

function signOver() {
    if (document.getElementById('login').innerHTML !== '登录') {
        document.getElementById('signBox').style.display = 'block'
    }
}

function signOut() {
    document.getElementById('signBox').style.display = 'none'
}

function handleOutClick() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
    window.location.href = 'index.html'
}

function TestUploadFile() {
    let type = document.getElementById('modelType').value
    if (type === '名师模型') {
        modelType = '0'
    } else if (type === '其他模型') {
        modelType = '1'
    } else if (type === '家具软装') {
        modelType = '2'
    } else if (type === '家居场景') {
        modelType = '3'
    } else if (type === '工装场景') {
        modelType = '4'
    }
    modelName = document.getElementById('modelName').value
    modelId = guid()
    qjUrl = document.getElementById('qjUrl').value
    videoUrl = document.getElementById('videoUrl').value
    uploadFile = document.getElementById('file5')

    if (modelName === '' || img1 === '' || img2 === '' || img3 === '' || img4 === '') {
        alert('请完整填写信息')
    } else {
        document.getElementById('tbox').style.display = 'block'
        UploadFile(gTokenData)
        OnUploadFile(uploadFile)
    }
}

var gTokenData = ''

// function GetToken() {
//     $.ajax({
//         url: "http://www.ihouse3d.com.cn:5000/connect/token",
//         type: "POST",
//         async: "false",
//         dataType: "json",
//         contentType: "application/x-www-form-urlencoded",
//         data: {
//             "grant_type": "client_credentials",
//             "client_secret": "20[{ihouse+>}]20",
//             "client_id": "UploadFileID"
//         },
//         success: function (data) {
//             gTokenData = data.access_token;
//
//             // UploadFile(gTokenData);
//         },
//         error: function (err) {
//
//         }
//     })
// }
//
// GetToken()

function UploadFile(token) {
    let data = '{"id": "' + modelId + '","user":"' + name + '","type": "designer","videourl": "' + videoUrl + '","vrurl": "' + qjUrl + '","class": "' + modelType + '","classname": "' + modelName + '","thumbnail": "data/model/' + modelId + '/thumbanil/home.png","thumbnaildata": "' + img4 + '","description": {"name": "' + modelName + '3D模型","size": "400.81MB","count": "人气","setting": "素材配置","render": "渲染器","maxversion": "max版本","updatetime": "更新日期"},"images": [{"name": "data/model/' + modelId + '/images/1.png","image": "' + img1 + '"}, {"name": "data/model/' + modelId + '/images/2.png","image": "' + img2 + '"}, {"name": "data/model/' + modelId + '/images/3.png","image": "' + img3 + '"}]}'

    $.ajax({
        url: "http://www.ihouse3d.com.cn:5001/api/uploadfile",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        // headers: {'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
        data: data,
        success: function (data) {

        },
        error: function (err) {

            alert('图片上传失败')
        }
    })
}

function OnUploadFile(that) {
    if (that.files && that.files.length) {
        var bytesPerPiece = 1024 * 1024 * 2; // 每个文件切片大小定为2Mb .
        var totalPieces;//切片总数，这个根据 文件大小来计算
        var start = 0;
        var end;
        var index = 0;
        var filesize = that.files[0].size;// 文件大小
        var filename = modelId + '.zip';// 文件名称
        var fileid = guid(); //
        var filepath = "e:/3dsj/data/model/" + modelId + "/model/";  //在服务器上保存的位置
        var nProgress = 1;

        //计算文件切片总数
        totalPieces = Math.ceil(filesize / bytesPerPiece);
        while (start < filesize) {
            end = start + bytesPerPiece;
            if (end > filesize) {
                end = filesize;
            } // 匹配最后一个分片的情况
            var chunk = that.files[0].slice(start, end);//切割文件
            var sliceIndex = modelId + '.zip';
            var formData = new FormData();
            formData.append("totalPieces", totalPieces);
            formData.append("index", index);
            formData.append("progress", nProgress);
            formData.append("file", chunk, sliceIndex);
            formData.append("fileid", fileid);
            formData.append("filepath", filepath);

            $.ajax({
                url: 'http://www.ihouse3d.com.cn:5003/service1.asmx/Upload_File',
                async: true,
                type: 'POST',
                cache: false,
                data: formData,
                processData: false,
                contentType: false,
                dataType: "json",
                success: function (data) {
                    if (data.val) {

                        i = 100
                        xh()
                        clearTimeout(bar)
                    } else {
                        let progress = nProgress * 100 / totalPieces;
                        progress = progress.toFixed(0);
                        i = progress
                        bar = setTimeout("xh()", 100)
                        ++nProgress;
                    }
                }
            }).done(function (res) {
                //
            }).fail(function (res) {

            });
            start = end;
            ++index;
        }
    }
}

function changeCode(e, obj) {
    $('.active-class-code').removeClass('active-class-code')
    $(obj).addClass('active-class-code')
    if (e === 'jieshao') {
        document.getElementById('codeBox').style.display = 'none'
        document.getElementById('codeImg').style.display = 'block'
    } else if (e === 'zhanshi') {
        document.getElementById('codeImg').style.display = 'none'
        document.getElementById('codeBox').style.display = 'block'
    }
}

function changePanoClick(e, obj) {
    $('.active-class-pano').removeClass('active-class-pano')
    $(obj).addClass('active-class-pano')
    if (e === 'jieshao') {
        document.getElementById('panogj').style.display = 'none'
        document.getElementById('panock').style.display = 'none'
        document.getElementById('panojs').style.display = 'block'
    } else if (e === 'gongju') {
        document.getElementById('panojs').style.display = 'none'
        document.getElementById('panock').style.display = 'none'
        document.getElementById('panogj').style.display = 'block'
        // document.getElementById('qjweb').src='http://www.ihouse3d.com.cn/h5/Panoramagram/index.html?username='+name
    } else if (e === 'chakan') {
        document.getElementById('panojs').style.display = 'none'
        document.getElementById('panogj').style.display = 'none'
        document.getElementById('panock').style.display = 'block'
    }
}

function guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

var bar
var i = 0;

/*add——创建tbx下的div加文字和变宽度的方法*/

function add(i) {
    var tbox = $(".tbox");
    var tiao = $(".tiao");
    tiao.css("width", i + "%").html(i + "%");
}

/*创建方法（i++循环起来）*/
function xh() {
    if (i >= 100) {
        var tiao = $(".tiao");
        $(".ok").html("上传完成")
        $('#bar-btn').html('确定')
        tiao.css("width", i + "%").html(i + "%");
        return;
    }
    if (i < 100) {
        add(i);
    }
}

function handleIdChange(obj) {
    let id = obj.id
    document.cookie = 'id=' + id
    // window.open('install.html')
}

/*调用xh()函数*/
function changePage(txt, obj) {
    $('.active-class').removeClass('active-class')
    $(obj).addClass('active-class')
    if (txt === 'onload') {
        document.getElementById('myModelPage').style.display = 'none'
        document.getElementById('adminModelPage').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('onloadPage').style.display = 'flex'
        document.getElementById('uploadBtn').style.display = 'flex'
    } else if (txt === 'jieshao') {
        document.getElementById('myModelPage').style.display = 'none'
        document.getElementById('adminModelPage').style.display = 'none'
        document.getElementById('onloadPage').style.display = 'none'
        document.getElementById('uploadBtn').style.display = 'none'
        document.getElementById('jieshao').style.display = 'block'
    } else if (txt === 'myModel') {
        $.ajax({
            type: 'POST',
            url: 'http://www.ihouse3d.com.cn/DPWebservice.asmx/GetUserModelList',
            data: {
                user: name,
                status: ''
            },
            success: function (data) {
                let itemArr = JSON.parse(JSON.parse(data).data)
                let itemInfo = []

                for (let i = 0; i < itemArr.length; i++) {
                    let item = itemArr[i]
                    let typeArr = ["名师模型", "其他模型", "家具软装", "家具场景", "工装场景"]
                    let type = typeArr[item.type]
                    let status = itemArr[i].status
                    if (status === '3') {
                        itemInfo[i] = `
                <div class="item" id='${itemArr[i].id}' onclick="handleIdChange(this)" onmouseout="iconOut(this)" onmouseover="iconOver(this)">
                <div class="item-icon-box" id="${itemArr[i].id}icon">
                <div class="item-icon-bg">
<!--                <div>-->
<!--                <img src="image/上架.png" width="30" alt="" onclick="handleShelfClick(this)">-->
<!--                <p class="item-icon-txt">上架</p>-->
<!--                </div>-->
                <div>
                <img src="image/下架.png" width="30" alt="" onclick="handleLowerPlay(this)">
                <p class="item-icon-txt">下架</p>
                </div>
                <div>
                <img src="image/删除.png" width="30" alt="" onclick="myModelDelete(this)" class="model-item-icon">
                <p class="item-icon-txt">删除</p>
                </div>
                </div>
                </div>
                    <img src='${addr}${itemArr[i].thumbnail}'>
                    <div class="item-detail">
                        <p class="item-text">${itemArr[i].name}</p>
                        <div class="item-bottom-box">
                        <div class="header-name-box">
                        <img src="image/头像.png" width="20" class="item-headerImg">
                        <span class="max-text">${type}</span>
                        </div>
                        <p class="max-text">max:2013</p>
                        </div>
                    </div>
                </div>
            `
                    } else if (status === '2') {
                        itemInfo[i] = `
                <div class="item" id='${itemArr[i].id}' onclick="handleIdChange(this)" onmouseout="iconOut(this)" onmouseover="iconOver(this)">
                <div class="item-icon-box" id="${itemArr[i].id}icon">
                <div class="item-icon-bg">
                <div>
                <img src="image/上架.png" width="30" alt="" onclick="handleShelfPlay(this)">
                <p class="item-icon-txt">上架</p>
                </div>
<!--                <div>-->
<!--                <img src="image/下架.png" width="30" alt="" onclick="handleLowerClick(this)">-->
<!--                <p class="item-icon-txt">下架</p>-->
<!--                </div>-->
                <div>
                <img src="image/删除.png" width="30" alt="" onclick="myModelPlay(this)" class="model-item-icon">
                <p class="item-icon-txt">删除</p>
                </div>
                </div>
                </div>
                    <img src='${addr}${itemArr[i].thumbnail}'>
                    <div class="item-detail">
                        <p class="item-text">${itemArr[i].name}(已下架)</p>
                        <div class="item-bottom-box">
                        <div class="header-name-box">
                        <img src="image/头像.png" width="20" class="item-headerImg">
                        <span class="max-text">${type}</span>
                        </div>
                        <p class="max-text">max:2013</p>
                        </div>
                    </div>
                </div>
            `
                    } else if (status === '0') {
                        itemInfo[i] = `
                <div class="item" id='${itemArr[i].id}' onclick="handleIdChange(this)" onmouseout="iconOut(this)" onmouseover="iconOver(this)">
                <div class="item-icon-box" id="${itemArr[i].id}icon">
                <div class="item-icon-bg">
                <div>
                <img src="image/上架.png" width="30" alt="" onclick="handleShelfPlay(this)">
                <p class="item-icon-txt">上架</p>
                </div>
<!--                <div>-->
<!--                <img src="image/下架.png" width="30" alt="" onclick="handleLowerClick(this)">-->
<!--                <p class="item-icon-txt">下架</p>-->
<!--                </div>-->
                <div>
                <img src="image/删除.png" width="30" alt="" onclick="myModelPlay(this)" class="model-item-icon">
                <p class="item-icon-txt">删除</p>
                </div>
                </div>
                </div>
                    <img src='${addr}${itemArr[i].thumbnail}'>
                    <div class="item-detail">
                        <p class="item-text">${itemArr[i].name}(未上架)</p>
                        <div class="item-bottom-box">
                        <div class="header-name-box">
                        <img src="image/头像.png" width="20" class="item-headerImg">
                        <span class="max-text">${type}</span>
                        </div>
                        <p class="max-text">max:2013</p>
                        </div>
                    </div>
                </div>
            `
                    }

                }
                $('#type0').html('')
                for (let i = 0; i < itemInfo.length; i++) {
                    $('#type0').append(itemInfo[i])
                }
            }
        })
        // $('.model-item-icon').on('click', function (e) {
        //     e.preventDefault()
        // })
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('uploadBtn').style.display = 'none'
        document.getElementById('onloadPage').style.display = 'none'
        document.getElementById('adminModelPage').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'block'
    } else if (txt === 'admin') {
        $.ajax({
            type: 'POST',
            url: 'http://www.ihouse3d.com.cn/DPWebservice.asmx/GetUserModelList',
            data: {
                user: '',
                status: ''
            },
            success: function (data) {
                let itemArr = JSON.parse(JSON.parse(data).data)

                let itemInfo = []
                for (let i = 0; i < itemArr.length; i++) {
                    let item = itemArr[i]
                    let typeArr = ["名师模型", "其他模型", "家具软装", "家具场景", "工装场景"]
                    let type = typeArr[item.type]
                    let status = itemArr[i].status
                    if (status === '3') {
                        itemInfo[i] = `
                <div class="item" id='${itemArr[i].id}' onclick="handleIdChange(this)" onmouseout="iconOut(this)" onmouseover="iconOver(this)">
                <div class="item-icon-box" id="${itemArr[i].id}icon">
                <div class="item-icon-bg">
<!--                <div>-->
<!--                <img src="image/上架.png" width="30" alt="" onclick="handleShelfClick(this)">-->
<!--                <p class="item-icon-txt">上架</p>-->
<!--                </div>-->
                <div>
                <img src="image/下架.png" width="30" alt="" onclick="handleLowerPlay(this)">
                <p class="item-icon-txt">下架</p>
                </div>
                <div>
                <img src="image/删除.png" width="30" alt="" onclick="myModelDelete(this)" class="model-item-icon">
                <p class="item-icon-txt">删除</p>
                </div>
                </div>
                </div>
                    <img src='${addr}${itemArr[i].thumbnail}'>
                    <div class="item-detail">
                        <p class="item-text">${itemArr[i].name}</p>
                        <P class="item-user">${itemArr[i].user}</P>
                        <div class="item-bottom-box">
                        <div class="header-name-box">
                        <img src="image/头像.png" width="20" class="item-headerImg">
                        <span class="max-text">${type}</span>
                        </div>
                        <p class="max-text">max:2013</p>
                        </div>
                    </div>
                </div>
            `
                    } else if (status === '2') {
                        itemInfo[i] = `
                <div class="item" id='${itemArr[i].id}' onclick="handleIdChange(this)" onmouseout="iconOut(this)" onmouseover="iconOver(this)">
                <div class="item-icon-box" id="${itemArr[i].id}icon">
                <div class="item-icon-bg">
                <div>
                <img src="image/上架.png" width="30" alt="" onclick="handleShelfPlay(this)">
                <p class="item-icon-txt">上架</p>
                </div>
<!--                <div>-->
<!--                <img src="image/下架.png" width="30" alt="" onclick="handleLowerClick(this)">-->
<!--                <p class="item-icon-txt">下架</p>-->
<!--                </div>-->
                <div>
                <img src="image/删除.png" width="30" alt="" onclick="myModelPlay(this)" class="model-item-icon">
                <p class="item-icon-txt">删除</p>
                </div>
                </div>
                </div>
                    <img src='${addr}${itemArr[i].thumbnail}'>
                    <div class="item-detail">
                        <p class="item-text">${itemArr[i].name}(已下架)</p>
                        <P class="item-user">${itemArr[i].user}</P>
                        <div class="item-bottom-box">
                        <div class="header-name-box">
                        <img src="image/头像.png" width="20" class="item-headerImg">
                        <span class="max-text">${type}</span>
                        </div>
                        <p class="max-text">max:2013</p>
                        </div>
                    </div>
                </div>
            `
                    } else if (status === '0') {
                        itemInfo[i] = `
                <div class="item" id='${itemArr[i].id}' onclick="handleIdChange(this)" onmouseout="iconOut(this)" onmouseover="iconOver(this)">
                <div class="item-icon-box" id="${itemArr[i].id}icon">
                <div class="item-icon-bg">
                <div>
                <img src="image/上架.png" width="30" alt="" onclick="handleShelfPlay(this)">
                <p class="item-icon-txt">上架</p>
                </div>
<!--                <div>-->
<!--                <img src="image/下架.png" width="30" alt="" onclick="handleLowerClick(this)">-->
<!--                <p class="item-icon-txt">下架</p>-->
<!--                </div>-->
                <div>
                <img src="image/删除.png" width="30" alt="" onclick="myModelPlay(this)" class="model-item-icon">
                <p class="item-icon-txt">删除</p>
                </div>
                </div>
                </div>
                    <img src='${addr}${itemArr[i].thumbnail}'>
                    <div class="item-detail">
                        <p class="item-text">${itemArr[i].name}(未上架)</p>
                        <P class="item-user">${itemArr[i].user}</P>
                        <div class="item-bottom-box">
                        <div class="header-name-box">
                        <img src="image/头像.png" width="20" class="item-headerImg">
                        <span class="max-text">${type}</span>
                        </div>
                        <p class="max-text">max:2013</p>
                        </div>
                    </div>
                </div>
            `
                    }

                }
                $('#type1').html('')
                for (let i = 0; i < itemInfo.length; i++) {
                    $('#type1').append(itemInfo[i])
                }
            }
        })
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('uploadBtn').style.display = 'none'
        document.getElementById('onloadPage').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'none'
        document.getElementById('adminModelPage').style.display = 'block'
    }
}

function iconOver(obj) {
    let id = obj.id + 'icon'
    document.getElementById(id).style.display = 'block'
}

function iconOut(obj) {
    let id = obj.id + 'icon'
    document.getElementById(id).style.display = 'none'
}

function changeSmallIcon(obj) {
    let father = obj
    let img = $(father).children(".small-pic")[0]
    if (img.style.display === 'block') {
        let close = $(father).children(".small-img-delete")[0]
        let change = $(father).children(".small-img-change")[0]
        let file = $(father).children(".changeFile")[0]
        close.style.display = 'block'
        change.style.display = 'block'
        file.style.display = 'block'
    }
}

function changeSmallIconOut(obj) {
    let father = obj
    let close = $(father).children(".small-img-delete")[0]
    let change = $(father).children(".small-img-change")[0]
    let file = $(father).children(".changeFile")[0]
    close.style.display = 'none'
    change.style.display = 'none'
    file.style.display = 'none'
}

function clearImg(obj) {
    let bigPic = document.getElementById('big-pic');
    let father = obj.parentNode
    let add = $(father).children(".small-add")[0]
    let file = $(father).children(".btn-file")[0]
    let txt = $(father).children(".small-add-txt")[0]
    let img = $(father).children(".small-pic")[0]
    img.style.display = 'none'
    let id = img.id
    id = id.replace('small-pic', '')
    if (id === '1' && bigPic.src === img.src) {
        img1 = ''
        bigPic.style.display = 'none'
    } else if (id === '1' && bigPic !== img.src) {
        img1 = ''
    } else if (id === '2' && bigPic.src === img.src) {
        img2 = ''
        bigPic.style.display = 'none'
    } else if (id === '2' && bigPic !== img.src) {
        img2 = ''
    } else if (id === '3' && bigPic.src === img.src) {
        img3 = ''
        bigPic.style.display = 'none'
    } else if (id === '3' && bigPic !== img.src) {
        img3 = ''
    }
    img.src = ''
    add.style.display = 'block'
    file.style.display = 'block'
    file.type = 'text'
    file.type = 'file'
    txt.style.display = 'block'
    document.getElementById('big-img-txt').style.display = 'block'
}

function handleShelfClick(obj) {
    let father = obj.parentNode
    father = father.parentNode
    father = father.parentNode
    father = father.parentNode
    let id = father.id
    $.ajax({
        type: 'POST',
        url: 'http://www.ihouse3d.com.cn/DPWebservice.asmx/SetModelStatus',
        data: {
            id: id,
            status: "3"
        },
        success: function (data) {

        }
    })
    changePage('myModel')
}

function handleLowerClick(obj) {
    let father = obj.parentNode
    father = father.parentNode
    father = father.parentNode
    father = father.parentNode
    let id = father.id
    $.ajax({
        type: 'POST',
        url: 'http://www.ihouse3d.com.cn/DPWebservice.asmx/SetModelStatus',
        data: {
            id: id,
            status: "2"
        },
        success: function (data) {

        }
    })
    changePage('myModel')
}

function myModelDelete(obj) {
    let father = obj.parentNode
    father = father.parentNode
    father = father.parentNode
    father = father.parentNode
    father.style.display = 'none'
}

function changeHomeIcon(obj) {
    let father = obj
    let img = $(father).children(".home-pic")[0]
    if (img.style.display === 'block') {
        let close = $(father).children("._small-img-delete")[0]
        let change = $(father).children("._small-img-change")[0]
        let file = $(father).children("._changeFile")[0]
        close.style.display = 'block'
        change.style.display = 'block'
        file.style.display = 'block'
    }
}

function changeHomeIconOut(obj) {
    let father = obj
    let close = $(father).children("._small-img-delete")[0]
    let change = $(father).children("._small-img-change")[0]
    let file = $(father).children("._changeFile")[0]
    close.style.display = 'none'
    change.style.display = 'none'
    file.style.display = 'none'
}

function clearHomeImg(obj) {
    let father = obj.parentNode
    let add = $(father).children(".home-add")[0]
    let file = $(father).children(".home-file")[0]
    let txt = $(father).children(".homeImg-txt")[0]
    let img = $(father).children(".home-pic")[0]
    img.style.display = 'none'
    img.src = ''
    add.style.display = 'block'
    file.style.display = 'block'
    file.type = 'text'
    file.type = 'file'
    txt.style.display = 'block'
}

function handleLowerPlay(obj) {
    if (confirm('确定要下架吗') === true) {
        handleLowerClick(obj)
    }
}

function handleShelfPlay(obj) {
    if (confirm('确定要上架吗') === true) {
        handleShelfClick(obj)
    }
}

function openPanoClick() {
    if (name === 'undefined') {
        document.getElementById('login').style.display = 'block'
        linkTO = 'pano'
    } else {
        window.open('http://www.ihouse3d.com.cn/h5/Panoramagram/index.html?username=' + name)
    }
}

function myModelPlay(obj) {
    if (confirm('确定要删除吗') === true) {
        myModelDelete(obj)
    }
}

function cancelClick() {
    location.reload()
}

function QueryPayInfo() {
    $('.rechargeRecord>.my-table-body').html('');
    $.ajax({
        url: "http://www.ihouse3d.com.cn/PayWebService.asmx/QueryPayInfo",
        type: "POST",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: {
            "UserAccount": name
        },
        success: function (data) {
            //成功
            if ("1" == data.code) {
                var dataList = $.parseJSON(data.dataList);

                var item_html = '';
                if (dataList.length == 0) {
                    item_html = '<tr><td colspan=5>暂无充值信息~</td></tr>'
                } else {
                    dataList.reverse()
                    for (var i = 0; i < dataList.length; i++) {
                        item_html += `<tr>
                            <td>${dataList[i].timestamp}</td>
                            <td>${dataList[i].user_account}</td>
                            <td>云币充值</td>
                            <td>${dataList[i].description}</td>
                            <td>${dataList[i].pay_way}</td>
                        </tr>`;
                    }
                }

                $('.rechargeRecord>.my-table-body').html(item_html);
            }
            //失败信息
            else {

            }
        },
        error: function (err) {

        }
    })
}

function handleConsumption() {
    $('.consumerRecords>.my-table-body').html('')
    let payData = {
        type: 4,
        user_account: name
    }
    $.ajax({
        type: 'POST',
        url: 'http://www.ihouse3d.com.cn/PayWebService.asmx/Payment',
        data: {
            payData: JSON.stringify(payData)
        },
        success: function (data) {
            data = JSON.parse(data)
            if (data.code === '0') {
                let item_html = '<tr><td colspan=5>暂无消费记录~</td></tr>'
                $('.consumerRecords>.my-table-body').append(item_html)
            } else if (data.code === '1') {
                let itemArr = JSON.parse(data.dataList)

                let consumptionInfo = []
                itemArr.reverse()
                for (let i = 0; i < itemArr.length; i++) {
                    if (itemArr[i].count > 0) {
                        itemArr[i].count = 0 - itemArr[i].count
                    }
                    consumptionInfo[i] = `<tr>
                            <td>${itemArr[i].date}</td>
                            <td>${itemArr[i].user_account}</td>
                            <td>${itemArr[i].count}</td>
                            <td>${itemArr[i].description}</td>
                            <td>云币消费</td>
                        </tr>`
                    $('.consumerRecords>.my-table-body').append(consumptionInfo[i])

                }
            }
        }
    })
}


function flashClick() {
    window.open('http://www.ihouse3d.com.cn/ihouse3d.html')
}

function openMakeBox() {
    $('#makeBox').show()
    let url = 'http://www.ihouse3d.com.cn/users/' + cookie.fold + '/' + name + '/favorite.txt?time=' + guid()
    $.ajax({
        type: 'GET',
        url: url,
        success: function (data) {
            document.getElementById('txt').value = data
        },
        error: function () {
            document.getElementById('txt').value = '技术宝库,http://www.ihouse3d.com/docs/docs.html'
        }
    })
}

function closeMakeBox() {
    $('#makeBox').hide()
    loadFavorite()
}

function saveTakeTxt() {
    let txt = document.getElementById('txt1').value
    let path = 'C:/inetpub/wwwroot/replace/replace.txt'
    let data = '{"type":"string","pathfilename":"' + path + '","filedata":"' + encode(txt) + '"}'
    console.log(data)
    $.ajax({
        url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
        type: 'POST',
        dataType: "json",
        contentType: "application/json",
        data: data,
        success: function (data) {
            if (data.code === '1') {
                alert('保存成功！')
            }
        }
    })
}

function closeTakeBox() {
    $('#takeBox').hide()
}

function saveMakeTxt() {
    let txt = document.getElementById('txt').value
    let fold = cookie.fold
    let path = 'C:/inetpub/wwwroot/users/' + fold + '/' + name + '/favorite.txt'
    let data = '{"type":"string","pathfilename":"' + path + '","filedata":"' + encode(txt) + '"}'
    console.log(data)
    $.ajax({
        url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
        type: 'POST',
        dataType: "json",
        contentType: "application/json",
        data: data,
        success: function (data) {
            if (data.code === '1') {
                alert('保存成功！')
            }
        }
    })
}

function encode(str) {
// 对字符串进行编码
    var encode = encodeURI(str);
// 对编码的字符串转化base64
    var base64 = btoa(encode);
    return base64;
}

loadFavorite()

function loadFavorite() {
    $('#fBox').html('')
    let url = 'http://www.ihouse3d.com.cn/users/' + cookie.fold + '/' + name + '/favorite.txt?time=' + guid()
    $.ajax({
        type: 'GET',
        url: url,
        success: function (data) {
            data = data.split(/[(\r\n)\r\n]+/)
            for (let i = 0; i < data.length; i++) {
                let item = data[i].split(',')
                let itemInfo = `<a href="${item[1]}" target="_blank"><p class="add-title">
                ${item[0]}</p>
            </a>`
                $('#fBox').append(itemInfo)
            }
        },
        error: function () {
            let txt = '技术宝库,http://www.ihouse3d.com/docs/docs.html'
            let fold = cookie.fold
            let path = 'C:/inetpub/wwwroot/users/' + fold + '/' + name + '/favorite.txt'
            let data = '{"type":"string","pathfilename":"' + path + '","filedata":"' + encode(txt) + '"}'
            $.ajax({
                url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                type: 'POST',
                dataType: "json",
                contentType: "application/json",
                data: data,
                success: function (data) {
                    if (data.code === '1') {
                        loadFavorite()
                    }
                }
            })

        }
    })
}

function _closeMakeBox() {
    $('#_makeBox').hide()
}

$(function () {

})

function openTakeBox() {
    $('#takeBox').show()
    $.ajax({
        type: 'GET',
        url: 'http://www.ihouse3d.com.cn/replace/replace.txt',
        success: function (data) {
            document.getElementById('txt1').value = data
        },
        error: function () {
            document.getElementById('txt1').value = ''
        }
    })
}

function loadHZ() {
    $.ajax({
        type: 'GET',
        url: 'http://www.ihouse3d.com.cn/replace/replace.txt?time=' + guid(),
        success: function (data) {
            $('#hzItemBox').html('')
            data = data.split(/[(\r\n)\r\n]+/)
            for (let i = 0; i < data.length; i++) {
                let item = data[i].split(',')
                let num = i + 1
                let info = `<div class="hzItem">
                        <div class="hzItem-icon">
                            <div class="hzItem-icon-info">
                                    <div class="hzicon-item1" onclick="changeHZ(${item[0]})">
                                        <img src="assets/img/查看.png" alt="" width="30">
                                        <p>查看</p>
                                    </div>
                                <div class="hzicon-item2">
                                    <img src="assets/img/code${num}.png" alt="" width="80">
                                </div>
                            </div>
                        </div>
                        <img src="http://www.ihouse3d.com.cn/replace/img/${item[0]}/1.png" alt="" width="100%">
                    </div>`
                $('#hzItemBox').append(info)
            }
            $('.hzItem').hover(function () {
                $(this).children('.hzItem-icon').show()
            }, function () {
                $(this).children('.hzItem-icon').hide()
            })
        },
        error: function () {

        }
    })
}

function changeHZ(id) {
    document.getElementById('hzBox').src = 'http://www.ihouse3d.com.cn/replace/index.html?id=' + id
}

function openShop() {
    $.ajax({
        url: 'http://www.ihouse3d.cn/Service1.asmx/ExecuteQuery',
        type: "post",
        dataType: "json",
        async: true,
        contentType: "application/x-www-form-urlencoded",
        data:
            {
                Database: "shopxo",
                Sql: `select username from  s_user where username='${name}'`
            },
        success: function (data) {
            if ("1" == data.code) {
                let JData = JSON.parse(data.data);
                let userList = []
                if (true == JData.ok) {
                    window.open('http://www.ihouse3d.cn/shop/public/index.php?s=/index/index/index.html&userTxt=' + name + ',' + _pwd)
                } else {
                    window.open('http://www.ihouse3d.cn/shop/public/index.php?s=/index/user/reginfo.html&userTxt=' + name + ',' + _pwd)
                }
            } else {
                //帐号不存在

            }
        },
        complete: function (xmlHttpRequest) {
        },
        error: function (err) {
            console.log(err);
        }
    });
}