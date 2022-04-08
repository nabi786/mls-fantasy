

$(document).ready(function(){

    $('#resNavBtn').click(function(){

        $('.navSec').toggleClass('navigationSlide')
        
    })

    // if user click on search button
    $('#searchBtn').click(function(){
        $('.searchBoxInnerBox').toggleClass('searchBoxWidth')
    })
})