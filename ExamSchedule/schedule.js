//Sets the schedule image (id="image_1") src depending on the time
var day = new Date();
var today = parseInt(day.getDay());
var hour = parseInt(day.getHours());
var minutes = parseInt(day.getMinutes());
var imgElem = document.getElementById('image_1');

(function () {
  var day = "";
  var block = "";
  var time = hour + minutes/60
  if (today == 1) day = "Mon"
  if (today == 2) day = "Tues"
  if (today == 3) day = "Wed"
  if (today == 4) day = "Thurs"
  if (8<=hour && hour<10) block = "A"
  if (10.5<=time && time<=12.5) block = "B"
  if (14<=hour && hour<16) block = "C"
  console.log(today+" "+time+"-"+day+block)
  if(day=="" || block=="") {
    imgElem.src = 'ExamSchedule/examSchedule.PNG';
  }
  else{
    imgElem.src = 'ExamSchedule/' + day + block + '.PNG';
  }
  if (hour == 8 && minutes == 0 && seconds ==0 ) {
    window.location.reload();
  }
  else if (hour == 9 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 10 && minutes == 20 && seconds ==0) { 
    window.location.reload();
  }
  else if (hour == 11 && minutes == 20 && seconds ==0) { 
    window.location.reload();
  }
  else if (hour == 12 && minutes == 10 && seconds ==0) { 
    window.location.reload();
  }
  else if (hour == 14 && minutes == 20 && seconds ==0) { 
    window.location.reload();
  }
  else if (hour == 15 && minutes > 10 && seconds ==0) { 
    window.location.reload();
  }
  else if (hour == 16 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 17 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 18 && minutes == 0 && seconds ==0  ) { 
    window.location.reload();
  }
  else if (hour == 19 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 20 && minutes == 0 && seconds ==0)  { 
    window.location.reload();
  }
  else if (hour == 21 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 22 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 23 && minutes == 0 && seconds ==0) { 
    window.location.reload();
  }
  else if (hour == 24 && minutes ==0 && seconds ==0) { 
    window.location.reload();
  }
  if (today == 1 || today == 3 || today ==5) {
    if (hour == 12 && minutes == 55 && seconds ==0) {
      window.location.reload();
    }
  }
  else if (today == 2 || today == 4) {
    if (hour == 13 && minutes == 20 && seconds ==0) {
      window.location.reload();
  }
  }
  else if (today == 6 ) {
    if (hour == 11 && minutes == 51 && seconds ==0) {
      window.location.reload();
  }
  }
  else if (today == 3 ) {
    if (hour == 13 && minutes == 46 && seconds ==0) {
      window.location.reload();
  }
  else if (hour == 1  && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 2 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 3 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 4 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 5 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 6 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  else if (hour == 7 && minutes == 0 && seconds ==0 ) { 
    window.location.reload();
  }
  }

})();