function addChar(car){
    var precedente = document.getElementById("display").textContent;

    //se non ci sono numeri non posso mettere un operatore
    if(precedente == ""){
        if(car == "+" || car == "-" || car == "/" || car == "*"){
            alert("impossibile inserire un operatore");
            return;
        }
    }
    //se si mette un operatore dopo un altro operatore
    if(car == "+" || car == "-" || car == "/" || car == "*"){
        var ultimo = precedente[precedente.length - 1];
        if(ultimo == "+" || ultimo == "-" || ultimo == "/" || ultimo == "*"){
            alert("impossibile inserire un operatore");
            return;
        }
    }
    //se si ha premuto il tasto cancella solo un carattere
    if(car == 'c'){
        var aggiornato = precedente.slice(0, -1)
        document.getElementById("display").textContent = aggiornato;
    }
        
    //se si ha premuto il tasto cancella tutto
    else if(car == 'ce')
        document.getElementById("display").textContent = "";
    else
        document.getElementById("display").textContent = precedente + car;
}

function calcola(){
    var espr = document.getElementById("display").textContent;
    var ris = eval(espr)
    document.getElementById("display").textContent = ris;
}