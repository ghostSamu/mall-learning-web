import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from "@/store/modules/permission";
import getters from './getter'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        user,
        permission
    },
    getters
})

export default store
