/*Typer*/
$('document').ready(function(){
  var typed = new Typed('.type', {
    strings: ['We can work under stress', 'Our idea is novel'],
    typeSpeed: 200, // to assign speed value in going foward
    loop: true, // to make it in an infinte loop
    backspeed: 100 // to give speed value in returing back
  
  });
});

// conventer*/



$(document).ready(function () {
  // some variables

  var baseCurrency = 'USD';

  var baseNumber = 1;

  var targetCurrency = 'INR';

  var targetNumber;

  var url;

  currencyConverter(baseCurrency, baseNumber,targetCurrency,targetNumber)

  // get base currency value

  $("#base").change(function () {
    // base currency

    baseCurrency = $(this).children("option:selected").val();

    // call currencyConverter function

    currencyConverter(baseCurrency,baseNumber,targetCurrency,targetNumber)


  });

  // get base currency number

  $("#baseNumber").change(function(){

    // base number

    baseNumber = $(this).val()

    // call currencyConverter function

    currencyConverter(baseCurrency,baseNumber,targetCurrency,targetNumber)

  })

  // get target currency value

  $("#target").change(function () {
    // target currency

    targetCurrency = $(this).children("option:selected").val();

    // call currencyConverter function

    currencyConverter(baseCurrency,baseNumber,targetCurrency,targetNumber)

  });

  // get target currency number

  $("#targetNumber").change(function(){

    // target number

    targetNumber = $(this).val()

    // call currencyConverter function

    currencyConverter2(baseCurrency,baseNumber,targetCurrency,targetNumber)

  })


  // function to convert BaseCurrency to TargetCurrency

  function currencyConverter(baseCurrency, baseNumber,targetCurrency,targetNumber)
  {
      // api url

      url = "https://api.exchangeratesapi.io/latest?symbols="+targetCurrency+"&base="+baseCurrency //api url to get the base coin (changeable one)
 

      // to  make a get request to api
      $.get(url,function(data){

          for (let [key, value] of Object.entries(data.rates)) {
            
            var result = value * baseNumber

           $("#targetNumber").val(result)

          }
          
      })
  }

  function currencyConverter2(baseCurrency, baseNumber,targetCurrency,targetNumber)
  {
      // api url

      url = "https://api.exchangeratesapi.io/latest?symbols="+baseCurrency+"&base="+targetCurrency // api url to get the traget coin

      // make a get request to api

      $.get(url,function(data){
          console.log(data.rates)

          for (let [key, value] of Object.entries(data.rates)) {

           var result = value * targetNumber

           $("#baseNumber").val(result)
          } 
      })
  }
});

/* great thanks for youtube in writing code*/




