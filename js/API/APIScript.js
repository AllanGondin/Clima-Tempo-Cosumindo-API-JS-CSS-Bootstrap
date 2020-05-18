function queryString(parameter) {  
  var loc = location.search.substring(1, location.search.length);   
  var param_value = false;   
  var params = loc.split("&");   
  for (i=0; i<params.length;i++) {   
      param_name = params[i].substring(0,params[i].indexOf('='));   
      if (param_name == parameter) {                                          
          param_value = params[i].substring(params[i].indexOf('=')+1)   
      }   
  }   
  if (param_value) {   
      return param_value;   
  }   
  else {   
      return undefined;   
  }   
}

var variavel = queryString("nomeCidade");


    const url_api = 'https://api.hgbrasil.com/weather?format=json-cors&key=367f6284&city_name='+variavel;

      async function getWeather(){
      const response = await fetch(url_api);
      const data = await response.json();
      const search = data.by = "city_name";

     
      
      document.getElementById('cidade').textContent = data.results.city_name;
      document.getElementById('temperatura').textContent = data.results.temp + "°";
      document.getElementById('minima').textContent = data.results.forecast[0].min + "°" ; //DIA ATUAL
      document.getElementById('maxima').textContent = data.results.forecast[0].max + "°";  //DIA ATUAL

      //INFOS DIA + 1 
      document.getElementById('wd1').textContent = data.results.forecast[1].weekday + " -"; 
      document.getElementById('d1').textContent = data.results.forecast[1].date;
      document.getElementById('mi1').textContent = data.results.forecast[1].min + "°" ;
      document.getElementById('ma1').textContent = data.results.forecast[1].max + "°";  

      //INFOS DIA + 2
      document.getElementById('wd2').textContent = data.results.forecast[2].weekday + " -"; 
      document.getElementById('d2').textContent = data.results.forecast[2].date;
      document.getElementById('mi2').textContent = data.results.forecast[2].min + "°" ; 
      document.getElementById('ma2').textContent = data.results.forecast[2].max + "°"; 

      //INFOS DIA + 3
      document.getElementById('wd3').textContent = data.results.forecast[3].weekday + " -"; 
      document.getElementById('d3').textContent = data.results.forecast[3].date;
      document.getElementById('mi3').textContent = data.results.forecast[3].min + "°" ; 
      document.getElementById('ma3').textContent = data.results.forecast[3].max + "°";  

      //INFOS DIA + 4
      document.getElementById('wd4').textContent = data.results.forecast[4].weekday + " -"; 
      document.getElementById('d4').textContent = data.results.forecast[4].date;
      document.getElementById('mi4').textContent = data.results.forecast[4].min + "°" ; 
      document.getElementById('ma4').textContent = data.results.forecast[4].max + "°";  
      

      
        
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




