
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



// Input Focus border

$("input").on("focus", function () {
    $(".form_row").removeClass("focussed");
    $(this).parent().toggleClass("focussed");
});


// Textarea remove position:fixed on header
$("textarea").on("focus", function () {
    console.log("added");
    $(".header").addClass("pos-relative");
});
$("textarea").on("blur", function () {
    $(".header").removeClass("pos-relative");
    console.log("removed");
});


// AJAX form sending

// $(document).ready(function () {
//     $("#contact-form").submit(function (event) {
//         event.preventDefault();
//         $.ajax({
//             url: "https://www.enformed.io/di2izfvc",
//             method: "post",
//             dataType: "json",
//             accepts: "application/json",
//             data: $("#contact-form").serialize(),
//             success: function () {
//                 console.log("Your form was successfully received!");
//                 // Show a success message here...
//             },
//             error: function () {
//                 console.log("Failure. Try again.");
//                 $("#Name").val("");
//                 $("#msg-success").show();
//                 // Show an error message here...
//             }
//         });
//     });
// });