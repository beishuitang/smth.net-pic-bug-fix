// ==UserScript==
// @name         fix jpg bug
// @namespace    https://github.com/beishuitang/smth.net-pic-bug-fix
// @version      0.4.1
// @description  修复水木看图bug
// @author       tiewuzi
// @match        http*://www.newsmth.net/*
// @updateURL    https://beishuitang.github.io/smth.net-pic-bug-fix/smth_fix_pic.user.js

// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    console.log('pic bug fixed')

    let targetNode = document.querySelector('#body');
    let config = {
        attributes: false,
        childList: true,
        subtree: false
    };

    function changeUrl(img) {
        var m = img.src.match(/https{0,1}:\/\/www\.newsmth\.net\/nForum\/att\/(\w+)\/(\d+)\/(\d+)\/large/);
        if (m != null) {
            img.src = 'http://m.newsmth.net/att/' + m[1] + '/' + m[2] + '/' + m[3] + '/middle';
            img.parentNode.href = 'http://m.newsmth.net/att/' + m[1] + '/' + m[2] + '/' + m[3];

        }
    }

    const mutationCallback = (mutationsList) => {
        var imgs = targetNode.getElementsByTagName('img');
        for (let index = 0; index < imgs.length; index++) {
            const img = imgs[index];
            changeUrl(img);
        }
    };

    let observer = new MutationObserver(mutationCallback);
    observer.observe(targetNode, config);
    //observer.disconnect();

})();