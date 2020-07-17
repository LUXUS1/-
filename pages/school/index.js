// miniprogram/pages/people/people.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modules: [{
        url: "/pages/peopleInfo/index",
      name: "信息修改",
      icon: "/image/fieldapplication.png"
    }, {
      url: "/pages/placeHistory/index",
      name: "信息记录",
      icon: "/image/measuredvalue.png"
    }],
  },

})