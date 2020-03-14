window.onload = function addTableData (){

    //Lägg till en <th> för Summa
    var table = document.getElementById('pricetable');
    var tableHeader = document.createElement('th');
    var text = document.createTextNode("Summa");
    tableHeader.appendChild(text);
    table.tHead.children[0].appendChild(tableHeader);

    //lägg till ny rad och celler
    var newRow = table.insertRow(table.rows.length);
    newRow.setAttribute('id', 'sumrow');
    var i;

    for (i = 0; i < table.rows[0].cells.length; i++) {

        newRow.insertCell(i);
        
    }
    //lägg till celler för summa kolumnen
    var z;
    for (z = 1; z < table.rows.length - 1; z++){
        
        table.rows[z].insertCell(table.rows[z].cells.length);
    }

    //Skapa knapp och kalla på calcPrices
    var content = document.getElementById('content');
    var btn = document.createElement('button');
    btn.setAttribute('class', 'btn btn-primary');
    btn.innerHTML = 'Beräkna pris';
    content.appendChild(btn);
    
    btn.onclick = function(){
        calcPrices();
    }
   
}

function calcPrices (){
    // Ta fram index för kolumnerna med header 'Summa', 'Pris' och 'Antal'
    var table = document.getElementById('pricetable');
    var th = table.getElementsByTagName('th');
    var prisIndex, sumIndex, antalIndex, i;
    for(i = 0; i < th.length; i++){

        if(th[i].firstChild.nodeValue == 'Pris'){

            prisIndex = i;
        }

        if(th[i].firstChild.nodeValue == 'Summa'){

            sumIndex = i;
        }

        if(th[i].firstChild.nodeValue == 'Antal'){

            antalIndex = i;
        }

    }

    var sum = 0, totSum = 0, totAntal = 0, y;
    for(y = 1; y < table.rows.length - 1; y++){

        var tr = table.rows[y];
        var pris = parseInt(tr.cells[prisIndex].firstChild.nodeValue);
        var antal = parseInt(tr.cells[antalIndex].firstElementChild.value);

        sum = pris * antal;

        tr.cells[sumIndex].innerHTML = sum;

        totSum += sum;

        totAntal += antal;

    }

    var sumRow = document.getElementById('sumrow');
    sumRow.cells[sumIndex].innerHTML = totSum;
    sumRow.cells[antalIndex].innerHTML = totAntal;

}

