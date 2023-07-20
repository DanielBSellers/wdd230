const DateOweek = new Date().toLocaleString('en-us', {  weekday: 'long' });
document.getElementById("dow").innerHTML = DateOweek;
const date = new Date();
const d = new Date();
let day = d.getDate();
document.getElementById("numDate").innerHTML = day;
const month = new Date();
const nowMonth = date.toLocaleString('default', { month: 'long' });
document.querySelector("#curMonth").innerHTML = nowMonth;
const y = new Date();
let nowYear = y.getFullYear();
document.getElementById("year").innerHTML = nowYear;


const year = document.getElementById("currentYear");
var updatedDate = new Date().getFullYear();
year.textContent = updatedDate;