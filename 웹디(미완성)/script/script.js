jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown()
        $(".bgmenu").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp()
        $(".bgmenu").stop().slideUp()
    })

    $(function (){
        //탭 메뉴
        const taBtn = $(".notice .title > ul > li");    //버튼 설정
        const taCont = $("notice .cont > div");     //콘텐츠 설정

        //모든 콘첸츠를 안보이게 설정 --> 첫번째 콘텐츠만 보이게 처리
        tabCont.hide().eq(0).show();

        tabBtn.click(function(e){
            e.preventDefault();

        
        })
    })
















})