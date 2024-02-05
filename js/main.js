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
     $("body").click(function (e) {
    if (
      !$(e.target).is(
        "#btnFilter, #btnFilter *, .header_search, .header_search *"
      )
    ) {
      $('.mobile_search_form').removeClass('open_filter')

    }
  });
 });
