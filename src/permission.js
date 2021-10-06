import router from './router'
import store from "./store";
import {Message} from "element-ui";
import { getToken } from "@/utils/auth";

const whiteList = ['/login']
router.beforeEach(((to, from, next) => {

    if (getToken()){
        if (to.path === '/login'){
            next({path: '/'})
            console.log("this is not login")
        }else {
            if (store.getters.roles.length === 0) {
                store.dispatch('GetInfo').then(res => {
                    let menus = res.data.menus;
                    let username = res.data.username;
                    store.dispatch('GenerateRoutes',{menus,username}).then(()=> {
                        router.addRoutes(store.getters.addRouters);
                        next({...to, replace: true})
                    })
                }).catch((error)=> {
                    store.dispatch('FedLogOut').then(()=>{
                        Message.error(error || 'Verification failed, please login again')
                        next({path: '/'})
                    })
                })
            }else {
                next()
            }
        }

    }else {
        if (whiteList.indexOf(to.path) !== -1){  //数组下标-1 不在数组中
            next()
        }else {
            next('/login')
        }
    }
}))

router.afterEach(()=>{

})
