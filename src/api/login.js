import request from '@/utils/request'

export function login(username, password) {
    return request({
        url: '/admin/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}

export function updateStatus(id, params) {
    return request({
        url: '/admin/updateStatus/' + id,
        method: 'post',
        params: params
    })
}

export function createAdmin(data) {
    return request({
        url: '/admin/register',
        method: 'post',
        data: data
    })
}

export function updateAdmin(id, data) {
    return request({
        url: '/admin/update' + id,
        method: 'post',
        data: data
    })
}


export function deleteAdmin(id) {
    return request({
        url: '/admin/delete' + id,
        method: 'post'
    })
}


export function getInfo() {
    return request({
        url: '/admin/info',
        method: 'get'
    })
}

export function fetchList(params) {
    return request({
        url: 'admin/list',
        method: 'get',
        params: params
    })
}

export function allocRole(data) {
    return request({
        url: 'admin/role/update',
        method: 'post',
        data: data
    })
}

export function getRoleByAdmin(adminId) {
    return request({
        url: 'admin/role/'+adminId,
        method: 'get'
    })
}
