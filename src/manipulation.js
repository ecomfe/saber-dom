/**
 * @file DOM节点操作
 * @author treelite(c.xinle@gmail.com)
 */

define(function () {

    var exports = {};
    
    /**
     * 获取元素的子节点
     *
     * @public
     * @param {HTMLElement} element DOM元素
     * @return {Array.<HTMLElement>} 子节点
     */
    exports.children = function (element) {
        var res = []; 

        var items = element.children;
        for (var i = 0, item; item = items[i]; i++) {
            if (item.nodeType == 1) {
                res.push(item);
            }
        }

        return res;
    };

    return exports;
});
