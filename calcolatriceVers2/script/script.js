let numUno, numDue;
let op;

function addChar(car) {
    var corrente = document.getElementById("display").innerHTML;

    //se si ha premuto il tasto cancella solo un carattere
    if (car == 'c') {
        var aggiornato = corrente.slice(0, -1)
        document.getElementById("display").innerHTML = aggiornato;
    }

    //se si ha premuto il tasto cancella tutto
    else if (car == 'ce')
        document.getElementById("display").innerHTML = "";
    else
        document.getElementById("display").innerHTML = corrente + car;
}

function scegliOperatore(operazione) {
    numUno = document.getElementById("display").innerHTML;
    op = operazione;
    document.getElementById("display").innerHTML = " ";
}

function calcola() {
    numDue = document.getElementById("display").innerHTML;
    //converto i numeri in interi
    numUno = parseInt(numUno);
    numDue = parseInt(numDue);

    var risultato;

    if (op == '+')
        risultato = numUno + numDue;
    else if (op == "-")
        risultato = numUno - numDue;
    else if (op == "/")
        risultato = numUno / numDue;
    else if (op == "*")
        risultato = numUno * numDue;
    else{
        alert("impossibile eseguire il calcolo");
    }

    document.getElementById("display").innerHTML = risultato;
}