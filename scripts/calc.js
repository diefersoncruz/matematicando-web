var fator = 0;
var multiplicador = 0;
var fatorOld = 0;
var limiteFatorA = 0;
var limiteFatorB = 0;
var limiteNegativoFatorA = 0;
var limiteNegativoFatorB = 0;
var resultadoOperacao = 0;
var qtdAcertosUsuario = 0;
var qtdErrosUsuario = 0;
var qtdMinutos = 0;
var qtdSegundos = 0;
var tempoTotalSegundos = 0;

function GeradorGameMatematica()
{
    var fatorOld = fator;
    var opcaoValida = false;
    var operadorMatematico = getRandomInt(1,4);
    preencherDadosMultiplicadorFatorTela(operadorMatematico)
/*    // gera um numero randomico de 1 a 4 para representar as operações matemáticas
    while (opcaoValida == false) {
        // Divisão
        if (operadorMatematico == 1 && dadosConfigurados.operacoesDeDivisao)
        {
            lblOperacaoMatematica.Text = "/";
            // gera os fatores a partir do 1 para evitar erro por divisão por zero
            gerarFatoresOperacaoMatematicaDivisao();
            // calcula o resultado
            resultadoOperacao = fator / multiplicador;
            preencherDadosMultiplicadorFatorTela();
            opcaoValida = true;
        }
        // Multiplicação
        else if (operadorMatematico == 2 && dadosConfigurados.operacoesDeMultiplicacao)
        {
            // gera os fatores para a operação matemática
            gerarFatoresOperacaoMatematica();
            lblOperacaoMatematica.Text = "X";
            // calcula do resultado
            resultadoOperacao = fator * multiplicador;
            preencherDadosMultiplicadorFatorTela();
            opcaoValida = true;
        }
        // Adição
        else if (operadorMatematico == 3 && dadosConfigurados.operacoesDeAdicao)
        {
            // gera os fatores para a operação matemática
            gerarFatoresOperacaoMatematica();
            lblOperacaoMatematica.Text = "+";
            // calcula do resultado
            resultadoOperacao = fator + multiplicador;
            preencherDadosMultiplicadorFatorTela();
            break;
        }
        // Subtração
        else if(operadorMatematico == 4 && dadosConfigurados.operacoesDeSubtracao)
        {
            // gera os fatores para a operação matemática
            gerarFatoresOperacaoMatematica();
            lblOperacaoMatematica.Text = "-";
            // calcula do resultado
            resultadoOperacao = fator - multiplicador;
            preencherDadosMultiplicadorFatorTela();
            opcaoValida = true;
        }
        operadorMatematico = rnd.Next(1, 4);
    }*/
    document.getElementById("inputResultado").focus();
}

function preencherDadosMultiplicadorFatorTela(operador){
    switch (operador){
        case 1:
            operador = "X"
            break;
        case 2:
            operador = "/"
            break;
        case 3:
            operador = "+"
            break;
        case 4:
            operador = "-"
            break;
    }
    document.getElementById("inputOperador").setAttribute("value", operador);
}
