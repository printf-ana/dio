var nome = "Ana Carolina";
var idade = 20;
var idade2 = 17;
var frase = "Flamengo é o melhor time!"
alert("Primeiro JavaScript da " + nome + " que tem " + idade + " anos.");
console.log (nome);
console.log(idade + idade2);
console.log(frase)
console.log(frase.replace("o melhor time","a melhor nação"))
console.log(nome.toUpperCase());
console.log(frase.toLowerCase());


var lista = ["maçã", "pêra", "laranja"];
console.log(lista);
console.log(lista[1]);
lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join("-"));

var fruta ={nome: "maçã", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);

var frutas = [{nome: "maçã", cor:"vermelha"},{nome: "uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].nome);


var idade = prompt("Qual a sua idade?");
//var idade = 18;
if (idade > 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}

var count = 5;
while (count <5) {
    console.log(count);
    count = count + 1;
}

var countt;
for(count=0; count <=5; count++) {
    console.log(count);
}

var d = new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());

function soma(n1,n2) {
    return n1 + n2;
}
alert(soma(5,10));

function validaIdade(idade) {
    var validar;
    if(idade > 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

