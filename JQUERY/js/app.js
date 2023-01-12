$.get("https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=9c25d460dde836f770c043f72b304dee",
function (api) {
    $('.temp').html('Local Temp: ' + api.main.temp + 'C');
    $('.city').html('City : ' + api.name);
    $('.description').html('Description: ' + api.weather[0].description);
  $('.icon img').attr('src','https://openweathermap.org/img/wn' + api.weather[0].icon +'.png');
});