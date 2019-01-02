//index.js89 
//获取应用实例
const app = getApp()
Page({
  handleJump:function(e){
    var id=e.target.dataset.id;
    if(id==1){
      wx.navigateTo({
        url: '/pages/shoplist/shoplist',
      })
    }else if(id==9){
      wx.navigateTo({
        url:'/pages/product/product'
      })
    }else if(id==2){
      wx.navigateTo({
        url: '/pages/periphery/periphery',
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:1,img_url:"../static/banner1.jpg"},
      { id: 2, img_url:"../static/banner2.jpg"},
      { id: 3, img_url:"../static/banner3.jpg"}
    ],
    navlist:[
      { id: 1, img_url: "../static/meishi.png", title: "美食"},
      { id: 2, img_url: "../static/zhoubianyou.png", title: "周边游"},
      { id: 3, img_url: "../static/yeying.png", title: "野营"},
      { id: 4, img_url: "../static/xiari.png", title: "避暑圣地"},
      { id: 5, img_url: "../static/chonglang.png", title: "冲浪"},
      { id: 6, img_url: "../static/hhyt.png", title: "豪华游轮"},
      { id: 7, img_url: "../static/pwcx.png", title: "票务查询"},
      { id: 8, img_url: "../static/jiudian.png", title: "酒店预订" },
      { id: 9, img_url: "../static/shangcheng.png", title: "周边商城"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})