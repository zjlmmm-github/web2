let id = 1000
var app = new Vue({
    el: '#app',
    data: function () {
        return {
            yubi: '',
            defaultProps1: {
                children: 'children',
                label: 'label'
            },
            mapClassArr: [],
            factoryName: "开装",
            factoryNames: [],
            className: "壁布硅钙板",
            classNames: [],
            taobaoLink: '',
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            gxName: '',
            modelClass: '',
            modelClassArr: [],
            loading: false,
            disDate: false,
            disType: false,
            typeName1: '',
            typeName2: '',
            typeName: '',
            shareName: '',
            mzyMap: '',
            mzyMapchang: '',
            mzyMapkuan: '',
            fname: '',
            mzyType: '',
            mzyTypeArr: [],
            wzType: '',
            newclassm11: '',
            newclassm12: '其他',
            newclassm13: '其他',
            newclassm21: '',
            newclassm22: '',
            newclassm23: '其他',
            newclassm31: '',
            newclassm32: '',
            newclassm33: '',
            ocn: '',
            ncn: '',
            mchang: '',
            mkuan: '',
            mgao: '',
            modelTypeArr3: [],
            modelTypeArr1: [],
            modelTypeArr2: [],
            modelType1: '',
            modelType2: '',
            modelType3: '',
            fztype2: '通用',
            mName: '',
            sx: '',
            sx1: '',
            newclass11: '',
            newclass12: '',
            newclass13: '',
            newclass21: '',
            newclass22: '',
            newclass23: '',
            newclass31: '',
            newclass32: '',
            newclass33: '',
            xrtype: '普通',
            xrtype1: '',
            xrArr: [{
                value: '0',
                label: '普通'
            }, {
                value: '1',
                label: '高光'
            }, {
                value: '2',
                label: '平光'
            }, {
                value: '3',
                label: '哑光'
            }],
            fztype: '通用',
            fztype1: '',
            fzArr: [{
                value: '0',
                label: '通用'
            }, {
                value: '1',
                label: '地面'
            }, {
                value: '2',
                label: '墙面'
            }, {
                value: '3',
                label: '顶面'
            }],
            addType: '其他',
            addType2: '其他',
            typeArr2: [],
            typeArr: [],
            addchang: '',
            addkuan: '',
            addName: '',
            addchang1: '',
            addkuan1: '',
            addName1: '',
            kaishi: '尚未开通',
            daoqi: '尚未开通',
            tishi: '3240云币',
            zhe: '4.5',
            shen: '3960云币',
            search: '',
            gongneng1: false,
            kai1: true,
            guan1: false,
            gongneng2: false,
            guan2: false,
            kai2: true,
            gongneng3: false,
            guan3: false,
            kai3: true,
            gongneng4: false,
            guan4: false,
            kai4: true,
            gongneng5: false,
            guan5: false,
            kai5: true,
            gongneng6: false,
            guan6: false,
            kai6: true,
            gongneng7: false,
            guan7: false,
            kai7: true,
            gongneng8: false,
            guan8: false,
            kai8: true,
            gongneng9: false,
            guan9: false,
            kai9: true,
            gongneng15: false,
            guan15: false,
            kai15: true,
            gongneng16: false,
            guan16: false,
            kai16: true,
            gongneng17: false,
            guan17: false,
            kai17: true,
            input: '3D云设计',
            input1: '',
            name: '',
            password: '',
            password1: '',
            options1: [],
            value1: '',
            tel: '',
            qqNum: '',
            date1: '',
            name1: '',
            password0: '123456',
            password2: '123456',
            value3: '',
            options2: [{
                value: '选项1',
                label: '企业用户'
            }, {
                value: '选项2',
                label: '设计师'
            },],
            tel1: '',
            qqNum1: '',
            date2: '',
            checked: false,
            change: true,
            addClassObj: ''
        }
    },
    mounted() {
        if (ut === '11') {
            console.log(774)
            this.options2 = [{
                value: '选项1',
                label: '企业用户'
            }, {
                value: '选项2',
                label: '设计师'
            }, {
                value: '选项3',
                label: '普通用户'
            }
            ]
        }
        let _this = this
        let csvUrl = ''
        if (companyId === '2') {
            csvUrl = 'http://www.ihouse3d.com.cn/ihouse/data/texture/huawen.csv?a=' + guid()
        } else {
            csvUrl = m_strWebService + 'users/' + folder + '/huawen_upload.csv?a=' + guid()
        }
        axios.get(csvUrl).then(function (data) {
            data = data.data
            strData = (data || '').split("\r\n");
            strData = contains(strData, '');
            strData.forEach(function (item, index) {
                strData[index] = (item || '').split(",");
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
            _this.typeArr = []
            _this.typeArr2 = []

            for (let i = 0; i < categoryType.length; i++) {
                let item = {
                    value: categoryType[i],
                    label: categoryType[i]
                }
                _this.typeArr.push(item)
            }
            let itemArr = secondType[0]
            for (let i = 0; i < itemArr.length; i++) {
                let item = {
                    value: itemArr[i],
                    label: itemArr[i]
                }
                _this.typeArr2.push(item)
            }
        }).catch(function () {
            categoryType = ['其他']
            secondType = [['其他']]
        })
    },
    methods: {
        handleNodeClick(data) {

        },
        appendMap(node, data) {

        },
        append(node, data) {
            let _this = this
            const parent = node.parent;
            if (!data.children) {
                document.getElementById('addModelClass3').style.display = 'block'
                console.log(parent, parent.data.value)
                _this.newclassm32 = parent.data.value
                _this.newclassm31 = parent.parent.data.value
            } else {
                if (!data.children[0].children) {
                    document.getElementById('addModelClass2').style.display = 'block'
                    _this.newclassm21 = parent.data.value

                } else {
                    document.getElementById('addModelClass1').style.display = 'block'

                }
            }
        },
        deleteClass(node, data) {
            let _this = this
            const parent = node.parent;
            if (confirm('确定要删除吗') === true) {
                if (!data.children) {
                    let txt = node.parent.parent.label + ',' + node.parent.label + ',' + data.label
                    deletClass(txt, '3')
                } else {
                    if (!data.children[0].children) {
                        let txt = node.parent.label + ',' + data.label
                        deletClass(txt, '2')
                    } else {
                        let txt = data.label
                        deletClass(txt, '1')
                    }
                }
            }
        },
        deleteMapClass(node, data) {
            let _this = this
            const parent = node.parent;
            console.log(data)
            if (confirm('确定要删除吗') === true) {
                if (data.children.length === 0) {
                    let txt = node.parent.label + ',' + data.label
                    deleteMapClass(txt, '2')
                } else {
                    let txt = data.label
                    deleteMapClass(txt, '1')
                }
            }
        },
        customLoad() {
            let dom1 = document.getElementById('guan1').parentNode
            let dis1 = dom1.style.display
            let dom2 = document.getElementById('guan2').parentNode
            let dis2 = dom2.style.display
            let dom3 = document.getElementById('guan3').parentNode
            let dis3 = dom3.style.display
            let dom4 = document.getElementById('guan4').parentNode
            let dis4 = dom4.style.display
            let dom5 = document.getElementById('guan5').parentNode
            let dis5 = dom5.style.display
            let dom6 = document.getElementById('guan6').parentNode
            let dis6 = dom6.style.display
            let dom7 = document.getElementById('guan7').parentNode
            let dis7 = dom7.style.display
            let dom8 = document.getElementById('guan8').parentNode
            let dis8 = dom8.style.display
            let dom9 = document.getElementById('guan9').parentNode
            let dis9 = dom9.style.display
            let dom15 = document.getElementById('guan15').parentNode
            let dis15 = dom15.style.display
            let dom16 = document.getElementById('guan16').parentNode
            let dis16 = dom16.style.display
            let dom17 = document.getElementById('guan17').parentNode
            let dis17 = dom17.style.display
            if (dis1 === 'none') {
                this.gongneng1 = this.kai1
            } else {
                this.gongneng1 = this.guan1
            }
            if (dis2 === 'none') {
                this.gongneng2 = this.kai2
            } else {
                this.gongneng2 = this.guan2
            }
            if (dis3 === 'none') {
                this.gongneng3 = this.kai3
            } else {
                this.gongneng3 = this.guan3
            }
            if (dis4 === 'none') {
                this.gongneng4 = this.kai4
            } else {
                this.gongneng4 = this.guan4
            }
            if (dis5 === 'none') {
                this.gongneng5 = this.kai5
            } else {
                this.gongneng5 = this.guan5
            }
            if (dis6 === 'none') {
                this.gongneng6 = this.kai6
            } else {
                this.gongneng6 = this.guan6
            }
            if (dis7 === 'none') {
                this.gongneng7 = this.kai7
            } else {
                this.gongneng7 = this.guan7
            }
            if (dis8 === 'none') {
                this.gongneng8 = this.kai8
            } else {
                this.gongneng8 = this.guan8
            }
            if (dis9 === 'none') {
                this.gongneng9 = this.kai9
            } else {
                this.gongneng9 = this.guan9
            }
            if (dis15 === 'none') {
                this.gongneng15 = this.kai15
            } else {
                this.gongneng15 = this.guan15
            }
            if (dis16 === 'none') {
                this.gongneng16 = this.kai16
            } else {
                this.gongneng16 = this.guan16
            }
            if (dis17 === 'none') {
                this.gongneng17 = this.kai17
            } else {
                this.gongneng17 = this.guan17
            }
            if (this.gongneng1 === false) {
                gn1 = '0'
            } else {
                gn1 = '1'
            }
            if (this.gongneng2 === false) {
                gn2 = '0'
            } else {
                gn2 = '1'
            }
            if (this.gongneng3 === false) {
                gn3 = '0'
            } else {
                gn3 = '1'
            }
            if (this.gongneng4 === false) {
                gn4 = '0'
            } else {
                gn4 = '1'
            }
            if (this.gongneng5 === false) {
                gn5 = '0'
            } else {
                gn5 = '1'
            }
            if (this.gongneng6 === false) {
                gn6 = '0'
            } else {
                gn6 = '1'
            }
            if (this.gongneng7 === false) {
                gn7 = '0'
            } else {
                gn7 = '1'
            }
            if (this.gongneng8 === false) {
                gn8 = '0'
            } else {
                gn8 = '1'
            }
            if (this.gongneng9 === false) {
                gn9 = '0'
            } else {
                gn9 = '1'
            }
            if (this.gongneng15 === false) {
                gn15 = '0'
            } else {
                gn15 = '1'
            }
            if (this.gongneng16 === false) {
                gn16 = '0'
            } else {
                gn16 = '1'
            }
            if (this.gongneng17 === false) {
                gn17 = '0'
            } else {
                gn17 = '1'
            }
            _customLoad()
        },
        openAddBox(type) {
            mapLoadType = type
            let _this = this
            _this.typeArr = []
            _this.typeArr2 = []
            let obj = document.getElementsByClassName('active-class')[0]
            if (obj.innerHTML === '平台共享库') {
                for (let i = 0; i < categoryType.length; i++) {
                    let item = {
                        value: categoryType[i],
                        label: categoryType[i]
                    }
                    _this.typeArr.push(item)
                }
                if (secondType.length !== 0) {
                    let itemArr = secondType[0]
                    for (let i = 0; i < itemArr.length; i++) {
                        let item = {
                            value: itemArr[i],
                            label: itemArr[i]
                        }
                        _this.typeArr2.push(item)
                    }
                }
            } else {

                let item = {
                    value: '墙板',
                    label: '墙板'
                }
                _this.typeArr.push(item)
                if (secondType.length !== 0) {
                    let itemArr = secondType[33]
                    for (let i = 0; i < itemArr.length; i++) {
                        let item = {
                            value: itemArr[i],
                            label: itemArr[i]
                        }
                        _this.typeArr2.push(item)
                    }
                }
            }

            document.getElementById('addMaps').style.display = 'block'
        },
        openAddModel(type) {
            changeUUid = ''
            modelLoadType = type
            document.getElementById('newModel').style.display = 'block'
            document.getElementById('newModelName').setAttribute('disabled', 'disabled')
            openNewModel()
        },
        loadModelClass() {
            let _this = this
            _this.modelClassArr.length = 0
            for (let i = 0; i < categoryType.length; i++) {
                let item = {
                    value: categoryType[i],
                    label: categoryType[i],
                    children: []
                }
                _this.modelClassArr.push(item)
            }

            for (let i = 0; i < secondType.length; i++) {
                let itemArr = secondType[i]
                for (let a = 0; a < itemArr.length; a++) {
                    let item = {
                        value: itemArr[a],
                        label: itemArr[a],
                        children: []
                    }
                    _this.modelClassArr[i].children.push(item)
                }
            }
            console.log(levelThreeType)
            for (let i = 0; i < levelThreeType.length; i++) {
                let itemArr = levelThreeType[i]
                for (let a = 0; a < itemArr.length; a++) {
                    let _itemArr = itemArr[a]
                    for (let b = 0; b < _itemArr.length; b++) {
                        let item = {
                            value: _itemArr[b],
                            label: _itemArr[b]
                        }
                        _this.modelClassArr[i].children[a].children.push(item)
                    }
                }
            }
        },
        loadMapClass() {
            let _this = this
            _this.mapClassArr.length = 0
            console.log(categoryType)
            for (let i = 0; i < categoryType.length; i++) {
                let item = {
                    value: categoryType[i],
                    label: categoryType[i],
                    children: []
                }
                _this.mapClassArr.push(item)
            }
            console.log(secondType)

            for (let i = 0; i < secondType.length; i++) {
                let itemArr = secondType[i]
                for (let a = 0; a < itemArr.length; a++) {
                    let item = {
                        value: itemArr[a],
                        label: itemArr[a],
                        children: []
                    }
                    _this.mapClassArr[i].children.push(item)
                }
            }


        },
        closeNewModel() {
            document.getElementById('newModel').style.display = 'none'
            modelLoadType = ''
            taobaolinkType = false
            this.taobaoLink = ''
        },
        newClass1() {
            closeAddBox()
            document.getElementById('newClass1').style.display = 'block'
        },
        newClass2() {
            document.getElementById('mapNewClass').style.display = 'block'
        },
        closeNewClass1() {
            document.getElementById('newClass1').style.display = 'none'
            document.getElementById('addMaps').style.display = 'block'
        },
        closeNewClass2() {
            document.getElementById('newClass2').style.display = 'none'
            document.getElementById('addMaps').style.display = 'block'
        },
        loadNewClass1() {
            let _this = this
            let newClass1 = _this.newclass11
            let newClass2 = _this.newclass12
            if (newClass1 === '' || newClass2 === '') {
                alert('请完整填写分类信息！')
            } else {

                let newClassItem1 = {
                    value: newClass1,
                    label: newClass1
                }
                let newClassItem2 = {
                    value: newClass2,
                    label: newClass2
                }
                let itemArr = []
                itemArr = categoryType.filter(function (ele) {
                    return ele === newClass1
                })
                console.log(itemArr)

                if (itemArr.length === 0) {
                    _this.addType = newClass1
                    _this.addType2 = newClass2
                    _this.typeArr.push(newClassItem1)
                    _this.typeArr2.push(newClassItem2)
                    categoryType.push(newClass1)
                    let item = [newClass2]
                    secondType.push(item)
                    _this.closeNewClass1()
                } else {
                    alert('该分类已存在！')
                }
            }
        },
        loadNewClass2() {
            let _this = this
            let newClass1 = _this.newclass21
            let newClass2 = _this.newclass22
            if (newClass2 === '') {
                alert('请完整填写分类信息！')
            } else {
                let num = 0
                for (let i = 0; i < categoryType.length; i++) {
                    if (newClass1 === categoryType[i]) {
                        num = i
                    }
                }
                let newClassItem2 = {
                    value: newClass2,
                    label: newClass2
                }
                let itemArr = []
                itemArr = secondType[num].filter(function (ele) {
                    return ele === newClass2
                })
                if (itemArr.length === 0) {
                    _this.typeArr2.push(newClassItem2)
                    _this.addType = newClass1
                    _this.addType2 = newClass2
                    secondType[num].push(newClass2)
                    _this.closeNewClass2()
                } else {
                    alert('该分类已存在')
                }
            }
        },
        _newClass1() {
            // this.closeNewModel()
            document.getElementById('newClassm1').style.display = 'block'
        },
        _newClass2() {
            // this.closeNewModel()
            document.getElementById('newClassm2').style.display = 'block'
            this.newclassm21 = this.modelType1
        },
        _newClass3() {
            // this.closeNewModel()
            document.getElementById('newClassm3').style.display = 'block'
            this.newclassm31 = this.modelType1
            this.newclassm32 = this.modelType2
        },
        closeModelClass1() {
            document.getElementById('addModelClass1').style.display = 'none'
        },
        closeModelClass2() {
            document.getElementById('addModelClass2').style.display = 'none'
        },
        closeModelClass3() {
            document.getElementById('addModelClass3').style.display = 'none'
        },
        newModelClass1() {
            let _this = this
            let class1 = _this.newclassm11
            let class2 = _this.newclassm12
            let class3 = _this.newclassm13
            if (class1 === '' || class2 === '' || class3 === '') {
                alert('请完整填写分类信息！')
            } else {
                let item = {
                    value: class1,
                    label: class1,
                    children: []
                }
                let item1 = {
                    value: class2,
                    label: class2,
                    children: []
                }
                let item2 = {
                    value: class3,
                    label: class3
                }

                let itemArr = []
                itemArr = _this.modelClassArr.filter(function (ele) {
                    return ele.value === class1
                })
                if (itemArr.length === 0) {
                    item1.children.push(item2)
                    item.children.push(item1)
                    _this.modelClassArr.push(item)
                    _this.closeModelClass1()
                    _this.httpClass(class1, class2, class3)
                } else {
                    alert('该分类已存在！')
                }
            }

        },
        newModelClass2() {
            let _this = this
            let class1 = _this.newclassm21
            let class2 = _this.newclassm22
            let class3 = _this.newclassm23
            if (class2 === '' || class3 === '') {
                alert('请完整填写分类信息！')
            } else {
                let num
                for (let i = 0; i < _this.modelClassArr.length; i++) {
                    if (_this.modelClassArr[i].value === class1) {
                        num = i
                    }
                }
                let item = {
                    value: class2,
                    label: class2,
                    children: []
                }
                let item1 = {
                    value: class3,
                    label: class3,
                }

                let itemArr = []
                itemArr = _this.modelClassArr[num].children.filter(function (ele) {
                    return ele.value === class2
                })
                if (itemArr.length === 0) {
                    item.children.push(item1)
                    _this.modelClassArr[num].children.push(item)
                    _this.closeModelClass2()
                    _this.httpClass(class1, class2, class3)
                } else {
                    alert('该分类已存在！')
                }
            }
        },
        newModelClass3() {
            let _this = this
            let class1 = _this.newclassm31
            let class2 = _this.newclassm32
            let class3 = _this.newclassm33
            if (class3 === '') {
                alert('请完整填写分类信息！')
            } else {
                let num1
                let num2
                for (let i = 0; i < _this.modelClassArr.length; i++) {
                    if (_this.modelClassArr[i].value === class1) {
                        num1 = i
                    }
                }
                for (let i = 0; i < _this.modelClassArr[num1].children.length; i++) {
                    if (_this.modelClassArr[num1].children[i].value === class2) {
                        num2 = i
                    }
                }
                let classItem3 = {
                    value: class3,
                    label: class3
                }

                let itemArr = []
                console.log(_this.modelClassArr[num1])
                itemArr = _this.modelClassArr[num1].children[num2].children.filter(function (ele) {
                    return ele.value === class3
                })
                if (itemArr.length === 0) {
                    _this.modelClassArr[num1].children[num2].children.push(classItem3)
                    _this.closeModelClass3()
                    _this.httpClass(class1, class2, class3)
                } else {
                    alert('该分类已存在！')
                }
            }
        },
        httpClass(class1, class2, class3) {
            let http = new XMLHttpRequest()
            http.open('POST', m_strWebService + 'service2.asmx', true);
            let httpData =
                '<?xml version="1.0" encoding="utf-8"?>' +
                '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                '  <soap12:Body>' +
                '    <AddModelUUID xmlns="http://tempuri.org/">' +
                '       <strname></strname>' +
                '       <strsize></strsize>' +
                '       <strfile>e082de32-fb77-46cf-9da2-d72d8909d73a</strfile>' +
                '       <strclass1>' + encodeURIComponent(class1) + '</strclass1>' +
                '       <strclass2>' + encodeURIComponent(class2) + '</strclass2>' +
                '       <strclass3>' + encodeURIComponent(class3) + '</strclass3>' +
                '       <itype>0</itype>' +
                '       <imode>0</imode>' +
                '       <fPrice>0</fPrice>' +
                '       <strUUID>' + guid() + '</strUUID>' +
                '       <strAccountType>0</strAccountType>' +
                '       <strCompanyID>' + companyId + '</strCompanyID>' +
                '       <strUserID></strUserID>' +
                '       <strReplaceMaterial></strReplaceMaterial>' +
                '       </AddModelUUID>' +
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
        },
        loadMzyClass() {
            let _this = this
            for (let i = 0; i < categoryType.length; i++) {
                let firstItem = {
                    value: categoryType[i],
                    label: categoryType[i],
                    children: []
                }

                for (let a = 0; a < secondType[i].length; a++) {
                    let secItem = {
                        value: secondType[i][a],
                        label: secondType[i][a],
                        children: []
                    }
                    for (let c = 0; c < levelThreeType[i][a].length; c++) {
                        let threeItem = {
                            value: levelThreeType[i][a][c],
                            label: levelThreeType[i][a][c],
                        }
                        secItem.children.push(threeItem)
                    }
                    firstItem.children.push(secItem)
                }
                _this.mzyTypeArr.push(firstItem)
            }
        },
        _openNewUser() {
            let _this = this
            let userArr = userList.filter(function (ele) {
                return ele.gs === companyId && ele.ut !== '0'
            })
            console.log(userArr)
            _this.options1.length = 0
            for (let i = 0; i < userArr.length; i++) {
                let item = {
                    label: userArr[i].name,
                    value: '选项' + i
                }
                _this.options1.push(item)
            }
            if (userArr.length === 0) {
                _this.options1 = [{
                    value: '选项1',
                    label: '普通用户'
                }, {
                    value: '选项2',
                    label: '设计师'
                }
                ]
            }
        },
        adminClass() {
            document.getElementById('newClassm1').style.display = 'none'
            document.getElementById('mapNewClass').style.display = 'none'
        },
        _openModifyUser() {
            let _this = this
            let userArr = userList.filter(function (ele) {
                return ele.gs === companyId && ele.ut !== '0'
            })
            _this.options2.length = 0
            console.log(userList)
            for (let i = 0; i < userArr.length; i++) {
                let item = {
                    label: userArr[i].name,
                    value: '选项' + i
                }
                _this.options2.push(item)
            }
            _this.disType = false
            _this.disDate = false
            let obj = allUser.filter(function (ele) {
                return ele.name === ModifyUser
            })
            obj = obj[0]
            let type = obj.type
            let txt = "企业账号"
            console.log(type)
            if (obj.ut === '0') {
                _this.disType = true
            }
            if (name === ModifyUser) {
                _this.disType = true
                _this.disDate = true
            }
        },
        handleLoadingClick() {
            let _this = this
            _this.loading = true
            let time = setTimeout(function () {
                _this.loading = false
            }, 2000)
        }
    },
    watch: {
        checked: function (val, oldVal) {
            if (val === true) {
                this.change = false
                srtPSW = 'yes'
            } else {
                this.change = true
                srtPSW = 'ne'
            }
        },
        addType: function (val, oldVal) {
            let num = ''
            let _this = this
            _this.typeArr2 = []

            for (let i = 0; i < categoryType.length; i++) {
                if (val === categoryType[i]) {
                    num = i
                }
            }
            let itemArr = secondType[num]
            for (let i = 0; i < itemArr.length; i++) {
                let item = {
                    value: itemArr[i],
                    label: itemArr[i]
                }
                _this.typeArr2.push(item)
            }
            _this.addType2 = itemArr[0]
        },
        modelType1: function (val, oldVal) {
            let num = ''
            let _this = this
            _this.modelTypeArr2 = []
            _this.modelTypeArr3 = []
            for (let i = 0; i < categoryType.length; i++) {
                if (val === categoryType[i]) {
                    num = i
                }
            }
            let itemArr = secondType[num]
            for (let i = 0; i < itemArr.length; i++) {
                let item = {
                    value: itemArr[i],
                    label: itemArr[i]
                }
                _this.modelTypeArr2.push(item)
            }
            _this.modelType2 = itemArr[0]
            // let threeArr = levelThreeType[num][0]
            // console.log(threeArr)

        },
        modelType2: function (val, oldVal) {
            let num1 = ''
            let num2 = ''
            let _this = this
            let model1 = _this.modelType1
            _this.modelTypeArr3 = []
            for (let i = 0; i < categoryType.length; i++) {
                if (model1 === categoryType[i]) {
                    num1 = i
                }
            }
            for (let i = 0; i < categoryType.length; i++) {
                if (val === secondType[num1][i]) {
                    num2 = i
                }
            }
            let threeArr = levelThreeType[num1][num2]
            for (let i = 0; i < threeArr.length; i++) {
                let item = {
                    value: threeArr[i],
                    label: threeArr[i]
                }
                _this.modelTypeArr3.push(item)
            }
            _this.modelType3 = threeArr[0]
        },
        newclassm31: function (val, oldVal) {
            let num = ''
            let _this = this
            _this.modelTypeArr2 = []
            _this.modelTypeArr3 = []
            for (let i = 0; i < categoryType.length; i++) {
                if (val === categoryType[i]) {
                    num = i
                }
            }
            let itemArr = secondType[num]
            for (let i = 0; i < itemArr.length; i++) {
                let item = {
                    value: itemArr[i],
                    label: itemArr[i]
                }
                _this.modelTypeArr2.push(item)
            }
            // _this.newclassm32 = itemArr[0]
            // let threeArr = levelThreeType[num][0]
            // console.log(threeArr)

        },
    }
})

function deleteClass(txt, type) {
    let strSQL
    if (type === '3') {
        let classArr = txt.split(',')
        strSQL = `insert into modelcx_backup select * from modelcx where class1='${classArr[0]}' and class2='${classArr[1]}' and class3='${classArr[2]}';delete from modelcx where class1='${classArr[0]}' and class2='${classArr[1]}' and class3='${classArr[2]}'`;
    } else if (type === '2') {
        let classArr = txt.split(',')
        strSQL = `insert into modelcx_backup select * from modelcx where class1='${classArr[0]}' and class2='${classArr[1]}';delete from modelcx where class1='${classArr[0]}' and class2='${classArr[1]}'`;

    } else {
        strSQL = `insert into modelcx_backup select * from modelcx where class1='${txt}';delete from modelcx where class1='${txt}'`;
    }

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
                            $('.active-table-item').click()
                            app.loadModelClass()
                            alert('删除成功')
                        }
                    }
                }
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function deleteMapClass(txt, type) {
    console.log(txt, type)
    let strSQL
    if (type === '2') {
        let classArr = txt.split(',')
        strSQL = `insert into materialcx_backup select * from materialcx where class1='${classArr[0]}' and class2='${classArr[1]}';delete from materialcx where class1='${classArr[0]}' and class2='${classArr[1]}'`;
    } else {
        strSQL = `insert into materialcx_backup select * from materialcx where class1='${txt}';delete from materialcx where class1='${txt}'`;
    }

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
                let lastHttp = new XMLHttpRequest()
                lastHttp.open('POST', m_strWebService + 'service2.asmx', true)
                let lastData =
                    '<?xml version="1.0" encoding="utf-8"?>' +
                    '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                    '  <soap12:Body>' +
                    '    <ExportMat xmlns="http://tempuri.org/">' +
                    '    </ExportMat>' +
                    '  </soap12:Body>' +
                    '</soap12:Envelope>'
                lastHttp.setRequestHeader('Content-Type', 'text/xml');
                lastHttp.send(lastData)
                lastHttp.onreadystatechange = function () {
                    if (lastHttp.readyState == 4) {
                        if (lastHttp.status == 200) {
                            $('.active-table-item').click()
                            app.loadMapClass()
                            alert('删除成功')
                        }
                    }
                }
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
}