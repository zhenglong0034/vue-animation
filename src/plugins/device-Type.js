const deviceType = {}
deviceType.install = function(Vue) {
  Vue.prototype.deviceTypeJudge = function(type) {
    let returnValue = false
    const u = navigator.userAgent
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
    const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (type === 'android' && isAndroid) {
      returnValue = true
    }
    if (type === 'ios' && isIos) {
      returnValue = true
    }
    console.log(returnValue)
    return returnValue
  }
}

export default deviceType
