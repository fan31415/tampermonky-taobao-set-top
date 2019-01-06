// ==UserScript==
// @name         Edit_detail_page
// @namespace    http://fanyijie.net/
// @version      0.1
// @description  try to take over the world!
// @author       fan31415
// @match        https://item.publish.tmall.com/tmall/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

var $ = window.$;

function goPC() {
      window.location.hash = '#struct-desc'
}

function addFront() {
    let IMG_LENGTH = 20
    for (let index = 1; index < IMG_LENGTH; index++) {
        $('.tm-wirless-dailog .tmall-o-image-preview').eq(index).click(function() {
            let count = index
            for (let j = count - 1; j >= 0; j--) {
                $('.tm-wirless-dailog .next-icon-arrow-left').eq(j).click(function(e) {
                    e.stopPropagation();
                })
                $('.tm-wirless-dailog .next-icon-arrow-left').eq(j).trigger('click');
            }

        })
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