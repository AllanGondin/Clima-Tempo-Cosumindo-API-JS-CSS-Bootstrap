
document.querySelector("#busca").addEventListener('click', function(){

var passaValor= function(valor)
{
   
    window.location = "file:///C:/Users/allan/Projects/www/DW/NAFA/Cidade.html?nomeCidade="+valor;
    // window.location ="file:///C:/Users/MOREIRA/Desktop/PI/NAFA/Cidade.html?nomeCidade="+valor;
}


var paramCidade = document.getElementById('buscaCidade').value;

 passaValor(paramCidade);
});