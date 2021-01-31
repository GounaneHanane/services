$(document).ready(function () {
  $("#btn-add").click(function () {
    $.ajax({
      url: "../backoffice/verificationLogin.php",
      type: "POST",
      async: false,
      data: { email: $("#email").val(), password: $("#password").val() },
      success: function (msg) {
        if (msg == "correct") {
          sessionStorage.setItem("login", $("#email").val());
          window.location.href = "main.php";
        } else {
          $("#notification").html("");
          $("#notification").append(
            '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> votre email ou mot de passe est incorrect</span></div>'
          );
        }
      },
    });
  });
});
