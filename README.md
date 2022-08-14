<html>
    <script> 
    let y = 1*prompt('Digite um número que você quer que imprima na tela')
    for(x=0 ; x<=y; x++) {
        document.write(x + ' <br>');
    } alert('Alert x '+x);


// Faça um programa que imprima na tela os números de 1 a 30 e do lado apresente a soma dos números existentes.
        for(var i = 1; i <= 30; i++) {
            y = i + i;
            document.write(i + '<br> ' + y);
        }

// Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
    let inteiro1 = 1*prompt('Digite um número');
    let inteiro2 = 1*prompt('Digite um número');

    for(let inteiro1 = 1; inteiro1 <= 100; i++) {
            result = (inteiro2 - inteiro1);
            document.write(result);
    

/*Faça um Programa que leia 5 números e informe o maior deles.*/
let numberOnee = prompt('Digite um número');
let numberTwoo = prompt('Digite um número');
let numberThree = prompt('Digite um número');
let numberFour = prompt('Digite um número');
let numberFive = prompt('Digite um número');

if(numberOnee > numberTwoo && numberOnee > numberThree && numberOnee > numberFour && numberOnee > numberFive) {
    alert('O ' + numberOnee + ' é o maior número');
} else if(numberTwoo > numberOnee && numberTwoo > numberThree && numberTwoo > numberFour && numberTwoo > numberFive) {
    alert('O ' + numberTwoo + ' é o maior número);
} else if(numberThree > numberOnee && numberThree > numberTwoo && numberThree > numberFour && numberThree > numberFive) {
    alert('O ' + numberThree + ' é o maior número);
} else if(numberFour > numberOnee && numberFour > numberTwoo && numberFour > numberThree && numberFour > numberFive) {
    alert('O ' + numberFour + ' é o maior número); {
        else {
            alert('O ' + numberFive + ' é o maior número);
        }
    }
    // Faça um programa que leia 5 números e informe a soma e a média dos números.
    let numb1 = 1*prompt('Digite um número');
    let numb2 = 1*prompt('Digite um número');
    let numb3 = 1*prompt('Digite um número');
    let numb4 = 1*prompt('Digite um número');
    let numb5 = 1*prompt('Digite um número');
    const resultSumUp = (numb1 + num2 + numb3 + numb4 + numb5);
    const resultMedia = (numb1 + num2 + numb3 + numb4 + numb5)/5;


    // Faça um programa que imprima na tela apenas os números ímpares entre 1 e 100
    for(var c = 0; c <= 100; c = c + 1) {
            document.write(c);
        }

    // Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
    /*Tabuada de 5:
    5 X 1 = 5
    5 X 2 = 10
    ...
    5 X 10 = 50*/ 


    
    </script>
    </html>
PARTE 2: 
      <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //Peço desculpas pela tarefa incompleta. Meu notebook queimou o hd na última semana e ainda não tive como consertá-lo e assim fazer as tarefas como o devido. 
    //Pretendo colocá-lo pra consertar amanhã, então em breve devo atualizar as tarefas com a correção devida.
// Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.
let n1 = 1*prompt('Digite um número');
let n2 = 1*prompt('Digite um número');
let n3 = 1*prompt('Digite um número');
let n4 = 1*prompt('Digite um número');
let n5 = 1*prompt('Digite um número');
let n6 = 1*prompt('Digite um número');
let n7 = 1*prompt('Digite um número');
let n8 = 1*prompt('Digite um número');
let n9 = 1*prompt('Digite um número');
let n10 = 1*prompt('Digite um número');



// A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.

// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
let note = 1*prompt('Digite um número'); 
if(nota >= 0 && nota <= 10){
    alert('O número é válido')
} else {
    alert('O número é inválido');
}

//Faça um programa que calcule o mostre a média aritmética de N notas.
let num1 = 1*prompt('Digite um número');
let num2 = 1*prompt('Digite um número');
let num3 = 1*prompt('Digite um número');

let Media = (num1 + num2 + num3) / 3;

//Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120. A saída deve ser conforme o exemplo abaixo:
//Fatorial de: 5.
    //5! =  5 . 4 . 3 . 2 . 1 = 120
    let fatorial = 1*prompt('Digite um número inteiro');

    let fatorar = fatorial**(fatorial-1);
    </script>
</body>
</html>
