// "use strict";

// $(function(){

	$(document).ready(function(){

		$('.vakansii .read-more').click(function() {
			$(this).parent().parent().find('.hide-descr').slideToggle('fast');
		});

		$('a.callback, .btn-vopros, .btn-master').click(function(e) {
			e.preventDefault();
			$('#callback-modal').arcticmodal();
		});
		$('.btn-map').click(function(e) {
			e.preventDefault();
			$('#map-modal').arcticmodal();
		});

		$('ul.catalog li').click(function() {$(this).toggleClass('active');});


		$(".owl-carousel").owlCarousel({
			loop: true,
			margin: 20,
			responsiveClass: true,
			navText: ['<img src="img/prev-btn.png" alt="prev">','<img src="img/next-btn.png" alt="next">'],
			responsive:{
			    0:{
			        items:1,
			        nav:true
			    },
			    600:{
			        items:2
			    },
			    1000:{
			        items:4,
			        nav:true
			    }
			}
		});


		//ВКЛАДКИ
		$('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
			e.preventDefault();
		  $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		});
		$('ul.tabs__caption').on('click', function(e) {e.preventDefault();});

		//ПЛАВНАЯ ПРОКРУТКА
		//плавный переход меню
		$('.nav-on-page a').click(function(e){
			e.preventDefault();
			$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
			});

		$('.open-menu').click(function() {$('.menu').addClass('active');});
		$('.close-menu').click(function() {$('.menu').removeClass('active');});

	});
// });