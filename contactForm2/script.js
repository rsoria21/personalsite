$(document).ready(function () {
  $(".submit").click(function (event) {
    console.log("Clicked button");

    var email = $(".email").val();
    var subject = $(".subject").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Message recived</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Email is not valid </div>");
    }

    if (subject.length >= 2) {
      statusElm.append("<div> </div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Subject is not valid </div>");
    }

    if (message.length >= 10) {
      statusElm.append("<div>Talk to you soon </div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Message is not valid </div>");
    }
  });
});
