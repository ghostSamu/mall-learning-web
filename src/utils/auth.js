
const TokenKey = 'Authorization'

export function getToken() {
    return window.localStorage.getItem(TokenKey);
}

export function setToken(token) {
    window.localStorage.setItem(TokenKey,token)  //window 对象首字母小写。。   要区分大小写啊
}

export function removeToken() {

}
