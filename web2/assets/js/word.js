var E = window.wangEditor
var editor = new E('#word')
var name = cookie.name
var folder = cookie.fold
// 或者 const editor = new E( document.getElementById('div1') )
editor.config.height = 700
editor.config.uploadImgShowBase64 = true
editor.config.showLinkImg = false
editor.create()
// var loadTxt = loadWord()
// editor.txt.html(decodeURIComponent(loadTxt))
$(function () {
    $('.active-class').click()
})

function changePage(e, obj) {
    $('.active-class').removeClass('active-class')
    $(obj).addClass('active-class')
    $('#word').hide()
    $('.upload-btn').hide()
    $('.my-table').hide()
    if (e === 'bj') {
        $('#word').show()
        $('.upload-btn').show()
        $('.title-box').show()
    } else if (e === 'wd') {
        openName = ''
        editor.txt.html('')
        $('.my-table').show()
        $('.title-box').hide()
        loadWordList()
    }
}


function guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

var otherName = ''
var openName = ''

function saveWord() {
    console.log(openName)
    if (openName === '') {
        $('#saveBox').show()
    } else {
        _loadWord(openName)

    }
}

function otherSave(obj) {
    $('#_saveBox').show()
    let father = obj.parentNode
    otherName = $(father).attr('word')
}

function closeWord() {
    $('#saveBox').hide()
    document.getElementById('wordName').value = ''
}

function closeOther() {
    $('#_saveBox').hide()
    document.getElementById('_wordName').value = ''
}

function _saveWord() {
    let _wordName = document.getElementById('wordName').value
    let wordName = document.getElementById('wordName').value
    $.ajax({
        type: 'GET',
        url: 'http://www.ihouse3d.com.cn/users/' + folder + '/' + name + '/wordList.txt?time=' + guid(),
        async: false,
        success: function (data) {
            console.log(data)
            if (data !== '') {
                wordName = data + ',' + wordName + '~' + getDate()
            } else {
                wordName = wordName + '~' + getDate()
            }
        },
        error: function () {
            wordName = wordName + '~' + getDate()
        }
    })
    console.log(wordName)
    let path = 'C:/inetpub/wwwroot/users/' + folder + '/' + name + '/wordList.txt'
    let _data = '{"type":"string","pathfilename":"' + path + '","filedata":"' + encode(wordName) + '"}'
    $.ajax({
        url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
        type: 'POST',
        async: false,
        dataType: "json",
        contentType: "application/json",
        data: _data,
        success: function (data) {
            if (data.code === '1') {
                _loadWord(_wordName)
                openName = _wordName
            }
        }
    })

}

function _loadWord(wordName) {
    let txt = editor.txt.html()
    txt = encodeURIComponent(txt)
    let path = 'C:/inetpub/wwwroot/users/' + folder + '/' + name + '/word/' + wordName + '.txt'
    let _data = '{"type":"string","pathfilename":"' + path + '","filedata":"' + encode(txt) + '"}'
    $.ajax({
        url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
        type: 'POST',
        dataType: "json",
        contentType: "application/json",
        data: _data,
        success: function (data) {
            if (data.code === '1') {
                alert('保存成功！')
                closeWord()
            }
        }
    })
}

function encode(str) {
// 对字符串进行编码
    let encode = encodeURI(str);
// 对编码的字符串转化base64
    let base64 = btoa(encode);
    return base64;
}

function loadWordList() {
    $.ajax({
        type: 'GET',
        url: 'http://www.ihouse3d.com.cn/users/' + folder + '/' + name + '/wordList.txt?time=' + guid(),
        success: function (data) {
            $('#wordList').html('')
            data = data.split(',')
            for (let i = 0; i < data.length; i++) {
                let item = data[i]
                item = item.split('~')
                let num = i + 1
                let info = `<tr word="${item[0]}">
            <td>${num}</td>
            <td colspan="3" onclick="openWord(this)">${item[0]}</td>
            <td>${item[1]}</td>
            <td word="${item[0]}" class="wordIcon"><i class="el-icon-folder-opened" onclick="openWord(this)" title="打开"></i>
            <i class="el-icon-delete" onclick="deleteWord(this)" title="删除"></i><i class="el-icon-folder" title="另存为" onclick="otherSave(this)"></i>
            <i class="el-icon-share" title="分享" onclick="shareWord(this)"></i></td>
            
        </tr>`
                $('#wordList').append(info)
            }
        }
    })
}

function shareWord(obj) {
    let father = obj.parentNode
    let wordName = $(father).attr('word')
    let url = folder + '/' + name + '/word/' + wordName + '.txt'
    // window.open('shareWord.html?share=' + url)
    $('#shareCode').html('')
    $('#shareCode').qrcode('http://www.ihouse3d.com/shareWord.html?share=' + url);
    document.getElementById('shareTxt').innerHTML = 'http://www.ihouse3d.com/shareWord.html?share=' + url
    $('#codeBox').show()
}

function closeShare() {
    $('#codeBox').hide()
}

function getDate() {
    let timezone = 8;
    let offset_GMT = new Date().getTimezoneOffset();
    let nowDate = new Date().getTime();
    let today = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
    let date = today.getFullYear() + "/" + twoDigits(today.getMonth() + 1) + "/" + twoDigits(today.getDate());
    let time = twoDigits(today.getHours()) + ":" + twoDigits(today.getMinutes()) + ":" + twoDigits(today.getSeconds());
    let data = date + ' ' + time
    return data
}

function twoDigits(val) {
    if (val < 10) return "0" + val;
    return val;
}

function openWord(obj) {
    let father = obj.parentNode
    let wordName = $(father).attr('word')
    openName = wordName
    let txt = loadWord(wordName)
    editor.txt.html(decodeURIComponent(txt))
    $('#bjBtn').click()
}

function deleteWord(obj) {
    if (confirm('确定要删除吗') === true) {
        let father = obj.parentNode
        let wordName = $(father).attr('word')
        father = father.parentNode
        let index = $(father).index()
        $.ajax({
            type: 'GET',
            url: 'http://www.ihouse3d.com.cn/users/' + folder + '/' + name + '/wordList.txt?time=' + guid(),
            success: function (data) {
                data = data.split(',')
                data.splice(index, 1)
                console.log(data)
                let txt = ''
                for (let i = 0; i < data.length; i++) {
                    if (i === data.length - 1) {
                        txt += data[i]
                    } else {
                        txt += data[i] + ','
                    }
                }
                let path = 'C:/inetpub/wwwroot/users/' + folder + '/' + name + '/wordList.txt'
                let _data = '{"type":"string","pathfilename":"' + path + '","filedata":"' + encode(txt) + '"}'
                $.ajax({
                    url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                    type: 'POST',
                    async: false,
                    dataType: "json",
                    contentType: "application/json",
                    data: _data,
                    success: function (data) {
                        if (data.code === '1') {
                            alert('删除成功!')
                            $('.active-class').click()
                        }
                    }
                })
            }
        })
    }

}

function loadWord(wordName) {
    let txt
    $.ajax({
        type: 'GET',
        url: 'http://www.ihouse3d.com.cn/users/' + folder + '/' + name + '/word/' + wordName + '.txt?time=' + guid(),
        async: false,
        success: function (data) {
            txt = data
        },
        error: function () {
            txt = ''
        }
    })
    return txt
}

function _otherSave() {
    let txt = loadWord(otherName)
    let _wordName = document.getElementById('_wordName').value
    let wordName = document.getElementById('_wordName').value
    $.ajax({
        type: 'GET',
        url: 'http://www.ihouse3d.com.cn/users/' + folder + '/' + name + '/wordList.txt?time=' + guid(),
        async: false,
        success: function (data) {
            console.log(data)
            if (data !== '') {
                wordName = data + ',' + wordName + '~' + getDate()
            } else {
                wordName = wordName + '~' + getDate()
            }
        },
        error: function () {
            wordName = wordName + '~' + getDate()
        }
    })
    let path = 'C:/inetpub/wwwroot/users/' + folder + '/' + name + '/wordList.txt'
    let _data = '{"type":"string","pathfilename":"' + path + '","filedata":"' + encode(wordName) + '"}'
    $.ajax({
        url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
        type: 'POST',
        async: false,
        dataType: "json",
        contentType: "application/json",
        data: _data,
        success: function (data) {
            if (data.code === '1') {
                let path = 'C:/inetpub/wwwroot/users/' + folder + '/' + name + '/word/' + _wordName + '.txt'
                let _data = '{"type":"string","pathfilename":"' + path + '","filedata":"' + encode(txt) + '"}'
                $.ajax({
                    url: 'http://www.ihouse3d.com.cn:5001/api/uploadfile',
                    type: 'POST',
                    dataType: "json",
                    contentType: "application/json",
                    data: _data,
                    success: function (data) {
                        if (data.code === '1') {
                            alert('保存成功！')
                            closeOther()
                            $('.active-class').click()
                            otherName = ''
                        }
                    }
                })
            }
        }
    })
}