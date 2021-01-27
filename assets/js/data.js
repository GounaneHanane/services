$(document).ready(function() {
    $.ajax({
        url: window.location.origin+"/services/getData/getService.php",
        type: "POST",
        data: {"action":"display_home"},
        async: false,
        success: function (msg) {
            data=jQuery.parseJSON(msg)
            
           
           
            data.forEach((item, index) => {
              $(".services").append('<div class="col-lg-4 col-md-6"><div class="single_place"><div class="thumb"><img src="../img/place/1.png" alt=""> </div> <div class="place_info"> <a><h3 onclick="displayService('+item[0]+')">'+item[1]+'</h3></a><p>'+item[2]+'</p><div class="rating_days d-flex justify-content-between"><div class="days"><a href="#">Lire la suite</a></div> </div></div> </div></div>')
            
              })
            
        }})
})
function displayService(service) {
    window.location.href="./service.php?"+service
}