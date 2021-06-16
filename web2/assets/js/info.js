var m_strWebService = 'http://www.ihouse3d.com.cn/';
var arr = []
var newModelArr = []
var newMapArr = []
var _mapArr = []
var panoArr = []
var videoArr = []

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
var id = a.id
var modelId = a.model
var passWord = a.passW
var useId = a.useid
var companyId = a.gsID
var folder = a.fold
var ut = a.ut
var uid = a.uid
var headerImg = a.heade
var payData = {
    type: 2,
    user_account: name
}
window.onload = function () {
    document.getElementById('bigPic').src = m_strWebService + 'users/share/chenx/savefile/' + modelId + '/data_icon_1.jpg'
    $.ajax({
        type: 'GET',
        url: m_strWebService + 'users/share/chenx/savefile/' + modelId + '/data.xml',
        async: false,
        success: function (data) {
            var str = $(data).find("root").html();
            // json_obj = data.xml2json("<productinfo>" + str + "</productinfo>");
            var strs = str.split("<");
            for (let i = 1; i < strs.length; i++) {
                let strItem = strs[i].replace('bmp', '')
                strItem = strItem.replace('/>', '')
                strItem = strItem.split("=");
                let obj = {
                    img: '',
                    thumbnail: '',
                    imgWidth: '',
                    imgHeight: '',
                    RenderType: ''
                }
                let img = strItem[1].replace('Thumbnail', '')
                img = img.replace('"', '')
                img = img.replace('"', '')
                img = img.replace(' ', '')
                obj.img = img
                let thumbnail = strItem[2].replace(' imgWidth', '')
                thumbnail = thumbnail.replace('"', '')
                thumbnail = thumbnail.replace('"', '')
                obj.thumbnail = thumbnail
                let imgWidth = strItem[3].replace(' imgHeight', '')
                imgWidth = imgWidth.replace('"', '')
                imgWidth = imgWidth.replace('"', '')
                obj.imgWidth = imgWidth
                let imgHeight = strItem[4].replace(' RenderType', '')
                imgHeight = imgHeight.replace('"', '')
                imgHeight = imgHeight.replace('"', '')
                obj.imgHeight = imgHeight
                let RenderType = strItem[5].replace(' CreateTime', '')
                RenderType = RenderType.replace('"', '')
                RenderType = RenderType.replace('"', '')
                obj.RenderType = RenderType
                arr[i] = obj
            }
        }
    })
    _mapArr = arr.filter(function (ele) {
        return ele.RenderType.includes('0')
    })
    panoArr = arr.filter(function (ele) {
        return ele.RenderType.includes('1')
    })
    videoArr = arr.filter(function (ele) {
        return ele.RenderType.includes('2')
    })
    for (let i = 1; i < _mapArr.length; i++) {
        let modelInfo = `<img src='${m_strWebService}users/share/chenx/savefile/${modelId}/${_mapArr[i].thumbnail}' alt="" class="_smallPic" onclick="changeBigPic(this)" id='smallPic${i}'>`
        $('#smallPicBox').append(modelInfo)
    }
    for (let i = 0; i < modelArr.length; i++) {
        if (newModelArr.indexOf(modelArr[i]) === -1) {
            newModelArr.push(modelArr[i]);
        }
    }
    for (let i = 0; i < mapArr.length; i++) {
        if (newMapArr.indexOf(mapArr[i]) === -1) {
            newMapArr.push(mapArr[i]);
        }
    }
    if (newMapArr.length > 0) {
        $('#sucai-pic')[0].src = newMapArr[0]
    } else {
        $('#sucai-pic')[0].src = newModelArr[0]
    }
    for (let i = 0; i < newMapArr.length; i++) {
        let modelInfo = `<img src='${newMapArr[i]}' alt="" class="smallPic" onclick="changeSucai(this)">`
        $('#sucaiBox').append(modelInfo)
    }
}
var url = m_strWebService + 'users/share/chenx/savefile/' + modelId + '/data_scene.xml'
var mapArr = []
this.OnLoadScene = function (url) {
    // OnClear();
    this.mCurrentOpenSceneFile = url;
    var selectTime = new Date().getTime();//��ȡʱ���
    url = url + '?' + selectTime;
    var data = $.ajax({url: url, async: false,});
    var xmlDoc = $.parseXML(data.responseText);
    if (xmlDoc == null) {
        alert("���Ͳ����ڣ�����ϵ����֧��!");
        return;
    }
    var $xml = $(xmlDoc);

    //	$xml.find("DoorData ").each(function(j){mHouseClass.mDoorClass.OnLoadDoor_XML($(this));});
    //	$xml.find("WinData").each(function(j){mHouseClass.mWindowClass.OnLoadWindow_XML($(this));});
    $xml.find("Furniture3D").each(function (j) {
        OnLoadFurniture_XML($(this));
    });

    // ���桢����
    var iFloor = parseInt($xml.find("Floor3D").attr('num'));
    var iWall = parseInt($xml.find("SplitLine3D").attr('num'));
    var tLine3D = $xml.find("Line3D");
    var tFloorTexArray = new Array();
    var tWallTexArray = new Array();

    for (var i = 0; i < iFloor + iWall; i++) {
        var textureData = {}
        textureData.m_strFile = $(tLine3D[i]).attr('source');
        // if( i< iFloor)
        //     tFloorTexArray.push(textureData);
        // else
        //     tWallTexArray.push(textureData);

        if (textureData.m_strFile == "floor.jpg" || textureData.m_strFile == "windows/win1.png")
            continue;
        mapArr.push('http://www.ihouse3d.com.cn/ihouse/data/' + textureData.m_strFile)
    }
}


var modelArr = []
this.OnLoadFurniture_XML = function (data) {
    var strFile = $(data).attr('source');
    var k = strFile.lastIndexOf(".");
    var str = strFile.slice(k + 1);
    if (str == "a3d")
        return;

    var strJpg = strFile.slice(0, k + 1) + "jpg";

    var strPathFile = m_strWebService + 'ihouse/data/jiaju/' + strJpg;//texture
    var fLength = parseFloat($(data).attr('Length')) * 10;
    var fWidth = parseFloat($(data).attr('Width')) * 10;
    var fHeight = parseFloat($(data).attr('Height')) * 10;
    modelArr.push(strPathFile)
}

OnLoadScene(url)

// 读取户型库数据
function changeSmallPic(type, obj) {
    $('.active-btn').removeClass('active-btn')
    obj.className = 'class-btn active-btn'
    if (type === 'map') {
        $('#sucaiBox').html('')
        for (let i = 0; i < newMapArr.length; i++) {
            let modelInfo = `<img src='${newMapArr[i]}' alt="" class="smallPic" onclick="changeSucai(this)">`
            $('#sucaiBox').append(modelInfo)
        }
    } else {
        $('#sucaiBox').html('')
        for (let i = 0; i < newModelArr.length; i++) {
            let modelInfo = `<img src='${newModelArr[i]}' alt="" class="smallPic" onclick="changeSucai(this)">`
            $('#sucaiBox').append(modelInfo)
        }
    }
}

function _changeSmallPic(type, obj) {
    $('._active-btn').removeClass('_active-btn')
    obj.className = 'class-btn _active-btn'
    $('#smallPicBox').html('')
    if (type === 'pic') {
        for (let i = 0; i < _mapArr.length; i++) {
            let modelInfo = `<img src='${m_strWebService}users/share/chenx/savefile/${modelId}/${_mapArr[i].thumbnail}' alt="" class="_smallPic" onclick="changeBigPic(this)" id='smallPic${i}'>`
            $('#smallPicBox').append(modelInfo)
        }
    } else if (type === 'pano') {
        for (let i = 0; i < panoArr.length; i++) {
            let modelInfo = `<img src='${m_strWebService}users/share/chenx/savefile/${modelId}/${panoArr[i].thumbnail}' alt="" class="_smallPic" onclick="changePano(this)" id='smallPic${i}'>`
            $('#smallPicBox').append(modelInfo)
        }
    } else if (type === 'video') {
        if (videoArr.length === 0) {
            let modelInfo = `<img src='http://www.ihouse3d.com.cn/users/share/chenx/savefile/${modelId}/data_icon_1.jpg' alt="" class="_smallPic" onclick="changeVideo()">`
            $('#smallPicBox').append(modelInfo)
        } else {
            for (let i = 0; i < videoArr.length; i++) {
                let modelInfo = `<img src='${m_strWebService}users/share/chenx/savefile/${modelId}/${videoArr[i].thumbnail}' alt="" class="_smallPic" onclick="changeVideo()" id='smallPic${i}'>`
                $('#smallPicBox').append(modelInfo)
            }
        }
    }
}


function loginClose() {
    document.getElementById('login').style.display = 'none'
    document.getElementById('idLogin').style.display = 'block'
    document.getElementById('loginBtn-Box').style.display = 'flex'
    document.getElementById('wx-qrcode').style.display = 'none'
}

function handleLoginClick() {
    name = document.getElementById('name').value
    passWord = document.getElementById('password').value
    document.cookie = 'name=' + name
    document.cookie = 'passWord=' + passWord
    let password = document.getElementById('password').value
    let code = getRadomNum(6)
    let xmlhttp = new XMLHttpRequest();
    let ip = ''
    xmlhttp.open('POST', 'http://www.ihouse3d.com.cn/service1.asmx', true);
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
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {

                var value = xmlhttp.responseXML.getElementsByTagName("soap:Body")[0].childNodes[0].childNodes[0].textContent
                let txt = value.split('~')
                let companyId = txt[5]
                document.cookie = 'gsID=' + companyId
                document.cookie = 'fold=' + txt[2]
                document.cookie = 'ut=' + txt[9]
                if (value.slice(0, 1) === '1') {
                    document.getElementById('login').style.display = 'none'
                    document.getElementById('login-box').innerHTML = name
                    document.getElementById('login-box').onclick = ''
                    document.getElementById('informationName').innerHTML = name
                } else {
                    alert('账号或者密码错误')
                }

            }
        }
    }
    if (linkTO === 'pano') {
        window.open('http://www.ihouse3d.com.cn/h5/Panoramagram/index.html?username=' + name)
    } else if (linkTO === 'recharge') {
        window.location.href = 'information.html?type=recharge'
    }
    location.reload()
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
    // document.getElementById('idLogin').style.display = 'none'
    // document.getElementById('loginBtn-Box').style.display = 'none'
    var url = thirdLogin.qq();
    $("#sn-qq iframe").attr("src", url);
}

function openPanoClick() {
    if (name === 'undefined') {
        document.getElementById('login').style.display = 'block'
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


function changeBigPic(obj) {
    $('._smallPic-active').removeClass('_smallPic-active')
    obj.className = '_smallPic _smallPic-active'
    let num = obj.id
    num = num.replace('smallPic', '')
    document.getElementById('qjBox').style.display = 'none'
    document.getElementById('videoBox').style.display = 'none'
    document.getElementById('qjBox').src = ''
    document.getElementById('videoBox').src = ''
    document.getElementById('bigPic').style.display = 'block'
    $('#bigPic')[0].src = m_strWebService + 'users/share/chenx/savefile/' + modelId + '/' + _mapArr[num].img
}

function changeSucai(obj) {
    $('.smallPic-active').removeClass('smallPic-active')
    obj.className = 'smallPic smallPic-active'
    document.getElementById('sucai-pic').src = obj.src
}

function changePano(obj) {
    let num = obj.id.replace('smallPic', '')
    let picNum = panoArr[num].thumbnail.replace('_icon.jpg', '')
    let panoAddr = m_strWebService + 'users/share/chenx/savefile/' + modelId + '/' + picNum + '/ihouse.html'
    document.getElementById('bigPic').style.display = 'none'
    document.getElementById('videoBox').style.display = 'none'
    document.getElementById('videoBox').src = ''
    document.getElementById('qjBox').style.display = 'block'
    document.getElementById('qjBox').src = panoAddr
}

function changeVideo() {
    document.getElementById('bigPic').style.display = 'none'
    document.getElementById('qjBox').style.display = 'none'
    document.getElementById('qjBox').src = ''
    document.getElementById('videoBox').style.display = 'block'
    document.getElementById('videoBox').src = 'http://www.ihouse3d.com.cn/users/rendervideo/ihouse3d.mp4'
}

function base64_encode(input) {
    let _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    let output = "";
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;
    input = _utf8_encode(input);
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }
    return output;
}

function _utf8_encode(string) {
    string = string.replace(/\r\n/g, "\n");
    let utftext = "";
    for (let n = 0; n < string.length; n++) {
        let c = string.charCodeAt(n);
        if (c < 128) {
            utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }
    return utftext;
}

function gotoCloud() {
    let dataStr = '&schemeaddr=' + m_strWebService + 'users/share/chenx/savefile/' + modelId + '/data_scene.xml'
    let data = base64_encode(dataStr);
    window.open('http://www.ihouse3d.com/3d/index.html?type=0&data=' + data)
    /*if (name === 'undefined') {
        loginOpen()
    } else {
    }*/
}

function gotoRecharge() {
    if (name !== 'undefined') {
        window.location.href = 'information.html?type=recharge'
    } else {
        linkTO = 'recharge'
        document.getElementById('login-box').style.display = 'block'
    }
}

function CreateUserAccount(userID, userName, userPassword, authcode, loginIP) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://www.ihouse3d.com.cn/service1.asmx', true);
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
        '  <soap12:Body>' +
        '    <AutoLogin_SJS xmlns="http://tempuri.org/">' +
        '      <strUserAccount>' + userID + '</strUserAccount>' +
        '      <strUserName>' + userName + '</strUserName>' +
        '      <strPSW>' + userPassword + '</strPSW>' +
        '      <strAuthcode>' + authcode + '</strAuthcode>' +
        '      <strIP>' + loginIP + '</strIP>' +
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
                if (arrRes[0] != '1') {
                    //创建失败
                }
            }
        }
    }
}

function buy() {
    if (confirm('确定要收藏吗') === true) {
        let mapArr = ''
        let modelArr = ''
        for (let i = 0; i < newMapArr.length; i++) {
            let txt = newMapArr[i].replace('http://www.ihouse3d.com.cn/ihouse/data/texture/', '')
            mapArr = mapArr + ',' + txt
        }
        for (let i = 0; i < newModelArr.length; i++) {
            let txt = newModelArr[i].replace('http://www.ihouse3d.com.cn/ihouse/data/jiaju/', '')
            modelArr = modelArr + ',' + txt
        }

        if (ut !== '2') {
            let data = {
                sceneid: modelId,
                models: modelArr,
                materials: mapArr,
                companyid: companyId,
                folder: 'chenx'
            }

            $.ajax({
                url: "http://www.ihouse3d.com.cn/Service1.asmx/BuyShareScene",
                type: "post",
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                data: {
                    JsonBaseData: JSON.stringify(data)
                },
                success: function (data) {
                    if (data.code === '1') {
                        alert('收藏成功！');
                    } else {
                        if (name === 'undefined') {
                            loginOpen()
                        } else {
                            alert('该场景已被收藏！')
                        }
                    }
                },
                complete: function (xmlHttpRequest) {

                },
                error: function (err) {

                }
            })
        } else {
            let data = {
                sceneid: modelId,
                models: modelArr,
                materials: mapArr,
                companyid: companyId,
                folder: 'chenx',
                useraccount: name,
                userid: uid,
            }
            $.ajax({
                url: "http://www.ihouse3d.com.cn/Service1.asmx/BuyPersonalShareScene",
                type: "post",
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                data: {
                    JsonBaseData: JSON.stringify(data)
                },
                success: function (data) {

                    if (data.code === '1') {
                        alert(data.msg);
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
}