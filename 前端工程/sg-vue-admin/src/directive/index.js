import hasPermission from './permission/hasPermission'

const install = function(Vue) {
  Vue.directive('hasPermission', hasPermission)
}

if (window.Vue) {
  window['hasPermission'] = hasPermission
  Vue.use(install); // eslint-disable-line
}

export default install
