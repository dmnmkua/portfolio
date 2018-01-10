function UseTabs() {
  this.tabs = document.querySelectorAll('.tabs__item');
  this.tabsList = document.querySelector('.tabs__list');
  // this.blocks = document.querySelectorAll('.blocks');
  this.blocksWrap = document.querySelector('.blocks-wrap');

  this._events = () => {
    this.tabsList.addEventListener('click', e => {
      this._reset();
      for(let i = 0; i < this.tabs.length; i++) {
        if(e.target === this.tabs[i]) {
          this.blocksWrap.style.transform = `translateX(${i * -100}%)`;
          this.tabs[i].classList.add('tabs__item--active');
        }
      }
    })
  }

  this._reset = () => {
    for(let i = 0; i < this.tabs.length; i++) {
      if(this.tabs[i].classList.contains('tabs__item--active')) {
        this.tabs[i].classList.remove('tabs__item--active');
      }
    }
  }

  this._init = () => {
    this._events();
  }

  this._init();
}

let useTabs = new UseTabs();

function SliderWorks() {
  this.worksList = document.querySelector('.works__list');
  this.worksItem = document.querySelectorAll('.works__item');
  this.btnLeft = document.querySelector('.works__btn--left');
  this.btnRight = document.querySelector('.works__btn--right');
  this.count = 0;
  this.blockCount = document.querySelector('.works__count');

  this._events = () => {
    this.btnRight.addEventListener('click', e => {
      if(this.count < this.worksItem.length - 1) {
        this.count++;
        this.worksList.style.transform = `translateX(${this.count * -100}%)`;
        this._count();
      }
    });
    this.btnLeft.addEventListener('click', e => {
      if(this.count > 0) {
        this.count--;
        this.worksList.style.transform = `translateX(${this.count * -100}%)`;
        this._count();
      }
    });
  }

  this._count = () => {
    this.blockCount.innerHTML = `${this.count + 1} | ${this.worksItem.length}`;
  }

  this._init = () => {
    this._events();
    this._count();
  }

  this._init();
}

let sliderWorks = new SliderWorks();
