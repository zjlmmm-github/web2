var strData = [], categoryType = [], secondType = [], seconItemHtml = [], leveItemHtml = [], itemArr = []
levelName = '不限', f = 0, itemInt = 10, sign = true;
var addr = 'https://www.ihouse3d.com.cn/';
var newArr = []
$(function () {
    $('#item-box').delegate('.model_mats', 'click', function (event) {
        let file = $(this).attr('file');
        let fileImg = 'https://www.ihouse3d.com.cn/ihouse/data/texture/' + file
        // file=file.replace("jpg", "3ds");
        file = "tietu," + file;
        file = "https://www.ihouse3d.com.cn/h5/SimpleTex/SimpleTex.html?file=" + file;
        document.getElementById('ModelBg').style.display = 'block'
        document.getElementById('ModelBox').src = file
        let codeImg = document.getElementById('codeImg')
        let _codeImg = document.getElementById('_codeImg')
        ShowWXImage(file, fileImg, addr, codeImg)
        ShowWXImage(file, fileImg, addr, _codeImg)
    });
    $('#item-box').delegate('.model-goods-collect', 'click', function (event) {
        let file = $(this).attr('file')
        let cookie = GetRequest()
        let ut = ''
        $.ajax({
            url: `http://www.ihouse3d.com.cn/service1.asmx/ExecuteQuery`,
            type: "post",
            dataType: "json",
            async: false,
            contentType: "application/x-www-form-urlencoded",
            data: {
                Database: "render",
                Sql: `select * from accounttype_function`
            },
            success: function (data) {
                if ("1" == data.code) {
                    let JData = JSON.parse(data.data);
                    let userList = []
                    if (true == JData.ok) {
                        let itemArr = JData.Table
                        for (let i = 0; i < itemArr.length; i++) {
                            let item = {
                                type: itemArr[i].type,
                                name: itemArr[i].name,
                                ut: itemArr[i].account_type
                            }
                            userList.push(item)
                        }
                        let obj = userList.filter(function (ele) {
                            return ele.type === cookie.ut
                        })
                        if (obj.length !== 0) {
                            ut = obj[0].ut
                        } else if (cookie.ut === '11') {
                            ut = '11'
                        }
                    }
                } else {

                }
            },
            complete: function (xmlHttpRequest) {

            },
            error: function (err) {
            }
        })
        if (ut === '0') {
            $('#qyBuy').show()
            buyFile = file
        } else {
            if (confirm('是否收藏当前贴图？') === true) {
                let jsonData = {
                    thumbnail: file,
                    companyid: cookie.gsID,
                    folder: cookie.fold,
                    useraccount: cookie.name,
                    userid: cookie.uid
                }
                $.ajax({
                    url: "http://www.ihouse3d.com.cn/Service1.asmx/BuyPersonalMaterial",
                    type: "post",
                    dataType: "json",
                    contentType: "application/x-www-form-urlencoded",
                    data: {
                        JsonBaseData: JSON.stringify(jsonData)
                    },
                    success: function (data) {
                        if (data.code === '1') {
                            alert('收藏成功！');
                            reloadMap(file)
                        } else {
                            loginOpen()
                        }
                    },
                    complete: function (xmlHttpRequest) {

                    },
                    error: function (err) {

                    }
                })

            }
        }
    });
})

function qyBuy(e) {
    if (confirm('是否收藏当前贴图？') === true) {
        if (e === '0') {
            let jsonData = {
                thumbnail: buyFile,
                companyid: cookie.gsID,
                folder: cookie.fold
            }
            $.ajax({
                url: "http://www.ihouse3d.com.cn/Service1.asmx/BuyMaterial",
                type: "post",
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                data: {
                    JsonBaseData: JSON.stringify(jsonData)
                },
                success: function (data) {
                    if (data.code === '1') {
                        alert("收藏成功！");
                        reloadMap(buyFile)
                        buyFile = ''
                    } else {
                        loginOpen()
                    }
                },
                complete: function (xmlHttpRequest) {

                },
                error: function (err) {

                }
            })
        } else {
            let jsonData = {
                thumbnail: buyFile,
                companyid: cookie.gsID,
                folder: cookie.fold,
                useraccount: cookie.name,
                userid: cookie.uid
            }
            $.ajax({
                url: "http://www.ihouse3d.com.cn/Service1.asmx/BuyPersonalMaterial",
                type: "post",
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                data: {
                    JsonBaseData: JSON.stringify(jsonData)
                },
                success: function (data) {
                    if (data.code === '1') {
                        alert('收藏成功！');
                        reloadMap(buyFile)
                    } else {
                        loginOpen()
                    }
                },
                complete: function (xmlHttpRequest) {

                },
                error: function (err) {

                }
            })
        }
        buyClose()
    }
}

function reloadMap(file) {
    let class1 = $('.active2')[0].innerHTML
    let class2 = $('.active1')[0].innerHTML
    let arr = strData
    if (class1 !== '全部') {
        arr = arr.filter(function (ele) {
            return ele[3] === class1
        })
    }
    if (class2 !== '全部') {
        arr = arr.filter(function (ele) {
            return ele[4] === class2
        })
    }
    let item = {
        url: file
    }
    buyArr.push(item)
    pushItem(arr)
}

function buyClose() {
    $('#qyBuy').hide()
}

function bigCode() {
    document.getElementById('bigCode').style.display = 'block'
}

function bigCodeOut() {
    document.getElementById('bigCode').style.display = 'none'
}

function ShowWXImage(shareAddr, thumbnail, serverAddr, img) {
    let url = serverAddr + '/service1.asmx';
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
        if (this.status === 200) {
            let blob = xhr.response;
            img.onload = function (e) {
                window.URL.revokeObjectURL(img.src);
            }
            img.src = window.URL.createObjectURL(blob);
        }
    }
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
        '  <soap12:Body>' +
        '    <GetWXShareImage xmlns="http://tempuri.org/">' +
        '      <ShareAddr>' + shareAddr + '</ShareAddr>' +
        '      <ShareThumbnail>' + thumbnail + '</ShareThumbnail>' +
        '      <ShareTitle></ShareTitle>' +
        '      <ShareDes></ShareDes>' +
        '    </GetWXShareImage>' +
        '  </soap12:Body>' +
        '</soap12:Envelope>';

    xhr.setRequestHeader('Content-Type', 'text/xml');
    xhr.send(sr);
}

function modelClose() {
    document.getElementById('ModelBg').style.display = 'none'
}

function redClose(obj) {
    obj.src = 'assets/img/model/关闭红.png'
}

function backClose(obj) {
    obj.src = 'assets/img/model/关闭.png'
}

var payData = {
    type: 2,
    user_account: name
}
var a = GetRequest()
var buyArr = []
var folder = a.fold

function guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

var m_strWebService = 'http://www.ihouse3d.com.cn/'

function Load() {
    let cookie = GetRequest()
    let ut = ''
    $.ajax({
        url: `http://www.ihouse3d.com.cn/service1.asmx/ExecuteQuery`,
        type: "post",
        dataType: "json",
        async: false,
        contentType: "application/x-www-form-urlencoded",
        data: {
            Database: "render",
            Sql: `select * from accounttype_function`
        },
        success: function (data) {
            if ("1" == data.code) {
                let JData = JSON.parse(data.data);
                let userList = []
                if (true == JData.ok) {
                    let itemArr = JData.Table
                    for (let i = 0; i < itemArr.length; i++) {
                        let item = {
                            type: itemArr[i].type,
                            name: itemArr[i].name,
                            ut: itemArr[i].account_type
                        }
                        userList.push(item)
                    }
                    let obj = userList.filter(function (ele) {
                        return ele.type === cookie.ut
                    })
                    if (obj.length !== 0) {
                        ut = obj[0].ut
                    } else if (cookie.ut === '11') {
                        ut = '11'
                    }
                }
            } else {

            }
        },
        complete: function (xmlHttpRequest) {

        },
        error: function (err) {
        }
    })
    if (ut === '0') {
        let httpUrl = m_strWebService + 'users/' + folder + '/huawen_buy.csv?time=' + guid()
        $.ajax({
            type: 'GET',
            async: false,
            url: httpUrl,
            success: function (data) {
                data = data.split('\r\n')
                data = data.filter(function (ele) {
                    return ele !== ''
                })
                for (let i = 0; i < data.length; i++) {
                    let item = data[i]
                    item = item.split(',')
                    let _item = {
                        url: item[1],
                    }
                    buyArr.push(_item)
                }
            }
        })
        let _httpUrl = m_strWebService + 'users/' + folder + '/' + name + '/huawen_buy.csv?time=' + guid()
        $.ajax({
            type: 'GET',
            async: false,
            url: _httpUrl,
            success: function (data) {
                data = data.split('\r\n')
                data = data.filter(function (ele) {
                    return ele !== ''
                })
                for (let i = 0; i < data.length; i++) {
                    let item = data[i]
                    item = item.split(',')
                    let _item = {
                        url: item[1],
                    }
                    buyArr.push(_item)
                }
            }
        })
    } else {
        let httpUrl = m_strWebService + 'users/' + folder + '/' + name + '/huawen_buy.csv?time=' + guid()
        $.ajax({
            type: 'GET',
            url: httpUrl,
            success: function (data) {
                data = data.split('\r\n')
                data = data.filter(function (ele) {
                    return ele !== ''
                })
                for (let i = 0; i < data.length; i++) {
                    let item = data[i]
                    item = item.split(',')
                    let _item = {
                        url: item[1],
                    }
                    buyArr.push(_item)
                }
            }
        })
    }

    $.ajax({
        type: 'GET',
        url: addr + 'ihouse/data/texture/huawen.csv',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        async: false,
        data: {},
        success: function (data) {
            strData = data.split("\r\n");

            strData = contains(strData, '');
            strData.forEach(function (item, index) {
                strData[index] = item.split(",");
            })
            strData = contSplice(strData);
            for (var i = 0; i < strData.length; i++) {// 一重
                categoryType[i] = strData[i][3];//设置类型‘一级’
            }
            categoryType = distinct(categoryType)//"一级"数组去重
            for (var i = 0; i < categoryType.length; i++) {//设置类型‘二级’ 一重
                secondType[i] = new Array(); //创建二维数组
                for (var j = 1; j < strData.length; j++) { //二重
                    if (categoryType[i] === strData[j][3]) {
                        secondType[i].push(strData[j][4]);//把各自符合类型的数值添加到相应的位置
                    }
                }
            }
            for (var i = 0; i < secondType.length; i++) {//"二级"数组去重
                secondType[i] = distinct(secondType[i]);//数组去重后重新赋值
            }
            strData = strData.reverse()
            for (let i = 0; i < categoryType.length; i++) {
                let classInfo = `<li><span onclick="handleScreenClick(this)">${categoryType[i]}</span></li>`
                $('#firstMenu').append(classInfo)
            }
            // for (let i = 0; i < categoryType.length; i++) {
            //     seconItemHtml[i] = `<li data-res_type="model"><span onclick="handleScreenClick(this)">${categoryType[i]}</span></li>`
            //     $('#firstMenu').append(seconItemHtml[i])
            // }
            let initial = []
            initial = strData
            pushItem(initial)
        }
    })
}

function pushItem(arr) {
    let infoArr = []
    $('#item-box').html('')
    for (let i = 0; i < arr.length; i++) {
        let size = arr[i][2].replace(/A/g, "X")
        let file = arr[i][1]
        let item = buyArr.filter(function (ele) {
            return ele.url === file
        })
        if (item.length === 0) {
            infoArr[i] = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${addr}ihouse/data/texture/${arr[i][1]}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a  class="resClickAdd"> ${arr[i][0]}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a  class="resClickAdd"> ${size} </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    <p class="model_mats" file='${arr[i][1]}'>
                        <span class="j_3d">3D浏览</span>
                    </p>
                    <p class=" model-goods-download">
                        <a onclick="return handleInstallClick()" href='${addr}ihouse/data/texture/${arr[i][1]}' class="j_download" download="logo.png" target="_blank">下载贴图</a>
                    </p>
                    <p class=" model-goods-collect" file='${arr[i][1]}'>
                        <span class="j_collect" >收藏</span>
                    </p>
                </div>
            </div>
        </div>`
        } else {
            infoArr[i] = `<div class="item-float">
            <img src="assets/img/model/buy.png" alt="" class="buyPic">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${addr}ihouse/data/texture/${arr[i][1]}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a  class="resClickAdd"> ${arr[i][0]}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a  class="resClickAdd"> ${size} </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    <p class="model_mats" file='${arr[i][1]}'>
                        <span class="j_3d">3D浏览</span>
                    </p>
                    <p class=" model-goods-download">
                        <a onclick="return handleInstallClick()" href='${addr}ihouse/data/texture/${arr[i][1]}' class="j_download" download="logo.png" target="_blank">下载贴图</a>
                    </p>
                  
                </div>
            </div>
        </div>`
        }

    }
    $('#item-box').html('');
    if (infoArr.length < 25) {
        for (let i = 0; i < infoArr.length; i++) {
            $('#item-box').append(infoArr[i])
        }
    } else {
        for (let i = 0; i < 25; i++) {
            $('#item-box').append(infoArr[i])
        }
    }
    $("#myPage").sPage({
        page: 1,//当前页码，必填
        total: arr.length,//数据总条数，必填
        pageSize: 25,//每页显示多少条数据，默认10条
        totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
        showTotal: true,//是否显示总条数，默认关闭：false
        showSkip: true,//是否显示跳页，默认关闭：false
        showPN: true,//是否显示上下翻页，默认开启：true
        prevPage: "上一页",//上翻页文字描述，默认“上一页”
        nextPage: "下一页",//下翻页文字描述，默认“下一页”
        backFun: function (page) {
            $('#item-box').html('');
            let firstNum = page * 25 - 25
            let lastNum = firstNum + 25
            if (lastNum > arr.length) {
                for (let i = firstNum; i < infoArr.length; i++) {
                    $('#item-box').append(infoArr[i])
                }
            } else {
                for (let i = firstNum; i < lastNum; i++) {
                    $('#item-box').append(infoArr[i])
                }
            }
        }
    });
}

window.onload = Load

function handleInstallClick() {
    if (name === 'undefined') {
        loginOpen()
        return false
    }
}

function distinct(a) {//数组去重封装函数
    let arr = a;
    let result = [];
    let obj = {};

    for (let i of arr) {
        if (!obj[i]) {
            result.push(i);
            obj[i] = 1;
        }
    }

    return result;
}

function contains(a, obj) {//数组分组
    var arr = [];
    a.forEach(function (item, index) {
        if (item === obj) {

        } else {
            arr.push(item);
        }
    })
    return arr;
}

function contSplice(a) {//数组截取
    var arr = [];
    a.forEach(function (item, index) {
        arr[index] = item.splice(0, 5);
    })
    return arr;
}

function handleScreenClick(obj) {
    $('.active2').removeClass("active2")
    obj.className = 'active2'
    $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="handleWholeBtn(this)">全部</span></li>`)
    leveItemHtml.length = 0
    let condition = obj.innerHTML
    let num
    for (let i = -1; condition != categoryType[i]; i++) {
        num = i + 1
    }
    let secondArr = secondType[num]
    for (let i = 0; i < secondArr.length; i++) {
        leveItemHtml[i] = `<li data-res_type="model"><span onclick="handleSecondClick(this)">${secondArr[i]}</span></li>`
        $('#secondMenu').append(leveItemHtml[i])
    }
    newArr = strData.filter(function (ele) {
        return ele[3].includes(condition)
    })

    pushItem(newArr)
}

function handleWholeClick(obj) {
    $('.active2').removeClass("active2")
    obj.className = 'active2'
    $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="handleWholeBtn(this)">全部</span></li>`)
    leveItemHtml.length = 0
    pushItem(strData)
}

function handleSearchBtn() {
    $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="handleWholeBtn(this)">全部</span></li>`)
    $('.active2').removeClass("active2")
    let condition = document.getElementById('Keyword').value
    document.getElementById('first').className = 'active2'
    let searchArr = strData.filter(function (ele) {
        return ele[0].includes(condition)
    })
    pushItem(searchArr)

}

function handleSecondClick(obj) {
    $('.active1').removeClass("active1")
    obj.className = 'active1'
    let condition = obj.innerHTML
    let secondArr = newArr.filter(function (ele) {
        return ele[4].includes(condition)
    })
    pushItem(secondArr)

}

function handleWholeBtn(obj) {
    $('.active1').removeClass("active1")
    obj.className = 'active1'
    pushItem(newArr)
}


function weChat() {
    document.getElementById('idLogin').style.display = 'none'
    document.getElementById('loginBtn-Box').style.display = 'none'
    document.getElementById('wx-qrcode').style.display = 'block'
    thirdLogin.wx("wx-qrcode");
}

function qqLogin() {
    // document.getElementById('idLogin').style.display = 'none'
    // document.getElementById('loginBtn-Box').style.display = 'none'
    var url = thirdLogin.qq();
    $("#sn-qq iframe").attr("src", url);
}

function openPanoClick() {
    if (name === 'undefined') {
        loginOpen()
        linkTO = 'pano'
    } else {
        window.open('http://www.ihouse3d.com.cn/h5/Panoramagram/index.html?username=' + name)
    }
}

function signOver() {
    if (document.getElementById('login-box').innerHTML !== '登录') {
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
    location.reload()
}

function gotoRecharge() {
    if (name !== 'undefined') {
        window.open('information.html?type=recharge')
    } else {
        linkTO = 'recharge'
        document.getElementById('login').style.display = 'block'
    }
}

