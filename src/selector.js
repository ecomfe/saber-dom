/**
 * @file  选择器
 * @author  Firede[firede@firede.us]
 */

define(function() {

    var exports = {};

    /**
     * 根据id获取指定的DOM元素
     *
     * @public
     * @param {string|HTMLElement} id 元素的id或DOM元素
     * @return {HTMLElement|null} 获取的元素，找不到时返回null
     */
    exports.g = function( id ) {
        if ( !id ) {
            return null;
        }

        return typeof id === 'string' ? document.getElementById( id ) : id;
    };

    /**
     * 根据选择器获取指定DOM元素
     *
     * @public
     * @param {string} selector 元素的selector
     * @param {HTMLElement} context 上下文
     * @return {HTMLElement|null} 获取的元素，找不到时返回null
     */
    exports.query = function( selector, context ) {
        if ( 'string' !== typeof selector ) {
            return selector;
        }

        context = context || document.body;

        return context.querySelector( selector );
    };

    /**
     * 根据选择器选择DOM元素列表
     *
     * @public
     * @param {string} selector 元素的selector
     * @param {HTMLElement} context 上下文
     * @return {Array} 获取的元素列表，找不到时为空数组
     */
    exports.queryAll = function( selector, context ) {
        if ( Array.isArray( selector ) ) {
            return selector;
        }

        context = context || document.body;

        var nodeList = context.querySelectorAll( selector );

        return Array.prototype.slice.call( nodeList );
    };

    return exports;

});