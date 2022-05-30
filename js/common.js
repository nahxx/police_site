$(function() {
  // top-nav 클릭이벤트 (open 클래스 추가)
  $('.gnb1 > li').click(function() {
    $('.gnb2').not($('.gnb2', this)).removeClass('open');
    $('.gnb2', this).toggleClass('open');
  })
});
