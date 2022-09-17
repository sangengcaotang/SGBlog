import request from '@/utils/request'
import downloadService from '@/utils/downloadService'

// 查询分类列表
export function listCategory(query) {
  return request({
    url: '/content/category/list',
    method: 'get',
    params: query
  })
}

// 查询分类列表
export function listAllCategory() {
  return request({
    url: '/content/category/listAllCategory',
    method: 'get'
  })
}
// 查询分类详细
export function getCategory(id) {
  return request({
    url: '/content/category/' + id,
    method: 'get'
  })
}

// 新增分类
export function addCategory(data) {
  return request({
    url: '/content/category',
    method: 'post',
    data: data
  })
}

// 修改分类
export function updateCategory(data) {
  return request({
    url: '/content/category',
    method: 'put',
    data: data
  })
}

// 删除分类
export function delCategory(id) {
  return request({
    url: '/content/category/' + id,
    method: 'delete'
  })
}

// 导出分类
export function exportCategory() {
  return downloadService({
    url: '/content/category/export',
    method: 'get'
  })
}
