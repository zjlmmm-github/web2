var strData = [], firstType = [],secondType=[]
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
        let dataArr = data
        let strSQL = `select thumbnail,url,name from resource_expand`;

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
                        console.log(itemArr)
                        for (let i = 0; i < itemArr.length; i++) {
                            let item = itemArr[i]
                            if (item.url!==''){
                                let _item = dataArr.filter(function (ele) {
                                    return ele.file.replace(/\\/g, '/').replace('_thumbnail', '') === item.thumbnail
                                })
                                if (_item.length !== 0) {

                                    strData.push(_item[0])
                                }
                            }

                        }
                        strData.reverse()
                        pushModel(strData)
                        // for (let i = 0; i < strData.length; i++) {
                        //     let txt = strData[i].class1
                        //     firstType.push(txt)
                        // }
                        // for (let i = 0; i < strData.length; i++) {
                        //     let txt = strData[i].class2
                        //     secondType.push(txt)
                        // }
                        // // for (let i = 0; i < firstType.length; i++){
                        // //     firstType[i] = distinct(firstType[i])
                        // // }
                        // // for (let i = 0; i < secondType.length; i++){
                        // //     secondType[i] = distinct(secondType[i])
                        // // }
                        // console.log(firstType,secondType)
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
})

function pushModel(arr) {
    $('#item-box').html('')
    let itemInfo = []
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
        let file = arr[i].file.replace('_thumbnail', '')
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
                        <span class="j_3d">3D</span>
                    </p>
                    <p class=" model-goods-download" style="display: ${dis}">
                        <a onclick="" href='${m_strWebService}ihouse/data/jiaju/${dom}'  class="j_download" target="_blank"  download="">下载</a>
                    </p>
                    <p class="model-shop" file='${file}' onclick="openPhy(this)">
                    <span  class="shop">看实物</span>
                    </p>
                </div>
            </div>
        </div>`

    }

    for (let i = 0; i < 10; i++) {
        $('#item-box').append(itemInfo[i])
    }
    $("#myPage").sPage({
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

function openPhy(obj) {
    let file = $(obj).attr('file')
    file = file.replace(/\\/g, '/')
    file = file.replace('_thumbnail', '')
    let strSQL = `select thumbnail,name,url,expanded from resource_expand where thumbnail='${file}'`;

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
                    window.open(itemArr[0].url)


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

function handleSearchBtn() {
    let txt = document.getElementById('Keyword').value
    let itemArr = strData.filter(function (ele) {
        return ele.name.includes(txt)
    })
    if (itemArr.length === 0) {
        alert('无相关模型！')
    } else {
        pushModel(itemArr)
    }
}

function loadAllModel() {
    pushModel(strData)
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