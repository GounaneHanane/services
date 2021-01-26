$(document).ready(function() {
    $.ajax({
        url: window.location.origin+"/services/getData/getService.php",
        type: "POST",
        data: {"action":"display_home"},
        async: false,
        success: function (msg) {
            data=jQuery.parseJSON(msg)
            
            data.forEach((item, index) => {
                $(".owl-carousel").append(' <div class="single_slider  d-flex align-items-center slider_bg_1 overlay"><div class="container"><div class="row align-items-center"><div class="col-xl-12 col-md-12"><div class="slider_text text-center"></div>')
                $(".owl-carousel").append('  <h3>'+item[1]+'</h3>')
                $(".owl-carousel").append('  <p>une petite description service 1</p>')
                $(".owl-carousel").append('   <a href="#" class="boxed-btn3">Plus d\'informations</a></div></div></div></div></div>')
               
              })
            
        }})
})