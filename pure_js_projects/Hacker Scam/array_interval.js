const items = ['html5', 'css', 'javascript', 'jquery'];

let i = 0;
const interval = setInterval(() => {
  console.log(items[i]);
  i += 1;
  if (i >= items.length) {
    clearInterval(interval)
  }
}, 1000);
