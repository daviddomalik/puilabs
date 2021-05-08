$(document).ready(function () {
    // Only show load animation on first visit
    if (sessionStorage.getItem('repeat') === null) {
        sessionStorage.setItem('repeat', 'true');
    } else {
        $('#load-animation').hide();
    }

    // Hide load animation on click
    $('#load-animation').click(function() {
        $('#load-animation').hide();
    });

    // Begin with chatbot hidden
    $('#chat').hide();
    // $("#root").overlayScrollbars({ className : "os-theme-minimal-dark"});

    // Reveal chatbot
    $('#chatbot-toggle').click(function() {
        $('#chatbot-toggle i').toggleClass("fa-comments");
        $('#chatbot-toggle i').toggleClass("fa-times");
        $('#chat').toggle(200);
    });

    // Enter text from textarea if Enter/Return key is pressed
    $('#user-input').keydown(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $('#send').click();
            $("textarea").val('');
        }
    });

    $('#send').click(function() {
        $("#root").scrollTop($("#root").height());
    })
});