time = 0;
      seconds = 100;
      min = 0;
      hrs = min * 60;
      let interval;
      
      function go(){
        interval=setInterval(start,1)
      }
      function start() {
      
          seconds += 10;
          document.querySelector(".tens").innerHTML = seconds;

          if (seconds >2400) {
            seconds = 0;
            document.querySelector(".tens").innerHTML = seconds;
            document.querySelector(".sec").innerHTML = "0" + (min += 1);
          }
          if (min == 10) {
            seconds = 0;
            document.querySelector(".tens").innerHTML = seconds;
            document.querySelector(".sec").innerHTML = min = 1;
            document.querySelector(".mins").innerHTML = "0" + (hrs += 1);
          }
        
      }

      function stop() {
        clearInterval(interval)
      }

      
      function reset() {
        document.location.reload();
      }

      function myfun1(){
        window.location.replace("../index.html");
    }