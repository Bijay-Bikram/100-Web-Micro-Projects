const currentTime = document.querySelector("h1");
content = document.querySelector(".content");
selectMenu = document.querySelectorAll("select");
AlarmBtn = document.querySelector("button");
console.log(selectMenu);

let alarmTime,
  isAlaramSet = false;
ringtone = new Audio("./rington.mp3");

for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value=${i}>${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value=${i}>${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value=${ampm}>${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
  // Getting hour,mins,secs
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }

  // if hours is 0 ,set this value to 12
  h = h == 0 ? (h = 12) : h;

  //Adding 0 before hr,mins,secs when it is less than 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

  if (alarmTime == `${h}:${m} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

function setAlarm() {
  if (isAlaramSet) {
    // if isAlaramSet is true
    alarmTime = " "; // clear the value of alaramTime
    ringtone.pause(); // pause the ringtone
    content.classList.remove("disable");
    AlarmBtn.innerText = "Set Alarm";
    return (isAlaramSet = false); // return isAlaramSet value false
  }

  //getting hr,mins,sec,ampm from select tag value
  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

  if (
    time.includes("Hour") ||
    time.includes("Minutes") ||
    time.includes("AM/PM")
  ) {
    alert("Please select a valid time,to set Alarm");
  }
  isAlaramSet = true;
  alarmTime = time;
  content.classList.add("disable");
  AlarmBtn.innerText = "Clear Alarm";
}
AlarmBtn.addEventListener("click", setAlarm);
