/**
 * @file  数据
 * @author  Firede[firede@firede.us]
 */

define(function() {

    var exports = {};

    var attrPrefix = 'data-';

    /**
     * 设置data的值
     * 
     * @param {HTMLElement} element 目标元素
     * @param {string} key data名
     * @param {string} value data值
     */
    exports.setData = function ( element, key, value ) {
        if ( element.dataset ) {
            element.dataset[ key ] = value;
        }
        else {
            element.setAttribute( attrPrefix + key, value );
        }
    };


    /**
     * 获取data的值
     * 
     * @param {HTMLElement} element 目标元素
     * @param {string} key data名
     * @return {string|null} data值
     */
    exports.getData = function ( element, key ) {
        if ( element.dataset ) {
            var val = element.dataset[ key ];

            if ( typeof( val ) === 'undefined' ) {
                val = null;
            }

            return val;
        }
        else {
            return element.getAttribute( attrPrefix + key );
        }
    };

    /**
     * 删除指定的data项
     * 
     * @param {HTMLElement} element 目标元素
     * @param {string} key data名
     */
    exports.removeData = function ( element, key ) {
        if ( element.dataset ) {
            delete element.dataset[ key ];
        }
        else {
            element.removeAttribute( attrPrefix + key );
        }
    };

    return exports;

});
