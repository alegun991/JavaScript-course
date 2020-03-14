$("#search-table").hide();

$("#sok-button").on('click',  function(){

    //Börja med att tömma tabellen
    $("#search-table tbody").empty();
   

    //spara inmatade söksträngen
    var request = $('#search-word').val();

    if(request.length > 0){

        //skicka förfrågan till webbtjänsten

        $.ajax({

            url: "https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php",
            method: "get",
            data: {namn: request},
            dataType: "jsonp",
            
            /**
             * Om förfrågan godkänns, lägg in datat i tabellen. Möjlig förbättring är att spara
             * index för tabellrubriker och sedan lägga in datat (något mer dynamiskt). 
             * Kändes något överflödigt för denna lösning.
             */
            success: function (responses) {

                var table = $("#search-table").find('tbody');
                var temp = responses.livsmedel;
                
                temp.forEach(function (livsmedel) {
                    
                    table.append("<tr><td>" + livsmedel.namn + "</td><td>" + livsmedel.energi
                    + "</td><td>" + livsmedel.kolhydrater + "</td><td>" + livsmedel.protein
                    + "</td><td>" + livsmedel.fett + "</td></tr>");
                });                

                //Om sökningen genererar ett resultat, visa tabellen, annars göm den

                if(temp.length > 0){
                    $("#search-table").show();
                }
                
                else{
                    $("#search-table").hide();
                }
            }   
        });    
    }
    else{
        
        $("#search-table").hide();
    }
});