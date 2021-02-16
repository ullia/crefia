(function($){

  $(document).ready(function(){
    /*GNB*/
    $('.gnb .depth01>li').mouseenter(function (e){
      $("#header").addClass("open");
      $(".gnb > ul > li").removeClass("active");
  		$(this).addClass("active");
      var depth02_h = $(this).find('.inner').height();
      $(this).find('.v_line').css('height',depth02_h-30)
    });

    $('.gnb').mouseleave(function (e){
      $("#header").removeClass("open");
  		$(".gnb > ul > li").removeClass("active");
    });

    $(".gnb > ul > li").focusin(function (e){
      $("#header").addClass("open");
      $(".gnb > ul > li").removeClass("active");
  		$(this).addClass("active");
    });

    $(".gnb > ul > li").focusout(function (e){
      $("#header").removeClass("open");
  		$(".gnb > ul > li").removeClass("active");
    });
    /*GNB*/

    /* footer 탭 */

    $(".business_list > li").click(function (){
      if($(this).hasClass('on')==true){
        $(".business_list > li").removeClass("on");
      }else{
        $(".business_list > li").removeClass("on");
        $(this).addClass('on');
      }
    });

    $(document).mouseup(function (e){
      var container = $('.business_wrap');
      if( container.has(e.target).length === 0){
        $(".business_list > li").removeClass("on");
      }
    });

    $(".footer_link").focusin(function (e){
      $(".business_list > li").removeClass("on");
    });


    /* footer 탭 */

    /*메인배너 정지 시작 버튼*/
    $('.visual_start').click(function(){
      $('#visual').slick('slickPlay');
      $(this).removeClass('on');
      $('.visual_stop').addClass('on');
    });

    $('.visual_stop').click(function(){
      $('#visual').slick('slickPause');
      $(this).removeClass('on');
      $('.visual_start').addClass('on');
    });
    /*메인배너 정지 시작 버튼*/

    /* 메인 퀵버튼*/
    $('.quick_tap .tap_li').focusin(function(){
      var quick_index = $(this).index();
      $('.quick_tap .tap_li').removeClass('on').eq(quick_index).addClass('on');
      $('.quick_button_wrap .quick_menu').removeClass('on').eq(quick_index).addClass('on');
      });

    $('.quick_button_wrap .quick_menu li').focusin(function(){
      $('.quick_button_wrap .quick_menu li').removeClass('on')
      $(this).addClass('on');
      });

    $('.quick_button_wrap .quick_menu li').focusout(function(){
      $('.quick_button_wrap .quick_menu li').removeClass('on')
      });
    /* 메인 퀵버튼*/

    /*메인 하단 배너 정지 시작 버튼*/
    $('.bottom_slide_start').click(function(){
      $('#bottom_slide').slick('slickPlay');
      $(this).removeClass('on');
      $('.bottom_slide_stop').addClass('on');
    });

    $('.bottom_slide_stop').click(function(){
      $('#bottom_slide').slick('slickPause');
      $(this).removeClass('on');
      $('.bottom_slide_start').addClass('on');
    });
    /*메인 하단 배너 정지 시작 버튼*/

  });

  //table highlight 시작
$(document).ready(function(){

$('table tr').focusin(function(){
  var table_index = $(this).index();

  if($('table tr').eq(table_index).hasClass('on')){
    $('table tr').removeClass('on')
  }else{
    $('table tr').removeClass('on').eq(table_index).addClass('on')
  }
});

$('table tr').focusout(function(){
  $('table tr').removeClass('on')
});


});

//table highlight 끝

  })(jQuery);
