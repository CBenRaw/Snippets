// ==UserScript==
// @name         leodisgames show inventory
// @namespace    http://tampermonkey.net/
// @version      2025-03-06
// @description  try to take over the world!
// @author       You
// @match        https://www.leodisgames.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leodisgames.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeHideClass() {
        document.querySelectorAll('.product__inventory').forEach(element => {
            element.classList.remove('hide');
        });
    }

    // Run the function on page load
    removeHideClass();

    // Observe for dynamically added elements
    const observer = new MutationObserver(() => removeHideClass());
    observer.observe(document.body, { childList: true, subtree: true });
})();