export const debounce = (func, wait, immediate?) => {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const copyObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const findAncestor = (element, selector) => {
  if (!element) {
    return null;
  }
  if (typeof element.closest === 'function') {
    return element.closest(selector) || null;
  }
  while (element) {
    if (element.matches(selector)) {
      return element;
    }
    element = element.parentElement;
  }
  return null;
};

export const randomString = (length) => {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};