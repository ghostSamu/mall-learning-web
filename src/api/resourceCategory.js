import request from "@/utils/request"

export function listAllCate() {
    return request({
        url: '/resourceCategory/listAll',
        method: 'get'
    })
}
