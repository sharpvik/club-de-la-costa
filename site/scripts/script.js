$(document).ready(function() {
        
// Variables
    var scrollPos = $(window).scrollTop(),
        headerHeight = $('header').height(),
        headerInitial = headerHeight,
        overflowOpacity = (0.7 + (scrollPos/(headerInitial + 500)));
    
    
    
// Functions
    
    function immitatorHeight() {
        scrollPos = $(window).scrollTop();
        
        $('.header_immitator').css('height', headerInitial + 'px');
    } immitatorHeight();
    
    function headerFadeOut() {
        if ( headerInitial == 400 ) {
            headerHeight = $('header').height();
            scrollPos = $(window).scrollTop();
        
            $('.description').css('opacity',1-(scrollPos/100));
            $('.description').css('bottom',20-(scrollPos/2) + 'px');
        } else {
            headerHeight = $('header').height();
            scrollPos = $(window).scrollTop();
        
            $('.description').css('opacity',1-(scrollPos/300));
            $('.description').css('bottom',50-(scrollPos/2) + 'px');
        }
        
    } headerFadeOut();
    
    function headerFadeIn() {
        scrollPos = $(window).scrollTop();
        overflowOpacity = (0.7 + (scrollPos/(headerInitial*3)));
        
        $('.overflow').css('opacity',overflowOpacity);
    } headerFadeIn();
    
    function headerCollapse() {
        scrollPos = $(window).scrollTop();
        
        $('header').css('height', headerInitial - scrollPos + 'px');
    } headerCollapse();
    
    
    
    
    

    

// Actions
    $(window).scroll(function() {
        headerFadeOut();
        headerCollapse();
        headerFadeIn();

    });
    $(window).resize(function() {
    });
    
    
    
    // Hamburger menu
    
        // Hamburger
        $('.hamburger').on('click', function() {
            $(this).toggleClass('hamburger_clicked');
        });
    
    
});
    