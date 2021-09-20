import axios from 'axios'
import {Message} from "element-ui";

const service = axios.create({
    //baseURL: process.env.BASE_URL,
    baseURL: 'http://127.0.0.1:3000/mock/11',
    timeout: 15000,
    retry: 3, retryDelay: 1000,  //设置重复请求次数，系统要做统一的请求失败处理，不然会getinfo的时候一直报错
    cancelRequest: true  //取消重复请求
})
//request拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})
//response拦截器
service.interceptors.response.use(
    response => {
    const  res = response.data
    if (res.code !== 200 ){
        Message({
            message: res.message,
            type: "error",
            duration: 3 * 1000
        })
        return Promise.reject('error')
    }else {
        return response.data
    }},
    error => {
        console.log(error)
        Promise.reject(error)
    })



export default service
