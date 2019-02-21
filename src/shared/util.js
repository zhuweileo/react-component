const _toString = Object.prototype.toString

export function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}

export function debounce(fn,delay) {
  let timer
  return function () {
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn(...args)
    },delay)
  }
}
