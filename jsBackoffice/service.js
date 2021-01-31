if (sessionStorage.getItem("login") == null)
  window.location.href = "../backoffice/login.php";
$(document).ready(function () {
  $.ajax({
    url: "../backoffice/getDataService.php",
    type: "POST",
    async: false,
    data: { action: "displayData" },
    success: function (msg) {
      $("#serv").DataTable({
        data: JSON.parse(msg),

        columns: [
          { data: 1 },
          { data: 2 },
          {
            data: null,
            render: function (data) {
              return (
                "<img src='" +
                window.location.origin +
                "/services/" +
                data[4] +
                "' width='100' height='100'/>"
              );
            },
          },
          {
            data: null,
            render: function (data) {
              return (
                '<button onclick="deleteService(' +
                data[0] +
                ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferServiceForm(' +
                data[0] +
                ')"><span class="material-icons">create</span></button>'
              );
            },
          },
        ],
      });
    },
  });
  $("#btn-edit").click(function (e) {
    uploadImageResult = uploadFile($("#serviceImage"));
    if (uploadImageResult == "success") {
      var media;
      if ($("#serviceImage")[0].files[0] == undefined) {
        media = "";
        $("#serviceImage").attr("disabled", true);
      } else media = "img/service/" + $("#serviceImage")[0].files[0].name;

      var arr = {
        nomService: $("#nomService").val(),
        petiteDescription: $("#petiteDescription").val(),
        description: $("#description").val(),
        serviceId: window.location.search.substring(1).split("?")[0],
        media: media,
      };
      $.ajax({
        url: "../backoffice/getDataService.php",
        type: "POST",
        async: false,
        data: { data: arr, action: "edit" },
        success: function (msg) {
          if (msg == "success") {
            $(".clearfix").append(
              '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La prestation est modifiée avec succes</span></div>'
            );
            setTimeout(function () {
              window.location.href = "../backoffice/main.php";
            }, 1000);
          } else {
            console.log(msg);
            $(".clearfix").html("");
            $(".clearfix").append(
              '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Il y a un erreur au niveau de la modification</span></div>'
            );
          }
        },
      });
    }
    e.preventDefault();
  });
  $("#add-service").click(function () {
    window.location.href = "../backoffice/addService.php";
  });
  $("#btn-add").click(function (e) {
    uploadImageResult = uploadFile($("#serviceImage"));
    if (uploadImageResult == "success") {
      var media;
      if ($("#serviceImage")[0].files[0] == undefined) {
        media = "";
        $("#serviceImage").attr("disabled", true);
      } else media = "img/service/" + $("#serviceImage")[0].files[0].name;

      var arr = {
        nomService: $("#nomService").val(),
        petiteDescription: $("#petiteDescription").val(),
        description: $("#description").val(),
        media: media,
      };
      $.ajax({
        url: "../backoffice/getDataService.php",
        type: "POST",
        async: false,
        data: { data: arr, action: "add" },
        success: function (msg) {
          if (msg == "success") {
            $(".clearfix").append(
              '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La prestation est modifiée avec succes</span></div>'
            );
            setTimeout(function () {
              window.location.reload();
            }, 1000);
          } else {
            console.log(msg);
            $(".clearfix").html("");
            $(".clearfix").append(
              '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Il y a un erreur au niveau de la modification</span></div>'
            );
          }
        },
      });
    } else {
      $(".clearfix").html("");
      $(".clearfix").append(
        '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Merci d\'entrer une image valide</span></div>'
      );
    }
    e.preventDefault();
  });
});

function modiferServiceForm(idservice) {
  window.location.href = "../backoffice/editService.php?" + idservice;
}
function deleteService(idservice) {
  if (confirm("voulez vous vraiment supprimer ce service")) {
    $.ajax({
      url: "../backoffice/getDataService.php",
      type: "POST",
      async: false,
      data: { data: idservice, action: "delete" },
      success: function (msg) {
        if (msg == "success") {
          $(".clearfix").append(
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La prestation est modifiée avec succes</span></div>'
          );
          setTimeout(function () {
            window.location.reload();
          }, 1000);
        } else {
          console.log(msg);
          $(".clearfix").html("");
          $(".clearfix").append(
            '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Il y a un erreur au niveau de la modification</span></div>'
          );
        }
      },
    });
  }
}
function uploadFile(imageFile) {
  var result = "success";

  var input = imageFile;
  file = input[0].files[0];
  if (file != undefined) {
    formData = new FormData();
    if (!!file.type.match(/image.*/)) {
      formData.append("image", file);

      $.ajax({
        url: "../saveImage.php",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {},
        error: function (msg) {
          alert(msg);
        },
      });
    } else {
      result = "Not a valid image!";
    }
  }
  return result;
}
