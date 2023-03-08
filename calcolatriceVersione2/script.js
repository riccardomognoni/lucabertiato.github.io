let operazione = null;
let numeroDaCompilare = "numero1";
let isCampo1Compilato = false;
function calcola(){
    let ris = null;
    let n1 = document.getElementById("numero1").textContent;
    let n2 = document.getElementById("numero2").textContent;
    
    if(isNaN(n1) || isNaN(n2) || n1 == "" || n2 == ""){
        alert("Compilare i campi testo con numeri");
    }
    else{
        if(operazione == null){
            alert("Selezionare un operatore");
        }
        else if(operazione == "somma"){
            ris = parseInt(n1) + parseInt(n2);
        }
        else if(operazione == "divisione"){
            if(n2 == "0")
                alert("impossibile eseguire la seguente operazione")
            else
                ris = n1 / n2;
        }
        else if(operazione == "sottrazione"){
            ris = n1 - n2;
        }
        else if(operazione == "moltiplicazione"){
            ris = n1 * n2;
        }
        document.getElementById("cella risultato").innerHTML = ris;
        operazione = null;
        document.getElementById("+").style.backgroundColor = "lightgray";
        document.getElementById("*").style.backgroundColor = "lightgray";
        document.getElementById("-").style.backgroundColor = "lightgray";
        document.getElementById("/").style.backgroundColor = "lightgray";
    }
}

//prendi operatori
function scegliOperatore(modifica, lasciaUno, lasciaDue, lasciaTre){
    document.getElementById(modifica).style.backgroundColor = "red";
    document.getElementById(lasciaUno).style.backgroundColor = "lightgray";
    document.getElementById(lasciaDue).style.backgroundColor = "lightgray";
    document.getElementById(lasciaTre).style.backgroundColor = "lightgray";
}

function annullaOperatori(modifica, lasciaUno, lasciaDue, lasciaTre){
    document.getElementById("+").style.backgroundColor = "lightgray";
    document.getElementById("*").style.backgroundColor = "lightgray";
    document.getElementById("-").style.backgroundColor = "lightgray";
    document.getElementById("/").style.backgroundColor = "lightgray";
}

function scegliSomma(){
    if(document.getElementById(numeroDaCompilare).textContent == "")
        alert("Inserire un numero!");
    else{
        operazione = "somma";
        scegliOperatore("+", "*", "-", "/");
        numeroDaCompilare = "numero2";
    }
    
}

function scegliPer(){
    if(document.getElementById(numeroDaCompilare).textContent == "")
        alert("Inserire un numero!");
    else{
        operazione = "moltiplicazione";
        scegliOperatore("*", "+", "-", "/");
        numeroDaCompilare = "numero2";
    }

}

function scegliDiviso(){
    if(document.getElementById(numeroDaCompilare).textContent == "")
        alert("Inserire un numero!");
    else{
        operazione = "divisione";
        scegliOperatore("/", "+", "-", "*");
        numeroDaCompilare = "numero2";
    }
}

function scegliMeno(){
    if(document.getElementById(numeroDaCompilare).textContent == "")
        alert("Inserire un numero!");
    else{
        operazione = "sottrazione";
        scegliOperatore("-", "+", "/", "*");
        numeroDaCompilare = "numero2";
    }
}

//prendi numeri
function scegliNumero(identificatore){
    let precedente = document.getElementById(numeroDaCompilare).textContent;
    isCampo1Compilato = true;
    if(precedente == "0"){
        alert("Impossibile inserire un numero dopo lo 0 (zero)");
    }
    else
        document.getElementById(numeroDaCompilare).textContent = precedente + identificatore;
}

//cancella un carattere
function cancella(){
    if(document.getElementById("numero1").textContent == "")
        alert("Non c'è nulla da cancellare");
    else{
        document.getElementById(numeroDaCompilare).textContent = "";
        if(numeroDaCompilare == "numero1")
            isCampo1Compilato = false;
        if(numeroDaCompilare == "numero2"){
            numeroDaCompilare = "numero1";
            operazione = null;
            annullaOperatori();
            document.getElementById("cella risultato").innerHTML = "";
        }
    }

}
