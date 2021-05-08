$(document).ready(function () {
    showFirst('.document');

    if ($(window).width() <= xl ) {
        $('.active-document').removeClass('active-document');
    }

    // Handles viewing individual PDFs
    $('#document-menu li').click(function() {
        if ($(window).width() <= xl ) {
            selectActive($(this), 'active-document');
            var map = buildDictionary('#document-menu li', '.document');
            var element = $(map[$(this).attr('id')]).find('a');
            element[0].click();
        } else {
            $('.document').hide();
            selectActive($(this), 'active-document');
            showActive($(this), '#document-menu li', '.document');
        }
    });

});