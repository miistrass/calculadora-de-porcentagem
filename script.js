// Aqui você descobre um determinado valor aplicando a porcentagem

function Calcular() {
  var numeroEntrada = document.getElementById("porcento").value;
  var variacaoPorcentagem = document.getElementById("numero").value;

  var porcentagemConvertida = (numeroEntrada / 100) * variacaoPorcentagem;
  var elementoPorcentagemConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado é " + porcentagemConvertida;
  elementoPorcentagemConvertido.innerHTML = valorConvertido;
}

// Aqui você vai descobrir a porcentagem de determinado valor

function calcularPorcentagem() {
  var numeroInteiro = document.getElementById("valorPorcentagem").value;
  var numeroPorcentagem = document.getElementById("numPorcento").value;

  var porcentagem = (numeroInteiro * 100) / numeroPorcentagem;
  var elementoValorConvertido = document.getElementById("valorResultado");
  var valorResultado = "A porcentagem é " + porcentagem + "%";
  elementoValorConvertido.innerHTML = valorResultado;
}