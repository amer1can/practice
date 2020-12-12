//************ PARALLAX *************/
  let scene = document.getElementById('scene')
  let parallaxInstance = new Parallax(scene, {
    // relativeInput: true,
  })
  let scene2 = document.getElementById('scene2')
  let parallaxInstance2 = new Parallax(scene2, {
    // relativeInput: true,
  })


//************* SWIPER *******************/
//Инициализация Swiper'a
//внутри класс который станет Swiper'om
new Swiper('.image-slider', {
// настройки:
  direction: 'horizontal', //направление, либо 'vertical'
  loop: true, //картинки идут по кругу
  speed: 300,

  autoplay: {
    delay: 1000, //пауза
    stopOnLastSlide: true, //закончить на посденем слайде
    disableOnInteraction: true, //откл. после ручного переключения
  },
  autoplay: false, //автопрокрутка

  simulateTouch: true, //вкл. перетаскивания на ПК
  touchRatio: 1, //чувствительность свайпа, 0 откл
  touchAngle: 45, //угол срабатывания свайпа
  grabCursor: true, //курсор перетаскивания
  slideToClickedSlide: true, //перекл. при нажатии на слайд (д.б. больше одного - slidesPerView)

  autoHeight: false, //автовысота картинок

  slidesPerView: 1, //количество слайдов для показа (число м.б. дробным -2.5,)
  // slidersPerView: auto, // добавить width: auto (.image-slider .swiper-slide)
  watchOverflow: true, //откл. функционала если слайдов меньше чем slidesPerView
  spaceBetween: 30, //расстояние м-у картинками
  slidesPerGroup: 1, //количество пролистываемых слайдов
  centeredSlides: true, //активный слайд по центру (slidesPerGroup:1)
  initialSlide: 0, //номер начального слайда
  freeMode: false, //свободный режим, прокручиваем как хотим


// НАВИГАЦИЯ <----------

// Cтрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

// Пагинация (<div class="swiper-pagination"></div>)
  pagination: {
    el: '.swiper-pagination',

  // Буллеты
    type: 'bullets', //  (по-умолчанию)
    clickable: true, //возможность кликать по ним
    dynamicBullets: false, //точки изменяют свой размер
    
    // кастомные буллеты, номер слайда(index) в буллете
    // renderBullet: function(index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>' 
    // },
  //-------------------------------
  // Фракция (2/12)
  /*
  type: 'fraction',
  // кастомный вывод фракции
  renderFraction: function(currentClass, totalClass) {
    return 'Фото <span class="' + currentClass + '"></span>' +
            ' из ' + 
            '<span class="' + totalClass + '"></span>';
  },
  */
  //--------------------------------

  // Прогрессбар (<div class="swiper-scrollbar"></div>)
  /*
  type: 'progressbar', 
  */
  //--------------------------------

  // Скролл
  /*
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true, // можно перетаскивать за ползунок
  }, */

}, //<------ End Pagination

// Навигация по хэшу (добавить data-hash="hash-name" к DIV'ам .swiper-slide)
  // hashNavigation: {
  //   watchState: true, //отслеживаем
  // },

// Управление клаиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true, //только когда в пределах вьюпорта
    pageUpDown: true, //управление клавишами pUP pDown
  },
// Управление колесом мыши
  // mousewheel: {
  //   sensitivity: 1,
  //   eventsTarget: '.image-slider' //класс на котором будет срабатывать
  // }
});