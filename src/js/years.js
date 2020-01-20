// credit: https://github.com/Bowser65/bowser65.xyz/blob/master/src/index.js#L32
const date = new Date();
const years = document.querySelector('#years');
years.textContent = `${(date.getFullYear() - 2017 + (date.getMonth() >= 3 ? 1 : 0))} years`;