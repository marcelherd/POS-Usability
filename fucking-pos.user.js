// ==UserScript==
// @name         Fucking POS
// @namespace    http://marcelherd.com
// @version      1.0
// @description  STOP OPENING NEW TABS
// @author       Marcel Herd
// @match        http://noten.hs-mannheim.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $("center a").setAttribute("target", "_self");
})();
