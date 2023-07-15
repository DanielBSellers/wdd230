const t = document.getElementById('temp').innerText;
const speed = document.getElementById('wSpeed').innerText;
const s = Math.round(speed);
// const chill = 35.74 + 0.6215*t - 35.75*(s**0.16) + 0.4275*(t*s** 0.16);
//             // 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + 0.4275 * (t * (s ** 0.16));            
//             // 35.74 + 0.6215*temp - 35.75*(speed**0.16) + 0.4275*(temp*speed**0.16);
// const wChill = Math.round(chill);
// document.getElementById('wChill').innerHTML = wChill;

function windChill(t, s){
    if (t <=50 && s >3){
        let windChill = 35.74 + 0.6215*t - 35.75*(s**0.16) + 0.4275*(t*s**0.16);
        console.log(windChill);
        document.getElementById('wChill').innerHTML=Math.round(windChill);
    }
    else{
        document.getElementById('wChill').innerHTML ='N/A';
    }
}

windChill();