$(document).ready(function () {

/*-------------------------
HEADER
-------------------------*/

function titleRise () {
    $('.title').addClass('hover');
    $(".title").animate({bottom:"15%", opacity:"1"}, 1000);
};

setTimeout(function () {
    titleRise();
}, 4500);

$(window).scroll(function () {
    titleRise();
});

$(".title").hover(function () {
    $('.title').text('Portfolio');
}, function () {
    $('.title').text('');
        setTimeout(function () {
            if (document.querySelector(".title").innerHTML === "") {
            $('.title').html('<span class="name">Allan Cheung</span>Front-End Web Development');
            }
        }, 300);
});

$("#title").click(function () {
    $('html, body').animate({scrollTop: $('#portfolio').offset().top
    }, 1000);
});

/*--------TYPER----------*/


/*$(".text-icon").hover(function() {
    $(".hover-text").css({'display':'inline'});
    $(".hover-text").addClass('typer');
    TyperSetup();
}, function () {
    $(".hover-text").css({'display':'none'});
    $(".hover-text").removeClass('typer');
});*/
/*--------NAV-BAR----------*/

$(".home-nav").click(function () {
    $('html, body').animate({scrollTop: $('header').offset().top
    }, 1000);
});

$(".skills-nav").click(function () {
    $('html, body').animate({scrollTop: $('#skills').offset().top -200
    }, 1000);
});

$(".portfolio-nav").click(function () {
    $('html, body').animate({scrollTop: $('#portfolio').offset().top
    }, 1000);
});


$(".about-me-nav").click(function () {
    $('html, body').animate({scrollTop: $('#about-me').offset().top
    }, 1000);
});

$(".contact-nav").click(function () {
    $('html, body').animate({scrollTop: $('#contact').offset().top
    }, 1000);
});

/*--------STICKY-BAR----------*/

$('.bars').click(function (){
    $('.side-bar').slideToggle();
    $('.bars').hide();
    $('.cross').show();
});

$('.cross').click(function (){
    $('.side-bar').slideToggle();
    $('.cross').hide();
    $('.bars').show();
});

$('.h1Bot').waypoint(function (direction){
    if (direction === 'down') {
        $('.sticky').fadeIn();
    } else {
        $('.sticky').fadeOut();
        $('.side-bar').slideUp();
        $('.cross').hide();
        $('.bars').show();
    }
});

$(".home-nav").hover(function (){
    $(".home-nav").addClass("animated pulse");
}, function (){
    $(".home-nav").removeClass("animated pulse");
});

$(".skills-nav").hover(function (){
    $(".skills-nav").addClass("animated pulse");
}, function (){
    $(".skills-nav").removeClass("animated pulse");
});

$(".portfolio-nav").hover(function (){
    $(".portfolio-nav").addClass("animated pulse");
}, function (){
    $(".portfolio-nav").removeClass("animated pulse");
});

$(".about-me-nav").hover(function (){
    $(".about-me-nav").addClass("animated pulse");
}, function (){
    $(".about-me-nav").removeClass("animated pulse");
});

$(".contact-nav").hover(function (){
    $(".contact-nav").addClass("animated pulse");
}, function (){
    $(".contact-nav").removeClass("animated pulse");
});

/*----------------------------
SKILLS
----------------------------*/

$('#skills').waypoint(function (direction){
        $('#skills-waypoint').css({opacity: '1'});
        $('#skills-waypoint').addClass('animated bounceInUp');
    },{
    offset: 500
    }
);


/*----------------------------
PORTFOLIO
----------------------------*/

/*SLIDE ANIMATION*/

$("#simon-icon").click(function () {
    if (document.querySelector('#simon-des').style.display === 'block') {
        $('#simon-des').slideUp();
        $('html, body').animate({scrollTop: $('[id$=icon]').offset().top - 100
      }, 1000);
   }else {
        $("[id$=des]").slideUp();
        $('#simon-des').slideDown();
        setTimeout( function () {
            $('html, body').animate({scrollTop: $('#simon-des').offset().top
            }, 1000);
        }, 410);
   }
});

$("#tictactoe-icon").click(function () {
    if (document.querySelector('#tictactoe-des').style.display === 'block') {
        $('#tictactoe-des').slideUp();
        $('html, body').animate({scrollTop: $('[id$=icon]').offset().top - 100
      }, 1000);
    } else {
        $("[id$=des]").slideUp();
        $('#tictactoe-des').slideDown();
        setTimeout( function () {
            $('html, body').animate({scrollTop: $('#tictactoe-des').offset().top
            }, 1000);
        }, 410);
    }
});
    
$("#wiki-icon").click(function () {
    if (document.querySelector('#wiki-des').style.display === 'block') {
        $('#wiki-des').slideUp();
        $('html, body').animate({scrollTop: $('[id$=icon]').offset().top - 100
      }, 1000);
    } else {
        $("[id$=des]").slideUp();
        $('#wiki-des').slideDown();
        setTimeout (function () {
            $('html, body').animate({scrollTop: $('#wiki-des').offset().top
            }, 1000);
        }, 410);
    }
}); 

$("#calculator-icon").click(function () {
    if (document.querySelector('#calculator-des').style.display === 'block') {
        $('#calculator-des').slideUp();
        $('html, body').animate({scrollTop: $('[id$=icon]').offset().top - 100
      }, 1000);
    } else {
        $("[id$=des]").slideUp();
        $('#calculator-des').slideDown();
        setTimeout( function () {
            $('html, body').animate({scrollTop: $('#calculator-des').offset().top
             }, 1000);
        }, 410);
    }
});

/*UP BTN*/

$(".fa-chevron-up").click(function (){
    $("[id$=des]").slideUp();
    $('html, body').animate({scrollTop: $('[id$=icon]').offset().top - 100
    }, 1000);
});

/*----------------------------
ABOUT ME
----------------------------*/

/* Timeline Animation */



/* FUTURE NODE */

var fnodeTrigger = 0;
var once = 0;



$('#future-node').click(function (){
    if (fnodeTrigger === 0){
    $('#future-node').removeClass('infinite animated jello');
    $('#timeline').animate({height: '0'});
    $('#final-line').animate({width: '0'});
    $('#future-node').animate({left: '0'});
    $('.time-box').css({display: 'none'});    
    $('.time-box').removeClass('animated fadeInUp');  
    $('#future-node').animate({
        height: '420px',
        width: '420px',
        'border-radius':'15',
    }, 1500);    
    setTimeout(function () {
        $('#future').removeClass('fadeOut');
        $('#future').css({'display':'block'});
        $('#future').addClass('animated fadeInUp');
    }, 1500);
    fnodeTrigger = 1;
  } else {
    $('#future').removeClass('fadeInUp');
    $('#future').addClass('fadeOut');
    $('#future-node').animate({
        height: '30',
        width: '30',
        'border-radius':'50%',
        left: '42%',
    }, 1500);
    setTimeout(function () {
        $('#future').css({display:'none'});
        $('#final-line').animate({width: '42%'});
        $('.time-box').css({display: 'block'});    
        $('.time-box').addClass('animated fadeInUp');
        $('#timeline').animate({height: '560'});
    }, 1500);

      fnodeTrigger = 0;
  }
});

/* About me Waypoint */

$('#about-me').waypoint(function (direction){
    if (once !== 1){
    //description
        $('#me').css({opacity: '1'});
        $('#me').addClass('animated flipInY');

    //timeline
        $('#timeline-box').css({ display:'block'});
        $('#timeline-box').animate({
            height: '600',
            top: '0'
        }, 1500, function (){
            
            $('#weird').addClass('animated flipInX');
            $('#weird').css({opacity:'1'});
            $('#weird-line').animate({width:'36'});            
            
            setTimeout (function () {
                $('#htmlcss').addClass('animated flipInX');
                $('#htmlcss').css({opacity:'1'});
                $('#htmlcss-line').animate({width:'36'});     
            }, 300);
           
            setTimeout (function () {
                $('#FCC').addClass('animated flipInX');
                $('#FCC').css({opacity:'1'});
                $('#FCC-line').animate({width:'36'});     
            }, 600);
            
            setTimeout (function () {
                $('#compliance').addClass('animated flipInX');
                $('#compliance').css({opacity:'1'});
                $('#compliance-line').animate({width:'36'});     
            }, 900);
            
            setTimeout (function () {
                $('#resident').addClass('animated flipInX');
                $('#resident').css({opacity:'1'});
                $('#resident-line').animate({width:'36'});     
            }, 1200);
            
            setTimeout (function () {
                $('#uni').addClass('animated flipInX');
                $('#uni').css({opacity:'1'});
                $('#uni-line').animate({width:'36'});     
            }, 1500);
            
            setTimeout (function () {
                $('#high').addClass('animated flipInX');
                $('#high').css({opacity:'1'});
                $('#high-line').animate({width:'36'});     
            }, 1800);
            
            setTimeout (function () {
                $('#primary').addClass('animated flipInX');
                $('#primary').css({opacity:'1'});
                $('#primary-line').animate({width:'36'});     
            }, 2100);
            
            setTimeout (function () {
                $('#final-line').animate({width: '42%'}, 600);
            }, 2400);
            
            setTimeout (function () {
                    $('#future-node').css({display: 'block'});
                    $('#future-node').addClass('infinite animated jello');
                    once = 1;
            }, 3000);        
        
        });
    }
    });




}); //doc ready
