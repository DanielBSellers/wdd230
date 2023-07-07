const form = document.getElementById('formOne');

form.addEventListener("input", function () {
    const jd = new Date();
    document.getElementById('formEdit').innerHTML = jd; 
});

window.addEventListener("load", function() {
    const loadingTime = new Date();
    document.getElementById('hidden').value = loadingTime;
});
