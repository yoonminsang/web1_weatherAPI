RegionSearch();
var region;
var regionCode;
$("#select_region_1").change(function() {
  $("#select_region_2").empty();
  var region_1 = $("#select_region_1").val();
  switch (region_1) {
    case "동해":
      $("#select_region_2").append(
        "<option>속초</option><option>강릉</option><option>동해</option><option>울진</option><option>포항</option><option>울산</option><option>부산</option>"
      );
      break;
    case "서해":
      $("#select_region_2").append(
        "<option>강화</option><option>대부도</option><option>태안</option><option>군산</option><option>신안</option>"
      );
      break;
    case "남해":
      $("#select_region_2").append(
        "<option>해남</option><option>장흥</option><option>여수</option><option>신현</option>"
      );
      break;
    case "제주도":
      $("#select_region_2").append("<option>제주</option>");
      break;
  }
});
function RegionSearch() {
  $(".li_simple_time_on").attr("class", "li_simple_time");
  $(".li_simple_time")
    .first()
    .attr("class", "li_simple_time_on");
  region = $("#select_region_2").val();
  switch (region) {
    case "속초":
      regionCode = 1836553;
      break;
    case "강릉":
      regionCode = 1843137;
      break;
    case "동해":
      regionCode = 1892823;
      break;
    case "울진":
      regionCode = 1833763;
      break;
    case "포항":
      regionCode = 1839071;
      break;
    case "울산":
      regionCode = 1833747;
      break;
    case "부산":
      regionCode = 1838524;
      break;
    case "강화":
      regionCode = 1843163;
      break;
    case "대부도":
      regionCode = 1844106;
      break;
    case "태안":
      regionCode = 1835518;
      break;
    case "군산":
      regionCode = 1842025;
      break;
    case "신안":
      regionCode = 6395804;
      break;
    case "해남":
      regionCode = 1844751;
      break;
    case "장흥":
      regionCode = 1842781;
      break;
    case "여수":
      regionCode = 1832157;
      break;
    case "신현":
      regionCode = 1882056;
      break;
    case "제주":
      regionCode = 1846266;
      break;
  }
  NowSea(regionCode);
  TimeSeaBt(regionCode, "wind_speed");
  TimeWeather(regionCode);
}
function InterestRegionSave() {
  // var region = $("#select_region_2").val();
}
function NowSea(regionCode) {
  $(
    ".now_time, .now_img, .now_temp, .now_wind_deg, .now_wind_speed, .span_div, .now_sea_level"
  ).empty();
  var json =
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
    var deg = data.list[num].wind.deg;
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
    var $icon = data.list[num].weather[0].icon;
    var $weather = data.list[num].weather[0].description;
    var $temp = data.list[num].main.temp;
    var $wind_speed = data.list[num].wind.speed;
    var $sea_level = data.list[num].main.sea_level;
    var day = now.getDay();
    if (data.list[num].dt_txt.substring(8, 10) == day);
    else {
      if (day == 0) {
        day = 6;
      } else {
        day--;
      }
    }
    switch (day) {
      case 0:
        day = " 일요일";
        break;
      case 1:
        day = " 월요일";
        break;
      case 2:
        day = " 화요일";
        break;
      case 3:
        day = " 수요일";
        break;
      case 4:
        day = " 목요일";
        break;
      case 5:
        day = " 금요일";
        break;
      case 6:
        day = " 토요일";
        break;
    }
    $(".now_img").append(
      '<img src="http://openweathermap.org/img/wn/' +
        $icon +
        '@2x.png" alt="' +
        $weather +
        '" title="' +
        $weather +
        '">'
    );
    $(".now_temp").append($temp + "°C");
    $(".now_wind_deg").append($wind_deg);
    $(".now_wind_speed").append($wind_speed);
    $(".span_div").append("/");
    $(".now_sea_level").append($sea_level);
    $(".now_time").append(data.list[num].dt_txt.substring(5, 16) + day);
  });
}

function TimeSeaBt(regionCode, bt) {
  if (event != null) {
    if ($(event.target).hasClass("region_search")) {
    } else {
      $(".li_simple_time_on").attr("class", "li_simple_time");
      $(event.target).attr("class", "li_simple_time_on");
    }
  }
  var $time = [];
  var $wind_speed = [];
  var $sea_level = [];
  var json =
    "http://api.openweathermap.org/data/2.5/forecast?id=" +
    regionCode +
    "&APPID=57f66c7f961818b3d093c721233c13f4&units=metric";
  $.getJSON(json, function(data) {
    for (var num = 0; num < 8; num++) {
      $time.push(data.list[num].dt_txt.substring(11, 13));
      $wind_speed.push(data.list[num].wind.speed);
      $sea_level.push(data.list[num].main.sea_level);
    }
    var btt;
    if (bt == "wind_speed") {
      dataes = $wind_speed;
      btt = "풍속";
    } else {
      dataes = $sea_level;
      btt = "해수면";
    }
    LoadGraph($time, btt, dataes);
  });

  function LoadGraph(time, btt, dataes) {
    $("#simmple_table_weather_time_graph").empty();
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawVisualization);
    function drawVisualization() {
      var data = google.visualization.arrayToDataTable([
        ["시간", btt],
        [time[0], dataes[0]],
        [time[1], dataes[1]],
        [time[2], dataes[2]],
        [time[3], dataes[3]],
        [time[4], dataes[4]],
        [time[5], dataes[5]],
        [time[6], dataes[6]],
        [time[7], dataes[7]],
        [time[8], dataes[8]]
      ]);
      var options = {
        title: "날씨",
        vAxis: { title: btt }, //변수
        hAxis: { title: "시간" }, //이건고정
        sereiesType: "bars"
        // series: { 3: { type: "inline" } }
      };
      var chart = new google.visualization.ComboChart(
        // $("#simple_table_weather_time_graph")
        document.getElementById("simple_table_weather_time_graph")
      );
      chart.draw(data, options);
    }
  }
}

function TimeWeather(regionCode) {
  $(".table_sea_wind_deg").empty();
  $(".simple_table_weather_time_weather").empty();
  var json =
    "http://api.openweathermap.org/data/2.5/forecast?id=" +
    regionCode +
    "&APPID=57f66c7f961818b3d093c721233c13f4&units=metric";
  $.getJSON(json, function(data) {
    for (var num = 0; num < 8; num++) {
      var deg = data.list[num].wind.deg;
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
      var $icon = data.list[num].weather[0].icon;
      var $status = data.list[num].weather[0].description;
      $(".table_sea_wind_deg").append("<span>" + $wind_deg + "</span>");
      $(".simple_table_weather_time_weather").append(
        '<img src="http://openweathermap.org/img/wn/' +
          $icon +
          '@2x.png" alt="' +
          $status +
          '" title="' +
          $status +
          '">'
      );
    }
  });
}
