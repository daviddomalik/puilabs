// Breakpoints
var sm = 380;
var md = 500;
var lg = 820;
var xl = 1370;
var xxl = 1900;

$(document).ready(function () {
    $("body").overlayScrollbars({ className : "os-theme-minimal-dark"});
    fadeInPage();
    shrinkNavbarBrand();
    setActiveTab();
    fadeOutPage();

    $('.scroll-top').click(function(){
        var instance = $('body').overlayScrollbars();
        instance.scroll({y : "0%" }, 1800);
    });

});

// Force page reload when back button is pressed to fade in appropriate page
window.addEventListener("pageshow", function (event) {
    var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );

    if (historyTraversal) {
      // Handle page restore.
      window.location.reload();
    }
});

// Sets the styling for the current page on the navbar
function setActiveTab() {
    $('a.active').removeClass('active');
    $('a[href="' + location.pathname + '"]').addClass('active');
};

// Hides all instances of a class except the first in the document
function showFirst(givenClass) {
    $(givenClass).hide();
    $(givenClass).first().show();
}

// Switches active class to the selected element
function selectActive(nowActive, activeClass) {
    $('.' + activeClass).removeClass(activeClass);
    $(nowActive).addClass(activeClass);
}

// Shows the content for the current active class
function showActive(nowActive, keysSelector, valuesSelector) {
    map = buildDictionary(keysSelector, valuesSelector);
    console.log(map);
    $(map[nowActive.attr('id')]).show();
}

// Builds an object dictionary using two jQuery selectors, one as the properties and the other as values
function buildDictionary(keysSelector, valuesSelector) {
    var keys = $(keysSelector).map(function() {
        return $(this).attr('id');
    }).get();
    var values = $(valuesSelector).map(function() {
        return '#' + $(this).attr('id');
    }).get();

    var result = {};

    if (keys.length == values.length) {
        keys.forEach((key, i) => result[key] = values[i]);
    }

    return result;
}

// Page Transitions
function fadeInPage() {
    if (!window.AnimationEvent) return;
    $('#fader').addClass('fade-out');
}

function fadeOutPage() {
    if (!window.AnimationEvent) return;
    var anchors = $('a');
    
    for (var idx = 0; idx < anchors.length; idx += 1) {
        if (anchors[idx].hostname !== window.location.hostname ||
            anchors[idx].pathname === window.location.pathname) {
            continue;
        }

        anchors[idx].addEventListener('click', function(event) {
            var fader = document.getElementById('fader'),
                anchor = event.currentTarget;
            
            var listener = function() {
                window.location = anchor.href;
                fader.removeEventListener('animationend', listener);
            };
            fader.addEventListener('animationend', listener);
            
            event.preventDefault();
            fader.classList.add('fade-in');
        });
    }
}

window.addEventListener('resize', shrinkNavbarBrand); // Refresh JS when window is resized

// Only shows the selected industry
function shrinkNavbarBrand() {
    if ($(window).width() <= md ) {
        $('.navbar-brand').text('DOMALIK');
    } else {
        $('.navbar-brand').text('DAVID DOMALIK');
    }
};