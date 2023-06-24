const url = 'data.json';

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayBis(data.bis);
  }

  const displayBis = (bis) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    bis.forEach((bis) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let pic = document.createElement('img');
      let addy = document.createElement('h3');
      let pnum = document.createElement('h3');
      let web = document.createElement('a');
      var link = document.createTextNode("Website");
        web.appendChild(link);
        web.title = "Link to Website";
      let memlv = document.createElement('h3');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${bis.name}`;
      addy.textContent = `Address: ${bis.addy}`;
      pnum.textContent = `Phone Number: ${bis.pnum}`;
      web.href = `${bis.web}`;
      memlv.textContent = `Membership Level: ${bis.memlv}`;
  
      // Build the image portrait by setting all the relevant attribute
      pic.setAttribute('src', bis.pic);
      pic.setAttribute('alt', `logo for ${bis.name}`);
      pic.setAttribute('loading', 'lazy');
      pic.setAttribute('width', '440');
      pic.setAttribute('height', '340');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(addy);
      card.appendChild(pnum);
      card.appendChild(web);
      card.appendChild(memlv);
      card.appendChild(pic);
      cards.appendChild(card);
    })
  }
getData();
// buttons
const gridbutton = document.getElementById('btnGridOne');
const listbutton = document.getElementById('btnGridTwo');
const display = document.getElementById('cards');

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", ()=> {
    display.classList.add("list");
	display.classList.remove("grid");
})