$(document).ready(function () {
    var category;

    // Set photo category to last clicked. Otherwise default to Art
    if (sessionStorage.getItem('category') === null) {
        sessionStorage.setItem('category', 'portrait');
        category = 'portrait';
    } else {
        category = sessionStorage.getItem('category');
    }

    var id = "#photo-menu-".concat(category);
    var grid = "#".concat(category).concat("-photography");

    $('.image-grid').hide();
    selectActive(id, 'active-photos');
    $(grid).show();

    // Handles viewing different photo categories
    $('#categories h2').click(function() {
        var clicked = $(this);
        sessionStorage.setItem('category', clicked.text().toLowerCase());
        $('.image-grid').fadeOut('slow').promise().done(function() {
            selectActive(clicked, 'active-photos');
            map = buildDictionary('#categories h2', '.image-grid');
            $(map[clicked.attr('id')]).fadeIn('slow');
        });
    });

});