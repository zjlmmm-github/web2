var advPic = 1
// var changeBg = setInterval(advChange, 3000)
var itemArr = []
var m_strWebService = 'http://www.ihouse3d.com.cn/';
var mUserFolder = 'chenx'
var linkTo = ''

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

var a = GetRequest()
var name = a.name
var useId = a.useid
var headerImg = a.heade
var passWord = a.passW
var payData = {
    type: 2,
    user_account: name
}
window.onload = function () {

}

function loginClose() {
    document.getElementById('login').style.display = 'none'
    document.getElementById('idLogin').style.display = 'block'
    document.getElementById('loginBtn-Box').style.display = 'block'
    document.getElementById('wx-qrcode').style.display = 'none'
}

// function advChange() {
//     if (advPic === 1) {
//         document.getElementById('bg').style.backgroundColor = '#3bc66f';
//         document.getElementById('dBtn').style.backgroundColor = '#178fff'
//         advPic = 2
//     } else if (advPic === 2) {
//         document.getElementById('bg').style.backgroundColor = '#178fff';
//         document.getElementById('dBtn').style.backgroundColor = '#3bc66f'
//         advPic = 1
//     }
// }
//
// function advPicChangeLeft() {
//     clearInterval(changeBg)
//     advChange()
//     changeBg = setInterval(advChange, 3000)
// }
//
// function advPicChangeRight() {
//     clearInterval(changeBg)
//     advChange()
//     changeBg = setInterval(advChange, 3000)
// }

function goTo3D() {
    //window.open('http://www.ihouse3d.com.cn/h5/')
    let cookie = GetRequest();
    if (!cookie.name) {
        window.open('http://www.ihouse3d.com.cn/h5/index.html')
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

function GetInfoFromShare() {
    let dataArr = []
    let nullArr = []
    $.ajax({
        type: 'POST',
        url: 'http://www.ihouse3d.com.cn/service1.asmx/GetShareScheme',
        async: false,
        success: function (data) {
            data = JSON.parse(JSON.parse(data).data)
            let newData = data.filter(function (ele) {
                return ele.scenename.includes('diaoding')
            })
            let deleteNum = []
            for (let i = 0; i < newData.length; i++) {
                for (let a = 0; a < data.length; a++) {
                    if (data[a].scenename === newData[i].scenename) {
                        deleteNum.push(a)
                    }
                }
            }
            for (let i = 0; i < deleteNum.length; i++) {
                data.splice(deleteNum[deleteNum.length - i - 1], 1)
            }
            for (let i = 0; i < data.length; i++) {
                dataArr.push(data[data.length - i - 1])
            }

            for (let i = 0; i < dataArr.length; i++) {
                if (dataArr[i].modelcount === '0') {
                    nullArr.push(i)
                }
            }
            console.log(nullArr)
            for (let i = 0; i < nullArr.length; i++) {
                let num = nullArr[i] - i
                dataArr.splice(num, 1)
            }
        }
    })
    dataArr = dataArr.filter(function (ele) {
        return ele.state === '1'
    })
    for (let i = 0; i < dataArr.length; i++) {
        let img1 = dataArr[i].thumbnail1.replace('3ds', 'jpg')
        let img2 = dataArr[i].thumbnail2.replace('3ds', 'jpg')
        let img3 = dataArr[i].thumbnail3.replace('3ds', 'jpg')
        let img1Dis='none'
        if (img1!==''){
            img1Dis='block'
        }
        let img2Dis='none'
        if (img2!==''){
            img2Dis='block'
        }
        let img3Dis='none'
        if (img3!==''){
            img3Dis='block'
        }
        itemArr[i] = `<div class="item" onclick="openCloud(this)" id='${dataArr[i].folder}'>
            <img src='http://www.ihouse3d.com.cn/users/share/chenx/savefile/${dataArr[i].folder}/data_icon_1.jpg' alt="" class="item-pic">
            <p class="item-title">${dataArr[i].scenename}</p>
            <div class="item-more-box">
                <img src='http://www.ihouse3d.com.cn/ihouse/data/jiaju/${img1}' alt="" class="small-pic" style="display: ${img1Dis}">
                <img src='http://www.ihouse3d.com.cn/ihouse/data/jiaju/${img2}' alt="" class="small-pic" style="display: ${img2Dis}">
                <img src='http://www.ihouse3d.com.cn/ihouse/data/jiaju/${img3}' alt="" class="small-pic" style="display: ${img3Dis}">
                <a href="" class="first-item-more">
                        <span class="more-text">
                            <span>${dataArr[i].modelcount}</span>
                            个素材
                        </span>
                </a>
            </div>
        </div>`
    }
    for (let i = 0; i < 10; i++) {
        $('#box').append(itemArr[i])
    }
}

GetInfoFromShare()

function openCloud(obj) {
    document.cookie = 'modelId=' + obj.id
    window.open('info.html')
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


var scrollTopInt = 12
window.onscroll = lazyload;

function lazyload() {
    var itemOffsetTop = $('.box .item:last-child').offset().top;
    // itemOffsetTop = itemOffsetTop - 600
    // 可见区域高度
    var seeHeight = document.documentElement.clientHeight;
    // 滚动条距离顶部高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (itemOffsetTop < (seeHeight + scrollTop) + 600) {
        for (var i = scrollTopInt; i < scrollTopInt + 12; i++) {
            $('.box').append(itemArr[i]);
        }
        scrollTopInt += 12;
    }
    var a = document.documentElement.scrollTop || document.body.scrollTop;
}

function firstItem() {
    document.cookie = 'modelId=2390B27F-74E8-84C9-2F05-43AF5860B664'
    window.open('info.html')
}

function gotoRecharge() {
    if (name !== 'undefined') {
        window.location.href = 'information.html?type=recharge'
    } else {
        linkTO = 'recharge'
        document.getElementById('login').style.display = 'block'
    }
}


