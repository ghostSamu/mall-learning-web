import request from '@/utils/request'

export  function fetchAllRoleList() {
    return request({
        url: '/role/listAll',
        method: 'get'
    })
}
