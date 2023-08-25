const casas = document.getElementsByTagName('input'); //pega a lista de casas do tabuleiro do jogo

const b_reiniciar = document.getElementById('reiniciar'); //pega o botão de reiniciar

const label_jogador = document.getElementById('jogador'); //pegar o label do jogador que usaremos para mostrar qual jogador tem a vez
//Definindo variáveis de estado do jogo

var jogador = '_'; //Define o jogador atual (__ jogador indefinido; X jogador X, O = jogador 0)
var vencedor = '_'; //Define se há um vencedor ou não (_ = indefinido; X = jogador X, O jogador 0)
var finish;

//Define a resposta ao evento de clique nas casas do "tabuleiro"
for(var i=0;i<9;i++) {
    casas[i].addEventListener('click' , (event) => {
        if( (event.target.value=='_') && (vencedor=='_')) {
            event.target.value=jogador;
            event.target.style.color='#bc5e00';

            trocarJogador();

            vencedor = vitoria();

        }
    });
}

b_reiniciar.addEventListener('click' , (event) => {
    for(var i=0;i<9;i++) {
        casas[i].value='_';
        casas[i].style.color='#a3c3f5';
        casas[i].style.backgroundcolor='#a3c3f5';
    }

    vencedor = '_';

    sortearjogador();

});

 var sortearJogador = function() {
    if(Math.floor(Math.random () * 2)==0) {
        jogador = "O";
        label_jogador.innerText="O";
        label_jogador.style.color='#ffffff';
    }else{
        jogador = "x";
        label_jogador.innerText="x";
        label_jogador.style.color="#000000";
    }
 }

 sortearJogador();

 var trocarJogador = function() {
    if(jogador=='x') {
        jogador='O';
        label_jogador.innerText='O';
        label_jogador.style.color='#ffffff';
    }else{
        jogador='x';
        label_jogador.innerText='x';
        label_jogador.style.color='#000000';
    }
       
 }
 var vitoria = function() {
    if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casa[0].value!='_') {
        casas[0].style.backgroundcolor='#0f0';
        casas[1].style.backgroundcolor='#0f0';
        casas[2].style.backgroundcolor='#0f0';

        return casas[0].value;

    }else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_'){
        casas[3].style.backgroundcolor='#0f0';
        casas[4].style.backgroundColor='#0f0';
        casas[5].style.backgroundColor='#0f0';

        return casas[3].value;

    }else if ((casas [6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_'){
       casas[6].style.backgroundcolor='#0f0';
       casas[7].style.backgroundColor='#0f0';
       casas[8].style.backgroundColor='#0f0';

       return casas[6].value;
       
    }else if ((casas [0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_'){
        casas[0].style.backgroundcolor='#0f0';
        casas[3].style.backgroundColor='#0f0';
        casas[6].style.backgroundColor='#0f0';
 
        return casas[0].value;

    }else if ((casas [1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_'){
        casas[1].style.backgroundcolor='#0f0';
        casas[4].style.backgroundColor='#0f0';
        casas[7].style.backgroundColor='#0f0';
 
        return casas[1].value;

    }else if ((casas [2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_'){
        casas[2].style.backgroundcolor='#0f0';
        casas[5].style.backgroundColor='#0f0';
        casas[8].style.backgroundColor='#0f0';
 
        return casas[2].value;

    }else if ((casas [0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_'){
        casas[0].style.backgroundcolor='#0f0';
        casas[4].style.backgroundColor='#0f0';
        casas[8].style.backgroundColor='#0f0';
 
        return casas[0].value;

    }else if ((casas [2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_'){
        casas[2].style.backgroundcolor='#0f0';
        casas[4].style.backgroundColor='#0f0';
        casas[6].style.backgroundColor='#0f0';
 
        return casas[2].value;
    }

    return '_';
 }    