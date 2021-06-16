var m_strWebService = 'http://www.ihouse3d.com.cn/'
var categoryType = [], secondType = [], levelThreeType = [], imgListInfo = [], itemInt = 16, sign = true,
    m_strObjData = [], m_strObjDataSplit = [], itemArr = [], firstMenu = [], class1 = '不限', class2 = '不限',
    class3 = '不限', leveItemHtml = [], threeItemHtml = [], secNum = 0, theNum
var linkTO

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
var headerImg = a.heade
var useId = a.useid
var passWord = a.passW
var ut = a.ut
var uid = a.uid
var payData = {
    type: 2,
    user_account: name
}
var folder = a.fold
var buyArr = []
window.onload = function () {
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
        let httpUrl = m_strWebService + 'users/' + folder + '/jiaju_buy.csv?time=' + guid()
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
        let _httpUrl = m_strWebService + 'users/' + folder + '/' + name + '/jiaju_buy.csv?time=' + guid()
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
        let httpUrl = m_strWebService + 'users/' + folder + '/' + name + '/jiaju_buy.csv?time=' + guid()
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
    if (name !== 'undefined') {
        if (document.getElementById('login-box') != null) {
            document.getElementById('login-box').innerHTML = name;
            document.getElementById('login-box').onclick = '';
        }
        document.getElementById('informationName').innerHTML = name;
        if (useId !== undefined) {
            name = useId;
            payData.user_account = name;
        }
        $.ajax({
            type: 'POST',
            url: 'http://www.ihouse3d.com.cn/PayWebService.asmx/Payment',
            dataType: 'json',
            data: {
                PayData: JSON.stringify(payData)
            },
            success: function (data) {
                document.getElementById('information-bi').innerHTML = data.count
            }
        })

        if (headerImg !== undefined) {
            document.getElementById('headerImg').src = headerImg
        }
    }
}

function guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

var addr = ''
var fileImg = ''
var buyFile = ''
$(function () {
    $('#item-box').delegate('.model_mats', 'click', function (event) {
        let file = $(this).attr('file');
        file = file.replace(/\\/g, '/')
        fileImg = 'https://www.ihouse3d.com.cn/ihouse/data/jiaju/' + file
        file = file.replace("jpg", "3ds");
        file = file.replace("_thumbnail", "");
        file = "mouxiang," + file;

        cookieInfo = GetRequest();
        userID = cookieInfo.ut;
        userAccount = cookieInfo.name;
        folder = cookieInfo.fold;
        file += `,0,${userAccount},${folder}`;

        addr = "https://www.ihouse3d.com.cn/h5/SimpleMaterial/materialTexture.html?file=" + file
        console.log(file)
        document.getElementById('ModelBg').style.display = 'block'
        document.getElementById('ModelBox').src = addr
        let codeImg = document.getElementById('codeImg')
        let _codeImg = document.getElementById('_codeImg')
        console.log(addr)
        ShowWXImage(addr, fileImg, m_strWebService, codeImg)
        ShowWXImage(addr, fileImg, m_strWebService, _codeImg)

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
            if (confirm('是否收藏当前模型？') === true) {
                let jsonData = {
                    thumbnail: file,
                    companyid: cookie.gsID,
                    folder: cookie.fold,
                    useraccount: cookie.name,
                    userid: cookie.uid
                }
                $.ajax({
                    url: "http://www.ihouse3d.com.cn/Service1.asmx/BuyPersonalModel",
                    type: "post",
                    dataType: "json",
                    contentType: "application/x-www-form-urlencoded",
                    data: {
                        JsonBaseData: JSON.stringify(jsonData)
                    },
                    success: function (data) {
                        if (data.code === '1') {
                            alert('收藏成功！');
                            reloadModel(file)
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

    })
})

function qyBuy(e) {
    if (confirm('是否收藏当前模型？') === true) {
        if (e === '0') {
            let jsonData = {
                thumbnail: buyFile,
                companyid: cookie.gsID,
                folder: cookie.fold
            }
            $.ajax({
                url: "http://www.ihouse3d.com.cn/Service1.asmx/BuyModel",
                type: "post",
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                data: {
                    JsonBaseData: JSON.stringify(jsonData)
                },
                success: function (data) {
                    if (data.code === '1') {
                        alert("收藏成功！");
                        reloadModel(buyFile)
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
                url: "http://www.ihouse3d.com.cn/Service1.asmx/BuyPersonalModel",
                type: "post",
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                data: {
                    JsonBaseData: JSON.stringify(jsonData)
                },
                success: function (data) {
                    if (data.code === '1') {
                        alert('收藏成功！');
                        reloadModel(buyFile)
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

function loadClass() {
    // $.ajax({
    //     url: m_strWebService + 'service2.asmx/GetInfoFromModel',
    //     type: "Post",
    //     dataType: "xml",
    //     contentType: "application/x-www-form-urlencoded; charset=utf-8",
    //     data: {
    //         strCompanyID: "2",
    //         iAccountType: 11
    //     },
    //     success: function (data) {
    //         var strData = data.firstElementChild.innerHTML;
    //         strData = strData.split("#");
    //
    //
    //         for (var i = 1; i < strData.length; i++) {// 一重
    //
    //             categoryType[i - 1] = strData[i].split("~")[0];//设置类型‘一级’
    //         }
    //         categoryType = distinct(categoryType)//"一级"数组去重
    //
    //         for (var i = 0; i < categoryType.length; i++) {//设置类型‘二级’ 一重
    //
    //             secondType[i] = new Array(); //创建二维数组
    //
    //             for (var j = 1; j < strData.length; j++) { //二重
    //
    //                 if (categoryType[i] == strData[j].split("~")[0]) {
    //
    //                     secondType[i].push(strData[j].split("~")[1]);//把各自符合类型的数值添加到相应的位置
    //                 }
    //             }
    //         }
    //
    //         for (var i = 0; i < secondType.length; i++) {//"二级"数组去重
    //
    //             secondType[i] = distinct(secondType[i]);//数组去重后重新赋值
    //         }
    //
    //         for (var i = 0; i < secondType.length; i++) {//设置类型"三级" 一重
    //
    //             levelThreeType[i] = new Array();//创建二维数组
    //
    //             for (var j = 0; j < secondType[i].length; j++) { //二重
    //
    //                 levelThreeType[i][j] = new Array();//创建三维数组
    //
    //                 for (var z = 1; z < strData.length; z++) { //三重
    //
    //                     if (categoryType[i] == strData[z].split("~")[0]) {
    //
    //                         if (secondType[i][j] == strData[z].split("~")[1]) {
    //
    //                             levelThreeType[i][j].push(strData[z].split("~")[2]);//把各自符合类型的数值添加到相应的位置
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //
    //         for (var i = 0; i < levelThreeType.length; i++) {//"三级"数组去重
    //             for (var j = 0; j < levelThreeType[i].length; j++) {
    //
    //                 levelThreeType[i][j] = distinct(levelThreeType[i][j]);//数组去重后重新赋值
    //             }
    //         }
    //
    //         for (let i = 0; i < categoryType.length; i++) {
    //             firstMenu[i] = `<li data-res_type="model"><span onclick="handleScreenClick(this)">${categoryType[i]}</span></li>`
    //         }
    //         // for (let i = 0; i < firstMenu.length; i++) {
    //         //     $('#firstMenu').append(firstMenu[i])
    //         // }
    //     }
    // });
    $.ajax({
        url: m_strWebService + 'service2.asmx/GetInfoFromModel',
        type: "Post",
        async: false,
        dataType: "xml",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            strCompanyID: '2',
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
            document.getElementById('threeMenu').style.display = 'block'
            $('#firstMenu').html(`<li>一级:</li>
                        <li><span class="active2" onclick="handleScreenClick(this)" id="first">不限</span></li>`)
            $('#item-box').html('')
            $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="handleSecondClick(this)">不限</span></li>`)
            $('#threeMenu').html(`<li>三级:</li>
                <li><span class="active3" onclick="handleThreeClick(this)">不限</span></li>`)
            for (let i = 0; i < categoryType.length; i++) {
                $('#firstMenu').append(`<li><span  onclick="handleScreenClick(this)" class="modelClass1">${categoryType[i]}</span></li>`)
            }
        }
    });
}

loadClass()

function loadItem() {
    let userAccount = sessionStorage.getItem('userAccount');
    if (!userAccount) {
        userAccount = "";
    }
    ;
    $.ajax({
        url: m_strWebService + 'service1.asmx/GetModelData',
        type: "Post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            strClass1: '不限',
            strClass2: '不限',
            strClass3: '不限',
            strUserAccount: userAccount
        },
        success: function (data) {
            itemArr = $.parseJSON(data.model)
            pushModelItem(itemArr)
        }
    })
}

loadItem()

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

function reloadModel(file) {
    let userAccount = sessionStorage.getItem('userAccount');
    if (!userAccount) {
        userAccount = "";
    }
    $.ajax({
        url: m_strWebService + 'service1.asmx/GetModelData',
        type: "Post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            strClass1: class1,
            strClass2: class2,
            strClass3: class3,
            strUserAccount: userAccount
        },
        success: function (data) {
            itemArr = $.parseJSON(data.model)
            itemArr = itemArr.reverse()
            if (itemArr.length === 0) {
                alert('该分类无数据')
                $('#item-box').html('')
                $("#myPage").sPage({
                    page: 1,//当前页码，必填
                    total: itemArr.length,//数据总条数，必填
                    pageSize: 40,//每页显示多少条数据，默认10条
                    totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
                    showTotal: true,//是否显示总条数，默认关闭：false
                    showSkip: true,//是否显示跳页，默认关闭：false
                    showPN: true,//是否显示上下翻页，默认开启：true
                    prevPage: "上一页",//上翻页文字描述，默认“上一页”
                    nextPage: "下一页",//下翻页文字描述，默认“下一页”
                    backFun: function (page) {
                        $('#item-box').html('');
                        let firstNum = page * 40 - 40
                        let lastNum = firstNum + 40
                        if (lastNum > imgListInfo.length) {
                            for (let i = firstNum; i < imgListInfo.length; i++) {
                                $('#item-box').append(imgListInfo[i])
                            }
                        } else {
                            for (let i = firstNum; i < lastNum; i++) {
                                $('#item-box').append(imgListInfo[i])
                            }
                        }
                    }
                });
            } else {
                if (class1 === '不限') {
                    $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="handleSecondClick(this)" id="sec">不限</span></li>`)
                    $('#threeMenu').html(`<li>三级:</li>
                <li><span class="active3" onclick="handleThreeClick(this)" id="the">不限</span></li>`)
                } else {
                    $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="handleSecondClick(this)" id="sec">不限</span></li>`)
                    $('#threeMenu').html(`<li>三级:</li>
                <li><span class="active3" onclick="handleThreeClick(this)" id="the">不限</span></li>`)
                    for (let i = -1; class1 !== categoryType[i]; i++) {
                        secNum = i + 1
                    }
                    let secondArr = secondType[secNum]
                    for (let i = 0; i < secondArr.length; i++) {
                        leveItemHtml[i] = `<li data-res_type="model"><span onclick="handleSecondClick(this)">${secondArr[i]}</span></li>`
                        $('#secondMenu').append(leveItemHtml[i])
                    }

                }
                itemArr = $.parseJSON(data.model)
                file = file.replace(/\\/g, '/')
                file = file.replace('_thumbnail', '')
                let item = {
                    url: file
                }
                buyArr.push(item)
                console.log(buyArr)
                pushModelItem(itemArr)
            }
        }
    })
}

function handleScreenClick(obj) {
    $('.active2').removeClass("active2")
    obj.className = 'active2'
    class1 = obj.innerHTML
    class2 = '不限'
    class3 = '不限'
    imgListInfo.length = 0
    itemArr.length = 0

    let userAccount = sessionStorage.getItem('userAccount');
    if (!userAccount) {
        userAccount = "";
    }
    $.ajax({
        url: m_strWebService + 'service1.asmx/GetModelData',
        type: "Post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            strClass1: class1,
            strClass2: class2,
            strClass3: class3,
            strUserAccount: userAccount
        },
        success: function (data) {
            itemArr = $.parseJSON(data.model)
            itemArr = itemArr.reverse()
            if (itemArr.length === 0) {
                alert('该分类无数据')
                $('#item-box').html('')
                $("#myPage").sPage({
                    page: 1,//当前页码，必填
                    total: itemArr.length,//数据总条数，必填
                    pageSize: 40,//每页显示多少条数据，默认10条
                    totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
                    showTotal: true,//是否显示总条数，默认关闭：false
                    showSkip: true,//是否显示跳页，默认关闭：false
                    showPN: true,//是否显示上下翻页，默认开启：true
                    prevPage: "上一页",//上翻页文字描述，默认“上一页”
                    nextPage: "下一页",//下翻页文字描述，默认“下一页”
                    backFun: function (page) {
                        $('#item-box').html('');
                        let firstNum = page * 40 - 40
                        let lastNum = firstNum + 40
                        if (lastNum > imgListInfo.length) {
                            for (let i = firstNum; i < imgListInfo.length; i++) {
                                $('#item-box').append(imgListInfo[i])
                            }
                        } else {
                            for (let i = firstNum; i < lastNum; i++) {
                                $('#item-box').append(imgListInfo[i])
                            }
                        }
                    }
                });
            } else {
                if (class1 === '不限') {
                    $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="handleSecondClick(this)" id="sec">不限</span></li>`)
                    $('#threeMenu').html(`<li>三级:</li>
                <li><span class="active3" onclick="handleThreeClick(this)" id="the">不限</span></li>`)
                } else {
                    $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="handleSecondClick(this)" id="sec">不限</span></li>`)
                    $('#threeMenu').html(`<li>三级:</li>
                <li><span class="active3" onclick="handleThreeClick(this)" id="the">不限</span></li>`)
                    for (let i = -1; class1 !== categoryType[i]; i++) {
                        secNum = i + 1
                    }
                    let secondArr = secondType[secNum]
                    for (let i = 0; i < secondArr.length; i++) {
                        leveItemHtml[i] = `<li data-res_type="model"><span onclick="handleSecondClick(this)">${secondArr[i]}</span></li>`
                        $('#secondMenu').append(leveItemHtml[i])
                    }

                }
                itemArr = $.parseJSON(data.model)
                pushModelItem(itemArr)
            }
        }
    })
}

function handleSecondClick(obj) {
    $('.active1').removeClass("active1")
    obj.className = 'active1'
    class2 = obj.innerHTML
    class3 = '不限'
    imgListInfo.length = 0
    itemArr.length = 0
    threeItemHtml.length = 0
    if (class2 === '不限') {
        $('#threeMenu').html(`<li>三级:</li>
                <li><span class="active3" onclick="handleThreeClick(this)" id="the">不限</span></li>`)
    } else {
        $('#threeMenu').html(`<li>三级:</li>
                <li><span class="active3" onclick="handleThreeClick(this)" id="the">不限</span></li>`)
        for (let i = -1; class2 != secondType[secNum][i]; i++) {
            theNum = i + 1
        }
        let secondArr = levelThreeType[secNum][theNum]
        for (let i = 0; i < secondArr.length; i++) {
            threeItemHtml[i] = `<li data-res_type="model"><span onclick="handleThreeClick(this)">${secondArr[i]}</span></li>`
            $('#threeMenu').append(threeItemHtml[i])
        }
    }
    let userAccount = sessionStorage.getItem('userAccount');
    if (!userAccount) {
        userAccount = "";
    }
    $.ajax({
        url: m_strWebService + 'service1.asmx/GetModelData',
        type: "Post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            strClass1: class1,
            strClass2: class2,
            strClass3: class3,
            strUserAccount: userAccount
        },
        success: function (data) {
            itemArr = $.parseJSON(data.model)
            itemArr = itemArr.reverse()
            pushModelItem(itemArr)
        }
    })
}

function handleThreeClick(obj) {
    imgListInfo.length = 0
    $('.active3').removeClass("active3")
    obj.className = 'active3'
    class3 = obj.innerHTML
    let userAccount = sessionStorage.getItem('userAccount');
    if (!userAccount) {
        userAccount = "";
    }
    $.ajax({
        url: m_strWebService + 'service1.asmx/GetModelData',
        type: "Post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            strClass1: class1,
            strClass2: class2,
            strClass3: class3,
            strUserAccount: userAccount
        },
        success: function (data) {
            itemArr = $.parseJSON(data.model)
            itemArr = itemArr.reverse()
            pushModelItem(itemArr)
        }
    })
}

function handleSearchBtn() {
    let condition = document.getElementById('Keyword').value
    class1 = '不限'
    class2 = '不限'
    class3 = '不限'
    imgListInfo.length = 0
    itemArr.length = 0
    $('.active2').removeClass("active2")
    $('#secondMenu').html(`<li>二级:</li>
                <li><span class="active1" onclick="handleSecondClick(this)" id="sec">不限</span></li>`)
    $('#threeMenu').html(`<li>三级:</li>
                <li><span class="active3" onclick="handleThreeClick(this)" id="the">不限</span></li>`)
    document.getElementById('first').className = 'active2'
    let userAccount = sessionStorage.getItem('userAccount');
    if (!userAccount) {
        userAccount = "";
    }
    $.ajax({
        url: m_strWebService + 'service1.asmx/GetModelData',
        type: "Post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            strClass1: class1,
            strClass2: class2,
            strClass3: class3,
            strUserAccount: userAccount
        },
        success: function (data) {
            itemArr = $.parseJSON(data.model)
            itemArr = itemArr.reverse()
            let newArr = itemArr.filter(function (ele) {
                return ele.name.includes(condition)
            })
            pushModelItem(newArr)
        }
    })
}

function pushModelItem(modelArr) {
    modelArr.reverse()
    imgListInfo.length = 0
    for (let i = 0; i < modelArr.length; i++) {
        let file = modelArr[i].file.replace(/\\/g, '/')
        file = file.replace('_thumbnail', '')
        let size = modelArr[i].size.replace(/-/g, "X")
        let dom = ''
        let dis = ''
        if (modelArr[i].format === '') {
            dom = ''
            dis = 'none'
        } else {
            dom = modelArr[i].file.replace(/jpg/g, itemArr[i].format)
            dis = 'block'
        }
        dom = dom.replace('_thumbnail', '')
        let item = buyArr.filter(function (ele) {
            return ele.url === file
        })
        if (item.length === 0) {
            imgListInfo[i] = `<div class="item-float">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}ihouse/data/jiaju/${modelArr[i].file}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a  class="resClickAdd"> ${modelArr[i].name}</a>
                        <a  class="resClickAdd"> ${size} </a>
                    </p>
                    <p class="fr model-goods-id">
                       
                        <a class="resClickAdd">${modelArr[i].class1}-${modelArr[i].class2}-${modelArr[i].class3}</a>
                    </p>
                </div>
                <div class=" icon-btn-box">
                    <p class="model_mats" file='${modelArr[i].file}'>
                        <span class="j_3d">3D浏览</span>
                    </p>
                    <p class="model-goods-download" style="display: ${dis}">
                        <a onclick="return handleInstallClick()" href='${m_strWebService}ihouse/data/jiaju/${dom}' class="j_download" target="_blank">下载模型</a>
                    </p>
                    <p class="model-goods-collect" file='${modelArr[i].file}'>
                        <span class="j_collect">收藏</span>
                    </p>
                </div>
            </div>
        </div>`
        } else {
            imgListInfo[i] = `<div class="item-float">
            <img src="assets/img/model/buy.png" alt="" class="buyPic">
            <div class="model-goods">
                <div class="imgbox">
                        <img src='${m_strWebService}ihouse/data/jiaju/${modelArr[i].file}' alt="">
                </div>
                <div class="model-goods-info clearfloat">
                    <p class="fl model-goods-name">
                        <a  class="resClickAdd">${modelArr[i].name}</a>
                        
                        <a  class="resClickAdd">${size}</a>
                    </p>
                    <p class="fr model-goods-id">
                        <a class="resClickAdd">${modelArr[i].class1}-${modelArr[i].class2}-${modelArr[i].class3}</a>
                    </p>
                </div>
                <div class=" icon-btn-box">
                    <p class="model_mats" file='${modelArr[i].file}'>
                        <span class="j_3d">3D浏览</span>
                    </p>
                    <p class="model-goods-download" style="display: ${dis}">
                        <a onclick="return handleInstallClick()" href='${m_strWebService}ihouse/data/jiaju/${dom}' class="j_download" target="_blank">下载模型</a>
                    </p>

                </div>
            </div>
        </div>`
        }

    }
    $('#item-box').html('')
    for (let i = 0; i < 25; i++) {
        $('#item-box').append(imgListInfo[i])
    }
    $("#myPage").sPage({
        page: 1,//当前页码，必填
        total: modelArr.length,//数据总条数，必填
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
            if (lastNum > imgListInfo.length) {
                for (let i = firstNum; i < imgListInfo.length; i++) {
                    $('#item-box').append(imgListInfo[i])
                }
            } else {
                for (let i = firstNum; i < lastNum; i++) {
                    $('#item-box').append(imgListInfo[i])
                }
            }
        }
    });
}


function loginClose() {
    document.getElementById('login').style.display = 'none'
    document.getElementById('idLogin').style.display = 'block'
    document.getElementById('loginBtn-Box').style.display = 'block'
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
        '      <strIP>' + "" + '</strIP>' +
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
                    location.reload()
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

function collectionClick() {
    alert('收藏功能开发中...')
}

