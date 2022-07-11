$(".search-open").click(function (event) {
    event.stopPropagation();
    $(".search-open").toggleClass("search-close");
    $(".search-form").toggleClass("open");
    $('.search-form input.form-control').focus();
});

$('body').on('click', function () {
    $(".search-open").removeClass("search-close")
    $('.search-form').removeClass('open');

    // Remove class open to close dropdown language
    $(lang_menu).removeClass('open');

});

$('.search-form').on('click', function (event) {
    event.stopPropagation();
});



const lang_menu = ".lang-menu";

$(lang_menu).click(function (event) {
    event.stopPropagation();
    $(this).toggleClass('open')
});




//Get the button back-to-top
let mybutton = document.getElementById("btn-back-to-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$('#home-product-list').owlCarousel({
    margin: 0,
    item: 3,
    loop: true,
    nav: true,
    navText: ["<img src='./images/icon/slider-left.svg'>", "<img src='./images/icon/slider-right.svg'>"],
    responsive: {
        0: {
            items: 1
        },
        1000: {
            loop: false,
            items: 3
        }
    }
})

$('.related-product-list').owlCarousel({
    margin: 0,
    item: 3,
    loop: false,
    nav: false,
    navText: ["<img src='../images/icon/slider-left.svg'>", "<img src='../images/icon/slider-right.svg'>"],
    responsive: {
        0: {
            items: 1,
            loop: true,
            nav: true
        },
        992: {
            loop: false,
            nav: false,
            items: 3
        }
    }
})


$('.other-product-list').owlCarousel({
    margin: 0,
    item: 2,
    loop: false,
    nav: false,
    navText: ["<img src='../images/icon/slider-left.svg'>", "<img src='../images/icon/slider-right.svg'>"],
    responsive: {
        0: {
            items: 1,
            loop: true,
            nav: true
        },
        992: {
            loop: false,
            nav: false,
            items: 2
        }
    }
})
