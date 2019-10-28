import request from '@/utils/request'

export function login(data) {
  // return request({
  //   url: '/user/login',
  //   method: 'post',
  //   data
  // })
  console.log(data.username+"===="+data.password)

  return request({
    url: `/Authen/login?name=${data.username}&pwd=${data.password}`,
    method: 'post',
    // data:JSON.stringify(data)
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: `/Authen/logout`,
    method: 'get'
  })
}

export function  sendAuthCode(data) {
  console.log("email: "+data);
  return request({
    url: `/Authen/getAuthCode?toEmail=${data}`,
    method: 'get'
  })
}

export function  checkAuthCode(data) {
  console.log("code: "+data);
  return request({
    url: `/Authen/checkAuthCode?InputAuthCode=${data}`,
    method: 'get'
  })
}

export function  findPwd(data) {
  console.log("code: "+data);
  return request({
    url: `/Authen/findPwd?newPwd=${data}`,
    method: 'put'
  })
}
