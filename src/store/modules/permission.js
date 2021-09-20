import { asyncRouterMap, constantRouterMap } from '@/router/index'

//判断是否有权限访问该菜单
function hasPermission(menus, route) {
    //排除404頁面
    if (route.name) {
        // console.log("route is ：" + route.meta.title)
        // console.log("name is ：" + route.name)
        let currMenu = getMenu(route.name, menus);
        // console.log("currMenu is ：" + currMenu.title)
        if (currMenu!=null){

            if (currMenu.title != null && currMenu.title !== ''){
                route.meta.title = currMenu.title;

            }
            if (currMenu.icon != null && currMenu.icon !== ''){
                route.meta.icon = currMenu.icon;
            }
            if (currMenu.hidden != null){
                route.meta.hidden = currMenu.hidden !== 0; // ！==严格不等式
            }
            if (currMenu.sort != null && currMenu.sort !== ''){
                route.meta.sort = currMenu.sort;
            }
            return true;
        }else {
            route.sort = 0;
            if (route.hidden !== undefined && route.hidden === true){
                return true;
            }else {
                return false;
            }
        }
    }else {
        return false
    }
}

//根据路由名称获取菜单
function getMenu(name,menus) {
    for (let i=0; i < menus.length; i++){
        let menu = menus[i];
        if (name===menu.name) {
            return menu;
        }
    }
    return null
}

//对菜单进行排序
function sortRouters(accessedRouters) {
    for (let i=0; i<accessedRouters.length; i++){
        let router = accessedRouters[i];
        if (router.children && router.children.length > 0){
            router.children.sort(compare("sort"));
        }
    }
    accessedRouters.sort(compare("sort"))
}

//降序比较函数
function compare(p) {
    return function (m,n) {
        let a = m[p];
        let b = n[p];
        return b-a;
    }
}


const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
      SET_ROUTERS: (state, routers) => {
          state.addRouters = routers;
          state.routers = constantRouterMap.concat(routers);
      }
    },
    actions: {
        GenerateRoutes({commit}, data){
            return new Promise(resolve => {
                const {menus} = data;
                const {username} = data;
                const  accessedRouters = asyncRouterMap.filter(y => {
                    if (username === 'admin'){
                        return true;
                    }
                    // if (hasPermission(menus,y)){
                        if (y.children && y.children.length > 0){
                            y.children = y.children.filter(child => {
                               if (hasPermission(menus,child)) {
                                   return child
                               }
                               return false
                            });
                            return y;
                        }else {
                            // return y  //不存在children的页面  error 404
                        }
                    // }
                    // return  false
                });
                sortRouters(accessedRouters);
                // console.log(accessedRouters)
                commit('SET_ROUTERS', accessedRouters);
                resolve();
            })
        }
    }
}

export default permission;


































