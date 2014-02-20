// ==UserScript==

// @name        2chMenu
// @namespace   2ch
// @include     http://*2ch.hk/*
// @include     https://*2ch.hk/*
// @description   A basic example of Greasemonkey that causes an alert at each page load.
// ==/UserScript==

var menu = '';
menu += '[ <a href="/b/" title="бред">b</span></a> ';
menu += '/ <a href="/s/" title="программы">s</a> ';
menu += '/ <a href="/pr/" title="программирование">pr</a> ';
menu += '/ <a href="/spc/" title="космос и астрономия">spc</a> ';
menu += '/ <a href="/vg/" title="видеоигры">vg</a> ]';


if (menu != '')

{

menuobj = document.createElement('p');

menuobj.style.position = 'fixed';
menuobj.style.marginTop = '0px';
menuobj.style.marginRight = '0px'
menuobj.style.top = '-3px';
menuobj.style.listStyle = 'none';
menuobj.style.right = '2px';
menuobj.style.padding = '0px';
menuobj.style.backgroundColor = '#282a2e';

menuobj.style.borderStyle = 'solid';
menuobj.style.borderWidth = '1px';
menuobj.style.borderColor = '#111';

menuobj.style.fontFamily = 'Trebuchet MS';
menuobj.style.fontSize = '14px';

menuobj.innerHTML = menu;
body = document.getElementsByTagName('body')[0];
body.appendChild(menuobj);

}
