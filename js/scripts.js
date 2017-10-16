
// Smooth Scrolling

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 230
                }, 800, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);

                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

$("#nav-contact").on("click", function() {
    $(".services").addClass("removePaddingBot");
    console.log("added");
});

$("#nav-about, #nav-gs").on("click", function () {
    $(".services").removeClass("removePaddingBot");
    console.log("removed");
});



// Input Focus border

$("input").on("focus", function() {
    $(".form_row").removeClass("focussed");
    $(this).parent().toggleClass("focussed");
});


// Textarea remove position:fixed on header
$("textarea").on("focus", function() {
    console.log("added");
    $(".header").addClass("pos-relative");
});
$("textarea").on("blur", function () {
    $(".header").removeClass("pos-relative");
    console.log("removed");
});