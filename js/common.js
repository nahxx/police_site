$(function() {
  // top-nav 클릭이벤트 (open 클래스 추가)
 $('.gnb1 > li').click(function() {
   $('.gnb2').not($('.gnb2', this)).removeClass('open');
   $('.gnb2', this).toggleClass('open');
 });

 // footer01 button 클릭이벤트 (open 클래스 추가)
 $('.footer01 .select').on('click', 'button', function() {
   $('.footer01 .select').not($(this).parent()).removeClass('open');
   $(this).parent().toggleClass('open');
 });

// 푸터의 top 버튼 누르면 상단으로 이동
 $('.top-btn a').click(function() {
   $('html, body').animate({scrollTop: 0}, 1500);
   return false;
 });

 // favorite-link에서 tab 클릭 이벤트 (active 클래스 추가)
 $('.tab-box div a').click(function() {
   let divIdx = $(this).parent().index();
   $('.tab-box div').removeClass('active');
   $(this).parent().addClass('active');
   $('.favorite-link .list-box > li').each(function() {
     if($(this).index() == divIdx) {
       $('.favorite-link .list-box > li').removeClass('active');
       $(this).addClass('active');
     }
   });
   return false;
 });

 
});
