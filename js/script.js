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
            }

            function typingEffect_init() {

                function type(targetElements, $text) {
                    console.log('typed'); //debug code
                    TypeHangul.type(targetElements, {
                        text: $text,
                        intervalType: 30,
                        append: true
                    });
                }

                function typingEffect1() {
                    var target = 'section#introduction > div.con > div.row > p.line1';
                    var line1 = document.querySelector('section#introduction > div.con > div.row > p.line1');                 
                    var line2 = document.querySelector('section#introduction > div.con > div.row > p.line2');
                    var findStr = '정타임';
                    var strStart = line2.innerHTML.indexOf(findStr);
                    

                    function text1() {
                        console.log('line 1 end'); //debug code

                        var target = 'section#introduction > div.con > div.row > p.line2';
                        type(target, '정타임을 함께하면 우리들의 마음은 하나가 됩니다.');

                        line2.addEventListener('th.endType',function(){
                            if (strStart != -1);{
                                console.log('find!');//debug code

                                // var strEnd = line2.innerHTML.indexOf('임');
                                // var strArr = Array.from(line2.innerHTML);
                                // console.log(strEnd);//debug code
                                
                                // for(var i = strStart; i<=strEnd; i++){
                                //     strArr[i].
                                // }

                            }
                            
                            line2.removeEventListener('th.endType',this);

                        });



                        line1.removeEventListener('th.endType', text1);

                    }



                        type(target, '서로간의 정이 새록새록 솟아나는 초코파이!'); 
                        line1.addEventListener('th.endType', text1);
                    }

                        typingEffect1();
                    }

                    function scrollMagic_init() {
                        var controller = new ScrollMagic.Controller();

                        function animation1() {

                            var target1 = " section#introduction > div.con > div.row > div.img-box, section#introduction > div.con > div.row > p";

                            var scene1 = new ScrollMagic.Scene({
                                    triggerElement: "section#introduction > div.con ",
                                    triggerHook: 0.5, //viewport에 대해 상대적으로 어느 시점에서 보여줄 건지를 설정
                                    offset: -200,
                                    // duration: "100%",
                                })

                                .setClassToggle(target1, "visible")
                                .addTo(controller) // 컨트롤러 등록                
                                .addIndicators({
                                    name: "ani1"
                                });


                        }

                        animation1();

                    }


                    naviMenu_init();
                    slideImg_init();
                    slickSlide_init();
                    scrollMagic_init();
                    typingEffect_init();

                });