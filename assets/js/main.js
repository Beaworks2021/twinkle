/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Common Js
04. Menu Controls JS
05. Offcanvas Js
06. Search Js
07. cartmini Js
08. filter
09. Body overlay Js
10. Sticky Header Js
11. Theme Settings Js
12. Nice Select Js
13. Smooth Scroll Js
14. Slider Activation Area Start
15. Masonary Js
16. Wow Js
17. Counter Js
18. InHover Active Js
19. Line Animation Js
20. Video Play Js
21. Password Toggle Js
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});


	// 08. Nice Select Js
	$('select').niceSelect();


	///////////////////////////////////////////////////
	// 07. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 400) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});


	////////////////////////////////////////////////////
	// 09. Sidebar Js
	$(".rr-menu-bar").on("click", function () {
		$(".rroffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	$(".close-btn").on("click", function () {
		$(".rroffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});
	$(".body-overlay").on("click", function () {
		$(".rroffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});

	////////////////////////////////////////////////////
	// 03. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
	});

	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
	});

	$('.col-custom').on("click", function () {
		$('#features-item-thumb').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});

	// $('.rr-hero-2__feature-box .rr-hero-2__feature-item').on('hover', function () {
	// 	$(this).addClass('active').siblings().find('.rr-hero-2__feature-item').removeClass('active');
	// });

	$('.rr-hero-2__feature-item').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.rr-hero-2__feature-item').removeClass('active');
	});

	$('.rr-custom-accordion .accordion-items').on("click", function () {
		$(this).addClass('rr-faq-active').siblings().removeClass('rr-faq-active');
	});


	// for header
	if ($("#rr-header-top__value-toogle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('rr-header-top__value-toogle').contains(e.target)) {
				$(".rr-header-top__value-submenu").toggleClass("open");
			}
			else {
				$(".rr-header-top__value-submenu").removeClass("open");
			}
		});
	}


	// for header
	if ($("#rr-header-top__lang-toogle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('rr-header-top__lang-toogle').contains(e.target)) {
				$(".rr-header-top__lang-submenu").toggleClass("open");
			}
			else {
				$(".rr-header-top__lang-submenu").removeClass("open");
			}
		});
	}


	///////////////////////////////////////////////////
	// 02. SubMenu Dropdown Toggle
	var header_icon =
		`<span class="header-icon">
		<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="htrr://www.w3.org/2000/svg">
		<path d="M6.04088 0L0.535156 4.125V11H4.26484V8.59381C4.26484 7.64165 5.05698 6.87506 6.04088 6.87506C7.02477 6.87506 7.81692 7.64165 7.81692 8.59381V11H11.5466V4.125L6.04088 0Z" fill="#FFB302"/></svg>                                
	</span>`;
	$(header_icon).insertBefore('.menu-icon nav ul .menu-icon-2');


	////////////////////////////////////////////////////
	// 03. Common JsmySwiper 
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});

	$(".has-img").each(function () {
		var imgSrc = $(this).attr("data-menu-img");
		var img = `<img class="mega-menu-img" src="${imgSrc}" alt="img">`;
		$(this).append(img);

	});

	////////////////////////////////////////////////////
	// 12. Nice Select Js
	$('.rr-header-search-category select').niceSelect();

	////////////////////////////////////////////////////
	// 13. Smooth Scroll Js
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothSctoll();

	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();

	////////////////////////////////////////////////////
	// 04. Click To Down
	function scrollNav() {
		$('.rr-banner-scroll-mouse a').click(function () {
			$(".rr-banner-scroll-mouse a.active").removeClass("active");
			$(this).addClass("active");

			$('html, body').stop().animate({
				scrollTop: $($(this).attr('href')).offset().top - 0
			}, 300);
			return false;
		});
	}
	scrollNav();



	// 13. Swiper Js
	var rrteatimonialswiper = new Swiper(".rr-testimonial-active", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: {
		delay: 3000,
		},
		breakpoints: {
			'1600': {
				slidesPerView: 2,
			},
			'1400': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		pagination: {
			el: ".rr-testimonial-swiper-dot",
			clickable: true,
		},
		navigation: {
			nextEl: '.testimonial-arrow-next',
			prevEl: '.testimonial-arrow-prev',
		},
	});


	const sliderswiper = new Swiper(".main-slider-active", { 
		slidesPerView: 1, 
		autoplay: {
			delay: 5000,
		},
		loop: true,

		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		// Connect with Navigation Swiper
	});

	// 13. Swiper Js
	const productswiper = new Swiper('.rr-blog-active', {
		// Optional parameters
		speed: 1000,
		loop: true,
		slidesPerView: 3,
		// autoplay: true,
		spaceBetween: 30,
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
			a11y: false,
		},
		navigation: {
			nextEl: '.postbox-arrow-next',
			prevEl: '.postbox-arrow-prev',
		},
	});

// Project Carousel
var swiperProject = new Swiper(".rr-services-2-active", {
	slidesPerView: 4,
	spaceBetween: 25,
	slidesPerGroup: 1,
	loop: true,
	autoplay: true,
	grabCursor: true,
	speed: 600,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".postbox-arrow-next",
		prevEl: ".postbox-arrow-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 25,
		},
		767: {
			slidesPerView: 2,
			slidesPerGroup: 1,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 4,
			slidesPerGroup: 1,
		},
	},
});
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const postboxswiper = new Swiper('.postbox__thumb-slider-active', {
		// Optional parameters
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		autoplay: true,
		spaceBetween: 0,
		centeredSlides: true,
		breakpoints: {
			'1600': {
				slidesPerView: 1,
			},
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.postbox-arrow-next',
			prevEl: '.postbox-arrow-prev',
		},
	});
	// 13. Swiper Js
	const galleryswiper = new Swiper('.rr-gallery-active', {
		// Optional parameters
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		autoplay: true,
		spaceBetween: 0,
		breakpoints: {
			'1600': {
				slidesPerView: 1,
			},
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		pagination: {
			el: ".gallery-slider-dots",
			clickable: true,
		},


	});


	// 13. Swiper Js
	const instagramswiper = new Swiper('.rr-instagram-active', {
		// Optional parameters
		speed: 1000,
		loop: true,
		slidesPerView: 4,
		autoplay: true,
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},

	});

	// 13. Swiper Js
	const projectswiper = new Swiper('.rr-project-active', {
		// Optional parameters
		speed: 1000,
		loop: true,
		slidesPerView: 5,
		autoplay: true,
		spaceBetween: 30,
		breakpoints: {
			'1600': {
				slidesPerView: 5,
			},
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},

	});

	// 13. Swiper Js
	const brandswiper = new Swiper('.rr-brand-active', {
		// Optional parameters
		speed: 1000,
		loop: true,
		slidesPerView: 4,
		autoplay: true,
		spaceBetween: 30,
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},

	});



	//testimonia-item-active
	$('.rr-testimonial-item-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		dots: true,
		centerMode: false,
		centerPadding: '30px',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					centerPadding: '30px',
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: '10px',
				}
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: '60px',
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	////////////////////////////////////////////////////
	// 21. Counter Js
	new PureCounter();


	// Jquery Appear raidal
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
			var $this = $(this),
				knobVal = $this.attr('data-rel');

			$this.knob({
				'draw': function () {
					$(this.i).val(this.cv + '%')
				}
			});

			$this.appear(function () {
				$({
					value: 0
				}).animate({
					value: knobVal
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}, {
				accX: 0,
				accY: -150
			});
		});
	}
	////////////////////////////////////////////////////
	// 15. Masonary Js
	// $('.grid').imagesLoaded(function () {
	// 	// init Isotope
	// 	var $grid = $('.grid').isotope({
	// 		itemSelector: '.grid-item',
	// 		percenrrosition: true,
	// 		masonry: {
	// 			// use outer width of grid-sizer for columnWidth
	// 			columnWidth: '.grid-item',
	// 		}
	// 	});


	// 	// filter items on button click
	// 	$('.masonary-menu').on('click', 'button', function () {
	// 		var filterValue = $(this).attr('data-filter');
	// 		$grid.isotope({ filter: filterValue });
	// 	});

	// 	//for menu active class
	// 	$('.masonary-menu button').on('click', function (event) {
	// 		$(this).siblings('.active').removeClass('active');
	// 		$(this).addClass('active');
	// 		event.preventDefault();
	// 	});

	// });

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 5.0,
			scalarY: 5.0,
		});
	};

	////////////////////////////////////////////////////
	// 16. Wow Js
	new WOW().init();
	////////////////////////////////////////////////////
	// 17. Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});

	////////////////////////////////////////////////////
	// 18. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

	$('.activebsba').on("click", function () {
		$('#services-item-thumb').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});



	////////////////////////////////////////////////////
	// 19. Line Animation Js
	if ($('#marker').length > 0) {
		function rr_tab_line() {
			var marker = document.querySelector('#marker');
			var item = document.querySelectorAll('.menu-style-3  > nav > ul > li');
			var itemActive = document.querySelector('.menu-style-3  > nav > ul > li.active');

			function indicator(e) {
				marker.style.left = e.offsetLeft + "px";
				marker.style.width = e.offsetWidth + "px";
			}


			item.forEach(link => {
				link.addEventListener('mouseenter', (e) => {
					indicator(e.target);
				});

			});


			var activeNav = $('.menu-style-3 > nav > ul > li.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;

			var precedingAnchorWidth = anchorWidthCounter();


			$(marker).css('display', 'block');

			$(marker).css('width', totalWidth);

			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.menu-style-3 > nav > ul > li').each(function (index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft + "px";
					if (activeTest) {
						// Break out of the each function.
						return false;
					}

					a = $(elem).find('li');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;

					anchorWidths = anchorWidths + aTotalWidth;

				});

				return anchorWidths;
			}
		}
		rr_tab_line();
	}


	if ($('#productTabMarker').length > 0) {
		function rr_tab_line_2() {
			var marker = document.querySelector('#productTabMarker');
			var item = document.querySelectorAll('.rr-product-tab button');
			var itemActive = document.querySelector('.rr-product-tab .nav-link.active');

			// rtl settings
			var rr_rtl = localStorage.getItem('rr_dir');
			let rtl_setting = rr_rtl == 'rtl' ? 'right' : 'left';

			function indicator(e) {
				marker.style.left = e.offsetLeft + "px";
				marker.style.width = e.offsetWidth + "px";
			}


			item.forEach(link => {
				link.addEventListener('click', (e) => {
					indicator(e.target);
				});
			});

			var activeNav = $('.nav-link.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;

			var precedingAnchorWidth = anchorWidthCounter();


			$(marker).css('display', 'block');

			$(marker).css('width', totalWidth);

			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.rr-product-tab button').each(function (index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft + "px";
					if (activeTest) {
						// Break out of the each function.
						return false;
					}

					a = $(elem).find('button');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;

					anchorWidths = anchorWidths + aTotalWidth;

				});

				return anchorWidths;
			}
		}
		rr_tab_line_2();
	}

	////////////////////////////////////////////////////
	// 20. Video Play Js
	var play = false;
	$('.rr-video-toggle-btn').on('click', function () {

		if (play === false) {
			$('.rr-slider-video').addClass('full-width');
			$(this).addClass('hide');
			play = true;

			$('.rr-slider-video').find('video').each(function () {
				$(this).get(0).play();
			});
		} else {
			$('.rr-slider-video').removeClass('full-width');
			$(this).removeClass('hide');
			play = false;
			$('.rr-slider-video').find('video').each(function () {
				$(this).get(0).pause();
			});
		}

	});

	////////////////////////////////////////////////////
	// 21. Password Toggle Js
	if ($('#password-show-toggle').length > 0) {
		var btn = document.getElementById('password-show-toggle');

		btn.addEventListener('click', function (e) {

			var inputType = document.getElementById('rr_password');
			var openEye = document.getElementById('open-eye');
			var closeEye = document.getElementById('close-eye');

			if (inputType.type === "password") {
				inputType.type = "text";
				openEye.style.display = 'block';
				closeEye.style.display = 'none';
			} else {
				inputType.type = "password";
				openEye.style.display = 'none';
				closeEye.style.display = 'block';
			}
		});
	}

	if ($('.rr-header-height').length > 0) {
		var headerHeight = document.querySelector(".rr-header-height");
		var setHeaderHeight = headerHeight.offsetHeight;

		$(".rr-header-height").each(function () {
			$(this).css({
				'height': setHeaderHeight + 'px'
			});
		});
	}
	// Jquery Appear raidal
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
			var $this = $(this),
				knobVal = $this.attr('data-rel');

			$this.knob({
				'draw': function () {
					$(this.i).val(this.cv + '%')
				}
			});

			$this.appear(function () {
				$({
					value: 0
				}).animate({
					value: knobVal
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}, {
				accX: 0,
				accY: -150,
			});
		});
	}

	if ($('.rr-main-menu-content').length && $('.rr-main-menu-mobile').length) {
		let navContent = document.querySelector(".rr-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".rr-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;


		let arrow = $(".rr-main-menu-mobile .has-dropdown > a");

		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

			self.append(function () {
				return arrowBtn;
			});

			self.find("button").on("click", function (e) {
				e.preventDefault();
				let self = $(this);
				self.toggleClass("dropdown-opened");
				self.parent().toggleClass("expanded");
				self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
				self.parent().parent().children(".rr-submenu").slideToggle();
			});

		});
	}


	$('.rr-feature-item').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.rr-feature-item').removeClass('active');
	});

	// jarallax
	if ($('.jarallax').length > 0) {
		$('.jarallax').jarallax({
			speed: 0.2,
			imgWidth: 1366,
			imgHeight: 768,
		});

	};

	///////////////////////////////////////////////////
	// 07. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 400) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	if ($('.rr-header-height').length > 0) {
		var headerHeight = document.querySelector(".rr-header-height");
		var setHeaderHeight = headerHeight.offsetHeight;

		$(".rr-header-height").each(function () {
			$(this).css({
				'height': setHeaderHeight + 'px'
			});
		});
	}

	$('.rr-cart-minus').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = Number($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.rr-cart-plus').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(Number($input.val()) + 1);
		$input.change();
		return false;
	});

	$('.rr-shop-minus').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = Number($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.rr-shop-plus').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(Number($input.val()) + 1);
		$input.change();
		return false;
	});
	///////////////////////////////////////////////////
	// 07. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 400) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	if ($('.rr-header-height').length > 0) {
		var headerHeight = document.querySelector(".rr-header-height");
		var setHeaderHeight = headerHeight.offsetHeight;

		$(".rr-header-height").each(function () {
			$(this).css({
				'height': setHeaderHeight + 'px'
			});
		});
	}
	$('#contact-us__form').submit(function (event) {
		event.preventDefault();
		var form = $(this);
		$('.loading-form').show();

		setTimeout(function () {
			$.ajax({
				type: form.attr('method'),
				url: form.attr('action'),
				data: form.serialize()
			}).done(function (data) {
				$('.loading-form').hide();
				$('#contact-us__form').append('<p class="success-message mt-3 mb-0">Your message has been sent successfully.</p>');
			}).fail(function (data) {
				$('.loading-form').hide();
				$('#contact-us__form').append('<p class="error-message mt-3 mb-0">Something went wrong. Please try again later.</p>');

			});
		}, 1000);
	});

	// ------------------------------------------------------------
	// Global "Book Now" Popup Form Injection & Handlers
	// ------------------------------------------------------------
	function initializeBookingPopup() {
		// Avoid duplicate injection
		if (document.getElementById('popupOverlay')) return;

		// Inject styles
		if (!document.getElementById('booking-popup-styles')) {
			var popupStyles = `
				* { box-sizing: border-box; }
				.popup-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); z-index: 10000; opacity: 0; transition: opacity .3s ease; }
				.popup-overlay.active { display: flex; justify-content: center; align-items: center; opacity: 1; }
				.popup-form { background: #fff; padding: 40px; border-radius: 20px; width: 90%; max-width: 600px; max-height: 90vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(0,0,0,.3); transform: scale(.7); transition: transform .3s ease; position: relative; }
				.popup-overlay.active .popup-form { transform: scale(1); }
				.popup-form .close-btn { position: absolute; top: 20px; right: 25px; font-size: 30px; color: #aaa; cursor: pointer; transition: color .3s ease; }
				.popup-form .close-btn:hover { color: #333; }
				.popup-form .form-header { text-align: center; margin-bottom: 30px; }
				.popup-form .form-header h2 { color: #333; margin-bottom: 10px; font-size: 28px; }
				.popup-form .form-header p { color: #666; font-size: 16px; }
				.popup-form .form-group { margin-bottom: 20px; }
				.popup-form .form-row { display: flex; gap: 15px; }
				.popup-form .form-row .col { flex: 1; }
				.popup-form label { display: block; margin-bottom: 8px; font-weight: 600; color: #333; }
				.popup-form .form-control { width: 100%; padding: 12px 15px; border: 2px solid #e1e5e9; border-radius: 10px; font-size: 16px; transition: border-color .3s ease, box-shadow .3s ease; background-color: #fff; }
				.popup-form .form-control:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102,126,234,.1); }
				.popup-form textarea.form-control { resize: vertical; min-height: 100px; }
				.popup-form .submit-btn { width: 100%; background: linear-gradient(135deg,#667eea 0%,#764ba2 100%); color: #fff; padding: 15px; border: none; border-radius: 10px; font-size: 18px; font-weight: 600; cursor: pointer; transition: all .3s ease; margin-top: 10px; }
				.popup-form .submit-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 25px rgba(102,126,234,.3); }
				.popup-form .required { color: #e74c3c; }
				.popup-form .conditional-field { display: none; opacity: 0; transition: opacity .3s ease; }
				.popup-form .conditional-field.show { display: block; opacity: 1; }
				@media (max-width: 768px) { .popup-form { padding: 30px 20px; margin: 10px; } .popup-form .form-row { flex-direction: column; gap: 0; } .popup-form .form-header h2 { font-size: 24px; } }
			`;
			var styleTag = document.createElement('style');
			styleTag.id = 'booking-popup-styles';
			styleTag.type = 'text/css';
			styleTag.appendChild(document.createTextNode(popupStyles));
			document.head.appendChild(styleTag);
		} 

		// Inject popup HTML
		var popupHtml = `
			<div class="popup-overlay" id="popupOverlay">
				<div class="popup-form" role="dialog" aria-modal="true" aria-labelledby="bookingFormTitle">
					<span class="close-btn" aria-label="Close">&times;</span>
					<div class="form-header">
						<h2 id="bookingFormTitle">Event Booking Form</h2>
						<p>Kindly provide us with the following information</p>
					</div>
					<form target="_blank" action="https://formsubmit.co/eventzbytwinkle@gmail.com" method="POST" id="bookingForm">
						<input type="hidden" name="_subject" value="New Event Booking Request">
						<input type="hidden" name="_captcha" value="false">
						<div class="form-group">
							<div class="form-row">
								<div class="col">
									<label for="fullName">Full Name <span class="required">*</span></label>
									<input type="text" id="fullName" name="fullName" class="form-control" placeholder="Enter your full name" required>
								</div>
								<div class="col">
									<label for="email">Email Address <span class="required">*</span></label>
									<input type="email" id="email" name="email" class="form-control" placeholder="your@email.com" required>
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="form-row">
								<div class="col">
									<label for="contact">Contact Number <span class="required">*</span></label>
									<input type="tel" id="contact" name="contact" class="form-control" placeholder="Your phone number" required>
								</div>
								<div class="col">
									<label for="eventType">Type of Event <span class="required">*</span></label>
									<select id="eventType" name="eventType" class="form-control" required>
										<option value="">Select event type</option>
										<option value="Wedding">Wedding</option>
										<option value="Corporate Event">Corporate Event</option>
										<option value="Birthday Party">Birthday Party</option>
										<option value="Conference">Conference</option>
										<option value="Other">Other</option>
									</select>
								</div>
							</div>
						</div>
						<div class="form-group conditional-field" id="generalEventFields">
							<div class="form-row">
								<div class="col">
									<label for="eventVenue">Event Venue/Location</label>
									<input type="text" id="eventVenue" name="eventVenue" class="form-control" placeholder="Enter venue or location">
								</div>
								<div class="col">
									<label for="guestsEng">Number of Guests</label>
									<input type="number" id="guestsEng" name="guestsEng" class="form-control" placeholder="Expected number of guests" min="1">
								</div>
							</div>
						</div>
						<div class="form-group conditional-field" id="weddingFields">
							<div class="form-row">
								<div class="col">
									<label for="weddingVenue">Venue for Wedding</label>
									<input type="text" id="weddingVenue" name="weddingVenue" class="form-control" placeholder="Wedding venue location">
								</div>
								<div class="col">
									<label for="guestsWedding">Number of Wedding Guests</label>
									<input type="number" id="guestsWedding" name="guestsWedding" class="form-control" placeholder="Expected wedding guests" min="1">
								</div>
							</div>
						</div>
						<div class="form-group">
	<div class="form-row">
		<div class="col">
			<label for="eventDate">Event Date <span class="required">*</span></label>
			<input type="date" id="eventDate" name="eventDate" class="form-control" required>
		</div>
		<div class="col">
			<label for="budget">Budget Range</label>
			<input type="text" id="budget" name="eventBudget" class="form-control" placeholder="Enter your budget range" required>
		</div>
	</div>
</div>
						<div class="form-group">
							<label for="additionalInfo">Additional Information</label>
							<textarea id="additionalInfo" name="additionalInfo" class="form-control" rows="4" placeholder="Any special requirements, preferences, or additional details you'd like us to know..."></textarea>
						</div>
						<button type="submit" class="submit-btn">Submit Booking Request 😊</button>
					</form>
					<div style="text-align:center;margin-top:20px;color:#666;font-size:14px;">Looking forward to working with you! Thank you.</div>
				</div>
			</div>
		`;
		$('body').append(popupHtml);

		// Init select styling for injected selects only (if plugin present)
		if ($.fn.niceSelect) {
			$('#bookingForm select').niceSelect();
		}

		// Helpers
		function toggleConditionalFields() {
			var eventType = $('#eventType').val();
			var generalFields = $('#generalEventFields');
			var weddingFields = $('#weddingFields');
			generalFields.removeClass('show');
			weddingFields.removeClass('show');
			if (eventType === 'Wedding') {
				weddingFields.addClass('show');
			} else if (eventType && eventType !== 'Wedding') {
				generalFields.addClass('show');
			}
		}

		function openBookingForm() {
			var overlay = document.getElementById('popupOverlay');
			overlay.style.display = 'flex';
			setTimeout(function () { overlay.classList.add('active'); }, 10);
		}

		function closeBookingForm(event) {
			if (event && event.target !== event.currentTarget) return;
			var overlay = document.getElementById('popupOverlay');
			overlay.classList.remove('active');
			setTimeout(function () { overlay.style.display = 'none'; }, 300);
		}

		// Expose minimal API (optional external usage)
		window.openBookingForm = openBookingForm;
		window.closeBookingForm = closeBookingForm;

		// Bind UI events
		$('#popupOverlay').on('click', function (e) { if (e.target === this) closeBookingForm(e); });
		$('#popupOverlay .close-btn').on('click', function () { closeBookingForm(); });
		$('#eventType').on('change', toggleConditionalFields);

		// Set minimum date to today
		var today = new Date().toISOString().split('T')[0];
		$('#eventDate').attr('min', today);

		// Handle form submission (close after a bit)
		$('#bookingForm').on('submit', function () {
			setTimeout(function () { closeBookingForm(); }, 1000);
		});

		// Attach global click handler to open on "Book Now"
		$(document).on('click', 'a, button', function (e) {
			var $el = $(this);
			var text = $el.text().replace(/\s+/g, ' ').toLowerCase();
			var isBookNow = text.indexOf('book now') > -1;
			if (!isBookNow) return;
			// Allow real submit buttons inside forms (e.g., booking page form)
			if ($el.is('button') && (String($el.attr('type') || '').toLowerCase() === 'submit')) return;
			e.preventDefault();
			openBookingForm();
		});
	}

	// Initialize immediately (scripts are loaded after DOM in templates)
	initializeBookingPopup();
})(jQuery);
