// "use strict";

// $(function(){

	$(document).ready(function(){

		$('a.callback').click(function(e) {
			e.preventDefault();
			$('#callback-modal').arcticmodal();
		});

		$('ul.catalog li').click(function() {$(this).toggleClass('active');});


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