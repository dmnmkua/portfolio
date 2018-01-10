(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function UseTabs() {
  var _this = this;

  this.tabs = document.querySelectorAll('.tabs__item');
  this.tabsList = document.querySelector('.tabs__list');
  // this.blocks = document.querySelectorAll('.blocks');
  this.blocksWrap = document.querySelector('.blocks-wrap');

  this._events = function () {
    _this.tabsList.addEventListener('click', function (e) {
      _this._reset();
      for (var i = 0; i < _this.tabs.length; i++) {
        if (e.target === _this.tabs[i]) {
          _this.blocksWrap.style.transform = 'translateX(' + i * -100 + '%)';
          _this.tabs[i].classList.add('tabs__item--active');
        }
      }
    });
  };

  this._reset = function () {
    for (var i = 0; i < _this.tabs.length; i++) {
      if (_this.tabs[i].classList.contains('tabs__item--active')) {
        _this.tabs[i].classList.remove('tabs__item--active');
      }
    }
  };

  this._init = function () {
    _this._events();
  };

  this._init();
}

var useTabs = new UseTabs();

function SliderWorks() {
  var _this2 = this;

  this.worksList = document.querySelector('.works__list');
  this.worksItem = document.querySelectorAll('.works__item');
  this.btnLeft = document.querySelector('.works__btn--left');
  this.btnRight = document.querySelector('.works__btn--right');
  this.count = 0;
  this.blockCount = document.querySelector('.works__count');

  this._events = function () {
    _this2.btnRight.addEventListener('click', function (e) {
      if (_this2.count < _this2.worksItem.length - 1) {
        _this2.count++;
        _this2.worksList.style.transform = 'translateX(' + _this2.count * -100 + '%)';
        _this2._count();
      }
    });
    _this2.btnLeft.addEventListener('click', function (e) {
      if (_this2.count > 0) {
        _this2.count--;
        _this2.worksList.style.transform = 'translateX(' + _this2.count * -100 + '%)';
        _this2._count();
      }
    });
  };

  this._count = function () {
    _this2.blockCount.innerHTML = _this2.count + 1 + ' | ' + _this2.worksItem.length;
  };

  this._init = function () {
    _this2._events();
    _this2._count();
  };

  this._init();
}

var sliderWorks = new SliderWorks();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNWJhNmVkMDAuanMiXSwibmFtZXMiOlsiVXNlVGFicyIsInRhYnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YWJzTGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJibG9ja3NXcmFwIiwiX2V2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVzZXQiLCJpIiwibGVuZ3RoIiwiZSIsInRhcmdldCIsInN0eWxlIiwidHJhbnNmb3JtIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbnMiLCJyZW1vdmUiLCJfaW5pdCIsInVzZVRhYnMiLCJTbGlkZXJXb3JrcyIsIndvcmtzTGlzdCIsIndvcmtzSXRlbSIsImJ0bkxlZnQiLCJidG5SaWdodCIsImNvdW50IiwiYmxvY2tDb3VudCIsIl9jb3VudCIsImlubmVySFRNTCIsInNsaWRlcldvcmtzIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFDakIsT0FBS0MsSUFBTCxHQUFZQyxTQUFTQyxnQkFBVCxDQUEwQixhQUExQixDQUFaO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQkYsU0FBU0csYUFBVCxDQUF1QixhQUF2QixDQUFoQjtBQUNBO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQkosU0FBU0csYUFBVCxDQUF1QixjQUF2QixDQUFsQjs7QUFFQSxPQUFLRSxPQUFMLEdBQWUsWUFBTTtBQUNuQixVQUFLSCxRQUFMLENBQWNJLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLGFBQUs7QUFDM0MsWUFBS0MsTUFBTDtBQUNBLFdBQUksSUFBSUMsSUFBSSxDQUFaLEVBQWVBLElBQUksTUFBS1QsSUFBTCxDQUFVVSxNQUE3QixFQUFxQ0QsR0FBckMsRUFBMEM7QUFDeEMsWUFBR0UsRUFBRUMsTUFBRixLQUFhLE1BQUtaLElBQUwsQ0FBVVMsQ0FBVixDQUFoQixFQUE4QjtBQUM1QixnQkFBS0osVUFBTCxDQUFnQlEsS0FBaEIsQ0FBc0JDLFNBQXRCLG1CQUFnREwsSUFBSSxDQUFDLEdBQXJEO0FBQ0EsZ0JBQUtULElBQUwsQ0FBVVMsQ0FBVixFQUFhTSxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixvQkFBM0I7QUFDRDtBQUNGO0FBQ0YsS0FSRDtBQVNELEdBVkQ7O0FBWUEsT0FBS1IsTUFBTCxHQUFjLFlBQU07QUFDbEIsU0FBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBSSxNQUFLVCxJQUFMLENBQVVVLE1BQTdCLEVBQXFDRCxHQUFyQyxFQUEwQztBQUN4QyxVQUFHLE1BQUtULElBQUwsQ0FBVVMsQ0FBVixFQUFhTSxTQUFiLENBQXVCRSxRQUF2QixDQUFnQyxvQkFBaEMsQ0FBSCxFQUEwRDtBQUN4RCxjQUFLakIsSUFBTCxDQUFVUyxDQUFWLEVBQWFNLFNBQWIsQ0FBdUJHLE1BQXZCLENBQThCLG9CQUE5QjtBQUNEO0FBQ0Y7QUFDRixHQU5EOztBQVFBLE9BQUtDLEtBQUwsR0FBYSxZQUFNO0FBQ2pCLFVBQUtiLE9BQUw7QUFDRCxHQUZEOztBQUlBLE9BQUthLEtBQUw7QUFDRDs7QUFFRCxJQUFJQyxVQUFVLElBQUlyQixPQUFKLEVBQWQ7O0FBRUEsU0FBU3NCLFdBQVQsR0FBdUI7QUFBQTs7QUFDckIsT0FBS0MsU0FBTCxHQUFpQnJCLFNBQVNHLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQSxPQUFLbUIsU0FBTCxHQUFpQnRCLFNBQVNDLGdCQUFULENBQTBCLGNBQTFCLENBQWpCO0FBQ0EsT0FBS3NCLE9BQUwsR0FBZXZCLFNBQVNHLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWY7QUFDQSxPQUFLcUIsUUFBTCxHQUFnQnhCLFNBQVNHLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWhCO0FBQ0EsT0FBS3NCLEtBQUwsR0FBYSxDQUFiO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQjFCLFNBQVNHLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7O0FBRUEsT0FBS0UsT0FBTCxHQUFlLFlBQU07QUFDbkIsV0FBS21CLFFBQUwsQ0FBY2xCLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLGFBQUs7QUFDM0MsVUFBRyxPQUFLbUIsS0FBTCxHQUFhLE9BQUtILFNBQUwsQ0FBZWIsTUFBZixHQUF3QixDQUF4QyxFQUEyQztBQUN6QyxlQUFLZ0IsS0FBTDtBQUNBLGVBQUtKLFNBQUwsQ0FBZVQsS0FBZixDQUFxQkMsU0FBckIsbUJBQStDLE9BQUtZLEtBQUwsR0FBYSxDQUFDLEdBQTdEO0FBQ0EsZUFBS0UsTUFBTDtBQUNEO0FBQ0YsS0FORDtBQU9BLFdBQUtKLE9BQUwsQ0FBYWpCLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLGFBQUs7QUFDMUMsVUFBRyxPQUFLbUIsS0FBTCxHQUFhLENBQWhCLEVBQW1CO0FBQ2pCLGVBQUtBLEtBQUw7QUFDQSxlQUFLSixTQUFMLENBQWVULEtBQWYsQ0FBcUJDLFNBQXJCLG1CQUErQyxPQUFLWSxLQUFMLEdBQWEsQ0FBQyxHQUE3RDtBQUNBLGVBQUtFLE1BQUw7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQWZEOztBQWlCQSxPQUFLQSxNQUFMLEdBQWMsWUFBTTtBQUNsQixXQUFLRCxVQUFMLENBQWdCRSxTQUFoQixHQUErQixPQUFLSCxLQUFMLEdBQWEsQ0FBNUMsV0FBbUQsT0FBS0gsU0FBTCxDQUFlYixNQUFsRTtBQUNELEdBRkQ7O0FBSUEsT0FBS1MsS0FBTCxHQUFhLFlBQU07QUFDakIsV0FBS2IsT0FBTDtBQUNBLFdBQUtzQixNQUFMO0FBQ0QsR0FIRDs7QUFLQSxPQUFLVCxLQUFMO0FBQ0Q7O0FBRUQsSUFBSVcsY0FBYyxJQUFJVCxXQUFKLEVBQWxCIiwiZmlsZSI6ImZha2VfNWJhNmVkMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBVc2VUYWJzKCkge1xuICB0aGlzLnRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faXRlbScpO1xuICB0aGlzLnRhYnNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnNfX2xpc3QnKTtcbiAgLy8gdGhpcy5ibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvY2tzJyk7XG4gIHRoaXMuYmxvY2tzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9ja3Mtd3JhcCcpO1xuXG4gIHRoaXMuX2V2ZW50cyA9ICgpID0+IHtcbiAgICB0aGlzLnRhYnNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICB0aGlzLl9yZXNldCgpO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihlLnRhcmdldCA9PT0gdGhpcy50YWJzW2ldKSB7XG4gICAgICAgICAgdGhpcy5ibG9ja3NXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7aSAqIC0xMDB9JSlgO1xuICAgICAgICAgIHRoaXMudGFic1tpXS5jbGFzc0xpc3QuYWRkKCd0YWJzX19pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB0aGlzLl9yZXNldCA9ICgpID0+IHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZih0aGlzLnRhYnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWJzX19pdGVtLS1hY3RpdmUnKSkge1xuICAgICAgICB0aGlzLnRhYnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgndGFic19faXRlbS0tYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy5faW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLl9ldmVudHMoKTtcbiAgfVxuXG4gIHRoaXMuX2luaXQoKTtcbn1cblxubGV0IHVzZVRhYnMgPSBuZXcgVXNlVGFicygpO1xuXG5mdW5jdGlvbiBTbGlkZXJXb3JrcygpIHtcbiAgdGhpcy53b3Jrc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya3NfX2xpc3QnKTtcbiAgdGhpcy53b3Jrc0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud29ya3NfX2l0ZW0nKTtcbiAgdGhpcy5idG5MZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtzX19idG4tLWxlZnQnKTtcbiAgdGhpcy5idG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3Jrc19fYnRuLS1yaWdodCcpO1xuICB0aGlzLmNvdW50ID0gMDtcbiAgdGhpcy5ibG9ja0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtzX19jb3VudCcpO1xuXG4gIHRoaXMuX2V2ZW50cyA9ICgpID0+IHtcbiAgICB0aGlzLmJ0blJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBpZih0aGlzLmNvdW50IDwgdGhpcy53b3Jrc0l0ZW0ubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIHRoaXMud29ya3NMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5jb3VudCAqIC0xMDB9JSlgO1xuICAgICAgICB0aGlzLl9jb3VudCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYnRuTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgaWYodGhpcy5jb3VudCA+IDApIHtcbiAgICAgICAgdGhpcy5jb3VudC0tO1xuICAgICAgICB0aGlzLndvcmtzTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMuY291bnQgKiAtMTAwfSUpYDtcbiAgICAgICAgdGhpcy5fY291bnQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRoaXMuX2NvdW50ID0gKCkgPT4ge1xuICAgIHRoaXMuYmxvY2tDb3VudC5pbm5lckhUTUwgPSBgJHt0aGlzLmNvdW50ICsgMX0gfCAke3RoaXMud29ya3NJdGVtLmxlbmd0aH1gO1xuICB9XG5cbiAgdGhpcy5faW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLl9ldmVudHMoKTtcbiAgICB0aGlzLl9jb3VudCgpO1xuICB9XG5cbiAgdGhpcy5faW5pdCgpO1xufVxuXG5sZXQgc2xpZGVyV29ya3MgPSBuZXcgU2xpZGVyV29ya3MoKTtcbiJdfQ==
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rtbi9Ecm9wYm94L2dpdGh1Yi5jb20vcG9ydGZvbGlvL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9kbW4vRHJvcGJveC9naXRodWIuY29tL3BvcnRmb2xpby9zcmMvanMvZmFrZV81YmE2ZWQwMC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBVc2VUYWJzKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHRoaXMudGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19pdGVtJyk7XG4gIHRoaXMudGFic0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFic19fbGlzdCcpO1xuICAvLyB0aGlzLmJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9ja3MnKTtcbiAgdGhpcy5ibG9ja3NXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2Nrcy13cmFwJyk7XG5cbiAgdGhpcy5fZXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLnRhYnNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLl9yZXNldCgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGhpcy50YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gX3RoaXMudGFic1tpXSkge1xuICAgICAgICAgIF90aGlzLmJsb2Nrc1dyYXAuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIGkgKiAtMTAwICsgJyUpJztcbiAgICAgICAgICBfdGhpcy50YWJzW2ldLmNsYXNzTGlzdC5hZGQoJ3RhYnNfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5fcmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGhpcy50YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoX3RoaXMudGFic1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYnNfX2l0ZW0tLWFjdGl2ZScpKSB7XG4gICAgICAgIF90aGlzLnRhYnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgndGFic19faXRlbS0tYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuX2luaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMuX2V2ZW50cygpO1xuICB9O1xuXG4gIHRoaXMuX2luaXQoKTtcbn1cblxudmFyIHVzZVRhYnMgPSBuZXcgVXNlVGFicygpO1xuXG5mdW5jdGlvbiBTbGlkZXJXb3JrcygpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgdGhpcy53b3Jrc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya3NfX2xpc3QnKTtcbiAgdGhpcy53b3Jrc0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud29ya3NfX2l0ZW0nKTtcbiAgdGhpcy5idG5MZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtzX19idG4tLWxlZnQnKTtcbiAgdGhpcy5idG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3Jrc19fYnRuLS1yaWdodCcpO1xuICB0aGlzLmNvdW50ID0gMDtcbiAgdGhpcy5ibG9ja0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtzX19jb3VudCcpO1xuXG4gIHRoaXMuX2V2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpczIuYnRuUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzMi5jb3VudCA8IF90aGlzMi53b3Jrc0l0ZW0ubGVuZ3RoIC0gMSkge1xuICAgICAgICBfdGhpczIuY291bnQrKztcbiAgICAgICAgX3RoaXMyLndvcmtzTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgX3RoaXMyLmNvdW50ICogLTEwMCArICclKSc7XG4gICAgICAgIF90aGlzMi5fY291bnQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfdGhpczIuYnRuTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoX3RoaXMyLmNvdW50ID4gMCkge1xuICAgICAgICBfdGhpczIuY291bnQtLTtcbiAgICAgICAgX3RoaXMyLndvcmtzTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgX3RoaXMyLmNvdW50ICogLTEwMCArICclKSc7XG4gICAgICAgIF90aGlzMi5fY291bnQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLl9jb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpczIuYmxvY2tDb3VudC5pbm5lckhUTUwgPSBfdGhpczIuY291bnQgKyAxICsgJyB8ICcgKyBfdGhpczIud29ya3NJdGVtLmxlbmd0aDtcbiAgfTtcblxuICB0aGlzLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzMi5fZXZlbnRzKCk7XG4gICAgX3RoaXMyLl9jb3VudCgpO1xuICB9O1xuXG4gIHRoaXMuX2luaXQoKTtcbn1cblxudmFyIHNsaWRlcldvcmtzID0gbmV3IFNsaWRlcldvcmtzKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVpoYTJWZk5XSmhObVZrTURBdWFuTWlYU3dpYm1GdFpYTWlPbHNpVlhObFZHRmljeUlzSW5SaFluTWlMQ0prYjJOMWJXVnVkQ0lzSW5GMVpYSjVVMlZzWldOMGIzSkJiR3dpTENKMFlXSnpUR2x6ZENJc0luRjFaWEo1VTJWc1pXTjBiM0lpTENKaWJHOWphM05YY21Gd0lpd2lYMlYyWlc1MGN5SXNJbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSWlMQ0pmY21WelpYUWlMQ0pwSWl3aWJHVnVaM1JvSWl3aVpTSXNJblJoY21kbGRDSXNJbk4wZVd4bElpd2lkSEpoYm5ObWIzSnRJaXdpWTJ4aGMzTk1hWE4wSWl3aVlXUmtJaXdpWTI5dWRHRnBibk1pTENKeVpXMXZkbVVpTENKZmFXNXBkQ0lzSW5WelpWUmhZbk1pTENKVGJHbGtaWEpYYjNKcmN5SXNJbmR2Y210elRHbHpkQ0lzSW5kdmNtdHpTWFJsYlNJc0ltSjBia3hsWm5RaUxDSmlkRzVTYVdkb2RDSXNJbU52ZFc1MElpd2lZbXh2WTJ0RGIzVnVkQ0lzSWw5amIzVnVkQ0lzSW1sdWJtVnlTRlJOVENJc0luTnNhV1JsY2xkdmNtdHpJbDBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEZOQlFWTkJMRTlCUVZRc1IwRkJiVUk3UVVGQlFUczdRVUZEYWtJc1QwRkJTME1zU1VGQlRDeEhRVUZaUXl4VFFVRlRReXhuUWtGQlZDeERRVUV3UWl4aFFVRXhRaXhEUVVGYU8wRkJRMEVzVDBGQlMwTXNVVUZCVEN4SFFVRm5Ra1lzVTBGQlUwY3NZVUZCVkN4RFFVRjFRaXhoUVVGMlFpeERRVUZvUWp0QlFVTkJPMEZCUTBFc1QwRkJTME1zVlVGQlRDeEhRVUZyUWtvc1UwRkJVMGNzWVVGQlZDeERRVUYxUWl4alFVRjJRaXhEUVVGc1FqczdRVUZGUVN4UFFVRkxSU3hQUVVGTUxFZEJRV1VzV1VGQlRUdEJRVU51UWl4VlFVRkxTQ3hSUVVGTUxFTkJRV05KTEdkQ1FVRmtMRU5CUVN0Q0xFOUJRUzlDTEVWQlFYZERMR0ZCUVVzN1FVRkRNME1zV1VGQlMwTXNUVUZCVER0QlFVTkJMRmRCUVVrc1NVRkJTVU1zU1VGQlNTeERRVUZhTEVWQlFXVkJMRWxCUVVrc1RVRkJTMVFzU1VGQlRDeERRVUZWVlN4TlFVRTNRaXhGUVVGeFEwUXNSMEZCY2tNc1JVRkJNRU03UVVGRGVFTXNXVUZCUjBVc1JVRkJSVU1zVFVGQlJpeExRVUZoTEUxQlFVdGFMRWxCUVV3c1EwRkJWVk1zUTBGQlZpeERRVUZvUWl4RlFVRTRRanRCUVVNMVFpeG5Ra0ZCUzBvc1ZVRkJUQ3hEUVVGblFsRXNTMEZCYUVJc1EwRkJjMEpETEZOQlFYUkNMRzFDUVVGblJFd3NTVUZCU1N4RFFVRkRMRWRCUVhKRU8wRkJRMEVzWjBKQlFVdFVMRWxCUVV3c1EwRkJWVk1zUTBGQlZpeEZRVUZoVFN4VFFVRmlMRU5CUVhWQ1F5eEhRVUYyUWl4RFFVRXlRaXh2UWtGQk0wSTdRVUZEUkR0QlFVTkdPMEZCUTBZc1MwRlNSRHRCUVZORUxFZEJWa1E3TzBGQldVRXNUMEZCUzFJc1RVRkJUQ3hIUVVGakxGbEJRVTA3UVVGRGJFSXNVMEZCU1N4SlFVRkpReXhKUVVGSkxFTkJRVm9zUlVGQlpVRXNTVUZCU1N4TlFVRkxWQ3hKUVVGTUxFTkJRVlZWTEUxQlFUZENMRVZCUVhGRFJDeEhRVUZ5UXl4RlFVRXdRenRCUVVONFF5eFZRVUZITEUxQlFVdFVMRWxCUVV3c1EwRkJWVk1zUTBGQlZpeEZRVUZoVFN4VFFVRmlMRU5CUVhWQ1JTeFJRVUYyUWl4RFFVRm5ReXh2UWtGQmFFTXNRMEZCU0N4RlFVRXdSRHRCUVVONFJDeGpRVUZMYWtJc1NVRkJUQ3hEUVVGVlV5eERRVUZXTEVWQlFXRk5MRk5CUVdJc1EwRkJkVUpITEUxQlFYWkNMRU5CUVRoQ0xHOUNRVUU1UWp0QlFVTkVPMEZCUTBZN1FVRkRSaXhIUVU1RU96dEJRVkZCTEU5QlFVdERMRXRCUVV3c1IwRkJZU3haUVVGTk8wRkJRMnBDTEZWQlFVdGlMRTlCUVV3N1FVRkRSQ3hIUVVaRU96dEJRVWxCTEU5QlFVdGhMRXRCUVV3N1FVRkRSRHM3UVVGRlJDeEpRVUZKUXl4VlFVRlZMRWxCUVVseVFpeFBRVUZLTEVWQlFXUTdPMEZCUlVFc1UwRkJVM05DTEZkQlFWUXNSMEZCZFVJN1FVRkJRVHM3UVVGRGNrSXNUMEZCUzBNc1UwRkJUQ3hIUVVGcFFuSkNMRk5CUVZOSExHRkJRVlFzUTBGQmRVSXNZMEZCZGtJc1EwRkJha0k3UVVGRFFTeFBRVUZMYlVJc1UwRkJUQ3hIUVVGcFFuUkNMRk5CUVZORExHZENRVUZVTEVOQlFUQkNMR05CUVRGQ0xFTkJRV3BDTzBGQlEwRXNUMEZCUzNOQ0xFOUJRVXdzUjBGQlpYWkNMRk5CUVZOSExHRkJRVlFzUTBGQmRVSXNiVUpCUVhaQ0xFTkJRV1k3UVVGRFFTeFBRVUZMY1VJc1VVRkJUQ3hIUVVGblFuaENMRk5CUVZOSExHRkJRVlFzUTBGQmRVSXNiMEpCUVhaQ0xFTkJRV2hDTzBGQlEwRXNUMEZCUzNOQ0xFdEJRVXdzUjBGQllTeERRVUZpTzBGQlEwRXNUMEZCUzBNc1ZVRkJUQ3hIUVVGclFqRkNMRk5CUVZOSExHRkJRVlFzUTBGQmRVSXNaVUZCZGtJc1EwRkJiRUk3TzBGQlJVRXNUMEZCUzBVc1QwRkJUQ3hIUVVGbExGbEJRVTA3UVVGRGJrSXNWMEZCUzIxQ0xGRkJRVXdzUTBGQlkyeENMR2RDUVVGa0xFTkJRU3RDTEU5QlFTOUNMRVZCUVhkRExHRkJRVXM3UVVGRE0wTXNWVUZCUnl4UFFVRkxiVUlzUzBGQlRDeEhRVUZoTEU5QlFVdElMRk5CUVV3c1EwRkJaV0lzVFVGQlppeEhRVUYzUWl4RFFVRjRReXhGUVVFeVF6dEJRVU42UXl4bFFVRkxaMElzUzBGQlREdEJRVU5CTEdWQlFVdEtMRk5CUVV3c1EwRkJaVlFzUzBGQlppeERRVUZ4UWtNc1UwRkJja0lzYlVKQlFTdERMRTlCUVV0WkxFdEJRVXdzUjBGQllTeERRVUZETEVkQlFUZEVPMEZCUTBFc1pVRkJTMFVzVFVGQlREdEJRVU5FTzBGQlEwWXNTMEZPUkR0QlFVOUJMRmRCUVV0S0xFOUJRVXdzUTBGQllXcENMR2RDUVVGaUxFTkJRVGhDTEU5QlFUbENMRVZCUVhWRExHRkJRVXM3UVVGRE1VTXNWVUZCUnl4UFFVRkxiVUlzUzBGQlRDeEhRVUZoTEVOQlFXaENMRVZCUVcxQ08wRkJRMnBDTEdWQlFVdEJMRXRCUVV3N1FVRkRRU3hsUVVGTFNpeFRRVUZNTEVOQlFXVlVMRXRCUVdZc1EwRkJjVUpETEZOQlFYSkNMRzFDUVVFclF5eFBRVUZMV1N4TFFVRk1MRWRCUVdFc1EwRkJReXhIUVVFM1JEdEJRVU5CTEdWQlFVdEZMRTFCUVV3N1FVRkRSRHRCUVVOR0xFdEJUa1E3UVVGUFJDeEhRV1pFT3p0QlFXbENRU3hQUVVGTFFTeE5RVUZNTEVkQlFXTXNXVUZCVFR0QlFVTnNRaXhYUVVGTFJDeFZRVUZNTEVOQlFXZENSU3hUUVVGb1FpeEhRVUVyUWl4UFFVRkxTQ3hMUVVGTUxFZEJRV0VzUTBGQk5VTXNWMEZCYlVRc1QwRkJTMGdzVTBGQlRDeERRVUZsWWl4TlFVRnNSVHRCUVVORUxFZEJSa1E3TzBGQlNVRXNUMEZCUzFNc1MwRkJUQ3hIUVVGaExGbEJRVTA3UVVGRGFrSXNWMEZCUzJJc1QwRkJURHRCUVVOQkxGZEJRVXR6UWl4TlFVRk1PMEZCUTBRc1IwRklSRHM3UVVGTFFTeFBRVUZMVkN4TFFVRk1PMEZCUTBRN08wRkJSVVFzU1VGQlNWY3NZMEZCWXl4SlFVRkpWQ3hYUVVGS0xFVkJRV3hDSWl3aVptbHNaU0k2SW1aaGEyVmZOV0poTm1Wa01EQXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbWRXNWpkR2x2YmlCVmMyVlVZV0p6S0NrZ2UxeHVJQ0IwYUdsekxuUmhZbk1nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdWRHRmljMTlmYVhSbGJTY3BPMXh1SUNCMGFHbHpMblJoWW5OTWFYTjBJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MblJoWW5OZlgyeHBjM1FuS1R0Y2JpQWdMeThnZEdocGN5NWliRzlqYTNNZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VZbXh2WTJ0ekp5azdYRzRnSUhSb2FYTXVZbXh2WTJ0elYzSmhjQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVpYkc5amEzTXRkM0poY0NjcE8xeHVYRzRnSUhSb2FYTXVYMlYyWlc1MGN5QTlJQ2dwSUQwK0lIdGNiaUFnSUNCMGFHbHpMblJoWW5OTWFYTjBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2daU0E5UGlCN1hHNGdJQ0FnSUNCMGFHbHpMbDl5WlhObGRDZ3BPMXh1SUNBZ0lDQWdabTl5S0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWRHRmljeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQnBaaWhsTG5SaGNtZGxkQ0E5UFQwZ2RHaHBjeTUwWVdKelcybGRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVpYkc5amEzTlhjbUZ3TG5OMGVXeGxMblJ5WVc1elptOXliU0E5SUdCMGNtRnVjMnhoZEdWWUtDUjdhU0FxSUMweE1EQjlKU2xnTzF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11ZEdGaWMxdHBYUzVqYkdGemMweHBjM1F1WVdSa0tDZDBZV0p6WDE5cGRHVnRMUzFoWTNScGRtVW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBwWEc0Z0lIMWNibHh1SUNCMGFHbHpMbDl5WlhObGRDQTlJQ2dwSUQwK0lIdGNiaUFnSUNCbWIzSW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTUwWVdKekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JwWmloMGFHbHpMblJoWW5OYmFWMHVZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLQ2QwWVdKelgxOXBkR1Z0TFMxaFkzUnBkbVVuS1NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5SaFluTmJhVjB1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duZEdGaWMxOWZhWFJsYlMwdFlXTjBhWFpsSnlrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2RHaHBjeTVmYVc1cGRDQTlJQ2dwSUQwK0lIdGNiaUFnSUNCMGFHbHpMbDlsZG1WdWRITW9LVHRjYmlBZ2ZWeHVYRzRnSUhSb2FYTXVYMmx1YVhRb0tUdGNibjFjYmx4dWJHVjBJSFZ6WlZSaFluTWdQU0J1WlhjZ1ZYTmxWR0ZpY3lncE8xeHVYRzVtZFc1amRHbHZiaUJUYkdsa1pYSlhiM0pyY3lncElIdGNiaUFnZEdocGN5NTNiM0pyYzB4cGMzUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VkMjl5YTNOZlgyeHBjM1FuS1R0Y2JpQWdkR2hwY3k1M2IzSnJjMGwwWlcwZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VkMjl5YTNOZlgybDBaVzBuS1R0Y2JpQWdkR2hwY3k1aWRHNU1aV1owSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5kdmNtdHpYMTlpZEc0dExXeGxablFuS1R0Y2JpQWdkR2hwY3k1aWRHNVNhV2RvZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1M2IzSnJjMTlmWW5SdUxTMXlhV2RvZENjcE8xeHVJQ0IwYUdsekxtTnZkVzUwSUQwZ01EdGNiaUFnZEdocGN5NWliRzlqYTBOdmRXNTBJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbmR2Y210elgxOWpiM1Z1ZENjcE8xeHVYRzRnSUhSb2FYTXVYMlYyWlc1MGN5QTlJQ2dwSUQwK0lIdGNiaUFnSUNCMGFHbHpMbUowYmxKcFoyaDBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2daU0E5UGlCN1hHNGdJQ0FnSUNCcFppaDBhR2x6TG1OdmRXNTBJRHdnZEdocGN5NTNiM0pyYzBsMFpXMHViR1Z1WjNSb0lDMGdNU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbU52ZFc1MEt5czdYRzRnSUNBZ0lDQWdJSFJvYVhNdWQyOXlhM05NYVhOMExuTjBlV3hsTG5SeVlXNXpabTl5YlNBOUlHQjBjbUZ1YzJ4aGRHVllLQ1I3ZEdocGN5NWpiM1Z1ZENBcUlDMHhNREI5SlNsZ08xeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5amIzVnVkQ2dwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBwTzF4dUlDQWdJSFJvYVhNdVluUnVUR1ZtZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdVZ1BUNGdlMXh1SUNBZ0lDQWdhV1lvZEdocGN5NWpiM1Z1ZENBK0lEQXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpiM1Z1ZEMwdE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5kdmNtdHpUR2x6ZEM1emRIbHNaUzUwY21GdWMyWnZjbTBnUFNCZ2RISmhibk5zWVhSbFdDZ2tlM1JvYVhNdVkyOTFiblFnS2lBdE1UQXdmU1VwWUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWTI5MWJuUW9LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlLVHRjYmlBZ2ZWeHVYRzRnSUhSb2FYTXVYMk52ZFc1MElEMGdLQ2tnUFQ0Z2UxeHVJQ0FnSUhSb2FYTXVZbXh2WTJ0RGIzVnVkQzVwYm01bGNraFVUVXdnUFNCZ0pIdDBhR2x6TG1OdmRXNTBJQ3NnTVgwZ2ZDQWtlM1JvYVhNdWQyOXlhM05KZEdWdExteGxibWQwYUgxZ08xeHVJQ0I5WEc1Y2JpQWdkR2hwY3k1ZmFXNXBkQ0E5SUNncElEMCtJSHRjYmlBZ0lDQjBhR2x6TGw5bGRtVnVkSE1vS1R0Y2JpQWdJQ0IwYUdsekxsOWpiM1Z1ZENncE8xeHVJQ0I5WEc1Y2JpQWdkR2hwY3k1ZmFXNXBkQ2dwTzF4dWZWeHVYRzVzWlhRZ2MyeHBaR1Z5VjI5eWEzTWdQU0J1WlhjZ1UyeHBaR1Z5VjI5eWEzTW9LVHRjYmlKZGZRPT0iXX0=