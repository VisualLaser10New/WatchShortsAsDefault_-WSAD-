// ==UserScript==
// @name         Youtube watch shorts
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Watch Youtube shorts as normal video
// @author       VL10New
// @match        https://www.youtube.com/*
// @icon         https://www.youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(document.URL.startsWith("https://www.youtube.com/shorts/"))
       {
           location.replace(document.URL.replace("shorts/", "watch?v="))
       }

})();