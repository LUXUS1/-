// miniprogram/pages/people/people.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modules: [{
        url: "/pages/peopleInfo/peopleInfo",
      name: "信息修改",
      icon: "/image/fieldapplication.png"
    }, {
      url: "/pages/placeHistory/placeHistory",
      name: "出入记录",
      icon: "/image/measuredvalue.png"
    }],
  },

})