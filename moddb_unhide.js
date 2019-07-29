// ==UserScript==
// @name         Bad Karma Unhider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Clement Julia
// @match        https://www.moddb.com/mods/edain-mod
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('.karmabadicon').css('display', 'block')
})();
