// window.addEventListener('load', () => {
//   let preloaderCol = document.querySelectorAll('.preloader__col');
//   let preloadList = document.querySelector('.preloader__list');
//
//   preloadList.style.display = 'none';
//   for(let i = 0; i < preloaderCol.length; i++) {
//     setTimeout(() => {
//       preloaderCol[i].style.transform = `translateY(100%)`;
//     }, 200 * i);
//   }
// });
window.addEventListener('load', () => {
  let preloaderCol = document.querySelectorAll('.preloader__col');
  let preloadList = document.querySelector('.preloader__list');
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(arr);
  let arrCount;
  preloadList.style.display = 'none';

  let interval = setInterval(() => {
    console.log(arr);
    arrCount = Math.floor(Math.random() * arr.length);
    console.log(arrCount);

    preloaderCol[arr[arrCount]].style.transform = `translateY(100%)`;
    arr.splice(arrCount, 1);
    if(arr.length === 0) {
      clearInterval(interval);
    }
  }, 150);
});

function UseTabs() {
  this.tabs = document.querySelectorAll('.tabs__item');
  this.tabsList = document.querySelector('.tabs__list');
  // this.blocks = document.querySelectorAll('.blocks');
  this.blocksWrap = document.querySelector('.blocks-wrap');
  this.tabsLine = document.querySelector('.tabs__line');


  this._moveLine = (index) => {
    let countLine = 0;
    if(document.documentElement.clientWidth > 768) {
      this.tabsLine.style.width = `5px`;
      this.tabsLine.style.left = `0`;
      for(let j = 0; j < index; j++) {
        countLine += this.tabs[j].getBoundingClientRect().height;
      }
      this.tabsLine.style.top = `${countLine}px`;
      this.tabsLine.style.height = `${this.tabs[index].getBoundingClientRect().height}px`;
    }
    else {
      this.tabsLine.style.height = `5px`;
      this.tabsLine.style.top = `auto`;
      for(let j = 0; j < index; j++) {
        countLine += this.tabs[j].getBoundingClientRect().width;
      }
      this.tabsLine.style.left = `${countLine}px`;
      this.tabsLine.style.width = `${this.tabs[index].getBoundingClientRect().width}px`;
    }
  }


  this._events = () => {
    this.tabsList.addEventListener('click', e => {
      this._reset();
      for(let i = 0; i < this.tabs.length; i++) {
        if(e.target === this.tabs[i]) {
          this.blocksWrap.style.transform = `translateX(${i * -100}%)`;
          this.tabs[i].classList.add('tabs__item--active');
          this._moveLine(i);
        }
      }
    });

    window.addEventListener('resize', () => {
      for(let i = 0; i < this.tabs.length; i++) {
        if(this.tabs[i].classList.contains('tabs__item--active')) {
          this._moveLine(i);
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
    this._moveLine(0);
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
