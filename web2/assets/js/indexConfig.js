var app = new Vue({
    el: '#app',
    data: function () {
        return {
            link: '',
            loading: true
        }
    }
})

function closeBox() {
    $('.configQj').hide()
}

$(function () {
    $('.headerBtn p').eq(1).on('click', function () {
        $('.configQj').show()
    })
    $('.headerBtn span').on('click', function () {
        $('.makeBox').show()
        $.ajax({
            type: 'GET',
            cache: false,
            async: false,
            url: 'http://www.ihouse3d.com.cn/picConfig.txt',
            success: function (data) {
                $('#txt')[0].value = data
            }
        })
    })
    $('.saveBtn').on('click', function () {
        let txt = $('#txt')[0].value
        let txtPath = 'C:/inetpub/wwwroot/picConfig.txt'
        let txtData = '{"type":"string","pathfilename":"' + txtPath + '","filedata":"' + encode(txt) + '"}'
        $.ajax({
            url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
            type: 'POST',
            dataType: "json",
            async: false,
            contentType: "application/json",
            data: txtData,
            success: function (data) {
                if (data.code === '1') {
                    $('.makeBox').hide()
                    loadPic()
                }
            }
        })
    })
    $('.closeBtn').on('click', function () {
        $('.makeBox').hide()
    })
    $('.titleBox-item').on('click', function () {
        app.loading = true
        $('.picBox').html('')
        $('.appPicBox').html('')
        $('.videoBox').html('')
        $('h1').hide()
        $('.activeTile').removeClass('activeTile')
        $(this).addClass('activeTile')
        let index = $(this).index()
        $('.headerBtn p').hide()
        $('.headerBtn span').hide()
        $('.headerBtn p').eq(index).show()
        $('#file').hide()
        $('#file1').hide()
        $('#videoFile').hide()
        if (index === 0) {
            $('h1').show()
            $('.headerBtn span').show()
            $('.picBox').show()
            $('#file').show()
            $('.panoBox').hide()
            $('.videoBox').hide()
            $('.appPicBox').hide()
            loadPic()
        } else if (index === 1) {
            $('.panoBox').show()
            $('.picBox').hide()
            $('.appPicBox').hide()
            $('.videoBox').hide()
            loadQJ()
        } else if (index === 2) {
            $('.picBox').hide()
            $('.panoBox').hide()
            $('.appPicBox').hide()
            $('#videoFile').show()
            $('.videoBox').show()
            loadVideo()
        } else if (index === 3) {
            $('.picBox').hide()
            $('.panoBox').hide()
            $('.videoBox').hide()
            $('.appPicBox').show()
            $('#file1').show()
            loadApp()
        }
    })
})
var folder = cookie.fold
loadPic()

function loadApp() {

    $.ajax({
        type: 'GET',
        cache: false,
        async: false,
        url: 'http://www.ihouse3d.com.cn/appConfig.txt',
        success: function (data) {
            $('.appPicBox').html('')
            let dataArr = data.split(',')
            dataArr.reverse()
            for (let i = 0; i < dataArr.length; i++) {
                let txt = dataArr[i]

                let item = dataArr[i].split('-')[0]
                let itemInfo
                if (txt.includes('-')) {
                    if (txt.split('-')[1] === '0') {
                        itemInfo = `<div class="item">
<div class="item-icon">
            <div class="item-icon-item" del="${item}" onclick="deleteApp(this)">
            <img src="assets/img/删除.png" alt="" width="30">
            <span>删除</span>
</div>
        </div>
        <img src="http://www.ihouse3d.com.cn/indexApp/${item}" alt="">
        <div class="kgBox">
<div class="slide-btn" id="${item}">
    <div class="inner-off" style="left: -51px">
        <input style="display:none;" type="checkbox" checked="false">
        <span class="left">显示</span><span class="space">&nbsp;</span><span class="right">&nbsp;</span>
    </div>
</div>


</div>
    </div>`
                    } else if (txt.split('-')[1] === '1') {
                        itemInfo = `<div class="item">
<div class="item-icon">
            <div class="item-icon-item" del="${item}" onclick="deleteApp(this)">
            <img src="assets/img/删除.png" alt="" width="30">
            <span>删除</span>
</div>
        </div>
        <img src="http://www.ihouse3d.com.cn/indexApp/${item}" alt="">
        <div class="kgBox">
        <div class="slide-btn" id="${item}">
    <div class="inner-on">
        <input style="display:none;" type="checkbox" checked>
        <span class="left">显示</span><span class="space">&nbsp;</span><span class="right">&nbsp;</span>
    </div>
</div>


</div>
    </div>`
                    }
                } else {
                    itemInfo = `<div class="item">
<div class="item-icon">
            <div class="item-icon-item" del="${item}" onclick="deleteApp(this)">
            <img src="assets/img/删除.png" alt="" width="30">
            <span>删除</span>
</div>
        </div>
        <img src="http://www.ihouse3d.com.cn/indexApp/${item}" alt="">
        <div class="kgBox">
<div class="slide-btn" id="${item}">
    <div class="inner-off" style="left: -51px">
        <input style="display:none;" type="checkbox" checked="false">
        <span class="left">显示</span><span class="space">&nbsp;</span><span class="right">&nbsp;</span>
    </div>
</div>


</div>
    </div>`
                }
                $('.appPicBox').append(itemInfo)

            }
        },
        error: function () {

        }
    })
    $('.item').hover(function () {
        $(this).children('.item-icon').show()
    }, function () {
        $(this).children('.item-icon').hide()
    })
    $('.slide-btn').on('click', function () {
        let obj = $(this).children()[0]
        if (obj.className === "inner-on") {
            obj.style.left = -51 + "px";
            obj.childNodes[1].checked = false;
            obj.className = "inner-off";
            setDown(obj.parentNode, 'appConfig')
        } else {
            obj.style.left = 0;
            obj.childNodes[1].checked = true;
            obj.className = "inner-on";
            setUp(obj.parentNode, 'appConfig')
        }
    })
    setTimeout(function () {
        init()
        app.loading = false
    }, 1000)

}

function deleteApp(obj) {
    if (confirm('确定要删除吗') === true) {
        let txt = $(obj).attr('del')
        $.ajax({
            type: 'GET',
            cache: false,
            async: false,
            url: 'http://www.ihouse3d.com.cn/appConfig.txt',
            success: function (data) {
                let arr = data.split(',')
                let num
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].includes(txt)) {
                        num = i
                    }
                }
                arr.splice(num, 1)
                let txtPath = 'C:/inetpub/wwwroot/appConfig.txt'
                let dataTxt = ''
                for (let i = 0; i < arr.length; i++) {
                    if (i === arr.length - 1) {
                        dataTxt += arr[i]
                    } else {
                        dataTxt += arr[i] + ','
                    }
                }
                let txtData = '{"type":"string","pathfilename":"' + txtPath + '","filedata":"' + encode(dataTxt) + '"}'
                $.ajax({
                    url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                    type: 'POST',
                    dataType: "json",
                    async: false,
                    contentType: "application/json",
                    data: txtData,
                    success: function (data) {
                        if (data.code === '1') {
                            loadApp()
                        }
                    }
                })
            }
        })
    }
}

function deletePic(obj) {
    if (confirm('确定要删除吗') === true) {
        let txt = $(obj).attr('del')
        $.ajax({
            type: 'GET',
            cache: false,
            async: false,
            url: 'http://www.ihouse3d.com.cn/picConfig.txt',
            success: function (data) {
                let arr = data.split(',')
                let num
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].includes(txt)) {
                        num = i
                    }
                }
                arr.splice(num, 1)
                let txtPath = 'C:/inetpub/wwwroot/picConfig.txt'
                let dataTxt = ''
                for (let i = 0; i < arr.length; i++) {
                    if (i === arr.length - 1) {
                        dataTxt += arr[i]
                    } else {
                        dataTxt += arr[i] + ','
                    }
                }
                let txtData = '{"type":"string","pathfilename":"' + txtPath + '","filedata":"' + encode(dataTxt) + '"}'
                $.ajax({
                    url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                    type: 'POST',
                    dataType: "json",
                    async: false,
                    contentType: "application/json",
                    data: txtData,
                    success: function (data) {
                        if (data.code === '1') {
                            loadPic()
                        }
                    }
                })
            }
        })
    }
}

function loadPic() {

    $.ajax({
        type: 'GET',
        cache: false,
        async: false,
        url: 'http://www.ihouse3d.com.cn/picConfig.txt',
        success: function (data) {
            $('.picBox').html('')
            let dataArr = data.split(',')
            for (let i = 0; i < dataArr.length; i++) {
                let txt = dataArr[i]

                let item = dataArr[i].split('-')[0]
                let itemInfo
                if (txt.includes('-')) {
                    if (txt.split('-')[1] === '0') {
                        itemInfo = `<div class="item">
<div class="item-icon">
            <div class="item-icon-item" del="${item}" onclick="deletePic(this)">
            <img src="assets/img/删除.png" alt="" width="30">
            <span>删除</span>
</div>
        </div>
        <img src="http://www.ihouse3d.com.cn/indexPic/${item}" alt="">
        <div class="kgBox">
<div class="slide-btn" id="${item}">
    <div class="inner-off" style="left: -51px">
        <input style="display:none;" type="checkbox" checked="false">
        <span class="left">显示</span><span class="space">&nbsp;</span><span class="right">&nbsp;</span>
    </div>
</div>


</div>
    </div>`
                    } else if (txt.split('-')[1] === '1') {
                        itemInfo = `<div class="item">
        <div class="item-icon">
            <div class="item-icon-item" del="${item}"  onclick="deletePic(this)">
            <img src="assets/img/删除.png" alt="" width="30">
            <span>删除</span>
</div>
        </div>
        <img src="http://www.ihouse3d.com.cn/indexPic/${item}" alt="">
        <div class="kgBox">
        <div class="slide-btn" id="${item}">
    <div class="inner-on">
        <input style="display:none;" type="checkbox" checked>
        <span class="left">显示</span><span class="space">&nbsp;</span><span class="right">&nbsp;</span>
    </div>
</div>


</div>
    </div>`
                    }
                } else {
                    itemInfo = `<div class="item">
<div class="item-icon">
            <div class="item-icon-item" del="${item}"  onclick="deletePic(this)">
            <img src="assets/img/删除.png" alt="" width="30">
            <span>删除</span>
</div>
        </div>
        <img src="http://www.ihouse3d.com.cn/indexPic/${item}" alt="">
        <div class="kgBox">
<div class="slide-btn" id="${item}">
    <div class="inner-off" style="left: -51px">
        <input style="display:none;" type="checkbox" checked="false">
        <span class="left">显示</span><span class="space">&nbsp;</span><span class="right">&nbsp;</span>
    </div>
</div>


</div>
    </div>`
                }
                $('.picBox').append(itemInfo)
            }
        },
        error: function () {

        }
    })
    $('.item').hover(function () {
        $(this).children('.item-icon').show()
    }, function () {
        $(this).children('.item-icon').hide()
    })
    $('.slide-btn').on('click', function () {
        let obj = $(this).children()[0]
        if (obj.className === "inner-on") {
            obj.style.left = -51 + "px";
            obj.childNodes[1].checked = false;
            obj.className = "inner-off";
            setDown(obj.parentNode, 'picConfig')
        } else {
            obj.style.left = 0;
            obj.childNodes[1].checked = true;
            obj.className = "inner-on";
            setUp(obj.parentNode, 'picConfig')
        }
    })
    setTimeout(function () {
        init()
        app.loading = false
    }, 1000)
}

function init() {
    //width()  不包括 margin/padding/border
    //outerWidth(true) 包括padding/border  加参数true 能获取到argin
    var itemWidth = $(".item").outerWidth(true);//每个图片的宽度
    var cols = parseInt($(window).width() / itemWidth);//浏览器的宽度/图片的宽度=列数
    var heightArr = [];//创建一个存放每个图片的高度的数组
    for (var i = 0; i < cols; i++) { //每个数组的长度就是 列数的长度
        heightArr.push(0);//最开始的时候可以默认高度是0；【，0，0】
    }
    //循环每一条图片
    $('.item').each(function (index, item) {
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

window.addEventListener("DOMContentLoaded", contentLoaded, false);

function contentLoaded() {
    document.getElementById('file').addEventListener('change',
        file1, false);
    document.getElementById('file1').addEventListener('change',
        file2, false);
    document.getElementById('videoFile').addEventListener('change',
        videoFile, false);
}

function loadVideo() {
    $('.videoBox').html('')
    $.ajax({
        type: 'GET',
        url: 'http://www.ihouse3d.com.cn/videoConfig.txt',
        cache: false,
        success: function (data) {
            let arr = data.split(',')
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i].split('~')
                let info
                if (item[1] === '1') {
                    info = `<div class="item">
<div class="item-icon">
            <div class="item-icon-item" del="${arr[i]}" onclick="deleteVideo(this)">
            <img src="assets/img/删除.png" alt="" width="30">
            <span>删除</span>
</div>
        </div>
            <video src="http://www.ihouse3d.com.cn/indexVideo/${item[0]}" controls></video>
            <div class="kgBox">
<div class="slide-btn" id="${arr[i]}">
    <div class="inner-on" >
        <input style="display:none;" type="checkbox" checked>
        <span class="left">显示</span><span class="space">&nbsp;</span><span class="right">&nbsp;</span>
    </div>
</div>


</div>
        </div>`
                } else {
                    info = `<div class="item">
<div class="item-icon">
            <div class="item-icon-item" del="${arr[i]}" onclick="deleteVideo(this)">
            <img src="assets/img/删除.png" alt="" width="30">
            <span>删除</span>
</div>
        </div>
            <video src="http://www.ihouse3d.com.cn/indexVideo/${item[0]}" controls></video>
            <div class="kgBox">
<div class="slide-btn" id="${arr[i]}">
    <div class="inner-off" style="left: -51px">
        <input style="display:none;" type="checkbox" checked="false">
        <span class="left">显示</span><span class="space">&nbsp;</span><span class="right">&nbsp;</span>
    </div>
</div>


</div>
        </div>`
                }

                $('.videoBox').append(info)
            }

        }
    })
    setTimeout(function () {
        $('.item').hover(function () {
            $(this).children('.item-icon').show()
        }, function () {
            $(this).children('.item-icon').hide()
        })
        $('.slide-btn').on('click', function () {
            let obj = $(this).children()[0]
            if (obj.className === "inner-on") {
                obj.style.left = -51 + "px";
                obj.childNodes[1].checked = false;
                obj.className = "inner-off";
                changeVideo(obj.parentNode, '0')
            } else {
                if ($('.inner-on').length !== 0) {
                    $('.inner-on')[0].style.left = -51 + "px";
                    $('.inner-on')[0].childNodes[1].checked = false;
                    $('.inner-on')[0].className = "inner-off";
                }
                obj.style.left = 0;
                obj.childNodes[1].checked = true;
                obj.className = "inner-on";
                changeVideo(obj.parentNode, '1')
            }
        })
        init()
        app.loading = false
    }, 1000)
}

function videoFile() {
    let file = document.getElementById('videoFile')
    OnUploadFile(file)
}

function OnUploadFile(that) {
    if (that.files && that.files.length) {
        var bytesPerPiece = 1024 * 1024 * 2; // 每个文件切片大小定为2Mb .
        var totalPieces;//切片总数，这个根据 文件大小来计算
        var start = 0;
        var end;
        var index = 0;
        let fileType = that.files[0].name.split('.')[1]
        var filesize = that.files[0].size;// 文件大小
        var filename = guid() + '.' + fileType;// 文件名称
        var fileid = guid(); //
        var filepath = 'C:/inetpub/wwwroot/indexVideo/'   //在服务器上保存的位置
        var nProgress = 1;

        //计算文件切片总数
        totalPieces = Math.ceil(filesize / bytesPerPiece);
        while (start < filesize) {
            end = start + bytesPerPiece;
            if (end > filesize) {
                end = filesize;
            } // 匹配最后一个分片的情况
            var chunk = that.files[0].slice(start, end);//切割文件
            var sliceIndex = filename;
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
                    app.loading = true
                    if (data.val) {
                        let newTxt = ''
                        $.ajax({
                            url: 'http://www.ihouse3d.com.cn/videoConfig.txt',
                            type: 'GET',
                            cache: false,
                            success: function (data) {
                                if (data === '') {
                                    newTxt = filename
                                } else {
                                    newTxt = data + ',' + filename
                                }

                                let txtPath = 'C:/inetpub/wwwroot/videoConfig.txt'
                                let txtData = '{"type":"string","pathfilename":"' + txtPath + '","filedata":"' + encode(newTxt) + '"}'
                                $.ajax({
                                    url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                                    type: 'POST',
                                    dataType: "json",
                                    async: false,
                                    contentType: "application/json",
                                    data: txtData,
                                    success: function (data) {
                                        if (data.code === '1') {
                                            alert('添加成功！')
                                            loadVideo()
                                        }
                                    }
                                })
                            }
                        })
                    } else {
                        let progress = nProgress * 100 / totalPieces;
                        progress = progress.toFixed(0);
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

var fileArr = []

function file1() {
    fileArr = document.getElementById('file').files
    setTimeout(function () {
        fileLoad(0)
    }, 500)
}

function file2() {
    fileArr = document.getElementById('file1').files
    setTimeout(function () {
        _fileLoad(0)
    }, 500)
}

function guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function fileLoad(num) {
    // let obj = document.getElementById('file')
    let file = fileArr[num]
    console.log(file)
    let reader = new FileReader();
    reader.onload = function (event) {
        let txt = event.target.result;
        let fileName = guid()
        let smallPicName = file.name.split('.')
        let imgPath = 'C:/inetpub/wwwroot/indexPic/' + fileName + '.' + smallPicName[1]
        let imgData = {
            "type": "image",
            "pathfilename": imgPath,
            "filedata": txt
        }


        smallPicName = fileName + '_icon.' + smallPicName[1]
        let _imgPath = 'C:/inetpub/wwwroot/indexPic/' + smallPicName
        let _imgData = {
            "type": "image",
            "pathfilename": _imgPath,
            "filedata": ''
        }
        let image = new Image();
        image.src = URL.createObjectURL(file);
        let oldWidth = '', oldHeight = ''
        image.onload = function () {
            oldWidth = image.width
            oldHeight = image.height
            let canvas = document.createElement('canvas'),
                context = canvas.getContext('2d'),
                imageWidth = oldWidth / 2,    //压缩后图片的大小
                imageHeight = oldHeight / 2,
                data = ''
            canvas.width = imageWidth
            canvas.height = imageHeight
            context.drawImage(image, 0, 0, imageWidth, imageHeight)
            data = canvas.toDataURL('image/jpeg')  //这里是图片
            _imgData.filedata = data
        }
        $.ajax({
            type: 'POST',
            url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(imgData),
            success: function (data) {
                $.ajax({
                    type: 'POST',
                    url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(_imgData),
                    success: function (data) {
                        let txtPath = 'C:/inetpub/wwwroot/picConfig.txt'

                        let oldTxt = ''
                        $.ajax({
                            type: 'GET',
                            cache: false,
                            async: false,
                            url: 'http://www.ihouse3d.com.cn/picConfig.txt',
                            success: function (data) {
                                oldTxt = data
                            },
                            error: function () {
                                oldTxt = ''
                            }
                        })
                        let newTxt = ''
                        if (oldTxt === '') {
                            newTxt = smallPicName
                        } else {
                            newTxt = oldTxt + ',' + smallPicName
                        }
                        let txtData = '{"type":"string","pathfilename":"' + txtPath + '","filedata":"' + encode(newTxt) + '"}'
                        $.ajax({
                            url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                            type: 'POST',
                            dataType: "json",
                            async: false,
                            contentType: "application/json",
                            data: txtData,
                            success: function (data) {
                                if (data.code === '1') {

                                    if (num === fileArr.length - 1) {
                                        alert('添加成功！')
                                        loadPic()
                                    } else {
                                        fileLoad(num + 1)
                                    }

                                }
                            }
                        })
                    }
                })

            }
        })

    }
    reader.readAsDataURL(file);
}

function _fileLoad(num) {
    // let obj = document.getElementById('file')
    let file = fileArr[num]
    console.log(file)
    let reader = new FileReader();
    reader.onload = function (event) {
        let txt = event.target.result;
        let fileName = guid()
        let smallPicName = file.name.split('.')
        let imgPath = 'C:/inetpub/wwwroot/indexApp/' + fileName + '.' + smallPicName[1]
        let imgData = {
            "type": "image",
            "pathfilename": imgPath,
            "filedata": txt
        }


        smallPicName = fileName + '_icon.' + smallPicName[1]
        let _imgPath = 'C:/inetpub/wwwroot/indexApp/' + smallPicName
        let _imgData = {
            "type": "image",
            "pathfilename": _imgPath,
            "filedata": ''
        }
        let image = new Image();
        image.src = URL.createObjectURL(file);
        let oldWidth = '', oldHeight = ''
        image.onload = function () {
            oldWidth = image.width
            oldHeight = image.height
            let canvas = document.createElement('canvas'),
                context = canvas.getContext('2d'),
                imageWidth = oldWidth / 2,    //压缩后图片的大小
                imageHeight = oldHeight / 2,
                data = ''
            canvas.width = imageWidth
            canvas.height = imageHeight
            context.drawImage(image, 0, 0, imageWidth, imageHeight)
            data = canvas.toDataURL('image/jpeg')  //这里是图片
            _imgData.filedata = data
        }
        $.ajax({
            type: 'POST',
            url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(imgData),
            success: function (data) {
                $.ajax({
                    type: 'POST',
                    url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(_imgData),
                    success: function (data) {
                        let txtPath = 'C:/inetpub/wwwroot/appConfig.txt'
                        let oldTxt = ''
                        $.ajax({
                            type: 'GET',
                            cache: false,
                            async: false,
                            url: 'http://www.ihouse3d.com.cn/appConfig.txt',
                            success: function (data) {
                                oldTxt = data
                            },
                            error: function () {
                                oldTxt = ''
                            }
                        })
                        let newTxt = ''
                        if (oldTxt === '') {
                            newTxt = smallPicName
                        } else {
                            newTxt = oldTxt + ',' + smallPicName
                        }
                        let txtData = '{"type":"string","pathfilename":"' + txtPath + '","filedata":"' + encode(newTxt) + '"}'
                        $.ajax({
                            url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                            type: 'POST',
                            dataType: "json",
                            async: false,
                            contentType: "application/json",
                            data: txtData,
                            success: function (data) {
                                if (data.code === '1') {

                                    if (num === fileArr.length - 1) {
                                        alert('添加成功！')
                                        loadApp()
                                    } else {
                                        _fileLoad(num + 1)
                                    }

                                }
                            }
                        })
                    }
                })

            }
        })

    }
    reader.readAsDataURL(file);
}

function encode(str) {
// 对字符串进行编码
    var encode = encodeURI(str);
// 对编码的字符串转化base64
    var base64 = btoa(encode);
    return base64;
}

function setUp(obj, link) {
    let txt = obj.id
    let txtPath = 'C:/inetpub/wwwroot/' + link + '.txt'
    let oldTxt = ''
    $.ajax({
        type: 'GET',
        cache: false,
        async: false,
        url: 'http://www.ihouse3d.com.cn/' + link + '.txt',
        success: function (data) {
            oldTxt = data
        },
        error: function () {
            oldTxt = ''
        }
    })
    oldTxt = oldTxt.split(',')
    let num = ''
    for (let i = 0; i < oldTxt.length; i++) {
        if (oldTxt[i].includes(txt)) {
            num = i
        }
    }
    oldTxt[num] = txt + '-1'
    let numTxt = ''
    for (let i = 0; i < oldTxt.length; i++) {
        if (i === oldTxt.length - 1) {
            numTxt = numTxt + oldTxt[i]
        } else {
            numTxt = numTxt + oldTxt[i] + ','
        }
    }
    let txtData = '{"type":"string","pathfilename":"' + txtPath + '","filedata":"' + encode(numTxt) + '"}'
    $.ajax({
        url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
        type: 'POST',
        dataType: "json",
        async: false,
        contentType: "application/json",
        data: txtData,
        success: function (data) {
            if (data.code === '1') {


            }
        }
    })
}

function setDown(obj, link) {
    let txt = obj.id
    let txtPath = 'C:/inetpub/wwwroot/' + link + '.txt'
    let oldTxt = ''
    $.ajax({
        type: 'GET',
        cache: false,
        async: false,
        url: 'http://www.ihouse3d.com.cn/' + link + '.txt',
        success: function (data) {
            oldTxt = data
        },
        error: function () {
            oldTxt = ''
        }
    })
    oldTxt = oldTxt.split(',')
    let num = ''
    for (let i = 0; i < oldTxt.length; i++) {
        if (oldTxt[i].includes(txt)) {
            num = i
        }
    }
    oldTxt[num] = txt + '-0'
    let numTxt = ''
    for (let i = 0; i < oldTxt.length; i++) {
        if (i === oldTxt.length - 1) {
            numTxt = numTxt + oldTxt[i]
        } else {
            numTxt = numTxt + oldTxt[i] + ','
        }
    }
    let txtData = '{"type":"string","pathfilename":"' + txtPath + '","filedata":"' + encode(numTxt) + '"}'
    $.ajax({
        url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
        type: 'POST',
        dataType: "json",
        async: false,
        contentType: "application/json",
        data: txtData,
        success: function (data) {
            if (data.code === '1') {

            }
        }
    })
}

function setQj() {
    if (app.link === '') {
        alert('全景地址不能为空！')
    } else {
        let link = app.link
        let newTxt = ''
        $.ajax({
            url: 'http://www.ihouse3d.com.cn/qjConfig.txt',
            type: 'GET',
            cache: false,
            success: function (data) {
                if (data === '') {
                    newTxt = link
                } else {
                    newTxt = data + ',' + link
                }

                let txtPath = 'C:/inetpub/wwwroot/qjConfig.txt'
                let txtData = '{"type":"string","pathfilename":"' + txtPath + '","filedata":"' + encode(newTxt) + '"}'
                $.ajax({
                    url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                    type: 'POST',
                    dataType: "json",
                    async: false,
                    contentType: "application/json",
                    data: txtData,
                    success: function (data) {
                        if (data.code === '1') {
                            alert('添加成功！')
                            loadQJ()
                        }
                    }
                })
            }
        })

    }
}

function loadQJ() {
    $('.panoBox').html('')
    $.ajax({
        url: 'http://www.ihouse3d.com.cn/qjConfig.txt',
        type: 'GET',
        cache: false,
        success: function (data) {
            let arr = data.split(',')
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i].split('~')
                let info
                console.log(arr)
                if (item[1] === '1') {
                    info = `<div class="qjitem">
<div class="item-icon">
            <div class="item-icon-item" del="${arr[i]}" onclick="deleteQJ(this)">
            <img src="assets/img/删除.png" alt="" width="30">
            <span>删除</span>
</div>
        </div>
            <iframe src="${item[0]}" frameborder="0"></iframe>
            <div class="kgBox">
<div class="slide-btn" id="${arr[i]}">
    <div class="inner-on">
        <input style="display:none;" type="checkbox" checked>
        <span class="left">显示</span><span class="space">&nbsp;</span><span class="right">&nbsp;</span>
    </div>
</div>


</div>
        </div>`
                } else {
                    info = `<div class="qjitem">
<div class="item-icon">
            <div class="item-icon-item" del="${arr[i]}" onclick="deleteQJ(this)">
            <img src="assets/img/删除.png" alt="" width="30">
            <span>删除</span>
</div>
        </div>
            <iframe src="${item[0]}" frameborder="0"></iframe>
            <div class="kgBox">
<div class="slide-btn" id="${arr[i]}">
    <div class="inner-off" style="left: -51px">
        <input style="display:none;" type="checkbox" checked="false">
        <span class="left">显示</span><span class="space">&nbsp;</span><span class="right">&nbsp;</span>
    </div>
</div>


</div>
        </div>`
                }

                $('.panoBox').append(info)
            }
        },
        error: function () {

        }
    })

    setTimeout(function () {
        $('.qjitem').hover(function () {
            $(this).children('.item-icon').show()
        }, function () {
            $(this).children('.item-icon').hide()
        })
        $('.slide-btn').on('click', function () {
            let obj = $(this).children()[0]
            if (obj.className === "inner-on") {
                obj.style.left = -51 + "px";
                obj.childNodes[1].checked = false;
                obj.className = "inner-off";
                changeQJ(obj.parentNode, '0')
            } else {
                if ($('.inner-on').length !== 0) {
                    $('.inner-on')[0].style.left = -51 + "px";
                    $('.inner-on')[0].childNodes[1].checked = false;
                    $('.inner-on')[0].className = "inner-off";
                }
                obj.style.left = 0;
                obj.childNodes[1].checked = true;
                obj.className = "inner-on";
                changeQJ(obj.parentNode, '1')
            }
        })
        init()
        app.loading = false
    }, 1000)
}

function changeQJ(obj, type) {
    $.ajax({
        url: 'http://www.ihouse3d.com.cn/qjConfig.txt',
        type: 'GET',
        cache: false,
        success: function (data) {
            let itemArr = data.split(',')
            let num
            console.log(itemArr, obj.id)
            for (let i = 0; i < itemArr.length; i++) {
                if (itemArr[i] === obj.id) {
                    num = i
                }
            }
            if (type === '1') {
                let _num
                let item = itemArr.filter(function (ele) {
                    return ele.includes('~1')
                })
                if (item.length !== 0) {
                    for (let i = 0; i < itemArr.length; i++) {
                        if (itemArr[i] === item[0]) {
                            _num = i
                        }
                    }
                    itemArr[_num] = itemArr[_num].split('~')[0] + '~0'
                    $('.slide-btn')[_num].id = itemArr[_num]
                }
            }
            console.log(itemArr[num])
            itemArr[num] = itemArr[num].split('~')[0] + '~' + type
            obj.id = itemArr[num]
            let newTxt = ''
            for (let i = 0; i < itemArr.length; i++) {
                if (i === itemArr.length - 1) {
                    newTxt += itemArr[i]
                } else {
                    newTxt += itemArr[i] + ','
                }
            }
            let txtPath = 'C:/inetpub/wwwroot/qjConfig.txt'
            let txtData = '{"type":"string","pathfilename":"' + txtPath + '","filedata":"' + encode(newTxt) + '"}'
            $.ajax({
                url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                type: 'POST',
                dataType: "json",
                async: false,
                contentType: "application/json",
                data: txtData,
                success: function (data) {
                    if (data.code === '1') {
                    }
                }
            })
        }
    })
}

function deleteQJ(obj) {
    if (confirm('确定要删除吗') === true) {
        let txt = $(obj).attr('del')
        $.ajax({
            type: 'GET',
            cache: false,
            async: false,
            url: 'http://www.ihouse3d.com.cn/qjConfig.txt',
            success: function (data) {
                let arr = data.split(',')
                let num
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].includes(txt)) {
                        num = i
                    }
                }
                console.log(num)
                arr.splice(num, 1)
                let txtPath = 'C:/inetpub/wwwroot/qjConfig.txt'
                let dataTxt = ''
                for (let i = 0; i < arr.length; i++) {
                    if (i === arr.length - 1) {
                        dataTxt += arr[i]
                    } else {
                        dataTxt += arr[i] + ','
                    }
                }
                let txtData = '{"type":"string","pathfilename":"' + txtPath + '","filedata":"' + encode(dataTxt) + '"}'
                $.ajax({
                    url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                    type: 'POST',
                    dataType: "json",
                    async: false,
                    contentType: "application/json",
                    data: txtData,
                    success: function (data) {
                        if (data.code === '1') {
                            loadQJ()
                        }
                    }
                })
            }
        })
    }
}

function changeVideo(obj, type) {
    $.ajax({
        url: 'http://www.ihouse3d.com.cn/videoConfig.txt',
        type: 'GET',
        cache: false,
        success: function (data) {
            let itemArr = data.split(',')
            let num
            for (let i = 0; i < itemArr.length; i++) {
                if (itemArr[i] === obj.id) {
                    num = i
                }
            }
            if (type === '1') {
                let _num
                let item = itemArr.filter(function (ele) {
                    return ele.includes('~1')
                })
                if (item.length !== 0) {
                    for (let i = 0; i < itemArr.length; i++) {
                        if (itemArr[i] === item[0]) {
                            _num = i
                        }
                    }
                    itemArr[_num] = itemArr[_num].split('~')[0] + '~0'
                    $('.slide-btn')[_num].id = itemArr[_num]
                }
            }
            itemArr[num] = itemArr[num].split('~')[0] + '~' + type
            obj.id = itemArr[num]
            let newTxt = ''
            for (let i = 0; i < itemArr.length; i++) {
                if (i === itemArr.length - 1) {
                    newTxt += itemArr[i]
                } else {
                    newTxt += itemArr[i] + ','
                }
            }
            let txtPath = 'C:/inetpub/wwwroot/videoConfig.txt'
            let txtData = '{"type":"string","pathfilename":"' + txtPath + '","filedata":"' + encode(newTxt) + '"}'
            $.ajax({
                url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                type: 'POST',
                dataType: "json",
                async: false,
                contentType: "application/json",
                data: txtData,
                success: function (data) {
                    if (data.code === '1') {

                    }
                }
            })
        }
    })
}

function deleteVideo(obj) {
    if (confirm('确定要删除吗') === true) {
        let txt = $(obj).attr('del')
        $.ajax({
            type: 'GET',
            cache: false,
            async: false,
            url: 'http://www.ihouse3d.com.cn/videoConfig.txt',
            success: function (data) {
                let arr = data.split(',')
                let num
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].includes(txt)) {
                        num = i
                    }
                }
                arr.splice(num, 1)
                let txtPath = 'C:/inetpub/wwwroot/videoConfig.txt'
                let dataTxt = ''
                for (let i = 0; i < arr.length; i++) {
                    if (i === arr.length - 1) {
                        dataTxt += arr[i]
                    } else {
                        dataTxt += arr[i] + ','
                    }
                }
                let txtData = '{"type":"string","pathfilename":"' + txtPath + '","filedata":"' + encode(dataTxt) + '"}'
                $.ajax({
                    url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                    type: 'POST',
                    dataType: "json",
                    async: false,
                    contentType: "application/json",
                    data: txtData,
                    success: function (data) {
                        if (data.code === '1') {
                            loadVideo()
                        }
                    }
                })
            }
        })
    }
}