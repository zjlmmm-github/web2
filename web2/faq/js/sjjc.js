window.onload = function () {
    document.getElementById('xinshou').style.display = 'none'
    document.getElementById('window').style.display = 'none'
    document.getElementById('light').style.display = 'none'
    document.getElementById('apk').style.display = 'none'
    document.getElementById('modelUp').style.display = 'none'
    document.getElementById('web').style.display = 'none'
    document.getElementById('buzhi').style.display = 'none'
    document.getElementById('qita').style.display = 'none'
}

function handleChangeClick() {
    if (document.getElementById('xinshou').style.display === 'none') {
        document.getElementById('xinshou').style.display = 'block'
        document.getElementById('xinshoujia').innerHTML = '&#xe713;'
    } else {
        document.getElementById('xinshou').style.display = 'none'
        document.getElementById('xinshoujia').innerHTML = '&#xe640;'
    }

}

function handleChangeWindow() {
    if (document.getElementById('window').style.display === 'none') {
        document.getElementById('window').style.display = 'block'
        document.getElementById('menchuanjia').innerHTML = '&#xe713;'
    } else {
        document.getElementById('window').style.display = 'none'
        document.getElementById('menchuanjia').innerHTML = '&#xe640;'
    }
}

function shejirumen() {
    document.getElementById('jinjie').style.display = 'none'
    document.getElementById('mengchuanxinshou').style.display = 'none'
    document.getElementById('dayin').style.display = 'none'
    document.getElementById('huizhi').style.display = 'none'
    document.getElementById('yangguangxinshou').style.display = 'none'
    document.getElementById('yixing').style.display = 'none'
    document.getElementById('bieshuyun').style.display = 'none'
    document.getElementById('shejirumen').style.display = 'block'
    document.getElementById('detail-text').innerHTML = ''
    document.getElementById('daohang').innerHTML = '<span class="detail-header">当前位置：</span><span class="nav">' +
        '首页 > <span onclick="shuaxin()" onmouseover="mOver(this)" onmouseout="nOut(this)" style="cursor: pointer;">浏览器问题</span></span>' +
        ' > 新手须知 > <span onclick="shejirumen()" onmouseover="mOver(this)" onmouseout="nOut(this)" style="cursor: pointer;">360浏览器</span>'
}

function jinjie() {
    document.getElementById('shejirumen').style.display = 'none'
    document.getElementById('mengchuanxinshou').style.display = 'none'
    document.getElementById('dayin').style.display = 'none'
    document.getElementById('huizhi').style.display = 'none'
    document.getElementById('yangguangxinshou').style.display = 'none'
    document.getElementById('yixing').style.display = 'none'
    document.getElementById('bieshuyun').style.display = 'none'
    document.getElementById('jinjie').style.display = 'block'
    document.getElementById('detail-text').innerHTML = ''
    document.getElementById('daohang').innerHTML = '<span class="detail-header">当前位置：</span><span class="nav">首页 > <span\n' +
        '                onclick="shuaxin()" onmouseover="mOver(this)" onmouseout="nOut(this)" style="cursor: pointer;">设计教程</span></span> > 新手须知 > <span\n' +
        '                onclick="jinjie()" onmouseover="mOver(this)" onmouseout="nOut(this)" style="cursor: pointer;">进阶功能</span>'
}

function mOver(obj) {
    obj.style.color = '#1890ff'
}

function mOut(obj) {
    obj.style.color = '#333333'
}

function nOut(obj) {
    obj.style.color = '#898989'
}


