// Pseudo Code:

// When a user clicks on a given nav link, scroll the page to the appropriate section header

// When a user scrolls far enough that the nav is at the top of the window, make the nav a sticky nav
// Else, make the nav's position fixed
$(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();
  console.log(distanceScrolled);

if (distanceScrolled > 590) {
  $('nav').addClass('scrolled');
} else {
  $('nav').removeClass('scrolled');
};
if (distanceScrolled > 520) {
  $('#hamburger-icon').addClass('scrolled');
} else {
  $('#hamburger-icon').removeClass('scrolled');
};
});



$('button').on('mouseover', function () {
  $('button').addClass('buttonhover');
});

$('button').on('mouseout', function() {
  $('button').removeClass('buttonhover');
});

$(document).ready(function(){
  $(".hamburger-icon").click(function(){
    $(this).toggleClass("is-active");
  });
});

$("#hamburger-icon").on('click', function () {
  $('#main').toggleClass('slide-main');
  $('#mySidenav').toggleClass('open-nav');
});
// function openNav() {
//   document.getElementById("mySidenav").style.width = "200px";
//   document.getElementById("main").style.marginLeft = "200px";
// };
//
// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
// }
// $('#full-name').on('click', function () {
//   $('#full-name').addClass('borderhighlight');
// });
//
// $('#full-name').click(function(event) {
//   event.stopPropagation();
//   $('#full-name').removeClass('borderhighlight');
// });
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
