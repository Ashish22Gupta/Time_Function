setInterval(showTime, 1000);
function showCustomDayAndMonth(){
     let dateobj = new Date();
     let Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

     let Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
     'September', 'October', 'November', 'December'];
     let day = dateobj.getDay();
     let Month = dateobj.getMonth();
     let year = dateobj.getFullYear();
     let date = dateobj.getDate();
     let customDayMonth = Days[day] + ", " + date + " " + Months[Month] + " " + year;
     document.getElementById("date").innerHTML = customDayMonth; 
}
function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    session = "AM";
     
    if(hour > 12){
        hour -=12;
        session = "PM";
    }
    if(hour == 0){
        hour = 12;
        session = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec <10 ? "0" + sec : sec;
    let currenTime = hour + ":" + min + ":" + sec + " "+ session;
    document.getElementById("clock").innerHTML= currenTime;
}
showCustomDayAndMonth();
function myfun1(){
        window.location.replace("index.html");
    }