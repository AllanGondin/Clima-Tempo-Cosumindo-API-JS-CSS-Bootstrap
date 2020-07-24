function queryString(parameter) {
  var loc = location.search.substring(1, location.search.length);
  var param_value = false;
  var params = loc.split("&");
  for (i = 0; i < params.length; i++) {
    param_name = params[i].substring(0, params[i].indexOf('='));
    if (param_name == parameter) {
      param_value = params[i].substring(params[i].indexOf('=') + 1)
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
var keyApi = '1ed10468';

const url_api = `https://api.hgbrasil.com/weather?format=json-cors&key=${keyApi}&city_name=${variavel}`;

async function getWeather() {
  const response = await fetch(url_api);
  const data = await response.json();
  const search = data.by = "city_name";

  //INFOS DIA ATUAL
  document.getElementById('cidade').textContent = data.results.city;
  document.getElementById('temperatura').textContent = data.results.temp + "°";
  document.getElementById('minima').textContent = data.results.forecast[0].min + "°";
  document.getElementById('maxima').textContent = data.results.forecast[0].max + "°";



  // CONDICIONAIS DE RECOMENDAÇÃO

  var blusa = document.getElementById("blusa");
  var camiseta = document.getElementById("camiseta");
  var short = document.getElementById("short");
  var oculos = document.getElementById("oculos");
  var mascara = document.getElementById("mascara");
  var alcool = document.getElementById("alcool");
  var gchuva = document.getElementById("gchuva");
  var protetor = document.getElementById("protetor");
  var tempmax = data.results.forecast[0].max;    //TEMPERATURA MAXIMA DO DIA ATUAL
  var tempminima = data.results.forecast[0].min;
  var temp = data.results.temp;
  var condhoje = data.results.forecast[0].condition;   //CONDIÇÃO DO DIA DE HOJE
  console.log("condition today: "+condhoje);
  console.log("temperatura minima: "+tempminima);

  //MASCARA E ALCOOL SEMPRE VISIVEIS
  mascara.classList.remove("oculta");
  mascara.classList.add("visivel");
  alcool.classList.remove("oculta");
  alcool.classList.add("visivel");
 


  //Tempestade ou chuva
  if ((condhoje == "storm") || (condhoje=="rain")){

    if (tempminima <= 21) {
      camiseta.src = "./css/mangacumprida.png";
      blusa.classList.remove("oculta");
      blusa.classList.add("visivel");
      camiseta.classList.remove("oculta");
      camiseta.classList.add("visivel");
      gchuva.classList.remove("oculta");
      gchuva.classList.add("visivel");
    }
    else if (tempminima > 21) {
      camiseta.classList.remove("oculta");
      camiseta.classList.add("visivel");
      short.classList.remove("oculta");
      short.classList.add("visivel");
      gchuva.classList.remove("oculta");
      gchuva.classList.add("visivel");

    }

  }

  //tempo limpo ou nublado
  if ((condhoje == "clear_day") || (condhoje=="cloud") || (condhoje=="cloudly_day") || (condhoje=="cloudly_night")){

    if (tempminima <= 21) {
      camiseta.src = "./css/mangacumprida.png";
      blusa.classList.remove("oculta");
      blusa.classList.add("visivel");
      camiseta.classList.remove("oculta");
      camiseta.classList.add("visivel");
      oculos.classList.remove("oculta");
      oculos.classList.add("visivel");
      protetor.classList.remove("oculta");
      protetor.classList.add("visivel");
      
    }
    else if (tempminima > 21) {
      camiseta.classList.remove("oculta");
      camiseta.classList.add("visivel");
      short.classList.remove("oculta");
      short.classList.add("visivel");
      oculos.classList.remove("oculta");
      oculos.classList.add("visivel");
      protetor.classList.remove("oculta");
      protetor.classList.add("visivel");

    }

  }

  //FIM CONDICIONAIS DE RECOMENDAÇÃO //

  //INFOS PRÓXIMOS DIAS//


//INFOS DIA + 1 
document.getElementById('wd1').textContent = data.results.forecast[1].weekday + " -";
document.getElementById('d1').textContent = data.results.forecast[1].date;
document.getElementById('mi1').textContent = data.results.forecast[1].min + "°";
document.getElementById('ma1').textContent = data.results.forecast[1].max + "°";

//INFOS DIA + 2
document.getElementById('wd2').textContent = data.results.forecast[2].weekday + " -";
document.getElementById('d2').textContent = data.results.forecast[2].date;
document.getElementById('mi2').textContent = data.results.forecast[2].min + "°";
document.getElementById('ma2').textContent = data.results.forecast[2].max + "°";

//INFOS DIA + 3
document.getElementById('wd3').textContent = data.results.forecast[3].weekday + " -";
document.getElementById('d3').textContent = data.results.forecast[3].date;
document.getElementById('mi3').textContent = data.results.forecast[3].min + "°";
document.getElementById('ma3').textContent = data.results.forecast[3].max + "°";

//INFOS DIA + 4
document.getElementById('wd4').textContent = data.results.forecast[4].weekday + " -";
document.getElementById('d4').textContent = data.results.forecast[4].date;
document.getElementById('mi4').textContent = data.results.forecast[4].min + "°";
document.getElementById('ma4').textContent = data.results.forecast[4].max + "°";

//INFOS DIA + 5
document.getElementById('wd5').textContent = data.results.forecast[5].weekday + " -";
document.getElementById('d5').textContent = data.results.forecast[5].date;
document.getElementById('mi5').textContent = data.results.forecast[5].min + "°";
document.getElementById('ma5').textContent = data.results.forecast[5].max + "°";


//INFOS DIA + 6
document.getElementById('wd6').textContent = data.results.forecast[6].weekday + " -";
document.getElementById('d6').textContent = data.results.forecast[6].date;
document.getElementById('mi6').textContent = data.results.forecast[6].min + "°";
document.getElementById('ma6').textContent = data.results.forecast[6].max + "°";

  // CONDICIONAIS DOS ICONES  //

  var icone = document.getElementById("icone");  //ICONE DA PREVISÃO ATUAL
  var codcondicao = data.results.condition_code;    // CONDICAO QUE DEFINE O ICONE A SER USADO
  var fenomeno = data.results.currently;        // INDICA SE ESTÁ DE DIA OU DE NOITE
  var elemento = new Array(6);   //VARIAVEL QUE ARMAZENA ID DOS ICONES DOS PROX DIAS
  console.log("condition code: "+codcondicao);

  //ICONES DO DIA ATUAL
  let iconediario = {    //OBJETO PARA SEPARAR CONDIÇÕES POR CATEGORIA
    'chuva forte': [0, 1, 3, 4, 35, 37, 38, 39, 47],
    'chuva': [9, 10, 17, 40, 45],
    'garoa': [11, 12],
    'tempo limpo': [25, 27, 31, 32, 33, 36],
    'tempo nublado': [26, 28, 23],
    'tempo parcialmente fechado': [29, 30, 34, 44]
  }
  var tipoclima;
  Object.keys(iconediario).forEach((el, i) => { //FUNÇÃO QUE FAZ A BUSCA DENTRO DO OBJETO E RETORNA A IMAGEM CORRESPONDENTE
    for (let i = 0; i < 9; i++) {
      if (codcondicao == iconediario[el][i]) {
        tipoclima = el;
        icone.src = imagem(tipoclima);

      }

    }


  })


  //FIM ICONES NO DIA ATUAL//


  // ICONES DOS PRÓXIMOS DIAS // 


  //CRIA "OBJETO" PARA REFERÊNCIAR OS DADOS "CONDITION" RECEBIDOS DA API
  let iconeproxdias = {

    'chuva forte': ["storm"],
    'chuva': ["rain"],
    'tempo limpo': ["clear_day"],
    'tempo nublado': ["cloud"],
    'tempo parcialmente fechado': ["cloudly_day", "cloudly_night"]
  }

  //ESSE FOR RECEBE OS DADOS PUROS DA API E ARMAZENA DENTRO DE UM VETOR "VETOR"
  let vetor = new Array(6);
  for (var i = 1; i < 7; i++) {
    vetor[i] = data.results.forecast[i].condition;
  }

  //ESSE FOR CRIA OS IDS BASEADO NOS ID COLOCADOS NA IMG DO HTML
  for (var i = 1; i < 7; i++) {
    var idiv = "imgd".concat(i);   //concatena "imgd" com o número do contador, formando o id da img do html
    elemento[i] = document.getElementById(idiv); //cria variáveis que dão acesso ao id das imagens do html
    console.log(elemento[i]);
  }


  //FUNÇÃO QUE MAPEIA OS TERMOS RECEBIDOS DA API E ARMAZENADOS EM UM VETOR
  Object.keys(iconeproxdias).forEach((el, i) => {
    var j;
    for (j = 1; j < 7; j++) {
      for (var i = 0; i < 2; i++) {
        if (vetor[j] == iconeproxdias[el][i]) {
          vetor[j] = el;  //QUANDO ELE ACHAR O TERMO CORRESPONDENTE ELE "TRADUZ" ARMAZENANDO O VALOR DO ELEMENTO
          var recebe = imagemproxdias(vetor[j]);   //variavel "recebe" recebe o caminho da imagem correta
          elemento[j].src = recebe;
          console.log("transcrita: " + vetor[j]);
        }

      }

    }
  })


  //FUNÇÃO QUE DEFINE O CAMINHO DOS ICONES PARA A PREVISÃO DO DIA ATUAL
  var caminho;
  function imagem(a) {
    if (a == "tempo parcialmente fechado") {
      if (fenomeno == "day") {
        return caminho = "./css/iconestemp/solcomnuvens.png";

      }
      else if (fenomeno == "night") {
        return caminho = "./css/iconestemp/noitecomnuvens.png";
      }

    }
    else if (a == "garoa") {
      if (fenomeno == "day") {
        return caminho = "./css/iconestemp/garoadia.png";
      }
      else if (fenomeno == "night") {
        return caminho = "./css/iconestemp/garoanoite.png";
      }
    }

    else if (a == "tempo limpo") {
      if (fenomeno == "day") {
        return caminho = "./css/iconestemp/sol.png";
      }
      else if (fenomeno == "night") {
        return caminho = "./css/iconestemp/noitelimpa.png";
      }

    }

    else if (a == "chuva forte") {
      return caminho = "./css/iconestemp/chuvatrovoada.png";
    }

    else if (a == "chuva") {
      return caminho = "./css/iconestemp/chuva.png";
    }

    else if (a == "tempo nublado") {
      return caminho = "./css/iconestemp/nublado.png";
    }
  }


  //FUNÇÃO QUE DEFINE O CAMINHO DOS ICONES PARA A PREVISÃO DOS PRÓXIMOS DIAS
  function imagemproxdias(a) {
    if (a == "tempo parcialmente fechado") {

      return caminho = "./css/iconestemp/solcomnuvens.png";

    }
    else if (a == "garoa") {
      return caminho = "./css/iconestemp/garoadia.png";
    }

    else if (a == "tempo limpo") {
      return caminho = "./css/iconestemp/sol.png";
    }

    else if (a == "chuva forte") {
      return caminho = "./css/iconestemp/chuvatrovoada.png";
    }

    else if (a == "chuva") {
      return caminho = "./css/iconestemp/chuva.png";
    }

    else if (a == "tempo nublado") {
      return caminho = "./css/iconestemp/nublado.png";
    }
  }

  



  //CHUVA FORTE: 0,1,3,4,35,37,38,39,47
  //CHUVA:  9,10,17,40,45
  //GAROA:  11,12
  //TEMPO LIMPO:  25,27,31,32,33,36
  //NUBLADO: 26,28
  //TEMPO P FECHADO:  29,30,34,44



  /* 0 - Tempestade forte  //CHUVA FORTE
  1 - Tempestade tropical  //CHUVA FORTE
  2 - Furacão 
  3 - Tempestades severas  //CHUVA FORTE
  4 - Tempestades         //CHUVA FORTE
  5 - Misto de neve e chuva
  6 - Misto chuva e gelo
  7 - Misto neve e gelo
  8 - Geada fina
  9 - Chuviscos       //CHUVA
  10 - Congelamento chuva     //CHUVA
  11 - Alguns chuviscos     //GAROA
  12 - Alguns chuviscos     //GAROA
  13 - Neve baixa
  14 - Tempestade com neve
  15 - Ventania com neve
  16 - Neve
  17 - Granizo            //CHUVA
  18 - Gelo
  19 - Poeira
  20 - Neblina
  21 - Tempestade de areia
  22 - Fumacento
  23 - Vento acentuado
  24 - Ventania
  25 - Tempo frio       //TEMPO LIMPO
  26 - Tempo nublado     //NUBLADO
  27 - Tempo limpo       //TEMPO LIMPO
  28 - Tempo nublado      //NUBLADO
  29 - Parcialmente nublado  //TEMPO P FECHADO
  30 - Parcialmente nublado   //TEMPO P FECHADO
  31 - Tempo limpo       //TEMPO LIMPO
  32 - Ensolarado          //TEMPO LIMPO
  33 - Estrelado           //TEMPO LIMPO
  34 - Ensolarado com muitas nuvens  //TEMPO P FECHADO
  35 - Misto chuva e granizo    //CHUVA FORTE
  36 - Ar quente               //TEMPO LIMPO
  37 - Tempestades isoladas  //CHUVA FORTE
  38 - Trovoadas dispersas  //CHUVA FORTE
  39 - Trovoadas dispersas  //CHUVA FORTE
  40 - Chuvas esparsas      //CHUVA
  41 - Pesados neve
  42 - Chuviscos com neve
  43 - Neve pesada
  44 - Sol com poucas nuvens  //TEMPO P FECHADO
  45 - Chuva            //CHUVA
  46 - Queda de neve
  47 - Tempestades isoladas //CHUVA FORTE
  48 - Serviço não disponível 
   */
}

getWeather();




