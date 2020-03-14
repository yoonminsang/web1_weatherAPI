RegionSearch();
var region;
var regionCode;
$("#select_region_1").change(function() {
  $("#select_region_2").empty();
  var region_1 = $("#select_region_1").val();
  switch (region_1) {
    case "서울/경기":
      $("#select_region_2").append(
        "<option>서울</option><option>의정부</option><option>대부도</option>"
      );
      break;
    case "강원도":
      $("#select_region_2").append(
        "<option>춘천</option><option>원주</option><option>고성</option><option>속초</option><option>동해</option><option>강릉</option><option>영월</option><option>서산</option>"
      );
      break;
    case "충청도":
      $("#select_region_2").append(
        "<option>청주</option><option>천안</option><option>공주</option><option>대전</option>"
      );
      break;
    case "경상도":
      $("#select_region_2").append(
        "<option>포항</option><option>창원</option><option>구미</option><option>울산</option><option>마산</option><option>거제</option>"
      );
      break;
    case "전라/제주":
      $("#select_region_2").append(
        "<option>전주</option><option>광주</option><option>임실</option><option>여수</option><option>영광</option><option>목포</option><option>해남</option><option>순천</option><option>제주도</option>"
      );
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
    case "서울":
      regionCode = 1835848;
      break;
    case "의정부":
      regionCode = 1833788;
      break;
    case "대부도":
      regionCode = 1844106;
      break;
    case "춘천":
      regionCode = 1845136;
      break;
    case "원주":
      regionCode = 1833105;
      break;
    case "고성":
      regionCode = 1840179;
      break;
    case "속초":
      regionCode = 1836553;
      break;
    case "동해":
      regionCode = 1892823;
      break;
    case "강릉":
      regionCode = 1843137;
      break;
    case "영월":
      regionCode = 1832257;
      break;
    case "서산":
      regionCode = 1835895;
      break;
    case "청주":
      regionCode = 1845604;
      break;
    case "천안":
      regionCode = 1845759;
      break;
    case "공주":
      regionCode = 1842616;
      break;
    case "대전":
      regionCode = 1835224;
      break;
    case "포항":
      regionCode = 1839071;
      break;
    case "창원":
      regionCode = 1846326;
      break;
    case "구미":
      regionCode = 1842225;
      break;
    case "울산":
      regionCode = 1833747;
      break;
    case "마산":
      regionCode = 1841245;
      break;
    case "거제":
      regionCode = 1882056;
      break;
    case "전주":
      regionCode = 1845457;
      break;
    case "광주":
      regionCode = 1841811;
      break;
    case "임실":
      regionCode = 1843585;
      break;
    case "여수":
      regionCode = 1832157;
      break;
    case "영광":
      regionCode = 1832501;
      break;
    case "목포":
      regionCode = 1841066;
      break;
    case "해남":
      regionCode = 1844751;
      break;
    case "순천":
      regionCode = 1835648;
      break;
    case "제주도":
      regionCode = 1846266;
      break;
  }
  SimpleNowWeather(regionCode);
  SimpleTimeWeatherBt(regionCode, "temp");
  SimpleTimeWeather(regionCode);
  TimeWeather(regionCode);
}
function InterestRegionSave() {
  // var region = $("#select_region_2").val();
}
function SimpleNowWeather(regionCode) {
  $(
    ".now_time, .now_img, .now_temp, .now_feels_like, .now_temp_min, .span_div, .now_temp_max"
  ).empty();
  var json =
    "http://api.openweathermap.org/data/2.5/weather?id=" +
    regionCode +
    "&APPID=57f66c7f961818b3d093c721233c13f4&units=metric";
  $.getJSON(json, function(data) {
    var $icon = data.weather[0].icon;
    var $temp = data.main.temp + "°C";
    var $status = data.weather[0].description;
    var $feels_like = data.main.feels_like + "°";
    var $temp_min = data.main.temp_min + "°";
    var $temp_max = data.main.temp_max + "°";
    var $now_time = data.dt;
    $(".now_img").append(
      '<img src="http://openweathermap.org/img/wn/' +
        $icon +
        '@2x.png" alt="' +
        $status +
        '" title="' +
        $status +
        '">'
    );
    $(".now_temp").append($temp);
    $(".now_feels_like").append($feels_like);
    $(".now_temp_min").append($temp_min);
    $(".span_div").append("/");
    $(".now_temp_max").append($temp_max);
    $(".now_time").append(getTimestampToDate($now_time));

    function getTimestampToDate(timestamp) {
      var date = new Date(timestamp * 1000);
      var day = date.getDay();
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
      var chgTimestamp =
        addZero((date.getMonth() + 1).toString()) +
        "-" +
        addZero(date.getDate().toString()) +
        "  " +
        addZero(date.getHours().toString()) +
        ":" +
        addZero(date.getMinutes().toString()) +
        day;
      return chgTimestamp;

      function addZero(data) {
        return data < 10 ? "0" + data : data;
      }
    }
  });
}

function SimpleTimeWeatherBt(regionCode, bt) {
  if (event != null) {
    if ($(event.target).hasClass("region_search")) {
    } else {
      $(".li_simple_time_on").attr("class", "li_simple_time");
      $(event.target).attr("class", "li_simple_time_on");
    }
  }

  var $time = [];
  var $temp = [];
  var $pressure = [];
  var $humidity = [];
  var json =
    "http://api.openweathermap.org/data/2.5/forecast?id=" +
    regionCode +
    "&APPID=57f66c7f961818b3d093c721233c13f4&units=metric";
  $.getJSON(json, function(data) {
    for (var num = 0; num < 8; num++) {
      $time.push(data.list[num].dt_txt.substring(11, 13));
      $temp.push(data.list[num].main.temp);
      $pressure.push(data.list[num].main.pressure);
      $humidity.push(data.list[num].main.humidity);
    }
    var btt;
    if (bt === "temp") {
      dataes = $temp;
      btt = "기온";
    } else if (bt === "pressure") {
      dataes = $pressure;
      btt = "기압";
    } else {
      dataes = $humidity;
      btt = "습도";
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

function SimpleTimeWeather(regionCode) {
  $(".simple_table_weather_time_weather").empty();
  var json =
    "http://api.openweathermap.org/data/2.5/forecast?id=" +
    regionCode +
    "&APPID=57f66c7f961818b3d093c721233c13f4&units=metric";
  $.getJSON(json, function(data) {
    for (var num = 0; num < 8; num++) {
      var $icon = data.list[num].weather[0].icon;
      var $status = data.list[num].weather[0].description;
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

function TimeWeather(regionCode) {
  $(
    ".time, .icon, .status, .temp, .temp_min, .temp_max, .feels_like, .pressure, .humidity, .wind_speed, .wind_deg"
  ).empty();
  $(".time").append("<td>시간</td>");
  $(".icon").append("<td>아이콘</td>");
  $(".status").append("<td>날씨</td>");
  $(".temp").append("<td>온도</td>");
  $(".temp_min").append("<td>최저온도</td>");
  $(".temp_max").append("<td>최고온도</td>");
  $(".feels_like").append("<td>체감온도</td>");
  $(".pressure").append("<td>기압</td>");
  $(".humidity").append("<td>습도</td>");
  $(".wind_speed").append("<td>풍속</td>");
  $(".wind_deg").append("<td>풍향</td>");
  var json =
    "http://api.openweathermap.org/data/2.5/forecast?id=" +
    regionCode +
    "&APPID=57f66c7f961818b3d093c721233c13f4&units=metric";
  $.getJSON(json, function(data) {
    for (var num = 0; num < 15; num++) {
      var $time = data.list[num].dt_txt.substring(11, 13);
      var $icon = data.list[num].weather[0].icon;
      var $status = data.list[num].weather[0].description;
      var $temp = data.list[num].main.temp;
      var $temp_min = data.list[num].main.temp_min;
      var $temp_max = data.list[num].main.temp_max;
      var $feels_like = data.list[num].main.feels_like;
      var $pressure = data.list[num].main.pressure;
      var $humidity = data.list[num].main.humidity;
      var $wind_speed = data.list[num].wind.speed;
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
      $(".time").append("<td>" + $time + "</td>");
      $(".icon").append(
        '<td><img src="http://openweathermap.org/img/wn/' +
          $icon +
          '@2x.png" alt="' +
          $status +
          '" title="' +
          $status +
          '"></td>'
      );
      $(".status").append("<td>" + $status + "</td>");
      $(".temp").append("<td>" + $temp + "</td>");
      $(".temp_min").append("<td>" + $temp_min + "</td>");
      $(".temp_max").append("<td>" + $temp_max + "</td>");
      $(".feels_like").append("<td>" + $feels_like + "</td>");
      $(".pressure").append("<td>" + $pressure + "</td>");
      $(".humidity").append("<td>" + $humidity + "</td>");
      $(".wind_speed").append("<td>" + $wind_speed + "</td>");
      $(".wind_deg").append("<td>" + $wind_deg + "</td>");
    }
  });
}
