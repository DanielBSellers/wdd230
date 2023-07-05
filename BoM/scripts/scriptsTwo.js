const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
let inputLen = input.value;
if (inputLen.length > 0){
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '\u274C';
    list.appendChild(listItem);
    listBtn.classList.add('childBtn');

    listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
    });
}
    input.focus();
    });
