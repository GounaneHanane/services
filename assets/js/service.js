$(document).ready(function() {
    $.ajax({
        url: window.location.origin+"/services/getData/getService.php",
        type: "POST",
        data: {"action":"display_service","idService":+window.location.search.substring(1).split("?")},
        async: false,
        success: function (msg) {
            data=jQuery.parseJSON(msg)
            $('#libelle').html(data[0][1])
            $('#petite_desc').html(data[0][2])
            $('#desc').html(data[0][3])
            
        }})
})