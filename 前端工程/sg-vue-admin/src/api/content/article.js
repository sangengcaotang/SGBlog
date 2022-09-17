import request from '@/utils/request'

// 查询文章列表
export function addArticle(data) {
  return request({
    url: '/content/article',
    method: 'post',
    data: data
  })
}

// 查询文章列表
export function listArticle(query) {
  return request({
    url: '/content/article/list',
    method: 'get',
    params: query
  })
}

// 删除文章
export function delArticle(id) {
  return request({
    url: '/content/article/' + id,
    method: 'delete'
  })
}

// 查询分类详细
export function getArticle(id) {
  return request({
    url: '/content/article/' + id,
    method: 'get'
  })
}

// 修改分类
export function updateArticle(data) {
  return request({
    url: '/content/article',
    method: 'put',
    data: data
  })
}
