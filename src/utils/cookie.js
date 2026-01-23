import { Cookies } from "react-cookie";

const DEFAULT_OPTIONS = {
    path: "/",
    secure: import.meta.env.VITE_PROFILE !== "local",
};

const cookies = new Cookies();

/**
 * 일반 쿠키 생성
 * @param {string} name 
 * @param {string} value 
 * @param {object} options 
 * @returns 
 */
export const setCookie = (name, value, options) => {
    return cookies.set(name, value, { ...DEFAULT_OPTIONS, ...options });
};

/**
 * 쿠키 값 가져오기
 * @param {string} name 
 * @returns 
 */
export const getCookie = (name) => {
    // Array 혹은 OBject면 JSON.parse(name) 자동으로 해줌
    return cookies.get(name);
}

/**
 * 쿠키 삭제
 * @param {string} name 
 * @param {object} options 
 * @returns 
 */
export const removeCookie = (name, options) => {
    return cookies.remove(name, { ...DEFAULT_OPTIONS, ...options });
}

/**
 * Array 쿠키 생성
 * @param {string} name 
 * @param {Array} array 
 * @param {object} options 
 * @returns 
 */
export const setArrayInCookie = (name, array, options) => {
    if ( array && Array.isArray(array) && array.length > 0 ) {
        //JSON.stringify(array) 자동으로 해줌
        setCookie(name, array, options);
    }
};

/**
 * Object 쿠키 생성
 * @param {string} name 
 * @param {object} object 
 * @param {object} options 
 * @returns 
 */
export const setObjectInCookie = (name, object, options) => {
    if ( object && !Array.isArray(object) && Object.keys(object).length > 0 ) {
        //JSON.stringify(object) 자동으로 해줌
        setCookie(name, object, options);
    }
}
