// ==UserScript==
// @name         Fucking POS
// @namespace    http://marcelherd.com
// @version      1.0
// @description  STOP OPENING NEW TABS
// @author       Marcel Herd
// @match        https://noten.hs-mannheim.de/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    let onload = function() {
        document.querySelector("center a").setAttribute("target", "_self"); 
    };
    
    if (document.readyState === "complete") {
        onload();
    } else {
        (addEventListener || attachEvent).call(window, addEventListener ? "load" : "onload", onload);
    }
})();
