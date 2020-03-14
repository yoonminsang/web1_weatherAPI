// 동해
GETJSON("속초", 1836553);
GETJSON("강릉", 1843137);
GETJSON("동해", 1892823);
GETJSON("울진", 1833763);
GETJSON("포항", 1839071);
GETJSON("울산", 1833747);
GETJSON("부산", 1838524);
//서해
GETJSON("강화", 1843163);
GETJSON("대부도", 1844106);
GETJSON("태안", 1835518);
GETJSON("군산", 1842025);
GETJSON("신안", 6395804);
//남해
GETJSON("해남", 1844751);
GETJSON("장흥", 1842781);
GETJSON("여수", 1832157);
GETJSON("신현", 1882056);
//제주
GETJSON("제주", 1846266);

function GETJSON(region, regionCode) {
  json =
    "http://api.openweathermap.org/data/2.5/forecast?id=" +
    regionCode +
    "&APPID=57f66c7f961818b3d093c721233c13f4&units=metric";
  $.getJSON(json, function(data) {
    var now = new Date($.now());
    var num;
    loop: for (num = 0; num < 7; num++) {
      var date = data.list[num].dt_txt;
      if (
        date.substring(0, 4) <= now.getFullYear() &&
        date.substring(5, 7) <= now.getMonth() + 1 &&
        date.substring(8, 10) <= now.getDate() &&
        date.substring(11, 13) > now.getHours()
      ) {
        num--;
        break loop;
      }
    }
    var $region = region;
    var $icon = data.list[num].weather[0].icon;
    var $weather = data.list[num].weather[0].description;
    var $wind_speed = data.list[num].wind.speed;
    var deg = data.list[num].wind.deg;
    var $sea_level = data.list[num].main.sea_level;
    if (337.5 <= deg < 22.5) {
      var $wind_deg = "↑";
    } else if (deg < 67.5) {
      var $wind_deg = "↗";
    } else if (deg < 112.5) {
      var $wind_deg = "→";
    } else if (deg < 157.5) {
      var $wind_deg = "↘";
    } else if (deg < 202.5) {
      var $wind_deg = "↓";
    } else if (deg < 247.5) {
      var $wind_deg = "↙";
    } else if (deg < 292.5) {
      var $wind_deg = "←";
    } else {
      var $wind_deg = "↖";
    }
    $(".sea_table tbody").append(
      "<tr><td>" +
        $region +
        "</td><td>" +
        '<img src="http://openweathermap.org/img/wn/' +
        $icon +
        '@2x.png"/></td><td>' +
        $weather +
        "</td><td>" +
        $wind_deg +
        "</td><td>" +
        $wind_speed +
        "</td><td>" +
        $sea_level +
        "</td></tr>"
    );
  });
}
