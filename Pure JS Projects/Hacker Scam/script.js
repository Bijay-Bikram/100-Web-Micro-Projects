

const hack = [
  'Scanning the available Wi-Fi .......',
  'NTFiber - E8F4 has been found',
  'Initializing Hack Program .......',
  'Hacking NTfiber - E8F4 username ......',
  'Username found "user"',
  'Connection to NTFiber - E8F4 .......',
  'NTFiber - E8F4 is connected successfully'

]
let i = 0;
const interval = setInterval(() => {
  document.getElementById(`para`).textContent = hack[i]
  i++;
  if (i >= hack.length) {
    clearInterval(interval)
  }
}, 2000)

// if (i == 3) {

//   let j = 1;
//   const progress = setInterval( () => {
//     let r = document.getElementById(`para`).textContent = `!Hacked ${j}%`;
//     if (j == 100) {
//       clearInterval(progress);
//     }
//     j++;
//   }, 100)

// }








