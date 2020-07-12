$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp_up').on('click', function() { // event listener
    thermostat.up(1); // update model
    $('#temperature').text(thermostat.temp); // update view
  })

  $('#temp_down').on('click', function() { // event listener
    thermostat.down(1); // update model
    $('#temperature').text(thermostat.temp); // update view
  })

  $('#reset').on('click', function() { // event listener
    thermostat.reset(); // update model
    $('#temperature').text(thermostat.temp); // update view
  })

  $('#pwr_saving').on('click', function() { // event listener
    thermostat.changeMode(); // update model
    $('#temperature').text(thermostat.temp); // update view
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temp);
    $('#temperature').attr('class', thermostat.usage());
    // if (thermostat.usage() === 'low-usage') {
    //   $('#temperature').css('color', 'green')
    // } else if(thermostat.usage() === 'medium-usage') {
    //   $('#temperature').css('color', 'black')
    // } else {
    //   $('#temperature').css('color', 'red')
    // }
  }

  // $('#current-city').change(function() {
  //   var city = $('#current-city').val();
  //   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=17cc6f60edb9db00eea663cb90de2447&units=metric', function(data) {
  //     $('#current-temperature').text(data.main.temp)
  //   })
  // })
  // function displayWeather(city) {
  //   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  //   var token = '&appid=17cc6f60edb9db00eea663cb90de2447';
  //   var units = '&units=metric';
  //   $.get(url + token + units, function(data) {
  //     $('#current-temperature').text(data.main.temp);
  //   })
  // })
})



