$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["We Learn", "We Evolve", "We Grow", ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // var typed = new Typed(".typing-2", {
    //     strings: ["Workshop", "Competition", "Fun Games", "More at GEC"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    // owl carousel script
    $('.carousel').owlCarousel({
        navigation : true,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



//script new opening tag //
// const mainMenu = document.querySelector('.mainMenu');
// const closeMenu = document.querySelector('.closeMenu');
// const openMenu = document.querySelector('.openMenu');




// openMenu.addEventListener('click',show);
// closeMenu.addEventListener('click',close);

// function show(){
//     mainMenu.style.display = 'flex';
//     mainMenu.style.top = '0';
// }
// function close(){
//     mainMenu.style.top = '-100%';
// }