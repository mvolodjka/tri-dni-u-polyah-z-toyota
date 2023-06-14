
/* UItoTop plugin */

$( document ).ready( function () {
			
			$().UItoTop( {
				easingType: 'easeOutQuart'
			} );

		} );
/* UItoTop plugin */
/*animated*/
new WOW().init();
/*animated hover*/
function animate(elem){
		var effect = elem.data("effect");
		if(!effect || elem.hasClass(effect)) return false;
		elem.addClass('animated');
		elem.addClass(effect);
		elem.addClass(effect);
		setTimeout( function(){
			elem.removeClass(effect);
		}, 1000);
		}
		$(".ico-dani-svg").mouseenter(function() {
			animate($(this));
		});
  
/*animated*/



/*slayder slick*/	  

/*slayder slick*/


/*paralaks*//*
(function($) {
  $.fn.bgscroll = function(options) {
    var x = $.extend({
      bgpositionx: 50,
      direction: "bottom",
      debug: !1,
      min: 0,
      max: 100
    }, options);
    var a = $(document).height() - $(window).height(),
        b = a - (this.offset().top + this.height());
    this.offset().top < a && (b = 0);
    var c = (this.offset().top + this.height());
    if ($(window).scrollTop() > b && $(window).scrollTop() < c) {
      var d = ($(window).scrollTop() - b) / (c - b) * 100;
      "top" == x.direction && (d = 100 - d),
          d > x.max && (d = x.max),
          d < x.min && (d = x.min);
      if (x.debug){
        console.log('Element background position: ' + d + 50 + ' %');
      }
    }
	 
   return this.css({
      backgroundPosition: x.bgpositionx + '% ' + d  +'%'
    });
  };
}(jQuery));

$(window).scroll(function(){
  $('.full-os').bgscroll({
    direction: 'bottom', // направление bottom или top
    bgpositionx: 0, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
    debug: false, // Режим отладки
    min:0, // минимальное положение (в %) на которое может смещаться фон
    max:100 // максимальное положение (в %) на которое может смещаться фон
  });
 
})*/
/*paralaks*/

 

$(window).bind('scroll',function(e){
    parallaxScroll();
});
 


function parallaxScroll(){
	var $nav_par = $('.day-1');
    var scrolled = $(window).scrollTop();
	
    $('.day-1111 .day-foto').css('top',(0-(scrolled*.15))+'px');
    
    
}


// nav DOM ready column.
$(function () {
	initHoverBoxes();
});

function initHoverBoxes() {
  	var $column = $('.column1');
	var $column2 = $('.column2');
  
  $column.mouseenter(function() {
    $column.removeClass('wide');
    $column.css('width', '8%');
    $(this).addClass('wide');
  });
	$column2.mouseenter(function() {
    $column2.removeClass('wide');
    $column2.css('width', '8%');
    $(this).addClass('wide');
  });
  
  $column.mouseleave(function() {
    $column.css('width', '14.666667%');
    $column.removeClass('wide');
	
  });
	$column2.mouseleave(function() {
    $column2.css('width', '14.666667%');
    $column2.removeClass('wide');
	
  });
	
}
// nav
/*next-scrin*/
$(".button").click(function (){
	var $div = $(this).data('div');
	$('html, body').animate({
		scrollTop: $('#'+$div).offset().top
	}, 1000);
});
/*next-scrin*/

/*resize*/
  		$(function(){
  $('.machine').height($('.machine').width()/2);

  $(window).resize(function(){
    $('.machine').height($('.machine').width()/2);
  });
});
/*resize*/

$(window).resize(function() {
  if(document.documentElement.clientWidth < 530) {
/*slider*/
$( document ).ready( function () {
			$( '.slider #dp-slider' ).slick( {
				dots: false,
				arrows: true
			} );
		} );
	  
	  
	  
	  $( document ).ready( function () {
			$( '.slider2 #dp-slider' ).slick( {
				dots: false,
				arrows: true
			} );
		} );
	  
	  $( document ).ready( function () {
			$( '.slider3 #dp-slider' ).slick( {
				dots: false,
				arrows: true
			} );
		} );
	  
 }
}); 

	  
$(window).resize(function() {
  if(document.documentElement.clientWidth > 530) {
    
  
jQuery(document).ready(function(){

			function detect_active(){
	  			// get active
	  			var get_active = $(".slider #dp-slider .dp_item:first-child").data("class");
				var i = '.slider';
	  			
	  		}
	  		$ ('.slider #dp-next').click(function(){
	  			var total = $(".slider .dp_item").length;
	  			$(".slider #dp-slider .dp_item:first-child").hide().appendTo(".slider #dp-slider").fadeIn();
	  			$.each($('.slider .dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});
	  			detect_active();

	  		});

	  		$(".slider #dp-prev").click(function(){
	  			var total = $(".slider .dp_item").length;
	  			$(".slider #dp-slider .dp_item:last-child").hide().prependTo(".slider #dp-slider").fadeIn();
	  			$.each($('.slider .dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});

	  			detect_active();
	  		});

	  		$(".slider #dp-dots li").click(function(){
	  			$(".slider #dp-dots li").removeClass("active");
	  			$(this).addClass("active");
	  			var get_slide = $(this).attr('data-class');
	  			console.log(get_slide);
	  			$(".slider #dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo(".slider #dp-slider").fadeIn();
	  			$.each($('.slider .dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});
	  		});


	  		$("body").on("click", ".slider #dp-slider .dp_item:not(:first-child)", function(){
	  			var get_slide = $(this).attr('data-class');
	  			console.log(get_slide);
	  			$(".slider #dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo(".slider #dp-slider").fadeIn();
	  			$.each($('.slider .dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});

	  			detect_active();
	  		});
	  	});

jQuery(document).ready(function(){

			function detect_active(){
	  			// get active
	  			var get_active = $(".slider2 #dp-slider .dp_item:first-child").data("class");
				var i = '.slider2';
	  			
	  		}
	  		$ ('.slider2 #dp-next').click(function(){
	  			var total = $(".slider2 .dp_item").length;
	  			$(".slider2 #dp-slider .dp_item:first-child").hide().appendTo(".slider2 #dp-slider").fadeIn();
	  			$.each($('.slider2 .dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});
	  			detect_active();

	  		});

	  		$(".slider2 #dp-prev").click(function(){
	  			var total = $(".slider2 .dp_item").length;
	  			$(".slider2 #dp-slider .dp_item:last-child").hide().prependTo(".slider2 #dp-slider").fadeIn();
	  			$.each($('.slider2 .dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});

	  			detect_active();
	  		});

	  		$(".slider2 #dp-dots li").click(function(){
	  			$(".slider2 #dp-dots li").removeClass("active");
	  			$(this).addClass("active");
	  			var get_slide = $(this).attr('data-class');
	  			console.log(get_slide);
	  			$(".slider2 #dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo(".slider2 #dp-slider").fadeIn();
	  			$.each($('.slider2 .dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});
	  		});


	  		$("body").on("click", ".slider2 #dp-slider .dp_item:not(:first-child)", function(){
	  			var get_slide = $(this).attr('data-class');
	  			console.log(get_slide);
	  			$(".slider2 #dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo(".slider2 #dp-slider").fadeIn();
	  			$.each($('.slider2 .dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});

	  			detect_active();
	  		});
	  	});

jQuery(document).ready(function(){

			function detect_active(){
	  			// get active
	  			var get_active = $(".slider3 #dp-slider .dp_item:first-child").data("class");
				var i = '.slider3';
	  			
	  		}
	  		$ ('.slider3 #dp-next').click(function(){
	  			var total = $(".slider3 .dp_item").length;
	  			$(".slider3 #dp-slider .dp_item:first-child").hide().appendTo(".slider3 #dp-slider").fadeIn();
	  			$.each($('.slider3 .dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});
	  			detect_active();

	  		});

	  		$(".slider3 #dp-prev").click(function(){
	  			var total = $(".slider3 .dp_item").length;
	  			$(".slider3 #dp-slider .dp_item:last-child").hide().prependTo(".slider3 #dp-slider").fadeIn();
	  			$.each($('.slider3 .dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});

	  			detect_active();
	  		});

	  		$(".slider3 #dp-dots li").click(function(){
	  			$(".slider3 #dp-dots li").removeClass("active");
	  			$(this).addClass("active");
	  			var get_slide = $(this).attr('data-class');
	  			console.log(get_slide);
	  			$(".slider3 #dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo(".slider3 #dp-slider").fadeIn();
	  			$.each($('.slider3 .dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});
	  		});


	  		$("body").on("click", ".slider3 #dp-slider .dp_item:not(:first-child)", function(){
	  			var get_slide = $(this).attr('data-class');
	  			console.log(get_slide);
	  			$(".slider3 #dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo(".slider3 #dp-slider").fadeIn();
	  			$.each($('.slider3 .dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});

	  			detect_active();
	  		});
	  	});
}
});
/*clic*/

$(".car").click(function(){
  	$(".car").toggleClass("car-tutu");
	});




/*nav*/
	$(window).scroll(function() {
    var $block = $('.nav-fixed'); // ID шапки
	var $nav = $('.sticky-anchor'); // ID шапки
    if($(window).scrollTop() > $nav.offset().top) { // Тут идея в том, что блок привязывается к верху, как только "прилипает" к верху окна браузера. Замените $block.offset().top на любое значение и получится, что когда вы проскроллили на большее кол-во пиксейлей, чем указали, добавиться класс к шапке.
    $block.addClass('nav-bag'); // Добавляем класс fixed. В стилях указываем для него position:fixed, height и прочее, чтобы сделать шапку фиксированной.
		
	//var one = $('.art-nav-no-fix').html();
	//$('.art-nav-fix').html( one )
	
	
	} else {
        $block.removeClass('nav-bag'); // удаляем класс
		//$('.art-nav-fix').html('')
		}
	});	