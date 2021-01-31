$(document).ready(function () {
  $.ajax({
    url: "../backoffice/getDataService.php",
    type: "POST",
    async: false,
    data: { action: "displayData" },
    success: function (msg) {
	console.log(JSON.parse(msg))
      var data = JSON.parse(msg);
      $("#table").DataTable({
        data:JSON.parse(msg),
        columns:[
          {title:"Service", data:1},
          {title:"Petite description",data:2},
          {title:"Image",data:4}
        ]
      })
   /*   data.forEach((service) => {
        $("#service-table").append("<tr>");

        if (service[1] != null)
          $("#service-table").append("<td>" + service[1] + "</td>");
        else $("#service-table").append("<td></td>");
        if (service[2] != null)
          $("#service-table").append("<td>" + service[2] + "</td>");
        else $("#service-table").append("<td></td>");
        if (service[4] != null)
          $("#service-table").append(
            "<td><img src='" + service[4] + "' width='100' height='100'/></td>"
          );
        else $("#service-table").append("<td></td>");

        $("#service-table").append(
          '<td><button onclick="deletecoordianteur()" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferServiceForm(' +
            service[0] +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
      });*/
    },
  });
  $("#btn-edit").click(function (e) {
    var arr = {
      nomService: $("#nomService").val(),
      petiteDescription: $("#petiteDescription").val(),
      description: $("#description").val(),
      serviceId: window.location.search.substring(1).split("?")[0],
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
          console.log(msg)
          $(".clearfix").html("");
        $(".clearfix").append(
          '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Il y a un erreur au niveau de la modification</span></div>'
        );}
      },
    });
    e.preventDefault();
  });
  $("#add-service").click(function () {
    window.location.href="../backoffice/addService.php";
  });
  $("#btn-add").click(function (e) {
    var arr = {
      nomService: $("#nomService").val(),
      petiteDescription: $("#petiteDescription").val(),
      description: $("#description").val(),
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
          console.log(msg)
          $(".clearfix").html("");
        $(".clearfix").append(
          '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Il y a un erreur au niveau de la modification</span></div>'
        );}
      },
    });
    e.preventDefault();
  });
});

function modiferServiceForm(idservice) {
  window.location.href = "../backoffice/editService.php?" + idservice;
}
