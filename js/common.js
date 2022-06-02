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

 // border-items의 뉴스 제목 글자수 제한
 $('.item-li .subject').each(function() {
   let elem = $(this);
   let content = elem.text();
   const showTextLeng = 28;
   let lessText = content.substr(0, showTextLeng);
   if(content.length > showTextLeng) {
     elem.text(`${lessText}…`);
   }
 });

 // .board-items 클릭이벤트 (active 클래스 추가)
 $('.board-items > ul > li > a').click(function() {
   let liIdx = $(this).parent().index();
   if(liIdx == 5) {
     return false; // +버튼은 이벤트 적용 안함
   }
   $('.board-items > ul > li').removeClass('active');
   $(this).parent().addClass('active');
   $('.board-items > ul > li').each(function() {
     if($(this).index() == liIdx) {
       $('.board-items > ul > li .con-box').removeClass('active');
       $(this).find('.con-box').addClass('active');
     }
   });
   return false
 });

 //
 $('.banner-li .txt-box strong').each(function() {
   let elem = $(this);
   let content = elem.text();
   const showTextLeng = 14;
   let lessText = content.substr(0, showTextLeng);
   if(content.length > showTextLeng) {
     elem.text(`${lessText}…`);
   }
 });
 $('.banner-li .txt-box span').each(function() {
   let elem = $(this);
   let content = elem.text();
   const showTextLeng = 34;
   let lessText = content.substr(0, showTextLeng);
   if(content.length > showTextLeng) {
     elem.text(`${lessText}…`);
   }
 });
});
