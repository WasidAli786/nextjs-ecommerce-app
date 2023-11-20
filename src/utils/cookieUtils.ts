import Cookies from "js-cookie";

const cookieUtils = {
  setCookie: (name: string, value: any, options = {}) => {
    Cookies.set(name, value, options);
  },

  getCookie: (name: string) => {
    return Cookies.get(name);
  },
  
  removeCookie: (name: string, options = {}) => {
    Cookies.remove(name, options);
  },
};

export default cookieUtils;
