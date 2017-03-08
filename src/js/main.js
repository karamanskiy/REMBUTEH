"use strict";

$(function(){

	$(document).ready(function(){

		$('a.callback').click(function(e) {
			e.preventDefault();
			$('#callback-modal').arcticmodal();
		});
		$('.left-part a, .bottom-map').click(function(e) {
			e.preventDefault();
			$('#map-box').arcticmodal();
		});
		if(window.innerWidth < 480) {
			$('#map-box iframe').width(320);
		}

		$('.big-slider').bxSlider({
			infiniteLoop: true,
			nextSelector:'#nextBtn',
			prevSelector:'#prevBtn',
			nextText: '',
			prevText: '',
			controls: true,
			touchEnabled: true,
			pager:false,
			auto: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1
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
});