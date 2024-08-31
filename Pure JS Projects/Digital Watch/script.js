

function displayTime(){
    let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let month = a.getMonth();
let date = a.getDate();

    document.getElementById('month').textContent=month;
document.getElementById('day').textContent=date;

document.getElementById('hour').textContent=h;
document.getElementById('minutes').textContent=m;

document.getElementById('second').textContent=s;

if(h<12){
    document.getElementById('sub').textContent='AM';
}
else{
    document.getElementById('sub').textContent='PM';
}

}
setInterval(displayTime,1000);
