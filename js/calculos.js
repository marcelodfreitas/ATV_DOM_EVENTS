document
  .getElementById("btn_calcular")
  .addEventListener("click", calcularValores);

function calcularValores() {
  // Captura os valores dos campos de entrada
  const valorBase =
    parseFloat(document.getElementById("valor_base").value) || 0;
  const valorTransporte =
    parseFloat(document.getElementById("valor_transporte").value) || 0;
  const valorAlimentacao =
    parseFloat(document.getElementById("valor_alimentacao").value) || 0;
  const valorAutomovel =
    parseFloat(document.getElementById("valor_automovel").value) || 0;
  const faltas = parseFloat(document.getElementById("faltas").value) || 0;

  // Calcula a receita total
  const receitaTotal = valorBase + valorTransporte + valorAlimentacao;
  document.getElementById("valor_receita").value = receitaTotal.toFixed(2);

  // Calcula os descontos totais
  const descontosTotal = valorAutomovel + faltas;
  document.getElementById("valor_descontos").value = descontosTotal.toFixed(2);

  // Calcula o total (receita total - descontos totais)
  const total = receitaTotal - descontosTotal;
  document.getElementById("valor_total").value = total.toFixed(2);
}
