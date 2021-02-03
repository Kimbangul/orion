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

    function mainSlide_init(){
        
        var $mainSlide = $('#slide div.img-slide');
        console.log($mainSlide);
        
        var $mainSlideList = [
            '../img/slide/slide1.png'
        ];

        $mainSlide.each(function (index, item){
            $(item).css("background-image", "url('" + $mainSlideList[index] + "')" );

        });
        


    }


    naviMenu_init();
    mainSlide_init();

});