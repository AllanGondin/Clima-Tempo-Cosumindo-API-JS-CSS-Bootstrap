
document.querySelector("#busca").addEventListener('click', function(){
var passaValor= function(valor)
{
    window.location = "recebe_variavel.html?minhaVariavel="+valor;
   
    window.location = "file:///C:/Users/MOREIRA/Desktop/PI/NAFA/Cidade.html?nomeCidade="+valor;
}


var paramCidade = document.getElementById('buscaCidade').value;;

 passaValor(paramCidade);
});