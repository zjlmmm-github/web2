function wjFile() {
    let obj = document.getElementById('wjFile')
    let file = obj.files[0]
    let picName = file.name
    let _picName = picName.split('.')[0] + '_icon.' + picName.split('.')[1]
    let reader = new FileReader();
    reader.onload = function (event) {
        let txt = event.target.result;
        let data = {
            type: 'image',
            pathfilename: 'C:/inetpub/wwwroot/users/OutdoorPicture/' + picName,
            filedata: txt
        }
        let _data = {
            type: 'image',
            pathfilename: 'C:/inetpub/wwwroot/users/OutdoorPicture/' + _picName,
            filedata: ''
        }
        var image = new Image();
        image.src = event.target.result;
        image.onload = function () {
            let canvas = document.createElement('canvas'),
                context = canvas.getContext('2d'),
                imageWidth = 240,    //压缩后图片的大小
                imageHeight = 174,
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
                        success: function (httpData) {
                            if (httpData.code === '1') {
                                let strSQL = 'insert into outdoor_picture(companyid,file)values("","users/OutdoorPicture/' + _picName + '")'
                                $.ajax({
                                    url: m_strWebService + 'Service1.asmx/ExecuteNonQuery',
                                    type: "post",
                                    dataType: "json",
                                    contentType: "application/x-www-form-urlencoded",
                                    async: false,
                                    data: {
                                        Database: "render",
                                        Sql: strSQL
                                    },
                                    success: function (data) {
                                        if ("0" == data.code) {
                                            alert(data.msg);
                                        } else {
                                            alert('上传成功')
                                            $('#wjBtn').click()
                                        }
                                    },
                                    error: function (err) {
                                        console.log(err);
                                    }
                                });
                            }
                        }
                    })

                }
            }
        })
    };
    reader.readAsDataURL(file);
}

function pushWjItem(arr) {
    $('.wjItem-box').html('')
    for (let i = 0; i < arr.length; i++) {
        let txt = guid()
        let itemInfo

        if (arr[i].type === '0') {
            itemInfo = `<div class="item" id='${arr[i].file}'  onmouseout="iconOut(this)" onmouseover="iconOver(this)">
                <div class="item-icon-box" id="${arr[i].file}icon" style="height: 228px">
                <div class="item-icon-bg">
                <div>
                <img src="assets/img/删除.png" width="30" alt="" onclick="wjDelete(this)" class="model-item-icon" id="${arr[i].file}-delete">
                <p class="item-icon-txt">删除</p>
                </div>
               
                </div>
                </div>
                    <img src='${m_strWebService}${arr[i].file}' width="290" height="228">
                   
                    <div style="height: 32px;position: relative">
                    <select class="wjBtn" onchange="changeWJ(this)">
  <option value ="0">室内</option>
  <option value ="1">室外白天</option>
  <option value="2">室外夜晚</option>
</select>
</div>
                </div>`
        } else if(arr[i].type === '1') {
            itemInfo = `<div class="item" id='${arr[i].file}'  onmouseout="iconOut(this)" onmouseover="iconOver(this)">
                <div class="item-icon-box" id="${arr[i].file}icon" style="height: 228px">
                <div class="item-icon-bg">
                <div>
                <img src="assets/img/删除.png" width="30" alt="" onclick="wjDelete(this)" class="model-item-icon" id="${arr[i].file}-delete">
                <p class="item-icon-txt">删除</p>
                </div>
               
                </div>
                </div>
                    <img src='${m_strWebService}${arr[i].file}' width="290" height="228">
                   
                    <div style="height: 32px;position: relative">
                    <select class="wjBtn" onchange="changeWJ(this)">
                        <option value ="1">室外白天</option> 
                        <option value ="0">室内</option>
                        <option value="2">室外夜晚</option>
                    </select>
                    </div>
                </div>`
        }else if(arr[i].type === '2') {
            itemInfo = `<div class="item" id='${arr[i].file}'  onmouseout="iconOut(this)" onmouseover="iconOver(this)">
                <div class="item-icon-box" id="${arr[i].file}icon" style="height: 228px">
                <div class="item-icon-bg">
                <div>
                <img src="assets/img/删除.png" width="30" alt="" onclick="wjDelete(this)" class="model-item-icon" id="${arr[i].file}-delete">
                <p class="item-icon-txt">删除</p>
                </div>
               
                </div>
                </div>
                    <img src='${m_strWebService}${arr[i].file}' width="290" height="228">
                   
                    <div style="height: 32px;position: relative">
                    <select class="wjBtn" onchange="changeWJ(this)">
                        <option value="2">室外夜晚</option>
                        <option value ="0">室内</option>
                        <option value ="1">室外白天</option> 
                       
                    </select>
                    </div>
                </div>`
        }

        $('.wjItem-box').append(itemInfo)
    }
    $('.slide-btn').on('click', function () {
        let obj = $(this).children()[0]
        if (obj.className === "inner-on") {
            obj.style.left = -51 + "px";
            obj.childNodes[1].checked = false;
            obj.className = "inner-off";
            wjSet(obj.parentNode, '1')
        } else {
            obj.style.left = 0;
            obj.childNodes[1].checked = true;
            obj.className = "inner-on";
            wjSet(obj.parentNode, '0')
        }
    })
}

function changeWJ(obj) {
    let e = obj.value
    wjSet(obj, e)
}

function wjSet(obj, e) {
    console.log(obj)
    let father = obj.parentNode.parentNode
    let file = father.id
    console.log(file)
    let strSQL = `update outdoor_picture set type='${e}' where file='${file}'`;
    $.ajax({
        url: m_strWebService + 'Service1.asmx/ExecuteNonQuery',
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        async: false,
        data:
            {
                Database: "render",
                Sql: strSQL
            },
        success: function (data) {
            if ("0" == data.code) {
                alert(data.msg)
            } else {
                // $('#wjBtn').click()
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
}

function wjDelete(obj) {
    if (confirm('确定要删除吗') === true) {
        let id = obj.id
        id = id.split('-')[0]
        let _id = id.split('/')
        let txt = _id[1]
        let path = _id[2] + '/' + _id[3]
        let http = new XMLHttpRequest()
        http.open('POST', m_strWebService + 'service1.asmx', true)
        let httpData =
            '<?xml version="1.0" encoding="utf-8"?>' +
            '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
            '  <soap12:Body>' +
            '    <DeleteFile xmlns="http://tempuri.org/">' +
            '           <strPathFile>users/' + txt + '</strPathFile>' +
            '           <strDataFile>' + path + '</strDataFile>' +
            '    </DeleteFile>' +
            '  </soap12:Body>' +
            '</soap12:Envelope>'
        http.setRequestHeader('Content-Type', 'text/xml');
        http.send(httpData)
        http.onreadystatechange = function () {
            if (http.readyState == 4) {
                if (http.status == 200) {
                    let strSQL = `delete from outdoor_picture where file='${id}'`;
                    $.ajax({
                        url: m_strWebService + 'Service1.asmx/ExecuteNonQuery',
                        type: "post",
                        dataType: "json",
                        contentType: "application/x-www-form-urlencoded",
                        async: false,
                        data:
                            {
                                Database: "render",
                                Sql: strSQL
                            },
                        success: function (data) {
                            if ("0" == data.code) {


                            } else {
                                alert('删除成功!')
                                $('#wjBtn').click()
                            }
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });

                }
            }
        }
    }
}
