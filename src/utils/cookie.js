import { Cookies } from "react-cookie";

const cookies = new Cookies();

/**
 * 일반 쿠키 생성
 * @param {string} name 
 * @param {string} value 
 * @param {boolean} isLocal 
 * @param {*} options 
 * @returns 
 */
export const setCookie = (name, value, isLocal, options) => {
    const shouldUseSecure = !isLocal;
    const updatedOptions = { 
        ...options, 
        ...(shouldUseSecure && { secure: true }) 
    };
    return cookies.set(name, value, updatedOptions);
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
 * @param {boolean} isLocal 
 * @param {*} options 
 * @returns 
 */
export const removeCookie = (name, isLocal, options) => {
    const shouldUseSecure = !isLocal;
    const updatedOptions = { 
        ...options, 
        ...(shouldUseSecure && { secure: true }) 
    };
    return cookies.remove(name, updatedOptions);
}

/**
 * Array 쿠키 생성
 * @param {string} name 
 * @param {Array} array 
 * @param {boolean} isLocal 
 * @param {*} options 
 * @returns 
 */
export const setArrayInCookie = (name, array, isLocal, options) => {
    if ( array && Array.isArray(array) && array.length > 0 ) {
        //JSON.stringify(array) 자동으로 해줌
        setCookie(name, array, isLocal, options);
    }
};

/**
 * Object 쿠키 생성
 * @param {string} name 
 * @param {Object} object 
 * @param {boolean} isLocal 
 * @param {*} options 
 * @returns 
 */
export const setObjectInCookie = (name, object, isLocal, options) => {
    if ( object && !Array.isArray(object) && Object.keys(object).length > 0 ) {
        //JSON.stringify(object) 자동으로 해줌
        setCookie(name, object, isLocal, options);
    }
}
