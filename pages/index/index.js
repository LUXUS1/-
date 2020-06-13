// pages/index/index.js
Page({
  data: {
    avatarUrl: '/image/user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    // bookList:[],
    modules: [
      {
      url: "/pages/back/index",
      name: "返程登记",
      icon: "/image/fancheng.png"
    }, 
    {
        url: "/pages/daka/index",
      name: "健康打卡",
      icon: "/image/daka.png"
    }, {
        url: "/pages/xinxiwanshan/index",
      name: "信息完善",
        icon: "/image/bianji.png"
      }, {
        url: "/pages/renzheng/index",
      name: "我的认证",
      icon: "/image/renzheng.png"
      }, {
        url: "/pages/school/index",
      name: "学校管理",
      icon: "/image/xuexiao.png"
      }, {
        url: "/pages/other/index",
      name: "其他",
      icon: "/image/kuozhan.png"
      }]
  },
  onLoad: function (query) {
    console.log(query)


    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              if(res.userInfo.avatarUrl){
                this.setData({
                  avatarUrl: res.userInfo.avatarUrl,
                  userInfo: res.userInfo
                })
              }
            }
          })
        }
      }
    })

    if (query.scene) {
      wx.navigateTo({
        url: '/pages/access/access?scene=' + query.scene
      })
    }
  },
  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {

  // },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {

  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})