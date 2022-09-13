//1) Faça um programa que imprima na tela os números de 1 a 20
let one = '20';

for (x = 1; x <= one; x++) {
  document.write(x + '<br>');
}

var y = 1 * prompt('Quantas repetições você quer?');

for (x = 1; x <= y; x++) {
  document.write(x + 'Larissa <br>');
}

//2) Faça um programa que imprima na tela os números de 1 a 30 e do lado apresente a soma dos números existentes.
let two = '30';

for (y = 1; y <= two; y++) {
  let sumup = two + y;
  document.write(y + '<br>' + sumup);
}
//3) Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
let n1 = parseInt * prompt('Digite um número inteiro');
let n2 = parseInt * prompt('Digite outro número inteiro');
let nF = n1 || n2;

if (n1 > n2) {
  while ((nF <= n1, nF++)) {
    document.write(nF + '<br>');
  }
  if (n1 > n2) {
    while ((nF <= n2, nF++)) {
      document.write(nF + '<br>');
    }
  } else {
    document.write('Erro');
  }
}

//4) Faça um programa que leia 5 números e informe o maior número.

//5) Faça um programa que leia 5 números e informe a soma e a média dos números.
let v1 = 1 * prompt('Digiite um número(1)');
let v2 = 1 * prompt('Digite outro número(2)');
let v3 = 1 * prompt('Digite outro número(3)');
let v4 = 1 * prompt('Digite outro número(4)');
let v5 = 1 * prompt('Digite outro número(5)');
let soma = v1 + v2 + v3 + v4 + v5;
let media = (v1 + v2 + v3 + v4 + v5) / 5;

document.write(`A soma dos números é ${soma} e a média é ${media}`);

//6) Faça um programa que imprima na tela apenas os números ímpares entre 1 e 100.

for (n = 1; n <= 100; n++) {
  document.write(n + '<br>');
}

//7) Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
/*   Tabuada de 5:
    5 X 1 = 5
    5 X 2 = 10
    ...
    5 X 10 = 50 */

function tabuada() {
  var num = parseInt(document.getElementById('num').value);
  var resposta = document.getElementById('resposta');
  var tabuada = '';

  for (var count = 1; count <= 10; count++)
    tabuada += num + ' x ' + count + ' = ' + num * count + '<br />';

  resposta.innerHTML = tabuada;
}
