import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/idnex'

Vue.component('svg-icon',SvgIcon)
const requiredAll = requireContext => requireContext.keys().map(requireContext) //遍历文件
const req = require.context('./svg', false, /\.svg$/)

requiredAll(req)
