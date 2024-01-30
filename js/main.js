$(document).ready(function () {
    $('#toggleInfo').on('click', function(){
        $('.info_sidebar').toggleClass('active')
    })
    $('.close_sidebar').on('click', function(){
        $('.info_sidebar').removeClass('active')
    })
    $('#btnFilter').on('click', function(e){
        e.preventDefault()
        $('.mobile_search_form').toggleClass('open_filter')
    })
 });
