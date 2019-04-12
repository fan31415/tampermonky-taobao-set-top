// ==UserScript==
// @name         EditDetailPage
// @namespace    http://fanyijie.net/
// @version      0.5
// @description  try to take over the world!
// @author       fan31415
// @match        https://xiangqing.wangpu.taobao.com/*
// @grant        none
// @license MIT
// @require      http://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==

// ==OpenUserJS==
// @author fan31415
// ==/OpenUserJS==


var $ = window.$;

function goPC() {
      window.location.hash = '#struct-desc'
}
function delayAddFront(index) {
  $('.set-top').eq(index-1).click(function() {
            var curIndex = $(this).parent().parent().parent().index()
            let count = curIndex
            for (let j = count - 1; j >= 0; j--) {
                $('.tm-img-media .next-icon-arrow-left').eq(j).click(function(e) {
                    e.stopPropagation();
                })
                $('.tm-img-media .next-icon-arrow-left').eq(j).trigger('click');
            }

        })
}
function addFront() {
    let IMG_LENGTH = 20
    for (let index = 1; index < IMG_LENGTH; index++) {
        $('.tm-img-media .tmall-o-image-preview').eq(index).prepend('<button class="set-top" style="position:absolute;top:0;bottom:auto;text-align:center;display: block;left: 0;width: 100%;line-height: 70px;z-index:1;opacity:0;background-color:rgba(0,0,0,.6);">🔝</button>');
    }
    for (let index = 1; index < IMG_LENGTH; index++) {
      setTimeout(delayAddFront(index), 300);
    }
}
function delayAdd(myfunc) {
    setTimeout(myfunc, 300)
}

function addListener() {
    $('.wde-image-add')[0].addEventListener("click", function() { delayAdd(addFront)});
    console.log('All listener setted')
}
function addMobilePageListener() {
     $('#group1')[0].addEventListener("click", function() { delayAdd(addListener)});
     console.log('mobilepageListener setted')
}


$(document).ready(function(){
  console.log("ready");
//  setTimeout(goPC, 1000)
  setTimeout(addMobilePageListener, 900)
  setTimeout(()=>{$('#group1').click()}, 900)
  setTimeout(()=>{$('.wde-image-add').eq(0).click()}, 1500)
});// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();