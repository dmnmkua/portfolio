"use strict";!function t(e,n,s){function r(o,c){if(!n[o]){if(!e[o]){var u="function"==typeof require&&require;if(!c&&u)return u(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var a=n[o]={exports:{}};e[o][0].call(a.exports,function(t){var n=e[o][1][t];return r(n?n:t)},a,a.exports,t,e,n,s)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<s.length;o++)r(s[o]);return r}({1:[function(t,e,n){function s(){var t=this;this.tabs=document.querySelectorAll(".tabs__item"),this.tabsList=document.querySelector(".tabs__list"),this.blocksWrap=document.querySelector(".blocks-wrap"),this._events=function(){t.tabsList.addEventListener("click",function(e){t._reset();for(var n=0;n<t.tabs.length;n++)e.target===t.tabs[n]&&(t.blocksWrap.style.transform="translateX("+-100*n+"%)",t.tabs[n].classList.add("tabs__item--active"))})},this._reset=function(){for(var e=0;e<t.tabs.length;e++)t.tabs[e].classList.contains("tabs__item--active")&&t.tabs[e].classList.remove("tabs__item--active")},this._init=function(){t._events()},this._init()}function r(){var t=this;this.worksList=document.querySelector(".works__list"),this.worksItem=document.querySelectorAll(".works__item"),this.btnLeft=document.querySelector(".works__btn--left"),this.btnRight=document.querySelector(".works__btn--right"),this.count=0,this.blockCount=document.querySelector(".works__count"),this._events=function(){t.btnRight.addEventListener("click",function(e){t.count<t.worksItem.length-1&&(t.count++,t.worksList.style.transform="translateX("+-100*t.count+"%)",t._count())}),t.btnLeft.addEventListener("click",function(e){t.count>0&&(t.count--,t.worksList.style.transform="translateX("+-100*t.count+"%)",t._count())})},this._count=function(){t.blockCount.innerHTML=t.count+1+" | "+t.worksItem.length},this._init=function(){t._events(),t._count()},this._init()}new s,new r},{}]},{},[1]);