function Showtime() {
    document.getElementById("click").style.display = "none";
    function Upclock() {
        var date  = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        
        var session = " AM";
        
        if (hour == 0) {
            hour = 12;
        }
        if (hour > 12) {
            hour -= 12;
            session = " PM"
        }
        hour = (hour < 10)?"0" + hour:hour;
        min = (min < 10)?"0" + min:min;
        sec = (sec < 10)?"0" + sec:sec;

        var days = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
        var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var day = days[date.getDay()];
        var month = months[date.getMonth()];
        var yr = date.getFullYear();

        var time = hour + ":" + min + ":" + sec + session + " and the day is " + day + "/" + month + "/" + yr;;
        document.getElementById("clockDisplay").innerHTML = time;       
                    
    }
    setInterval(Upclock,1000)
}

