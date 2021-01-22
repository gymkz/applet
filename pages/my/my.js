// pages/my/my.js
Page({

  data: {
    tablist: [{
      icon: '/res/icon/ruzhu.png',
      value: '创作入驻'
    },{
      icon: '/res/icon/lishi.png',
      value: '观看记录'
    },{
      icon: '/res/icon/fankui.png',
      value: '意见反馈'
    },{
      icon: '/res/icon/fenxiang.png',
      value: '分享好友'
    },{
      icon: '/res/icon/shezhi.png',
      value: '设置'
    }]
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {

  },

  onPullDownRefresh: function () {

  },

  onTabPress: function () {
    wx.navigateTo({
      url: '/pages/my/info/info',
    })
  },
})