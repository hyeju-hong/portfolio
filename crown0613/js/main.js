$(function(){
    $('.brand .inner .list ul li').click(function () {
        $('.brand .inner .list_product >ul >li,.brand .inner .list ul li ').removeClass('on');

        $(this).addClass('on');

        let i = $(this).index();
        // console.log(i); -잘 되는지 컨솔로 확인한거
        $('.brand .inner .list_product >ul >li').eq(i).addClass('on');
    })



    
});

