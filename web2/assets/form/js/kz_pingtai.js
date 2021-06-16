let wuliuFactor = []
let factorValue=0.79

let manufacturers =  new Map()
manufacturers.set("开装","上海市嘉定区马陆镇大治路343号")
var m_strWebService = localStorage.getItem('WebService');

var app=new Vue({
    el:'#app',
    data(){
        return{
            kz_data:{},
            wuliaoList:[],
            model_zhu:[],
            model_cai:[],
            wuliaoSum:0,
            sum_two:0,
            sum:0,
            dan_jia:88888,   //单价
            product_cyle:'', //生产周期
            install_cyle:'', //工期
            gProjectInfo:'',
        }
    },
    methods:{
        kaizhuangData(){
            m_strObjData = $.ajax({
            url: './KZ_OtherExpense.csv',
                async: false,
            });
            this.kz_data= $.parseJSON(m_strObjData.responseText);
        },
        updataItem(int,d){
            if (int==0) {
                this.model_zhu=[]
                this.model_zhu.push(d);
            }
        },
        changeDate(){
            this.wuliaoSum=parseInt(this.model_zhu[0][9]);
            for (var i = 0; i < this.model_cai.length; i++) {
                this.wuliaoSum+=parseInt(this.model_cai[i][9]);
            }
            this.sum_two=0;
            this.sum=0;
            //for (var i = 0; i < this.kz_data.two.length; i++) {
            for (var i = 1; i < this.kz_data.two.length; i++) {   //第1位使用真实物流方法计算
                this.sum_two+=parseInt(this.wuliaoSum*(parseFloat(this.kz_data.two[i].rate)/100));
            }
            let data_1=parseInt(this.wuliaoSum*(parseFloat(this.kz_data.three[0].rate)/100));
            let data_2=parseInt(this.wuliaoSum*(parseFloat(this.kz_data.four[0].rate)/100));
            this.sum=this.wuliaoSum+this.sum_two+data_1+data_2;

            //写入父窗口session,为了其它页面都能访问此session数据
            window.opener.sessionStorage.setItem('board_brand',this.model_zhu[0][5]);
            window.opener.sessionStorage.setItem('totalPrice',this.sum);
            window.opener.sessionStorage.setItem('dan_jia',this.dan_jia);
            //物流价格
            setTimeout(function () {
                GetWuLiuPrice();
            }, 500);
        }
    },
    created(){
        this.dan_jia = sessionStorage.getItem('dan_jia');
        this.product_cyle = sessionStorage.getItem('product_cyle');
        this.install_cyle = sessionStorage.getItem('install_cyle');

        let gProjectInfo = sessionStorage.getItem("kzProjectInfo");
        this.gProjectInfo=$.parseJSON(gProjectInfo);

        this.kaizhuangData();
        let gReportList = sessionStorage.getItem("wuliaoList");
/*        gReportList = gReportList.replace('[[','');
        gReportList = gReportList.replace(/\[/g,'');
        gReportList = gReportList.replace(/\"/g, "");
        this.wuliaoList = gReportList.split("],");*/
        this.wuliaoList = gReportList.split("\r\n");
        //this.kaizhuangData();
        //this.wuliaoList = sessionStorage.getItem('wuliaoList').split("\r\n");

        this.wuliaoList.splice(this.wuliaoList.length-1,1);
        SortArray(this.wuliaoList);
        for (var i = 0; i < this.wuliaoList.length; i++) {
            if (this.wuliaoList[i]!='') {
                //this.wuliaoList[i]=(this.wuliaoList[i]).split(',');
            }
            if (this.wuliaoList[i][0]=='C51441-1121') {
                if (this.model_zhu.length==0) {
                    this.model_zhu.push(this.wuliaoList[i]);
                }
            } else {
                this.model_cai.push(this.wuliaoList[i]);
            }
        }
        GetManufacturers();
        GetParameter();
        this.changeDate();
    }
});

function GetManufacturers()
{
    $.ajax({
        url: m_strWebService + 'Service1.asmx/ExecuteQuery',
        type: "post",
        dataType: "json",
        async:false,
        contentType: "application/x-www-form-urlencoded",
        data:
            {
                Database: "kaizhuang",
                Sql:"select name, address from manufacturer"
            },
        success: function (data)
        {
            if ("1" == data.code) {
                let JData = JSON.parse(data.data);
                let userList = []
                if (true == JData.ok) {
                    let itemArr = JData.Table
                    for (let i = 0; i < itemArr.length; i++) {
                        manufacturers.set(itemArr[i].name,itemArr[i].address);
                    }
                }
            } else {
                console.log(data.msg);
            }
        },
         complete: function (xmlHttpRequest)
         {
         },
         error: function (err) {
                console.log(err);
          }
    });
}

function GetParameter()
{
    $.ajax({
        url: m_strWebService +'Service1.asmx/ExecuteQuery',
        type: "post",
        dataType: "json",
        async:false,
        contentType: "application/x-www-form-urlencoded",
        data:
            {
                Database: "kaizhuang",
                Sql:"select logisticsinfo from parameters"
            },
        success: function (data)
        {
            if ("1" == data.code) {
                let JData = JSON.parse(data.data);
                let userList = []
                if (true == JData.ok) {
                    let itemArr = JData.Table
                    wuliuFactor = itemArr[0].logisticsinfo.split(',');
                }
            } else {
                console.log(data.msg);
            }
        },
        complete: function (xmlHttpRequest)
        {
        },
        error: function (err) {
            console.log(err);
        }
    });
}

let boardWeight = 0;
//取得物流价格
function GetWuLiuPrice()
{
   //物流=1吨1KM*系数*吨数(墙板  1吨72m2)

    //取得板面积
    let arrSize = app.model_zhu[0][3].split('*');
    let boardsArea = (parseFloat(arrSize[1])/1000.0)*(parseFloat(arrSize[2])/1000.0); //宽*高
    boardWeight = boardsArea/72; //板吨数

    let factoryName = app.model_zhu[0][5]; //厂家名称
    let factoryAddr = '';
    if(manufacturers.has(factoryName))
    {
        factoryAddr = manufacturers.get(factoryName);
    }

    let bFind = false;
    //地址需要带上省份，暂时使用省份对比取得系数
    for(let index = 0; index < wuliuFactor.length; ++index)
    {
        let arrData = wuliuFactor[index].split('-');
        let srcData = arrData[0].trim();
        let destData = factoryAddr.substring(0,srcData.length)
        destData = destData.trim();
        if(srcData == destData) //省份
        {
            factorValue =  parseFloat(arrData[1]);  //系数
            bFind = true;
            break;
        }
    }

    if(!bFind)
    {
        factorValue = 0.79;
    }

    app.kz_data.two[0].rate = factorValue;

    if("" != factoryAddr)
    {
        GetDistanceFromAddress(app.gProjectInfo.address,factoryAddr);
    }
}

let gLongitude1="",gLatitude1;
let gLongitude2="",gLatitude12;
let gDistance = "";
let gTimerID = 0;
let gOutTimeCount = 0;

function GetDistanceFromAddress(address1,address2)
{
    gOutTimeCount = 0;
    GetLongitudeAndLatitude1(address1);
    GetLongitudeAndLatitude2(address2);

    gTimerID = window.setInterval(GetDistance,100);
}


function GetLongitudeAndLatitude1(address)
{
    var url = 'https://api.map.baidu.com/geocoder/v2/?ak=eIxDStjzbtH0WtU50gqdXYCz&output=json&address=' + encodeURIComponent(address);
    var formdata = new FormData();
    $.ajax({
        type: "POST",
        url: url,
        dataType: "JSONP",
        async: false,
        success: function(data) {
            if(parseInt(data.status) == 0) {
                gLongitude1 = data.result.location.lng;
                gLatitude1 = data.result.location.lat;
            }
        }
    });
}

function GetLongitudeAndLatitude2(address)
{
    var url = 'https://api.map.baidu.com/geocoder/v2/?ak=eIxDStjzbtH0WtU50gqdXYCz&output=json&address=' + encodeURIComponent(address);
    var formdata = new FormData();
    $.ajax({
        type: "POST",
        url: url,
        dataType: "JSONP",
        async: false,
        success: function(data) {
            if(parseInt(data.status) == 0) {
                gLongitude2 = data.result.location.lng;
                gLatitude2 = data.result.location.lat;
            }
        }
    });
}

function GetDistance()
{
    if(gLongitude1 && gLatitude1  && gLongitude2 && gLatitude2 )
    {
        window.clearInterval(gTimerID);

        var radLat1 = gLatitude1*Math.PI / 180.0;
        var radLat2 = gLatitude2*Math.PI / 180.0;
        var a = radLat1 - radLat2;
        var b = gLongitude1*Math.PI / 180.0 - gLongitude2*Math.PI / 180.0;
        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
            Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
        s = s *6378.137 ;// EARTH_RADIUS;
        s = Math.round(s * 10000) / 10000;

        gDistance = s;

        window.opener.sessionStorage.setItem('project_distance',gDistance);

        //物流价格
        let price = boardWeight * factorValue * gDistance;
        price = price.toFixed(2);
        $('#wuliuPrice').html(price);
        app.sum += parseFloat(price);

        window.opener.sessionStorage.setItem('totalPrice',app.sum);
        window.opener.sessionStorage.setItem('dan_jia',app.dan_jia);
    }

    if(gOutTimeCount > 15)
    {
        window.clearInterval(gTimerID);
    }

    gOutTimeCount += 1;
}

function SortArray(wuliaoList)
{
    let sortArray = new Array();
    for(let index = 0; index < 4; ++index)
        sortArray[index] = new Array();

    for (var i = 0; i < wuliaoList.length; i++)
    {
        //this.wuliaoList[i] = this.wuliaoList[i].split(",");
        if(-1 != wuliaoList[i].indexOf("(主)"))
        {
            sortArray[0].push(wuliaoList[i]);
        }
        else if(-1 != wuliaoList[i].indexOf("(开)"))
        {
            sortArray[1].push(wuliaoList[i]);
        }
        else if(-1 != wuliaoList[i].indexOf("(辅)"))
        {
            sortArray[2].push(wuliaoList[i]);
        }
        else
        {
            sortArray[3].push(wuliaoList[i]);
        }
    }

    let arrData = [];
    for(let index = 0; index < 4; ++index)
    {
        if(sortArray[index].length > 0)
            arrData.push(sortArray[index]);
    }

    let listIndex = 0;
    for(let index = 0; index < arrData.length; ++index)
    {
        for(let k = 0; k < arrData[index].length; ++k)
        {
            wuliaoList[listIndex] =arrData[index][k].split(",");
            ++listIndex;
        }
    }
}

$(function(){
    circle_item();
    $('.ondown').click(function(){
        let _this=$(this).parent().children('.data-table').children('.data-table-conter');
        if (_this.height()==0) {
            $('.kailong_1').css('transform','translate(200%,-50%) rotate(180deg)');
            let h_1=_this.children('.data-table-header').height();
            let h_2=45;
            let l_1=_this.children('.data-table-tr').length;
             $('.data-table').show();
            _this.animate({
                'height':h_1+(h_2*l_1),
                'padding-bottom': '30px'
            });
        } else { 
            $('.kailong_1').css('transform','translate(200%,-50%) rotate(90deg)');
            _this.animate({
                'height':0,
                'padding-bottom': '0px'
            },300,function(){
                $('.data-table').hide();
            });
        }
    });

    $('.data-table-tr').click(function(event) {
        /* Act on the event */
        if ($(this).children('.data-children-conter').length>=1) {
            let l_1=$(this).children('.data-children-conter').children('.data-children-tr').length;
            $(this).siblings().removeClass('active');
            if ($(this).children('.data-children-conter').height()>=45) {
                $('.data-table-conter').height($('.data-table-conter').height()-$(this).children('.data-children-conter'));
                $(this).children('.data-children-conter').css({
                    'height': '0px',
                    'overflow':'hidden' 
                });
                $('.data-table-conter').animate({
                    'height':$('.data-table-conter').height()-l_1*45
                });
                $(this).removeClass('active');
            } else {
                $(this).children('.data-children-conter').css({
                    'height': l_1*45,
                    'overflow':'' 
                });

                $('.data-table-conter').animate({
                    'height':$('.data-table-conter').height()+l_1*45
                });
                $(this).addClass('active');
            }
           
        } else {

        }
    });
});

function circle_item(){
    $("#dom_1").circleChart({
        size: 160,
        value: 15,
        color: "#FF4156",
        backgroundColor: "#696A73",
        text: 0,
        onDraw: function(el, circle) {
            circle.text(Math.round(circle.value) + "%");
        }
    });

    $("#dom_2").circleChart({
        size: 160,
        value: 75,
        color: "#3E98E0",
        backgroundColor: "#696A73",
        text: 0,
        onDraw: function(el, circle) {
            circle.text(Math.round(circle.value) + "%");
        }
    });

    $("#dom_3").circleChart({
        size: 160,
        value: 100,
        color: "#E8E74A",
        backgroundColor: "#696A73",
        text: 0,
        onDraw: function(el, circle) {
            circle.text(Math.round(circle.value) + "%");
        }
    });

    $("#dom_4").circleChart({
        size: 160,
        value: 35,
        color: "#E6BDDE",
        backgroundColor: "#696A73",
        text: 0,
        onDraw: function(el, circle) {
            circle.text(Math.round(circle.value) + "%");
        }
    });
}

//显示加工料单
function OnShowList()
{
    var myDate = new Date();

    //订单号
    let orderNumber = myDate.toLocaleDateString().replace(/\//g,"") + "" + myDate.getHours()+""+myDate.getMinutes()+""+myDate.getSeconds();
    sessionStorage.setItem('orderNumber',orderNumber);

    //订单日期
    let orderDate = myDate.toLocaleDateString() + " " + myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds();
    sessionStorage.setItem('orderDate',orderDate);

    sessionStorage.setItem('wuliaozhucai',JSON.stringify(app.model_zhu));
    sessionStorage.setItem('wuliaofucai',JSON.stringify(app.model_cai));
    //window.open("./kaizhuangzhucai.html","_blank");

    SaveOrder();
}


function OnBaoJiaExport()
{
    let data=[];

    for (var i = 0; i < app.wuliaoList.length; i++) {
        data[i]=[];
        data[i].push(app.wuliaoList[i][0]);
        data[i].push(app.wuliaoList[i][1]);
        data[i].push(app.wuliaoList[i][2]);
        data[i].push(app.wuliaoList[i][3]);
        data[i].push(app.wuliaoList[i][4]);
        data[i].push(app.wuliaoList[i][5]);
        data[i].push(app.wuliaoList[i][6]);
        data[i].push(app.wuliaoList[i][7]);
        data[i].push(app.wuliaoList[i][8]);
        data[i].push(app.wuliaoList[i][9]);
        data[i] = data[i].join(",");
    }

    let strData = data.join('\n');
    strData += '\r\n';
    strData += `合计:${app.wuliaoSum}`

    strData += "\r\n";
    strData += "\r\n";
    strData += "TWO,其它费用,项,百分比,价格,仅供参考按实际结算\n";

    for(var i = 0; i < app.kz_data.two.length; ++i)
    {
        let item = app.kz_data.two[i];
        strData += `${i+1},${item.cost},${item.item},${item.rate},${parseInt(app.wuliaoSum*(parseFloat(item.rate)/100))},${item.description}\n`;
    }
    strData += `小计:${app.sum_two},,,,,\n`;

    strData += "\r\n";
    strData += `THREE,${app.kz_data.three[0].cost},${app.kz_data.three[0].item},${app.kz_data.three[0].rate}%,${parseInt(app.wuliaoSum*(parseFloat(app.kz_data.three[0].rate)/100))},${app.kz_data.three[0].description}\n`;

    strData += "\r\n";
    strData += `FOUR,${app.kz_data.four[0].cost},${app.kz_data.four[0].item},${app.kz_data.four[0].rate}%,${parseInt(app.wuliaoSum*(parseFloat(app.kz_data.four[0].rate)/100))},${app.kz_data.three[0].description}\n`;
    strData += `合计:${app.sum}\r\n`;

    strData += "\r\n";
    strData += `报价说明\r\n`;
    for(var i = 0; i < app.kz_data.five.length; ++i)
    {
        let item = app.kz_data.five[i];
        strData += `${i+1},${item.part},${item.description}\n`;
    }

    exp='物料编码,物料名称,材质,规格,颜色,品牌,数量,单位,单价,小计\n'+strData;
    exportExcel(exp);
}

function exportExcel(csv,objData) {
    var sheet = csv2sheet(csv,objData);
    var blob = sheet2blob(sheet);
    openDownloadDialog(blob, '导出.xlsx');
}

// csv转sheet对象
function csv2sheet(csv,objData) {
    var sheet = {}; // 将要生成的sheet
    csv = csv.split('\n');
    csv.forEach(function(row, i) {
        row = row.split(',');
        if(i == 0) {
            sheet['!ref'] = 'A1:'+String.fromCharCode(65+row.length-1)+(csv.length-1);
            if(objData){
                sheet['!cols'] =objData;
            }
        }
        row.forEach(function(col, j) {
            sheet[String.fromCharCode(65+j)+(i+1)] = {v: col};
        });
    });
    return sheet;
}

// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
function sheet2blob(sheet, sheetName) {
    sheetName = sheetName || 'sheet1';
    var workbook = {
        SheetNames: [sheetName],
        Sheets: {}
    };
    workbook.Sheets[sheetName] = sheet;
    // 生成excel的配置项
    var wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
    };
    var wbout = XLSX.write(workbook, wopts);
    var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
    // 字符串转ArrayBuffer
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    return blob;
}

/**
 * 通用的打开下载对话框方法，没有测试过具体兼容性
 * @param url 下载地址，也可以是一个blob对象，必选
 * @param saveName 保存文件名，可选
 */
function openDownloadDialog(url, saveName)
{
    if(typeof url == 'object' && url instanceof Blob)
    {
        url = URL.createObjectURL(url); // 创建blob地址
    }
    var aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    var event;
    if(window.MouseEvent) event = new MouseEvent('click');
    else
    {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
}