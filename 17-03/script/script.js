//controllo degli input
function validaForm(){
    let errore = false;
    document.getElementById("feedback").innerHTML = "feedback"
    //controllo sul cognome
    if(document.registrazione.cognome.value == ""){
        document.getElementById("feedback").innerHTML = document.getElementById("feedback").textContent + "\ncompilare il campo cognome\n";
        errore = true;
    }

    //controllo sul nome
    if(document.registrazione.nome.value == ""){
        document.getElementById("feedback").innerHTML= document.getElementById("feedback").textContent + "compilare il campo nome\n";
        errore = true;
    }
    //metto in tmp la matricola
    let tmp = parseInt(document.registrazione.matricola.value);
    if(isNaN(tmp)){
        document.getElementById("feedback").innerHTML= document.getElementById("feedback").textContent +  "la matricola deve essere un numero\n";
        errore = true;
    }

    //controllo sulla regio
    if(document.registrazione.regione.value == "nessuna"){
        document.getElementById("feedback").innerHTML= document.getElementById("feedback").textContent + "compilare il campo regione\n";
        errore = true;
    }

    //almeno un fra email e telefono devono essere compilati
    if(document.registrazione.email.value == "" && document.registrazione.telefono.value == ""){
        document.getElementById("feedback").innerHTML = document.getElementById("feedback").textContent + "compilare almeno uno dei campi email e telefono\n";
        errore = true;
    }

    if(errore == true)
        return false;
    else{
        alert("dati corretti");
        return true;
    }
}