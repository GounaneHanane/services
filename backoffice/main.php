<?php
require("header.php");
require("menu.php");
?>
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
  <script src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js"></script>
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css">
 
<script src="../jsBackoffice/service.js"></script>

<div class="content">
    <div class="clearfix"></div>



    <div class="content">
        <div class="container-fluid tab">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header card-header-primary row">
                            <h4 style="cursor: pointer;" class="card-title col-md-11">Service</h4>
                            <div class="col-md-1"> <button id="add-service" class="btn btn-primary float-right">Ajouter</button>
                            </div>
                            
                        </div>
                        <div class="card-body">
                            <div class="card-header">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="input-group no-border">
                                            <input style="margin-right:4px" id="name-searchcategorie" type="text" value="" class="form-control col-md-4" placeholder="Libelle">

                                            <button type="button" id="searchbynamecategorie" class="btn btn-dark">
                                                Chercher
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table" id="table">
                                    <thead class=" text-primary">
                                        <th>
                                            Service
                                        </th>
                                        <th>
                                            petite description
                                        </th>

                                        <th>
                                            image
                                        </th>
                                        <th>
                                            Actions
                                        </th>

                                    </thead>
                                    <tbody id="service-table">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>