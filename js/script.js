$(document).ready(function () {


            function naviMenu_init() {

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
                        naviMenuOpen();
                    },
                    function () {
                        naviMenuClose();
                    }
                );


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
                    adaptiveHeight: true

                });


                // news slide

                $('section#news > div.con > div.row').slick({
                    slide: 'a',
                    infinite: true,                    
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 1000,  
                    prevArrow: "<button type='button' class='slick-prev'><img src='img/arrow.png' alt='이전 슬라이드로'></button>", // 이전 화살표 모양 설정
                    nextArrow: "<button type='button' class='slick-next'><img src='img/arrow.png' alt='다음 슬라이드로'></button>",
                    dots: true,
                    autoplay: true,
                    centerMode: true,
                    autoplaySpeed: 7000,
                    pauseOnHover: false,
                    vertical: false,
                    dotsClass: "slick-dots",
                    draggable: true

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
    
    
                    function insertTag(insertToTag , target){                    
                       existHtml = tg.html();
                       var newHtml = existHtml + insertToTag;
                       target.html(newHtml);
                        
                    }
    
                    function typeEffect(target){  
    
                        function typeLine(){
                            if (i < textToWrite.length){   
    
                                var  existHtml = tg.html();                  
    
                                target.html(existHtml+=textToWrite[i]);
                                // 한 글자씩 타이핑한다.
                                i++;
                                
                                setTimeout(typeLine, 70);                        
        
                            }
                            else if (i = textToWrite.length){
                                
                                insertTag(tag[textnum], target);
                                //  한 줄 타이핑이 끝나고 나서 태그 삽입
    
                                i = 0;
                                textnum++;
                                setTimeout(typeEffect, 200, target); 
                            }
                        }
                        
                        if (textnum < text.length){ 
                            //  글자 수
                           var textToWrite = text[textnum];
    
    
                            typeLine();
                        
    
                        }         
                        else if(textnum = text.length){
                            target.html(completeText);
                        }                                                    
                        
                    }
    
                 
                    typeEffect(tg);        
    
                    
                     }
            


                    function scrollMagic_init() {
                        var controller = new ScrollMagic.Controller();

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
                                .addIndicators({
                                    name: "ani1"
                                })             
                                .on("start end",  typingEffect_init );             


                        }

                        animation1();

                    }


                    naviMenu_init();
                    slideImg_init();
                    slickSlide_init();
                    scrollMagic_init();
                  

                });