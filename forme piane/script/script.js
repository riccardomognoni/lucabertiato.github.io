//calcolo del perimetro + controllo input
function calcola(){
    //variabili
    let misLato = 0;
    let numLati = 0;
    let p;
    let errore = false;
    //controllo input
    if(document.perimetro.figura.value == "nessuna")
    {
        document.getElementById("feedback").innerHTML = document.getElementById("feedback").textContent + " compilare il campo figura";
        errore = true;
    }
    if(document.perimetro.misura.value == "")
    {
        document.getElementById("feedback").innerHTML = document.getElementById("feedback").textContent + " compilare il campo misura";
        errore = true;
    }
    if(errore == true)
        return false;
    //se non ci sono errori calcola il perimetro della figura
    else{
        document.getElementById("feedback").innerHTML = "FEEDBACK";
        misLato = document.perimetro.misura.value;
        if(document.perimetro.figura.value == "triangolo")
            numLati = 3;
        else if(document.perimetro.figura.value == "quadrato")
            numLati = 4;
        else if(document.perimetro.figura.value == "pentagono")
            numLati = 5;

        p = parseInt(misLato) * parseInt(numLati);

        alert("il perimetro del " + document.perimetro.figura.value + " con lato di " + 
            document.perimetro.misura.value + " misura " + p);

        return true;
    }
}

function cancTutto(){
    document.getElementById("feedback").innerHTML = "FEEDBACK";
    return true;
}
