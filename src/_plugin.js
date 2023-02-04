import directive from './_directive'
import {VPrlx} from './_directive'

/**
 * Vue plugin definition
 * @param {Vue} Vue
 */
export default (Vue) => {
  Vue.directive('prlx', directive)
  Vue.directive('prlx', VPrlx)
  VPrlx
}