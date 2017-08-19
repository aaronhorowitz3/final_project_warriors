// Pseudo Code:

// When a user clicks on a given nav link, scroll the page to the appropriate section header

// When a user scrolls far enough that the nav is at the top of the window, make the nav a sticky nav
// Else, make the nav's position fixed
$(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();
  console.log(distanceScrolled);

if (distanceScrolled > 590) {
  $('#main-nav').addClass('scrolled');
} else {
  $('#main-nav').removeClass('scrolled');
};
});
// When a user clicks on a given list item in the Broken Records section:
  //Show the corresponding description
  //Hide all other descriptions
  //Hide the image of a record on just that line
  //Show the image of a broken record on just that line
  //Hide all other images of broken records
  //Show all other images of records

// When a user clicks outside of the Broken Records list items
  //Hide all descriptions
  //Hide all images of broken records
  //Show all images of records
