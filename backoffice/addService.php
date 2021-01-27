<?php
require("header.php");
require("menu.php");
?>
<script src="../jsBackoffice/service.js"></script>
<div class="content">
    <div class="clearfix"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Ajouter Service : <i id="service"></i></h4>
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
                                <div class="col-md-4"></div>
                                <div class="col-md-4" >
                                    <div class=" form-group ">
                                    <label class="bmd-label-floating ">Image</label>
                                    <input type="file" class="form-control pull-right" id="serviceImage" name="filename">
                                </div>
                            </div>

                    </div>
                    <div class="row">
                        <div class="col-md-12">

                            <div class="form-group">
                                <label class="bmd-label-floating">Petite description</label>
                                <textarea id="petiteDescription" rows="3" class="form-control" required></textarea>
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



                    <button id="btn-add" type="button" class="btn btn-success pull-right">Enregistrer</button>
                    <button onclick="window.location.href=document.referrer" type="button" class="btn btn-danger pull-right">Annuler</button>

                    </form>
                </div>
            </div>
        </div>