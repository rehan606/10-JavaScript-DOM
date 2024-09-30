// 01- Where to add
const listCreate = document.getElementById('fruits-list')
// 02- What to be added
const li = document.createElement('li');
li.innerText = 'My mango'
// 03- Add The Child
listCreate.appendChild(li)



//Add Section

//v01- where to add
const mainContainer = document.getElementById('main-Container')

// 02- What to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h2.innerText = 'This is section Headding';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'List Style one';
ul.appendChild(li1);

section.appendChild(ul);

main-Container.appendChild(section)



//Set InnerHTML Directly
const sectionDress = document.createElement('section')

sectionDress.innerHTML = `
    <h2 id="fruits " class="rehan hassn">Fruits List i like these fruits</h2>
    <ul id="fruits-list">
        <li class="fruit">Shirt </li>
        <li class="fruit">Pant</li>
        <li class="fruit">Perfume</li>
    </ul>
`

main-Container.appendChild(section)
