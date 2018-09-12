var principal;
var previsoes;
var custos;

$(document).ready(function () {
    principal = $('#mainContainer');
    previsoes = $('#containerPrevisoes');
    custos = $('#containerCustos');
    previsoes.hide();
    custos.hide();
})

function cadastrarPrevisoes() {
    custos.hide();
    previsoes.show();
}

function cadastrarCustos() {
    previsoes.hide();
    custos.show();
}