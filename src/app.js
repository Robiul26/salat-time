  const hourEl = document.querySelector('.hour');
  const minuteEl = document.querySelector('.minute');
  const secondEl = document.querySelector('.second');



  function updateClock() {
      const date = new Date();

      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();


      //For Digital clock  
      // time formate
      let timeFormate = 'AM';

      if (hour > 12) {
          hour = hour - 12;
          timeFormate = 'PM';
      }
      if (minute < 10) {
          minute = `0${minute}`;
      }
      if (second < 10) {
          second = `0${second}`;
      }
      document.getElementById('hour').innerText = hour;
      document.getElementById('minute').innerText = minute;
      document.getElementById('second').innerText = second;
      document.getElementById('am-pm').innerText = timeFormate;
      document.getElementById('date').innerText = date.getDate();
      document.getElementById('month').innerText = date.toLocaleString('en', {
          month: 'long'
      });
      let year = document.getElementById('year').innerText = date.getFullYear();

      document.getElementById('day-name').innerText = date.toLocaleString('bn', {
          weekday: 'long'
      });
  }

  setInterval(updateClock, 1000);



  function request() {
      const n = new Date();
      let month_num = n.getMonth() + 1;
      if (month_num < 10) {
          month_num = `0${month_num}`;
      }


      fetch(`https://api.aladhan.com/v1/calendarByCity?city=Dhaka&country=Bangladesh&method=2&month=${month_num}&year=${year}`)
          .then(response => response.json())
          .then(response => {
              var obj = response.data;

              obj.forEach(element => {
                  let g_fazar = element.timings.Fajr.split(" ")[0].split(":")[0];
                  let g_johor = element.timings.Dhuhr.split(" ")[0].split(":")[0];
                  let g_asor = element.timings.Asr.split(" ")[0].split(":")[0];
                  let g_magribh = element.timings.Maghrib.split(" ")[0].split(":")[0];
                  let g_esha = element.timings.Isha.split(" ")[0].split(":")[0];
                  let g_sunrise = element.timings.Sunrise.split(" ")[0].split(":")[0];
                  let g_sundown = element.timings.Sunset.split(" ")[0].split(":")[0];
                  if (g_fazar > 12) {
                      g_fazar = g_fazar - 12;
                  }
                  if (g_johor > 12) {
                      g_johor = g_johor - 12;
                  }
                  if (g_asor > 12) {
                      g_asor = g_asor - 12;
                  }
                  if (g_magribh > 12) {
                      g_magribh = g_magribh - 12;
                  }
                  if (g_esha > 12) {
                      g_esha = g_esha - 12;
                  }
                  if (g_sunrise > 12) {
                      g_sunrise = g_sunrise - 12;
                  }
                  if (g_sundown > 12) {
                      g_sundown = g_sundown - 12;
                  }
                  $("#fazar").text(g_fazar + ':' + element.timings.Fajr.split(" ")[0].split(":")[1]);
                  $("#johor").text(g_johor + ':' + element.timings.Dhuhr.split(" ")[0].split(":")[1]);
                  $("#asor").text(g_asor + ':' + element.timings.Asr.split(" ")[0].split(":")[1]);
                  $("#magrib").text(g_magribh + ':' + element.timings.Maghrib.split(" ")[0].split(":")[1]);
                  $("#esha").text(g_esha + ':' + element.timings.Isha.split(" ")[0].split(":")[1]);
                  // $("#jumma").text(element.timings);
                  $("#sunrise").text(g_sunrise + ':' + element.timings.Sunrise.split(" ")[0].split(":")[1]);
                  $("#sundown").text(g_sundown + ':' + element.timings.Sunset.split(" ")[0].split(":")[1]);
                  // $("#sahri").text(element.timings);
                  // $("#iftar").text(element.timings);
              });
          })
  }

  setInterval(request, 1000);