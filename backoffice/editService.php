<?php
require("header.php");
require("menu.php");
?>
<script src="../jsBackoffice/service.js"></script>
<script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
  <script>tinymce.init({ selector:'#description' });</script>
<script>
  $(document).ready(function() {
    $.ajax({
      url: "../backoffice/getDataService.php",
      type: "POST",
      data: {
        idService: window.location.search.substring(1).split("?")[0],
        action: "displayEditForm"
      },
      async: false,
      success: function(msg) {
        var data = JSON.parse(msg)
        $('#nomService').val(data[0][1])
        $('#petiteDescription').val(data[0][2])
        $('#description').val(data[0][3])

      }
      
    })

  })
</script>
<div class="content">
  <div class="clearfix"></div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title">Modifier Service <i id="service"></i></h4>
          </div>
          <div class="card-body">
            <form id="editService">
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="bmd-label-floating">Nom Service</label>
                    <input id="nomService" type="text" class="form-control" required>
                  </div>
                </div>
                <div class="col-md-4"><div class="form-group"> <label class="bmd-label-floating">Photo Service</label>
                    <img id="output" src='' width='100' height='100' /></div></div>
                <div class="col-md-4">
                  <div class="form-group">
                   
                    <input onchange="document.getElementById('output').src = window.URL.createObjectURL(this.files[0])" type="file" class="form-control pull-right" id="serviceImage" name="filename">

                  </div>
                </div>

              </div>
              <div class="row">
                <div class="col-md-12">

                  <div class="form-group">
                    <label class="bmd-label-floating">Petite description</label>
                    <textarea maxlength="80" id="petiteDescription" rows="3" class="form-control" required></textarea>
                  </div>
                </div>

              </div>
              <div class="row">
                <div class="col-md-12">

                  <div class="form-group">
                    <label class="bmd-label-floating">Description</label>
                    <textarea id="description" rows="6" class="form-control" required></textarea>
                  </div>
                </div>

              </div>



              <button id="btn-edit" type="button" class="btn btn-success pull-right">Enregistrer</button>
              <button onclick="window.location.href=document.referrer" type="button" class="btn btn-danger pull-right">Annuler</button>

            </form>
          </div>
        </div>
      </div>