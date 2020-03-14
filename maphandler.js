GetNowMap();
function GetNowMap() {
  if (event != null) {
    $(".li_map_on").attr("class", "li_map");
    $(event.target).attr("class", "li_map_on");
  }
  for (var i = 0; i < 10; i++) {
    $(".zone" + i).empty();
  }
  $(".map_time").empty();
  GetNowZone(
    0,
    "http://api.openweathermap.org/data/2.5/weather?id=1835848&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetNowZone(
    1,
    "http://api.openweathermap.org/data/2.5/weather?id=1845136&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetNowZone(
    2,
    "http://api.openweathermap.org/data/2.5/weather?id=1843137&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetNowZone(
    3,
    "http://api.openweathermap.org/data/2.5/weather?id=1845604&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetNowZone(
    4,
    "http://api.openweathermap.org/data/2.5/weather?id=1835224&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetNowZone(
    5,
    "http://api.openweathermap.org/data/2.5/weather?id=1839071&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetNowZone(
    6,
    "http://api.openweathermap.org/data/2.5/weather?id=1846326&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetNowZone(
    7,
    "http://api.openweathermap.org/data/2.5/weather?id=1845457&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetNowZone(
    8,
    "http://api.openweathermap.org/data/2.5/weather?id=1841811&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetNowZone(
    9,
    "http://api.openweathermap.org/data/2.5/weather?id=1846266&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetNowTime(
    "http://api.openweathermap.org/data/2.5/weather?id=1835848&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  function GetNowZone(i, json) {
    $.getJSON(json, function(data) {
      var $icon = data.weather[0].icon;
      var $temp = data.main.temp;
      $(".zone" + i).append(
        '<img src="http://openweathermap.org/img/wn/' + $icon + '@2x.png"/>'
      );
      $(".zone" + i).append("<span>" + $temp + "</span>");
    });
  }
  function GetNowTime(json) {
    $.getJSON(json, function(data) {
      var $time = data.dt;
      function getTimestampToDate(timestamp) {
        var date = new Date(timestamp * 1000);
        var chgTimestamp =
          date.getFullYear() +
          "-" +
          addZero((date.getMonth() + 1).toString()) +
          "-" +
          addZero(date.getDate().toString()) +
          "  " +
          addZero(date.getHours().toString()) +
          ":" +
          addZero(date.getMinutes().toString());
        return chgTimestamp;
      }
      function addZero(data) {
        return data < 10 ? "0" + data : data;
      }
      $(".map_time").append(getTimestampToDate($time) + "현재");
    });
  }
}

function GetMap(num) {
  $(".li_map_on").attr("class", "li_map");
  $(event.target).attr("class", "li_map_on");
  for (var i = 0; i < 10; i++) {
    $(".zone" + i).empty();
  }
  $(".map_time").empty();
  GetZone(
    num,
    0,
    "http://api.openweathermap.org/data/2.5/forecast?id=1835848&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetZone(
    num,
    1,
    "http://api.openweathermap.org/data/2.5/forecast?id=1845136&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetZone(
    num,
    2,
    "http://api.openweathermap.org/data/2.5/forecast?id=1843137&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetZone(
    num,
    3,
    "http://api.openweathermap.org/data/2.5/forecast?id=1845604&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetZone(
    num,
    4,
    "http://api.openweathermap.org/data/2.5/forecast?id=1835224&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetZone(
    num,
    5,
    "http://api.openweathermap.org/data/2.5/forecast?id=1839071&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetZone(
    num,
    6,
    "http://api.openweathermap.org/data/2.5/forecast?id=1846326&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetZone(
    num,
    7,
    "http://api.openweathermap.org/data/2.5/forecast?id=1845457&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetZone(
    num,
    8,
    "http://api.openweathermap.org/data/2.5/forecast?id=1841811&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetZone(
    num,
    9,
    "http://api.openweathermap.org/data/2.5/forecast?id=1846266&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  GetTime(
    num,
    "http://api.openweathermap.org/data/2.5/forecast?id=1835848&APPID=57f66c7f961818b3d093c721233c13f4&units=metric"
  );
  function GetZone(num, i, json) {
    $.getJSON(json, function(data) {
      var $icon = data.list[num].weather[0].icon;
      var $temp = data.list[num].main.temp;
      $(".zone" + i).append(
        '<img src="http://openweathermap.org/img/wn/' + $icon + '@2x.png"/>'
      );
      $(".zone" + i).append("<span>" + $temp + "</span>");
    });
  }
  function GetTime(num, json) {
    $.getJSON(json, function(data) {
      var $time = data.list[num].dt_txt.substring(0, 16) + " 예보";
      $(".map_time").append($time);
    });
  }
}

TodayWorldWeather(1816670);
TodayWorldWeather(1850144);
TodayWorldWeather(524901);
TodayWorldWeather(2988507);
TodayWorldWeather(2643743);
TodayWorldWeather(5128581);

function TodayWorldWeather(regionCode) {
  json =
    "http://api.openweathermap.org/data/2.5/weather?id=" +
    regionCode +
    "&APPID=57f66c7f961818b3d093c721233c13f4&units=metric";
  $.getJSON(json, function(data) {
    var $icon = data.weather[0].icon;
    var $weather = data.weather[0].description;
    var $temp = data.main.temp;
    $(".icon").append(
      "<td>" +
        '<img src="http://openweathermap.org/img/wn/' +
        $icon +
        '@2x.png"/></td>'
    );
    $(".weather").append("<td>" + $weather + "</td>");
    $(".temp").append("<td>" + $temp + "</td>");
  });
}
