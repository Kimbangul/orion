$(document).ready(function () {


    function naviMenu_init() {

        function responsive(){

            
                
                var $navMenuDepth1 = $('header > nav ul.depth-1');
                var $navMenuDepth2 = $('header > nav  ul.depth-2');
                var $nav = $('header > nav');
        
        
                function naviMenuOpen() {
                    $nav.addClass('active');
                   
                    $navMenuDepth2.stop().slideDown(300);
                }
        
                function naviMenuClose() {
                    $nav.removeClass('active');
                   
                    $navMenuDepth2.stop().slideUp(300);
                }
        

                $navMenuDepth1.hover(
                    function () {
                        if($(window).width() > 1080) { 
                        naviMenuOpen();
                        }
                    },
                    function () {
                        naviMenuClose();
                    }
                );
                
            

        }

        responsive();

        $(window).resize(function(){
            responsive();

        });



        function mbMenu(){

            var $menuBtn = $('header > nav > div.menu-btn > a ');   
            var $mbMenuDepth1 = $('header > nav ul.depth-1');  
            var $mbMenuCloseBtn= $('ul.depth-1 > li.mb-nav-topbar > div.close-btn > a');  
            

            function mbMenuOpenClose_init(){

                function mbMenuOpenClose(){

                   

                    if($mbMenuDepth1.hasClass("on")){
                        mbMenuClose();
                    }
                    else{
                        mbMenuOpen();
                    }
    
    
                }
    
                function mbMenuOpen(){
                    $mbMenuDepth1.addClass("on");
                    $('body').addClass('darken');
                }
                function mbMenuClose(){
                    $mbMenuDepth1.removeClass("on");
                    $('body').removeClass('darken');
                }
    
                    
                $menuBtn.click(function(e){   
                    e.preventDefault();
                    mbMenuOpenClose();
                });
    
                $mbMenuCloseBtn.click(function(e){   
                    e.preventDefault();
                    mbMenuOpenClose();
                });
    

            }

            mbMenuOpenClose_init();


          


        }

        


        mbMenu();




    }

    function slideImg_init() {

        var $mainSlide = $('#slide div.img-slide');

        var $mainSlideList = [
            'img/slide/slide1_darken.png',
            'img/slide/slide2.jpg'
        ];

        $mainSlide.each(function (index, item) {
            $(item).css("background-image", "url('" + $mainSlideList[index] + "')");

        });



    }


    function slickSlide_init() {

        // main slide
        $('section#slide > div.con').slick({
            slide: '.img-slide',

            infinite: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev'><img src='img/arrow.png' alt='이전 슬라이드로'></button>", // 이전 화살표 모양 설정
            nextArrow: "<button type='button' class='slick-next'><img src='img/arrow.png' alt='다음 슬라이드로'></button>",
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            vertical: false,
            dotsClass: "slick-dots",
            draggable: true

        });

        // new product slide

        $('section#new-product > div.con > div.row:first-of-type').slick({
            slide: 'div.cell',

            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 1000,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            vertical: false,
            dotsClass: "slick-dots",
            draggable: true,
            adaptiveHeight: true,
            responsive:[              
                {
                    breakpoint: 780, 
                    settings: { slidesToShow: 1}
                }
            ]

        });


        // news slide

        $('section#news > div.con > div.row').slick({
            slide: 'a',
            infinite: true,
            slidesToShow: 1,
            centerPadding: '35%',
            slidesToScroll: 1,
            speed: 1000,
            prevArrow: "<button type='button' class='slick-prev'><img src='img/arrow.png' alt='이전 슬라이드로'></button>", // 이전 화살표 모양 설정
            nextArrow: "<button type='button' class='slick-next'><img src='img/arrow.png' alt='다음 슬라이드로'></button>",
            dots: true,
            autoplay: false,
            centerMode: true,
          
            autoplaySpeed: 7000,
            pauseOnHover: false,
            vertical: false,
            dotsClass: "slick-dots",
            draggable: true,
            responsive:[              
                {
                    breakpoint: 1080, 
                    settings: { slidesToShow: 1,   centerPadding: '15%'}
                }
            ]

        });
    }

    function typingEffect_init() {


        var i = 0;
        var textnum = 0;
        var text = [
            '서로간의 정이 새록새록 솟아나는 초코파이!',
            '정타임을 함께하면 우리들의 마음은 하나가 됩니다.',

        ]
        var completeText =
            '서로간의 정이 새록새록 솟아나는 초코파이! <br> <span>정타임</span>을 함께하면 우리들의 마음은 하나가 됩니다.';

        var tag = [
            '<br>',
            '',
        ]

        var tg = $('#introduction p.line1');


        function insertTag(insertToTag, target) {
            existHtml = tg.html();
            var newHtml = existHtml + insertToTag;
            target.html(newHtml);

        }

        function typeEffect(target) {

            function typeLine() {
                if (i < textToWrite.length) {

                    var existHtml = tg.html();

                    target.html(existHtml += textToWrite[i]);
                    // 한 글자씩 타이핑한다.
                    i++;

                    setTimeout(typeLine, 70);

                } else if (i = textToWrite.length) {

                    insertTag(tag[textnum], target);
                    //  한 줄 타이핑이 끝나고 나서 태그 삽입

                    i = 0;
                    textnum++;
                    setTimeout(typeEffect, 200, target);
                }
            }

            if (textnum < text.length) {
                //  글자 수
                var textToWrite = text[textnum];


                typeLine();


            } else if (textnum = text.length) {
                target.html(completeText);
            }

        }


        typeEffect(tg);


    }



    function scrollMagic_init() {
        var controller = new ScrollMagic.Controller();

        function main() {

            var target = "body";

            var scene = new ScrollMagic.Scene({                   
                    triggerElement: "body",
                    triggerHook: 0, //viewport에 대해 상대적으로 어느 시점에서 보여줄 건지를 설정
                    offset: 1,
                    // duration: "100%",
                })

                .setClassToggle(target, "on")
                .addTo(controller); // 컨트롤러 등록                

                
                $('aside#fixed-menu li.top').click(function(e){
                    e.preventDefault();
                    window.scrollTo({top:0, behavior:'smooth'});
                });


        }

        function section() {

            // var target = "section";

            $('section:not(#link), section#link div.row:nth-of-type(2)').each(function(){
                var title = $(this).find(".title");  
           

                var scene = new ScrollMagic.Scene({                   
                    triggerElement: this,
                    triggerHook: 0.7, 
                    offset: 0,                
                })

                .setClassToggle(title[0], "on")
                .addTo(controller); // 컨트롤러 등록                


            });


        }


        function animation1() {

            var target1 = " section#introduction > div.con > div.row > div.img-box, section#introduction > div.con > div.row > p";

            var scene1 = new ScrollMagic.Scene({
                    reverse: false,
                    triggerElement: "section#introduction > div.con ",
                    triggerHook: 0.5, //viewport에 대해 상대적으로 어느 시점에서 보여줄 건지를 설정
                    offset: -200,
                    // duration: "100%",
                })

                .setClassToggle(target1, "visible")
                .addTo(controller) // 컨트롤러 등록               

                .on("start end", typingEffect_init);


        }

        function animation2() {

            var target2 = " section#product > div.con";

            var scene2 = new ScrollMagic.Scene({                   
                    triggerElement: "section#product",
                    triggerHook: 0.5, //viewport에 대해 상대적으로 어느 시점에서 보여줄 건지를 설정
                    offset: 100,
                    // duration: "100%",
                })

                .setClassToggle(target2, "visible")
                .addTo(controller); // 컨트롤러 등록                

                


        }

        function animation3() {

            var target3 = " section#link > div.con";

            var scene3 = new ScrollMagic.Scene({                   
                    triggerElement: "section#link",
                    triggerHook: 0.5, //viewport에 대해 상대적으로 어느 시점에서 보여줄 건지를 설정
                    offset: 0,
                    // duration: "100%",
                })

                .setClassToggle(target3, "visible")
                .addTo(controller); // 컨트롤러 등록                

                


        }

        animation1();
        animation2();
        animation3();
        main();
        section();
    }



    naviMenu_init();
    slideImg_init();
    slickSlide_init();
    scrollMagic_init();


});