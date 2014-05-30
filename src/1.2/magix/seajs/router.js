/**
 * @fileOverview 路由
 * @author 行列
 * @version 1.1
 */
define('magix/router', function(require) {
    var Magix = require("./magix");
    var Event = require("./event");
    //todo dom event;
    eval(Magix.include('../tmpl/router'));
    Router.useState = function() {
        var me = Router,
            initialURL = location.href;
        $(window).on('popstate', function(e) {
            var equal = location.href == initialURL;
            if (!me.poped && equal) return;
            me.poped = 1;
            console.log('push?', e.type, e.state);
            me.route();
        });
    };
    Router.useHash = function() { //extension impl change event
        $(window).on('hashchange', Router.route);
    };
    return Router;
});