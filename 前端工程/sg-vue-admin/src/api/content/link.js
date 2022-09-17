import request from '@/utils/request'

// 查询友链列表
export function listLink(query) {
  return request({
    url: '/content/link/list',
    method: 'get',
    params: query
  })
}

// 查询友链详细
export function getLink(id) {
  return request({
    url: '/content/link/' + id,
    method: 'get'
  })
}

export function changeLinkStatus(id, newStatus) {
  return request({
    url: '/content/link/changeLinkStatus',
    method: 'put',
    data: {
      id: id,
      status: newStatus
    }
  })
}

// 新增友链
export function addLink(data) {
  return request({
    url: '/content/link',
    method: 'post',
    data: data
  })
}

// 修改友链
export function updateLink(data) {
  return request({
    url: '/content/link',
    method: 'put',
    data: data
  })
}

// 删除友链
export function delLink(id) {
  return request({
    url: '/content/link/' + id,
    method: 'delete'
  })
}

