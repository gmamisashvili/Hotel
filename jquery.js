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

  $(".form-tag").submit(function(e) {
    let formName = $(".contact-inputs-name");
    let formMobile = $(".contact-inputs-mobile");

    if (formName.val() == "" && formMobile.val() == "") {
      $(".both-error").show();
      return false;
    } else if (formName.val() == "" && formMobile.val() != "") {
      $(".name-error").show();
      $(".mobile-error").hide();
      $(".both-error").hide();
      return false;
    } else if (formMobile.val() == "") {
      $(".mobile-error").show();
      $(".name-error").hide();
      $(".both-error").hide();
      return false;
    } else {
      $(".mobile-error").hide();
      $(".name-error").hide();
      $(".both-error").hide();
      return true;
    }
  });
});
