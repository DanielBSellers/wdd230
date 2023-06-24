const form = document.getElementById('formOne');

form.addEventListener("input", function () {
    const jd = new Date();
    document.getElementById('formEdit').innerHTML = jd; 
});