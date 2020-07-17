//pages/peopleInfo/peopleInfo.js
import province_list from '../../utils/area.js'
import Toast from "../../miniprogram_npm/@vant/weapp/toast/toast";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaList: province_list,
    show_area: false,
    currentPerson: {
      province: "",
      city: "",
      county: "",
      name: "",
      area: "",
      address: "",
      idcard: "",
      phone: "",
      jobNumber:""
    },
    type: "0"
  },

  // 点击选择地址按钮
  selectArea() {
    this.setData({
      show_area: true
    })
  },
  // 点击遮罩或取消关闭选择器
  onCloseArea(event) {
    this.setData({
      show_area: false
    })
  },
  // 点击确定，存储信息
  onConfirmArea(event) {
    this.setData({
      show_area: false,
      "currentPerson.province": event.detail.values[0].name,
      "currentPerson.city": event.detail.values[1].name,
      "currentPerson.county": event.detail.values[2].name,
      "currentPerson.areacode": event.detail.values[2].code,
      "currentPerson.area": event.detail.values[0].name + event.detail.values[1].name + event.detail.values[2].name
    })
    console.log(this.data)
  },
  // 输入框
  onValueChange(e) {
    var key = "currentPerson." + e.target.id;
    var obj = {};
    obj[key] = e.detail;
    this.setData(obj)
  }
})