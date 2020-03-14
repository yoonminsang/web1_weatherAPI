var now = new Date($.now());
var day = now.getDay();
switch (day) {
  case 0:
    day = " (일)";
    break;
  case 1:
    day = " (월)";
    break;
  case 2:
    day = " (화)";
    break;
  case 3:
    day = " (수)";
    break;
  case 4:
    day = " (목)";
    break;
  case 5:
    day = " (금)";
    break;
  case 6:
    day = " (토)";
    break;
}
var now_date = now.getMonth() + 1 + "/" + now.getDate() + day;
$(".header_date").prepend(now_date);

$(".bt_menu").click(function() {
  var submenu = $(this).next($(".ul_menu2"));
  if (submenu.is(":visible")) submenu.slideUp();
  else submenu.slideDown();
});

function MenuChange() {
  $(".a_menu_on").attr("class", "a_menu");
  $(event.target).attr("class", "a_menu_on");
}

function OpenWindowPop() {
  var options =
    "top=100, left=100, width=750, height=500, status=no, menubar=no, toolbar=no, resizable=no";
  window.open("interest_region.html", "popup", options);
}

Load();
function Load() {
  $(".interested_region_feld").empty();
  var i = 1;
  while (true) {
    var output = localStorage.getItem("interest region" + i);
    if (output == null) {
      break;
    }
    var arr = JSON.parse(output);
    var regionCode = arr[0].region_code;
    var json =
      "http://api.openweathermap.org/data/2.5/weather?id=" +
      regionCode +
      "&APPID=57f66c7f961818b3d093c721233c13f4&units=metric";
    GETJSON(json, i, arr);
    i++;
  }
}

function GETJSON(json, i, arr) {
  $.getJSON(json, function(data) {
    var region = arr[0].region;
    var icon = data.weather[0].icon;
    var temp = data.main.temp + "°C";
    $(".interested_region_field_tbody").append(
      "<tr><th><span class=inner_region>" +
        region +
        '</span></th><td><img class="inner_weather_img" src="http://openweathermap.org/img/wn/' +
        icon +
        '@2x.png"/></td><td><strong class="inner_temp">' +
        temp +
        "</strong></td>"
    );
  });
}

// var $icon = data.weather[0].icon;
// var $temp = data.main.temp + "°C";
// var $status = data.weather[0].description;
// var $feels_like = data.main.feels_like + "°";
// var $temp_min = data.main.temp_min + "°";
// var $temp_max = data.main.temp_max + "°";
// var $now_time = data.dt;
// $(".now_img").append(
//   '<img src="http://openweathermap.org/img/wn/' +
//     $icon +
//     '@2x.png" alt="' +
//     $status +
//     '" title="' +
//     $status +
//     '">'
// );
