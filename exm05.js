const pessoa = {
    "nome": "Walter White",
    "idade": 600,
};

console.table(pessoa);
console.log(pessoa.idade, pessoa.nome);
console.log(pessoa["idade"], pessoa["nome"]);

pessoa.altura = 1.25;
pessoa["massa"] = 540.7;
console.table(pessoa);

//pessoa = {
//    nada: "nada",
//}