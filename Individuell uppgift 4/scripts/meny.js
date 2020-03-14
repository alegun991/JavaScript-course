$(document).ready(generateMenu);

searchBar();
/**
 * Skapa en lista innehållande alla receptrubriker
 */
function generateMenu() {
    
    //åtkomst till rätt div-element
    var receptMeny = document.getElementById('receptmeny')
    .getElementsByClassName('contentarea');

    //skapa ett <ul> element och lägg till det till contentarea
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'myUL')
    receptMeny[0].appendChild(ul);
    
    //skapa en variabel innehållande alla eftersöka h4-element
    var header = document.getElementById('primarycontent')
    .getElementsByTagName('h4');

    var i;
    for(i = 0; i < header.length; i++){

        //skapa ett id för varje receptrubrik
        var textValue = header[i].firstChild.nodeValue;
        var a = document.createElement('a');
        a.setAttribute('id', i);
        header[i].appendChild(a);

        var li = document.createElement('li');

        ul.appendChild(li);

        //skapa ankar-tagg med länk till rätt recept
        var anchor = document.createElement('a');
        anchor.setAttribute('href', '#' + i);
        anchor.innerHTML = textValue;

        li.appendChild(anchor);

    }


}

/**
 * Skapa en animation när en ankarlänk klickas så scrollningen blir mer mjuk
 */
$(document).ready(function (){

    var buttonPlace = $('#receptmeny').find('div');

    buttonPlace.append('<button>' + "Slå av/på animation" + '</button>');

    $('button').addClass('btn btn-info');

    //funktion för att för att inaktivera jquery-animationen
    var toggleFx = function() {
        $.fx.off = !$.fx.off;
    };
    //kalla på funktionen när knappen klickas
    $('button').on('click', function (){
        toggleFx();
    });
    //direkt hopp till recept ursprungligen, annars mjuk rullning till recept
    $('a').on('click', function (event){
        event.preventDefault();

        var target = this.hash;
        var $target = $(target);

        //skapa mjuk rullning, "swing" har som standard viss "easing" i början och slut
        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 1000, 'swing');

    });
});
/**
 * Denna funktion skapar en sökruta, om en sökning innehåller bokstäver eller termer
 * från recepten i listan så visas endast de recepten. 
 * 
 */
function searchBar(){

    //skapa input sökruta i listan
    var x = document.getElementById('receptmeny')
    .getElementsByClassName('contentarea');
    var searchInput = document.createElement('input');
    var label = document.createElement('label');
    searchInput.setAttribute('id', 'recept');
    searchInput.setAttribute('type', 'search');
    label.setAttribute('for', 'recept');
    label.innerHTML = 'Sök efter recept i listan';
    x[0].appendChild(label);
    x[0].appendChild(searchInput);
    

    var filter = document.getElementById('recept');

    //lyssna efter ett event i sökrutan
    filter.addEventListener('keyup', receptFilter);

    /**
     * funktionen hämtar alla listelement, för varje listelement hämtas textvärdet i ankartaggen
     * och om input matchar med textvärdet visas endast de receptrubrikerna.
     */
    function receptFilter(){

        var filterValue = document.getElementById('recept')
        .value.toUpperCase();

        var ul = document.getElementById('myUL');

        var li = ul.querySelectorAll('li');

        for(var i = 0; i < li.length; i++){

            var a = li[i].getElementsByTagName('a')[0];

            if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
                li[i].style.display = '';

            }
            else{
                li[i].style.display = 'none';
            }
        }
    }
}



