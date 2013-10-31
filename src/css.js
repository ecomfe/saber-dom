/**
 * @file  样式
 * @author  Firede[firede@firede.us]
 */

define(function() {

    var exports = {};

    var getComputedStyle = document.defaultView.getComputedStyle;

    /**
     * 将CSS属性驼峰化
     * 
     * @param {string} target 目标字符串
     * @return {string}
     */
    function camelize( target ) {
        return target.replace(/-+(.)?/g, function( match, chr ) {
            return chr ? chr.toUpperCase() : '';
        });
    }

    var detectEle = document.createElement('div');
    var prefixes = ['webkit', 'ms', 'o'];
    /**
     * 检测支持的CSS属性名称
     * 如果没有找到支持的属性名称返回原有值
     *
     * @inner
     * @param {string} property CSS属性名
     * @return {string}
     */
    function detectProperty( property ) {
        if ( property.charAt(0) !== '-' ) {
            var style = detectEle.style;
            var name = camelize( property );

            if ( !( name in style ) ) {
                name = property.charAt( 0 ).toUpperCase()
                            + property.substring( 1 );
                for ( var i = 0, prefix; prefix = prefixes[i]; i++ ) {
                    if ( prefix + name in style ) {
                        property = '-' + prefix + '-' + property;
                        break;
                    }
                }
            }
        }
        return property;
    }

    /**
     * 获取样式
     * 
     * @param {HTMLElement} element 目标元素
     * @param {string} property 属性
     * @return {string|null}
     */
    exports.getStyle = function( element, property ) {
        property = detectProperty(property);
        return element.style[ camelize( property ) ]
            || getComputedStyle( element ).getPropertyValue( property );
    };

    /**
     * 设置样式
     * 
     * @param {HTMLElement} element 目标元素
     * @param {string} property 属性
     * @param {string} value 值
     */
    exports.setStyle = function( element, property, value ) {
        property = detectProperty(property);
        element.style[ camelize( property ) ] = value;
    };

    /**
     * 显示DOM元素
     *
     * @param {HTMLElement} element 目标元素
     */
    exports.show = function( element ) {
        if ( exports.getStyle( element, 'display' ) === 'none' ) {
            element.style.display = null;
        }
    };

    /**
     * 隐藏DOM元素
     *
     * @param {HTMLElement} element 目标元素
     */
    exports.hide = function( element ) {
        element.style.display = 'none';
    };

    /**
     * 为目标元素添加className
     *
     * @public
     * @param {HTMLElement} element 目标元素
     * @param {string} className 要添加的className
     *
     * @return {HTMLElement} 目标元素
     */
    exports.addClass = function( element, className ) {
        // 优先使用classList. 在iOS 5, Android 3 之后开始支持
        if ( element.classList ) {
            element.classList.add( className );
        }
        else {
            var classes = element.className
                ? element.className.split( /\s+/ ) : [];

            for ( var i = 0; i < classes.length; i++ ) {
                if ( classes[ i ] === className ) {
                    return element;
                }
            }

            classes.push( className );
            element.className = classes.join( ' ' );
        }

        return element;
    };

    /**
     * 移除目标元素的className
     *
     * @public
     * @param {HTMLElement} element 目标元素
     * @param {string} className 要移除的className
     *
     * @return {HTMLElement} 目标元素
     */
    exports.removeClass = function( element, className ) {
        if ( element.classList ) {
            element.classList.remove( className );
        }
        else {
            var classes = element.className
                ? element.className.split( /\s+/ ) : [];

            for ( var i = 0; i < classes.length; i++ ) {
                if ( classes[ i ] === className ) {
                    classes.splice( i, 1 );
                    i--;
                }
            }
            element.className = classes.join( ' ' );
        }

        return element;
    };

    /**
     * 判断元素是否拥有指定的className
     *
     * @public
     * @param {HTMLElement} element 目标元素
     * @param {string} className 要判断的className
     *
     * @return {boolean} 是否拥有指定的className
     */
    exports.hasClass = function ( element, className ) {
        // 方法名用 hasClass，是因为 contains 在 dom 模块中可能引起歧义
        if ( element.classList ) {
            return element.classList.contains( className );
        }
        else {
            var classes = element.className.split( /\s+/ );
            for ( var i = 0; i < classes.length; i++ ) {
                if ( classes[ i ] === className ) {
                    return true;
                }
            }
            return false;
        }
    };


    return exports;
});
