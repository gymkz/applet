// pages/my/mhome/mhome.js

const maxH = 260;
const title = '张小三';

Page({

  data: {
    alpha: 0,
    title: '',
    tabIndex: 0,
    tabList: ['作品', '合集', '视频'],
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onChangeTab: function(e) {
    // console.log(e);
    let index = e.currentTarget.dataset.index;
    this.setData({
      tabIndex: index
    })
  },

  onPageScroll: function (e) {
    // console.log(e);
    let that = this;
    let alpha = e.scrollTop/maxH;
    if(that.data.alpha > 1 && alpha > 1) {
      return;
    }
    that.setData({
      alpha,
      title: alpha > 0.7 ? title : ''
    })
  }
})