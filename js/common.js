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

 $('.top-btn a').click(function() {
   $('html, body').animate({scrollTop: 0}, 1500);
   return false;
 });
});
