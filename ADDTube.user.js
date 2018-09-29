// ==UserScript==
// @name         ADDTube
// @namespace    http://github.com/zhime
// @version      0.1
// @description  content blocker for youtube
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function(){
        var comments = document.getElementById('comments');
        comments.innerHTML = "";
        var htmlCollection = document.getElementsByTagName('ytd-compact-video-renderer');
        var suggestions = Array.prototype.slice.call( htmlCollection );
        for(var i = 0; i < suggestions.length; i++) {
            var recommendation = suggestions[i].getElementsByTagName("span");
            if(recommendation[2].innerHTML == "Recommended for you" || recommendation[3].innerHTML == "Recommended for you") {
                suggestions[i].innerHTML = "";
            }
        }
    }
    ,10000);

    var inputs = document.getElementsByTagName('ytd-browse');
    inputs[0].innerHTML = "";

})();
