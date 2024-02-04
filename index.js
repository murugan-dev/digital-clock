

setInterval(
function updateclock(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDay();
    var date = now.getDate();
    var month = now.getMonth()
    var year = now.getFullYear();

    var check = hours;

    var dayNames= ['sunday','monday','tuesday','wedesday','thursday','friday','saturday'];
    var months1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    
    hours= hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds <10 ? '0' + seconds : seconds;
    date = date < 10 ? '0' + date : date ;

    var period= check < 12 ? 'Am' : 'PM' ;

    var time = document.getElementById('time');
    var dateTime = document.getElementById('date-time');

    time.innerHTML = hours + ':' + minutes + ':' + seconds +" " + period ;
    dateTime.innerHTML = dayNames[day] + ', ' +months1[month]  + ', '+date +', ' + year ; 

},1000)
 
//  updateclock();
//  setIntetervel (updateclock ,1000);
 