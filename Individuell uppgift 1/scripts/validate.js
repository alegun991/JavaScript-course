/* 
Alexander Gunillasson
*/

document.getElementById('saveForm').addEventListener('click', (event) => {
    
    var errorMsg = [];
    
    var firstName = document.getElementById('field_firstname').value;
    var lastName = document.getElementById('field_lastname').value;
    var email = document.getElementById('field_email').value;
    var org = document.getElementById('field_organisation').value;
    var presTitle = document.getElementById('field_pres_title').value;
    var message = document.getElementById('field_message').value;
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/; 
    var isValid = pattern.test(email);

    if (firstName == "") {
        errorMsg.push("Vänligen ange ditt förnamn");
        document.getElementById('field_firstname').style.border = "thin solid red";
    }

    else{
        document.getElementById('field_firstname').style.border = "";
    }

    if (lastName == "") {
        errorMsg.push("Vänligen ange ditt efternamn");
        document.getElementById('field_lastname').style.border = "thin solid red"; 
    }

    else{
        document.getElementById('field_lastname').style.border = "";
    }

    if (email == "") {
        errorMsg.push("Vänligen ange din email-adress");
        document.getElementById('field_email').style.border = "thin solid red";
    }

    else{
        document.getElementById('field_email').style.border = "";
    }
 
    if (org == "") {
        errorMsg.push("vänligen ange ett organisationsnummer");
        document.getElementById('field_organisation').style.border = "thin solid red";
        
    }
    else{
        document.getElementById('field_organisation').style.border = "";
    }

    if ((!document.getElementById('pres_type_3').checked) && presTitle == "") {
        errorMsg.push("Vänligen ange en titel");
        document.getElementById('field_pres_title').style.border = "thin solid red";
       
    }

    else{
        document.getElementById('field_pres_title').style.border = "";
    }

    if(message.length > 200){
        errorMsg.push("Meddelande får inte överstiga 200 tecken\ntecken just nu: " + message.length );
        
    }

    if(!isValid){
        errorMsg.push("formatet på email-adressen är fel");
       
    }

    if(errorMsg.length > 0){
        alert(errorMsg.join('\n'));
        event.preventDefault();
    
    } 
});
