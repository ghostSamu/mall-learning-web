import request from '@/utils/request'

export function fetchTreeList() {
    return request({
        url: '/menu/treeList',
        method: 'get'
    })
}
