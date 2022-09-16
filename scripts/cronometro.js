var intervalo;

function iniciarCronometro(segundos) {
    GeradorGameMatematica();
    pararCronometro();
    iniciarJogo(segundos);
}

function iniciarJogo(limiteTempo) {
    var segundos = 1;
    var minutos = 0;
    var contador= 0;

    intervalo = window.setInterval(function () {
        if (segundos == 60) { minutos++; segundos = 0; }
        if (minutos == 60) { segundos = 0; minutos = 0; }

        segundos++; contador++; 

        preencherMinutosSegundos(segundos, minutos);

        if (parseInt(contador) == parseInt(limiteTempo)) {
            pararCronometro();
        }
    }, 1000);
}

function pararCronometro() {
    window.clearInterval(intervalo);
    document.getElementById("inputResultado").setAttribute("value", null);
    document.getElementById("segundo").innerHTML = "00";
    document.getElementById("minuto").innerHTML = "00";
}

function preencherMinutosSegundos(segundos, minutos) {
    // Valida se os segundos são menor que 10
    if (segundos < 10) {
        document.getElementById("segundo").innerHTML = "0" + segundos;
    } else {
        document.getElementById("segundo").innerHTML = segundos;
    }
    // Valida se os minutos são menor que 10
    if (minutos < 10) {
        document.getElementById("minuto").innerHTML = "0" + minutos;
    } else {
        document.getElementById("minuto").innerHTML = minutos;
    }
}

