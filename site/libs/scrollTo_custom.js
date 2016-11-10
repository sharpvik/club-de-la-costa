$(document).ready(function() {
    
    var wrapperHeight = 70, // custom thing that might differ from page to page
        // if your wrapper's height is a constant number and it doesn't differ in the different scroll positions on the page, you can set its value to  $('#*your_wrapper's_ID_goes_here*').height();
        ifActive = false; // a counter that allows function not to be done while it's in the process
        
    $('.navigator').click(function(e) {
        
        e.preventDefault();        
        
        var linkHref = $(this).attr('href'),
            target = Math.round($(linkHref).offset().top),
            targetNumber = target - wrapperHeight,
            scrollTop = $(window).scrollTop();
        
        if ( (scrollTop !== targetNumber) && (ifActive !== true) ) {
            ifActive = true;
            
            console.log(targetNumber);
            console.log(scrollTop);
            
            $('html, body').animate({
                scrollTop: targetNumber
            }, 1000);
            
            setTimeout(function() {
                ifActive = false;
            }, 1000);
        }
                
    });
    
});