/**
 * 全局API接口定义
 */
const net = require('../net/index');

export function login(data={}) {
  return net.request({
    url: 'api/login',
    method: 'POST',
    data
  });
}

export function getOpenId(data={}) {
  return net.request({
    url: 'wxchat/getOpenId',
    method: 'GET',
    data
  });
}

export function getSha256(data={}) {
  return net.request({
    url: 'wxchat/getSha256',
    method: 'GET',
    data
  });
}
