$(function () {
    for (let i = 9; i < 27; i++) {
        $('.item').eq(i).hide()
    }
    $("#myPage").sPage({
        page: 1,//当前页码，必填
        total: 27,//数据总条数，必填
        pageSize: 9,//每页显示多少条数据，默认10条
        totalTxt: "共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
        showTotal: true,//是否显示总条数，默认关闭：false
        showSkip: true,//是否显示跳页，默认关闭：false
        showPN: true,//是否显示上下翻页，默认开启：true
        prevPage: "上一页",//上翻页文字描述，默认“上一页”
        nextPage: "下一页",//下翻页文字描述，默认“下一页”
        backFun: function (page) {
            $('.item').hide()
            let num = (page - 1) * 9
            for (let i = num; i < num + 9; i++) {
                $('.item').eq(i).show()
            }
            // if (page === 1) {
            //     for (let i = 9; i < 18; i++) {
            //         $('.item').eq(i).hide()
            //     }
            //     for (let i = 0; i < 9; i++) {
            //         $('.item').eq(i).show()
            //     }
            // } else {
            //     for (let i = 9; i < 18; i++) {
            //         $('.item').eq(i).show()
            //     }
            //     for (let i = 0; i < 9; i++) {
            //         $('.item').eq(i).hide()
            //     }
            // }
        }
    })
    $('.itemBigPic').on('click', function () {
        let father = this.parentNode
        // let index = $(father).index()
        // index += 1
        // if (index < 10) {
        //     index = '0' + index
        // }
        // let path = 'echarts/download/demo' + index + '.zip'

        let box=$(father).children('.itemName')
        let _box=box.children()[0]
        let txt=$(_box).children()[0]
        window.open(txt.href)
    })
})