const t = document.getElementById('temp').innerText;
console.log(t);
const s = document.getElementById('wSpeed').innerText;
console.log(s);
const chill = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + 0.4275 * (t * (s ** 0.16));
console.log(chill);
const wChill = Math.round(chill);
console.log(wChill);
document.getElementById('wChill').innerHTML = wChill;