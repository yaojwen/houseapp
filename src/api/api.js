import axios from 'axios'
import qs from 'qs'

export const IP = 'http://127.0.0.1:80'

//登录
// acc: 用户名
// pwd: 密码
export function login(acc, pwd){
    return axios.post(IP + '/login.php', qs.stringify({ acc, pwd }))
}


//获取猜你喜欢的数据
export function gethouselist(){
    return axios.get(IP + '/gethouselist.php')
}