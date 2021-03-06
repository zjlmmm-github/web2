define({ "api": [
  {
    "type": "",
    "url": "AIRoomClass",
    "title": "",
    "group": "AIRoomClass",
    "description": "<p>AI智能房间布置类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloor",
            "description": "<p>2D房间地面mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mAIFile",
            "description": "<p>只能布置文件</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_iCurWall",
            "description": "<p>墙体顺序</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloorLength",
            "description": "<p>地面周长</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/AIRoomClass.js",
    "groupTitle": "AIRoomClass",
    "name": "Airoomclass"
  },
  {
    "type": "",
    "url": "BakImage",
    "title": "",
    "group": "BakImage",
    "name": "0",
    "description": "<p>2D绘制时的背景图</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fLength",
            "description": "<p>是否显示网格</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fWidth",
            "description": "<p>2D背景网格</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_RenderData2D",
            "description": "<p>2D贴图平面mesh</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/BakImage.js",
    "groupTitle": "BakImage"
  },
  {
    "type": "",
    "url": "CameraClass",
    "title": "",
    "group": "CameraClass",
    "name": "0",
    "description": "<p>相机操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_Camera",
            "description": "<p>2D相机</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_Camera3D",
            "description": "<p>3D相机</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_Control3D",
            "description": "<p>3D控制类</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "moveForward",
            "description": "<p>前进状态</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "moveBackward",
            "description": "<p>后退状态</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "moveLeft",
            "description": "<p>左移状态</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "moveRight",
            "description": "<p>右移状态</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CameraClass.js",
    "groupTitle": "CameraClass"
  },
  {
    "type": "",
    "url": "OnClear()",
    "title": "",
    "description": "<p>复位</p>",
    "group": "CameraClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CameraClass.js",
    "groupTitle": "CameraClass",
    "name": "Onclear"
  },
  {
    "type": "",
    "url": "OnInit()",
    "title": "",
    "description": "<p>初始化</p>",
    "group": "CameraClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CameraClass.js",
    "groupTitle": "CameraClass",
    "name": "Oninit"
  },
  {
    "type": "",
    "url": "onKeyDown(evt)",
    "title": "",
    "description": "<p>键盘按下消息</p>",
    "group": "CameraClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "evt",
            "description": "<p>键盘消息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CameraClass.js",
    "groupTitle": "CameraClass",
    "name": "OnkeydownEvt"
  },
  {
    "type": "",
    "url": "onKeyUp(evt)",
    "title": "",
    "description": "<p>键盘释放消息</p>",
    "group": "CameraClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "evt",
            "description": "<p>键盘消息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CameraClass.js",
    "groupTitle": "CameraClass",
    "name": "OnkeyupEvt"
  },
  {
    "type": "",
    "url": "setCamera2D_z(fValue)",
    "title": "",
    "description": "<p>2D设置相机高度</p>",
    "group": "CameraClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "fValue",
            "description": "<p>高度</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CameraClass.js",
    "groupTitle": "CameraClass",
    "name": "Setcamera2d_zFvalue"
  },
  {
    "type": "",
    "url": "CeLiangClass",
    "title": "",
    "group": "CeLiangClass",
    "name": "0",
    "description": "<p>平面测量类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mArray",
            "description": "<p>测量线段数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pCurCeLiang",
            "description": "<p>当前操作的测量线段</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeLiangClass.js",
    "groupTitle": "CeLiangClass"
  },
  {
    "type": "",
    "url": "OnBuildCeLiang(mouseX,mouseY)",
    "title": "",
    "group": "CeLiangClass",
    "description": "<p>创建新测量线段</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y坐标</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeLiangClass.js",
    "groupTitle": "CeLiangClass",
    "name": "OnbuildceliangMousexMousey"
  },
  {
    "type": "",
    "url": "OnClear()",
    "title": "",
    "group": "CeLiangClass",
    "description": "<p>清除所有测量线段组</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeLiangClass.js",
    "groupTitle": "CeLiangClass",
    "name": "Onclear"
  },
  {
    "type": "",
    "url": "OnDelete(tCeLiang)",
    "title": "",
    "group": "CeLiangClass",
    "description": "<p>删除指定的测量线段</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tCeLiang",
            "description": "<p>指定的测量线段</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeLiangClass.js",
    "groupTitle": "CeLiangClass",
    "name": "OndeleteTceliang"
  },
  {
    "type": "",
    "url": "OnKeyDown(iKey)",
    "title": "",
    "group": "CeLiangClass",
    "description": "<p>键盘操作函数</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "iKey",
            "description": "<p>键盘值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeLiangClass.js",
    "groupTitle": "CeLiangClass",
    "name": "OnkeydownIkey"
  },
  {
    "type": "",
    "url": "OnMouseDown(mouseX,mouseY)",
    "title": "",
    "group": "CeLiangClass",
    "description": "<p>鼠标左键创建新测量线段</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y坐标</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeLiangClass.js",
    "groupTitle": "CeLiangClass",
    "name": "OnmousedownMousexMousey"
  },
  {
    "type": "",
    "url": "OnMouseMove(mouseX,mouseY,buttonDown)",
    "title": "",
    "group": "CeLiangClass",
    "description": "<p>鼠标左键创建新测量线段的移动操作</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "buttonDown",
            "description": "<p>鼠标按键信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeLiangClass.js",
    "groupTitle": "CeLiangClass",
    "name": "OnmousemoveMousexMouseyButtondown"
  },
  {
    "type": "",
    "url": "OnMouseRightUp2D()",
    "title": "",
    "group": "CeLiangClass",
    "description": "<p>鼠标右键停止测量相关操作</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeLiangClass.js",
    "groupTitle": "CeLiangClass",
    "name": "Onmouserightup2d"
  },
  {
    "type": "",
    "url": "OnPick2D(mouseX,mouseY,e)",
    "title": "",
    "group": "CeLiangClass",
    "description": "<p>平面下拾取测量线段</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "e",
            "description": "<p>鼠标信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeLiangClass.js",
    "groupTitle": "CeLiangClass",
    "name": "Onpick2dMousexMouseyE"
  },
  {
    "type": "",
    "url": "CeilingClass",
    "title": "",
    "group": "CeilingClass",
    "description": "<p>顶面操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCeilingArray",
            "description": "<p>多少顶面</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pCurCeiling",
            "description": "<p>当前顶面</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_OBBox_Max",
            "description": "<p>包围盒</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_OBBox_Min",
            "description": "<p>包围盒</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeilingClass.js",
    "groupTitle": "CeilingClass",
    "name": "Ceilingclass"
  },
  {
    "type": "",
    "url": "CeilingData",
    "title": "",
    "group": "CeilingData",
    "description": "<p>顶面操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCeilingMesh",
            "description": "<p>2D顶面mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCeilingMesh3D",
            "description": "<p>3D顶面mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mTextureData",
            "description": "<p>2D材质</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mTextureData3D",
            "description": "<p>3D材质</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeilingData.js",
    "groupTitle": "CeilingData",
    "name": "Ceilingdata"
  },
  {
    "type": "",
    "url": "OnCreate()",
    "title": "",
    "group": "CeilingParamClass",
    "name": "0",
    "description": "<p>开始创建地板</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeilingParamClass.js",
    "groupTitle": "CeilingParamClass"
  },
  {
    "type": "",
    "url": "CeilingParamClass",
    "title": "",
    "group": "CeilingParamClass",
    "description": "<p>参数化吊顶操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mArray",
            "description": "<p>吊顶单元数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_JsonData",
            "description": "<p>当前吊顶单元JSON数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeilingParamClass.js",
    "groupTitle": "CeilingParamClass",
    "name": "Ceilingparamclass"
  },
  {
    "type": "",
    "url": "OnMouseDown_Ceiling()",
    "title": "",
    "group": "CeilingParamClass",
    "description": "<p>鼠标点击地板，创建吊顶</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeilingParamClass.js",
    "groupTitle": "CeilingParamClass",
    "name": "Onmousedown_ceiling"
  },
  {
    "type": "",
    "url": "CeilingParamData",
    "title": "",
    "group": "CeilingParamData",
    "description": "<p>参数化吊顶单元类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mArray",
            "description": "<p>吊顶模型数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloor",
            "description": "<p>当前吊顶属于的地面</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pMoveFurniture",
            "description": "<p>当前地板模型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CeilingParamData.js",
    "groupTitle": "CeilingParamData",
    "name": "Ceilingparamdata"
  },
  {
    "type": "",
    "url": "Coordniate",
    "title": "",
    "group": "Coordniate",
    "name": "0",
    "description": "<p>2D,3D背景网格类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_bShow",
            "description": "<p>是否显示网格</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_cCoord",
            "description": "<p>2D背景网格</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_cCoord1",
            "description": "<p>2D背景十字线</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_cCoord3D",
            "description": "<p>3D背景网格</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_cCoord3D1",
            "description": "<p>3D背景十字线</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_cBigBox",
            "description": "<p>鼠标操作相应界面</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Coordniate.js",
    "groupTitle": "Coordniate"
  },
  {
    "type": "",
    "url": "Coordniate",
    "title": "",
    "group": "Coordniate",
    "name": "0",
    "description": "<p>2D背景网格类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_bShow",
            "description": "<p>是否显示网格</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_cCoord",
            "description": "<p>2D背景网格Coordniate</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_cCoord1",
            "description": "<p>2D背景十字线</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_cBigBox",
            "description": "<p>鼠标操作相应界面</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/plugins/Drawing/js/Coordniate.js",
    "groupTitle": "Coordniate"
  },
  {
    "type": "",
    "url": "CreateLine()",
    "title": "",
    "description": "<p>创建二维平面背景网格</p>",
    "group": "Coordniate",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Coordniate.js",
    "groupTitle": "Coordniate",
    "name": "Createline"
  },
  {
    "type": "",
    "url": "CreateLine3D()",
    "title": "",
    "description": "<p>创建三维平面背景网格</p>",
    "group": "Coordniate",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Coordniate.js",
    "groupTitle": "Coordniate",
    "name": "Createline3d"
  },
  {
    "type": "",
    "url": "OnInit()",
    "title": "",
    "description": "<p>初始化网格背景</p>",
    "group": "Coordniate",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Coordniate.js",
    "groupTitle": "Coordniate",
    "name": "Oninit"
  },
  {
    "type": "",
    "url": "CtrlObj2D",
    "title": "",
    "group": "CtrlObj2D",
    "name": "0",
    "description": "<p>2D物体操作控制器</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox",
            "description": "<p>当前物体</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox1",
            "description": "<p>2D下轮廓</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox2",
            "description": "<p>3D下旋转显示用mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox3",
            "description": "<p>3D下旋转拾取用mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox4",
            "description": "<p>3D下显示箭头用mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox5",
            "description": "<p>3D下显示柱体用mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox6",
            "description": "<p>3D下拾取区域</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox7",
            "description": "<p>3D下是否旋转</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox8",
            "description": "<p>鼠标X位置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_LineLeft_Label",
            "description": "<p>鼠标Y位置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_LineRight_Label",
            "description": "<p>3D下是否升高</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_LineTop_Label",
            "description": "<p>通用系数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CtrlObj2D.js",
    "groupTitle": "CtrlObj2D"
  },
  {
    "type": "",
    "url": "OnHideCtrl()",
    "title": "",
    "group": "CtrlObj2D",
    "description": "<p>隐藏物体操作控制器</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CtrlObj2D.js",
    "groupTitle": "CtrlObj2D",
    "name": "Onhidectrl"
  },
  {
    "type": "",
    "url": "OnInit()",
    "title": "",
    "group": "CtrlObj2D",
    "description": "<p>2D物体操作控制器</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CtrlObj2D.js",
    "groupTitle": "CtrlObj2D",
    "name": "Oninit"
  },
  {
    "type": "",
    "url": "OnShowHelpBox(bShow)",
    "title": "",
    "group": "CtrlObj2D",
    "description": "<p>隐藏物体操作控制器</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/CtrlObj2D.js",
    "groupTitle": "CtrlObj2D",
    "name": "OnshowhelpboxBshow"
  },
  {
    "type": "",
    "url": "Dlg_DoorAttribute",
    "title": "",
    "group": "Dlg_DoorAttribute",
    "name": "0",
    "description": "<p>门设置窗口</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mDoor",
            "description": "<p>当前门</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mDoorData",
            "description": "<p>当前门数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_DoorAttribute.js",
    "groupTitle": "Dlg_DoorAttribute"
  },
  {
    "type": "",
    "url": "Dlg_FurnitureAttribute",
    "title": "",
    "group": "Dlg_FurnitureAttribute",
    "name": "0",
    "description": "<p>物品设置窗口</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFurniture",
            "description": "<p>当前物品</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_FurnitureAttribute.js",
    "groupTitle": "Dlg_FurnitureAttribute"
  },
  {
    "type": "",
    "url": "Dlg_LabelAttribute",
    "title": "",
    "group": "Dlg_LabelAttribute",
    "name": "0",
    "description": "<p>标注设置窗口</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mLabel",
            "description": "<p>当前标注</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_LabelAttribute.js",
    "groupTitle": "Dlg_LabelAttribute"
  },
  {
    "type": "",
    "url": "Dlg_SystemAttribute",
    "title": "",
    "group": "Dlg_SystemAttribute",
    "name": "0",
    "description": "<p>系统设置窗口</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_SystemAttribute.js",
    "groupTitle": "Dlg_SystemAttribute"
  },
  {
    "type": "",
    "url": "OnMaterial(bShow)",
    "title": "",
    "description": "<p>3D内外墙是否显示材质</p>",
    "group": "Dlg_SystemAttribute",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "bShow",
            "description": "<p>false不显示,true显示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_SystemAttribute.js",
    "groupTitle": "Dlg_SystemAttribute",
    "name": "OnmaterialBshow"
  },
  {
    "type": "",
    "url": "OnShowCoord()",
    "title": "",
    "description": "<p>2D是否显示背景网格</p>",
    "group": "Dlg_SystemAttribute",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_SystemAttribute.js",
    "groupTitle": "Dlg_SystemAttribute",
    "name": "Onshowcoord"
  },
  {
    "type": "",
    "url": "OnShowFurniture()",
    "title": "",
    "description": "<p>是否显示所有家具</p>",
    "group": "Dlg_SystemAttribute",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_SystemAttribute.js",
    "groupTitle": "Dlg_SystemAttribute",
    "name": "Onshowfurniture"
  },
  {
    "type": "",
    "url": "OnShowRoomName()",
    "title": "",
    "description": "<p>是否显示所有文字</p>",
    "group": "Dlg_SystemAttribute",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_SystemAttribute.js",
    "groupTitle": "Dlg_SystemAttribute",
    "name": "Onshowroomname"
  },
  {
    "type": "",
    "url": "OnShowRoomName()",
    "title": "",
    "description": "<p>是否显示透明外墙体</p>",
    "group": "Dlg_SystemAttribute",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_SystemAttribute.js",
    "groupTitle": "Dlg_SystemAttribute",
    "name": "Onshowroomname"
  },
  {
    "type": "",
    "url": "OnShowRoomName()",
    "title": "",
    "description": "<p>是否显示透明内墙体</p>",
    "group": "Dlg_SystemAttribute",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_SystemAttribute.js",
    "groupTitle": "Dlg_SystemAttribute",
    "name": "Onshowroomname"
  },
  {
    "type": "",
    "url": "OnShowRoomName()",
    "title": "",
    "description": "<p>是否显示显示帮助内容</p>",
    "group": "Dlg_SystemAttribute",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_SystemAttribute.js",
    "groupTitle": "Dlg_SystemAttribute",
    "name": "Onshowroomname"
  },
  {
    "type": "",
    "url": "OnWireframe(bShow)",
    "title": "",
    "description": "<p>3D是否显示线框</p>",
    "group": "Dlg_SystemAttribute",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "bShow",
            "description": "<p>false不显示,true显示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_SystemAttribute.js",
    "groupTitle": "Dlg_SystemAttribute",
    "name": "OnwireframeBshow"
  },
  {
    "type": "",
    "url": "Dlg_TextAttribute",
    "title": "",
    "group": "Dlg_TextAttribute",
    "name": "0",
    "description": "<p>文字设置窗口</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mText",
            "description": "<p>当前文字</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_TextAttribute.js",
    "groupTitle": "Dlg_TextAttribute"
  },
  {
    "type": "",
    "url": "Dlg_WallAttribute",
    "title": "",
    "group": "Dlg_WallAttribute",
    "name": "0",
    "description": "<p>墙体设置窗口</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_WallAttribute.js",
    "groupTitle": "Dlg_WallAttribute"
  },
  {
    "type": "",
    "url": "MoveEdit()",
    "title": "",
    "group": "Dlg_WallAttribute",
    "name": "0",
    "description": "<p>墙体尺寸输入窗随鼠标移动</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_WallAttribute.js",
    "groupTitle": "Dlg_WallAttribute"
  },
  {
    "type": "",
    "url": "Dlg_WindowAttribute",
    "title": "",
    "group": "Dlg_WindowAttribute",
    "name": "0",
    "description": "<p>窗户设置窗口</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWindow",
            "description": "<p>当前窗户</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_WindowAttribute.js",
    "groupTitle": "Dlg_WindowAttribute"
  },
  {
    "type": "",
    "url": "DoorClass",
    "title": "",
    "group": "DoorClass",
    "name": "0",
    "description": "<p>门操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mDoorArray",
            "description": "<p>门数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pCurDoor",
            "description": "<p>当前操作的门</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/DoorClass.js",
    "groupTitle": "DoorClass"
  },
  {
    "type": "",
    "url": "OnInit()",
    "title": "",
    "group": "DoorClass",
    "name": "0",
    "description": "<p>初始化门控制类</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/DoorClass.js",
    "groupTitle": "DoorClass"
  },
  {
    "type": "",
    "url": "CreateDoor(iType)",
    "title": "",
    "group": "DoorClass",
    "name": "0",
    "description": "<p>创建门</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "iType",
            "description": "<p>门的类型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/DoorClass.js",
    "groupTitle": "DoorClass"
  },
  {
    "type": "",
    "url": "OnClear()",
    "title": "",
    "group": "DoorClass",
    "name": "0",
    "description": "<p>清空所有门</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/DoorClass.js",
    "groupTitle": "DoorClass"
  },
  {
    "type": "",
    "url": "OnMouseRightUp2D()",
    "title": "",
    "group": "DoorClass",
    "name": "0",
    "description": "<p>2D下鼠标右键释放</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/DoorClass.js",
    "groupTitle": "DoorClass"
  },
  {
    "type": "",
    "url": "OnDelete(tDoor)",
    "title": "",
    "group": "DoorClass",
    "name": "0",
    "description": "<p>删除指定的门</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/DoorClass.js",
    "groupTitle": "DoorClass"
  },
  {
    "type": "",
    "url": "OnHideCtrl()",
    "title": "",
    "group": "DoorClass",
    "name": "0",
    "description": "<p>隐藏控制</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/DoorClass.js",
    "groupTitle": "DoorClass"
  },
  {
    "type": "",
    "url": "OnShowCtrl(tDoor)",
    "title": "",
    "group": "DoorClass",
    "name": "0",
    "description": "<p>在指定的门显示操作辅助</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tDoor",
            "description": "<p>指定的门</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/DoorClass.js",
    "groupTitle": "DoorClass"
  },
  {
    "type": "",
    "url": "OnKeyDown(iKey)",
    "title": "",
    "group": "DoorClass",
    "description": "<p>键盘操作</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "iKey",
            "description": "<p>键盘值m_pCurWindow</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/DoorClass.js",
    "groupTitle": "DoorClass",
    "name": "OnkeydownIkey"
  },
  {
    "type": "",
    "url": "OnSave_XML",
    "title": "",
    "description": "<p>保存门数据</p>",
    "group": "Doorlass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/DoorClass.js",
    "groupTitle": "Doorlass",
    "name": "Onsave_xml"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/ApiDoc/main.js",
    "group": "E:\\inetpub\\wwwroot\\3d\\ApiDoc\\main.js",
    "groupTitle": "E:\\inetpub\\wwwroot\\3d\\ApiDoc\\main.js",
    "name": ""
  },
  {
    "type": "",
    "url": "FloorClass",
    "title": "",
    "group": "FloorClass",
    "name": "0",
    "description": "<p>地面操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_OBBox_Max",
            "description": "<p>包围盒</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_OBBox_Min",
            "description": "<p>包围盒</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloorArray",
            "description": "<p>房间地面数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pCurFloor",
            "description": "<p>当前地面</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mLabelH",
            "description": "<p>总长度尺寸标注</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mLabelV",
            "description": "<p>总宽度尺寸标注</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FloorClass"
  },
  {
    "type": "",
    "url": "OnUpdateBox()",
    "title": "",
    "group": "FloorClass",
    "name": "0",
    "description": "<p>更新总包围盒</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "solution_paths",
            "description": "<p>地面轮廓数据</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "iMaxAreaFloor",
            "description": "<p>最外侧轮廓</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FloorClass"
  },
  {
    "type": "",
    "url": "OnUpdateBox()",
    "title": "",
    "group": "FloorClass",
    "name": "0",
    "description": "<p>更新总包围盒</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FloorClass"
  },
  {
    "type": "",
    "url": "ComputerArea",
    "title": "",
    "description": "<p>计算套内面积(地面面积)</p>",
    "group": "FloorClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FloorClass",
    "name": "Computerarea"
  },
  {
    "type": "",
    "url": "CreateFloor",
    "title": "",
    "description": "<p>创建地面区域</p>",
    "group": "FloorClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "itype",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FloorClass",
    "name": "Createfloor"
  },
  {
    "type": "",
    "url": "CreateFloor",
    "title": "",
    "description": "<p>是否显示所有地面尺寸</p>",
    "group": "FloorClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "bShow",
            "description": "<p>true显示，false不显示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FloorClass",
    "name": "Createfloor"
  },
  {
    "type": "",
    "url": "OnClear",
    "title": "",
    "description": "<p>清空</p>",
    "group": "FloorClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FloorClass",
    "name": "Onclear"
  },
  {
    "type": "",
    "url": "OnInit",
    "title": "",
    "description": "<p>初始化函数</p>",
    "group": "FloorClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FloorClass",
    "name": "Oninit"
  },
  {
    "type": "",
    "url": "OnMouseRightUp2D",
    "title": "",
    "description": "<p>鼠标右键</p>",
    "group": "FloorClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FloorClass",
    "name": "Onmouserightup2d"
  },
  {
    "type": "",
    "url": "OnPick2D",
    "title": "",
    "description": "<p>2D下拾取地面</p>",
    "group": "FloorClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X值</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FloorClass",
    "name": "Onpick2d"
  },
  {
    "type": "",
    "url": "OnPick2D_Quick",
    "title": "",
    "description": "<p>2D下拾取地面，不检测排序</p>",
    "group": "FloorClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X值</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FloorClass",
    "name": "Onpick2d_quick"
  },
  {
    "type": "",
    "url": "OnPick3D",
    "title": "",
    "description": "<p>3D下拾取地面</p>",
    "group": "FloorClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X值</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FloorClass",
    "name": "Onpick3d"
  },
  {
    "type": "",
    "url": "OnUpdateFloor",
    "title": "",
    "description": "<p>更新地面 1. 如果新地面区域中心点与老地面区域中心点一致，且面积相同， 保留老地面区域 2. 否则使用新区域且材质初始化 3. 如果是新区域更新标注</p>",
    "group": "FloorClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "solution_paths",
            "description": "<p>地面轮廓数据</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "iMaxAreaFloor",
            "description": "<p>最外侧轮廓</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FloorClass",
    "name": "Onupdatefloor"
  },
  {
    "type": "",
    "url": "FloorData",
    "title": "",
    "group": "FloorData",
    "name": "0",
    "description": "<p>地平面类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_OBBox_Max",
            "description": "<p>包围盒最大值</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_OBBox_Min",
            "description": "<p>包围盒最小值</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloorMesh",
            "description": "<p>平面图地面Mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloorMeshSVG",
            "description": "<p>施工图地面Mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloorMesh3D",
            "description": "<p>3D地面Mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloorExtrude",
            "description": "<p>地面边挤压厚度</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mVerticesOld",
            "description": "<p>原始数据</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mLabelArray",
            "description": "<p>所有边的尺寸标注</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mLabelArray_Out",
            "description": "<p>外围标注</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mPath",
            "description": "<p>原始轮廓</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mPathHoles",
            "description": "<p>洞轮廓</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mTextureData",
            "description": "<p>材质数据</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mfLayer",
            "description": "<p>层级</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mfArea",
            "description": "<p>地面面积</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "bUpdate",
            "description": "<p>是否更新，地面重建时用</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fHeight",
            "description": "<p>高度</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_tmpWall",
            "description": "<p>单房间显示时的临时墙体, 类似墙顶厚</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorData.js",
    "groupTitle": "FloorData"
  },
  {
    "type": "",
    "url": "OnBuildFloor()",
    "title": "",
    "group": "FloorData",
    "name": "0",
    "description": "<p>初始化柱子</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "paths",
            "description": "<p>轮廓数据</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fLayer",
            "description": "<p>层高</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorData.js",
    "groupTitle": "FloorData"
  },
  {
    "type": "",
    "url": "OnUpdateHeight(fHeight)",
    "title": "",
    "group": "FloorData",
    "name": "0",
    "description": "<p>更新3D下地面高度</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorData.js",
    "groupTitle": "FloorData"
  },
  {
    "type": "",
    "url": "OnUpdateTex3D(ab)",
    "title": "",
    "group": "FloorData",
    "name": "0",
    "description": "<p>更新3D下地面</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorData.js",
    "groupTitle": "FloorData"
  },
  {
    "type": "",
    "url": "OnClear()",
    "title": "",
    "group": "FloorData",
    "name": "0",
    "description": "<p>清除当前地面</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorData.js",
    "groupTitle": "FloorData"
  },
  {
    "type": "",
    "url": "OnClear2D()",
    "title": "",
    "group": "FloorData",
    "name": "0",
    "description": "<p>清除当前2D地面</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorData.js",
    "groupTitle": "FloorData"
  },
  {
    "type": "",
    "url": "OnClear3D()",
    "title": "",
    "group": "FloorData",
    "name": "0",
    "description": "<p>清除当前3D地面</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorData.js",
    "groupTitle": "FloorData"
  },
  {
    "type": "",
    "url": "OnCreate()",
    "title": "",
    "group": "FloorParamClass",
    "name": "0",
    "description": "<p>开始创建地板</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorParamClass.js",
    "groupTitle": "FloorParamClass"
  },
  {
    "type": "",
    "url": "FloorParamClass",
    "title": "",
    "group": "FloorParamClass",
    "description": "<p>参数化地板操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloorArray",
            "description": "<p>地板模型数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pCurFloor",
            "description": "<p>当前地板模型</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_JsonData",
            "description": "<p>当前地板JSON数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorParamClass.js",
    "groupTitle": "FloorParamClass",
    "name": "Floorparamclass"
  },
  {
    "type": "",
    "url": "OnMouseDown_Wall()",
    "title": "",
    "group": "FloorParamClass",
    "description": "<p>鼠标点击地板，创建地板</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorParamClass.js",
    "groupTitle": "FloorParamClass",
    "name": "Onmousedown_wall"
  },
  {
    "type": "",
    "url": "FloorParamData",
    "title": "",
    "group": "FloorParamData",
    "description": "<p>参数化地板单元</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mArray",
            "description": "<p>地板模型数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pCurObj",
            "description": "<p>当前地板模型</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pMoveFurniture",
            "description": "<p>当前地板模型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorParamData.js",
    "groupTitle": "FloorParamData",
    "name": "Floorparamdata"
  },
  {
    "type": "",
    "url": "FlueClass",
    "title": "",
    "group": "FlueClass",
    "name": "0",
    "description": "<p>烟道类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFlueArray",
            "description": "<p>多少个烟道</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pCurFlue",
            "description": "<p>当前烟道</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCurMouseX",
            "description": "<p>鼠标X位置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCurMouseY",
            "description": "<p>鼠标Y位置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox",
            "description": "<p>2D操作线框</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox1",
            "description": "<p>2D操作点1</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox2",
            "description": "<p>2D操作点2</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox3",
            "description": "<p>2D操作点3</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox4",
            "description": "<p>2D操作点4</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox5",
            "description": "<p>2D操作点5</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox6",
            "description": "<p>2D操作点6</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox7",
            "description": "<p>2D操作点7</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox8",
            "description": "<p>2D操作点8</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueClass.js",
    "groupTitle": "FlueClass"
  },
  {
    "type": "",
    "url": "CreateFlue",
    "title": "",
    "description": "<p>2D平面上创建一个烟道</p>",
    "group": "FlueClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueClass.js",
    "groupTitle": "FlueClass",
    "name": "Createflue"
  },
  {
    "type": "",
    "url": "OnClear",
    "title": "",
    "description": "<p>清空</p>",
    "group": "FlueClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueClass.js",
    "groupTitle": "FlueClass",
    "name": "Onclear"
  },
  {
    "type": "",
    "url": "OnDelete(tFloor)",
    "title": "",
    "description": "<p>删除指定的地面</p>",
    "group": "FlueClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "tFloor",
            "description": "<p>指定的地面</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FloorClass.js",
    "groupTitle": "FlueClass",
    "name": "OndeleteTfloor"
  },
  {
    "type": "",
    "url": "OnDelete(tFlue)",
    "title": "",
    "description": "<p>删除指定的烟道</p>",
    "group": "FlueClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "tFloor",
            "description": "<p>指定的烟道</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueClass.js",
    "groupTitle": "FlueClass",
    "name": "OndeleteTflue"
  },
  {
    "type": "",
    "url": "OnInit",
    "title": "",
    "description": "<p>初始化函数</p>",
    "group": "FlueClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueClass.js",
    "groupTitle": "FlueClass",
    "name": "Oninit"
  },
  {
    "type": "",
    "url": "OnMouseRightUp2D",
    "title": "",
    "description": "<p>鼠标右键</p>",
    "group": "FlueClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueClass.js",
    "groupTitle": "FlueClass",
    "name": "Onmouserightup2d"
  },
  {
    "type": "",
    "url": "FlueData",
    "title": "",
    "group": "FlueData",
    "name": "0",
    "description": "<p>烟道类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_vPos",
            "description": "<p>位置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fLength",
            "description": "<p>烟道长</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fWidth",
            "description": "<p>烟道宽</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fRotate",
            "description": "<p>烟道旋转角度</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_RenderData2D",
            "description": "<p>2D显示mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_RenderWin2D",
            "description": "<p>2D显示折线</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_Object",
            "description": "<p>3D显示mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_HelpBox",
            "description": "<p>2D显示线框</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mTextureData1",
            "description": "<p>3D材质面1</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mTextureData2",
            "description": "<p>3D材质面2</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mTextureData3",
            "description": "<p>3D材质面3</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mTextureData4",
            "description": "<p>3D材质面4</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueData.js",
    "groupTitle": "FlueData"
  },
  {
    "type": "",
    "url": "BuildFlueIcon()",
    "title": "",
    "description": "<p>创建烟道2D图标</p>",
    "group": "FlueData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueData.js",
    "groupTitle": "FlueData",
    "name": "Buildflueicon"
  },
  {
    "type": "",
    "url": "OnClear",
    "title": "",
    "description": "<p>清空</p>",
    "group": "FlueData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueData.js",
    "groupTitle": "FlueData",
    "name": "Onclear"
  },
  {
    "type": "",
    "url": "OnCreate2D()",
    "title": "",
    "description": "<p>创建2D烟道图标</p>",
    "group": "FlueData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueData.js",
    "groupTitle": "FlueData",
    "name": "Oncreate2d"
  },
  {
    "type": "",
    "url": "OnHideCtrl()",
    "title": "",
    "description": "<p>隐藏2D烟道操作帮助</p>",
    "group": "FlueData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueData.js",
    "groupTitle": "FlueData",
    "name": "Onhidectrl"
  },
  {
    "type": "",
    "url": "OnInit",
    "title": "",
    "description": "<p>初始化函数</p>",
    "group": "FlueData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueData.js",
    "groupTitle": "FlueData",
    "name": "Oninit"
  },
  {
    "type": "",
    "url": "OnMouseMove(x1,y1)",
    "title": "",
    "description": "<p>移动烟道</p>",
    "group": "FlueData",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "x1",
            "description": "<p>x坐标</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "y1",
            "description": "<p>y坐标</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueData.js",
    "groupTitle": "FlueData",
    "name": "OnmousemoveX1Y1"
  },
  {
    "type": "",
    "url": "OnShow(bShow)",
    "title": "",
    "description": "<p>是否显示烟道</p>",
    "group": "FlueData",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "bShow",
            "description": "<p>是否显示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueData.js",
    "groupTitle": "FlueData",
    "name": "OnshowBshow"
  },
  {
    "type": "",
    "url": "OnShowHelp()",
    "title": "",
    "description": "<p>显示2D烟道操作帮助</p>",
    "group": "FlueData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueData.js",
    "groupTitle": "FlueData",
    "name": "Onshowhelp"
  },
  {
    "type": "",
    "url": "OnUpdate3D()",
    "title": "",
    "description": "<p>更新3D烟道,再生成柱体面时，mWallClass3D_In 原来已经清干净</p>",
    "group": "FlueData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueData.js",
    "groupTitle": "FlueData",
    "name": "Onupdate3d"
  },
  {
    "type": "",
    "url": "OnUpdate3D(pos1,pos2,iTextureData)",
    "title": "",
    "description": "<p>创建3D烟道立面,</p>",
    "group": "FlueData",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "pos1",
            "description": "<p>起点</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "pos2",
            "description": "<p>终点</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "iTextureData",
            "description": "<p>使用第几个材质</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueData.js",
    "groupTitle": "FlueData",
    "name": "Onupdate3dPos1Pos2Itexturedata"
  },
  {
    "type": "",
    "url": "UpdateFlue()",
    "title": "",
    "description": "<p>更新2D烟道</p>",
    "group": "FlueData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueData.js",
    "groupTitle": "FlueData",
    "name": "Updateflue"
  },
  {
    "type": "",
    "url": "Clone()",
    "title": "",
    "group": "Furniture",
    "name": "0",
    "description": "<p>复制一个物体</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "iDirection",
            "description": "<p>复制方向 0 x, 1 -x, 2 z, 3 -z</p>"
          }
        ],
        "返回值": [
          {
            "group": "返回值",
            "optional": false,
            "field": "tFurniture",
            "description": "<p>新的物体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Furniture.js",
    "groupTitle": "Furniture"
  },
  {
    "type": "",
    "url": "Clone()",
    "title": "",
    "group": "FurnitureClass",
    "name": "0",
    "description": "<p>复制一个物体</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FurnitureClass.js",
    "groupTitle": "FurnitureClass"
  },
  {
    "type": "",
    "url": "FurnitureClass",
    "title": "",
    "group": "FurnitureClass",
    "description": "<p>模型操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFurnitureArray",
            "description": "<p>模型数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pCurFurniture",
            "description": "<p>当前模型</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pMoveObjArray",
            "description": "<p>成组的模型组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pMoveFurniture",
            "description": "<p>当前操作的模型组</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FurnitureClass.js",
    "groupTitle": "FurnitureClass",
    "name": "Furnitureclass"
  },
  {
    "type": "",
    "url": "OnKeyDown(iKey)",
    "title": "",
    "group": "FurnitureClass",
    "description": "<p>键盘操作</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "iKey",
            "description": "<p>键盘值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FurnitureClass.js",
    "groupTitle": "FurnitureClass",
    "name": "OnkeydownIkey"
  },
  {
    "type": "",
    "url": "OnShowHelp(mouseX,mouseY)",
    "title": "",
    "group": "FurnitureClass",
    "description": "<p>显示帮助</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X值</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FurnitureClass.js",
    "groupTitle": "FurnitureClass",
    "name": "OnshowhelpMousexMousey"
  },
  {
    "type": "",
    "url": "UpdateLabel",
    "title": "",
    "group": "FurnitureClass",
    "description": "<p>更新模型到四边的距离</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tFlue",
            "description": "<p>当前模型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FurnitureClass.js",
    "groupTitle": "FurnitureClass",
    "name": "Updatelabel"
  },
  {
    "type": "",
    "url": "UpdateMashOnWall",
    "title": "",
    "description": "<p>判断当前物体是否靠墙</p>",
    "group": "FurnitureClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tFurniture",
            "description": "<p>当前物体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FurnitureClass.js",
    "groupTitle": "FurnitureClass",
    "name": "Updatemashonwall"
  },
  {
    "type": "",
    "url": "Furniture",
    "title": "",
    "group": "Furniture",
    "description": "<p>模型类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_uuid",
            "description": "<p>唯一ID</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fLength",
            "description": "<p>当前长</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fWidth",
            "description": "<p>当前宽</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fHeight",
            "description": "<p>当前高</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Furniture.js",
    "groupTitle": "Furniture",
    "name": "Furniture"
  },
  {
    "type": "",
    "url": "HelpClass",
    "title": "",
    "group": "HelpClass",
    "name": "0",
    "description": "<p>2D绘制墙体操作帮助类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mHelpCoss",
            "description": "<p>十字线</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mHelpWallPos1",
            "description": "<p>墙体顶点1</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mHelpWallPos2",
            "description": "<p>墙体顶点2</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mHelpWallPos3",
            "description": "<p>墙体顶点3</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mHelpWallPos4",
            "description": "<p>墙体顶点4</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mHelpWall",
            "description": "<p>移动时感应变红的墙体</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mPointsMaterial",
            "description": "<p>点的材质</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mBlueMaterial",
            "description": "<p>点的材质</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mOutLine",
            "description": "<p>轮廓辅助线</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mHelpLine_Start",
            "description": "<p>参考辅助线起点</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mHelpLine_End",
            "description": "<p>参考辅助线终点</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass"
  },
  {
    "type": "",
    "url": "ClearOutline()",
    "title": "",
    "description": "<p>2D,3D一起清除地面轮廓线</p>",
    "group": "HelpClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "Clearoutline"
  },
  {
    "type": "",
    "url": "CreateHelpCross",
    "title": "",
    "description": "<p>创建十字参考线</p>",
    "group": "HelpClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "Createhelpcross"
  },
  {
    "type": "",
    "url": "CreateHelpPos1",
    "title": "",
    "description": "<p>创建辅助点</p>",
    "group": "HelpClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "Createhelppos1"
  },
  {
    "type": "",
    "url": "CreateHelpWall",
    "title": "",
    "description": "<p>创建辅助点辅助墙体</p>",
    "group": "HelpClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "Createhelpwall"
  },
  {
    "type": "",
    "url": "OnClear",
    "title": "",
    "description": "<p>清空</p>",
    "group": "HelpClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "Onclear"
  },
  {
    "type": "",
    "url": "OnCreateMultiSelect()",
    "title": "",
    "description": "<p>2D创建多选区域</p>",
    "group": "HelpClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "Oncreatemultiselect"
  },
  {
    "type": "",
    "url": "OnEndMultiSelect(mouseX,mouseY)",
    "title": "",
    "description": "<p>结束2D多选区域</p>",
    "group": "HelpClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标x位置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标y位置</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "OnendmultiselectMousexMousey"
  },
  {
    "type": "",
    "url": "OnHidePosAll()",
    "title": "",
    "description": "<p>隐藏所有的辅助点</p>",
    "group": "HelpClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "Onhideposall"
  },
  {
    "type": "",
    "url": "OnInit()",
    "title": "",
    "description": "<p>初始化函数</p>",
    "group": "HelpClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "Oninit"
  },
  {
    "type": "",
    "url": "OnMoveMultiSelect(mouseX,mouseY)",
    "title": "",
    "description": "<p>2D移动多选区域</p>",
    "group": "HelpClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标x位置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标y位置</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "OnmovemultiselectMousexMousey"
  },
  {
    "type": "",
    "url": "OnShow(bShow)",
    "title": "",
    "description": "<p>是否显示十字线</p>",
    "group": "HelpClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "bShow",
            "description": "<p>是否显示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "OnshowBshow"
  },
  {
    "type": "",
    "url": "OnShowHelpWall(tWall)",
    "title": "",
    "description": "<p>2D指定墙体显示墙体高亮</p>",
    "group": "HelpClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "tWall",
            "description": "<p>指定的墙体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "OnshowhelpwallTwall"
  },
  {
    "type": "",
    "url": "OnShowPosAll(vPos1,vPos2,vPos3,vPos4)",
    "title": "",
    "description": "<p>显示所有的辅助点</p>",
    "group": "HelpClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "vPos1",
            "description": "<p>点1</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "vPos2",
            "description": "<p>点2</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "vPos3",
            "description": "<p>点3</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "vPos4",
            "description": "<p>点4</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "OnshowposallVpos1Vpos2Vpos3Vpos4"
  },
  {
    "type": "",
    "url": "OnStartMultiSelect(mouseX,mouseY)",
    "title": "",
    "description": "<p>2D开始多选区域</p>",
    "group": "HelpClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标x位置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标y位置</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "OnstartmultiselectMousexMousey"
  },
  {
    "type": "",
    "url": "ShowOutLine_Floor2D(tFloor)",
    "title": "",
    "description": "<p>2D显示地面轮廓辅助线</p>",
    "group": "HelpClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "tFloor",
            "description": "<p>指定的墙体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "Showoutline_floor2dTfloor"
  },
  {
    "type": "",
    "url": "ShowOutLine_Floor3D(tFloor)",
    "title": "",
    "description": "<p>3D显示地面轮廓辅助线</p>",
    "group": "HelpClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "tFloor",
            "description": "<p>指定的墙体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpClass.js",
    "groupTitle": "HelpClass",
    "name": "Showoutline_floor3dTfloor"
  },
  {
    "type": "",
    "url": "HelpLineClass",
    "title": "",
    "group": "HelpLineClass",
    "name": "0",
    "description": "<p>2D划线类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_vStart",
            "description": "<p>启点</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_vEnd",
            "description": "<p>终点</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mLine",
            "description": "<p>2D线段</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpLineClass.js",
    "groupTitle": "HelpLineClass"
  },
  {
    "type": "",
    "url": "DrawHelpLine()",
    "title": "",
    "description": "<p>开始绘制线段</p>",
    "group": "HelpLineClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpLineClass.js",
    "groupTitle": "HelpLineClass",
    "name": "Drawhelpline"
  },
  {
    "type": "",
    "url": "OnClear()",
    "title": "",
    "description": "<p>清空</p>",
    "group": "HelpLineClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpLineClass.js",
    "groupTitle": "HelpLineClass",
    "name": "Onclear"
  },
  {
    "type": "",
    "url": "OnInit()",
    "title": "",
    "description": "<p>初始化</p>",
    "group": "HelpLineClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpLineClass.js",
    "groupTitle": "HelpLineClass",
    "name": "Oninit"
  },
  {
    "type": "",
    "url": "OnMouseDown()",
    "title": "",
    "description": "<p>开始绘制线段时,鼠标按下</p>",
    "group": "HelpLineClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标x位置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标y位置</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpLineClass.js",
    "groupTitle": "HelpLineClass",
    "name": "Onmousedown"
  },
  {
    "type": "",
    "url": "OnMouseMove()",
    "title": "",
    "description": "<p>开始绘制线段时,鼠标移动</p>",
    "group": "HelpLineClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标x位置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标y位置</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpLineClass.js",
    "groupTitle": "HelpLineClass",
    "name": "Onmousemove"
  },
  {
    "type": "",
    "url": "OnUpdate()",
    "title": "",
    "description": "<p>2D更新线段</p>",
    "group": "HelpLineClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HelpLineClass.js",
    "groupTitle": "HelpLineClass",
    "name": "Onupdate"
  },
  {
    "type": "",
    "url": "HouseClass",
    "title": "",
    "group": "HouseClass",
    "name": "0",
    "description": "<p>房间类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWallClass",
            "description": "<p>墙体类</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWallClass3D_In",
            "description": "<p>3D内墙类</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWallClass3D_Out",
            "description": "<p>3D外墙类</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWallClass3D_Out_Room",
            "description": "<p>施工图地面Mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_strCADXML",
            "description": "<p>CAD的XML文件</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWallLineClass",
            "description": "<p>CAD方式绘制墙体</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mDoorClass",
            "description": "<p>门类</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWindowClass",
            "description": "<p>窗类</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloorClass",
            "description": "<p>地面类</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mTextClass",
            "description": "<p>文字类</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mText3DClass",
            "description": "<p>立体字</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWallboardClass",
            "description": "<p>墙板类</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCeilingParamClass",
            "description": "<p>吊顶参数化</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFurnitureClass",
            "description": "<p>家具类</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloorParamClass",
            "description": "<p>参数化地面</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mPlaneLightClass",
            "description": "<p>片灯</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWardrobeClass",
            "description": "<p>衣柜</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCeilingClass",
            "description": "<p>吊顶类</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mDecalClass",
            "description": "<p>贴花材质</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWallTop",
            "description": "<p>墙体顶厚</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRoomClass",
            "description": "<p>房间类</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mImportCad",
            "description": "<p>导入cad</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mExportCad",
            "description": "<p>导出cad</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mAIRoomClass",
            "description": "<p>AI一键布置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mGroupClass",
            "description": "<p>动态成组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mGroundClass",
            "description": "<p>地面组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFlueClass",
            "description": "<p>烟道</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mPillarClass",
            "description": "<p>柱子</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mLiangClass",
            "description": "<p>梁</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCeLiangClass",
            "description": "<p>平面上测量</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mSvgClass",
            "description": "<p>SVG</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mObjCtrl",
            "description": "<p>控制物体</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFont",
            "description": "<p>字体</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRenderFloor",
            "description": ""
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRenderWall_In",
            "description": ""
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRenderWall_Out",
            "description": ""
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRenderCeilingTop",
            "description": ""
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRenderCeilingTop_Room",
            "description": ""
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRenderWallTop",
            "description": "<p>墙顶面</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRenderCeiling",
            "description": ""
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_OBBox_Max",
            "description": "<p>户型包围盒max</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_OBBox_Min",
            "description": "<p>户型包围盒min</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fHeight",
            "description": "<p>房屋层高</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fontLoaded",
            "description": "<p>梁</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HouseClass.js",
    "groupTitle": "HouseClass"
  },
  {
    "type": "",
    "url": "OnInit()",
    "title": "",
    "group": "HouseClass",
    "name": "0",
    "description": "<p>初始化房子类</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/HouseClass.js",
    "groupTitle": "HouseClass"
  },
  {
    "type": "",
    "url": "OnLoadXML()",
    "title": "",
    "group": "HouseClass",
    "name": "0",
    "description": "<p>读取XML数据</p>",
    "parameter": {
      "fields": {
        "返回值": [
          {
            "group": "返回值",
            "optional": false,
            "field": "strXML",
            "description": "<p>XML数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/Player/js/HouseClass.js",
    "groupTitle": "HouseClass"
  },
  {
    "type": "",
    "url": "OnLoadObj()",
    "title": "",
    "group": "HouseClass",
    "name": "0",
    "description": "<p>读取墙板数据</p>",
    "parameter": {
      "fields": {
        "返回值": [
          {
            "group": "返回值",
            "optional": false,
            "field": "data",
            "description": "<p>XML数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/Player/js/HouseClass.js",
    "groupTitle": "HouseClass"
  },
  {
    "type": "",
    "url": "HouseClass",
    "title": "",
    "group": "HouseClass",
    "description": "<p>房屋类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRenderFloor",
            "description": "<p>3D地面mesh数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRenderWall_In",
            "description": "<p>3D内墙mesh数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRenderCeilingTop",
            "description": "<p>3D墙体顶面mesh数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRenderCeiling",
            "description": "<p>3D房间顶面mesh数组</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/Player/js/HouseClass.js",
    "groupTitle": "HouseClass",
    "name": "Houseclass"
  },
  {
    "type": "",
    "url": "ObjCtrl",
    "title": "",
    "group": "ObjCtrl",
    "name": "0",
    "description": "<p>物体操作辅助工具</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_curObj",
            "description": "<p>当前物体</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_Outline",
            "description": "<p>2D下轮廓</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRingGeometry",
            "description": "<p>3D下旋转显示用mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRingGeometry_Pick",
            "description": "<p>3D下旋转拾取用mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mArrowGeometry",
            "description": "<p>3D下显示箭头用mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCylinderGeometry",
            "description": "<p>3D下显示柱体用mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mPickGeometry",
            "description": "<p>3D下拾取区域</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "g_bObjRotate",
            "description": "<p>3D下是否旋转</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCurMouseX",
            "description": "<p>鼠标X位置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCurMouseY",
            "description": "<p>鼠标Y位置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "g_bObjRaise",
            "description": "<p>3D下是否升高</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fValue",
            "description": "<p>通用系数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/ObjCtrl.js",
    "groupTitle": "ObjCtrl"
  },
  {
    "type": "",
    "url": "Hide()",
    "title": "",
    "group": "ObjCtrl",
    "name": "0",
    "description": "<p>隐藏物体操作辅助工具</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/ObjCtrl.js",
    "groupTitle": "ObjCtrl"
  },
  {
    "type": "",
    "url": "OnClear()",
    "title": "",
    "group": "ObjCtrl",
    "name": "0",
    "description": "<p>清楚物体操作内容</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/ObjCtrl.js",
    "groupTitle": "ObjCtrl"
  },
  {
    "type": "",
    "url": "Hide2D()",
    "title": "",
    "group": "ObjCtrl",
    "name": "0",
    "description": "<p>2D下隐藏物体操作类</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/ObjCtrl.js",
    "groupTitle": "ObjCtrl"
  },
  {
    "type": "",
    "url": "Hide3D()",
    "title": "",
    "group": "ObjCtrl",
    "name": "0",
    "description": "<p>3D下隐藏物体操作类</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/ObjCtrl.js",
    "groupTitle": "ObjCtrl"
  },
  {
    "type": "",
    "url": "Show(tObject)",
    "title": "",
    "group": "ObjCtrl",
    "name": "0",
    "description": "<p>在选中的物体上显示物体操作辅助工具</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tObject",
            "description": "<p>选中的物体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/ObjCtrl.js",
    "groupTitle": "ObjCtrl"
  },
  {
    "type": "",
    "url": "Show2D()",
    "title": "",
    "group": "ObjCtrl",
    "name": "0",
    "description": "<p>2D显示物体操作辅助工具</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/ObjCtrl.js",
    "groupTitle": "ObjCtrl"
  },
  {
    "type": "",
    "url": "Show3D()",
    "title": "",
    "group": "ObjCtrl",
    "name": "0",
    "description": "<p>3D显示物体操作辅助工具</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/ObjCtrl.js",
    "groupTitle": "ObjCtrl"
  },
  {
    "type": "",
    "url": "OnUpdate()",
    "title": "",
    "group": "ObjCtrl",
    "name": "0",
    "description": "<p>更新物体操作辅助工具</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/ObjCtrl.js",
    "groupTitle": "ObjCtrl"
  },
  {
    "type": "",
    "url": "OnInit()",
    "title": "",
    "group": "ObjCtrl",
    "description": "<p>初始化物体操作辅助工具</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/ObjCtrl.js",
    "groupTitle": "ObjCtrl",
    "name": "Oninit"
  },
  {
    "type": "",
    "url": "PillarClass",
    "title": "",
    "group": "PillarClass",
    "name": "0",
    "description": "<p>柱子操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFlueArray",
            "description": "<p>柱子数组</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PillarClass.js",
    "groupTitle": "PillarClass"
  },
  {
    "type": "",
    "url": "OnKeyDown(iKey)",
    "title": "",
    "group": "PillarClass",
    "description": "<p>键盘操作</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "iKey",
            "description": "<p>键盘值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PillarClass.js",
    "groupTitle": "PillarClass",
    "name": "OnkeydownIkey"
  },
  {
    "type": "",
    "url": "UpdateLabel(tFlue)",
    "title": "",
    "group": "PillarClass",
    "description": "<p>更新模型到四边的距离</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tFlue",
            "description": "<p>当前模型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/FlueClass.js",
    "groupTitle": "PillarClass",
    "name": "UpdatelabelTflue"
  },
  {
    "type": "",
    "url": "UpdateLabel(tFlue)",
    "title": "",
    "group": "PillarClass",
    "description": "<p>更新模型到四边的距离</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tFlue",
            "description": "<p>当前模型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PillarClass.js",
    "groupTitle": "PillarClass",
    "name": "UpdatelabelTflue"
  },
  {
    "type": "",
    "url": "PillarData",
    "title": "",
    "group": "PillarData",
    "name": "0",
    "description": "<p>单个柱子类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_vPos",
            "description": "<p>柱子位置</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PillarData.js",
    "groupTitle": "PillarData"
  },
  {
    "type": "",
    "url": "OnInit()",
    "title": "",
    "group": "PillarData",
    "name": "0",
    "description": "<p>初始化柱子</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PillarData.js",
    "groupTitle": "PillarData"
  },
  {
    "type": "",
    "url": "OnClear()",
    "title": "",
    "group": "PillarData",
    "name": "0",
    "description": "<p>清除当前柱子</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PillarData.js",
    "groupTitle": "PillarData"
  },
  {
    "type": "",
    "url": "OnLoadHouse()",
    "title": "",
    "group": "PluginClass",
    "name": "0",
    "description": "<p>读取户型库数据</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "strFile",
            "description": "<p>要下载的房间模板全路径</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PluginsClass.js",
    "groupTitle": "PluginClass"
  },
  {
    "type": "",
    "url": "OnSaveScene",
    "title": "",
    "group": "PluginClass",
    "description": "<p>保存设计方案到服务器</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PluginsClass.js",
    "groupTitle": "PluginClass",
    "name": "Onsavescene"
  },
  {
    "type": "",
    "url": "OnRoam()",
    "title": "",
    "description": "<p>虚拟漫游</p>",
    "group": "PluginsClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PluginsClass.js",
    "groupTitle": "PluginsClass",
    "name": "Onroam"
  },
  {
    "type": "",
    "url": "OnSaveHttp()",
    "title": "",
    "description": "<p>保存当前系统路径</p>",
    "group": "PluginsClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PluginsClass.js",
    "groupTitle": "PluginsClass",
    "name": "Onsavehttp"
  },
  {
    "type": "",
    "url": "OnSaveToRender()",
    "title": "",
    "description": "<p>保存场景数据，传递到渲染页面</p>",
    "group": "PluginsClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PluginsClass.js",
    "groupTitle": "PluginsClass",
    "name": "Onsavetorender"
  },
  {
    "type": "",
    "url": "OnSaveToRender()",
    "title": "",
    "description": "<p>保存场景数据，传递到渲染页面</p>",
    "group": "PluginsClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PluginsClass.js",
    "groupTitle": "PluginsClass",
    "name": "Onsavetorender"
  },
  {
    "type": "",
    "url": "OnSaveWallboard(strXML)",
    "title": "",
    "description": "<p>保存3D墙板框架数据</p>",
    "group": "PluginsClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "strXML",
            "description": "<p>保存到XML</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PluginsClass.js",
    "groupTitle": "PluginsClass",
    "name": "OnsavewallboardStrxml"
  },
  {
    "type": "",
    "url": "OnSaveWallIn(strXML)",
    "title": "",
    "description": "<p>保存3D内墙面数据</p>",
    "group": "PluginsClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "strXML",
            "description": "<p>保存到XML</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PluginsClass.js",
    "groupTitle": "PluginsClass",
    "name": "OnsavewallinStrxml"
  },
  {
    "type": "",
    "url": "OnSaveWallOut(strXML)",
    "title": "",
    "description": "<p>保存3D外墙数据</p>",
    "group": "PluginsClass",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "strXML",
            "description": "<p>保存到XML</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PluginsClass.js",
    "groupTitle": "PluginsClass",
    "name": "OnsavewalloutStrxml"
  },
  {
    "type": "",
    "url": "PluginsClass",
    "title": "",
    "group": "PluginsClass",
    "description": "<p>插件类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mVersion",
            "description": "<p>版本号</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCurrentOpenSceneFile",
            "description": "<p>当前打开场景的路径</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PluginsClass.js",
    "groupTitle": "PluginsClass",
    "name": "Pluginsclass"
  },
  {
    "type": "",
    "url": "ToCaptureFloorplan()",
    "title": "",
    "group": "PrintClass",
    "name": "0",
    "description": "<p>截户型图</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PrintClass.js",
    "groupTitle": "PrintClass"
  },
  {
    "type": "",
    "url": "ToCaptureDiagramOfPackage()",
    "title": "",
    "group": "PrintClass",
    "name": "0",
    "description": "<p>生成平面包装示意图</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PrintClass.js",
    "groupTitle": "PrintClass"
  },
  {
    "type": "",
    "url": "ToCaptureWallboard()",
    "title": "",
    "group": "PrintClass",
    "name": "0",
    "description": "<p>按带护墙板的每面墙3D截图,带图例框</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PrintClass.js",
    "groupTitle": "PrintClass"
  },
  {
    "type": "",
    "url": "ToCapturekuangjia()",
    "title": "",
    "group": "PrintClass",
    "name": "0",
    "description": "<p>墙板所在墙面的线框图</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "iWall",
            "description": "<p>第几面墙</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "iCount",
            "description": "<p>总的第几块板</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PrintClass.js",
    "groupTitle": "PrintClass"
  },
  {
    "type": "",
    "url": "doPrint()",
    "title": "",
    "group": "PrintClass",
    "name": "0",
    "description": "<p>打开打印功能窗口</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PrintClass.js",
    "groupTitle": "PrintClass"
  },
  {
    "type": "",
    "url": "WriteiMesh(byteArray)",
    "title": "",
    "description": "<p>保存自定义mesh</p>",
    "group": "Rendering",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "byteArray",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/Rendering/js/RenderImageClass.js",
    "groupTitle": "Rendering",
    "name": "WriteimeshBytearray"
  },
  {
    "type": "",
    "url": "OnShowAllRoom()",
    "title": "",
    "group": "RoomClass",
    "name": "0",
    "description": "<p>显示所有房间</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "bShow",
            "description": "<p>true显示，false 不显示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RoomClass.js",
    "groupTitle": "RoomClass"
  },
  {
    "type": "",
    "url": "OnShowRoom()",
    "title": "",
    "group": "RoomClass",
    "name": "0",
    "description": "<p>显示地面对应的房间,2D/3D</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tFloor",
            "description": "<p>选中的地面</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RoomClass.js",
    "groupTitle": "RoomClass"
  },
  {
    "type": "",
    "url": "RoomClass",
    "title": "",
    "group": "RoomClass",
    "description": "<p>房间操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRoomArray",
            "description": "<p>房间数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pCurFurniture",
            "description": "<p>当前模型</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pMoveObjArray",
            "description": "<p>成组的模型组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pMoveFurniture",
            "description": "<p>当前操作的模型组</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RoomClass.js",
    "groupTitle": "RoomClass",
    "name": "Roomclass"
  },
  {
    "type": "",
    "url": "OnClear()",
    "title": "",
    "description": "<p>清空</p>",
    "group": "RoomData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RoomData.js",
    "groupTitle": "RoomData",
    "name": "Onclear"
  },
  {
    "type": "",
    "url": "OnUpdate(tFloor)",
    "title": "",
    "description": "<p>更新房间信息</p>",
    "group": "RoomData",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "tFloor",
            "description": "<p>得到新地面</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RoomData.js",
    "groupTitle": "RoomData",
    "name": "OnupdateTfloor"
  },
  {
    "type": "",
    "url": "RoomData",
    "title": "",
    "group": "RoomData",
    "description": "<p>房间类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloor",
            "description": "<p>房间地面</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWallArray_3D",
            "description": "<p>房间3D内墙</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWallArray_2D",
            "description": "<p>房间2D内墙</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RoomData.js",
    "groupTitle": "RoomData",
    "name": "Roomdata"
  },
  {
    "type": "",
    "url": "TextClass",
    "title": "",
    "group": "TextClass",
    "name": "0",
    "description": "<p>文字操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mTextArray",
            "description": "<p>文字数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pCurText",
            "description": "<p>创建文字</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pMoveText",
            "description": "<p>移动文字</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCurMouseX",
            "description": "<p>记录鼠标X位置</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mCurMouseY",
            "description": "<p>记录鼠标Y位置</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextClass.js",
    "groupTitle": "TextClass"
  },
  {
    "type": "",
    "url": "DrawText",
    "title": "",
    "description": "<p>开始绘制文字</p>",
    "group": "TextClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextClass.js",
    "groupTitle": "TextClass",
    "name": "Drawtext"
  },
  {
    "type": "",
    "url": "OnClear()",
    "title": "",
    "description": "<p>清空所有文字信息</p>",
    "group": "TextClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextClass.js",
    "groupTitle": "TextClass",
    "name": "Onclear"
  },
  {
    "type": "",
    "url": "OnCreate(x,y)",
    "title": "",
    "description": "<p>平面上创建文字函数</p>",
    "group": "TextClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "x",
            "description": "<p>X位置</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "y",
            "description": "<p>Y位置</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextClass.js",
    "groupTitle": "TextClass",
    "name": "OncreateXY"
  },
  {
    "type": "",
    "url": "OnDelete(tText)",
    "title": "",
    "description": "<p>删除指定的文字</p>",
    "group": "TextClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tText",
            "description": "<p>指定的文字</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextClass.js",
    "groupTitle": "TextClass",
    "name": "OndeleteTtext"
  },
  {
    "type": "",
    "url": "OnLoad_XML()",
    "title": "",
    "description": "<p>读取文字信息</p>",
    "group": "TextClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextClass.js",
    "groupTitle": "TextClass",
    "name": "Onload_xml"
  },
  {
    "type": "",
    "url": "OnMouseDown(mouseX,mouseY)",
    "title": "",
    "description": "<p>平面下左键点击移动文字</p>",
    "group": "TextClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y坐标</p>"
          }
        ],
        "返回": [
          {
            "group": "返回",
            "optional": false,
            "field": "Bool",
            "description": "<p>false未点到文字,true点到文字</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextClass.js",
    "groupTitle": "TextClass",
    "name": "OnmousedownMousexMousey"
  },
  {
    "type": "",
    "url": "OnMouseDown(mouseX,mouseY,e)",
    "title": "",
    "description": "<p>平面下左键移动文字, 与OnMouseDown连用</p>",
    "group": "TextClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "e",
            "description": "<p>鼠标按键信息</p>"
          }
        ],
        "返回": [
          {
            "group": "返回",
            "optional": false,
            "field": "Bool",
            "description": "<p>false无移动文字,true有移动文字</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextClass.js",
    "groupTitle": "TextClass",
    "name": "OnmousedownMousexMouseyE"
  },
  {
    "type": "",
    "url": "OnMouseRightUp2D()",
    "title": "",
    "description": "<p>平面下右键点击鼠标</p>",
    "group": "TextClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextClass.js",
    "groupTitle": "TextClass",
    "name": "Onmouserightup2d"
  },
  {
    "type": "",
    "url": "OnSave_XML()",
    "title": "",
    "description": "<p>保存房间文字信息</p>",
    "group": "TextClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextClass.js",
    "groupTitle": "TextClass",
    "name": "Onsave_xml"
  },
  {
    "type": "",
    "url": "OnShowRoomName(bShow)",
    "title": "",
    "description": "<p>显示所有文字</p>",
    "group": "TextClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "bShow",
            "description": "<p>false不显示，true显示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextClass.js",
    "groupTitle": "TextClass",
    "name": "OnshowroomnameBshow"
  },
  {
    "type": "",
    "url": "TextData",
    "title": "",
    "group": "TextData",
    "name": "0",
    "description": "<p>单个文字类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRoomName",
            "description": "<p>文字内容</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mText",
            "description": "<p>文字Mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mTextWhile",
            "description": "<p>暂时没有使用</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mLabel3D",
            "description": "<p>文字3D下标签</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mTextBox",
            "description": "<p>平面下文字想要鼠标点击用box</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_vPos",
            "description": "<p>平面下文字的位置</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextData.js",
    "groupTitle": "TextData"
  },
  {
    "type": "",
    "url": "OnCreate3D()",
    "title": "",
    "description": "<p>在3D中创建文字</p>",
    "group": "TextData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextData.js",
    "groupTitle": "TextData",
    "name": "Oncreate3d"
  },
  {
    "type": "",
    "url": "OnCreate(x,y)",
    "title": "",
    "description": "<p>创建新的文字</p>",
    "group": "TextData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextData.js",
    "groupTitle": "TextData",
    "name": "OncreateXY"
  },
  {
    "type": "",
    "url": "OnDelete()",
    "title": "",
    "description": "<p>删除当前文字</p>",
    "group": "TextData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextData.js",
    "groupTitle": "TextData",
    "name": "Ondelete"
  },
  {
    "type": "",
    "url": "OnInit()",
    "title": "",
    "description": "<p>初始化文字</p>",
    "group": "TextData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextData.js",
    "groupTitle": "TextData",
    "name": "Oninit"
  },
  {
    "type": "",
    "url": "OnShow(bShow)",
    "title": "",
    "description": "<p>是否显示文字</p>",
    "group": "TextData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextData.js",
    "groupTitle": "TextData",
    "name": "OnshowBshow"
  },
  {
    "type": "",
    "url": "OnUpdateName(strText)",
    "title": "",
    "description": "<p>更新文字内容</p>",
    "group": "TextData",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "strText",
            "description": "<p>文字内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextData.js",
    "groupTitle": "TextData",
    "name": "OnupdatenameStrtext"
  },
  {
    "type": "",
    "url": "OnUpdateText()",
    "title": "",
    "description": "<p>在3D中更新文字位置</p>",
    "group": "TextData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/TextData.js",
    "groupTitle": "TextData",
    "name": "Onupdatetext"
  },
  {
    "type": "",
    "url": "WallClass",
    "title": "",
    "group": "WallClass",
    "name": "0",
    "description": "<p>墙体操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWallArray",
            "description": "<p>墙体数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_pCurWall",
            "description": "<p>当前墙体</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRenderLine",
            "description": "<p>墙体2D渲染时显示的线条</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mRenderWallTop",
            "description": "<p>墙体顶厚</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallClass.js",
    "groupTitle": "WallClass"
  },
  {
    "type": "",
    "url": "CheckPosOnLine(posX,posY)",
    "title": "",
    "description": "<p>判断当前点是否在已有墙体上</p>",
    "group": "WallClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "posX",
            "description": "<p>鼠标X坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "posY",
            "description": "<p>鼠标Y坐标</p>"
          }
        ],
        "返回": [
          {
            "group": "返回",
            "optional": false,
            "field": "Array",
            "description": "<p>返回数组,Array[0]=0 点没在墙体上， Array[0]=1,或2 在墙体的端点上,\t Array[0]=3 在墙体有交点，Array[1-3]的值为交点 x,y,z的值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallClass.js",
    "groupTitle": "WallClass",
    "name": "CheckposonlinePosxPosy"
  },
  {
    "type": "",
    "url": "CheckWallPos",
    "title": "",
    "description": "<p>删除指定的墙体</p>",
    "group": "WallClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tWall",
            "description": "<p>指定墙体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallClass.js",
    "groupTitle": "WallClass",
    "name": "Checkwallpos"
  },
  {
    "type": "",
    "url": "DrawWall",
    "title": "",
    "description": "<p>鼠标连续绘制墙体</p>",
    "group": "WallClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "iType",
            "description": "<p>0 墙中线方式绘制，1内墙线方式绘制，2外墙线方式绘制</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallClass.js",
    "groupTitle": "WallClass",
    "name": "Drawwall"
  },
  {
    "type": "",
    "url": "EditWallCoord(fValue,fDegree)",
    "title": "",
    "group": "WallClass",
    "description": "<p>按键盘方向键生成墙体</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "fValue",
            "description": "<p>长度</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fDegree",
            "description": "<p>旋转角度</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallClass.js",
    "groupTitle": "WallClass",
    "name": "EditwallcoordFvalueFdegree"
  },
  {
    "type": "",
    "url": "OnBuildNewWall(mouseX,mouseY,iType)",
    "title": "",
    "description": "<p>创建新的墙体</p>",
    "group": "WallClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "iType",
            "description": "<p>0 墙中线方式绘制，1内墙线方式绘制，2外墙线方式绘制</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallClass.js",
    "groupTitle": "WallClass",
    "name": "OnbuildnewwallMousexMouseyItype"
  },
  {
    "type": "",
    "url": "OnClear",
    "title": "",
    "description": "<p>清除所有墙体</p>",
    "group": "WallClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallClass.js",
    "groupTitle": "WallClass",
    "name": "Onclear"
  },
  {
    "type": "",
    "url": "OnClearLastWall",
    "title": "",
    "description": "<p>清空2D线框</p>",
    "group": "WallClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallClass.js",
    "groupTitle": "WallClass",
    "name": "Onclearlastwall"
  },
  {
    "type": "",
    "url": "OnDelete",
    "title": "",
    "description": "<p>删除指定的墙体</p>",
    "group": "WallClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tWall",
            "description": "<p>指定墙体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallClass.js",
    "groupTitle": "WallClass",
    "name": "Ondelete"
  },
  {
    "type": "",
    "url": "OnInit",
    "title": "",
    "description": "<p>初始化函数</p>",
    "group": "WallClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallClass.js",
    "groupTitle": "WallClass",
    "name": "Oninit"
  },
  {
    "type": "",
    "url": "OnKeyDown(iKey)",
    "title": "",
    "description": "<p>墙体键盘操作函数</p>",
    "group": "WallClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "iKey",
            "description": "<p>键盘按键值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallClass.js",
    "groupTitle": "WallClass",
    "name": "OnkeydownIkey"
  },
  {
    "type": "",
    "url": "OnMouseMove(mouseX,mouseY,buttonDown)",
    "title": "",
    "description": "<p>鼠标连续绘制墙体时的移动操作</p>",
    "group": "WallClass",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "buttonDown",
            "description": "<p>鼠标按键状态</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallClass.js",
    "groupTitle": "WallClass",
    "name": "OnmousemoveMousexMouseyButtondown"
  },
  {
    "type": "",
    "url": "OnMouseRightUp2D()",
    "title": "",
    "description": "<p>2D下鼠标右键释放</p>",
    "group": "WallClass",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallClass.js",
    "groupTitle": "WallClass",
    "name": "Onmouserightup2d"
  },
  {
    "type": "",
    "url": "WallData",
    "title": "",
    "group": "WallData",
    "name": "0",
    "description": "<p>每段墙体类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_vStart",
            "description": "<p>起点</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_vEnd",
            "description": "<p>终点</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_vCenter",
            "description": "<p>中心点</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fLength",
            "description": "<p>墙体长度</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fWidth",
            "description": "<p>墙体宽度</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fHeight",
            "description": "<p>墙体高度</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fRotate",
            "description": "<p>旋转弧度</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_fValue",
            "description": "<p>捕捉精度常数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallData.js",
    "groupTitle": "WallData"
  },
  {
    "type": "",
    "url": "WallData3D_In",
    "title": "",
    "group": "WallData3D_In",
    "name": "0",
    "description": "<p>室内墙面类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWallMesh",
            "description": "<p>墙体mesh</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mTextureData",
            "description": "<p>使用的材质数据</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mUV",
            "description": "<p>UV坐标数据备份</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_vStart",
            "description": "<p>起点</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_vEnd",
            "description": "<p>终点</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_Outline",
            "description": "<p>墙面轮廓线</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallData3D_In.js",
    "groupTitle": "WallData3D_In"
  },
  {
    "type": "",
    "url": "OnInit",
    "title": "",
    "description": "<p>初始化函数</p>",
    "group": "WallData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallData.js",
    "groupTitle": "WallData",
    "name": "Oninit"
  },
  {
    "type": "",
    "url": "OnInit",
    "title": "",
    "description": "<p>初始化函数</p>",
    "group": "WallData",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WallData.js",
    "groupTitle": "WallData",
    "name": "Oninit"
  },
  {
    "type": "",
    "url": "OnCreatePlane(pos1,pos2,iTextureData)",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>创建立面</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "pos1",
            "description": "<p>起点</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "pos2",
            "description": "<p>终点</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "iTextureData",
            "description": "<p>关联第几个材质</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/PillarData.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "WallboardClassClass",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>墙板操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloor",
            "description": "<p>当前操作房间的地面</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_strXML",
            "description": "<p>当前操作的XML参数</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mFloorPerimeter",
            "description": "<p>当前地面周长</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWallboardArray",
            "description": "<p>墙板数组</p>"
          },
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWallEdgeArray",
            "description": "<p>线条(包括角线、踢脚线、顶线、收边)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnInit()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>初始化</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnShowPluginDlg(bShow)",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>显示墙板插件窗口</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "bShow",
            "description": "<p>布尔值，true显示窗口，false不显示窗口</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnPick3D()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>3D下拾取墙板</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "GetBoardSize(tObj)",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>得到墙板尺寸</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tObj",
            "description": "<p>指定的墙板</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OpenZhuangPei()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>打开墙体装配设置窗口</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnCreate()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>开始创建墙板</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnloadXML()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>下载激光扫描测试文件</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnChange()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>改变墙板排序</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnClearObj()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>清空指定房间(地面)上的,指定的物体</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tFloor",
            "description": "<p>指定的地面</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "strFile",
            "description": "<p>指定的物体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "UpdateXianTiao()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>更新拼接条和角线</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "$xml",
            "description": "<p>指定参数XML</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fLWall",
            "description": "<p>当前墙体长度</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "k",
            "description": "<p>当前房间第几段墙体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "UpdateJiaoXian()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>安装踢脚线、顶线</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "$xml",
            "description": "<p>指定参数XML</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fLWall",
            "description": "<p>当前墙体长度</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "k",
            "description": "<p>当前房间第几段墙体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnCreatePingJieTiao(vPos,bVertical,fRotate,fHeight)",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>生成平接条</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "vPos",
            "description": "<p>指定平接条位置</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "bVertical",
            "description": "<p>是否垂直</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fRotate",
            "description": "<p>旋转角度</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fHeight",
            "description": "<p>平接高度</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnCreateTiJiaoXian()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>创建踢脚线</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "vPos",
            "description": "<p>踢脚线创建位置</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fRotateZ",
            "description": "<p>踢脚线旋转角度</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fLength",
            "description": "<p>踢脚线长度</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnCreateDingXian()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>创建踢脚线</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "vPos",
            "description": "<p>顶线创建位置</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fRotateZ",
            "description": "<p>顶脚线旋转角度</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fLength",
            "description": "<p>顶脚线长度</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "GetWallSegmentPos()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>把墙体按门窗得到分段点(按顺序)</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "k",
            "description": "<p>第K面墙</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fRotate",
            "description": "<p>旋转角度</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnMouseDown_Wall_All()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>创建整屋装配墙体</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "IsCorner()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>删除阴角、阳角、收边</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnDeleteEdge()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>删除线条</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnClearCorner()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>删除阴角、阳角、收边</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnUpdateCorner()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>生成阴角、阳角、收边</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "fHeight",
            "description": "<p>高度</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnSortWallboard()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>铺设墙板</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "vPos",
            "description": "<p>当前墙板位置</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fRotate",
            "description": "<p>当前板旋转角度</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fValue",
            "description": "<p>当前板的宽度</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fHeight_Room",
            "description": "<p>当前房间层高</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "strFloorAndWall",
            "description": "<p>属于第几房间的第几面墙</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "OnCreateWallboard()",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>创建墙板</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "vPos",
            "description": "<p>指定墙板位置</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fRotate",
            "description": "<p>指定墙板旋转角度</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fLength",
            "description": "<p>指定墙板长度</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fWidth",
            "description": "<p>指定墙板高度</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fHeight",
            "description": "<p>指定墙板离地高</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "strFloorAndWall",
            "description": "<p>属于第几房间的第几面墙</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "HoleInBoard(tDong,bDoor)",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>墙板门窗处挖洞</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tDong",
            "description": "<p>用来挖洞的物体</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "bDoor",
            "description": "<p>是否是门</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "HoleInFrame(tObj,bDoor)",
    "title": "",
    "group": "WallboardClass",
    "name": "0",
    "description": "<p>框架上挖洞</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tDong",
            "description": "<p>指定平接条位置</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "bDoor",
            "description": "<p>是否是门</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass"
  },
  {
    "type": "",
    "url": "GetPosFromStartPos(vStart,fRotate,fDisWall,fOffset)",
    "title": "",
    "group": "WallboardClass",
    "description": "<p>从线段端点，沿线段一定距离得到新的点</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "vStart",
            "description": "<p>起始端点</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fRotate",
            "description": "<p>线段旋转角度</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fDisWall",
            "description": "<p>离线段距离</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fOffset",
            "description": "<p>偏移值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass",
    "name": "GetposfromstartposVstartFrotateFdiswallFoffset"
  },
  {
    "type": "",
    "url": "GetSegmentFromWall(iWall)",
    "title": "",
    "group": "WallboardClass",
    "description": "<p>得到墙上门窗中点数组</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "iWall",
            "description": "<p>指定的墙体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass",
    "name": "GetsegmentfromwallIwall"
  },
  {
    "type": "",
    "url": "OnClear_Wall(tMesh,fLWall)",
    "title": "",
    "group": "WallboardClass",
    "description": "<p>清除一面墙上的装配式物体</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "iWall",
            "description": "<p>当前分段墙体</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "fRotate",
            "description": "<p>旋转角度</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass",
    "name": "Onclear_wallTmeshFlwall"
  },
  {
    "type": "",
    "url": "OnDelWallboard(tMesh,fLWall)",
    "title": "",
    "group": "WallboardClass",
    "description": "<p>删除分段墙体上的装配式物体</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tMesh",
            "description": "<p>当前分段墙体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass",
    "name": "OndelwallboardTmeshFlwall"
  },
  {
    "type": "",
    "url": "OnMouseDown_Region()",
    "title": "",
    "group": "WallboardClass",
    "description": "<p>点击分段墙体,替换排序方式</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass",
    "name": "Onmousedown_region"
  },
  {
    "type": "",
    "url": "OnMouseDown_Wall()",
    "title": "",
    "group": "WallboardClass",
    "description": "<p>鼠标点击单面墙，创建装配墙板</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass",
    "name": "Onmousedown_wall"
  },
  {
    "type": "",
    "url": "OnMouseMove3D()",
    "title": "",
    "group": "WallboardClass",
    "description": "<p>鼠标在墙上移动时显示分段墙体</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass",
    "name": "Onmousemove3d"
  },
  {
    "type": "",
    "url": "OnMouseRightUp2D()",
    "title": "",
    "group": "WallboardClass",
    "description": "<p>隐藏显示分段墙体</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass",
    "name": "Onmouserightup2d"
  },
  {
    "type": "",
    "url": "OnUpdateQiangBan(fLWall,vStart,vEnd,bXML)",
    "title": "",
    "group": "WallboardClass",
    "description": "<p>更新护墙板</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "fLWall",
            "description": "<p>长度</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "vStart",
            "description": "<p>起点</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "vEnd",
            "description": "<p>终点</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "bXML",
            "description": "<p>是否是初始参数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass",
    "name": "OnupdateqiangbanFlwallVstartVendBxml"
  },
  {
    "type": "",
    "url": "ShowWallboard(iWall,bShow)",
    "title": "",
    "group": "WallboardClass",
    "description": "<p>隐藏指定面墙上的装配式物体</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "iWall",
            "description": "<p>当前分段墙体</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "bShow",
            "description": "<p>是否显示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass",
    "name": "ShowwallboardIwallBshow"
  },
  {
    "type": "",
    "url": "ShowWallboardAll(bShow)",
    "title": "",
    "group": "WallboardClass",
    "description": "<p>显示或隐藏所有装配式物体</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "bShow",
            "description": "<p>是否显示</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/plugins/Wallboard/WallboardClass.js",
    "groupTitle": "WallboardClass",
    "name": "ShowwallboardallBshow"
  },
  {
    "type": "",
    "url": "WindowClass",
    "title": "",
    "group": "WindowClass",
    "name": "0",
    "description": "<p>窗操作类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "mWindowArray",
            "description": "<p>文字内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WindowClass.js",
    "groupTitle": "WindowClass"
  },
  {
    "type": "",
    "url": "OnClear()",
    "title": "",
    "group": "WindowClass",
    "description": "<p>清空所有窗</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WindowClass.js",
    "groupTitle": "WindowClass",
    "name": "Onclear"
  },
  {
    "type": "",
    "url": "OnDelete(tWindow)",
    "title": "",
    "group": "WindowClass",
    "description": "<p>删除指定的窗户</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WindowClass.js",
    "groupTitle": "WindowClass",
    "name": "OndeleteTwindow"
  },
  {
    "type": "",
    "url": "OnHideCtrl()",
    "title": "",
    "group": "WindowClass",
    "description": "<p>隐藏控制</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WindowClass.js",
    "groupTitle": "WindowClass",
    "name": "Onhidectrl"
  },
  {
    "type": "",
    "url": "OnKeyDown(iKey)",
    "title": "",
    "group": "WindowClass",
    "description": "<p>键盘操作</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "iKey",
            "description": "<p>键盘值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WindowClass.js",
    "groupTitle": "WindowClass",
    "name": "OnkeydownIkey"
  },
  {
    "type": "",
    "url": "OnMouseRightUp2D()",
    "title": "",
    "group": "WindowClass",
    "description": "<p>2D下鼠标右键释放</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WindowClass.js",
    "groupTitle": "WindowClass",
    "name": "Onmouserightup2d"
  },
  {
    "type": "",
    "url": "OnShowCtrl(tWindow)",
    "title": "",
    "group": "WindowClass",
    "description": "<p>在指定的窗显示操作辅助</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "tWindow",
            "description": "<p>指定的窗</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WindowClass.js",
    "groupTitle": "WindowClass",
    "name": "OnshowctrlTwindow"
  },
  {
    "type": "",
    "url": "OnShowHelp(mouseX,mouseY)",
    "title": "",
    "group": "WindowClass",
    "description": "<p>2D鼠标移动上去显示高亮</p>",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "mouseX",
            "description": "<p>鼠标X坐标</p>"
          },
          {
            "group": "参数",
            "optional": false,
            "field": "mouseY",
            "description": "<p>鼠标Y坐标</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WindowClass.js",
    "groupTitle": "WindowClass",
    "name": "OnshowhelpMousexMousey"
  },
  {
    "type": "",
    "url": "WindowData",
    "title": "",
    "group": "WindowData",
    "name": "0",
    "description": "<p>单个窗类</p>",
    "parameter": {
      "fields": {
        "成员变量": [
          {
            "group": "成员变量",
            "optional": false,
            "field": "m_vPos",
            "description": "<p>窗户位置</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/WindowData.js",
    "groupTitle": "WindowData"
  },
  {
    "type": "",
    "url": "FloorParamDlgUI",
    "title": "",
    "group": "全局函数",
    "description": "<p>动态加载地面参数窗口</p>",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_FloorAttribute.js",
    "groupTitle": "全局函数",
    "name": "Floorparamdlgui"
  },
  {
    "type": "",
    "url": "HideDlg()",
    "title": "",
    "description": "<p>隐藏对话框</p>",
    "group": "全局函数",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RenderScene2D.js",
    "groupTitle": "全局函数",
    "name": "Hidedlg"
  },
  {
    "type": "",
    "url": "init(bShow)",
    "title": "",
    "description": "<p>初始化Web3D</p>",
    "group": "全局函数",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RenderScene2D.js",
    "groupTitle": "全局函数",
    "name": "InitBshow"
  },
  {
    "type": "",
    "url": "initStats()",
    "title": "",
    "description": "<p>调试信息窗口</p>",
    "group": "全局函数",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RenderScene2D.js",
    "groupTitle": "全局函数",
    "name": "Initstats"
  },
  {
    "type": "",
    "url": "mouseDown(e)",
    "title": "",
    "description": "<p>鼠标按下消息</p>",
    "group": "全局函数",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "e",
            "description": "<p>鼠标信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RenderScene2D.js",
    "groupTitle": "全局函数",
    "name": "MousedownE"
  },
  {
    "type": "",
    "url": "mousewheel(e)",
    "title": "",
    "description": "<p>平面下鼠标中轴滚动, 放到缩小</p>",
    "group": "全局函数",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RenderScene2D.js",
    "groupTitle": "全局函数",
    "name": "MousewheelE"
  },
  {
    "type": "",
    "url": "OnClear()",
    "title": "",
    "description": "<p>清除所有绘制</p>",
    "group": "全局函数",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RenderScene2D.js",
    "groupTitle": "全局函数",
    "name": "Onclear"
  },
  {
    "type": "",
    "url": "OnClearObj()",
    "title": "",
    "description": "<p>只清除家具</p>",
    "group": "全局函数",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RenderScene2D.js",
    "groupTitle": "全局函数",
    "name": "Onclearobj"
  },
  {
    "type": "",
    "url": "OnCreateRoom(iIndex)",
    "title": "",
    "description": "<p>按房间模板创建房间</p>",
    "group": "全局函数",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "iIndex",
            "description": "<p>使用哪个模板 0-4</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RenderScene2D.js",
    "groupTitle": "全局函数",
    "name": "OncreateroomIindex"
  },
  {
    "type": "",
    "url": "OnMouseRightUp()",
    "title": "",
    "description": "<p>鼠标右键 清空当前状态</p>",
    "group": "全局函数",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RenderScene2D.js",
    "groupTitle": "全局函数",
    "name": "Onmouserightup"
  },
  {
    "type": "",
    "url": "OnpenProjectEditor(strTitle)",
    "title": "",
    "description": "<p>场景另存为</p>",
    "group": "全局函数",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "optional": false,
            "field": "strTitle",
            "description": "<p>显示的标题</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RenderScene2D.js",
    "groupTitle": "全局函数",
    "name": "OnpenprojecteditorStrtitle"
  },
  {
    "type": "",
    "url": "OnpenupdateLogs()",
    "title": "",
    "description": "<p>显示更细日志</p>",
    "group": "全局函数",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/Dlg_SystemAttribute.js",
    "groupTitle": "全局函数",
    "name": "Onpenupdatelogs"
  },
  {
    "type": "",
    "url": "OnShow2D()",
    "title": "",
    "description": "<p>创建 2D</p>",
    "group": "全局函数",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RenderScene2D.js",
    "groupTitle": "全局函数",
    "name": "Onshow2d"
  },
  {
    "type": "",
    "url": "OnShow3D()",
    "title": "",
    "description": "<p>创建3D</p>",
    "group": "全局函数",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RenderScene2D.js",
    "groupTitle": "全局函数",
    "name": "Onshow3d"
  },
  {
    "type": "",
    "url": "ShowLoadingDlg(bShow)",
    "title": "",
    "description": "<p>显示加载进度窗口</p>",
    "group": "全局函数",
    "version": "0.0.0",
    "filename": "E:/inetpub/wwwroot/3d/js/RenderScene2D.js",
    "groupTitle": "全局函数",
    "name": "ShowloadingdlgBshow"
  }
] });
