function Clock(){

let hours = document.getElementById("hour")
let minutes = document.getElementById("minute")
let seconds = document.getElementById("second")
let period = document.getElementById("period")



let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let ampm =  h >= 12 ? "PM" : "AM";
if(h > 12){
  h -= 12;
}
if(h < 10){
  h = "0" + h;
}
if (s < 10){
  s = "0" + s;
}
if (m < 10){
  m = "0" + m;
}


hours.innerHTML = h + " : ";
minutes.innerHTML = m + " : ";
seconds.innerHTML = s;
period.innerHTML = ampm ;

}
setInterval(Clock,1000)