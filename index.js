$(document).ready(function() {
        $("ul li a").mouseenter(function() {
          $(this).css({
            textDecoration: "underline",
            fontSize:
            fontFamily
          });
        });

        $("ul li a").mouseleave(function() {
          $(this).attr("style", "");
        });

        $(".fa-laptop").click(function() {
          if ($("ul").hasClass("open")) {
            $("ul").slideUp();
            $("ul").removeClass("open");
          } else {
            $("ul").slideDown();
            $("ul").addClass("open");
          }
        });
      });