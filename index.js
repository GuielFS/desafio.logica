//Variáveis
let nomeDoHeroi = "DIOssauro";
let xpMax = 10050;

//função para geração de xp aleatória para variar resultados
function gerarXpAleatoria(){
    return Math.floor(Math.random() * (xpMax - 1)) + 1;
}

let xpHeroi = gerarXpAleatoria();

//Variavel para armazenar nivel de acordo com XP
let mensagem;

//Condicionais e operadores
if (xpHeroi < 1000){
    mensagem = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000){
        mensagem = "Bronze";
    } else if(xpHeroi >= 2001 && xpHeroi <= 5000){
        mensagem = "Prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000){
        mensagem = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000){
        mensagem = "Plátina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000){
        mensagem = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000){
        mensagem = "Imortal";
    } else{
        mensagem = "Radiante"
    }

    console.log("O Herói de nome",nomeDoHeroi, "está no nível de",mensagem);
    console.log("A Experiência de",nomeDoHeroi,"é",xpHeroi)