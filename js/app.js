
$(document).ready(function() {
  

    
  var numItems = $('li.fancyTab').length;
  

      if (numItems == 12){
        $("li.fancyTab").width('8.3%');
      }
      if (numItems == 11){
        $("li.fancyTab").width('9%');
      }
      if (numItems == 10){
        $("li.fancyTab").width('10%');
      }
      if (numItems == 9){
        $("li.fancyTab").width('11.1%');
      }
      if (numItems == 8){
        $("li.fancyTab").width('12.5%');
      }
      if (numItems == 7){
        $("li.fancyTab").width('14.2%');
      }
      if (numItems == 6){
        $("li.fancyTab").width('16.666666666666667%');
      }
      if (numItems == 5){
        $("li.fancyTab").width('20%');
      }
      if (numItems == 4){
        $("li.fancyTab").width('25%');
      }
      if (numItems == 3){
        $("li.fancyTab").width('33.3%');
      }
      if (numItems == 2){
        $("li.fancyTab").width('50%');
      }
    
 


  });

$(window).load(function() {

$('.fancyTabs').each(function() {

  var highestBox = 0;
  $('.fancyTab a', this).each(function() {

    if ($(this).height() > highestBox)
      highestBox = $(this).height();
  });

  $('.fancyTab a', this).height(highestBox);

});
});

var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector('.featured-item');

var leftBtn = document.querySelector('.move-btn.left');
var rightBtn = document.querySelector('.move-btn.right');
var leftInterval;
var rightInterval;

var scrollRate = 0.2;
var left;

function selectItem(e) {
	if (e.target.classList.contains('active')) return;
	
	featured.style.backgroundImage = e.target.style.backgroundImage;
	
	for (var i = 0; i < galleryItems.length; i++) {
		if (galleryItems[i].classList.contains('active'))
			galleryItems[i].classList.remove('active');
	}
	
	e.target.classList.add('active');
}

function galleryWrapLeft() {
	var first = gallery.children[0];
	gallery.removeChild(first);
	gallery.style.left = -itemWidth + '%';
	gallery.appendChild(first);
	gallery.style.left = '0%';
}

function galleryWrapRight() {
	var last = gallery.children[gallery.children.length - 1];
	gallery.removeChild(last);
	gallery.insertBefore(last, gallery.children[0]);
	gallery.style.left = '-23%';
}

function moveLeft() {
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left > -itemWidth) {
			left -= scrollRate;
		} else {
			left = 0;
			galleryWrapLeft();
		}
	}, 1);
}

function moveRight() {
	//Make sure there is element to the leftd
	if (left > -itemWidth && left < 0) {
		left = left  - itemWidth;
		
		var last = gallery.children[gallery.children.length - 1];
		gallery.removeChild(last);
		gallery.style.left = left + '%';
		gallery.insertBefore(last, gallery.children[0]);	
	}
	
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left < 0) {
			left += scrollRate;
		} else {
			left = -itemWidth;
			galleryWrapRight();
		}
	}, 1);
}

function stopMovement() {
	clearInterval(leftInterval);
	clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveLeft);
leftBtn.addEventListener('mouseleave', stopMovement);
rightBtn.addEventListener('mouseenter', moveRight);
rightBtn.addEventListener('mouseleave', stopMovement);


//Start this baby up
(function init() {
	var images = [
		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/car.jpg',
		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/city.jpg',
		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/deer.jpg',
		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/flowers.jpg',
		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/food.jpg',
		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/guy.jpg',
		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/landscape.jpg',
		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/lips.jpg',
		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/night.jpg',
		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/table.jpg'
	];
	
	//Set Initial Featured Image
	featured.style.backgroundImage = 'url(' + images[0] + ')';
	
	//Set Images for Gallery and Add Event Listeners
	for (var i = 0; i < galleryItems.length; i++) {
		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
		galleryItems[i].addEventListener('click', selectItem);
	}
})();