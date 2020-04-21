document.querySelector("#busca").addEventListener('click', function(){
    var cidade = document.getElementById('buscaCidade').value;
  
      const url_api = 'https://api.hgbrasil.com/weather?format=json-cors&key=e76d33bb&city_name='+cidade
    
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
          var sourceOfPicture = "Imagens/blusa.jpg";
          var img = document.getElementById('bigpic')
          img.src = sourceOfPicture;
          img.style.display = "block";
        }
        else{
          document.getElementById('roupa').textContent = "Saia de regata";
          var sourceOfPicture = "Imagens/regata.jpg";
          var img = document.getElementById('bigpic')
          img.src = sourceOfPicture;
          img.style.display = "block";
        }
        console.log(search)
        console.log(data)
        console.log(data.results.forecast[0].date);
}

getWeather();
});