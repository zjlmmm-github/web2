function _GetRequest() {
    var url = document.cookie;
    var theRequest = {};
    var strs = url.split(";");
    for (var i = 0; i < strs.length; i++) {
        strs[i] = strs[i].replace(" ", "")
        theRequest[strs[i].split("=")[0].substring(0, 5)] = strs[i].split("=")[1];
    }

    return theRequest;
}

function GetRequest() {
    var url = location.search;
    var theRequest = {};
    if (url.indexOf("?") !== -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

// var edition = 'kz'//'kz'=开装,'ihouse'=iHouse3D,'suzhou'=苏州园林,'fanmei'=泛美
var userNameId, userName, taobaolinkType = false
var userList = [], allUser = []
var img1 = '', img2 = '', linkName = ''
var a = _GetRequest()
var name = a.name
var companyId = a.gsID
var passWord = a.passW
var folder = a.fold
var ut = a.ut
var loc = GetRequest()
var locDis = loc.dis
var loadImg1 = '', loadImg2 = '', loadTitle = '3d云设计', uuidDis = '', loadUUid = '', openDis = ''
var strData = [], categoryType = [], secondType = [], seconItemHtml = [], leveItemHtml = [], itemArr = [],
    levelName = '不限', f = 0, itemInt = 10, sign = true;
window.onload = function () {
    console.log(ut)
    if (edition === 'kz') {
        // m_strWebService = 'http://3d.kaizhuang.com/'
        // load_WebService = 'http://3d.kaizhuang.com:'
        $('#tcName')[0].innerHTML = name
        if (name !== 'undefined') {
            $('.userName').show()
        }
        $('.upload-btn').hide()
        $('.kzTitle').show()
        $.ajax({
            type: 'GET',
            url: m_strWebService + 'htconfig.xml?time=' + guid(),
            success: function (data) {
                let arr = $(data).find('item')
                for (let i = 0; i < arr.length; i++) {
                    let txt = $(arr[i]).attr('name')
                    console.log(txt)
                    let objArr = $('.class-title')
                    for (let e = 0; e < objArr.length; e++) {
                        if (txt === objArr[e].innerHTML) {
                            objArr.eq(e).show()
                        }
                    }
                }
            }
        })
        $('#gxTitle').html(`<p class="table-item active-table-item" onclick="changeInfoPage('model',this)" id="model"
                           >模型资源</p><p class="table-item " id="map"
                                                      onclick="changeInfoPage('map',this)"
                    >贴图资源</p>
                        `)
        // $('#csgl').show()
        // $('#ddgl').show()
        // $('#cssz').show()
        // $('#bpxt').show()
        // $('#cppj').show()
        // $('#qb').show()
        $('#mmBtn').click()

    } else if (edition === 'ihouse') {
        $('#jsBtn').show()
        $('#jsBtn').click()
        $('#3dAdv').show()
        $('#mzy').show()
        $('#jieshao').html('<div style="margin:2%;width:96%;height:600px;background-color:#a0f0ff;" id="container_1">\n' +
            '            </div>')
        $('body').append('<script' + ' src="assets/js/jieshao.js"></' + 'script>')
    } else if (edition === 'suzhou') {
        $('#tcName')[0].innerHTML = name
        if (name !== 'undefined') {
            $('.userName').show()
        }
        $('.upload-btn').hide()
        $.ajax({
            type: 'GET',
            url: m_strWebService + 'htconfig.xml?time=' + guid(),
            success: function (data) {
                let arr = $(data).find('item')
                for (let i = 0; i < arr.length; i++) {
                    let txt = $(arr[i]).attr('name')
                    console.log(txt)
                    let objArr = $('.class-title')
                    for (let e = 0; e < objArr.length; e++) {
                        if (txt === objArr[e].innerHTML) {
                            objArr.eq(e).show()
                        }
                    }
                }
            }
        })
        $('#mmBtn').click()
    } else if (edition === 'fanmei') {
        $('#tcName')[0].innerHTML = name
        if (name !== 'undefined') {
            $('.userName').show()
        }
        $('.upload-btn').hide()
        $.ajax({
            type: 'GET',
            url: m_strWebService + 'htconfig.xml?time=' + guid(),
            success: function (data) {
                let arr = $(data).find('item')
                for (let i = 0; i < arr.length; i++) {
                    let txt = $(arr[i]).attr('name')
                    console.log(txt)
                    let objArr = $('.class-title')
                    for (let e = 0; e < objArr.length; e++) {
                        if (txt === objArr[e].innerHTML) {
                            objArr.eq(e).show()
                        }
                    }
                }
            }
        })
        $('#mmBtn').click()
    } else if (edition === 'banma') {
        $('#tcName')[0].innerHTML = name
        if (name !== 'undefined') {
            $('.userName').show()
        }
        $('.upload-btn').hide()
        $.ajax({
            type: 'GET',
            url: m_strWebService + 'htconfig.xml?time=' + guid(),
            success: function (data) {
                let arr = $(data).find('item')
                for (let i = 0; i < arr.length; i++) {
                    let txt = $(arr[i]).attr('name')
                    console.log(txt)
                    let objArr = $('.class-title')
                    for (let e = 0; e < objArr.length; e++) {
                        if (txt === objArr[e].innerHTML) {
                            objArr.eq(e).show()
                        }
                    }
                }
            }
        })
        $('#mmBtn').click()
    }
    $('.newBox-close').hover(function () {
        this.src = 'assets/img/kz/关闭红.png'
    }, function () {
        this.src = 'assets/img/kz/关闭.png'
    })
    $('.newBox-close').on('click', function () {
        $('.newBox').hide()
        ok = ''
        for (let i = 0; i < 28; i++) {
            $('.newBox-txtItem>input')[i].value = ''
        }
    })
    if (ut === '11' && edition === 'ihouse') {
        $('.class-title').show()
    }
    if (ut === '11') {
        $('#adminYB').show()
    }
    if (name === 'undefined') {
        loginOpen()
    }
    $.ajax({
        url: m_strWebService + `service1.asmx/ExecuteQuery`,
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: {
            Database: "render",
            Sql: `select * from accounttype_function`
        },
        success: function (data) {
            console.log(data)
            if ("1" == data.code) {
                let JData = JSON.parse(data.data);
                if (true == JData.ok) {
                    let itemArr = JData.Table
                    for (let i = 0; i < itemArr.length; i++) {
                        let item = {
                            type: itemArr[i].type,
                            name: itemArr[i].name,
                            ut: itemArr[i].account_type,
                            gs: itemArr[i].companyid
                        }
                        userList.push(item)
                    }
                    if (ut !== '11') {
                        $('#makeUserType').hide()
                        let obj = userList.filter(function (ele) {
                            return ele.type === ut
                        })
                        obj = obj[0]
                        if (obj.ut !== '2') {
                            // $('#modelBtn').show()
                            // $('#wjBtn').show()
                            $('#pinpai').show()

                            $('#gongxiang').show()
                            $('#loadPageBtn').show()
                        } else {
                            document.getElementById('makeUserType').style.display = 'none'
                            $('.Menu-item')[0].style.display = 'none'
                            $('.Menu-item')[2].style.display = 'none'
                            $('.Menu-item')[3].style.display = 'none'
                        }
                    } else {
                        // $('#modelBtn').show()
                        $('#wjBtn').show()

                        $('#gongxiang').show()
                        $('#loadPageBtn').show()

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
    if (name === 'hah' || name === 'chenx' || name === 'zhouqj' || name === 'zhl001' || name === 'xnf002' || name === 'hyb' || name === 'xnf001' || ut === '11' || name === 'zhl002') {
        document.getElementById('modelBtn').style.display = 'block'
    }

    let loadData = {
        type: 1,
        companyid: companyId
    }
    if (folder === 'undefined' || folder === undefined) {
        folder = ''
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

// function handleLoginClick() {
//     name = document.getElementById('name').value
//     passWord = document.getElementById('password').value
//     let password = document.getElementById('password').value
//     let code = guid(6)
//     let xmlhttp = new XMLHttpRequest();
//     let ip = ''
//     xmlhttp.open('POST', m_strWebService + 'service1.asmx', true);
//     var sr =
//         '<?xml version="1.0" encoding="utf-8"?>' +
//         '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
//         '  <soap12:Body>' +
//         '    <Login xmlns="http://tempuri.org/">' +
//         '      <strName>' + name + '</strName>' +
//         '      <strPSW>' + password + '</strPSW>' +
//         '      <strAuthcode>' + code + '</strAuthcode>' +
//         '      <strIP>' + ip + '</strIP>' +
//         '    </Login>' +
//         '  </soap12:Body>' +
//         '</soap12:Envelope>';
//
//     xmlhttp.setRequestHeader('Content-Type', 'text/xml');
//     xmlhttp.send(sr);
//
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState == 4) {
//             if (xmlhttp.status == 200) {
//                 var value = xmlhttp.responseXML.getElementsByTagName("soap:Body")[0].childNodes[0].childNodes[0].textContent
//                 let txt = value.split('~')
//                 let companyId = txt[5]
//                 document.cookie = 'name=' + name
//                 document.cookie = 'passWord=' + passWord
//                 document.cookie = 'gsID=' + companyId
//                 document.cookie = 'fold=' + txt[2]
//                 document.cookie = 'ut=' + txt[9]
//                 if (value.slice(0, 1) === '1') {
//                     location.reload()
//                 } else {
//                     alert('账号或者密码错误')
//                 }
//
//             }
//         }
//     }
// }

function lookJiage(obj) {
    obj.style.display = 'none'
    document.getElementById('kaitong').style.display = 'block'
    document.getElementById('jiage').style.display = 'block'
}

function getBase64(img) {
    function getBase64Image(img, width, height) {//width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
        var canvas = document.createElement("canvas");
        canvas.width = width ? width : img.width;
        canvas.height = height ? height : img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        var dataURL = canvas.toDataURL();
        return dataURL;
    }

    var image = new Image();
    image.crossOrigin = '';
    image.src = img;
    var deferred = $.Deferred();
    if (img) {
        image.onload = function () {
            deferred.resolve(getBase64Image(image));//将base64传给done上传处理
        }
        return deferred.promise();//问题要让onload完成后再return sessionStorage['imgTest']
    }
}


window.addEventListener("DOMContentLoaded", contentLoaded, false);

function contentLoaded() {
    document.getElementById('file1').addEventListener('change',
        ProcessFile1, false);
    document.getElementById('file2').addEventListener('change',
        ProcessFile2, false);
    document.getElementById('changeFile1').addEventListener('change',
        ProcessFile6, false);
    document.getElementById('changeFile2').addEventListener('change',
        ProcessFile7, false);
    document.getElementById('mapFile').addEventListener('change',
        ProcessFile3, false);
    document.getElementById('_changeMaps').addEventListener('change',
        _ProcessFile3, false);
    document.getElementById('changeMaps').addEventListener('change',
        ProcessFile4, false);
    document.getElementById('modelFile').addEventListener('change',
        modelFile, false);
    document.getElementById('pp-file').addEventListener('change',
        ppFile, false);
    document.getElementById('wjFile').addEventListener('change',
        wjFile, false);
    document.getElementById('changeGx').addEventListener('change',
        changeGx, false);
}


function ppFile() {
    let obj = document.getElementById('pp-file')
    let file = obj.files[0]
    let picName = file.name
    let reader = new FileReader();
    reader.onload = function (event) {
        let txt = event.target.result;
        $("#pp-pic").attr('src', txt);//将图片base64字符串赋值给img的src
        obj.type = 'text'
        obj.type = 'file'
        $.ajax({
            type: 'POST',
            url: m_strWebService + 'Service1.asmx/SetCompanyBrandImage',
            data: {
                CompnayID: companyId,
                Folder: folder,
                ImageName: picName,
                Base64Image: txt
            },
            success: function (data) {
            }
        })
    };
    reader.readAsDataURL(file);
}

function ppFileOut() {
    document.getElementById('pp-file').style.display = 'none'
    document.getElementById('pp-btn').style.display = 'none'
}

function ppFileOver() {
    document.getElementById('pp-file').style.display = 'block'
    document.getElementById('pp-btn').style.display = 'block'
}

function modelFile() {
    let obj = document.getElementById('modelFile')
    let file = document.getElementById('modelFile').files
    let sucai = document.getElementById('model-sucai')
    let xuanran = document.getElementById('model-xuanran')
    let sucaiFather = sucai.parentNode
    let xuanranFather = xuanran.parentNode
    // let li = document.querySelectorAll("#modelFile p")
    // let fileList = []
    // fileList = fileList.concat(Array.from(file));

    if (xuanranFather.style.display === 'none') {
        for (let i = 0; i < file.length; i++) {
            reviewFile(file[i])
            pushFile(file[i])
            // let fileName = file[i].name
            // let dis = 'no'
            // for (let i = 0; i < scNameArr.length; i++) {
            //     if (scNameArr[i] === fileName) {
            //         dis = 'yes'
            //     }
            // }
            // if (dis === 'no') {
            //     reviewFile(file[i])
            //     pushFile(file[i])
            // }
        }
    } else {
        for (let i = 0; i < file.length; i++) {
            _reviewFile(file[i])
            _pushFile(file[i])
            // let fileName = file[i].name
            // let dis = 'no'
            // for (let i = 0; i < xrNameArr.length; i++) {
            //     if (xrNameArr[i] === fileName) {
            //         dis = 'yes'
            //     }
            // }
            // if (dis === 'no') {
            //     _reviewFile(file[i])
            //     _pushFile(file[i])
            // }
        }
    }

    obj.type = 'text'
    obj.type = 'file'
}

var modelAdd = []
var vrAdd = []

function pushFile(file) {
    let fd = new FileReader();
    fd.readAsDataURL(file)
    fd.onload = function (event) {
        let url = fd.result
        let txt = file.name.split('.')[1]
        if (txt === '3DS') {
            let fileName = file.name.split('.')[0]
            document.getElementById('newModelName').value = fileName
        }
        let size = file.size / 1000
        size = size.toFixed(1)
        let scInfo
        if (txt === 'jpg' || txt === 'png') {
            scInfo = `<p class="file-item" onmouseover="fileItemOver(this)" onmouseout="fileItemOut(this)">
                        <span class="file-name">
                        <img src='${url}' width="40" height="40">
                        <span class="fileName">${file.name}</span>
                        <i class="el-icon-close" style="display: none;margin-left: 5px" onclick="fileDelete(this)"></i>
                        <a style="display: none;margin-left: 5px;color:#409eff" class="icondownload" target="_blank" download="ihouse3d">
                                <i class="el-icon-download"></i></a></span>
                        <span class="file-size">${size}kb</span>
                      </p>`
        } else {
            scInfo = `<p class="file-item" onmouseover="fileItemOver(this)" onmouseout="fileItemOut(this)">
                         <span class="file-name">
                         <i class="el-icon-document" style="font-size: 40px"></i>
                         <span class="fileName">${file.name}</span>
                         <i class="el-icon-close" style="display: none;margin-left: 5px" onclick="fileDelete(this)"></i>
                         <a style="display: none;margin-left: 5px;color:#409eff" class="icondownload" target="_blank" download="ihouse3d">
                                <i class="el-icon-download"></i></a></span>
                         <span class="file-size">${size}kb</span>
                       </p>`
        }
        $('#model-sucai').append(scInfo)
    }
}

function _pushFile(file) {
    let fd = new FileReader();
    fd.readAsDataURL(file)
    fd.onload = function (event) {
        let url = fd.result
        let txt = file.name.split('.')[1]
        let size = file.size / 1000
        size = size.toFixed(1)
        let scInfo
        if (txt === 'jpg' || txt === 'png') {
            scInfo = `<p class="file-item" onmouseover="fileItemOver(this)" onmouseout="fileItemOut(this)">
                        <span class="file-name">
                        <img src='${url}' width="40" height="40">
                        <span class="fileName">${file.name}</span>
                        <i class="el-icon-close" style="display: none;margin-left: 5px" onclick="fileDelete(this)"></i>
                        <a style="display: none;margin-left: 5px;color:#409eff" class="icondownload" target="_blank" download="ihouse3d">
                                <i class="el-icon-download"></i></a></span>
                        <span class="file-size">${size}kb</span>
                      </p>`
        } else {
            scInfo = `<p class="file-item" onmouseover="fileItemOver(this)" onmouseout="fileItemOut(this)">
                        <span class="file-name">
                        <i class="el-icon-document" style="font-size: 40px"></i>
                        <span class="fileName">${file.name}</span>
                        <i class="el-icon-close" style="display: none;margin-left: 5px" onclick="fileDelete(this)"></i>
                        <a style="display: none;margin-left: 5px;color:#409eff" class="icondownload" target="_blank" download="ihouse3d">
                                <i class="el-icon-download"></i></a></span>
                        <span class="file-size">${size}kb</span>
                      </p>`
        }
        $('#model-xuanran').append(scInfo)
    }
}

function _reviewFile(file) {
    let fd = new FileReader();
    fd.readAsArrayBuffer(file)
    fd.onload = function (event) {
        let arrayBuffer = fd.result;
        // let base64Binary = btoa(new Uint8Array(arrayBuffer).reduce(function (data, byte) {
        //    return data + String.fromCharCode(byte)
        // }))
        var base64Binary = btoa(new Uint8Array(arrayBuffer).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
        }, ''));
        let size = file.size / 1000
        size = size.toFixed(1)
        let item = {
            name: file.name,
            baseUrl: base64Binary,
            size: size + 'kb'
        }
        vrAdd.push(item)
    }
}

function reviewFile(file) {
    let fd = new FileReader();
    fd.readAsArrayBuffer(file)
    fd.onload = function (event) {
        let arrayBuffer = fd.result;
        var base64Binary = btoa(new Uint8Array(arrayBuffer).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
        }, ''));
        let size = file.size / 1000
        size = size.toFixed(1)
        let item = {
            name: file.name,
            baseUrl: base64Binary,
            size: size + 'kb'
        }
        modelAdd.push(item)
    }
}

var modelClass1 = '', modelClass2 = '', modelClass3 = '', path1 = '', path2 = '', path3 = '', modelUUid = ''

function loadModel() {
    let ifType = true
    let modelName = document.getElementById('newModelName').value
    let chang = document.getElementById('mchang').value
    let kuan = document.getElementById('mkuan').value
    let gao = document.getElementById('mgao').value
    let input = $($('#modelClassTxt').children()[0]).children()[0]
    let modelClassTxt = input.value
    modelClassTxt = modelClassTxt.replace(/ /g, '')
    modelClass1 = encodeURIComponent(modelClassTxt.split('/')[0])
    modelClass2 = encodeURIComponent(modelClassTxt.split('/')[1])
    modelClass3 = encodeURIComponent(modelClassTxt.split('/')[2])
    let fzType = document.getElementById('mfz').value
    if (fzType === '地面') {
        fzType = '0'
    } else if (fzType === '墙面') {
        fzType = '1'
    } else if (fzType === '顶面') {
        fzType = '2'
    } else if (fzType === '通用') {
        fzType = '-1'
    }
    path1 = guid(8)
    path2 = guid(8)
    path3 = guid(8)
    modelUUid = guid(8)
    if (modelName === '' || chang === '' || kuan === '' || gao === '' || fzType === '') {
        alert('请正确填写模型信息！')
    } else {
        if (changeUUid !== '') {
            modelUUid = changeUUid
            if (changeClass1 !== modelClass1 || changeClass2 !== modelClass2 || changeClass3 !== modelClass3) {
                let classHttp = new XMLHttpRequest()
                classHttp.open('POST', m_strWebService + 'service2.asmx', true);
                let classData =
                    '<?xml version="1.0" encoding="utf-8"?>' +
                    '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                    '  <soap12:Body>' +
                    '    <ModifyModelUUID xmlns="http://tempuri.org/">' +
                    '       <strname>' + modelName + '</strname>' +
                    '       <strsize>' + chang + '-' + kuan + '-' + gao + '</strsize>' +
                    '       <strclass1>' + modelClass1 + '</strclass1>' +
                    '       <strclass2>' + modelClass2 + '</strclass2>' +
                    '       <strclass3>' + modelClass3 + '</strclass3>' +
                    '       <itype>-1</itype>' +
                    '       <fPrice>0</fPrice>' +
                    '       <strUUID>' + modelUUid + '</strUUID>' +
                    '       <strAttribute></strAttribute>' +
                    '       <strModelName></strModelName>' +
                    '       <strNewUUID>' + modelUUid + '</strNewUUID>' +
                    '       <strReplaceMaterial>0</strReplaceMaterial>' +
                    '       <strStyle>-1</strStyle>' +
                    '       <strProprietor></strProprietor>' +
                    '       <strNumber></strNumber>' +
                    '    </ModifyModelUUID>' +
                    '  </soap12:Body>' +
                    '</soap12:Envelope>'
                classHttp.setRequestHeader('Content-Type', 'text/xml');
                classHttp.send(classData)
                classHttp.onreadystatechange = function () {
                    if (classHttp.readyState == 4) {
                        if (classHttp.status == 200) {

                        }
                    }
                }
            }
        } else {
            let jpg = modelName + '.jpg'
            let ds = modelName + '.3DS'
            let jpgArr = modelAdd.filter(function (ele) {
                return ele.name === jpg
            })
            let dsArr = modelAdd.filter(function (ele) {
                return ele.name === ds
            })
            if (jpgArr.length === 0) {
                alert('缺少jgp文件！')
                ifType = false
            }
            if (dsArr.length === 0) {
                alert('缺少3DS文件！')
                ifType = false
            }
        }
        if (ifType) {
            let loadUUid1 = new XMLHttpRequest()
            loadUUid1.open('POST', m_strWebService + 'service2.asmx', true);
            let loadData1 =
                '<?xml version="1.0" encoding="utf-8"?>' +
                '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                '  <soap12:Body>' +
                '    <AddClass xmlns="http://tempuri.org/">' +
                '       <strName>' + modelClass1 + '</strName>' +
                '       <strUUID>' + path1 + '</strUUID>' +
                '    </AddClass>' +
                '  </soap12:Body>' +
                '</soap12:Envelope>'
            loadUUid1.setRequestHeader('Content-Type', 'text/xml');
            loadUUid1.send(loadData1);
            loadUUid1.onreadystatechange = function () {
                if (loadUUid1.readyState == 4) {
                    if (loadUUid1.status == 200) {
                        let txt1 = $(loadUUid1.responseXML).find("AddClassResult").html()
                        path1 = txt1
                        let loadUUid2 = new XMLHttpRequest()
                        loadUUid2.open('POST', m_strWebService + 'service2.asmx', true);
                        let loadData2 =
                            '<?xml version="1.0" encoding="utf-8"?>' +
                            '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                            '  <soap12:Body>' +
                            '    <AddClass xmlns="http://tempuri.org/">' +
                            '       <strName>' + modelClass2 + '</strName>' +
                            '       <strUUID>' + path2 + '</strUUID>' +
                            '    </AddClass>' +
                            '  </soap12:Body>' +
                            '</soap12:Envelope>'
                        loadUUid2.setRequestHeader('Content-Type', 'text/xml');
                        loadUUid2.send(loadData2);
                        loadUUid2.onreadystatechange = function () {
                            if (loadUUid2.readyState == 4) {
                                if (loadUUid2.status == 200) {
                                    let txt2 = $(loadUUid2.responseXML).find("AddClassResult").html()
                                    path2 = txt2
                                    let loadUUid3 = new XMLHttpRequest()
                                    loadUUid3.open('POST', m_strWebService + 'service2.asmx', true);
                                    let loadData3 =
                                        '<?xml version="1.0" encoding="utf-8"?>' +
                                        '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                                        '  <soap12:Body>' +
                                        '    <AddClass xmlns="http://tempuri.org/">' +
                                        '       <strName>' + modelClass3 + '</strName>' +
                                        '       <strUUID>' + path3 + '</strUUID>' +
                                        '    </AddClass>' +
                                        '  </soap12:Body>' +
                                        '</soap12:Envelope>'
                                    loadUUid3.setRequestHeader('Content-Type', 'text/xml');
                                    loadUUid3.send(loadData3);
                                    loadUUid3.onreadystatechange = function () {
                                        if (loadUUid3.readyState == 4) {
                                            if (loadUUid3.status == 200) {
                                                let txt3 = $(loadUUid3.responseXML).find("AddClassResult").html()
                                                path3 = txt3
                                                console.log(taobaolinkType)
                                                if (app.taobaoLink !== '' || taobaolinkType === true) {
                                                    let name = modelName;
                                                    let thumbnail = path1 + '/' + path2 + '/' + path3 + '/' + modelUUid + '/' + modelName + '/' + modelName + '.jpg';// '模型、贴图不带ip缩略图';
                                                    let url = app.taobaoLink;
                                                    let expanded = '';//扩展信息，暂时输入空字符串
                                                    let strSQL = `delete from resource_expand where thumbnail='${thumbnail}';insert into resource_expand(thumbnail,name,url,expanded)values('${thumbnail}','${name}','${url}','${expanded}')`;

                                                    $.ajax({
                                                        url: m_strWebService + 'Service1.asmx/ExecuteNonQuery',
                                                        type: "post",
                                                        dataType: "json",
                                                        contentType: "application/x-www-form-urlencoded",
                                                        data:
                                                            {
                                                                Database: "render",
                                                                Sql: strSQL
                                                            },
                                                        success: function (data) {
                                                            if ("0" == data.code) {
                                                                alert(data.msg);
                                                            } else {
                                                                alert('保存成功');
                                                            }
                                                        },
                                                        error: function (err) {
                                                            console.log(err);
                                                        }
                                                    });
                                                }
                                                if (modelAdd.length === 0 && vrAdd.length === 0) {
                                                    let lastHttp = new XMLHttpRequest()
                                                    lastHttp.open('POST', m_strWebService + 'service2.asmx', true)
                                                    let lastData =
                                                        '<?xml version="1.0" encoding="utf-8"?>' +
                                                        '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                                                        '  <soap12:Body>' +
                                                        '    <ExportModel xmlns="http://tempuri.org/">' +
                                                        '    </ExportModel>' +
                                                        '  </soap12:Body>' +
                                                        '</soap12:Envelope>'
                                                    lastHttp.setRequestHeader('Content-Type', 'text/xml');
                                                    lastHttp.send(lastData)
                                                    lastHttp.onreadystatechange = function () {
                                                        if (lastHttp.readyState == 4) {
                                                            if (lastHttp.status == 200) {
                                                            }
                                                        }
                                                    }
                                                    alert('修改成功！')
                                                    let classHttp = new XMLHttpRequest()
                                                    classHttp.open('POST', m_strWebService + 'service2.asmx', true)
                                                    let classData =
                                                        '<?xml version="1.0" encoding="utf-8"?>' +
                                                        '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                                                        '  <soap12:Body>' +
                                                        '    <ChangeModelClass xmlns="http://tempuri.org/">' +
                                                        '       <strUUID>' + modelUUid + '</strUUID>' +
                                                        '       <strNewClass1>' + modelClass1 + '</strNewClass1>' +
                                                        '       <strNewClass2>' + modelClass2 + '</strNewClass2>' +
                                                        '       <strNewClass3>' + modelClass3 + '</strNewClass3>' +
                                                        '       <strNewName>' + modelName + '</strNewName>' +
                                                        '    </ChangeModelClass>' +
                                                        '  </soap12:Body>' +
                                                        '</soap12:Envelope>'
                                                    classHttp.setRequestHeader('Content-Type', 'text/xml');
                                                    classHttp.send(classData)
                                                    classHttp.onreadystatechange = function () {
                                                        if (classHttp.readyState == 4) {
                                                            if (classHttp.status == 200) {
                                                            }
                                                        }
                                                    }
                                                    if (modelLoadType === '' && $('.active-class')[0].innerHTML === '个人库') {
                                                        $.ajax({
                                                            url: m_strWebService + 'Service1.asmx/ExportPersonalModel',
                                                            type: "post",
                                                            dataType: "json",
                                                            async: false,
                                                            contentType: "application/x-www-form-urlencoded",
                                                            data: {
                                                                strUserAccount: name,
                                                                strUserID: cookie.uid,
                                                                strFolder: folder
                                                            },
                                                            success: function (data) {
                                                                document.getElementById('newModel').style.display = 'none'
                                                                modelLoadType = ''
                                                                $('._active-table-item').click()
                                                            },
                                                            complete: function (xmlHttpRequest) {

                                                            },
                                                            error: function (err) {

                                                            }
                                                        })
                                                    } else if (modelLoadType === '' && $('.active-class')[0].innerHTML === '企业共享库') {
                                                        $.ajax({
                                                            url: m_strWebService + "Service1.asmx/ExportModelByCompanyID",
                                                            type: "post",
                                                            dataType: "json",
                                                            async: false,
                                                            contentType: "application/x-www-form-urlencoded",
                                                            data: {
                                                                strCompanyID: companyId,
                                                                strFolder: folder
                                                            },
                                                            success: function (data) {
                                                                document.getElementById('newModel').style.display = 'none'
                                                                modelLoadType = ''
                                                                $('.active-table-item').click()
                                                            },
                                                            complete: function (xmlHttpRequest) {

                                                            },
                                                            error: function (err) {

                                                            }
                                                        })
                                                    } else if (modelLoadType === '' && $('.active-class')[0].innerHTML === '平台共享库') {
                                                        $.ajax({
                                                            url: m_strWebService + "Service1.asmx/ExportModelByCompanyID",
                                                            type: "post",
                                                            dataType: "json",
                                                            async: false,
                                                            contentType: "application/x-www-form-urlencoded",
                                                            data: {
                                                                strCompanyID: companyId,
                                                                strFolder: folder
                                                            },
                                                            success: function (data) {
                                                                document.getElementById('newModel').style.display = 'none'
                                                                modelLoadType = ''
                                                                $('.active-table-item').click()
                                                            },
                                                            complete: function (xmlHttpRequest) {

                                                            },
                                                            error: function (err) {

                                                            }
                                                        })
                                                    }
                                                    if (modelLoadType === 'mzy') {
                                                        $.ajax({
                                                            url: m_strWebService + 'Service1.asmx/ExportPersonalModel',
                                                            type: "post",
                                                            dataType: "json",
                                                            async: false,
                                                            contentType: "application/x-www-form-urlencoded",
                                                            data: {
                                                                strUserAccount: name,
                                                                strUserID: cookie.uid,
                                                                strFolder: folder
                                                            },
                                                            success: function (data) {
                                                                $('._active-table-item').click()
                                                            },
                                                            complete: function (xmlHttpRequest) {

                                                            },
                                                            error: function (err) {

                                                            }
                                                        })
                                                    } else if (modelLoadType === 'qiye') {
                                                        $.ajax({
                                                            url: m_strWebService + "Service1.asmx/ExportModelByCompanyID",
                                                            type: "post",
                                                            dataType: "json",
                                                            async: false,
                                                            contentType: "application/x-www-form-urlencoded",
                                                            data: {
                                                                strCompanyID: companyId,
                                                                strFolder: folder
                                                            },
                                                            success: function (data) {
                                                                //alert(data.msg);
                                                                console.log(23)
                                                                $('.active-table-item').click()
                                                            },
                                                            complete: function (xmlHttpRequest) {

                                                            },
                                                            error: function (err) {

                                                            }
                                                        })
                                                    }

                                                } else if (modelAdd.length === 0 && vrAdd.length !== 0) {
                                                    modelAjax(0, vrAdd.length)
                                                } else {
                                                    sucaiAjax(0, modelAdd.length)
                                                }

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    taobaolinkType = false
}

function modelAjax(firstNum, lastNum) {
    document.getElementById('jindu').style.display = 'block'
    let gsID = companyId
    if (modelLoadType === 'mzy') {
        gsID = '9999'
    }
    let modelName = document.getElementById('newModelName').value
    let chang = document.getElementById('mchang').value
    let kuan = document.getElementById('mkuan').value
    let gao = document.getElementById('mgao').value
    let fzType = document.getElementById('mfz').value
    if (fzType === '地面') {
        fzType = '0'
    } else if (fzType === '墙面') {
        fzType = '1'
    } else if (fzType === '顶面') {
        fzType = '2'
    } else if (fzType === '通用') {
        fzType = '-1'
    }
    if (changeUUid !== '') {
        modelUUid = changeUUid
    }
    setTimeout(function () {
        let path = 'ihouse\\data\\jiaju\\' + path1 + '\\' + path2 + '\\' + path3 + '\\' + modelUUid + '\\' + modelName + '\\vrscene\\'
        let pathName = vrAdd[firstNum].name
        let baseUrl = vrAdd[firstNum].baseUrl
        let size = vrAdd[firstNum].size
        let filePath = path1 + '\\\\' + path2 + '\\\\' + path3 + '\\\\' + modelUUid + '\\\\' + modelName + '\\\\vrscene\\\\' + pathName
        let pathInfo = `<p class="jindu-item">${vrAdd[firstNum].name}上传中</p>`
        $('#jindu-box').append(pathInfo)
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', m_strWebService + 'service2.asmx', true);
        let SceneFilePath = sessionStorage.getItem("SceneFilePath");

        var sr =
            '<?xml version="1.0" encoding="utf-8"?>' +
            '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
            '  <soap12:Body>' +
            '    <SaveFile xmlns="http://tempuri.org/">' +
            '      <begin>0</begin>' +
            '      <FileName>' + pathName + '</FileName>' +
            '      <path>' + path + '</path>' +
            '      <bindata>' + baseUrl + '</bindata>' +
            '      <strname>' + modelName + '</strname>' +
            '      <strPathfile>' + filePath + '</strPathfile>' +
            '      <strsize>' + chang + '-' + kuan + '-' + gao + '</strsize>' +
            '      <class1>' + modelClass1 + '</class1>' +
            '      <class2>' + modelClass2 + '</class2>' +
            '      <class3>' + modelClass3 + '</class3>' +
            '      <itype>' + fzType + '</itype>' +
            '      <imode>1</imode>' +
            '      <strFileSize>' + size + '</strFileSize>' +
            '      <strUUID>' + modelUUid + '</strUUID>' +
            '      <strAccountType>' + ut + '</strAccountType>' +
            '      <strCompanyID>' + gsID + '</strCompanyID>' +
            '      <strUserID>' + a.uid + '</strUserID>' +
            '      <strModelName>' + modelName + '</strModelName>' +
            '    </SaveFile>' +
            '  </soap12:Body>' +
            '</soap12:Envelope>';

        xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.send(sr);

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    // let size2 = $(xmlhttp.responseText).find('SaveFileResult').html()
                    // size2 = size2 / 1000
                    // size2 = size2.toFixed(1) + 'kb'
                    // let item = vrAdd.filter(function (ele) {
                    //     return ele.size.includes(size2)
                    // })
                    //
                    // item = item[0]
                    let _pathInfo = `<p class="jindu-item" style="color: red">${pathName}上传完成</p>`
                    $('#jindu-box').append(_pathInfo)
                    if (++firstNum < lastNum) {
                        modelAjax(firstNum, lastNum)
                    }
                    if (firstNum === vrAdd.length) {
                        let dsHttp = new XMLHttpRequest();
                        dsHttp.open('POST', m_strWebService + 'service2.asmx', true);
                        let dsPath = path1 + '\\' + path2 + '\\' + path3 + '\\' + modelUUid + '\\' + modelName + '\\' + modelName + '.3DS'
                        let dsData =
                            '<?xml version="1.0" encoding="utf-8"?>' +
                            '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                            '  <soap12:Body>' +
                            '    <SetModelFormat xmlns="http://tempuri.org/">' +
                            '<strModelPathName>' + dsPath + '</strModelPathName>' +
                            '    </SetModelFormat>' +
                            '  </soap12:Body>' +
                            '</soap12:Envelope>'
                        dsHttp.setRequestHeader('Content-Type', 'text/xml');
                        dsHttp.send(dsData)
                        dsHttp.onreadystatechange = function () {
                            if (dsHttp.readyState == 4) {
                                if (dsHttp.status == 200) {
                                    let http = new XMLHttpRequest();
                                    http.open('POST', m_strWebService + 'service2.asmx', true);
                                    let data =
                                        '<?xml version="1.0" encoding="utf-8"?>' +
                                        '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                                        '  <soap12:Body>' +
                                        '    <NotifyServicerDownloadFile xmlns="http://tempuri.org/">' +
                                        '           <strClass1>' + modelClass1 + '</strClass1>' +
                                        '           <strClass2>' + modelClass2 + '</strClass2>' +
                                        '           <strClass3>' + modelClass3 + '</strClass3>' +
                                        '           <modelName>' + modelName + '</modelName>' +
                                        '    </NotifyServicerDownloadFile>' +
                                        '  </soap12:Body>' +
                                        '</soap12:Envelope>'
                                    http.setRequestHeader('Content-Type', 'text/xml');
                                    http.send(data);
                                    http.onreadystatechange = function () {
                                        if (http.readyState == 4) {
                                            if (http.status == 200) {
                                                let changeHttp = new XMLHttpRequest()
                                                let changePath = 'data\\jiaju\\' + path1 + '\\' + path2 + '\\' + path3 + '\\' + modelUUid + '\\' + modelName + '\\vrscene\\' + modelName + '.vrscene'
                                                changeHttp.open('POST', m_strWebService + 'service2.asmx', true)
                                                let changeData =
                                                    '<?xml version="1.0" encoding="utf-8"?>' +
                                                    '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                                                    '  <soap12:Body>' +
                                                    '    <TransformVRScene xmlns="http://tempuri.org/">' +
                                                    '    <strVRSceneFile>' + changePath + '</strVRSceneFile>' +
                                                    '    </TransformVRScene>' +
                                                    '  </soap12:Body>' +
                                                    '</soap12:Envelope>'
                                                changeHttp.setRequestHeader('Content-Type', 'text/xml')
                                                changeHttp.send(changeData)
                                                changeHttp.onreadystatechange = function () {
                                                    if (changeHttp.readyState == 4) {
                                                        if (changeHttp.status == 200) {
                                                            let lastHttp = new XMLHttpRequest()
                                                            lastHttp.open('POST', m_strWebService + 'service2.asmx', true)
                                                            let lastData =
                                                                '<?xml version="1.0" encoding="utf-8"?>' +
                                                                '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                                                                '  <soap12:Body>' +
                                                                '    <ExportModel xmlns="http://tempuri.org/">' +
                                                                '    </ExportModel>' +
                                                                '  </soap12:Body>' +
                                                                '</soap12:Envelope>'
                                                            lastHttp.setRequestHeader('Content-Type', 'text/xml');
                                                            lastHttp.send(lastData)
                                                            lastHttp.onreadystatechange = function () {
                                                                if (lastHttp.readyState == 4) {
                                                                    if (lastHttp.status == 200) {
                                                                        alert('上传成功')
                                                                        modelAdd.length = 0
                                                                        vrAdd.length = 0
                                                                        document.getElementById('newModel').style.display = 'none'

                                                                        closeJindu()
                                                                        if (modelLoadType === 'mzy') {
                                                                            $.ajax({
                                                                                url: m_strWebService + 'Service1.asmx/ExportPersonalModel',
                                                                                type: "post",
                                                                                dataType: "json",
                                                                                async: false,
                                                                                contentType: "application/x-www-form-urlencoded",
                                                                                data: {
                                                                                    strUserAccount: name,
                                                                                    strUserID: cookie.uid,
                                                                                    strFolder: folder
                                                                                },
                                                                                success: function (data) {
                                                                                    $('._active-table-item').click()
                                                                                },
                                                                                complete: function (xmlHttpRequest) {

                                                                                },
                                                                                error: function (err) {

                                                                                }
                                                                            })
                                                                        } else if (modelLoadType === 'qiye') {
                                                                            $.ajax({
                                                                                url: m_strWebService + "Service1.asmx/ExportModelByCompanyID",
                                                                                type: "post",
                                                                                dataType: "json",
                                                                                async: false,
                                                                                contentType: "application/x-www-form-urlencoded",
                                                                                data: {
                                                                                    strCompanyID: companyId,
                                                                                    strFolder: folder
                                                                                },
                                                                                success: function (data) {
                                                                                    $('.active-table-item').click()
                                                                                },
                                                                                complete: function (xmlHttpRequest) {

                                                                                },
                                                                                error: function (err) {

                                                                                }
                                                                            })
                                                                        }
                                                                        if (modelLoadType === '' && $('.active-class')[0].innerHTML === '个人库') {
                                                                            $.ajax({
                                                                                url: m_strWebService + 'Service1.asmx/ExportPersonalModel',
                                                                                type: "post",
                                                                                dataType: "json",
                                                                                async: false,
                                                                                contentType: "application/x-www-form-urlencoded",
                                                                                data: {
                                                                                    strUserAccount: name,
                                                                                    strUserID: cookie.uid,
                                                                                    strFolder: folder
                                                                                },
                                                                                success: function (data) {
                                                                                    document.getElementById('newModel').style.display = 'none'
                                                                                    modelLoadType = ''
                                                                                    $('._active-table-item').click()
                                                                                },
                                                                                complete: function (xmlHttpRequest) {

                                                                                },
                                                                                error: function (err) {

                                                                                }
                                                                            })
                                                                        } else if (modelLoadType === '' && $('.active-class')[0].innerHTML === '企业共享库') {
                                                                            $.ajax({
                                                                                url: m_strWebService + "Service1.asmx/ExportModelByCompanyID",
                                                                                type: "post",
                                                                                dataType: "json",
                                                                                async: false,
                                                                                contentType: "application/x-www-form-urlencoded",
                                                                                data: {
                                                                                    strCompanyID: companyId,
                                                                                    strFolder: folder
                                                                                },
                                                                                success: function (data) {
                                                                                    document.getElementById('newModel').style.display = 'none'
                                                                                    modelLoadType = ''
                                                                                    $('.active-table-item').click()
                                                                                },
                                                                                complete: function (xmlHttpRequest) {

                                                                                },
                                                                                error: function (err) {

                                                                                }
                                                                            })
                                                                        } else if (modelLoadType === '' && $('.active-class')[0].innerHTML === '平台共享库') {
                                                                            $.ajax({
                                                                                url: m_strWebService + "Service1.asmx/ExportModelByCompanyID",
                                                                                type: "post",
                                                                                dataType: "json",
                                                                                async: false,
                                                                                contentType: "application/x-www-form-urlencoded",
                                                                                data: {
                                                                                    strCompanyID: companyId,
                                                                                    strFolder: folder
                                                                                },
                                                                                success: function (data) {
                                                                                    document.getElementById('newModel').style.display = 'none'
                                                                                    modelLoadType = ''
                                                                                    $('.active-table-item').click()
                                                                                },
                                                                                complete: function (xmlHttpRequest) {

                                                                                },
                                                                                error: function (err) {

                                                                                }
                                                                            })
                                                                        }
                                                                        modelLoadType = ''
                                                                        // $('.active-table-item').click()
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }

                                            }
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }
    }, 100)
}

function closeJindu() {
    document.getElementById('jindu').style.display = 'none'
    $('#jindu-box').html('')
}

function sucaiAjax(firstNum, lastNum) {
    document.getElementById('jindu').style.display = 'block'
    let gsID = companyId
    if (modelLoadType === 'mzy') {
        gsID = '9999'
    }
    let modelName = document.getElementById('newModelName').value
    let chang = document.getElementById('mchang').value
    let kuan = document.getElementById('mkuan').value
    let gao = document.getElementById('mgao').value
    let fzType = document.getElementById('mfz').value
    if (changeUUid !== '') {
        modelUUid = changeUUid
    }
    if (fzType === '地面') {
        fzType = '0'
    } else if (fzType === '墙面') {
        fzType = '1'
    } else if (fzType === '顶面') {
        fzType = '2'
    } else if (fzType === '通用') {
        fzType = '-1'
    }
    setTimeout(function () {
        let path = 'ihouse\\data\\jiaju\\' + path1 + '\\' + path2 + '\\' + path3 + '\\' + modelUUid + '\\' + modelName + '\\'
        let pathName = modelAdd[firstNum].name
        let baseUrl = modelAdd[firstNum].baseUrl
        let size = modelAdd[firstNum].size
        let filePath = path1 + '\\\\' + path2 + '\\\\' + path3 + '\\\\' + modelUUid + '\\\\' + modelName + '\\\\' + pathName
        let imode = '0'
        let pathInfo = `<p class="jindu-item">${pathName}上传中</p>`
        $('#jindu-box').append(pathInfo)
        if (pathName.split('.')[0] === modelName) {
            if (pathName.split('.')[1] === 'jpg') {
                imode = '2'
            }
        }
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', m_strWebService + 'service2.asmx', true);
        let SceneFilePath = sessionStorage.getItem("SceneFilePath");

        var sr =
            '<?xml version="1.0" encoding="utf-8"?>' +
            '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
            '  <soap12:Body>' +
            '    <SaveFile xmlns="http://tempuri.org/">' +
            '      <begin>0</begin>' +
            '      <FileName>' + pathName + '</FileName>' +
            '      <path>' + path + '</path>' +
            '      <bindata>' + baseUrl + '</bindata>' +
            '      <strname>' + modelName + '</strname>' +
            '      <strPathfile>' + filePath + '</strPathfile>' +
            '      <strsize>' + chang + '-' + kuan + '-' + gao + '</strsize>' +
            '      <class1>' + modelClass1 + '</class1>' +
            '      <class2>' + modelClass2 + '</class2>' +
            '      <class3>' + modelClass3 + '</class3>' +
            '      <itype>' + fzType + '</itype>' +
            '      <imode>' + imode + '</imode>' +
            '      <strFileSize>' + size + '</strFileSize>' +
            '      <strUUID>' + modelUUid + '</strUUID>' +
            '      <strAccountType>' + ut + '</strAccountType>' +
            '      <strCompanyID>' + gsID + '</strCompanyID>' +
            '      <strUserID>' + a.uid + '</strUserID>' +
            '      <strModelName>' + modelName + '</strModelName>' +
            '    </SaveFile>' +
            '  </soap12:Body>' +
            '</soap12:Envelope>';

        xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.send(sr);

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    // let size1 = $(xmlhttp.responseText).find('SaveFileResult').html()
                    // size1 = size1 / 1000
                    // size1 = size1.toFixed(1) + 'kb'
                    // let item = modelAdd.filter(function (ele) {
                    //     return ele.size.includes(size1)
                    // })
                    //
                    // item = item[0]
                    let _pathInfo = `<p class="jindu-item" style="color: red">${pathName}上传完成</p>`
                    $('#jindu-box').append(_pathInfo)
                    // esponseXML);
                    if (_changeFile !== '' && firstNum === modelAdd.length - 1) {
                        let dsHttp = new XMLHttpRequest();
                        dsHttp.open('POST', m_strWebService + 'service2.asmx', true);
                        let dsPath = path1 + '\\' + path2 + '\\' + path3 + '\\' + modelUUid + '\\' + modelName + '\\' + modelName + '.3DS'
                        let dsData =
                            '<?xml version="1.0" encoding="utf-8"?>' +
                            '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                            '  <soap12:Body>' +
                            '    <SetModelFormat xmlns="http://tempuri.org/">' +
                            '<strModelPathName>' + dsPath + '</strModelPathName>' +
                            '    </SetModelFormat>' +
                            '  </soap12:Body>' +
                            '</soap12:Envelope>'
                        dsHttp.setRequestHeader('Content-Type', 'text/xml');
                        dsHttp.send(dsData)
                        dsHttp.onreadystatechange = function () {
                            if (dsHttp.readyState == 4) {
                                if (dsHttp.status == 200) {
                                }
                            }
                        }
                        modelAdd.length = 0
                    } else if (vrAdd.length === 0 && firstNum === modelAdd.length - 1) {
                        let dsHttp = new XMLHttpRequest();
                        dsHttp.open('POST', m_strWebService + 'service2.asmx', true);
                        let dsPath = path1 + '\\' + path2 + '\\' + path3 + '\\' + modelUUid + '\\' + modelName + '\\' + modelName + '.3DS'
                        let dsData =
                            '<?xml version="1.0" encoding="utf-8"?>' +
                            '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                            '  <soap12:Body>' +
                            '    <SetModelFormat xmlns="http://tempuri.org/">' +
                            '<strModelPathName>' + dsPath + '</strModelPathName>' +
                            '    </SetModelFormat>' +
                            '  </soap12:Body>' +
                            '</soap12:Envelope>'
                        dsHttp.setRequestHeader('Content-Type', 'text/xml');
                        dsHttp.send(dsData)
                        dsHttp.onreadystatechange = function () {
                            if (dsHttp.readyState == 4) {
                                if (dsHttp.status == 200) {
                                }
                            }
                        }
                        modelAdd.length = 0
                    }
                    if (++firstNum < lastNum) {
                        sucaiAjax(firstNum, lastNum)
                    } else {
                        if (vrAdd.length !== 0) {
                            modelAjax(0, vrAdd.length)
                        } else {
                            alert('上传成功！')
                            document.getElementById('newModel').style.display = 'none'
                            if (modelLoadType === 'mzy') {
                                $.ajax({
                                    url: m_strWebService + 'Service1.asmx/ExportPersonalModel',
                                    type: "post",
                                    dataType: "json",
                                    async: false,
                                    contentType: "application/x-www-form-urlencoded",
                                    data: {
                                        strUserAccount: name,
                                        strUserID: cookie.uid,
                                        strFolder: folder
                                    },
                                    success: function (data) {
                                        $('._active-table-item').click()
                                    },
                                    complete: function (xmlHttpRequest) {

                                    },
                                    error: function (err) {

                                    }
                                })
                            } else if (modelLoadType === 'qiye') {
                                $.ajax({
                                    url: m_strWebService + "Service1.asmx/ExportModelByCompanyID",
                                    type: "post",
                                    dataType: "json",
                                    async: false,
                                    contentType: "application/x-www-form-urlencoded",
                                    data: {
                                        strCompanyID: companyId,
                                        strFolder: folder
                                    },
                                    success: function (data) {
                                        //alert(data.msg);
                                        console.log(23)
                                        $('.active-table-item').click()
                                    },
                                    complete: function (xmlHttpRequest) {

                                    },
                                    error: function (err) {

                                    }
                                })
                            }
                            if (modelLoadType === '' && $('.active-class')[0].innerHTML === '个人库') {
                                $.ajax({
                                    url: m_strWebService + 'Service1.asmx/ExportPersonalModel',
                                    type: "post",
                                    dataType: "json",
                                    async: false,
                                    contentType: "application/x-www-form-urlencoded",
                                    data: {
                                        strUserAccount: name,
                                        strUserID: cookie.uid,
                                        strFolder: folder
                                    },
                                    success: function (data) {
                                        document.getElementById('newModel').style.display = 'none'
                                        modelLoadType = ''
                                        $('._active-table-item').click()
                                    },
                                    complete: function (xmlHttpRequest) {

                                    },
                                    error: function (err) {

                                    }
                                })
                            } else if (modelLoadType === '' && $('.active-class')[0].innerHTML === '企业共享库') {
                                $.ajax({
                                    url: m_strWebService + "Service1.asmx/ExportModelByCompanyID",
                                    type: "post",
                                    dataType: "json",
                                    async: false,
                                    contentType: "application/x-www-form-urlencoded",
                                    data: {
                                        strCompanyID: companyId,
                                        strFolder: folder
                                    },
                                    success: function (data) {
                                        document.getElementById('newModel').style.display = 'none'
                                        modelLoadType = ''
                                        $('.active-table-item').click()
                                    },
                                    complete: function (xmlHttpRequest) {

                                    },
                                    error: function (err) {

                                    }
                                })
                            } else if (modelLoadType === '' && $('.active-class')[0].innerHTML === '平台共享库') {
                                $.ajax({
                                    url: m_strWebService + "Service1.asmx/ExportModelByCompanyID",
                                    type: "post",
                                    dataType: "json",
                                    async: false,
                                    contentType: "application/x-www-form-urlencoded",
                                    data: {
                                        strCompanyID: companyId,
                                        strFolder: folder
                                    },
                                    success: function (data) {
                                        document.getElementById('newModel').style.display = 'none'
                                        modelLoadType = ''
                                        $('.active-table-item').click()
                                    },
                                    complete: function (xmlHttpRequest) {

                                    },
                                    error: function (err) {

                                    }
                                })
                            }
                            modelLoadType = ''
                            closeJindu()
                            // $('.active-table-item').click()
                        }
                    }
                }
            }
        }
    }, 100)
}

function fileItemOver(obj) {
    let iconBox = $(obj).children('.file-name')[0]
    let icon = $(iconBox).children('.el-icon-close')[0]
    let _icon = $(iconBox).children('.icondownload')[0]
    icon.style.display = 'inline-block'
    _icon.style.display = 'inline-block'
}

function fileItemOut(obj) {
    let iconBox = $(obj).children('.file-name')[0]
    let icon = $(iconBox).children('.el-icon-close')[0]
    let _icon = $(iconBox).children('.icondownload')[0]
    icon.style.display = 'none'
    _icon.style.display = 'none'
}

function fileDelete(obj) {
    let father = obj.parentNode
    father = father.parentNode
    let box = $(father).children('.file-name')[0]
    let fileName = $(box).children('a')[0]
    fileName = fileName.href
    fileName = fileName.replace(m_strWebService, '')
    fileName = fileName.split('/')
    let fileTxt = fileName[0]
    for (let i = 1; i < fileName.length; i++) {
        fileTxt += '\\' + fileName[i]
    }
    if (confirm('确定要删除吗') === true) {
        father.style.display = 'none'
        let xuanran = document.getElementById('model-xuanran')
        let xuanranFather = xuanran.parentNode
        let strPathFile
        let strDataFile
        if (xuanranFather.style.display === 'none') {
            strPathFile = fileTxt
            strDataFile = fileTxt.replace('ihouse\\data\\jiaju\\', '').replace(/\\/g, '\\\\')
            let index
            for (let i = 0; i < scNameArr.length; i++) {
                if (fileName === scNameArr[i]) {
                    index = i
                }

            }
            scNameArr.splice(index, 1)

        } else {
            strPathFile = fileTxt
            strDataFile = fileTxt.replace('ihouse\\data\\jiaju\\', '').replace(/\\/g, '\\\\')
            let index
            for (let i = 0; i < xrNameArr.length; i++) {
                if (fileName === xrNameArr[i]) {
                    index = i
                }
            }
            xrNameArr.splice(index, 1)

        }
        let http = new XMLHttpRequest()

        http.open('POST', m_strWebService + 'service2.asmx', true)
        let httpData =
            '<?xml version="1.0" encoding="utf-8"?>' +
            '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
            '  <soap12:Body>' +
            '    <DeleteFile xmlns="http://tempuri.org/">' +
            '           <strPathFile>' + strPathFile + '</strPathFile>' +
            '           <strDataFile>' + strDataFile + '</strDataFile>' +
            '    </DeleteFile>' +
            '  </soap12:Body>' +
            '</soap12:Envelope>'
        http.setRequestHeader('Content-Type', 'text/xml');
        http.send(httpData)
        http.onreadystatechange = function () {
            if (http.readyState == 4) {
                if (http.status == 200) {
                    alert('删除成功')
                }
            }
        }
    }
}

function deleteAllFile() {
    if (confirm('确定要清空吗') === true) {
        let xuanran = document.getElementById('model-xuanran')
        let xuanranFather = xuanran.parentNode
        if (xuanranFather.style.display === 'none') {
            let objArr = $('#model-sucai>p>span>.el-icon-close')
            for (let i = 0; i < objArr.length; i++) {
                let obj = objArr[i]
                let father = obj.parentNode
                father = father.parentNode
                father.style.display = 'none'
                let box = $(father).children('.file-name')[0]
                let fileName = $(box).children('a')[0]
                fileName = fileName.href
                fileName = fileName.replace(m_strWebService, '')
                fileName = fileName.split('/')
                let fileTxt = fileName[0]
                for (let i = 1; i < fileName.length; i++) {
                    fileTxt += '\\' + fileName[i]
                }
                let strPathFile
                let strDataFile
                strPathFile = fileTxt
                strDataFile = fileTxt.replace('ihouse\\data\\jiaju\\', '').replace(/\\/g, '\\\\')
                let index
                for (let i = 0; i < scNameArr.length; i++) {
                    if (fileName === scNameArr[i]) {
                        index = i
                    }

                }
                scNameArr.splice(index, 1)
                let http = new XMLHttpRequest()

                http.open('POST', m_strWebService + 'service2.asmx', true)
                let httpData =
                    '<?xml version="1.0" encoding="utf-8"?>' +
                    '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                    '  <soap12:Body>' +
                    '    <DeleteFile xmlns="http://tempuri.org/">' +
                    '           <strPathFile>' + strPathFile + '</strPathFile>' +
                    '           <strDataFile>' + strDataFile + '</strDataFile>' +
                    '    </DeleteFile>' +
                    '  </soap12:Body>' +
                    '</soap12:Envelope>'
                http.setRequestHeader('Content-Type', 'text/xml');
                http.send(httpData)
                http.onreadystatechange = function () {
                    if (http.readyState == 4) {
                        if (http.status == 200) {

                        }
                    }
                }
            }
        } else {
            let objArr = $('#model-xuanran>p>span>.el-icon-close')
            for (let i = 0; i < objArr.length; i++) {
                let obj = objArr[i]
                let father = obj.parentNode
                father = father.parentNode
                father.style.display = 'none'
                let box = $(father).children('.file-name')[0]
                let fileName = $(box).children('a')[0]
                fileName = fileName.href
                fileName = fileName.replace(m_strWebService, '')
                fileName = fileName.split('/')
                let fileTxt = fileName[0]
                for (let i = 1; i < fileName.length; i++) {
                    fileTxt += '\\' + fileName[i]
                }
                let strPathFile
                let strDataFile
                strPathFile = fileTxt
                strDataFile = fileTxt.replace('ihouse\\data\\jiaju\\', '').replace(/\\/g, '\\\\')
                let index
                for (let i = 0; i < xrNameArr.length; i++) {
                    if (fileName === xrNameArr[i]) {
                        index = i
                    }
                }
                xrNameArr.splice(index, 1)
                let http = new XMLHttpRequest()

                http.open('POST', m_strWebService + 'service2.asmx', true)
                let httpData =
                    '<?xml version="1.0" encoding="utf-8"?>' +
                    '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                    '  <soap12:Body>' +
                    '    <DeleteFile xmlns="http://tempuri.org/">' +
                    '           <strPathFile>' + strPathFile + '</strPathFile>' +
                    '           <strDataFile>' + strDataFile + '</strDataFile>' +
                    '    </DeleteFile>' +
                    '  </soap12:Body>' +
                    '</soap12:Envelope>'
                http.setRequestHeader('Content-Type', 'text/xml');
                http.send(httpData)
                http.onreadystatechange = function () {
                    if (http.readyState == 4) {
                        if (http.status == 200) {

                        }
                    }
                }
            }
        }
    }
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
            //e64
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
            //e64
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

var mapFileData = {}

function ProcessFile3(e) {
    var file = document.getElementById('mapFile').files[0];
    let size = file.size
    var reader = new FileReader();
    reader.onload = function (event) {

        var txt = event.target.result;
        mapFileData = {
            name: file.name,
            size: size,
            url: txt
        }
        document.getElementById('mapFile').style.display = 'none'
        document.getElementById('mapAdd').style.display = 'none'
        document.getElementById('maps-txt').style.display = 'none'
        document.getElementById('bigMaps').style.display = 'block'
        $("#bigMaps").attr('src', txt);//将图片base64字符串赋值给img的src
        //e64
    };
    reader.readAsDataURL(file);


}

function _ProcessFile3(e) {
    var file = document.getElementById('_changeMaps').files[0];
    let size = file.size
    var reader = new FileReader();
    reader.onload = function (event) {

        var txt = event.target.result;
        mapFileData = {
            name: file.name,
            size: size,
            url: txt
        }
        document.getElementById('mapFile').style.display = 'none'
        document.getElementById('mapAdd').style.display = 'none'
        document.getElementById('maps-txt').style.display = 'none'
        document.getElementById('bigMaps').style.display = 'block'
        $("#bigMaps").attr('src', txt);//将图片base64字符串赋值给img的src
        //e64
    };
    reader.readAsDataURL(file);


}

var changeMapFileData = {}
var changeDis = '0'

function ProcessFile4(e) {
    var file = document.getElementById('changeMaps').files[0];
    let size = file.size
    var reader = new FileReader();
    reader.onload = function (event) {
        var txt = event.target.result;
        changeMapFileData = {
            name: file.name,
            size: size,
            url: txt
        }
        changeDis = '1'
        $("#_bigMaps").attr('src', txt);//将图片base64字符串赋值给img的src
        //e64
    };
    reader.readAsDataURL(file);


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
            //e64
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
            //e64
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

function changeBigPic(e) {
    if (e === 1 && img1 !== '') {
        document.getElementById('big-pic').style.display = 'block'
        document.getElementById('big-pic').src = img1
    } else if (e === 2 && img2 !== '') {
        document.getElementById('big-pic').style.display = 'block'
        document.getElementById('big-pic').src = img2
    }
}

function clearImg(obj) {
    if (confirm('确定要删除吗') === true) {
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
}

function TestUploadFile() {
    let modelName = '3D云设计'
    let uuid = ''
    if (loadUUid !== '') {
        uuid = loadUUid
    } else {
        uuid = guid()
    }
    let str = `<root>
<pageid>${uuid}</pageid>   
<title>${modelName}</title>
<loadingimage>loading_${uuid}.jpg</loadingimage>
<loginimage>login_${uuid}.jpg</loginimage>
 </root>`
    let encode = encodeURI(str);
    // 对编码的字符串转化base64
    let base64 = btoa(encode);
    let pathfilename = 'C:/inetpub/wwwroot/users/' + folder + '/CustomPage.xml'
// doc.appendChild(btn)
    let data = {
        "type": "string",
        "pathfilename": pathfilename,
        "filedata": base64
    }
    let pathfilename_img = 'C:/inetpub/wwwroot/h5/img/loading_' + uuid + '.jpg'
    let pathfilename_img2 = 'C:/inetpub/wwwroot/h5/img/login_' + uuid + '.jpg'
    let imgData = {
        "type": "image",
        "pathfilename": pathfilename_img,
        "filedata": img1
    }
    let imgData2 = {
        "type": "image",
        "pathfilename": pathfilename_img2,
        "filedata": img2
    }
    if (modelName === '' || img1 === '' || img2 === '' || uuid === '') {
        alert('请完整填写信息')
    } else {
        if (img1 !== loadImg1 || uuidDis === 'no') {
            $.ajax({
                type: 'POST',
                url: load_WebService + '5001/api/uploadfile',
                async: false,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(imgData),
                success: function (data) {

                }
            })
        }
        if (img2 !== loadImg2 || uuidDis === 'no') {
            $.ajax({
                type: 'POST',
                url: load_WebService + '5001/api/uploadfile',
                async: false,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(imgData2),
                success: function (data) {

                }
            })
        }
        if (modelName !== loadTitle || uuidDis === 'no') {
            $.ajax({
                type: 'POST',
                url: load_WebService + '5001/api/uploadfile',
                async: false,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (data) {

                }
            })
        }
        $.ajax({
            type: 'POST',
            url: m_strWebService + 'Service1.asmx/BuilderCustomWeb',
            async: false,
            data: {
                UUID: uuid
            },
            success: function (data) {
                let obj = JSON.parse(data)
                let page = obj.page
                let link = m_strWebService + page
                document.getElementById('linkTxt').innerHTML = link
                alert('开通成功')
                // location.reload()
            }
        })
    }

}

function openLink() {
    let link = document.getElementById('linkTxt').innerHTML
    if (link === '') {
        alert('尚未生成网站')
    } else {
        window.open(link)
    }
}

function guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function _guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 8 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(8);
    });
}

function gotoInfo(obj) {
    if (edition === 'ihouse') {
        let id = obj.id
        document.cookie = 'modelId=' + id
        window.open('info.html')
    }
    stopPropagation()
}

function stopPropagation(e) {
    e = e || window.event;
    if (e.stopPropagation) { //W3C阻止冒泡方法
        e.stopPropagation();
    } else {
        e.cancelBubble = true; //IE阻止冒泡方法
    }
}

function handleLowerPlay(obj) {
    if (confirm('确定要下架吗') === true) {
        let father = obj.parentNode
        father = father.parentNode
        father = father.parentNode
        let id = father.id
        id = id.replace('icon', '')
        $.ajax({
            type: 'POST',
            url: m_strWebService + 'service1.asmx/SetShareSchemeState',
            async: false,
            data: {
                UUID: id,
                SchemeState: '0'
            },
            success: function (data) {
                data = JSON.parse(data)
                if (data.code === '1') {
                    let dom = document.getElementById('gongxiang')
                    changePage('gongxiang', dom)
                }
            }
        })
    }
    stopPropagation()
}

function handleShelfPlay(obj) {
    if (confirm('确定要上架吗') === true) {
        let father = obj.parentNode
        father = father.parentNode
        father = father.parentNode
        let id = father.id
        id = id.replace('icon', '')
        $.ajax({
            type: 'POST',
            url: m_strWebService + 'service1.asmx/SetShareSchemeState',
            async: false,
            data: {
                UUID: id,
                SchemeState: '1'
            },
            success: function (data) {
                data = JSON.parse(data)
                if (data.code === '1') {
                    let dom = document.getElementById('gongxiang')
                    changePage('gongxiang', dom)
                }
            }
        })
    }
    stopPropagation()
}

var changGxID = '', changeNameId = ''

function openChangeName(obj) {
    let father = obj.parentNode
    father = father.parentNode
    father = father.parentNode
    let id = father.id
    id = id.replace('icon', '')
    changeNameId = id
    $('#gxChangeName').show()
    stopPropagation()
}

function changeNameClick() {
    if (confirm('确定要修改吗？') === true) {
        let newName = $('#gxName')[0].value
        if (newName === '') {
            alert('名称不能为空！')
        } else {
            let strSQL = `update sharescene set scenename='${newName}'  where folder='${changeNameId}'`;
            $.ajax({
                url: m_strWebService + 'Service1.asmx/ExecuteNonQuery',
                type: "post",
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                data:
                    {
                        Database: "render",
                        Sql: strSQL
                    },
                success: function (data) {
                    if ("0" == data.code) {
                        alert(data.msg);
                    } else {
                        alert('修改成功!');
                        $('.active-class').click()
                        closeChangeName()
                        changeNameId = ''
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        }

    }
}

function closeChangeName() {
    $('#gxChangeName').hide()
    $('#gxName')[0].value = ''
}

var gxFold = ''

function OnLoadScene(obj) {
    modelArr.length = 0
    let father = obj.parentNode.parentNode.parentNode.parentNode
    let fold = father.id
    gxFold = fold
    let url = m_strWebService + 'users/share/chenx/savefile/' + fold + '/data_scene.xml'
    var selectTime = new Date().getTime();
    url = url + '?' + selectTime;
    var data = $.ajax({url: url, async: false,});
    var xmlDoc = $.parseXML(data.responseText);
    if (xmlDoc == null) {
        alert("���Ͳ����ڣ�����ϵ����֧��!");
        return;
    }
    var $xml = $(xmlDoc);
    $xml.find("Furniture3D").each(function (j) {
        OnLoadFurniture_XML($(this));
    });
    modelArr = distinct(modelArr)
    $('.GXmodel-item-box').html('')
    for (let i = 0; i < modelArr.length; i++) {
        let txt = modelArr[i].replace(m_strWebService + 'ihouse/data/jiaju/', '')
        txt = txt.replace('jpg', '3ds')
        let info = `<div class="GXmodel-item" id="${txt}" onclick="gxItemClick(this)">
                    <img src="${modelArr[i]}" alt="" width="100%" height="100%">
                   </div>`
        $('.GXmodel-item-box').append(info)
    }

    $('#GXmodel').show()
    let height = $('#GXmodel').height() - 300
    $('#GXmodel>.addMaps-box').css('height', height)
    $.ajax({
        url: m_strWebService + 'Service1.asmx/ExecuteQuery',
        type: "post",
        dataType: "json",
        async: false,
        contentType: "application/x-www-form-urlencoded",
        data:
            {
                Database: "render",
                Sql: `select thumbnail1,thumbnail2,thumbnail3 from sharescene where folder='${fold}'`
            },
        success: function (data) {
            if ("1" == data.code) {
                let JData = JSON.parse(data.data);
                if (true == JData.ok) {
                    let itemArr = JData.Table[0];
                    console.log(itemArr)
                    for (let i = 0; i < $('.GXmodel-item').length; i++) {
                        let txt = $('.GXmodel-item')[i].id
                        if (txt === itemArr.thumbnail1 || txt === itemArr.thumbnail2 || txt === itemArr.thumbnail3) {
                            $('.GXmodel-item').eq(i).addClass('activeGx')
                        }
                    }
                }
            } else {
                console.log(data.msg);
            }
        },
        complete: function (xmlHttpRequest) {
        },
        error: function (err) {
            console.log(err);
        }
    });
    stopPropagation()
}

function closeGXmodel() {
    $('#GXmodel').hide()
    gxFold = ''
}

function gxItemClick(obj) {
    if (obj.className === 'GXmodel-item') {
        if ($('.activeGx').length < 3) {
            $(obj).addClass('activeGx')
        } else {
            alert('已选择3张模型图,请先取消一张模型图！')
        }

    } else {
        $(obj).removeClass('activeGx')
    }

}

function saveGXClick() {
    let modelNum = $('.GXmodel-item').length
    if ($('.activeGx').length === 0) {
        return;
    }
    let strSQL = '';
    if ($('.activeGx').length === 3) {
        let strThumbnail1 = $('.activeGx')[0].id;
        let strThumbnail2 = $('.activeGx')[1].id;
        let strThumbnail3 = $('.activeGx')[2].id;
        strSQL = `update sharescene set thumbnail1='${strThumbnail1}', thumbnail2='${strThumbnail2}',thumbnail3='${strThumbnail3}',modelcount='${modelNum}',state='1' where folder='${gxFold}'`;
    } else if ($('.activeGx').length === 2) {
        let strThumbnail1 = $('.activeGx')[0].id;
        let strThumbnail2 = $('.activeGx')[1].id;
        strSQL = `update sharescene set thumbnail1='${strThumbnail1}', thumbnail2='${strThumbnail2}',modelcount='${modelNum}',state='1' where folder='${gxFold}'`;
    } else if ($('.activeGx').length === 1) {
        let strThumbnail1 = $('.activeGx')[0].id;
        strSQL = `update sharescene set thumbnail1='${strThumbnail1}',modelcount='${modelNum}',state='1' where folder='${gxFold}'`;
    }

    console.log(strSQL)
    $.ajax({
        url: m_strWebService + 'Service1.asmx/ExecuteNonQuery',
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data:
            {
                Database: "render",
                Sql: strSQL
            },
        success: function (data) {
            if ("0" == data.code) {
                alert(data.msg);
            } else {
                alert('保存成功');
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
}

var modelArr = []

function OnLoadFurniture_XML(data) {
    var strFile = $(data).attr('source');
    var k = strFile.lastIndexOf(".");
    var str = strFile.slice(k + 1);
    if (str == "a3d")
        return;

    var strJpg = strFile.slice(0, k + 1) + "jpg";

    var strPathFile = m_strWebService + 'ihouse/data/jiaju/' + strJpg;//texture
    modelArr.push(strPathFile)

    stopPropagation()
}

function openGXDetail(obj) {
    let father = obj.parentNode
    father = father.parentNode
    father = father.parentNode
    father = father.parentNode
    let img = $(father).children('img')[0]
    changGxID = img.src
    changGxID = changGxID.replace(m_strWebService, '')
    changGxID = changGxID.split('?')[0]
    console.log(changGxID)
    $('#changeGx').click()
    stopPropagation()
}

function changeGx() {
    let obj = document.getElementById('changeGx')
    let file = obj.files[0]
    let reader = new FileReader();
    reader.onload = function (event) {
        let txt = event.target.result;
        let _txt = changGxID.replace('_1', '')
        let smallPic = ''
        let path = 'C:/inetpub/wwwroot/' + changGxID
        let _path = 'C:/inetpub/wwwroot/' + _txt
        let data = {
            type: 'image',
            pathfilename: _path,
            filedata: txt
        }
        let _data = {
            type: 'image',
            pathfilename: path,
            filedata: ''
        }
        var image = new Image();
        image.src = event.target.result;
        image.onload = function () {
            let canvas = document.createElement('canvas'),
                context = canvas.getContext('2d'),
                imageWidth = 800,    //压缩后图片的大小
                imageHeight = 600,
                data = ''
            canvas.width = imageWidth
            canvas.height = imageHeight
            context.drawImage(image, 0, 0, imageWidth, imageHeight)
            data = canvas.toDataURL('image/jpeg')  //这里是图片
            _data.filedata = data
        }


        $.ajax({
            url: load_WebService + '5001/api/uploadfile',
            type: 'POST',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) {
                if (data.code === '1') {
                    $.ajax({
                        url: load_WebService + '5001/api/uploadfile',
                        type: 'POST',
                        dataType: "json",
                        contentType: "application/json",
                        data: JSON.stringify(_data),
                        success: function (data) {
                            if (data.code === '1') {
                                alert('修改成功！')
                                $('#gongxiang').click()
                            }
                        }
                    })
                }
            }
        })


        obj.type = 'text'
        obj.type = 'file'
        changGxID = ''
    };
    reader.readAsDataURL(file);
}

function ModelDelete(obj) {
    if (confirm('确定要删除吗') === true) {
        let father = obj.parentNode
        father = father.parentNode
        father = father.parentNode
        let id = father.id
        id = id.replace('icon', '')
        if (companyId !== '2') {
            let jsonData = {
                type: '0',
                companyid: companyId,
                account: '',
                folder: id
            }
            $.ajax({
                type: 'POST',
                url: m_strWebService + 'service1.asmx/DeleteShareScene',
                async: false,
                data: {
                    JsonBaseData: JSON.stringify(jsonData)
                },
                success: function (data) {
                    data = JSON.parse(data)
                    if (data.code === '1') {
                        let dom = document.getElementById('gongxiang')
                        changePage('gongxiang', dom)
                    }
                }
            })
        } else {
            $.ajax({
                type: 'POST',
                url: m_strWebService + 'service1.asmx/DeleteShare',
                async: false,
                data: {
                    strFolder: id
                },
                success: function (data) {
                    let dom = document.getElementById('gongxiang')
                    changePage('gongxiang', dom)
                }
            })
        }
    }
    stopPropagation()
}

var ModifyUser = ''
var userArr = []
var userImageArray = []
var kuType = ''

function changePage(e, obj) {
    $('#zyClass').show()
    if (obj !== undefined) {
        $('.active-class').removeClass('active-class')
        $(obj).addClass('active-class')
    }
    document.getElementById('wjBox').style.display = 'none'
    document.getElementById('zip').style.display = 'none'
    if (e === 'js') {
        document.getElementById('myFn').style.display = 'none'
        document.getElementById('user').style.display = 'none'
        document.getElementById('custom').style.display = 'none'
        document.getElementById('zidingyiBtn').style.display = 'none'
        document.getElementById('load').style.display = 'none'
        document.getElementById('tishi').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'none'
        document.getElementById('lsBox').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'none'
        document.getElementById('gxBox').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'none'
        document.getElementById('jieshao').style.display = 'block'
    } else if (e === 'zip') {
        document.getElementById('myFn').style.display = 'none'
        document.getElementById('user').style.display = 'none'
        document.getElementById('custom').style.display = 'none'
        document.getElementById('zidingyiBtn').style.display = 'none'
        document.getElementById('load').style.display = 'none'
        document.getElementById('tishi').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('lsBox').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'none'
        document.getElementById('gxBox').style.display = 'none'
        document.getElementById('zip').style.display = 'block'
        $.ajax({
            url: m_strWebService + 'service2.asmx/GetInfoFromModel',
            type: "Post",
            async: false,
            dataType: "xml",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            data: {
                strCompanyID: companyId,
                iAccountType: 11
            },
            success: function (data) {
                var strData = data.firstElementChild.innerHTML;
                strData = strData.split("#");


                for (var i = 1; i < strData.length; i++) {// 一重

                    categoryType[i - 1] = strData[i].split("~")[0];//设置类型‘一级’
                }
                categoryType = distinct(categoryType)//"一级"数组去重

                for (var i = 0; i < categoryType.length; i++) {//设置类型‘二级’ 一重

                    secondType[i] = new Array(); //创建二维数组

                    for (var j = 1; j < strData.length; j++) { //二重

                        if (categoryType[i] == strData[j].split("~")[0]) {

                            secondType[i].push(strData[j].split("~")[1]);//把各自符合类型的数值添加到相应的位置
                        }
                    }
                }

                for (var i = 0; i < secondType.length; i++) {//"二级"数组去重

                    secondType[i] = distinct(secondType[i]);//数组去重后重新赋值
                }

                for (var i = 0; i < secondType.length; i++) {//设置类型"三级" 一重

                    levelThreeType[i] = new Array();//创建二维数组

                    for (var j = 0; j < secondType[i].length; j++) { //二重

                        levelThreeType[i][j] = new Array();//创建三维数组

                        for (var z = 1; z < strData.length; z++) { //三重

                            if (categoryType[i] == strData[z].split("~")[0]) {

                                if (secondType[i][j] == strData[z].split("~")[1]) {

                                    levelThreeType[i][j].push(strData[z].split("~")[2]);//把各自符合类型的数值添加到相应的位置
                                }
                            }
                        }
                    }
                }

                for (var i = 0; i < levelThreeType.length; i++) {//"三级"数组去重
                    for (var j = 0; j < levelThreeType[i].length; j++) {

                        levelThreeType[i][j] = distinct(levelThreeType[i][j]);//数组去重后重新赋值
                    }
                }
            }
        });
    } else if (e === 'wj') {
        document.getElementById('myFn').style.display = 'none'
        document.getElementById('user').style.display = 'none'
        document.getElementById('custom').style.display = 'none'
        document.getElementById('zidingyiBtn').style.display = 'none'
        document.getElementById('load').style.display = 'none'
        document.getElementById('tishi').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('lsBox').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'none'
        document.getElementById('gxBox').style.display = 'none'
        document.getElementById('wjBox').style.display = 'block'
        $.ajax({
            url: m_strWebService + 'Service1.asmx/ExecuteQuery',
            type: "post",
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            data:
                {
                    Database: "render",
                    Sql: `select file,type from outdoor_picture`
                },
            success: function (data) {
                if ("1" == data.code) {
                    let JData = JSON.parse(data.data);
                    if (true == JData.ok) {
                        let itemArr = JData.Table
                        pushWjItem(itemArr)
                    }
                } else {
                    console.log(data.msg);
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    } else if (e === 'mzy') {
        document.getElementById('myModelPage').style.display = 'block'
        document.getElementById('myFn').style.display = 'none'
        document.getElementById('user').style.display = 'none'
        document.getElementById('custom').style.display = 'none'
        document.getElementById('zidingyiBtn').style.display = 'none'
        document.getElementById('load').style.display = 'none'
        document.getElementById('tishi').style.display = 'none'
        document.getElementById('myModelPage-box').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'none'
        document.getElementById('lsBox').style.display = 'none'
        document.getElementById('gxBox').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'block'
        let dom = document.getElementById('mzyMap')
        $('#myModel').html('')
        categoryType.length = 0
        secondType.length = 0
        levelThreeType.length = 0
        backMap()
    } else if (e === 'gongxiang') {
        $('#gxInfo').html('')
        document.getElementById('myFn').style.display = 'none'
        document.getElementById('user').style.display = 'none'
        document.getElementById('custom').style.display = 'none'
        document.getElementById('zidingyiBtn').style.display = 'none'
        document.getElementById('load').style.display = 'none'
        document.getElementById('tishi').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('lsBox').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'none'
        document.getElementById('gxBox').style.display = 'block'
        let dataArr = []
        let nullArr = []
        if (ut === '11') {
            $.ajax({
                type: 'POST',
                url: m_strWebService + 'service1.asmx/GetShareScheme',
                async: false,
                success: function (data) {
                    data = JSON.parse(JSON.parse(data).data)
                    let newData = data.filter(function (ele) {
                        return ele.scenename.includes('diaoding')
                    })
                    //
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
                    // for (let i = 0; i < nullArr.length; i++) {
                    //     let num = nullArr[i] - i
                    //     dataArr.splice(num, 1)
                    // }
                    //
                }
            })
        } else {
            $.ajax({
                url: m_strWebService + 'Service1.asmx/GetShareSceneByCompanyID',
                type: "post",
                dataType: "json",
                async: false,
                contentType: "application/x-www-form-urlencoded",
                data: {
                    CompanyID: companyId,
                },
                success: function (data) {
                    data = data.data
                    data = data.split('#')
                    data.splice(0, 1)

                    for (let i = 0; i < data.length; i++) {
                        let item = data[i].split('~')
                        let infoItem = {
                            scenename: item[0],
                            folder: item[1],
                            state: '1'
                        }
                        dataArr.push(infoItem)
                    }
                },
                complete: function (xmlHttpRequest) {

                },
                error: function (err) {

                }
            })
        }

        let dataInfo = []
        for (let i = 0; i < dataArr.length; i++) {
            let itemInfo = dataArr[i]
            let state = itemInfo.state
            let time = guid()
            if (state === '1') {
                dataInfo[i] = `<div class="item" id='${itemInfo.folder}'  onmouseout="iconOut(this)" onmouseover="iconOver(this)" onclick="gotoInfo(this)">
                <div class="item-icon-box" id="${itemInfo.folder}icon" style="height: 228px">
                <div class="item-icon-bg">
<!--                <div>-->
<!--                <img src="image/上架.png" width="30" alt="" onclick="handleShelfClick(this)">-->
<!--                <p class="item-icon-txt">上架</p>-->
<!--                </div>-->
<!--                <div style="display:none">-->
<!--                <img src="assets/img/下架.png" width="30" alt="" onclick="handleLowerPlay(this)">-->
<!--                <p class="item-icon-txt">下架</p>-->
<!--                </div>-->
                <div>
                <img src="assets/img/删除.png" width="30" alt="" onclick="ModelDelete(this)" class="model-item-icon">
                <p class="item-icon-txt">删除</p>
                </div>
                <div>
                <img src="assets/img/图片.png" width="30" alt="" onclick="openGXDetail(this)" class="model-item-icon">
                <p class="item-icon-txt">图片</p>
                </div>
                <div>
                <img src="assets/img/编辑.png" width="30" alt="" onclick="openChangeName(this)" class="model-item-icon">
                <p class="item-icon-txt">名字</p>
                </div>
                <div class="changeGxModel">
                <img src="assets/img/模型.png" width="30" alt="" onclick="OnLoadScene(this)" class="model-item-icon">
                <p class="item-icon-txt">模型</p>
                </div>
                </div>
                </div>
                    <img src='${m_strWebService}users/share/chenx/savefile/${itemInfo.folder}/data_icon_1.jpg?time=${time}' width="290" height="228">
                    <div class="item-detail">
                        <p class="item-text">${itemInfo.scenename}</p>
                        <div class="item-bottom-box">
                       
                        
                        </div>
                    </div>
                </div>`
            } else if (state === '0') {
                dataInfo[i] = `<div class="item" id='${itemInfo.folder}'  onmouseout="iconOut(this)" onmouseover="iconOver(this)">
                <div class="item-icon-box" id="${itemInfo.folder}icon" style="height: 228px">
                <div class="item-icon-bg">
<!--                <div>-->
<!--                <img src="image/上架.png" width="30" alt="" onclick="handleShelfClick(this)">-->
<!--                <p class="item-icon-txt">上架</p>-->
<!--                </div>-->
<!--                <div>-->
<!--                <img src="assets/img/下架.png" width="30" alt="" onclick="handleShelfPlay(this)">-->
<!--                <p class="item-icon-txt">上架</p>-->
<!--                </div>-->
                <div>
                <img src="assets/img/删除.png" width="30" alt="" onclick="ModelDelete(this)" class="model-item-icon">
                <p class="item-icon-txt">删除</p>
                </div>
                <div>
                <img src="assets/img/图片.png" width="30" alt="" onclick="openGXDetail(this)" class="model-item-icon">
                <p class="item-icon-txt">图片</p>
                </div>
                <div>
                <img src="assets/img/编辑.png" width="30" alt="" onclick="openChangeName(this)" class="model-item-icon">
                <p class="item-icon-txt">名字</p>
                </div>
                <div class="changeGxModel">
                <img src="assets/img/模型.png" width="30" alt="" onclick="OnLoadScene(this)" class="model-item-icon">
                <p class="item-icon-txt">模型</p>
                </div>
                </div>
                </div>
                    <img src='${m_strWebService}users/share/chenx/savefile/${itemInfo.folder}/data_icon_1.jpg?time=${time}' width="290" height="228">
                    <div class="item-detail">
                        <p class="item-text">${itemInfo.scenename}</p>
                        <div class="item-bottom-box">
                      
                      
                        </div>
                    </div>
                </div>`
            } else if (state === '2') {
                dataInfo[i] = `<div class="item" id='${itemInfo.folder}'  onmouseout="iconOut(this)" onmouseover="iconOver(this)">
                <div class="item-icon-box" id="${itemInfo.folder}icon" style="height: 228px">
                <div class="item-icon-bg">
<!--                <div>-->
<!--                <img src="image/上架.png" width="30" alt="" onclick="handleShelfClick(this)">-->
<!--                <p class="item-icon-txt">上架</p>-->
<!--                </div>-->
<!--                <div>-->
<!--                <img src="assets/img/下架.png" width="30" alt="" onclick="handleShelfPlay(this)">-->
<!--                <p class="item-icon-txt">上架</p>-->
<!--                </div>-->
                <div>
                <img src="assets/img/删除.png" width="30" alt="" onclick="ModelDelete(this)" class="model-item-icon">
                <p class="item-icon-txt">删除</p>
                </div>
                <div>
                <img src="assets/img/图片.png" width="30" alt="" onclick="openGXDetail(this)" class="model-item-icon">
                <p class="item-icon-txt">图片</p>
                </div>
                <div>
                <img src="assets/img/编辑.png" width="30" alt="" onclick="openChangeName(this)" class="model-item-icon">
                <p class="item-icon-txt">名字</p>
                </div>
                <div class="changeGxModel">
                <img src="assets/img/模型.png" width="30" alt="" onclick="OnLoadScene(this)" class="model-item-icon">
                <p class="item-icon-txt">模型</p>
                </div>
                </div>
                </div>
                    <img src='${m_strWebService}users/share/chenx/savefile/${itemInfo.folder}/data_icon_1.jpg?time=${time}' width="290" height="228">
                    <div class="item-detail">
                        <p class="item-text">${itemInfo.scenename}</p>
                        <div class="item-bottom-box">
                      
                      
                        </div>
                    </div>
                </div>`
            }

        }
        console.log(dataArr)
        for (let i = 0; i < 10; i++) {
            $('#gxInfo').append(dataInfo[i])
        }
        if (edition !== 'ihouse') {
            $('.changeGxModel').hide()

        }
        $("#myPage3").sPage({
            page: 1,//当前页码，必填
            total: dataInfo.length,//数据总条数，必填
            pageSize: 10,//每页显示多少条数据，默认10条
            totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
            showTotal: true,//是否显示总条数，默认关闭：false
            showSkip: true,//是否显示跳页，默认关闭：false
            showPN: true,//是否显示上下翻页，默认开启：true
            prevPage: "上一页",//上翻页文字描述，默认“上一页”
            nextPage: "下一页",//下翻页文字描述，默认“下一页”
            backFun: function (page) {
                $('#gxInfo').html('')
                let firstNum = page * 10 - 10
                let lastNum = firstNum + 10
                if (lastNum > dataInfo.length) {
                    for (let i = firstNum; i < dataInfo.length; i++) {
                        $('#gxInfo').append(dataInfo[i])
                    }
                } else {
                    for (let i = firstNum; i < lastNum; i++) {
                        $('#gxInfo').append(dataInfo[i])
                    }
                }
            }
        })
    } else if (e === 'maps') {
        $('.active-table-item').removeClass('active-table-item')
        $('#map').addClass('active-table-item')
        $('.table-item').show()
        kuType = 'gg'
        document.getElementById('gxTitle').style.display = 'block'
        document.getElementById('qyTitle').style.display = 'none'
        document.getElementById('ppLogo').style.display = 'none'
        document.getElementById('gxBox').style.display = 'none'
        document.getElementById('myFn').style.display = 'none'
        document.getElementById('user').style.display = 'none'
        document.getElementById('custom').style.display = 'none'
        document.getElementById('zidingyiBtn').style.display = 'none'
        document.getElementById('load').style.display = 'none'
        document.getElementById('tishi').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('lsBox').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'block'
        document.getElementById('mapBtn').style.display = 'block'
        document.getElementById('_modelBtn').style.display = 'none'
        document.getElementById('buyMapBtn').style.display = 'none'
        document.getElementById('buyModelBtn').style.display = 'none'
        document.getElementById('myModelPage-box').style.display = 'block'
        if (edition === 'kz') {
            $('#model').click()
        } else {
            $('#map').click()
        }
    } else if (e === 'pinpai') {
        $('.active-table-item').removeClass('active-table-item')
        $('#_map').addClass('active-table-item')
        kuType = 'pp'
        document.getElementById('gxTitle').style.display = 'none'
        document.getElementById('qyTitle').style.display = 'block'
        document.getElementById('gxBox').style.display = 'none'
        document.getElementById('myFn').style.display = 'none'
        document.getElementById('user').style.display = 'none'
        document.getElementById('custom').style.display = 'none'
        document.getElementById('zidingyiBtn').style.display = 'none'
        document.getElementById('load').style.display = 'none'
        document.getElementById('tishi').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'none'
        document.getElementById('lsBox').style.display = 'none'
        document.getElementById('ppLogo').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'block'
        document.getElementById('myModelPage-box').style.display = 'block'
        document.getElementById('mapBtn').style.display = 'block'
        document.getElementById('_modelBtn').style.display = 'none'
        document.getElementById('buyMapBtn').style.display = 'none'
        document.getElementById('buyModelBtn').style.display = 'none'
        $('#firstMenu').html(`<li>一级:</li>
                        <li><span class="active2" onclick="handleAllBtn(this)">全部</span></li>`)
        $('#item-box').html('')
        $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="handleWholeBtn(this)">全部</span></li>`)
        let csvUrl = m_strWebService + 'users/' + folder + '/huawen_upload.csv?a=' + guid()
        console.log(categoryType)
        $.ajax({
            type: 'GET',
            url: csvUrl,
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
                    for (var j = 0; j < strData.length; j++) { //二重
                        if (categoryType[i] === strData[j][3]) {
                            secondType[i].push(strData[j][4]);//把各自符合类型的数值添加到相应的位置
                        }
                    }
                }
                for (var i = 0; i < secondType.length; i++) {//"二级"数组去重
                    secondType[i] = distinct(secondType[i]);//数组去重后重新赋值
                }
                strData = strData.reverse()
                console.log(categoryType, secondType)
                for (let i = 0; i < categoryType.length; i++) {
                    let item = `<li><span onclick="handleScreenClick(this)">${categoryType[i]}</span></li>`
                    $('#firstMenu').append(item)
                }
                pushItem(strData)
            },
            error: function () {
                categoryType = ['其他']
                secondType = [['其他']]
            }
        })
    } else if (e === 'txt') {
        document.getElementById('gxBox').style.display = 'none'
        document.getElementById('myFn').style.display = 'none'
        document.getElementById('user').style.display = 'none'
        document.getElementById('custom').style.display = 'none'
        document.getElementById('zidingyiBtn').style.display = 'none'
        document.getElementById('load').style.display = 'none'
        document.getElementById('tishi').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'none'
        document.getElementById('lsBox').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'block'
    } else if (e === 'my') {
        $('#type0').html('')
        userImageArray.length = 0
        document.getElementById('gxBox').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('user').style.display = 'none'
        document.getElementById('custom').style.display = 'none'
        document.getElementById('zidingyiBtn').style.display = 'none'
        document.getElementById('load').style.display = 'none'
        document.getElementById('tishi').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'none'
        document.getElementById('lsBox').style.display = 'none'
        document.getElementById('myFn').style.display = 'block'
        let selectTime = Math.random();
        $.ajax({
            url: `${m_strWebService}users/${folder}/${name}/savefile/scene.xml?${selectTime}`,
            type: 'get',
            dataType: 'xml',
            success: function (res) {

                res = $(res).children().children();

                for (var i = 0; i < res.length; i++) {
                    let Name = res.eq(i).attr("Name");
                    let Folder = res.eq(i).attr("Folder");
                    let CustoerName = res.eq(i).attr("CustoerName");
                    let Dates = res.eq(i).attr("Date");
                    if (CustoerName == undefined) {
                        CustoerName = "临时";
                        Dates = "2019-11-12";
                    }
                    ;
                    if (Dates != null) {
                        Dates = Dates.split(" ")[0];
                    }
                    ;
                    let item = {
                        name: Name,
                        folder: Folder,
                        custoer: CustoerName,
                        date: Dates
                    }
                    userImageArray.push(item)
                }
                let imgInfo = []
                for (let i = 0; i < userImageArray.length; i++) {
                    let temp = Math.random();
                    imgInfo[i] = `<div class="item" id='my${userImageArray[i].folder}'   onmouseout="iconOut(this)" onmouseover="iconOver(this)">
                <div class="item-icon-box" id='my${userImageArray[i].folder}icon' >
                <div class="item-icon-bg">
               
                <div class="icon-item">
                <img src="assets/img/删除.png" width="30" alt="" onclick="myModelDelete(this)" class="model-item-icon delete-btn" id='${userImageArray[i].folder}'>
                <p class="item-icon-txt">删除</p>
                </div>
                <div class="icon-item">
                <img src="assets/img/分享.png" width="30" alt="" onclick="shareOpen(this)" class="">
                <p class="item-icon-txt">分享</p>
                </div>
                <div class="icon-item">
                <img src="assets/img/详情.png" width="30" alt="" onclick="picOpen(this)" class="" >
                <p class="item-icon-txt">详情</p>
                </div>
                </div>
                </div>
                    <img src='${m_strWebService}users/${folder}/${name}/savefile/${userImageArray[i].folder}/data_icon.jpg?temp=${temp}' width="290" height="220"
                    data-scheme-file="${m_strWebService}users/${folder}/${name}/savefile/${userImageArray[i].folder}/data_scene.xml?${temp}">
                    <div class="item-detail">
                        <p class="item-text">${userImageArray[i].name}</p>
                      
                    </div>
                </div>`

                }
                for (let i = 0; i < 10; i++) {
                    $('#type0').append(imgInfo[i])
                }
                $("#myPage0").sPage({
                    page: 1,//当前页码，必填
                    total: imgInfo.length,//数据总条数，必填
                    pageSize: 8,//每页显示多少条数据，默认10条
                    totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
                    showTotal: true,//是否显示总条数，默认关闭：false
                    showSkip: true,//是否显示跳页，默认关闭：false
                    showPN: true,//是否显示上下翻页，默认开启：true
                    prevPage: "上一页",//上翻页文字描述，默认“上一页”
                    nextPage: "下一页",//下翻页文字描述，默认“下一页”
                    backFun: function (page) {
                        $('#type0').html('')
                        let firstNum = page * 8 - 8
                        let lastNum = firstNum + 8
                        if (lastNum > imgInfo.length) {
                            for (let i = firstNum; i < imgInfo.length; i++) {
                                $('#type0').append(imgInfo[i])
                            }
                        } else {
                            for (let i = firstNum; i < lastNum; i++) {
                                $('#type0').append(imgInfo[i])
                            }
                        }
                    }
                })
            }
        })

    } else if (e === 'onload') {
        document.getElementById('gxBox').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'none'
        document.getElementById('myFn').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('user').style.display = 'none'
        document.getElementById('custom').style.display = 'none'
        document.getElementById('zidingyiBtn').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'none'
        document.getElementById('lsBox').style.display = 'none'
        document.getElementById('load').style.display = 'flex'
        document.getElementById('tishi').style.display = 'block'
    } else if (e === 'user') {
        $('#userList').html('')
        document.getElementById('gxBox').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'none'
        document.getElementById('myFn').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('tishi').style.display = 'none'
        document.getElementById('load').style.display = 'none'
        document.getElementById('custom').style.display = 'none'
        document.getElementById('zidingyiBtn').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'none'
        document.getElementById('lsBox').style.display = 'none'
        document.getElementById('user').style.display = 'block'
        if (ut === '2') {
            document.getElementById('makeUserType').style.display = 'none'
            $('.Menu-item')[0].style.display = 'none'
            $('.Menu-item')[2].style.display = 'none'
            $('.Menu-item')[3].style.display = 'none'
        }
        let cId = ''
        if (ut === '11') {
            cId = ''
        } else {
            cId = companyId
        }
        $.ajax({
            type: 'POST',
            url: m_strWebService + 'service1.asmx/GetUserList',
            data: {
                strCompanyID: cId
            },
            success: function (data) {
                let str = $(data).find("string").html()
                let txt = str.split('#')
                txt.splice(0, 1)
                let itemArr = []
                console.log(txt)
                for (let i = 0; i < txt.length; i++) {
                    let item = txt[i].split('~')

                    let type = ''


                    let typeNum = item[11]
                    let arr = userList.filter(function (ele) {
                        return ele.type === typeNum
                    })
                    if (arr.length !== 0) {
                        type = arr[0].name
                    } else {
                        if (item[11] === '11') {
                            type = '管理员'
                        } else if (item[11] === '0') {
                            type = '企业账号'
                        } else if (item[11] === '1') {
                            type = '设计师'
                        } else if (item[11] === '2') {
                            type = '普通用户'
                        }
                    }
                    let time = item[14].replace(new RegExp("/", "gm"), "-")

                    let obj = {
                        name: item[0],
                        type: type,
                        ut: item[11],
                        closingDate: item[3],
                        lastTime: item[8],
                        ip: item[7],
                        tel: '',
                        companyId: item[10],
                        nickName: item[13],
                        time: time
                    }
                    itemArr.push(obj)
                }
                let my
                my = itemArr.filter(function (ele) {
                    return ele.name === name
                })
                itemArr = itemArr.filter(function (ele) {
                    return ele.type != '管理员'
                })

                itemArr = itemArr.filter(function (ele) {
                    return ele.ut !== ut
                })

                if (ut !== '11') {
                    let obj = userList.filter(function (ele) {
                        return ele.type === ut
                    })
                    obj = obj[0]
                    if (obj.ut === '2') {
                        itemArr.length = 0
                    }
                }


                itemArr.sort(function (a, b) {
                    return b.time < a.time ? -1 : 1
                })
                allUser = itemArr

                console.log(itemArr)
                itemArr.push(my[0])
                userArr = itemArr
                let num = 15
                if (itemArr.length < 15) {
                    num = itemArr.length
                }
                for (let i = 0; i < num; i++) {
                    let imageInfo = `<tr >
                    <td id='tdName${i}'>${itemArr[i].name}</td>
                    <td>${itemArr[i].nickName}</td>
                    <td>${itemArr[i].type}</td>
                    <td>${itemArr[i].closingDate}</td>
                    <td>${itemArr[i].tel}</td>
                    <td>${itemArr[i].lastTime}</td>
                    <td>${itemArr[i].ip}</td>
                    <td>${itemArr[i].time}</td>
                </tr>`
                    $('#userList').append(imageInfo)
                }
                for (let i = 0; i < num; i++) {
                    let id = 'tdName' + i
                    let obj = document.getElementById(id)
                    let father = obj.parentNode
                    father.oncontextmenu = function (env) {
                        let e = env || window.event;
                        // 获取菜单，让菜单显示出来
                        userName = userArr[i].name
                        userNameId = id
                        let context = document.getElementById("clickMenu");
                        $('.active-user-click').removeClass('active-user-click')
                        $(father).addClass('active-user-click')
                        context.style.display = "none";
                        context.style.display = "block";
                        ModifyUser = obj.innerHTML
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
                    total: itemArr.length,//数据总条数，必填
                    pageSize: 15,//每页显示多少条数据，默认10条
                    totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
                    showTotal: true,//是否显示总条数，默认关闭：false
                    showSkip: true,//是否显示跳页，默认关闭：false
                    showPN: true,//是否显示上下翻页，默认开启：true
                    prevPage: "上一页",//上翻页文字描述，默认“上一页”
                    nextPage: "下一页",//下翻页文字描述，默认“下一页”
                    backFun: function (page) {
                        $('#userList').html('')
                        let firstNum = page * 15 - 15
                        let lastNum = firstNum + 15
                        if (lastNum > itemArr.length) {
                            for (let i = firstNum; i < itemArr.length; i++) {
                                let imageInfo = `<tr >
                    <td id='tdName${i}'>${itemArr[i].name}</td>
                    <td>${itemArr[i].nickName}</td>
                    <td>${itemArr[i].type}</td>
                    <td>${itemArr[i].closingDate}</td>
                    <td>${itemArr[i].tel}</td>
                    <td>${itemArr[i].lastTime}</td>
                    <td>${itemArr[i].ip}</td>
                    <td>${itemArr[i].time}</td>
                </tr>`
                                $('#userList').append(imageInfo)
                            }
                            for (let i = firstNum; i < itemArr.length; i++) {
                                let id = 'tdName' + i
                                let obj = document.getElementById(id)
                                let father = obj.parentNode
                                father.oncontextmenu = function (env) {
                                    let e = env || window.event;
                                    userName = userArr[i].name
                                    userNameId = id
                                    // 获取菜单，让菜单显示出来
                                    let context = document.getElementById("clickMenu");
                                    $('.active-user-click').removeClass('active-user-click')
                                    $(father).addClass('active-user-click')
                                    context.style.display = "none";
                                    context.style.display = "block";
                                    ModifyUser = obj.innerHTML
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
                                let imageInfo = `<tr>
                    <td id='tdName${i}'>${itemArr[i].name}</td>
                    <td>${itemArr[i].nickName}</td>
                    <td>${itemArr[i].type}</td>
                    <td>${itemArr[i].closingDate}</td>
                    <td>${itemArr[i].tel}</td>
                    <td>${itemArr[i].lastTime}</td>
                    <td>${itemArr[i].ip}</td>
                    <td>${itemArr[i].time}</td>
                </tr>`
                                $('#userList').append(imageInfo)
                            }
                            for (let i = firstNum; i < lastNum; i++) {
                                let id = 'tdName' + i
                                let obj = document.getElementById(id)
                                let father = obj.parentNode
                                father.oncontextmenu = function (env) {
                                    let e = env || window.event;
                                    userName = userArr[i].name
                                    userNameId = id
                                    // 获取菜单，让菜单显示出来
                                    let context = document.getElementById("clickMenu");
                                    $('.active-user-click').removeClass('active-user-click')
                                    $(father).addClass('active-user-click')
                                    context.style.display = "none";
                                    context.style.display = "block";
                                    ModifyUser = obj.innerHTML
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
        })
    } else if (e === 'custom') {
        document.getElementById('gxBox').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'none'
        document.getElementById('myFn').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('tishi').style.display = 'none'
        document.getElementById('load').style.display = 'none'
        document.getElementById('user').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'none'
        document.getElementById('lsBox').style.display = 'none'
        document.getElementById('custom').style.display = 'flex'
        if (pbDis === '0') {
            init()
        }
        if (openDis === '1') {
            document.getElementById('zidingyiBtn').style.display = 'block'
        }
        $.ajax({
            type: 'POST',
            url: m_strWebService + 'Service1.asmx/GetFunctionList',
            data: {
                CompanyID: companyId
            },
            success: function (data) {
                let txt = JSON.parse(data).function
                txt = $.parseXML(txt)
                gn1 = $(txt).find("房间形状模板").html()
                gn2 = $(txt).find("门窗").html()
                gn3 = $(txt).find("结构").html()
                gn4 = $(txt).find("画墙").html()
                gn5 = $(txt).find("产品清单").html()
                gn6 = $(txt).find("快速预算").html()
                gn7 = $(txt).find("展台舞台").html()
                gn8 = $(txt).find("上传我的产品").html()
                gn8 = $(txt).find("云币支付").html()
                gn15 = $(txt).find("渲染模块").html()
                gn16 = $(txt).find("效果图册").html()
                gn17 = $(txt).find("品牌专区").html()
                if (loadXml === 'off') {
                    if (gn1 === '1') {
                        let father = document.getElementById('kai1').parentNode
                        father.style.display = 'inline-block'
                    } else {
                        let father = document.getElementById('guan1').parentNode
                        father.style.display = 'inline-block'
                    }
                    if (gn2 === '1') {
                        let father = document.getElementById('kai2').parentNode
                        father.style.display = 'inline-block'
                    } else {
                        let father = document.getElementById('guan2').parentNode
                        father.style.display = 'inline-block'
                    }
                    if (gn3 === '1') {
                        let father = document.getElementById('kai3').parentNode
                        father.style.display = 'inline-block'
                    } else {
                        let father = document.getElementById('guan3').parentNode
                        father.style.display = 'inline-block'
                    }
                    if (gn4 === '1') {
                        let father = document.getElementById('kai4').parentNode
                        father.style.display = 'inline-block'
                    } else {
                        let father = document.getElementById('guan4').parentNode
                        father.style.display = 'inline-block'
                    }
                    if (gn5 === '1') {
                        let father = document.getElementById('kai5').parentNode
                        father.style.display = 'inline-block'
                    } else {
                        let father = document.getElementById('guan5').parentNode
                        father.style.display = 'inline-block'
                    }
                    if (gn6 === '1') {
                        let father = document.getElementById('kai6').parentNode
                        father.style.display = 'inline-block'
                    } else {
                        let father = document.getElementById('guan6').parentNode
                        father.style.display = 'inline-block'
                    }
                    if (gn7 === '1') {
                        let father = document.getElementById('kai7').parentNode
                        father.style.display = 'inline-block'
                    } else {
                        let father = document.getElementById('guan7').parentNode
                        father.style.display = 'inline-block'
                    }
                    if (gn8 === '1') {
                        let father = document.getElementById('kai8').parentNode
                        father.style.display = 'inline-block'
                    } else {
                        let father = document.getElementById('guan8').parentNode
                        father.style.display = 'inline-block'
                    }
                    if (gn9 === '1') {
                        let father = document.getElementById('kai9').parentNode
                        father.style.display = 'inline-block'
                    } else {
                        let father = document.getElementById('guan9').parentNode
                        father.style.display = 'inline-block'
                    }
                    if (gn15 === '1') {
                        let father = document.getElementById('kai15').parentNode
                        father.style.display = 'inline-block'
                    } else {
                        let father = document.getElementById('guan15').parentNode
                        father.style.display = 'inline-block'
                    }
                    if (gn16 === '1') {
                        let father = document.getElementById('kai16').parentNode
                        father.style.display = 'inline-block'
                    } else {
                        let father = document.getElementById('guan16').parentNode
                        father.style.display = 'inline-block'
                    }
                    if (gn17 === '1') {
                        let father = document.getElementById('kai17').parentNode
                        father.style.display = 'inline-block'
                    } else {
                        let father = document.getElementById('guan17').parentNode
                        father.style.display = 'inline-block'
                    }
                }
            }
        })
    } else if (e === 'ls') {
        document.getElementById('gxBox').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'none'
        document.getElementById('myFn').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('tishi').style.display = 'none'
        document.getElementById('load').style.display = 'none'
        document.getElementById('user').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'none'
        document.getElementById('custom').style.display = 'none'
        document.getElementById('lsBox').style.display = 'block'
        let fBox = document.getElementById('fBox')
        if (obj.innerHTML === '厂商管理') {
            fBox.src = 'assets/form/factory.html'
        } else if (obj.innerHTML === '订单管理') {
            fBox.src = 'assets/form/order.html'
        } else if (obj.innerHTML === '参数设置') {
            fBox.src = 'assets/form/parameter.html'
        } else if (obj.innerHTML === '部品系统') {
            fBox.src = 'assets/form/bupin.html'
        } else if (obj.innerHTML === '产品配件') {
            fBox.src = 'assets/form/peijian.html'
        }
    } else if (e === 'qb') {
        document.getElementById('ppLogo').style.display = 'none'
        document.getElementById('gxBox').style.display = 'none'
        document.getElementById('myFn').style.display = 'none'
        document.getElementById('user').style.display = 'none'
        document.getElementById('custom').style.display = 'none'
        document.getElementById('zidingyiBtn').style.display = 'none'
        document.getElementById('load').style.display = 'none'
        document.getElementById('tishi').style.display = 'none'
        document.getElementById('jieshao').style.display = 'none'
        document.getElementById('lsBox').style.display = 'none'
        document.getElementById('txtLoad').style.display = 'none'
        document.getElementById('mzyBox').style.display = 'none'
        document.getElementById('myModelPage').style.display = 'block'
        document.getElementById('mapBtn').style.display = 'block'
        document.getElementById('_modelBtn').style.display = 'none'
        typeFirst = '墙板'
        searchType = 'map'
        $('#gxTitle').show()
        $('.table-item').hide()
        $('#firstMenu').hide()
        $('#threeMenu').hide()
        $('#secondMenu').html(`<li>分类 :</li>
                <li><span class="active1" onclick="handleWholeBtn(this)">全部</span></li>`)
        let csvUrl = m_strWebService + 'ihouse/data/texture/huawen.csv?a=' + guid()
        $.ajax({
            type: 'GET',
            url: csvUrl,
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

                let classArr = secondType[1]
                for (let i = 0; i < classArr.length; i++) {
                    let info = `<li data-res_type="model"><span onclick="handleSecondClick(this)">${classArr[i]}</span></li>`
                    $('#secondMenu').append(info)
                }
                strData = strData.filter(function (ele) {
                    return ele[3] === '墙板'
                })
                console.log(strData)
                pushItem(strData)
            }
        })
    }
}

function closeAddBox() {
    document.getElementById('addMaps').style.display = 'none'
    document.getElementById('mapName').value = ''
    document.getElementById('mapChang').value = ''
    document.getElementById('mapKuan').value = ''
    document.getElementById('mapFile').style.display = 'block'
    document.getElementById('mapAdd').style.display = 'block'
    document.getElementById('maps-txt').style.display = 'block'
    document.getElementById('bigMaps').style.display = 'none'
    document.getElementById('mapFile').type = 'txt'
    document.getElementById('mapFile').type = 'file'
    modelLoadType = ''
}

function handleAllBtn(obj) {
    typeFirst = ''
    $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="handleWholeBtn(this)">全部</span></li>`)
    $('.active2').removeClass("active2")
    obj.className = 'active2'
    pushItem(strData)
}

function handleSecondClick(obj) {
    let type = obj.innerHTML
    $('.active1').removeClass("active1")
    obj.className = 'active1'
    let newArr = strData.filter(function (ele) {
        return ele[4] === type
    })
    pushItem(newArr)
}

$(function () {
    $('#item-box').delegate('.model_mats', 'click', function (event) {
        let file = $(this).attr('file');
        let fileImg = m_strWebService + 'ihouse/data/texture/' + file
        // file=file.replace("jpg", "3ds");
        file = "tietu," + file;
        file = m_strWebService + "h5/SimpleTex/SimpleTex.html?file=" + file;
        window.open(file)
    });
})
$(function () {
    $('#myModel').delegate('.model_mats', 'click', function (event) {
        let file = $(this).attr('file');
        let fileImg = m_strWebService + 'ihouse/data/texture/' + file
        // file=file.replace("jpg", "3ds");
        file = "tietu," + file;
        file = m_strWebService + "h5/SimpleTex/SimpleTex.html?file=" + file;
        window.open(file)
    });
    $('#myModel').delegate('.mapDelete', 'click', function (event) {
        let file = $(this).attr('file');
        let picName = file.split('/')
        picName = picName[picName.length - 1]
        picName = picName.split('.')[0]
        if (confirm('确定要删除吗') === true) {
            let deleteData = {
                type: '2',
                companyid: companyId,
                userid: cookie.uid,
                useraccount: name,
                folder: folder,
                class1: '其他',
                class2: '其他',
                name: picName
            }
            $.ajax({
                type: 'POST',
                url: m_strWebService + 'service1.asmx/DeletePrivateMaterial',
                async: false,
                data: {
                    JsonBaseData: JSON.stringify(deleteData)
                },
                success: function (data) {
                    data = JSON.parse(data)
                    if (data.code === '1') {
                        alert('删除成功')
                        let dom = document.getElementById('mzyMap')
                        changeMzyPage('map', dom)
                    } else {
                        alert('删除失败')
                    }
                }
            })
        }
    });
})
$(function () {
    $('#item-box').delegate('._model_mats', 'click', function (event) {
        let file = $(this).attr('file');
        file = file.replace(/\\/g, '/')
        file = file.replace("jpg", "3ds");
        file = "mouxiang," + file;
        file = m_strWebService + "h5/SimpleMaterial/materialTexture.html?file=" + file;
        window.open(file)
    });
})
$(function () {
    $('#myModel').delegate('._model_mats', 'click', function (event) {
        let file = $(this).attr('file');
        file = file.replace(/\\/g, '/')
        file = file.replace("jpg", "3ds");
        file = "mouxiang," + file;
        file = m_strWebService + "h5/SimpleMaterial/materialTexture.html?file=" + file;
        window.open(file)
    });
})
// $(function () {
//     $('#item-box').delegate('.model-goods-delete', 'click', function (event) {
//         let file = $(this).attr('file');
//         file = file.replace('/', '\\')
//         file = file.replace('/', '\\')
//         file = file.replace('/', '\\')
//         if (confirm('确定删除吗？') === true) {
//             let deleteData = {
//                 companyid: companyId,
//                 file: file
//             }
//             $.ajax({
//                 type: 'POST',
//                 async: false,
//                 url: m_strWebService + 'Service1.asmx/DeleteMaterial',
//                 data: {
//                     Data: JSON.stringify(deleteData)
//                 },
//                 success: function (data) {
//                     let obj = document.getElementById('modelBtn')
//
//                     data = JSON.parse(data)
//                     if (data.code === '1') {
//                         alert('删除成功')
//                         changePage('maps', obj)
//                     }
//                 }
//             })
//         }
//     });

// })

function searchMaps() {
    let txt = document.getElementById('keyTxt').value

    if (txt === '') {
        alert('请输入关键字')
    } else {
        console.log(searchType)
        if (searchType === 'map') {
            let newArr = strData.filter(function (ele) {
                return ele[7].includes(txt) || ele[0].includes(txt)
            })
            if (newArr.length === 0) {
                alert('无相关贴图')
            } else {
                pushItem(newArr)
            }
        } else if (searchType === 'model') {
            let newArr = strData.filter(function (ele) {
                return ele.name.includes(txt)
            })
            if (newArr.length === 0) {
                alert('无相关模型')
            } else {
                pushModel(newArr)
            }
        } else if (searchType === 'buyMap') {
            let newArr = strData.filter(function (ele) {
                return ele.name.includes(txt)
            })
            if (newArr.length === 0) {
                alert('无相关模型')
            } else {
                $('#item-box').html('')
                pushBuy(newArr)
            }
        } else if (searchType === 'buyModel') {
            let newArr = strData.filter(function (ele) {
                return ele.name.includes(txt)
            })
            if (newArr.length === 0) {
                alert('无相关模型')
            } else {
                $('#item-box').html('')
                pushBuyModel(newArr)
            }
        }

    }
}

var mapArr = []

function pushItem(arr) {
    $('#item-box').html('')
    let txt = guid()
    let itemArr = []
    for (let i = 0; i < arr.length; i++) {
        let size = arr[i][2].replace(/A/g, "X")
        let itemName = ''
        if (arr[i][7] === '') {
            itemName = arr[i][0]
        } else {
            itemName = arr[i][7]
        }
        if (edition === 'kz') {
            itemArr[i] = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}ihouse/data/texture/${arr[i][1]}?a=${txt}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a  class="resClickAdd"> ${itemName}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a  class="resClickAdd"> ${size} </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    
                    <p class=" model-goods-download">
                        <a onclick="openNewBox(this,'1')"  class="j_download" >编辑</a>
                    </p>
                    <p class=" model-goods-collect" file='${arr[i][1]}' onclick="changeMaps(this)">
                        <a class="j_collect"  >修改</a>
                    </p>
                    <p class=" model-goods-delete" file='${arr[i][1]},${arr[i][3]},${arr[i][4]},${arr[i][0]}' onclick="deleteMap('0',this)">
                        <a class="j_delete" onclick="">删除</a>
                    </p>
                </div>
            </div>
        </div>`
        } else {
            itemArr[i] = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}ihouse/data/texture/${arr[i][1]}?a=${txt}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a  class="resClickAdd"> ${itemName}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a  class="resClickAdd"> ${size} </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    <p class="model_mats" file='${arr[i][1]}'>
                        <a class="j_3d">3D</a>
                    </p>
                    <p class=" model-goods-download">
                        <a onclick="" href='${m_strWebService}ihouse/data/texture/${arr[i][1]}' target="_blank" class="j_download" download="">下载</a>
                    </p>
                    <p class=" model-goods-collect" file='${arr[i][1]}' onclick="changeMaps(this)">
                        <a class="j_collect"  >修改</a>
                    </p>
                    <p class=" model-goods-delete" file='${arr[i][1]},${arr[i][3]},${arr[i][4]},${arr[i][0]}' onclick="deleteMap('0',this)">
                        <a class="j_delete" onclick="">删除</a>
                    </p>
                </div>
            </div>
        </div>`
        }


    }
    for (let i = 0; i < 10; i++) {
        $('#item-box').append(itemArr[i])
    }
    mapArr = itemArr
    $("#myPage1").sPage({
        page: 1,//当前页码，必填
        total: arr.length,//数据总条数，必填
        pageSize: 10,//每页显示多少条数据，默认10条
        totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
        showTotal: true,//是否显示总条数，默认关闭：false
        showSkip: true,//是否显示跳页，默认关闭：false
        showPN: true,//是否显示上下翻页，默认开启：true
        prevPage: "上一页",//上翻页文字描述，默认“上一页”
        nextPage: "下一页",//下翻页文字描述，默认“下一页”
        backFun: function (page) {
            $('#item-box').html('')
            let firstNum = page * 10 - 10
            let lastNum = firstNum + 10
            if (lastNum > itemArr.length) {
                for (let i = firstNum; i < itemArr.length; i++) {
                    $('#item-box').append(itemArr[i])
                }
            } else {
                for (let i = firstNum; i < lastNum; i++) {
                    $('#item-box').append(itemArr[i])
                }
            }
        }
    })
}


var shareNameItem

function shareClose() {
    document.getElementById('shareBox').style.display = 'none'
}

function shareOpen(obj) {
    document.getElementById('shareBox').style.display = 'block'
    let father = obj.parentNode
    father = father.parentNode
    father = father.parentNode
    father = father.parentNode
    let dom = $(father).children('.item-detail')[0]
    let name = $(dom).children('.item-text')[0].innerHTML

    shareNameItem = userImageArray.filter(function (ele) {
        return ele.name === name
    })
    shareNameItem = shareNameItem[0]
}

function shareClick() {
    let userName = document.getElementById('shareName').value
    $.ajax({
        type: 'POST',
        url: m_strWebService + 'Service1.asmx/GetAllUserList',
        async: false,
        data: {
            strCompanyID: ''
        },
        success: function (data) {
            let nameArr = $(data).find("string").html()
            nameArr = nameArr.split('#')
            nameArr.splice(0, 1)
            let nameInfo = []
            for (let i = 0; i < nameArr.length; i++) {
                let itemInfo = nameArr[i]
                itemInfo = itemInfo.split('~')
                let item = {
                    name: itemInfo[0],
                    folder: itemInfo[6]
                }
                nameInfo.push(item)
            }
            let disArr = nameInfo.filter(function (ele) {
                return ele.name === userName
            })
            if (disArr.length === 0) {
                alert('该用户不存在！')
            } else {
                let shareItem = disArr[0]
                let shareData = `
                <root>
<share username='${name}' scenexmlpath='users/chenx/${name}/savefile/scene.xml' scenedir='${shareNameItem.folder}' scenename='${shareNameItem.name}' custoerName='' address='' area='' style='' date='' desc='' companyID='${companyId}' />
<item username='${shareItem.name}' folder='${shareItem.folder}' />
                </root>
                `
                $.ajax({
                    type: 'POST',
                    url: m_strWebService + 'Service1.asmx/ShareUserScheme_SJS',
                    async: false,
                    data: {
                        strXMLData: shareData,
                        strCompanyID: companyId
                    },
                    success: function (data) {
                        alert('分享成功！')
                    }
                })
            }
        }
    })
}

function picOpen(obj) {
    let father = obj.parentNode
    father = father.parentNode
    father = father.parentNode
    father = father.parentNode
    let dom = $(father).children('.item-detail')[0]
    let mpdelName = $(dom).children('.item-text')[0].innerHTML
    let picItem = userImageArray.filter(function (ele) {
        return ele.name === mpdelName
    })
    picItem = picItem[0]
    window.open(m_strWebService + 'h5/rendering-img/rendering-display.html?type=1&&houseid=' + m_strWebService + 'users/' + folder + '/' + name + '/savefile/' + picItem.folder + '/data.xml')
    // document.getElementById('picLinkBox').style.display = 'block'
}

function closeLink() {
    document.getElementById('picLinkBox').style.display = 'none'
}

var typeFirst = ''

function handleScreenClick(obj) {
    typeFirst = obj.innerHTML
    $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="handleWholeBtn(this)">全部</span></li>`)
    $('.active2').removeClass("active2")
    obj.className = 'active2'
    let father = obj.parentNode
    let num = $(father).index()
    num = num - 2
    let classArr = secondType[num]

    for (let i = 0; i < classArr.length; i++) {
        let item = `<li data-res_type="model"><span onclick="handleSecondClick(this)">${classArr[i]}</span></li>`
        $('#secondMenu').append(item)
    }
    let newArr = strData.filter(function (ele) {
        return ele[3] === typeFirst
    })
    console.log(newArr)
    pushItem(newArr)
}

function handleWholeBtn(obj) {
    $('.active1').removeClass("active1")
    obj.className = 'active1'
    let newArr = strData.filter(function (ele) {
        return ele[3] === typeFirst
    })
    pushItem(newArr)
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
        arr[index] = item;
    })
    return arr;
}

// var m_strWebService = 'https://www.ihouse3d.com.cn/'

function gotoH5(obj) {
    let model = obj.id.replace('kan', '')
    let dataStr = '&username=' + name + '&password=' + passWord + '&schemeaddr=' + m_strWebService + 'users/' + folder + '/' + name + '/savefile/' + model + '/data_scene.xml'
    let data = base64_encode(dataStr)
    window.open(m_strWebService + 'h5/index.html?type=0&data=' + data)
    stopPropagation()
}

function myModelDelete(obj) {
    let father = obj.parentNode.parentNode.parentNode.parentNode
    let titleBox = $(father).children('.item-detail')[0]
    let title = $(titleBox).children()[0]
    title = title.innerHTML
    if (title === '临时') {
        alert('无法删除临时方案')
    } else {
        if (confirm('确定要删除吗') === true) {
            let sceneXML = `users/${folder}/${name}/savefile/scene.xml`;
            let sceneUUID = obj.id
            $.ajax({
                url: m_strWebService + 'service1.asmx/DeleteUserScene',
                type: 'POST',
                dataType: 'json',
                data: {UserSceneXML: sceneXML, SceneUUID: sceneUUID},
                success: function (data) {
                    //删除成功
                    if ("1" == data.code) {
                        location.reload();
                    }

                    alert(data.nofityMsg);
                }
            });
        }
    }
    stopPropagation()
}

document.onclick = function () {
    document.getElementById("clickMenu").style.display = 'none'
    document.getElementById("changeClass").style.display = 'none'

}

function stopPropagation(e) {
    e = e || window.event;
    if (e.stopPropagation) { //W3C阻止冒泡方法
        e.stopPropagation();
    } else {
        e.cancelBubble = true; //IE阻止冒泡方法
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

function loadXMLDoc(dname) {
    var xmls = '';

    $.ajax({
        url: dname,
        dataType: 'xml',
        type: 'GET',
        async: false,
        error: function (xml) {

        },
        success: function (xml) {
            xmls = xml;
        }
    });

    return xmls;
}

function searchUser() {
    let userTxt = document.getElementById('searchTxt').value
    let itemArr = userArr.filter(function (ele) {
        return ele.name.includes(userTxt)
    })
    if (itemArr.length !== 0) {
        $('#userList').html('')
        if (itemArr.length < 15) {
            for (let i = 0; i < itemArr.length; i++) {
                let imageInfo = `<tr >
                    <td id='tdName${i}'>${itemArr[i].name}</td>
                    <td>${itemArr[i].nickName}</td>
                    <td>${itemArr[i].type}</td>
                    <td>${itemArr[i].closingDate}</td>
                    <td>${itemArr[i].tel}</td>
                    <td>${itemArr[i].lastTime}</td>
                    <td>${itemArr[i].ip}</td>
                </tr>`
                $('#userList').append(imageInfo)
            }
            for (let i = 0; i < itemArr.length; i++) {
                let id = 'tdName' + i
                let obj = document.getElementById(id)
                let father = obj.parentNode
                father.oncontextmenu = function (env) {
                    let e = env || window.event;
                    // 获取菜单，让菜单显示出来
                    userName = itemArr[i].name
                    userNameId = id
                    let context = document.getElementById("clickMenu");
                    $('.active-user-click').removeClass('active-user-click')
                    $(father).addClass('active-user-click')
                    context.style.display = "none";
                    context.style.display = "block";
                    ModifyUser = obj.innerHTML
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
            for (let i = 0; i < 15; i++) {
                let imageInfo = `<tr >
                    <td id='tdName${i}'>${itemArr[i].name}</td>
                    <td>${itemArr[i].nickName}</td>
                    <td>${itemArr[i].type}</td>
                    <td>${itemArr[i].closingDate}</td>
                    <td>${itemArr[i].tel}</td>
                    <td>${itemArr[i].lastTime}</td>
                    <td>${itemArr[i].ip}</td>
                </tr>`
                $('#userList').append(imageInfo)
            }
            for (let i = 0; i < 15; i++) {
                let id = 'tdName' + i
                let obj = document.getElementById(id)
                let father = obj.parentNode
                father.oncontextmenu = function (env) {
                    let e = env || window.event;
                    // 获取菜单，让菜单显示出来
                    let context = document.getElementById("clickMenu");
                    $('.active-user-click').removeClass('active-user-click')
                    $(father).addClass('active-user-click')
                    context.style.display = "none";
                    context.style.display = "block";
                    ModifyUser = obj.innerHTML
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

        $("#myPage").sPage({
            page: 1,//当前页码，必填
            total: itemArr.length,//数据总条数，必填
            pageSize: 15,//每页显示多少条数据，默认10条
            totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
            showTotal: true,//是否显示总条数，默认关闭：false
            showSkip: true,//是否显示跳页，默认关闭：false
            showPN: true,//是否显示上下翻页，默认开启：true
            prevPage: "上一页",//上翻页文字描述，默认“上一页”
            nextPage: "下一页",//下翻页文字描述，默认“下一页”
            backFun: function (page) {
                $('#userList').html('')
                let firstNum = page * 15 - 15
                let lastNum = firstNum + 15
                if (lastNum > itemArr.length) {
                    for (let i = firstNum; i < itemArr.length; i++) {
                        let imageInfo = `<tr >
                    <td id='tdName${i}'>${itemArr[i].name}</td>
                    <td>${itemArr[i].nickName}</td>
                    <td>${itemArr[i].type}</td>
                    <td>${itemArr[i].closingDate}</td>
                    <td>${itemArr[i].tel}</td>
                    <td>${itemArr[i].lastTime}</td>
                    <td>${itemArr[i].ip}</td>
                </tr>`
                        $('#userList').append(imageInfo)
                    }
                    for (let i = firstNum; i < itemArr.length; i++) {
                        let id = 'tdName' + i
                        let obj = document.getElementById(id)
                        let father = obj.parentNode
                        father.oncontextmenu = function (env) {
                            let e = env || window.event;
                            userName = userArr[i].name
                            userNameId = id
                            // 获取菜单，让菜单显示出来
                            let context = document.getElementById("clickMenu");
                            $('.active-user-click').removeClass('active-user-click')
                            $(father).addClass('active-user-click')
                            context.style.display = "none";
                            context.style.display = "block";
                            ModifyUser = obj.innerHTML
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
                        let imageInfo = `<tr>
                    <td id='tdName${i}'>${itemArr[i].name}</td>
                    <td>${itemArr[i].nickName}</td>
                    <td>${itemArr[i].type}</td>
                    <td>${itemArr[i].closingDate}</td>
                    <td>${itemArr[i].tel}</td>
                    <td>${itemArr[i].lastTime}</td>
                    <td>${itemArr[i].ip}</td>
                </tr>`
                        $('#userList').append(imageInfo)
                    }
                    for (let i = firstNum; i < lastNum; i++) {
                        let id = 'tdName' + i
                        let obj = document.getElementById(id)
                        let father = obj.parentNode
                        father.oncontextmenu = function (env) {
                            let e = env || window.event;
                            userName = userArr[i].name
                            userNameId = id
                            // 获取菜单，让菜单显示出来
                            let context = document.getElementById("clickMenu");
                            context.style.display = "none";
                            context.style.display = "block";
                            ModifyUser = obj.innerHTML
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
    } else {
        alert('无相关用户')
    }
}

function closeANewUser() {
    document.getElementById('newUser').style.display = 'none'
    $('.active-user-click').removeClass('active-user-click')
    document.getElementById('userName').value = ''
    document.getElementById('userPass').value = ''
    document.getElementById('_userPass').value = ''
    document.getElementById('tel').value = ''
    document.getElementById('qq').value = ''
    document.getElementById('date1').value = ''
}

function openNewUser() {
    document.getElementById('newUser').style.display = 'block'
    // document.getElementById('new-btn').style.display = 'block'
    // document.getElementById('modify-title').style.display = 'none'
    // document.getElementById('modify-btn').style.display = 'none'
}

function CreateUser() {
    if (confirm('确定要创建该用户吗?') === true) {
        _CreateUser()
    }
}

function opendingzhi() {
    document.getElementById('dingzhi').style.display = 'block'
}

function closedingzhi() {
    document.getElementById('dingzhi').style.display = 'none'
}

function _CreateUser() {
    let userName = document.getElementById('userName').value
    let userPass = document.getElementById('userPass').value
    let _userPass = document.getElementById('_userPass').value
    let userType = document.getElementById('userType').value
    let tel = document.getElementById('tel').value
    let qq = document.getElementById('qq').value
    let time = document.getElementById('date1').value
    let type = ''


    let dis = allUser.filter(function (ele) {
        return ele.name === userName
    })
    if (dis.length === 0) {
        if (userName === '' || userPass === '' || userType === '' || time === '') {
            alert('请完整填写所有必填项！')
        } else {
            if (userPass !== _userPass) {
                alert('两次输入的密码不相同！')
            } else {
                let item = userList.filter(function (ele) {
                    return ele.name === userType
                })
                type = item[0].type
                $.ajax({
                    type: 'POST',
                    url: m_strWebService + 'Service1.asmx/AddUser',
                    async: false,
                    data: {
                        strCompanyID: companyId,
                        strAdministrator: '0',
                        strName: userName,
                        strPassword: userPass,
                        strQQ: qq,
                        strTel: tel,
                        strTimeEnd: time,
                        strDesc: '',
                        strAccountType: type,
                        strCreater: name,
                        strCreaterID: ''
                    },
                    success: function (data) {
                        let str = $(data).find("string").html()
                        let strObj = JSON.parse(str)

                        if (strObj.success === '1') {
                            alert('创建成功')
                            document.getElementById('newUser').style.display = 'none'
                            changePage('user')
                        } else {
                            alert(strObj.nofityMsg)
                        }

                    }
                })
            }
        }
    } else {
        alert('用户名已存在!')
    }
    // if (userType === '企业用户') {
    //     type = '0'
    // } else if (userType === '设计师') {
    //     type = '1'
    // } else if (userType === '普通用户') {
    //     type = '2'
    // }

}

function closeModifyUser() {
    document.getElementById('modifyUser').style.display = 'none'
    $('.active-user-click').removeClass('active-user-click')
}

var srtPSW = 'no'
var userId = ''

function openModifyUser() {
    document.getElementById('modifyUser').style.display = 'block'
    $.ajax({
        type: 'POST',
        url: m_strWebService + 'Service1.asmx/GetUserBasicInfo',
        data: {
            strCompanyID: companyId,
            strUserAccount: ModifyUser
        },
        success: function (data) {
            let str = $(data).find("string").html()

            let strObj = str.split('#')[1]
            let obj = strObj.split('~')

            document.getElementById('userName1').value = obj[0]
            let item = userList.filter(function (ele) {
                return ele.type === obj[11]
            })
            item = item[0]
            document.getElementById('userType1').value = item.name
            document.getElementById('date2').value = obj[3]
            userId = obj[4]
        }
    })
}

function modifyUser() {
    if (confirm('确定修改吗？') === true) {
        _modifyUser()
    }
}

function _modifyUser() {
    let userName = document.getElementById('userName1').value
    let userType = document.getElementById('userType1').value
    let _password = 'no'
    let tel = document.getElementById('tel1').value
    let qq = document.getElementById('qq1').value
    let date = document.getElementById('date2').value
    let password = 'no'
    if (srtPSW !== 'no') {
        password = document.getElementById('userPass1').value
        _password = document.getElementById('_userPass1').value
    }
    let item = userList.filter(function (ele) {
        return ele.name === userType
    })
    item = item[0]
    userType = item.type
    // if (userType === '企业用户') {
    //     userType = '0'
    // } else if (userType === '设计师') {
    //     userType = '1'
    // } else if (userType === '普通用户') {
    //     userType = '2'
    // } else if (userType === '管理员') {
    //     userType = '11'
    // }
    if (password !== _password) {
        alert('两次输入的密码不相同！')
    } else {
        $.ajax({
            type: 'POST',
            url: m_strWebService + 'Service1.asmx/ModifyUser',
            async: false,
            data: {
                strUserID: userId,
                strCompanyID: companyId,
                strAdministrator: '0',
                strName: userName,
                strPSW: password,
                strQQ: qq,
                strTel: tel,
                strTimeEnd: date,
                strDesc: '',
                accountType: userType,
                strCreater: name,
                strCreaterID: ''
            },
            success: function (data) {
                let str = $(data).find("string").html()
                let strObj = JSON.parse(str)

                if (strObj.success === '1') {
                    alert('修改成功')
                    document.getElementById('modifyUser').style.display = 'none'
                    changePage('user')
                } else {
                    alert(strObj.nofityMsg)
                }
            }
        })
    }
}

function openDeleteUser() {
    if (confirm('确定删除该用户吗？') === true) {
        _openDeleteUser()
    }
}

function _openDeleteUser() {
    if (ModifyUser === name) {
        alert('无法删除自己！')
    } else {
        $.ajax({
            type: 'POST',
            url: m_strWebService + 'Service1.asmx/GetUserBasicInfo',
            async: false,
            data: {
                strCompanyID: companyId,
                strUserAccount: ModifyUser
            },
            success: function (data) {
                let str = $(data).find("string").html()
                let strObj = str.split('#')[1]
                let obj = strObj.split('~')
                userId = obj[4]

            }
        })
        $.ajax({
            type: 'POST',
            url: m_strWebService + 'Service1.asmx/DeleteUser',
            async: false,
            data: {
                strUserID: userId,
                strName: ModifyUser,
                strFloder: ''
            },
            success: function (data) {
                let str = $(data).find("string").html()
                let strObj = JSON.parse(str)
                if (strObj.success === '1') {
                    alert('删除成功')
                    changePage('user')
                } else {
                    alert(strObj.nofityMsg)
                }
            }
        })
    }
}

var gn1 = '', gn2 = '', gn3 = '', gn4 = '', gn5 = '', gn6 = '', gn7 = '', gn8 = '', gn9 = '', gn15 = '', gn16 = '',
    gn17 = ''
var loadXml = 'off'

function _customLoad() {
    // let gn1 = document.getElementById('gongneng1').value
    // let gn2 = document.getElementById('gongneng2').value
    // let gn3 = document.getElementById('gongneng3').value
    //
    // if (gn1 === false) {
    //     gn1 = '0'
    // } else {
    //     gn1 = '1'
    // }
    // if (gn2 === false) {
    //     gn2 = '0'
    // } else {
    //     gn2 = '1'
    // }
    // if (gn3 === false) {
    //     gn3 = '0'
    // } else {
    //     gn3 = '1'
    // }
    let xml = `<系统功能>
       <房间形状模板>${gn1}</房间形状模板>
       <门窗>${gn2}</门窗>
       <结构>${gn3}</结构>
       <画墙>${gn4}</画墙>
       <产品清单>${gn5}</产品清单>
       <快速预算>${gn6}</快速预算>
       <展台舞台>${gn7}</展台舞台>
       <上传我的产品>${gn8}</上传我的产品>
       <云币支付>${gn9}</云币支付>
       <渲染模块>${gn15}</渲染模块>
       <效果图册>${gn16}</效果图册>
       <品牌专区>${gn17}</品牌专区>
</系统功能>`

    $.ajax({
        type: 'POST',
        url: m_strWebService + 'Service1.asmx/SetFunctionList',
        data: {
            CompanyID: companyId,
            XMLData: xml
        },
        success: function (data) {

            alert('设置成功')
            loadXml = 'on'
        }
    })
}

function parseXMLsimple(target) {
    var reg = /<([a-z,A-Z]+)>(.+)<\/\1>/g;
    var obj = {};
    target.replace(reg, function (a, b, c) {
        obj[b] = reg.test(c) ? parseXMLsimple(c) : c;
    })
    return obj;
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

var useId = a.useid

function handleOpenClick(time, e) {
    if (confirm('确定要开通吗？') === true) {
        let userName = ''
        if (useId !== undefined) {
            userName = useId
        } else {
            userName = name
        }
        let payData = {
            type: 2,
            user_account: userName
        }
        let bi = ''
        let price = e
        $.ajax({
            type: 'POST',
            async: false,
            url: m_strWebService + 'PayWebService.asmx/Payment',
            dataType: 'json',
            data: {
                PayData: JSON.stringify(payData)
            },
            success: function (data) {
                bi = data.count
                if (parseInt(bi) < parseInt(price)) {
                    alert('云币不足，请充值!!')
                } else {
                    let longTime = time
                    let uuid = ''
                    if (uuidDis === 'yes') {
                        uuid = loadUUid
                    } else {
                        uuid = guid()
                    }
                    let openData = {}
                    if (openDis === '1') {
                        let ksTime = document.getElementById('ksTime').innerHTML
                        let bgTime = document.getElementById('dqTime').innerHTML
                        bgTime = dateAdd(bgTime, longTime)
                        openData = {
                            type: 0,
                            companyid: companyId,
                            begindate: ksTime,
                            enddate: bgTime,
                            days: longTime,
                            webaddr: uuid
                        }
                    } else {
                        openData = {
                            type: 0,
                            companyid: companyId,
                            begindate: getNowFormatDate(),
                            enddate: getNowFormatDate(longTime),
                            days: longTime,
                            webaddr: uuid
                        }
                    }
                    $.ajax({
                        type: 'POST',
                        async: false,
                        url: m_strWebService + 'Service1.asmx/Company_Authority',
                        data: {
                            Data: JSON.stringify(openData)
                        },
                        success: function (data) {

                            data = JSON.parse(data)
                            if (data.code === '1') {
                                let PayData = {
                                    type: 1,
                                    user_account: userName,
                                    count: price,
                                    description: "自助开通"
                                }
                                $.ajax({
                                    type: 'POST',
                                    url: m_strWebService + 'PayWebService.asmx/Payment',
                                    data: {
                                        PayData: JSON.stringify(PayData)
                                    },
                                    success: function (data) {
                                        data = JSON.parse(data)
                                        if (data.code === '1') {
                                            loadUUid = uuid
                                            TestUploadFile()
                                            document.getElementById('ksTime').innerHTML = openData.begindate
                                            document.getElementById('dqTime').innerHTML = openData.enddate
                                        }
                                    }
                                })
                            }

                        }
                    })
                }
            }
        })
    }
}

function getNowFormatDate(e) {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (e === '一年') {
        year = year + 1
    } else if (e === '二年') {
        year = year + 2
    } else if (e === '一个月') {
        month = month + 1
    }
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

function dateAdd(startDate, e) {
    var nextStartDate = ''
    startDate = new Date(startDate);
    let year = startDate.getFullYear()
    let month = startDate.getMonth()
    let date = startDate.getDate()
    if (e === '一个月') {
        if (month === 11) {
            year += 1
            month = 1
        } else {
            month += 2
        }
    } else if (e === '一年') {
        year += 1
    } else if (e === '两年') {
        year += 2
    }
    nextStartDate = year + "-" + month + "-" + date;
    return nextStartDate;
}

function handleAddMaps() {
    let mapName = document.getElementById('mapName').value
    let chang = document.getElementById('mapChang').value
    let kuan = document.getElementById('mapKuan').value
    let firstType = document.getElementById('firstType').value
    let secondType = document.getElementById('secondType').value
    let fzType = document.getElementById('fzType').value
    let xrType = document.getElementById('xrType').value
    let fzArr = ['通用', '地面', '墙面', '顶面']
    let xrArr = ['普通', '高光', '平光', '哑光']
    let gsID = companyId
    if (mapLoadType === 'mzy') {
        gsID = '9999'
    }
    for (let i = 0; i < 4; i++) {
        if (fzType === fzArr[i]) {
            fzType = "" + i + ""
        }
        if (xrType === xrArr[i]) {
            xrType = "" + i + ""
        }
    }
    let userName = ''
    if (useId !== undefined) {
        userName = useId
    } else {
        userName = name
    }
    if (mapFileData === {} || mapName === '' || chang === '' || kuan === '' || fzType === '' || xrType === '') {
        alert('请完整填写材质信息')
    } else {
        if (chang === '0') {
            alert('长不能为0！')
            return
        }
        if (kuan === '0') {
            alert('宽不能为0！')
            return
        }
        // $.ajax({
        //     type: 'POST',
        //     url: m_strWebService + 'Service1.asmx/GetUserBasicInfo',
        //     async: false,
        //     data: {
        //         strCompanyID: companyId,
        //         strUserAccount: userName
        //     },
        //     success: function (data) {
        //         let str = $(data).find("string").html()
        //
        //         let strObj = str.split('#')[1]
        //         let obj = strObj.split('~')
        //
        //     }
        // })
        userId = cookie.uid
        let openLoadData = {
            option: '0',
            description: mapName,
            class1: firstType,
            class2: secondType,
            name: mapFileData.name.split('.')[0],
            size: chang + '-' + kuan,
            type: xrType,
            filesize: "" + mapFileData.size + "",
            accounttype: ut,
            companyID: gsID,
            userid: userId,
            attribute: '搜索属性',
            puttype: fzType,
            image: mapFileData.url
        }
        $.ajax({
            type: 'POST',
            async: false,
            url: m_strWebService + 'Service1.asmx/UploadMaterial',
            data: {
                Data: JSON.stringify(openLoadData)
            },
            success: function (data) {
                let obj = document.getElementById('modelBtn')
                data = JSON.parse(data)
                if (data.code === '1') {
                    if (mapLoadType === 'mzy') {
                        $.ajax({
                            url: m_strWebService + "Service1.asmx/ExportPersonalMaterial",
                            type: "post",
                            dataType: "json",
                            async: false,
                            contentType: "application/x-www-form-urlencoded",
                            data: {
                                strUserAccount: name,
                                strUserID: a.uid,
                                strFolder: folder
                            },
                            success: function (data) {
                                alert('上传成功')
                                $('._active-table-item').click()
                            },
                            complete: function (xmlHttpRequest) {

                            },
                            error: function (err) {

                            }
                        })
                    } else if (mapLoadType === 'qiye') {
                        $.ajax({
                            url: m_strWebService + 'Service1.asmx/ExportMaterialByCompanyID',
                            type: "post",
                            dataType: "json",
                            async: false,
                            contentType: "application/x-www-form-urlencoded",
                            data: {
                                strCompanyID: companyId,
                                strFolder: folder
                            },
                            success: function (data) {
                                //alert(data.msg);
                                alert('上传成功')
                                $('.active-table-item').click()

                            },
                            complete: function (xmlHttpRequest) {

                            },
                            error: function (err) {

                            }
                        })
                    }
                    if ($('.active-class')[0].innerHTML === '墙板') {
                        $('.active-class').click()
                    }

                    closeAddBox()
                }
            }
        })
    }
}


var mapLoadType = '', modelLoadType = ''
var changeFile = ''
var oldClass1 = '', oldClass2 = ''

function changeMaps(obj) {
    let file = $(obj).attr('file')
    let item = strData.filter(function (ele) {
        return ele[1].includes(file)
    })
    changeFile = file

    item = item[0]
    console.log(item)
    app.typeArr = []
    app.typeArr2 = []
    if ($('.active-class')[0].innerHTML === '墙板') {
        let obj = $('#_firstType')[0]
        $(obj.parentNode.parentNode).hide()
        let item = {
            value: '墙板',
            label: '墙板'
        }
        app.typeArr.push(item)
        if (secondType.length !== 0) {
            let itemArr = secondType[33]
            for (let i = 0; i < itemArr.length; i++) {
                let item = {
                    value: itemArr[i],
                    label: itemArr[i]
                }
                app.typeArr2.push(item)
            }
        }
    } else {
        let obj = $('#_firstType')[0]
        $(obj.parentNode.parentNode).show()
        for (let i = 0; i < categoryType.length; i++) {
            let item = {
                value: categoryType[i],
                label: categoryType[i]
            }
            app.typeArr.push(item)
        }
        if (secondType.length !== 0) {
            let itemArr = secondType[0]
            for (let i = 0; i < itemArr.length; i++) {
                let item = {
                    value: itemArr[i],
                    label: itemArr[i]
                }
                app.typeArr2.push(item)
            }
        }
    }
    document.getElementById('_addMaps').style.display = 'block'
    let fzArr = ['通用', '地面', '墙面', '顶面']
    let xrArr = ['普通', '高光', '平光', '哑光']
    let fz = fzArr[item[8]]
    if (item[8] === '') {
        fz = '通用'
    }
    let xr = xrArr[item[5]]
    let size = item[2]

    size = size.split('A')
    oldClass1 = item[3]
    oldClass2 = item[4]
    let mapName = item[7]
    if (mapName === '') {
        mapName = item[0]
    }
    document.getElementById('_mapName').value = mapName
    document.getElementById('_mapChang').value = size[0]
    document.getElementById('_mapKuan').value = size[1]
    // document.getElementById('_firstType').value = item[3]
    // document.getElementById('_secondType').value = item[4]
    app.addType = categoryType[0]
    setTimeout(function () {
        app.addType = item[3]
    }, 1)
    setTimeout(function () {
        app.addType2 = item[4]
    }, 2)
    document.getElementById('_fzType').value = fz
    document.getElementById('_xrType').value = xr
    document.getElementById('_bigMaps').src = m_strWebService + 'ihouse/data/texture/' + file + '?a=' + guid()

}

function closeChange() {
    document.getElementById('_addMaps').style.display = 'none'
}

function changeMapsLoad() {
    let file = changeFile
    file = file.replace('/', '\\')
    file = file.replace('/', '\\')
    file = file.replace('/', '\\')
    let fzArr = ['通用', '地面', '墙面', '顶面']
    let xrArr = ['普通', '高光', '平光', '哑光']
    let chang = document.getElementById('_mapChang').value
    let kuan = document.getElementById('_mapKuan').value
    let fz = document.getElementById('_fzType').value
    let xr = document.getElementById('_xrType').value
    let mapsName = document.getElementById('_mapName').value
    let sx = ''
    let firstType = document.getElementById('_firstType').value
    let secondType = document.getElementById('_secondType').value
    if (chang === '0') {
        alert('长不能为0！')
        return
    }
    if (kuan === '0') {
        alert('宽不能为0！')
        return
    }
    for (let i = 0; i < 4; i++) {
        if (fz === fzArr[i]) {
            fz = "" + i + ""
        }
        if (xr === xrArr[i]) {
            xr = "" + i + ""
        }
    }
    $.ajax({
        type: 'POST',
        url: m_strWebService + 'Service1.asmx/GetUserBasicInfo',
        async: false,
        data: {
            strCompanyID: companyId,
            strUserAccount: name
        },
        success: function (data) {
            let str = $(data).find("string").html()

            let strObj = str.split('#')[1]
            let obj = strObj.split('~')
            userId = obj[4]
        }
    })
    let changeData = {
        option: '1',
        oldclass1: oldClass1,
        oldclass2: oldClass2,
        class1: firstType,
        class2: secondType,
        companyID: companyId,
        description: mapsName,
        file: file,
        type: xr,
        attribute: sx,
        puttype: fz,
        filesize: '110kb',
        userid: userId,
        image: '',
        size: chang + '-' + kuan
    }

    if (changeDis === '1') {
        changeData.image = changeMapFileData.url
    }
    $.ajax({
        type: 'POST',
        async: false,
        url: m_strWebService + 'Service1.asmx/UploadMaterial',
        data: {
            Data: JSON.stringify(changeData)
        },
        success: function (data) {
            data = JSON.parse(data)
            if (data.code === '1') {
                if ($('.active-class')[0].innerHTML === '企业共享库' || $('.active-class')[0].innerHTML === '平台共享库') {
                    $.ajax({
                        url: m_strWebService + "Service1.asmx/ExportMaterialByCompanyID",
                        type: "post",
                        dataType: "json",
                        contentType: "application/x-www-form-urlencoded",
                        data: {
                            strCompanyID: companyId,
                            strFolder: folder
                        },
                        success: function (data) {
                            alert('修改成功')
                            closeChange()
                            loadChangeMaps()
                        },
                        complete: function (xmlHttpRequest) {

                        },
                        error: function (err) {

                        }
                    })
                } else {
                    $.ajax({
                        url: m_strWebService + "Service1.asmx/ExportPersonalMaterial",
                        type: "post",
                        dataType: "json",
                        contentType: "application/x-www-form-urlencoded",
                        data: {
                            strUserAccount: name,
                            strUserID: cookie.uid,
                            strFolder: folder
                        },
                        success: function (data) {
                            alert('修改成功')
                            closeChange()
                            $('.active-class').click()
                        },
                        complete: function (xmlHttpRequest) {

                        },
                        error: function (err) {

                        }
                    })
                }
            }
        }
    })
}

function loadChangeMaps() {
    let page = $('#myPage1 .active')[0].innerHTML

    $('#item-box').html('')
    let csvUrl = ''
    if (companyId === '2') {
        csvUrl = m_strWebService + 'ihouse/data/texture/huawen.csv?a=' + guid()
    } else {
        csvUrl = m_strWebService + 'users/' + folder + '/huawen_upload.csv?a=' + guid()
    }
    $.ajax({
        type: 'GET',
        url: csvUrl,
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
            let itemArr = strData
            if ($('.active2')[0].innerHTML !== '全部') {
                let class1 = $('.active2')[0].innerHTML
                itemArr = strData.filter(function (ele) {
                    return ele[3] === class1
                })
            }
            if ($('.active1')[0].innerHTML !== '全部') {
                let class2 = $('.active1')[0].innerHTML
                itemArr = itemArr.filter(function (ele) {
                    return ele[4] === class2
                })
            }
            let num = (page - 1) * 10
            for (let i = num; i < num + 10; i++) {
                let txt = guid()
                let size = itemArr[i][2].replace(/A/g, "X")
                let itemName = ''
                if (itemArr[i][7] === '') {
                    itemName = itemArr[i][0]
                } else {
                    itemName = itemArr[i][7]
                }
                let item = itemArr[i]
                let _num = ''
                for (let a = 0; a < strData.length; a++) {
                    if (item === strData[a]) {
                        _num = a
                    }
                }
                mapArr[_num] = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}ihouse/data/texture/${itemArr[i][1]}?a=${txt}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a  class="resClickAdd"> ${itemName}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a  class="resClickAdd"> ${size} </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    <p class="model_mats" file='${itemArr[i][1]}'>
                        <a class="j_3d">3D</a>
                    </p>
                    <p class=" model-goods-download">
                        <a onclick="" href='${m_strWebService}ihouse/data/texture/${itemArr[i][1]}' target="_blank" class="j_download" download="">下载</a>
                    </p>
                    <p class=" model-goods-collect" file='${itemArr[i][1]}' onclick="changeMaps(this)">
                        <a class="j_collect"  >修改</a>
                    </p>
                    <p class=" model-goods-delete" file='${itemArr[i][1]},${itemArr[i][3]},${itemArr[i][4]},${itemArr[i][0]}' onclick="deleteMap('0',this)">
                        <a class="j_delete" onclick="">删除</a>
                    </p>
                </div>
            </div>
        </div>`
                $('#item-box').append(mapArr[_num])
            }
        }
    })
}

function changeOver(obj) {
    let father = obj
    let changeImg = $(father).children()[1]
    let changeFile = $(father).children()[2]
    changeImg.style.display = 'block'
    changeFile.style.display = 'block'
}

function changeOut(obj) {
    let father = obj
    let changeImg = $(father).children()[1]
    let changeFile = $(father).children()[2]
    changeImg.style.display = 'none'
    changeFile.style.display = 'none'
}

function _changeOver(obj) {
    let dom = $('#bigMaps')[0]
    if (dom.style.display === 'block') {
        let father = obj
        let changeImg = $(father).children('.changePic')[0]
        let changeFile = $(father).children('#_changeMaps')[0]
        changeImg.style.display = 'block'
        changeFile.style.display = 'block'
    }

}

function _changeOut(obj) {
    let dom = $('#bigMaps')[0]
    if (dom.style.display === 'block') {
        let father = obj
        let changeImg = $(father).children('.changePic')[0]
        let changeFile = $(father).children('#_changeMaps')[0]
        changeImg.style.display = 'none'
        changeFile.style.display = 'none'
    }
}

var levelThreeType = []
var searchType = ''

function changeInfoPage(e, obj) {
    $('#zyClass').show()
    $('#firstMenu').show()
    $('.active-table-item').removeClass('active-table-item')
    $(obj).addClass('active-table-item')
    categoryType.length = 0
    secondType.length = 0
    levelThreeType.length = 0
    if (e === 'model') {
        searchType = 'model'
        document.getElementById('mapBtn').style.display = 'none'
        document.getElementById('qiyejc2').style.display = 'block'
        document.getElementById('qiyelz2').style.display = 'block'
        document.getElementById('qiyejc1').style.display = 'none'
        document.getElementById('qiyelz1').style.display = 'none'
        document.getElementById('_modelBtn').style.display = 'block'
        document.getElementById('buyMapBtn').style.display = 'none'
        document.getElementById('buyModelBtn').style.display = 'none'
        $.ajax({
            url: m_strWebService + 'service2.asmx/GetInfoFromModel',
            type: "Post",
            async: false,
            dataType: "xml",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            data: {
                strCompanyID: companyId,
                iAccountType: 11
            },
            success: function (data) {
                var strData = data.firstElementChild.innerHTML;
                strData = strData.split("#");


                for (var i = 1; i < strData.length; i++) {// 一重

                    categoryType[i - 1] = strData[i].split("~")[0];//设置类型‘一级’
                }
                categoryType = distinct(categoryType)//"一级"数组去重
                if (edition === 'kz') {
                    categoryType = ['墙面', '吊顶', '地面', '厨卫', '照明', '家具', '家电', '家饰', '工装']
                }
                for (var i = 0; i < categoryType.length; i++) {//设置类型‘二级’ 一重

                    secondType[i] = new Array(); //创建二维数组

                    for (var j = 1; j < strData.length; j++) { //二重

                        if (categoryType[i] == strData[j].split("~")[0]) {

                            secondType[i].push(strData[j].split("~")[1]);//把各自符合类型的数值添加到相应的位置
                        }
                    }
                }

                for (var i = 0; i < secondType.length; i++) {//"二级"数组去重

                    secondType[i] = distinct(secondType[i]);//数组去重后重新赋值
                }

                for (var i = 0; i < secondType.length; i++) {//设置类型"三级" 一重

                    levelThreeType[i] = new Array();//创建二维数组

                    for (var j = 0; j < secondType[i].length; j++) { //二重

                        levelThreeType[i][j] = new Array();//创建三维数组

                        for (var z = 1; z < strData.length; z++) { //三重

                            if (categoryType[i] == strData[z].split("~")[0]) {

                                if (secondType[i][j] == strData[z].split("~")[1]) {

                                    levelThreeType[i][j].push(strData[z].split("~")[2]);//把各自符合类型的数值添加到相应的位置
                                }
                            }
                        }
                    }
                }

                for (var i = 0; i < levelThreeType.length; i++) {//"三级"数组去重
                    for (var j = 0; j < levelThreeType[i].length; j++) {

                        levelThreeType[i][j] = distinct(levelThreeType[i][j]);//数组去重后重新赋值
                    }
                }
                console.log(secondType)
                document.getElementById('threeMenu').style.display = 'block'
                $('#firstMenu').html(`<li>一级:</li>
                        <li><span class="active2" onclick="modelFirstClass(this)">不限</span></li>`)
                $('#item-box').html('')
                $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="modelSecondClass(this)">不限</span></li>`)
                $('#threeMenu').html(`<li>三级:</li>
                <li><span class="active1" onclick="handleWholeBtn(this)">不限</span></li>`)
                for (let i = 0; i < categoryType.length; i++) {
                    $('#firstMenu').append(`<li><span  onclick="modelFirstClass(this)" class="modelClass1">${categoryType[i]}</span></li>`)
                }
                app.loadModelClass()
                rightClick('modelClass1')
            }
        });
        if (kuType === 'gg') {
            $.ajax({
                url: m_strWebService + 'service1.asmx/GetModelData',
                type: "Post",
                dataType: "json",
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                data: {
                    strClass1: '不限',
                    strClass2: '不限',
                    strClass3: '不限',
                    strUserAccount: name
                },
                success: function (data) {
                    data = data.model
                    data = JSON.parse(data)

                    strData = data
                    pushModel(data)
                }
            })
        } else if (kuType === 'pp') {
            $.ajax({
                url: m_strWebService + 'service1.asmx/GetModelDataByCompanyID',
                type: "Post",
                dataType: "json",
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                data: {
                    strClass1: '不限',
                    strClass2: '不限',
                    strClass3: '不限',
                    strUserAccount: name,
                    strCompanyID: companyId
                },
                success: function (data) {
                    data = data.model
                    data = JSON.parse(data)

                    strData = data
                    pushModel(data)
                }
            })
        }
    } else if (e === 'map') {
        searchType = 'map'
        document.getElementById('qiyejc1').style.display = 'block'
        document.getElementById('qiyelz1').style.display = 'block'
        document.getElementById('qiyejc2').style.display = 'none'
        document.getElementById('qiyelz2').style.display = 'none'
        document.getElementById('threeMenu').style.display = 'none'
        document.getElementById('mapBtn').style.display = 'block'
        document.getElementById('_modelBtn').style.display = 'none'
        document.getElementById('buyMapBtn').style.display = 'none'
        document.getElementById('buyModelBtn').style.display = 'none'
        let obj = document.getElementById('modelBtn')
        let _obj = document.getElementById('pinpai')
        if (kuType === 'gg') {
            $('#firstMenu').show()
            $('#firstMenu').html(`<li>一级:</li>
                        <li><span class="active2" onclick="handleAllBtn(this)">全部</span></li>`)
            $('#item-box').html('')
            $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="handleWholeBtn(this)">全部</span></li>`)
            let csvUrl = ''
            if (companyId === '2') {
                csvUrl = m_strWebService + 'ihouse/data/texture/huawen.csv?a=' + guid()
            } else {
                csvUrl = m_strWebService + 'users/' + folder + '/huawen_upload.csv?a=' + guid()
            }
            $.ajax({
                type: 'GET',
                url: csvUrl,
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
                    app.loadMapClass()
                    for (let i = 0; i < categoryType.length; i++) {
                        let item = `<li><span onclick="handleScreenClick(this)">${categoryType[i]}</span></li>`
                        $('#firstMenu').append(item)
                    }
                    pushItem(strData)
                }
            })
        } else if (kuType === 'pp') {
            changePage('pinpai', _obj)
        }
    } else if (e === 'buyMap') {
        $('#item-box').html('')
        $('#zyClass').hide()
        searchType = 'buyMap'
        document.getElementById('qiyejc1').style.display = 'none'
        document.getElementById('qiyelz1').style.display = 'none'
        document.getElementById('qiyejc2').style.display = 'none'
        document.getElementById('qiyelz2').style.display = 'none'
        document.getElementById('mapBtn').style.display = 'none'
        document.getElementById('_modelBtn').style.display = 'none'
        document.getElementById('buyMapBtn').style.display = 'block'
        document.getElementById('buyModelBtn').style.display = 'none'
        let httpUrl = m_strWebService + 'users/' + folder + '/huawen_buy.csv?time=' + guid()
        $.ajax({
            type: 'GET',
            url: httpUrl,
            success: function (data) {
                data = data.split('\r\n')

                let itemArr = []
                data = data.filter(function (ele) {
                    return ele !== ''
                })
                for (let i = 0; i < data.length; i++) {
                    let item = data[i]
                    item = item.split(',')
                    console.log(item)
                    let _item = {
                        name: item[0],
                        url: item[1],
                        size: item[2],
                        class1: item[3],
                        class2: item[4],
                        type: '0'
                    }
                    itemArr.push(_item)
                }
                itemArr.reverse()
                console.log(itemArr)
                $.ajax({
                    type: 'GET',
                    url: m_strWebService + 'users/' + folder + '/huawen_template.csv?time=' + guid(),
                    async: false,
                    success: function (data) {
                        data = data.split('\r\n')

                        data = data.filter(function (ele) {
                            return ele !== ''
                        })
                        for (let i = 0; i < data.length; i++) {
                            let item = data[i]
                            item = item.split(',')
                            let _item = {
                                name: item[0],
                                url: item[1],
                                size: item[2],
                                class1: item[3],
                                class2: item[4],
                                type: '1'
                            }
                            itemArr.push(_item)
                        }
                        console.log(itemArr)
                        strData = itemArr
                        pushBuy(itemArr)
                    }
                })
            }
        })
    } else if (e === 'buyModel') {
        $('#item-box').html('')
        $('#zyClass').hide()
        searchType = 'buyModel'
        document.getElementById('mapBtn').style.display = 'none'
        document.getElementById('_modelBtn').style.display = 'none'
        document.getElementById('buyMapBtn').style.display = 'none'
        document.getElementById('qiyejc1').style.display = 'none'
        document.getElementById('qiyelz1').style.display = 'none'
        document.getElementById('qiyejc2').style.display = 'none'
        document.getElementById('qiyelz2').style.display = 'none'
        document.getElementById('buyModelBtn').style.display = 'block'
        let httpUrl = m_strWebService + 'users/' + folder + '/jiaju_buy.csv?time=' + guid()
        $.ajax({
            type: 'GET',
            url: httpUrl,
            success: function (data) {
                data = data.split('\r\n')
                data = data.filter(function (ele) {
                    return ele !== ''
                })
                let itemArr = []
                for (let i = 0; i < data.length; i++) {
                    let item = data[i]
                    item = item.split(',')

                    let _item = {
                        name: item[0],
                        url: item[1],
                        size: '',
                        class1: item[6],
                        class2: item[7],
                        class3: item[8],
                        dom: item[item.length - 1],
                        type: '0'
                    }
                    itemArr.push(_item)
                }
                itemArr.reverse()
                $.ajax({
                    type: 'GET',
                    url: m_strWebService + 'users/' + folder + '/jiaju_template.csv?time=' + guid(),
                    success: function (data) {
                        data = data.split('\r\n')
                        console.log(data)
                        data = data.filter(function (ele) {
                            return ele !== ''
                        })
                        for (let i = 0; i < data.length; i++) {
                            let item = data[i]
                            item = item.split(',')

                            let _item = {
                                name: item[0],
                                url: item[1],
                                size: '',
                                class1: item[6],
                                class2: item[7],
                                class3: item[8],
                                dom: item[item.length - 1],
                                type: '1'
                            }
                            itemArr.push(_item)
                        }
                        strData = itemArr
                        pushBuyModel(itemArr)
                    }
                })
            }
        })
    }
}

function pushBuy(arr) {

    $('#zyClass').hide()
    let txt = guid()
    let itemArr = []
    for (let i = 0; i < arr.length; i++) {

        let size = arr[i].size.replace('A', 'X')
        let itemName = arr[i].name
        if (arr[i].type === '0') {
            itemArr[i] = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}ihouse/data/texture/${arr[i].url}?a=${txt}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a  class="resClickAdd"> ${itemName}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a  class="resClickAdd"> ${size} </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    <p class="model_mats" file='${arr[i].url}'>
                        <a class="j_3d">3D</a>
                    </p>
                    <p class=" model-goods-download">
                        <a onclick="" href='${m_strWebService}ihouse/data/texture/${arr[i].url}' target="_blank" class="j_download" download="">下载</a>
                    </p>
                   
                    <p class=" model-goods-delete" file='${arr[i].url},${arr[i].class1},${arr[i].class2},${arr[i].name}' onclick="deleteMap('1',this)">
                        <a class="j_delete" onclick="">删除</a>
                    </p>
                </div>
            </div>
        </div>`
        } else {
            itemArr[i] = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}ihouse/data/texture/${arr[i].url}?a=${txt}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a  class="resClickAdd"> ${itemName}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a  class="resClickAdd"> ${size} </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    <p class="model_mats" file='${arr[i].url}'>
                        <a class="j_3d">3D</a>
                    </p>
                    <p class=" model-goods-download">
                        <a onclick="" href='${m_strWebService}ihouse/data/texture/${arr[i].url}' target="_blank" class="j_download" download="">下载</a>
                    </p>
                   
                    <p class=" model-goods-delete" file='${arr[i].url},${arr[i].class1},${arr[i].class2},${arr[i].name}' onclick="deleteGMap(this)">
                        <a class="j_delete" onclick="">删除</a>
                    </p>
                </div>
            </div>
        </div>`
        }

    }
    for (let i = 0; i < 10; i++) {
        $('#item-box').append(itemArr[i])
    }
    $("#myPage1").sPage({
        page: 1,//当前页码，必填
        total: itemArr.length,//数据总条数，必填
        pageSize: 10,//每页显示多少条数据，默认10条
        totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
        showTotal: true,//是否显示总条数，默认关闭：false
        showSkip: true,//是否显示跳页，默认关闭：false
        showPN: true,//是否显示上下翻页，默认开启：true
        prevPage: "上一页",//上翻页文字描述，默认“上一页”
        nextPage: "下一页",//下翻页文字描述，默认“下一页”
        backFun: function (page) {
            $('#item-box').html('')
            let firstNum = page * 10 - 10
            let lastNum = firstNum + 10
            if (lastNum > itemArr.length) {
                for (let i = firstNum; i < itemArr.length; i++) {
                    $('#item-box').append(itemArr[i])
                }
            } else {
                for (let i = firstNum; i < lastNum; i++) {
                    $('#item-box').append(itemArr[i])
                }
            }
        }
    })
}

function _pushBuy(arr) {
    $('#myModel').html('')
    let txt = guid()
    let itemArr = []
    for (let i = 0; i < arr.length; i++) {
        let size = arr[i].size.replace('A', 'X')
        let itemName = arr[i].name
        itemArr[i] = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}ihouse/data/texture/${arr[i].url}?a=${txt}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a  class="resClickAdd"> ${itemName}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a  class="resClickAdd"> ${size} </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    <p class="model_mats" file='${arr[i].url}'>
                        <a class="j_3d">3D</a>
                    </p>
                    <p class=" model-goods-download">
                        <a onclick="" href='${m_strWebService}ihouse/data/texture/${arr[i].url}' target="_blank" class="j_download" download="">下载</a>
                    </p>
                   
                    <p class=" model-goods-delete" file='${arr[i].url},${arr[i].class1},${arr[i].class2},${arr[i].name}' onclick="deleteMap('3',this)">
                        <a class="j_delete" onclick="">删除</a>
                    </p>
                </div>
            </div>
        </div>`

    }
    for (let i = 0; i < 10; i++) {
        $('#myModel').append(itemArr[i])
    }
    $("#mzyPage").sPage({
        page: 1,//当前页码，必填
        total: arr.length,//数据总条数，必填
        pageSize: 8,//每页显示多少条数据，默认10条
        totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
        showTotal: true,//是否显示总条数，默认关闭：false
        showSkip: true,//是否显示跳页，默认关闭：false
        showPN: true,//是否显示上下翻页，默认开启：true
        prevPage: "上一页",//上翻页文字描述，默认“上一页”
        nextPage: "下一页",//下翻页文字描述，默认“下一页”
        backFun: function (page) {
            $('#myModel').html('')
            let firstNum = page * 8 - 8
            let lastNum = firstNum + 8
            if (lastNum > itemArr.length) {
                for (let i = firstNum; i < itemArr.length; i++) {
                    $('#myModel').append(itemArr[i])
                }
            } else {
                for (let i = firstNum; i < lastNum; i++) {
                    $('#myModel').append(itemArr[i])
                }
            }
        }
    })
}

function pushBuyModel(arr) {
    console.log(arr)
    $('#zyClass').hide()
    let txt = guid()
    let itemArr = []
    for (let i = 0; i < arr.length; i++) {
        let dom = arr[i].url.replace('jpg', arr[i].dom)
        let size = arr[i].size
        let itemName = arr[i].name
        if (arr[i].type === '0') {
            itemArr[i] = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                
                        <img src='${m_strWebService}ihouse/data/jiaju/${arr[i].url}?a=${txt}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a  class="resClickAdd"> ${itemName}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a  class="resClickAdd"> ${size} </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    <p class="_model_mats" file='${arr[i].url}'>
                        <a class="j_3d">3D</a>
                    </p>
                    <p class=" model-goods-download">
                        <a onclick="" href='${m_strWebService}ihouse/data/jiaju/${dom}' class="j_download" download="">下载</a>
                    </p>
                   
                    <p class=" model-goods-delete" file='${arr[i].url},${arr[i].class1},${arr[i].class2},${arr[i].class3},${arr[i].name}' onclick="deleteModel('1',this)">
                        <a class="j_delete" onclick="">删除</a>
                    </p>
                </div>
            </div>
        </div>`
        } else {
            itemArr[i] = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}ihouse/data/jiaju/${arr[i].url}?a=${txt}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a  class="resClickAdd"> ${itemName}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a  class="resClickAdd"> ${size} </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    <p class="_model_mats" file='${arr[i].url}'>
                        <a class="j_3d">3D</a>
                    </p>
                    <p class=" model-goods-download">
                        <a onclick="" href='${m_strWebService}ihouse/data/jiaju/${dom}' target="_blank" class="j_download" download="">下载</a>
                    </p>
                   
                    <p class=" model-goods-delete" file='${arr[i].url},${arr[i].class1},${arr[i].class2},${arr[i].class3},${arr[i].name}' onclick="deleteGModel(this)">
                        <a class="j_delete" onclick="">删除</a>
                    </p>
                </div>
            </div>
        </div>`
        }

    }
    for (let i = 0; i < 10; i++) {
        $('#item-box').append(itemArr[i])
    }
    $("#myPage1").sPage({
        page: 1,//当前页码，必填
        total: itemArr.length,//数据总条数，必填
        pageSize: 10,//每页显示多少条数据，默认10条
        totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
        showTotal: true,//是否显示总条数，默认关闭：false
        showSkip: true,//是否显示跳页，默认关闭：false
        showPN: true,//是否显示上下翻页，默认开启：true
        prevPage: "上一页",//上翻页文字描述，默认“上一页”
        nextPage: "下一页",//下翻页文字描述，默认“下一页”
        backFun: function (page) {
            $('#item-box').html('')
            let firstNum = page * 10 - 10
            let lastNum = firstNum + 10
            if (lastNum > itemArr.length) {
                for (let i = firstNum; i < itemArr.length; i++) {
                    $('#item-box').append(itemArr[i])
                }
            } else {
                for (let i = firstNum; i < lastNum; i++) {
                    $('#item-box').append(itemArr[i])
                }
            }
        }
    })
}

function _pushBuyModel(arr) {
    $('#myModel').html('')
    let txt = guid()
    let itemArr = []
    for (let i = 0; i < arr.length; i++) {
        let dom = arr[i].url.replace('jpg', arr[i].dom)
        let size = arr[i].size
        let itemName = arr[i].name
        itemArr[i] = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}ihouse/data/jiaju/${arr[i].url}?a=${txt}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a  class="resClickAdd"> ${itemName}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a  class="resClickAdd"> ${size} </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    <p class="_model_mats" file='${arr[i].url}'>
                        <a class="j_3d">3D</a>
                    </p>
                    <p class=" model-goods-download">
                        <a onclick="" href='${m_strWebService}ihouse/data/jiaju/${dom}' target="_blank" class="j_download" download="">下载</a>
                    </p>
                   
                    <p class=" model-goods-delete" file='${arr[i].url},${arr[i].class1},${arr[i].class2},${arr[i].class3},${arr[i].name}' onclick="deleteModel('3',this)">
                        <a class="j_delete" onclick="">删除</a>
                    </p>
                </div>
            </div>
        </div>`

    }
    for (let i = 0; i < 10; i++) {
        $('#myModel').append(itemArr[i])
    }
    $("#mzyPage").sPage({
        page: 1,//当前页码，必填
        total: arr.length,//数据总条数，必填
        pageSize: 8,//每页显示多少条数据，默认10条
        totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
        showTotal: true,//是否显示总条数，默认关闭：false
        showSkip: true,//是否显示跳页，默认关闭：false
        showPN: true,//是否显示上下翻页，默认开启：true
        prevPage: "上一页",//上翻页文字描述，默认“上一页”
        nextPage: "下一页",//下翻页文字描述，默认“下一页”
        backFun: function (page) {
            $('#myModel').html('')
            let firstNum = page * 8 - 8
            let lastNum = firstNum + 8
            if (lastNum > itemArr.length) {
                for (let i = firstNum; i < itemArr.length; i++) {
                    $('#myModel').append(itemArr[i])
                }
            } else {
                for (let i = firstNum; i < lastNum; i++) {
                    $('#myModel').append(itemArr[i])
                }
            }
        }
    })
}

function deleteGMap(obj) {
    let file = $(obj).attr('file')
    file = file.split(',')
    file = file[0]
    console.log(file)
    $.ajax({
        type: 'GET',
        url: m_strWebService + 'users/' + folder + '/huawen_template.csv?time=' + guid(),
        success: function (data) {
            data = data.split('\r\n')
            let item = data.filter(function (ele) {
                return ele.includes(file)
            })
            data = data.filter(function (ele) {
                return ele !== item[0]
            })
            let txt = ''
            for (let i = 0; i < data.length; i++) {
                txt += data[i] + '\r\n'
            }
            let fold = cookie.fold
            let path = 'C:/inetpub/wwwroot/users/' + fold + '/huawen_template.csv'
            let _data = '{"type":"string","pathfilename":"' + path + '","filedata":"' + encode(txt) + '"}'
            console.log(data)
            $.ajax({
                url: load_WebService + '5001/api/uploadfile',
                type: 'POST',
                dataType: "json",
                contentType: "application/json",
                data: _data,
                success: function (data) {
                    if (data.code === '1') {
                        alert('删除成功！')
                        $('.active-table-item').click()
                    }
                }
            })
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

function deleteGModel(obj) {
    let file = $(obj).attr('file')
    file = file.split(',')
    file = file[0]
    console.log(file)
    $.ajax({
        type: 'GET',
        url: m_strWebService + 'users/' + folder + '/jiaju_template.csv?time=' + guid(),
        success: function (data) {
            data = data.split('\r\n')
            let item = data.filter(function (ele) {
                return ele.includes(file)
            })
            data = data.filter(function (ele) {
                return ele !== item[0]
            })
            let txt = ''
            for (let i = 0; i < data.length; i++) {
                txt += data[i] + '\r\n'
            }
            console.log(txt)
            let fold = cookie.fold
            let path = 'C:/inetpub/wwwroot/users/' + fold + '/jiaju_template.csv'
            let _data = '{"type":"string","pathfilename":"' + path + '","filedata":"' + encode(txt) + '"}'
            console.log(data)
            $.ajax({
                url: load_WebService + '5001/api/uploadfile',
                type: 'POST',
                dataType: "json",
                contentType: "application/json",
                data: _data,
                success: function (data) {
                    if (data.code === '1') {
                        alert('删除成功！')
                        $('.active-table-item').click()
                    }
                }
            })
        }
    })
}

var changeClassType = '', changeClassName = ''

function rightClick(className) {
    changeClassType = className.replace('modelClass', '')
    className = '.' + className
    for (let i = 0; i < $(className).length; i++) {
        let dom = $(className)[i]
        dom.oncontextmenu = function (env) {
            let e = env || window.event;
            userName = userArr[i].name
            userNameId = id
            // 获取菜单，让菜单显示出来
            let context = document.getElementById("changeClass");
            context.style.display = "none";
            context.style.display = "block";
            changeClassName = dom.innerHTML
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

function openChangeClass() {
    document.getElementById('changeClassBox').style.display = 'block'
    document.getElementById('ocn').value = changeClassName
}

function closeChangeClass() {
    document.getElementById('changeClassBox').style.display = 'none'
}

function changeClassLoad() {
    let newClassName = document.getElementById('ncn').value
    let className1 = ''
    let className2 = ''
    let className3 = ''
    if (changeClassType === '1') {
        className1 = changeClassName
    } else if (changeClassType === '2') {
        className2 = changeClassName
    } else if (changeClassType === '3') {
        className3 = changeClassName
    }
    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open('POST', m_strWebService + 'service2.asmx', true)
    let xmlHttpData =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
        '  <soap12:Body>' +
        '    <ModifyModelClass xmlns="http://tempuri.org/">' +
        '           <strClass1>' + encodeURIComponent(className1) + '</strClass1>' +
        '           <strClass2>' + encodeURIComponent(className2) + '</strClass2>' +
        '           <strClass3>' + encodeURIComponent(className3) + '</strClass3>' +
        '           <strNewName>' + encodeURIComponent(newClassName) + '</strNewName>' +
        '    </ModifyModelClass>' +
        '  </soap12:Body>' +
        '</soap12:Envelope>'
    xmlHttp.setRequestHeader('Content-Type', 'text/xml');
    xmlHttp.send(xmlHttpData)
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                alert('修改成功！')
                let obj = document.getElementById('model')
                closeChangeClass()
                changeInfoPage('model', obj)
            }
        }
    }
}

function pushModel(arr) {
    let itemInfo = []
    arr = arr.reverse()

    for (let i = 0; i < arr.length; i++) {
        let size = arr[i].size.replace(/-/g, "X")
        let dom = ''
        let dis = ''
        if (arr[i].format === '') {
            dom = ''
            dis = 'none'
        } else {
            dom = arr[i].file.replace(/jpg/g, arr[i].format)
            dis = 'block'
            dom = dom.replace('_thumbnail', '')
        }
        let time = guid()
        let file = arr[i].file.replace('_thumbnail', '')
        if (edition === 'kz') {
            itemInfo[i] = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}ihouse/data/jiaju/${arr[i].file}?time=${time}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a class="resClickAdd"> ${arr[i].name}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a class="resClickAdd"> ${size} </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    
                    <p class=" model-goods-download" >
                        <a onclick="openNewBox(this,'0')"  class="j_download" target="_blank" >编辑</a>
                    </p>
                    <p class=" model-goods-collect" file='${arr[i].file}' onclick="changeModel(this)">
                        <a class="j_collect"  >修改</a>
                    </p>
                    <p class=" _model-goods-delete" file='${arr[i].file}' onclick="deleteGXModel(this)">
                        <a class="j_delete" onclick="">删除</a>
                    </p>
                </div>
            </div>
        </div>`
        } else {
            itemInfo[i] = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}ihouse/data/jiaju/${arr[i].file}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a class="resClickAdd"> ${arr[i].name}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a class="resClickAdd"> ${size} </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    <p class="_model_mats" file='${file}'>
                        <a class="_j_3d">3D</a>
                    </p>
                    <p class=" model-goods-download" style="display: ${dis}">
                        <a onclick="" href='${m_strWebService}ihouse/data/jiaju/${dom}'  class="j_download" target="_blank"  download="">下载</a>
                    </p>
                    <p class=" model-goods-collect" file='${arr[i].file}' onclick="changeModel(this)">
                        <a class="j_collect"  >修改</a>
                    </p>
                    <p class=" _model-goods-delete" file='${arr[i].file}' onclick="deleteGXModel(this)">
                        <a class="j_delete" onclick="">删除</a>
                    </p>
                </div>
            </div>
        </div>`
        }

    }
    $('#item-box').html('')
    for (let i = 0; i < 10; i++) {
        $('#item-box').append(itemInfo[i])
    }
    $("#myPage1").sPage({
        page: 1,//当前页码，必填
        total: arr.length,//数据总条数，必填
        pageSize: 10,//每页显示多少条数据，默认10条
        totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
        showTotal: true,//是否显示总条数，默认关闭：false
        showSkip: true,//是否显示跳页，默认关闭：false
        showPN: true,//是否显示上下翻页，默认开启：true
        prevPage: "上一页",//上翻页文字描述，默认“上一页”
        nextPage: "下一页",//下翻页文字描述，默认“下一页”
        backFun: function (page) {
            $('#item-box').html('');
            let firstNum = page * 10 - 10
            let lastNum = firstNum + 10
            if (lastNum > itemInfo.length) {
                for (let i = firstNum; i < itemInfo.length; i++) {
                    $('#item-box').append(itemInfo[i])
                }
            } else {
                for (let i = firstNum; i < lastNum; i++) {
                    $('#item-box').append(itemInfo[i])
                }
            }
        }
    });
}

function deleteGXModel(obj) {
    let file = $(obj).attr('file');
    let item = []
    item = strData.filter(function (ele) {
        return ele.file.includes(file)
    })
    item = item[0]

    if (confirm('确定删除吗？') === true) {
        $.ajax({
            type: 'POST',
            async: false,
            url: m_strWebService + 'service2.asmx/DeleteModel',
            data: {
                strClass1: item.class1,
                strClass2: item.class2,
                strClass3: item.class3,
                strName: item.name,
                strThumbnail: file
            },
            success: function (data) {
                alert('删除成功！')
                let obj = document.getElementById('model')
                changeInfoPage('model', obj)
                if ($('.active-class')[0].innerHTML === '个人库') {
                    $.ajax({
                        url: m_strWebService + 'Service1.asmx/ExportPersonalModel',
                        type: "post",
                        dataType: "json",
                        async: false,
                        contentType: "application/x-www-form-urlencoded",
                        data: {
                            strUserAccount: name,
                            strUserID: cookie.uid,
                            strFolder: folder
                        },
                        success: function (data) {
                            document.getElementById('newModel').style.display = 'none'
                            modelLoadType = ''
                            $('._active-table-item').click()
                        },
                        complete: function (xmlHttpRequest) {

                        },
                        error: function (err) {

                        }
                    })
                } else if ($('.active-class')[0].innerHTML === '企业共享库') {
                    $.ajax({
                        url: m_strWebService + "Service1.asmx/ExportModelByCompanyID",
                        type: "post",
                        dataType: "json",
                        async: false,
                        contentType: "application/x-www-form-urlencoded",
                        data: {
                            strCompanyID: companyId,
                            strFolder: folder
                        },
                        success: function (data) {
                            document.getElementById('newModel').style.display = 'none'
                            modelLoadType = ''
                            $('.active-table-item').click()
                        },
                        complete: function (xmlHttpRequest) {

                        },
                        error: function (err) {

                        }
                    })
                }
            }
        })
    }
}

function deleteModel(type, obj) {
    let txt = $(obj).attr('file')
    txt = txt.split(',')
    let modelClass1 = txt[1]
    let modelClass2 = txt[2]
    let modelClass3 = txt[3]
    let modelName = txt[4]
    let deleteData = {
        type: type,
        companyid: companyId,
        useraccount: name,
        userid: a.uid,
        folder: folder,
        class1: modelClass1,
        class2: modelClass2,
        class3: modelClass3,
        name: modelName
    }
    if (confirm('确定要删除吗') === true) {
        $.ajax({
            url: m_strWebService + "Service1.asmx/DeletePrivateMode",
            type: "post",
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            data: {
                JsonBaseData: JSON.stringify(deleteData)
            },
            success: function (data) {
                alert(data.msg);
                if (type === '0') {
                    $('#qyload').click()
                } else if (type === '1') {
                    $('#qybuy').click()
                } else if (type === '2') {
                    $('#mzyModel').click()
                } else if (type === '3') {
                    $('#mzyBuyModel').click()
                }
            },
            complete: function (xmlHttpRequest) {

            },
            error: function (err) {

            }
        })
    }
}

function deleteMap(type, obj) {
    let txt = $(obj).attr('file')
    txt = txt.split(',')
    let modelClass1 = txt[1]
    let modelClass2 = txt[2]
    let modelName = txt[3]
    let deleteData = {
        type: type,
        companyid: companyId,
        useraccount: name,
        userid: a.uid,
        folder: folder,
        class1: modelClass1,
        class2: modelClass2,
        name: modelName
    }
    if (confirm('确定要删除吗') === true) {
        let htmlObj = $('.active-class')[0]
        if (htmlObj.innerHTML === '平台共享库' || htmlObj.innerHTML === '墙板') {
            deleteData = {
                companyid: companyId,
                file: txt[0]
            }
            $.ajax({
                url: m_strWebService + "Service1.asmx/DeleteMaterial",
                type: "post",
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                data: {
                    Data: JSON.stringify(deleteData)
                },
                success: function (data) {
                    alert(data.msg);
                    $.ajax({
                        url: m_strWebService + "Service1.asmx/ExportMaterialByCompanyID",
                        type: "post",
                        dataType: "json",
                        contentType: "application/x-www-form-urlencoded",
                        data: {
                            strCompanyID: companyId,
                            strFolder: folder
                        },
                        success: function (data) {
                            //alert(data.msg);
                            if (edition === 'kz') {
                                let e = txt[0].split('/')
                                let link = e[1]
                                let modelName = e[e.length - 1].split('.')[0].replace('_thumbnail', '')
                                $.ajax({
                                    url: m_strWebService + `platform/custom/api/delboards_info.html?id=${link}&name=${modelName}`,
                                    type: "post",
                                    dataType: "json",
                                    contentType: "application/x-www-form-urlencoded",
                                    data: {},
                                    success: function (data) {
                                        if ("0" == data.code) {
                                            $('.active-table-item').click()
                                        } else {
                                            $('.active-table-item').click()
                                        }
                                    },
                                    complete: function (xmlHttpRequest) {
                                    },
                                    error: function (err) {
                                        console.log(err);
                                    }
                                });
                            } else {
                                $(htmlObj).click()
                            }
                        },
                        complete: function (xmlHttpRequest) {

                        },
                        error: function (err) {

                        }
                    })

                },
                complete: function (xmlHttpRequest) {

                },
                error: function (err) {

                }
            })
        } else {
            $.ajax({
                url: m_strWebService + "Service1.asmx/DeletePrivateMaterial",
                type: "post",
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                data: {
                    JsonBaseData: JSON.stringify(deleteData)
                },
                success: function (data) {
                    alert(data.msg);
                    if (type === '0') {
                        $('#_map').click()
                    } else if (type === '1') {
                        $('#buyMap').click()
                    } else if (type === '2') {
                        $('#mzyMap').click()
                    } else if (type === '3') {
                        $('#mzyBuyMap').click()
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

var class1 = '不限', class2 = '不限', class3 = '不限', secNum = '', threeNum = ''

function modelFirstClass(obj) {
    leveItemHtml.length = 0
    let father = obj.parentNode
    secNum = $(father).index() - 2
    $('.active2').removeClass('active2')
    $(obj).addClass('active2')
    class1 = obj.innerHTML
    class2 = '不限'
    class3 = '不限'
    $.ajax({
        url: m_strWebService + 'service1.asmx/GetModelDataByCompanyID',
        type: "Post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            strClass1: class1,
            strClass2: class2,
            strClass3: class3,
            strUserAccount: name,
            strCompanyID: companyId
        },
        success: function (data) {
            data = $.parseJSON(data.model)
            // data = data.reverse()
            if (data.length === 0) {
                alert('该分类无数据')
                $('#item-box').html('')
            } else {
                if (class1 === '不限') {
                    $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="modelSecondClass(this)" id="sec">不限</span></li>`)
                    $('#threeMenu').html(`<li>三级:</li>
                <li><span class="active3" onclick="modelThreeClass(this)" id="the">不限</span></li>`)
                } else {
                    $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="modelSecondClass(this)" id="sec">不限</span></li>`)
                    $('#threeMenu').html(`<li>三级:</li>
                <li><span class="active3" onclick="modelThreeClass(this)" id="the">不限</span></li>`)
                    let secondArr = secondType[secNum]
                    console.log(secondArr)
                    for (let i = 0; i < secondArr.length; i++) {
                        leveItemHtml[i] = `<li data-res_type="model"><span onclick="modelSecondClass(this)" class="modelClass2">${secondArr[i]}</span></li>`
                        $('#secondMenu').append(leveItemHtml[i])
                    }
                    rightClick('modelClass2')
                }
                pushModel(data)
            }
        }
    })
}

function modelSecondClass(obj) {
    leveItemHtml.length = 0
    $('.active1').removeClass('active1')
    $(obj).addClass('active1')
    let father = obj.parentNode
    threeNum = $(father).index() - 2
    class2 = obj.innerHTML
    class3 = '不限'
    $.ajax({
        url: m_strWebService + 'service1.asmx/GetModelDataByCompanyID',
        type: "Post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            strClass1: class1,
            strClass2: class2,
            strClass3: class3,
            strUserAccount: name,
            strCompanyID: companyId
        },
        success: function (data) {
            data = $.parseJSON(data.model)
            if (data.length === 0) {
                alert('该分类无数据')
                $('#item-box').html('')
            } else {
                $('#threeMenu').html(`<li>三级:</li>
                <li><span class="active3" onclick="modelThreeClass(this)" id="the">不限</span></li>`)
                if (class2 !== '不限') {
                    let secondArr = levelThreeType[secNum][threeNum]
                    for (let i = 0; i < secondArr.length; i++) {
                        leveItemHtml[i] = `<li data-res_type="model"><span onclick="modelThreeClass(this)" class="myModelClass3">${secondArr[i]}</span></li>`
                        $('#threeMenu').append(leveItemHtml[i])
                        rightClick('modelClass3')
                    }
                }


                pushModel(data)
            }
        }
    })
}

function modelThreeClass(obj) {
    $('.active3').removeClass('active3')
    $(obj).addClass('active3')
    class3 = obj.innerHTML
    $.ajax({
        url: m_strWebService + 'service1.asmx/GetModelDataByCompanyID',
        type: "Post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            strClass1: class1,
            strClass2: class2,
            strClass3: class3,
            strUserAccount: name,
            strCompanyID: companyId
        },
        success: function (data) {
            data = $.parseJSON(data.model)
            if (data.length === 0) {
                alert('该分类无数据')
                $('#item-box').html('')
            } else {
                pushModel(data)
            }
        }
    })
}

var _changeFile = '', changeClass1 = '', changeClass2 = '', changeClass3 = ''
var changeUUid = ''
var scNameArr = []
var xrNameArr = []

function changeModel(obj) {
    let file = $(obj).attr('file')
    vrAdd.length = 0
    modelAdd.length = 0
    _changeFile = file
    let item = strData.filter(function (ele) {
        return ele.file.includes(file)
    })
    item = item[0]
    document.getElementById('newModel').style.display = 'block'
    document.getElementById('newModelName').setAttribute('disabled', 'disabled')
    let input = $($('#modelClassTxt').children()[0]).children()[0]
    input.value = item.class1 + '/' + item.class2 + '/' + item.class3
    changeClass1 = item.class1
    changeClass2 = item.class2
    changeClass3 = item.class3
    let size = item.size.split('-')

    document.getElementById('mchang').value = size[0]
    document.getElementById('mkuan').value = size[1]
    document.getElementById('mgao').value = size[2]
    document.getElementById('newModelName').value = item.name
    let modelUUid = item.uuid
    let sql = 'select * from model where uuid =' + '"' + modelUUid + '"'
    $.ajax({
        type: 'POST',
        url: m_strWebService + 'service1.asmx/DoSql',
        async: false,
        data: {
            strSql: sql,
            strAuthcode: '6E897B0F-1440-7196-96C1-05C879E9399A',
            strUserID: cookie.uid,
            strAccountType: ut
        },
        success: function (data) {
            $('#model-sucai').html('')
            $('#model-xuanran').html('')
            data = $(data).find('string').html()
            data = data.split('#')
            data.splice(0, 1)
            let itemArr = []
            for (let i = 0; i < data.length; i++) {
                let item = data[i].split('~')
                itemArr.push(item)
            }

            let fzType = ''
            if (itemArr[0][6] === '0') {
                fzType = '地面'
            } else if (itemArr[0][6] === '1') {
                fzType = '墙面'
            } else if (itemArr[0][6] === '2') {
                fzType = '顶面'
            } else if (itemArr[0][6] === '-1') {
                fzType = '通用'
            }
            changeUUid = itemArr[0][9]
            console.log(changeUUid)
            document.getElementById('mfz').value = fzType
            let scArr = []
            let mxArr = []
            for (let i = 0; i < itemArr.length; i++) {
                let item = itemArr[i]
                if (item[7] === '1') {
                    mxArr.push(item)
                } else {
                    scArr.push(item)
                }
            }

            for (let i = 0; i < scArr.length; i++) {
                let scName = scArr[i][5].split('\\')
                scName = scName[scName.length - 1]
                scNameArr.push(scName)
                let txt = scName.split('.')[1]

                let scInfo
                if (txt === 'jpg' || txt === 'png') {
                    scInfo = `<p class="file-item" onmouseover="fileItemOver(this)" onmouseout="fileItemOut(this)">
                                <span class="file-name">
                                <img src='${m_strWebService}ihouse/data/jiaju/${scArr[i][5]}' width="40" height="40">
                                <span class="fileName">${scName}</span>
                                <i class="el-icon-close" style="display: none;margin-left: 5px" onclick="fileDelete(this)"></i>
                                <a href="${m_strWebService}ihouse/data/jiaju/${scArr[i][5]}" style="display: none;margin-left: 5px;color:#409eff;" target="_blank" class="icondownload" download="ihouse3d">
                                <i class="el-icon-download"></i></a></span>
                                <span class="file-size">${scArr[i][8]}</span>
                              </p>`
                } else {
                    scInfo = `<p class="file-item" onmouseover="fileItemOver(this)" onmouseout="fileItemOut(this)">
                                <span class="file-name">
                                <i class="el-icon-document" style="font-size: 40px"></i>
                                <span class="fileName">${scName}</span>
                                <i class="el-icon-close" style="display: none;margin-left: 5px" onclick="fileDelete(this)"></i>
                                <a href="${m_strWebService}ihouse/data/jiaju/${scArr[i][5]}" style="display: none;margin-left: 5px;color:#409eff" target="_blank" class="icondownload" download="ihouse3d">
                                <i class="el-icon-download"></i></a></span>
                                <span class="file-size">${scArr[i][8]}</span>
                              </p>`
                }
                $('#model-sucai').append(scInfo)
            }
            for (let i = 0; i < mxArr.length; i++) {
                let scName = mxArr[i][5].split('\\')
                scName = scName[scName.length - 1]
                xrNameArr.push(scName)
                let txt = scName.split('.')[1]
                let scInfo
                if (txt === 'jpg' || txt === 'png') {
                    scInfo = `<p class="file-item" onmouseover="fileItemOver(this)" onmouseout="fileItemOut(this)">
                                <span class="file-name">
                                <img src='${m_strWebService}ihouse/data/jiaju/${mxArr[i][5]}' width="40" height="40">
                                <span class="fileName">${scName}</span>
                                <i class="el-icon-close" style="display: none;margin-left: 5px" onclick="fileDelete(this)"></i>
                                <a href="${m_strWebService}ihouse/data/jiaju/${mxArr[i][5]}" style="display: none;margin-left: 5px;color:#409eff" target="_blank" class="icondownload" download="ihouse3d">
                                <i class="el-icon-download"></i></a></span>
                                <span class="file-size">${mxArr[i][8]}</span>
                              </p>`
                } else {
                    scInfo = `<p class="file-item" onmouseover="fileItemOver(this)" onmouseout="fileItemOut(this)">
                                <span class="file-name">
                                <i class="el-icon-document" style="font-size: 40px"></i>
                                <span class="fileName">${scName}</span>
                                <i class="el-icon-close" style="display: none;margin-left: 5px" onclick="fileDelete(this)"></i>
                                <a href="${m_strWebService}ihouse/data/jiaju/${mxArr[i][5]}" style="display: none;margin-left: 5px;color:#409eff" target="_blank" class="icondownload" download="ihouse3d">
                                <i class="el-icon-download"></i></a></span>
                                <span class="file-size">${mxArr[i][8]}</span>
                              </p>`
                }
                $('#model-xuanran').append(scInfo)
            }
        }
    })
    let thumbnail = file.replace('_thumbnail', '');
    thumbnail = thumbnail.replace(/\\/g, '/')
    let strSQL = `select thumbnail,name,url,expanded from resource_expand where thumbnail='${thumbnail}'`;

    $.ajax({
        url: m_strWebService + 'Service1.asmx/ExecuteQuery',
        type: "post",
        dataType: "json",
        async: false,
        contentType: "application/x-www-form-urlencoded",
        data:
            {
                Database: "render",
                Sql: strSQL
            },
        success: function (data) {
            if ("1" == data.code) {
                let JData = JSON.parse(data.data);

                if (true == JData.ok) {
                    let itemArr = JData.Table;
                    let item = itemArr[0]
                    app.taobaoLink = item.url
                    taobaolinkType = true
                }
            } else {
                console.log(data.msg);
            }
        },
        complete: function (xmlHttpRequest) {
        },
        error: function (err) {
            console.log(err);
        }
    });
}

function openNewModel() {
    $('#model-sucai').html('')
    $('#model-xuanran').html('')
    vrAdd.length = 0
    modelAdd.length = 0
    document.getElementById('newModelName').value = ''
    document.getElementById('mchang').value = ''
    document.getElementById('mkuan').value = ''
    document.getElementById('mgao').value = ''
}

var pbDis = '0'

function init() {
    pbDis = '1'
    //width()  不包括 margin/padding/border
    //outerWidth(true) 包括padding/border  加参数true 能获取到argin
    var itemWidth = $(".gongneng-item").outerWidth(true);//每个图片的宽度
    var cols = parseInt($(window).width() / itemWidth);//浏览器的宽度/图片的宽度=列数
    var heightArr = [];//创建一个存放每个图片的高度的数组
    for (var i = 0; i < cols; i++) { //每个数组的长度就是 列数的长度
        heightArr.push(0);//最开始的时候可以默认高度是0；【，0，0】
    }
    //循环每一条图片
    $('.gongneng-item').each(function (index, item) {
        var idex = 0;//初始索引为0
        var minHeight = heightArr[0];//初始设置最小高度是数组的第一个
        for (var i = 0; i < heightArr.length; i++) {
            if (heightArr[i] < minHeight) {//判断数组中的每一个是否比默认设置的最小高度小，小于直接赋值给最小高度
                minHeight = heightArr[i];//最小高度
                idex = i;//当前索引
            }
        }
        //设置每个图片的样式
        $(item).css({
            left: itemWidth * idex,//图片距离左边的位置 就是当前图片的宽度*他的索引
            top: minHeight //图片距离顶部的位置就是最小高度
        })
        heightArr[idex] += $(item).outerHeight(true); //高度对应的索引值就是当前图片高度的值
    })
}

function loadMzy() {
    document.getElementById('mzy-detail').style.display = 'none'
    document.getElementById('mzy-upload').style.display = 'block'
}


var mImageTimer = null;    //取得正在渲染的图片定时器
var strServiceAddr = localStorage.getItem('WebService');


$(function () {
    if (null == strServiceAddr) {
        strServiceAddr = 'http://' + window.location.host + '/';
    }
})

// 开启定时器获取渲染进度以及渲染时图片
// function StartThumbnailTimer(strFileID) {
//     $('.cThumbnail').css("visibility", "visible");
//     $('.Show_Thumbnail').attr("src", "../img/loading.gif");
//
//     // mImageTimer = window.setInterval(function(){return GetThumbnail(strFileID)},5000);
// }
//
// function StopThumbnailTimer() {
//     //window.clearInterval(mImageTimer);
//     $('.cThumbnail').css("visibility", "hidden");
//     $('.Show_Thumbnail').attr("src", '');
//     //$('body').find('.Rendering_Progress').html('');
// }

function GetThumbnail(strFileID) {
    $.ajax({
        url: strServiceAddr + 'ModelService.asmx/GetThumbnail',
        type: "Post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            strFileID: "" + strFileID + ""
        },
        success: function (data) {
            // var jsonData = JSON.parse(data.firstElementChild.innerHTML);
            if (data.success == 1) {
                StopThumbnailTimer();

                var strThumbnail = strServiceAddr + data.ImageFile;
                $('.Show_Thumbnail').attr("src", strThumbnail);

                $('.cThumbnail').css("visibility", "visible");
                $('.cUploadFile').css("visibility", "hidden");
            } else if (data.success == 0) {
                alert(data.ErrorMsg);
                StopThumbnailTimer();
            }
        },
        error: function () {
            StopThumbnailTimer();
            alert('error');
        }
    });
}

//用于生成uuid
function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}


var uploadFile = document.getElementById('zfiles');


function OnUploadModel() {

    var ts = document.getElementById("zfiles").files[0];

    document.getElementById('file-title').style.display = 'none'
    document.getElementById('file-detail').style.display = 'block'
    document.getElementById('file-detail-name').innerHTML = ts.name
}

function OnOK() {
    // $('.cThumbnail').css("visibility", "hidden")
    // $('.cUploadFile').css("visibility", "visible");
    var modelClass = document.getElementById('mzyModelClass')
    let txtBox = $(modelClass).children('.el-input')[0]
    let txt = $(txtBox).children('.el-input__inner')[0]
    txt = txt.value

    var arrClass = txt.split('-');
    if (arrClass.length < 3) {
        alert.show('模型分类必须为三级,请重新选择!')
        return;
    }
    var ts = document.getElementById("zfiles").files[0];
    var strUUID = guid(8);


    let strModelName = $('#fname').val();

    var formData = new FormData();
    formData.append("fileid", strUUID);
    formData.append("filename", ts.name);
    formData.append("class1", arrClass[0]);
    formData.append("class2", arrClass[1]);
    formData.append("class3", arrClass[2]);
    formData.append("bindata", ts);
    formData.append("userAccount", name);
    formData.append("userID", '530');
    formData.append("companyID", companyId);
    formData.append("modelName", strModelName);
    //
    // contractPicFiles[i].file
    $.ajax({
        url: m_strWebService + 'ModelService.asmx/UploadFile',
        type: 'POST',
        data: formData,
        async: false,
        //cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            data = JSON.parse(data)

            if (data.code == 1) {
                //var strFileID = data.FileID;
                // StartThumbnailTimer(strFileID);

                // StopThumbnailTimer();
                alert('上传成功');
            } else {
                // StopThumbnailTimer();
                alert(data.msg);
            }
        },
        error: function () {
            // StopThumbnailTimer();
            alert('上传失败');
        }
    });

    // StartThumbnailTimer();
}

function OnHelp() {
    window.open("http://134.175.95.142/h5/exhibition/html/help/index.html");
    // $('.cThumbnail').css("visibility","visible");
    // $('.Show_Thumbnail').attr("src","../img/loading.gif");
}

function mzyFirstClass(obj) {
    leveItemHtml.length = 0
    let father = obj.parentNode
    secNum = $(father).index() - 2
    $('.active4').removeClass('active4')
    $(obj).addClass('active4')
    class1 = obj.innerHTML
    if (class1 === '不限') {
        $('#mzyClass2').html(`<li>二级:</li>
                <li><span class="active5" onclick="mzySecondClass(this)" id="sec">不限</span></li>`)
        $('#mzyClass3').html(`<li>三级:</li>
                <li><span class="active6" onclick="mzyThreeClass(this)" id="the">不限</span></li>`)
    } else {
        $('#mzyClass2').html(`<li>二级:</li>
                <li><span class="active5" onclick="mzySecondClass(this)" id="sec">不限</span></li>`)
        $('#mzyClass3').html(`<li>三级:</li>
                <li><span class="active6" onclick="mzyThreeClass(this)" id="the">不限</span></li>`)
        let secondArr = secondType[secNum]
        for (let i = 0; i < secondArr.length; i++) {
            leveItemHtml[i] = `<li data-res_type="model"><span onclick="mzySecondClass(this)" class="modelClass2">${secondArr[i]}</span></li>`
            $('#mzyClass2').append(leveItemHtml[i])
        }
    }
}

function mzySecondClass(obj) {
    leveItemHtml.length = 0
    $('.active5').removeClass('active5')
    $(obj).addClass('active5')
    let father = obj.parentNode
    threeNum = $(father).index() - 2
    class2 = obj.innerHTML
    $('#mzyClass3').html(`<li>三级:</li>
                <li><span class="active6" onclick="mzyThreeClass(this)" id="the">不限</span></li>`)
    if (class2 !== '不限') {
        let secondArr = levelThreeType[secNum][threeNum]
        for (let i = 0; i < secondArr.length; i++) {
            leveItemHtml[i] = `<li data-res_type="model"><span onclick="mzyThreeClass(this)" class="myModelClass3">${secondArr[i]}</span></li>`
            $('#mzyClass3').append(leveItemHtml[i])
        }
    }
}

function mzyThreeClass(obj) {

}

function changeMzyPage(e, obj) {
    $('._active-table-item').removeClass('_active-table-item')
    $(obj).addClass('_active-table-item')
    $('#myModel').html('')
    if (e === 'map') {
        categoryType = ['其他']
        secondType = [['其他']]
        document.getElementById('mzyjc1').style.display = 'block'
        document.getElementById('mzylz1').style.display = 'block'
        document.getElementById('mzyjc2').style.display = 'none'
        document.getElementById('mzylz2').style.display = 'none'
        document.getElementById('mzyClassBox').style.display = 'none'
        document.getElementById('mzyModelBtn').style.display = 'none'
        document.getElementById('mzyMapBtn').style.display = 'block'
        $.ajax({
            type: 'GET',
            url: m_strWebService + 'users/' + folder + '/' + name + '/huawen_upload.csv?time=' + guid(),
            success: function (data) {

                let itemArr = data.split('\r\n')
                itemArr = itemArr.filter(function (ele) {
                    return ele !== ''
                })
                strData.length = 0
                itemArr.reverse()
                for (let i = 0; i < itemArr.length; i++) {
                    let item = itemArr[i].split(',')
                    let file = item[1]
                    strData.push(item)
                    // file=file.replace('\\','/')
                    let itemInfo = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}iHouse/data/texture/${file}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a class="resClickAdd"> ${item[7]}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a class="resClickAdd"> </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    <p class="model_mats" file='${file}'>
                        <a class="j_3d">3D</a>
                    </p>
                    <p class=" model-goods-download" style="display:">
                        <a onclick="" href='${m_strWebService}ihouse/data/texture/${file}' target="_blank"  class="j_download" download="" >下载</a>
                    </p>
                    <p class=" model-goods-collect" file='${file}' onclick="changeMaps(this)">
                        <a class="j_collect"  >修改</a>
                    </p>
                    <p class=" _model-goods-delete mapDelete" file='${file}'>
                        <a class="j_delete" onclick="">删除</a>
                    </p>
                </div>
            </div>
        </div>`
                    $('#myModel').append(itemInfo)
                }
            },
            error: function () {
                console.log(11)
                categoryType = ['其他']
                secondType = [['其他']]
            }
        })
    } else if (e === 'model') {
        document.getElementById('mzyjc1').style.display = 'none'
        document.getElementById('mzylz1').style.display = 'none'
        document.getElementById('mzyjc2').style.display = 'block'
        document.getElementById('mzylz2').style.display = 'block'
        document.getElementById('mzyMapBtn').style.display = 'none'
        document.getElementById('mzyClassBox').style.display = 'none'
        document.getElementById('mzyModelBtn').style.display = 'block'
        $.ajax({
            type: 'POST',
            url: m_strWebService + 'Service1.asmx/GetPrivateMode',
            async: false,
            data: {
                strClass1: '不限',
                strClass2: '不限',
                strClass3: '不限',
                strUserID: a.uid
            },
            success: function (data) {
                data = JSON.parse(data)
                let Arr = data.model
                Arr = JSON.parse(Arr)
                $('#myModel').html('')
                categoryType = ['其他']
                secondType = [['其他']]
                levelThreeType = [[['其他']]]
                console.log(Arr)
                Arr.reverse()
                strData = Arr
                for (let i = 0; i < Arr.length; i++) {
                    let file = Arr[i].file
                    let dom = file.replace('jpg', Arr[i].format)
                    dom = dom.replace('_thumbnail', '')
                    let itemInfo = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}iHouse/data/jiaju/${file}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a class="resClickAdd"> ${Arr[i].name}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a class="resClickAdd"> </a>
                    </p>
                </div>
                <div class="icon-btn-box">
                    <p class="_model_mats" file='${file}'>
                        <a class="_j_3d">3D</a>
                    </p>
                    <p class=" model-goods-download" style="display:">
                        <a onclick="" href='${m_strWebService}ihouse/data/jiaju/${dom}'  class="j_download" target="_blank" download="">下载</a>
                    </p>
                    <p class=" model-goods-collect" file='${file}' onclick="changeModel(this)">
                        <a class="j_collect"  >修改</a>
                    </p>
                    <p class=" _model-goods-delete" file='${file},${Arr[i].class1},${Arr[i].class2},${Arr[i].class3},${Arr[i].name}' onclick="deleteModel('2',this)">
                        <a class="j_delete" onclick="">删除</a>
                    </p>
                </div>
            </div>
        </div>`
                    $('#myModel').append(itemInfo)
                }
            }
        })
    } else if (e === 'buyMap') {
        document.getElementById('mzyjc1').style.display = 'none'
        document.getElementById('mzylz1').style.display = 'none'
        document.getElementById('mzyjc2').style.display = 'none'
        document.getElementById('mzylz2').style.display = 'none'
        document.getElementById('mzyMapBtn').style.display = 'none'
        document.getElementById('mzyClassBox').style.display = 'none'
        document.getElementById('mzyModelBtn').style.display = 'none'
        let httpUrl = m_strWebService + 'users/' + folder + '/' + name + '/huawen_buy.csv?time=' + guid()
        $.ajax({
            type: 'GET',
            url: httpUrl,
            success: function (data) {
                data = data.split('\r\n')

                let itemArr = []
                data = data.filter(function (ele) {
                    return ele !== ''
                })
                for (let i = 0; i < data.length; i++) {
                    let item = data[i]
                    item = item.split(',')
                    let _item = {
                        name: item[0],
                        url: item[1],
                        size: item[2],
                        class1: item[3],
                        class2: item[4]
                    }
                    itemArr.push(_item)
                }
                itemArr.reverse()
                console.log(itemArr)
                _pushBuy(itemArr)
            }
        })
    } else if (e === 'buyModel') {
        document.getElementById('mzyjc1').style.display = 'none'
        document.getElementById('mzylz1').style.display = 'none'
        document.getElementById('mzyjc2').style.display = 'none'
        document.getElementById('mzylz2').style.display = 'none'
        document.getElementById('mzyMapBtn').style.display = 'none'
        document.getElementById('mzyClassBox').style.display = 'none'
        document.getElementById('mzyModelBtn').style.display = 'none'
        let httpUrl = m_strWebService + 'users/' + folder + '/' + name + '/jiaju_buy.csv?time=' + guid()
        $.ajax({
            type: 'GET',
            url: httpUrl,
            success: function (data) {
                data = data.split('\r\n')

                data = data.filter(function (ele) {
                    return ele !== ''
                })
                let itemArr = []
                for (let i = 0; i < data.length; i++) {
                    let item = data[i]
                    item = item.split(',')
                    let _item = {
                        name: item[0],
                        url: item[1],
                        size: '',
                        class1: item[6],
                        class2: item[7],
                        class3: item[8],
                        dom: item[item.length - 1]
                    }
                    itemArr.push(_item)
                }
                itemArr.reverse()
                _pushBuyModel(itemArr)
            }
        })
    }
}

function loadMzyMap() {
    document.getElementById('mzy-detail').style.display = 'none'
    document.getElementById('mzyMap-upload').style.display = 'block'
}

function backMap() {
    let dom = document.getElementById('mzyMap')
    changeMzyPage('map', dom)
}

var mzyMap = ''

function upLoadMzyMap() {
    let obj = document.getElementById('mzyFile')
    var file = obj.files[0];
    let size = file.size
    if (size > 3145728) {
        alert('图片大于3M，请重新选择')
    } else {
        var reader = new FileReader();
        reader.onload = function (event) {
            var txt = event.target.result;
            mzyMap = txt
            $('#mzyPic').attr('src', txt)
            document.getElementById('mzyPic').style.display = 'block'
            document.getElementById('mzyFile').style.display = 'none'
            document.getElementById('mzyAdd').style.display = 'none'
            document.getElementById('mzy-title').style.display = 'none'
        };
        reader.readAsDataURL(file);
    }
}

function upLoadMap() {
    let mapName = document.getElementById('mzyMapName').value
    let chang = document.getElementById('mzyMapChang').value
    let kuan = document.getElementById('mzyMapKuan').value
    let size = chang + 'x' + kuan
    let uploadData = {
        type: '0',
        user: name,
        folder: '',
        name: mapName,
        companyid: companyId,
        size: size,
        base64image: mzyMap,
        class1: '',
        class2: ''
    }
    $.ajax({
        type: 'POST',
        url: m_strWebService + 'service1.asmx/MyMaterial',
        data: {
            JsonData: JSON.stringify(uploadData)
        },
        success: function (data) {

        }
    })
}

function GNClick() {
    document.getElementById('gnBox').style.display = 'block'
    GetFunctionList()
}

function closeGn() {
    document.getElementById('gnBox').style.display = 'none'
    for (let i = 0; i < 13; i++) {
        let id = 'ch' + i
        document.getElementById(id).checked = false
    }
}

var qxArr = ['方案设计功能', '可受托代理设计方案', '可委托设计方案', '上传素材(我的)', '上传素材(公共库)',
    '上传材质替换界面贴图(公共库)', '上传设计方案(公共库)', '上传户型图(公共库)', '上传智能间(公共库)',
    '子账号管理', '账号的管理(如入驻、审核、停用、操作数据查询等)', '数据的审批及管理(如上传的公共素材、公共设计方案、公共智能间、户型图等)',
    '系统的基础数据管理(如素材目录管理、筛选字段管理、角色权限管理)']

function GetFunctionList() {
    $.ajax({
        url: m_strWebService + `service1.asmx/ExecuteQuery`,
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: {
            Database: "render",
            Sql: `select * from function_list where user_account='${ModifyUser}'`
        },
        success: function (data) {

            if ("1" == data.code) {
                let JData = JSON.parse(data.data);
                if (true == JData.ok) {
                    JData.Table[0].function_name;
                    let Arr = JData.Table[0].function_name.split(',')
                    for (let i = 0; i < Arr.length; i++) {
                        let txt = Arr[i]
                        for (let i = 0; i < qxArr.length; i++) {
                            if (txt === qxArr[i]) {
                                let id = 'ch' + i
                                document.getElementById(id).checked = true

                            }
                        }
                    }//可受托代理设计方案,可委托设计方案,上传素材(我的),上传设计方案(公共库),上传智能间(公共库),子帐号管理
                }
                //数据不存在，使用默认数据
                else {
                    $.ajax({
                        type: 'POST',
                        url: m_strWebService + 'Service1.asmx/GetUserBasicInfo',
                        data: {
                            strCompanyID: companyId,
                            strUserAccount: ModifyUser
                        },
                        success: function (data) {
                            let str = $(data).find("string").html()
                            let strObj = str.split('#')[1]
                            let obj = strObj.split('~')
                            GetDefaultFunction(obj[11]);
                        }
                    })

                }
            } else {
                ;
            }
        },
        complete: function (xmlHttpRequest) {

        },
        error: function (err) {


        }
    })
}


//根据帐号类型获取功能
function GetDefaultFunction(accountType) {
    $.ajax({
        url: m_strWebService + `service1.asmx/ExecuteQuery`,
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: {
            Database: "render",
            Sql: `select * from accounttype_function where type='${accountType}'`
        },
        success: function (data) {
            if ("1" == data.code) {
                let JData = JSON.parse(data.data);
                if (true == JData.ok) {
                    JData.Table[0].function_name;
                    let Arr = JData.Table[0].function_name.split(',')
                    for (let i = 0; i < Arr.length; i++) {
                        let txt = Arr[i]
                        for (let i = 0; i < qxArr.length; i++) {
                            if (txt === qxArr[i]) {
                                let id = 'ch' + i
                                document.getElementById(id).checked = true

                            }
                        }
                    }
                }
            } else {
                ;
            }
        },
        complete: function (xmlHttpRequest) {

        },
        error: function (err) {


        }
    })
}


function SaveFunctionList(userAccount, companyID, fuctionName) {
    $.ajax({
        url: m_strWebService + `service1.asmx/ExecuteNonQuery`,
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: {
            Database: "render",
            Sql: `delete from function_list where user_account='${userAccount}';insert into function_list(user_account,company_id,function_name)values('${userAccount}','${companyID}','${fuctionName}')`
        },
        success: function (data) {
            alert(data.msg)
        },
        complete: function (xmlHttpRequest) {

        },
        error: function (err) {

        }
    })
}

function qxClick() {
    let itemArr = []
    for (let i = 0; i < 13; i++) {
        let txt = $('.check')[i].checked
        if (txt) {
            itemArr.push($('#gnBox span')[i].innerHTML)
        }
    }
    SaveFunctionList(ModifyUser, companyId, itemArr)
}

function openUserChange() {
    $('.userDetail').hide()
    $('.changeBox').show()
    GetAllDefaultFunction(companyId)
}

function changeBack() {
    $('.userDetail').show()
    $('.changeBox').hide()
}

$(function () {

})
var changeUserArr = []

function GetAllDefaultFunction(companyID) {
    $.ajax({
        url: m_strWebService + `service1.asmx/ExecuteQuery`,
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: {
            Database: "render",
            Sql: `select * from accounttype_function where companyid='${companyID}'`
        },
        success: function (data) {
            changeUserArr.length = 0
            if ("1" == data.code) {
                let JData = JSON.parse(data.data);
                if (true == JData.ok) {

                    JData.Table = JData.Table.filter(function (ele) {
                        return ele.account_type !== '0'
                    })
                    $('.utList').html('')
                    for (let index = 0; index < JData.Table.length; ++index) {
                        changeUserArr.push(JData.Table[index].function_name)
                        let info = `<p class="user-item" onclick="changeUserType(this)"><i>${JData.Table[index].name}</i><span class="hide"><i class="el-icon-edit" onclick="openChange(this)"></i> <i class="el-icon-delete"></i></span></p>`
                        $('.utList').append(info)
                    }

                    $('.user-item').eq(0).addClass('active-user')
                    $('.user-item').eq(0).children('span').removeClass('hide')
                    $('.user-item').on('click', function () {

                    })
                    let item = changeUserArr[0]
                    item = item.split(',')
                    for (let i = 0; i < item.length; i++) {
                        let txt = item[i]
                        for (let i = 0; i < qxArr.length; i++) {
                            if (txt === qxArr[i]) {
                                let id = '_ch' + i
                                document.getElementById(id).checked = true
                            }
                        }
                    }
                }
            } else {
                ;
            }
        },
        complete: function (xmlHttpRequest) {

        },
        error: function (err) {


        }
    })
}

function _openNewBox() {
    // $('#newUserBox').show()
    $('#userQx').hide()
    $('#addUserType').show()
    $('#changeUserType').hide()
}

function changeUserType(e) {
    $('#changeUserType').hide()
    $('#userQx').show()
    $('#addUserType').hide()
    let obj = $('.active-user')
    let icon = obj.children('span')
    icon.addClass('hide')
    obj.removeClass('active-user')
    $(e).addClass('active-user')
    $(e).children('span').removeClass('hide')
    for (let i = 0; i < 13; i++) {
        let id = '_ch' + i
        document.getElementById(id).checked = false
    }
    let index = $(e).index()
    let item = changeUserArr[index]
    item = item.split(',')
    for (let i = 0; i < item.length; i++) {
        let txt = item[i]
        for (let i = 0; i < qxArr.length; i++) {
            if (txt === qxArr[i]) {
                let id = '_ch' + i
                document.getElementById(id).checked = true
            }
        }
    }
    stopPropagation()
}

function CheckAccountType(accountTypeName, companyID) {
    accountTypeName = $.trim(accountTypeName);
    let backdata
    $.ajax({
        url: m_strWebService + `service1.asmx/ExecuteQuery`,
        type: "post",
        async: false,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: {
            Database: "render",
            Sql: `select * from accounttype_function where name='${accountTypeName}' and companyid='${companyID}'`
        },
        success: function (data) {
            if ("1" == data.code) {
                let JData = JSON.parse(data.data);

                if (true == JData.ok) {
                    backdata = true;
                } else {
                    backdata = false;
                }
            } else {
                ;
            }
        },
        complete: function (xmlHttpRequest) {

        },
        error: function (err) {

        }
    })

    return backdata;
}

function saveClick() {
    let txt = $('#typeName')[0].value
    let boer = CheckAccountType(txt, companyId)

}

function openChange(e) {

    $('#changeUserType').show()
    $('#userQx').hide()
    $('#addUserType').hide()
    let father = e.parentNode.parentNode
    let txt = $(father)[0].innerText
    document.getElementById('typeName1').value = txt
    stopPropagation()
}

function stopPropagation(e) {
    e = e || window.event;
    if (e.stopPropagation) { //W3C阻止冒泡方法
        e.stopPropagation();
    } else {
        e.cancelBubble = true; //IE阻止冒泡方法
    }
}

function qxSaveClick() {
    let funchionArr = []
    for (let i = 0; i < 13; i++) {
        let id = '_ch' + i
        if (document.getElementById(id).checked === true) {
            funchionArr.push(qxArr[i])
        }
    }
    let title = $('.active-user').children('i')[0].innerHTML
    SaveAccounTypeFunction(title, funchionArr, companyId)
}

function SaveAccounTypeFunction(typeName, functionName, companyid) {
    $.ajax({
        url: m_strWebService + `service1.asmx/ExecuteNonQuery`,
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: {
            Database: "render",
            Sql: `delete from accounttype_function where name='${typeName}' and companyid='${companyid}';insert into accounttype_function(name,function_name,companyid)values('${typeName}','${functionName}','${companyid}')`
        },
        success: function (data) {
            alert(data.msg);
        },
        complete: function (xmlHttpRequest) {

        },
        error: function (err) {

        }
    })
}

function addClick() {
    let typeName = document.getElementById('typeName').value
    let functionArr = []
    SaveAccounTypeFunction(typeName, functionArr, companyId)
    GetAllDefaultFunction(companyId)
}

function changeClick() {
    let typeName = document.getElementById('typeName1').value
    let typeName1 = document.getElementById('typeName2').value
    $.ajax({
        url: m_strWebService + `service1.asmx/ExecuteNonQuery`,
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        data: {
            Database: "render",
            Sql: `update accounttype_function set name='${typeName1}' where name='${typeName}' and companyid='${companyId}'`
        },
        success: function (data) {
            alert(data.msg);
            GetAllDefaultFunction(companyId)
        },
        complete: function (xmlHttpRequest) {

        },
        error: function (err) {

        }
    })
}


function openUtDetail() {
    $('#_makeBox', parent.document).show()
}

var userSort = '0', _userSort = '1'

function userClick() {
    $('#userList').html('')
    if (userSort === '1') {
        let itemArr = userArr
        itemArr.sort(function (a, b) {
            return b.time < a.time ? -1 : 1
        })
        pushUser(itemArr)
        userSort = '0'
    } else {
        let itemArr = userArr
        itemArr.sort(function (a, b) {
            return b.time < a.time ? 1 : -1
        })
        pushUser(itemArr)
        userSort = '1'
    }
}

function _userClick() {
    $('#userList').html('')
    if (_userSort === '1') {
        let itemArr = userArr
        itemArr.sort(function (a, b) {
            return b.lastTime < a.lastTime ? -1 : 1
        })
        pushUser(itemArr)
        _userSort = '0'
    } else {
        let itemArr = userArr
        itemArr.sort(function (a, b) {
            return b.lastTime < a.lastTime ? 1 : -1
        })
        pushUser(itemArr)
        _userSort = '1'
    }

}

function pushUser(userArr) {
    let num = 15
    if (userArr.length < 15) {
        num = userArr.length
    }
    for (let i = 0; i < num; i++) {
        let imageInfo = `<tr >
                    <td id='tdName${i}'>${userArr[i].name}</td>
                    <td>${userArr[i].nickName}</td>
                    <td>${userArr[i].type}</td>
                    <td>${userArr[i].closingDate}</td>
                    <td>${userArr[i].tel}</td>
                    <td>${userArr[i].lastTime}</td>
                    <td>${userArr[i].ip}</td>
                    <td>${userArr[i].time}</td>
                </tr>`
        $('#userList').append(imageInfo)
    }
    for (let i = 0; i < num; i++) {
        let id = 'tdName' + i
        let obj = document.getElementById(id)
        let father = obj.parentNode
        father.oncontextmenu = function (env) {
            let e = env || window.event;
            // 获取菜单，让菜单显示出来
            let context = document.getElementById("clickMenu");
            $('.active-user-click').removeClass('active-user-click')
            $(father).addClass('active-user-click')
            context.style.display = "none";
            context.style.display = "block";
            ModifyUser = obj.innerHTML
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
        total: userArr.length,//数据总条数，必填
        pageSize: 15,//每页显示多少条数据，默认10条
        totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
        showTotal: true,//是否显示总条数，默认关闭：false
        showSkip: true,//是否显示跳页，默认关闭：false
        showPN: true,//是否显示上下翻页，默认开启：true
        prevPage: "上一页",//上翻页文字描述，默认“上一页”
        nextPage: "下一页",//下翻页文字描述，默认“下一页”
        backFun: function (page) {
            $('#userList').html('')
            let firstNum = page * 15 - 15
            let lastNum = firstNum + 15
            if (lastNum > userArr.length) {
                for (let i = firstNum; i < userArr.length; i++) {
                    let imageInfo = `<tr >
                    <td id='tdName${i}'>${userArr[i].name}</td>
                    <td>${userArr[i].nickName}</td>
                    <td>${userArr[i].type}</td>
                    <td>${userArr[i].closingDate}</td>
                    <td>${userArr[i].tel}</td>
                    <td>${userArr[i].lastTime}</td>
                    <td>${userArr[i].ip}</td>
                    <td>${userArr[i].time}</td>
                </tr>`
                    $('#userList').append(imageInfo)
                }
                for (let i = firstNum; i < userArr.length; i++) {
                    let id = 'tdName' + i
                    let obj = document.getElementById(id)
                    let father = obj.parentNode
                    father.oncontextmenu = function (env) {
                        let e = env || window.event;
                        userName = userArr[i].name
                        userNameId = id
                        // 获取菜单，让菜单显示出来
                        let context = document.getElementById("clickMenu");
                        $('.active-user-click').removeClass('active-user-click')
                        $(father).addClass('active-user-click')
                        context.style.display = "none";
                        context.style.display = "block";
                        ModifyUser = obj.innerHTML
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
                    let imageInfo = `<tr>
                    <td id='tdName${i}'>${userArr[i].name}</td>
                    <td>${userArr[i].nickName}</td>
                    <td>${userArr[i].type}</td>
                    <td>${userArr[i].closingDate}</td>
                    <td>${userArr[i].tel}</td>
                    <td>${userArr[i].lastTime}</td>
                    <td>${userArr[i].ip}</td>
                    <td>${userArr[i].time}</td>
                </tr>`
                    $('#userList').append(imageInfo)
                }
                for (let i = firstNum; i < lastNum; i++) {
                    let id = 'tdName' + i
                    let obj = document.getElementById(id)
                    let father = obj.parentNode
                    father.oncontextmenu = function (env) {
                        let e = env || window.event;
                        userName = userArr[i].name
                        userNameId = id
                        // 获取菜单，让菜单显示出来
                        let context = document.getElementById("clickMenu");
                        $('.active-user-click').removeClass('active-user-click')
                        $(father).addClass('active-user-click')
                        context.style.display = "none";
                        context.style.display = "block";
                        ModifyUser = obj.innerHTML
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

function openHoutai() {
    window.open('http://www.ihouse3d.com/3dyun.html')
}

var ok = ''
let modelName = '';

function openNewBox(obj, e) {
    $('.newBox-btn>p').hide()
    $('.newBox-btn>p').eq(e).show()
    let father = obj.parentNode.parentNode.parentNode
    let imgBox = $(father).children('.imgbox')[0]
    let img = $(imgBox).children()[0]
    let src = img.src
    let txt = src.split('/')
    console.log(txt)
    let link = ''
    let modelName = ''

    if (e === '0') {
        link = txt[8]
        modelName = txt[txt.length - 1].split('.')[0].replace('_thumbnail', '')
        modelName = decodeURI(modelName)
        let item = strData.filter(function (ele) {
            return ele.name === modelName
        })
        item = item[0]
        // $('.newBox-txtItem>input')[0].value = item.class3
        console.log(item)
    } else {
        link = txt[7]
        modelName = txt[txt.length - 1].split('.')[0]
        modelName = decodeURI(modelName)
        let item = strData.filter(function (ele) {
            return ele[0] === modelName
        })
        item = item[0]
        console.log(item)
        // $('.newBox-txtItem>input')[0].value = item[4]
    }


    $('.newBox').show()
    $('.img-border>img')[0].src = src

    if (m_strWebService === 'http://3d.kaizhuang.com/') {
        $.ajax({
            url: `http://3d.kaizhuang.com/platform/custom/api/getboards_info.html?id=${link}&name=${modelName}`,
            type: "post",
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            data: {},
            success: function (data) {
                if ("0" == data.code) {
                    data = JSON.parse(data.msg).data;
                    data = data.split(',')

                    for (let i = 0; i < data.length; i++) {
                        $('.newBox-txtItem>input')[i].value = data[i]
                    }
                    app.factoryName = data[3];
                    app.className = data[0];
                } else {
                }
            },
            complete: function (xmlHttpRequest) {
            },
            error: function (err) {
                console.log(err);
            }
        })
    } else {
        $.ajax({
            type: 'POST',
            url: m_strWebService + 'service1.asmx/ExecuteQuery',
            async: false,
            data: {
                Database: 'kaizhuang',
                Sql: 'select * from boards_info where id="' + link + '"and name="' + modelName + '"'
            },
            success: function (data) {
                data = JSON.parse(data)
                if (data.code === '1') {
                    data = data.data
                    data = JSON.parse(data)
                    ok = data.ok
                    if (ok == true) {
                        let table = data.Table
                        table = table[0].data
                        table = table.split(',')
                        for (let i = 0; i < table.length; i++) {
                            $('.newBox-txtItem>input')[i].value = table[i]
                        }

                        app.factoryName = table[3];
                        app.className = table[0];
                    } else {
                        $('.newBox-txtItem>input')[0].value = modelName;
                        app.factoryName = "开装";
                        app.className = "壁布硅钙板";
                    }
                }
            }
        })
    }
}

function holdClick() {
    let txt = ''

    //厂商
    $('.newBox-txtItem>input')[3].value = app.factoryName;

    for (let i = 0; i < 28; i++) {
        txt = txt + $('.newBox-txtItem>input')[i].value + ','

        /*
        if (i === 27) {
            txt = txt + $('.newBox-txtItem>input')[i].value
        } else {
            txt = txt + $('.newBox-txtItem>input')[i].value + ','
        }
         */
    }

    txt = txt + app.className;

    let src = $('.img-border>img')[0].src
    let link = src.split('/')
    let id = link[8]
    let modelName = link[link.length - 1].split('.')[0]
    let httpData = ''
    if (ok === true) {
        httpData = 'update  boards_info set data="' + txt + '" where id="' + id + '"and name="' + modelName + '"'
    } else {
        httpData = 'insert into boards_info values("' + id + '","' + modelName + '","' + txt + '")'
    }
    $.ajax({
        type: 'POST',
        url: m_strWebService + 'service1.asmx/ExecuteNonQuery',
        data: {
            Database: 'kaizhuang',
            Sql: httpData
        },
        success: function (data) {
            data = JSON.parse(data)
            if (data.code === '1') {
                alert('保存成功！')
                $('.newBox-close').click()
            }
        }
    })
}

function _holdClick() {
    let txt = ''
    for (let i = 0; i < 28; i++) {
        let _txt = $('.newBox-txtItem>input')[i].value
        if (i === 0) {
            _txt = document.getElementById('wlName').value
        } else if (i === 3) {
            _txt = document.getElementById('csName').value
        }
        if (i === 27) {
            txt = txt + _txt
        } else {
            txt = txt + _txt + ','
        }
    }

    let src = $('.img-border>img')[0].src
    let link = src.split('/')
    let id = link[7]
    let modelName = link[link.length - 1].split('.')[0]
    let httpData = ''
    if (ok === true) {
        httpData = 'update  boards_info set data="' + txt + '" where id="' + id + '"and name="' + modelName + '"'
    } else {
        httpData = 'insert into boards_info values("' + id + '","' + modelName + '","' + txt + '")'
    }
    if (m_strWebService === 'http://3d.kaizhuang.com/') {
        $.ajax({
            url: `http://3d.kaizhuang.com/platform/custom/api/addboards_info.html?id=${id}&name=${modelName}&data=${txt}`,
            type: "post",
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            data: {},
            success: function (data) {
                if ("0" == data.code) {
                    //保存成功
                    alert(data.msg);
                    $('.newBox-close').click()
                } else {
                    alert(data.msg);
                }
            },
            complete: function (xmlHttpRequest) {
            },
            error: function (err) {
                console.log(err);
            }
        })
    } else {
        $.ajax({
            type: 'POST',
            url: m_strWebService + 'service1.asmx/ExecuteNonQuery',
            data: {
                Database: 'kaizhuang',
                Sql: httpData
            },
            success: function (data) {
                data = JSON.parse(data)
                if (data.code === '1') {
                    alert('保存成功！')
                }
            }
        })
    }
}

function mapType() {
    if ($('.active-class')[0].innerHTML === '墙板') {
        let obj = $('#firstType')[0]
        obj.value = '墙板'
        $(obj.parentNode.parentNode).hide()
        $($(obj.parentNode.parentNode.parentNode).children('.see-btn')[0]).hide()
    } else {
        let obj = $('#firstType')[0]
        $(obj.parentNode.parentNode).show()
        $($(obj.parentNode.parentNode.parentNode).children('.see-btn')[0]).show()
    }
}

function tuichu() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
    location.reload()
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
            url: m_strWebService + 'PayWebService.asmx/Payment',
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
            url: m_strWebService + 'PayWebService.asmx/Payment',
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

function openAdminRecharge() {
    console.log(userNameId)
    let name = userName
    let id = userNameId
    let num = id.replace('tdName', '')
    let biId = 'bi' + num
    // let biNum = document.getElementById(biId).innerHTML
    document.getElementById('admin-user').innerHTML = name
    // document.getElementById('admin-bi').innerHTML = biNum
    document.getElementById('admin').style.display = 'block'
    let payData = {
        type: 2,
        user_account: name
    }
    $.ajax({
        type: 'POST',
        url: m_strWebService + 'PayWebService.asmx/Payment',
        dataType: 'json',
        data: {
            PayData: JSON.stringify(payData)
        },
        success: function (data) {
            if (data.code === '1') {
                document.getElementById('admin-bi').innerHTML = data.count
            } else {
                document.getElementById('admin-bi').innerHTML = 0
            }

        }
    })
}

function closeAdmin() {
    document.getElementById('admin').style.display = 'none'
}