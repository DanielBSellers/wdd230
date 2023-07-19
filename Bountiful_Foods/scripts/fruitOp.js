const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
}
const displayBis = (bis) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    bis.forEach((bis) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');

      //adding content
      h2.textContent = `${bis.name}`;
  
      //appending element
      card.appendChild(h2);
    })
  }
getData();