$(document).ready(function() {
        
// Variables
    var scrollPos = $(window).scrollTop(),
        headerHeight = $('header').height(),
        headerInitial = headerHeight,
        overflowOpacity = (0.7 + (scrollPos/(headerInitial + 500))),
        mobCounter = 0,
        siteHeight = $('body').height(),
        winHeight = $(window).height();
    var headerPos = $('#header').offset().top,
            galleryPos = $('#gallery').offset().top,
            eventsPos = $('#events').offset().top,
            menuPos = $('#menu').offset().top,
            specialsPos = $('#specials').offset().top,
            orderPos = $('#order').offset().top,
            testimonialsPos = $('#testimonials').offset().top,
            aboutPos = $('#about').offset().top;
    
    
    
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
    
    $('.t_a_block').on('click', function() {
        $('.t_a_block').removeClass('t_chosen');
        $(this).addClass('t_chosen');
        
        var IDnum = $(this).attr('id').slice(-1),
            quote;
        switch (IDnum) {
            case "1": 
                quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies, nisi a aliquet pretium, sem lorem iaculis lorem, ut semper lorem justo quis lectus.1";
                break;
            case "2": 
                quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies, nisi a aliquet pretium, sem lorem iaculis lorem, ut semper lorem justo quis lectus.2";
                break;
            case "3":
                quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies, nisi a aliquet pretium, sem lorem iaculis lorem, ut semper lorem justo quis lectus.3";
                break;
        }
        $('.t_quote').html(quote);
    });
    
    function copyright() {
        var footerHeight = $('footer').height();
        $('.copyright').css('line-height', footerHeight + 'px');
    } copyright();
    
    
    
    $('.hamburger, .mob_special').on('click', function() {
        $('.mob_nav').toggleClass('mob_nav_shown');
        var mobLeft = parseInt($('.mob_nav').css('left'));
    });
    
    $('.mob_nav_link, .mob_special').on('click', function() {
        $('.mob_nav').removeClass('mob_nav_shown');
        $('.hamburger').removeClass('hamburger_clicked');
    });
    
    
    
    function scrollValues() {
        headerPos = $('#header').offset().top,
        galleryPos = $('#gallery').offset().top,
        eventsPos = $('#events').offset().top,
        menuPos = $('#menu').offset().top,
        specialsPos = $('#specials').offset().top,
        orderPos = $('#order').offset().top,
        testimonialsPos = $('#testimonials').offset().top,
        aboutPos = $('#about').offset().top,
        siteHeight = $('body').height(),
        winHeight = $(window).height();
    } scrollValues();
    
    function mobNavActive() {
        var lastScrollPos = Math.floor(siteHeight) - Math.floor(winHeight);
        if ( (scrollPos >= aboutPos - 71) || (Math.floor(scrollPos) == lastScrollPos) ) {
            $('.mob_nav_link').removeClass('mob_nav_active');
            $('.mob_about').addClass('mob_nav_active');
        } else if (scrollPos >= testimonialsPos - 71) {
            $('.mob_nav_link').removeClass('mob_nav_active');
            $('.mob_testimonials').addClass('mob_nav_active');
        } else if (scrollPos >= orderPos - 71) {
            $('.mob_nav_link').removeClass('mob_nav_active');
            $('.mob_order').addClass('mob_nav_active');
        } else if (scrollPos >= specialsPos - 71) {
            $('.mob_nav_link').removeClass('mob_nav_active');
            $('.mob_specials').addClass('mob_nav_active');
        } else if (scrollPos >= menuPos - 71) {
            $('.mob_nav_link').removeClass('mob_nav_active');
            $('.mob_menu').addClass('mob_nav_active');
        } else if (scrollPos >= eventsPos - 71) {
            $('.mob_nav_link').removeClass('mob_nav_active');
            $('.mob_events').addClass('mob_nav_active');
        } else if (scrollPos >= galleryPos - 71) {
            $('.mob_nav_link').removeClass('mob_nav_active');
            $('.mob_gallery').addClass('mob_nav_active');
        } else if (scrollPos <= galleryPos - 71) {
            $('.mob_nav_link').removeClass('mob_nav_active');
        }
    } mobNavActive();
    
    

// Actions
    $(window).scroll(function() {
        headerFadeOut();
        headerCollapse();
        headerFadeIn();
        copyright();
        mobNavActive();
    });
    
    $(window).resize(function() {
        copyright();
        scrollValues();
        mobNavActive();
    });
    
    
    
    // Hamburger menu
    
        // Hamburger
        $('.hamburger').on('click', function() {
            $(this).toggleClass('hamburger_clicked');
        });
    
    
    
    
    function toSend() {
     var x = document.getElementById("in1").value.length,
          y = document.getElementById("in2").value.length,
          z = document.getElementById("in3").value.length;

     if ( (x > 0) && (y > 0) && (z > 0) ) {
       $.ajax({
         type: "POST",
         url: "mail.php",
         data: $("form").serialize()
       }).done(function() {
         $('.submit').addClass('doner');
         $('.submit').html('THANK YOU!');
       });
       return false;
     } else {
       alert("You did not fill all the fields!");
     }
    }
    
      //Аякс отправка форм
  	//Документация: http://api.jquery.com/jquery.ajax/
  	$("#form").submit( toSend );
    
});
    