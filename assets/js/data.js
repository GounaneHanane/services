$(document).ready(function() {
    $.ajax({
        url: window.location.origin+"/services/getData/getService.php",
        type: "POST",
        data: {"action":"display_home"},
        async: false,
        success: function (msg) {
            data=jQuery.parseJSON(msg)
            
           
           var count=0
            data.forEach((item, index) => {
              
              $(".services").append('<div class="col-lg-4 col-md-6"><div class="single_place"><div class="thumb"><img width="350" height="197" src="'+window.location.origin+'/services/'+item[4]+'" alt=""> </div> <div class="place_info"> <a><h3 onclick="displayService('+item[0]+')">'+item[1]+'</h3></a><p>'+item[2]+'</p><div class="rating_days d-flex justify-content-between"><div class="days"><a href="#">Lire la suite</a></div> </div></div> </div></div>')
              $("#menu_service").append('<li><a href="'+window.location.origin+"/services/front-end/service.php?"+item[0]+'"> '+item[1]+'</a></li>')
              $("#services-footer").append('<li><a href="'+window.location.origin+"/services/front-end/service.php?"+item[0]+'"> '+item[1]+'</a></li>')
             
              })
            
            
        }})
})
function displayService(service) {
    window.location.href="./service.php?"+service
}