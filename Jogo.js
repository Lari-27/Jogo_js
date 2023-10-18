var numeroSecreto = Math.floor(Math.random() * 50) + 1; // Gere um número entre 1 e 50
var tentativas = 0;

while (true) {
  var chute = prompt('Digite um número entre 1 e 50');
  var chuteNum = parseInt(chute);

  // Verifique se o input é válido
  if (isNaN(chuteNum) || chuteNum < 1 || chuteNum > 50) {
    alert('Por favor, digite um número válido entre 1 e 50.');
    continue;
  }

  tentativas++;

  if (chuteNum === numeroSecreto) {
    alert('Correto!!! Você acertou em ' + tentativas + ' tentativas! :)');
    break;
  } else if (chuteNum < numeroSecreto) {
    alert('Errou... o número secreto é maior!');
  } else {
    alert('Errou... o número secreto é menor!');
  }
}
