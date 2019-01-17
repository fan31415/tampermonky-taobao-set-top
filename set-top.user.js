// ==UserScript==
// @name         EditDetailPage
// @namespace    http://fanyijie.net/
// @version      0.1
// @description  try to take over the world!
// @author       fan31415
// @match        https://item.publish.tmall.com/tmall/*
// @grant        none
// @license MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
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

            let count = index
            for (let j = count - 1; j >= 0; j--) {
                $('.tm-wirless-dailog .next-icon-arrow-left').eq(j).click(function(e) {
                    e.stopPropagation();
                })
                $('.tm-wirless-dailog .next-icon-arrow-left').eq(j).trigger('click');
            }

        })
}
function addFront() {
    let IMG_LENGTH = 20
    for (let index = 1; index < IMG_LENGTH; index++) {
        $('.tm-wirless-dailog .tmall-o-image-preview').eq(index).prepend('<button class="set-top" style="position:absolute;top:0;bottom:auto;text-align:center;display: block;left: 0;width: 100%;line-height: 28px;z-index:1;opacity:0;background-color:rgba(0,0,0,.6);">🔝</button>'); 
    }
    for (let index = 1; index < IMG_LENGTH; index++) {
      setTimeout(delayAddFront(index), 500);
    }
}
function delayAdd() {
    setTimeout(addFront, 500)
}

function addListener() {
    $('#tm-wireless-viewArea-item_picture')[0].addEventListener("click", delayAdd);
    console.log('All done')
}
$(document).ready(function(){
  console.log("ready");
  setTimeout(goPC, 1000)
  setTimeout(addListener, 1500)

});