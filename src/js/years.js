// credit: https://github.com/Bowser65/bowser65.xyz/blob/master/src/index.js#L32
const date = new Date();
const years = document.querySelector('#years');
years.textContent = `${(date.getFullYear() - 2018 + (date.getMonth() >= 2 ? 1 : 0))} years`;

const age = document.querySelector('#age');
age.textContent = `${(date.getFullYear() - 2005 + (date.getMonth() >= 2 ? date.getDate() >= 24 ? 1 : 0 : 0))} years`;