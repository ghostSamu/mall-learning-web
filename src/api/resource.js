import request from "@/utils/request"

export function fetchAllResourceList() {
    return request({
        url: '/resource/listAll',
        method: 'get'
    })
}
