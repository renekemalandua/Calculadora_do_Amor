// Declarando Variaveis
let botao = document.querySelector(".Calcular");
let man = document.querySelector("#man"); 
let woman = document.querySelector("#woman");
let telaJogo = document.querySelector(".conteiner");
let telaResultado = document.querySelector(".resultado");
let percentagem;

// Iniciais
function eUmaLetra(variavel){
    return /^[aáàâãbcçdeéèêfghiíìjklmnoóòôõpqrstuúùvwxyz ]$/i.test(variavel);
}

// Minha Função que Apresenta O resultado do Calculo
function Apresentar(){
    document.querySelector(".ShowPercent").innerHTML = `${percentagem}%`;
    document.querySelector(".nomes").innerHTML = `${man.value} + ${woman.value}`;
    telaJogo.setAttribute("style", "display:none");
    telaResultado.setAttribute("style", "display:flex");
}

// Evento Click do Botão Calcular
botao.addEventListener("click", () => {
let homemInvalido = true;
let mulherIvalido = true;
document.querySelector(".man").setAttribute("style","display:none");
document.querySelector(".woman").setAttribute("style","display:none");

    // Verificando homem
    for(let i = 0; i < man.value.length; i++){
        if(eUmaLetra(man.value[i]) === false){
            homemInvalido = false;
        }
    }
    // Verificando Mulher
    for(let i = 0; i < woman.value.length; i++){
        if(eUmaLetra(woman.value[i]) === false){
            mulherIvalido = false;
        }
    }

    
    if(homemInvalido == true && mulherIvalido == true){

        percentagem = Math.floor(Math.random() * 100 + 1);
        if(percentagem < 50){
            document.querySelector(".frase").innerHTML = "Lamento Dizer Isso mas Você dois: <br> uhmm!! não vai dar certo <br> Os numeros não estão ao vosso favor ";
            Apresentar();
        }
        else if(percentagem>=50 && percentagem<70){
            document.querySelector(".frase").innerHTML = "É o seginte Vocês têm química <br> Eu não sei dizer se o ´Vosso´ amor é reciproco <br> Mas tentem vcs podem dar certo, acreditem já vi casais piores!!";
            Apresentar();
        }
        else if(percentagem>=70 && percentagem<=80){
            document.querySelector(".frase").innerHTML = "É evidente Que vocês dois se amam <br> Não percam mais tempo dêm uma chance um ao outro e sejam felizes";
            Apresentar();
        }
        else if(percentagem>80 && percentagem<=100){
            document.querySelector(".frase").innerHTML = "Está escrito nas estrelas que vocês dois Foram feitos um para o outro <br> Bem!! eu não sei ler estrela mas vcs pegaram a ideia <br> Um amor como o vosso só aparece uma vez a cada mil anos então aproveitem";
            Apresentar();
        }

    }
    else if(homemInvalido == false && mulherIvalido == true){
        document.querySelector(".man").setAttribute("style","display:flex");
    }
    else if(homemInvalido == true && mulherIvalido == false){
        document.querySelector(".woman").setAttribute("style","display:flex");
    }
    else if(homemInvalido == false && mulherIvalido == false){
        document.querySelector(".man").setAttribute("style","display:flex");
        document.querySelector(".woman").setAttribute("style","display:flex");
    }
});
document.querySelector(".novo").addEventListener("click", () => {
    location.reload();
});