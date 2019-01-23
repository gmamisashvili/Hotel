$(document).ready(function() {
  $(".nav-burger , .footer-nav").click(function() {
    $(".responsive-menu").toggle(500);
  });

  $(".responsive-menu-li").click(function() {
    $(".responsive-menu").hide(800);
  });

  if ($(window).width() <= 700) {
    $(".form-header").text("დაგვიტოვეთ თქვენი ნომერი და ჩვენ დაგირეკავთ");
  }
});
