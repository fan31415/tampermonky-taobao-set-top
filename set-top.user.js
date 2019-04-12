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

function setButtonFunc(index) {
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
function addSetTopButton() {
    let IMG_LENGTH = 20
    for (let index = 1; index < IMG_LENGTH; index++) {
        $('.tm-img-media .tmall-o-image-preview').eq(index).prepend('<button class="set-top" style="position:absolute;top:0;bottom:auto;text-align:center;display: block;left: 0;width: 100%;line-height: 70px;z-index:1;opacity:0;background-color:rgba(0,0,0,.6);">🔝</button>');
    }
    for (let index = 1; index < IMG_LENGTH; index++) {
      setTimeout(setButtonFunc(index), 100);
      if (index == IMG_LENGTH-1) {
          console.log('Done')
      }
    }
}
$(document).ready(function(){
  $('#group1').click()
  $('.wde-image-add').eq(0).click()
  addSetTopButton()
});