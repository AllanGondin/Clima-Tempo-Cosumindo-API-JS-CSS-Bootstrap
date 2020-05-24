
document.querySelector("#busca").addEventListener('click', function(){


    
var passaValor= function(valor)
{
   
   
    window.location ="./Cidade.html?nomeCidade="+valor;

}


var paramCidade = document.getElementById('buscaCidade').value;

 passaValor(paramCidade);
 
});