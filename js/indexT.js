
document.querySelector("#busca").addEventListener('click', function(){
var passaValor= function(valor)
{
   
    window.location = "file:///C:/Users/MOREIRA/Desktop/PI/NAFA/cidade.html?nomeCidade="+valor;
}


var paramCidade = document.getElementById('buscaCidade').value;;

 passaValor(paramCidade);
});