/**
 * 统一网络配置
 */
const url = 'http://192.168.8.107:8090/';

/**
 * 
 * @param {
      url: 'url',
      data: {},
      method: '',
      header: {}
   } options 
 */

export function request(options) {

  options.url = url + options.url;

  console.log('《====== 请求参数 ======》》');
  console.log(options);
  return new Promise((resolve) => {
    wx.request({
      ...options,
      success: (res) => {
        console.log('《====== 响应数据 ======》》');
        console.log(res);
        resolve(res.data)
      },
      fail: (err) => {
        console.log('《====== 请求错误 ======》》');
        console.log(err);
        resolve('请求抱错')
      },
      complete: () => {
        // 取消加载框之类的操作
      }
    })
  });
}
