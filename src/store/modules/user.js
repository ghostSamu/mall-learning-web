import {getInfo, login} from '@/api/login'
import {setToken} from "@/utils/auth";

const  user = {
    state: {
        name: '',
        avatar: '',
        roles: []
    },

    mutations: {
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        }
    },

    actions: {
        //登录
        login({commit}, userInfo){
            const username = userInfo.username.trim()
            return new Promise(((resolve, reject) => {
                login(username, userInfo.password).then(response => {
                    const data = response.data
                    const tokenStr = data.tokenHead+data.token
                    setToken(tokenStr)
                    commit('SET_NAME',username)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            }))
        },

        //获取用户信息
        GetInfo({commit}) {
            return new Promise((resolve,reject) => {
                getInfo().then(response => {
                    const data = response.data
                    if (data.roles && data.roles.length > 0) {
                        commit('SET_ROLES',data.roles)
                    }else {
                        reject('getInfo: roles must be a non-null array !')
                    }
                    commit('SET_NAME', data.username)
                    commit('SET_AVATAR', data.icon)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        FedLogOut(){

        }
    }
}

export default user
