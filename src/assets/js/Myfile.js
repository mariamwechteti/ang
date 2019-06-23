
// Surcharge des valeurs du script de la toolbar
accessibilitytoolbar_custom = {
  idLinkModeContainer: "id-li-for-cdu",
  cssLinkModeClassName: "nav-item-cdu"
};

$(".skiplinks-trigger").focus(function () {
  $(".skiplinks-section").addClass("skiplinks-show").removeClass("sr-only")
});
$(".skiplinks-trigger").blur(function () {
  $(".skiplinks-section").removeClass("skiplinks-show").addClass("sr-only")
});

function skiplinksAfterLoad() {
  $(".skiplinks-trigger").focus(function () {
    $(".skiplinks-section").addClass("skiplinks-show").removeClass("sr-only")
  });
  $(".skiplinks-trigger").blur(function () {
    $(".skiplinks-section").removeClass("skiplinks-show").addClass("sr-only")
  });
}

$(document).ready(function () {
  $('header').navbar({ sticky: false, hideSupra: true });
  // default init
  //if( window.innerWidth < 768 ) {
    $('#collapsing-navbarHead').megamenu();
  //}
});

