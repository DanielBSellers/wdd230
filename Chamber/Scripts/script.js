// getting date for header
const DateOweek = new Date().toLocaleString('en-us', {  weekday: 'long' });
document.getElementById("dow").innerHTML = DateOweek;
const date = new Date();
const d = new Date();
let day = d.getDate();
document.getElementById("numDate").innerHTML = day;
const month = new Date();
const nowMonth = date.toLocaleString('default', { month: 'long' });
document.getElementById("curMonth").innerHTML = nowMonth;
const y = new Date();
let nowYear = y.getFullYear();
document.getElementById("year").innerHTML = nowYear;
// hamburger menue
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;
// copyright year update footer
const year = document.getElementById("currentYear");
var updatedDate = new Date().getFullYear();
year.textContent = updatedDate;
// last update
const lastMod = document.getElementById("lastUpdated");
lastMod.textContent = (document.lastModified);
// moving banner
const dayOWeek = new Date();
const UpDay = dayOWeek.getDay();
const hulk = document.getElementById('comeMeetBanner'); 
if (UpDay >= 1 && UpDay <3) {
    console.log('keep banner');
}
else {
    hulk.id = 'bruce';
}
