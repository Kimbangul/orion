$(document).ready(function(){


    function naviMenu_init(){

        var $navMenuDepth1 = $('header > nav ul.depth-1');
        var $navMenuDepth2 = $('header > nav  ul.depth-2');
        var $nav = $('header > nav');


        function naviMenuOpen(){
            $nav.addClass('active');
            $navMenuDepth2.stop().slideDown(300);
        }
        function naviMenuClose(){
            $nav.removeClass('active');
            $navMenuDepth2.stop().slideUp(300);
        }

        $navMenuDepth1.hover(
            function(){
                naviMenuOpen();
            },
            function(){
                naviMenuClose();
            }
        );


    }

    function slideImg_init(){
        
        var $mainSlide = $('#slide div.img-slide');
        console.log($mainSlide);
        
        var $mainSlideList = [
            '../img/slide/slide1_darken.png',
            '../img/slide/slide2.jpg'
        ];

        $mainSlide.each(function (index, item){
            $(item).css("background-image", "url('" + $mainSlideList[index] + "')" );

        });
        


    }


    function slickSlide_init(){


        $('section#slide > div.con').slick({
            slide: '.img-slide',
            
            infinite: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed : 1000,
            arrows : true, 	
            prevArrow : "<button type='button' class='slick-prev'><img src='img/arrow.png' alt='이전 슬라이드로'></button>",		// 이전 화살표 모양 설정
			nextArrow : "<button type='button' class='slick-next'><img src='img/arrow.png' alt='다음 슬라이드로'></button>",
            dots : true, 	
			autoplay : true,			
			autoplaySpeed : 5000, 		
			pauseOnHover : false,		
			vertical : false,			
			dotsClass : "slick-dots", 	
			draggable : true

        });
    }


    naviMenu_init();
    slideImg_init();
    slickSlide_init();

});