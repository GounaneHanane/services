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
                           
                            <div class="table-responsive">
                                <table class="table" id="serv" style="width: 100%;">
                                    <thead class=" text-primary">
                                        <th>
                                            Service
                                        </th>
                                        <th>
                                            Petite description
                                        </th>

                                        <th>
                                            Image
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