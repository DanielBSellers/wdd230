const year = document.getElementById("currentYear");
var updatedDate = new Date().getFullYear();
year.textContent = updatedDate;

const lastMod = document.getElementById("lastUpdated");
lastMod.textContent = (document.lastModified);