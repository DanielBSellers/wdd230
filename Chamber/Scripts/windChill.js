const t = document.getElementById('temp').innerText;
const speed = document.getElementById('wSpeed').innerText;
const s = Math.round(speed);
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