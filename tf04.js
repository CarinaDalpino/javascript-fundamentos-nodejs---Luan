//----------------------------------------------------------//
//1 - uso básico de funções
console.log("\n1. Função básica:");
//----------------------------------------------------------//
function saudar() {
  console.log("Olá, tudo bem?");
} 

saudar(); // <--- Você precisa chamar a função para ela executar

// ---------------------------------------------------------//
//2 - entrada, saída e retorno
console.log("\n2. Entrada e retorno:");
//----------------------------------------------------------//
 
function somar(a, b) {
    return a + b;
}
const resultado = somar(5, 3); // <--- Você precisa passar os argumentos para a função
console.log(resultado); // <--- E depois imprimir o resultado para ver a soma

// ---------------------------------------------------------//
//3 - Função com valor
console.log("\n3. Função como valor:");
//----------------------------------------------------------//

    const mensagem = function() {
    console.log("Essa é uma função atribuída a uma variável.");

    };

    mensagem(); // <--- Você precisa chamar a função para ela executar

//---------------------------------------------------------//
//4 - Função em objeto
console.log("\n4. Função em objeto:");
//----------------------------------------------------------//
const pessoa = {
    nome: "João",
    falar() {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
};  
pessoa.falar(); // <--- Você precisa chamar o método para ele executar

// ---------------------------------------------------------//
//5 - Função com parâmetro
console.log("\n5. Função com parâmetro:");
//----------------------------------------------------------//

function executarfuncao(funcao) {
    funcao();
}

executarfuncao(function() {
    console.log("Função passada como argumento.");
}); // <--- Você precisa passar uma função como argumento para ela executar

// ---------------------------------------------------------//
//6 - Calback com setTimeout
 console.log("\n6. Callback com setTimeout:");
//----------------------------------------------------------//

console.log("\n6. Callback com setTimeout:");

console.log("Início");

setTimeout(() => {
  console.log("Executou depois de 2 segundos (callback)");
}, 2000);

console.log("Fim");

// ---------------------------------------------------------//
//7 - Inversão de controle
console.log("\n7. Inversão de controle:");
//----------------------------------------------------------//

function processar(dados, callback) {
    console.log("Processando dados...");
    callback(dados);
}

processar("Dados importantes", function(resultado) {
    console.log(`Resultado do processamento: ${resultado}`);
});
//----------------------------------------------------------//
//8 - Promise basica
console.log("\n8. Promise:");
//----------------------------------------------------------//
const promessa = new Promise((resolve, reject) => {
  let sucesso = true;

  if (sucesso) {
    resolve("Deu certo!");
  } else {
    reject("Deu erro!");
  }
});

promessa
  .then(res => console.log(res))
  .catch(err => console.log(err));



