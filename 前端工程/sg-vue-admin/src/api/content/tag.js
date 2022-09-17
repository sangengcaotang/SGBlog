import request from '@/utils/request'

// 查询分类列表
export function listTag(query) {
  return request({
    url: '/content/tag/list',
    method: 'get',
    params: query
  })
}

// 查询分类列表
export function listAllTag() {
  return request({
    url: '/content/tag/listAllTag',
    method: 'get'
  })
}
// 查询分类详细
export function getTag(id) {
  return request({
    url: '/content/tag/' + id,
    method: 'get'
  })
}

// 新增分类
export function addTag(data) {
  return request({
    url: '/content/tag',
    method: 'post',
    data: data
  })
}

// 修改分类
export function updateTag(data) {
  return request({
    url: '/content/tag',
    method: 'put',
    data: data
  })
}

// 删除分类
export function delTag(id) {
  return request({
    url: '/content/tag/' + id,
    method: 'delete'
  })
}

// 导出分类
export function exportTag(query) {
  return request({
    url: '/content/tag/export',
    method: 'get',
    params: query
  })
}
