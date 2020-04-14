document.getElementById('busca').addEventListener('click', function(){
    var cidade = document.getElementById('buscaCidade').value;
  
      const url_api = 'https://api.hgbrasil.com/weather?format=json-cors&key=bb4e2a22&city_name='+cidade
    
      async function getWeather(){
      const response = await fetch(url_api);
      const data = await response.json();
      const search = data.by = "city_name";

        document.getElementById('cidade').textContent = data.results.city_name;
        document.getElementById('tempo').textContent = data.results.temp;
        document.getElementById('data').textContent = data.results.date;

        var roupa = data.results.temp;
        if(roupa<20){
          console.log('Saia de blusa')
          document.getElementById('roupa').textContent = "Saia de blusa";
          $(document).ready(function(){
          $('#imageoption').attr('src','Imagens/blusa.jpg');
});
        }
        else{
          document.getElementById('roupa').textContent = "Saia de regata";
        }
        console.log(search)
        console.log(data)
        console.log(data.results.forecast[0].date);
}

getWeather();
});