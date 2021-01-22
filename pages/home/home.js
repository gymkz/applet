// pages/home/home.js
Page({

  data: {
    tabList: ['关注', '推荐', '月榜', '周榜', '日榜'],
    tabIndex: 1,
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },
  onChangeTab: function(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      tabIndex: index
    })
  },
  onPressHuati: function(e) {
    
  },
  onPressItem: function(e) {
    wx.navigateTo({
      url: '/pages/home/video/video',
    })
  }

})