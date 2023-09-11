//FIRST CAROUSEL
var carousel1 = document.querySelector('.carousel-1');
var cellCount1 = 6;
var selectedIndex1 = 0;

function rotateCarousel1() {
  var angle1 = selectedIndex1 / cellCount1 * -360;
  carousel1.style.transform = 'translateZ(-444px) rotateY(' + angle1 + 'deg)';
}

var prevButton1 = document.querySelector('.previous-button-1');
prevButton1.addEventListener( 'click', function() {
  selectedIndex1--;
  rotateCarousel1();
});

var nextButton1 = document.querySelector('.next-button-1');
nextButton1.addEventListener( 'click', function() {
  selectedIndex1++;
  rotateCarousel1();
});


// SECOND CAROUSEL
var carousel2 = document.querySelector('.carousel-2');
var cellCount2 = 6;
var selectedIndex2 = 0;

function rotateCarousel2() {
  var angle2 = selectedIndex2 / cellCount2 * -360;
  carousel2.style.transform = 'translateZ(-444px) rotateY(' + angle2 + 'deg)';
}

var prevButton2 = document.querySelector('.previous-button-2');
prevButton2.addEventListener( 'click', function() {
  selectedIndex2--;
  rotateCarousel2();
});

var nextButton2 = document.querySelector('.next-button-2');
nextButton2.addEventListener( 'click', function() {
  selectedIndex2++;
  rotateCarousel2();
});


// THIRD CAROUSEL
var carousel3 = document.querySelector('.carousel-3');
var cellCount3 = 6;
var selectedIndex3 = 0;

function rotateCarousel3() {
  var angle3 = selectedIndex3 / cellCount3 * -360;
  carousel3.style.transform = 'translateZ(-444px) rotateY(' + angle3 + 'deg)';
}

var prevButton3 = document.querySelector('.previous-button-3');
prevButton3.addEventListener( 'click', function() {
  selectedIndex3--;
  rotateCarousel3();
});

var nextButton3 = document.querySelector('.next-button-3');
nextButton3.addEventListener( 'click', function() {
  selectedIndex3++;
  rotateCarousel3();
});


// FOURTH CAROUSEL
var carousel4 = document.querySelector('.carousel-4');
var cellCount4 = 6;
var selectedIndex4 = 0;

function rotateCarousel4() {
  var angle4 = selectedIndex4 / cellCount4 * -360;
  carousel4.style.transform = 'translateZ(-444px) rotateY(' + angle4 + 'deg)';
}

var prevButton4 = document.querySelector('.previous-button-4');
prevButton4.addEventListener( 'click', function() {
  selectedIndex4--;
  rotateCarousel4();
});

var nextButton4 = document.querySelector('.next-button-4');
nextButton4.addEventListener( 'click', function() {
  selectedIndex4++;
  rotateCarousel4();
});



// FIFTH CAROUSEL
var carousel5 = document.querySelector('.carousel-5');
var cellCount5 = 6;
var selectedIndex5 = 0;

function rotateCarousel5() {
  var angle5 = selectedIndex5 / cellCount5 * -360;
  carousel5.style.transform = 'translateZ(-444px) rotateY(' + angle5 + 'deg)';
}

var prevButton5 = document.querySelector('.previous-button-5');
prevButton5.addEventListener( 'click', function() {
  selectedIndex5--;
  rotateCarousel5();
});

var nextButton5 = document.querySelector('.next-button-5');
nextButton5.addEventListener( 'click', function() {
  selectedIndex5++;
  rotateCarousel5();
});