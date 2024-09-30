
//Option-1: getElementsByTagName
const list = document.getElementsByTagName('li')
for(let li of list){
    // console.log(li.innerText)
}

//Option-2:getElementById
const fruitsTitle = document.getElementById('fruits')
// console.log(fruitsTitle)

// document.getElementById('fruits').innerText = 'my favourite fruits'


//Option-3: getElementsByClassName
const fruit = document.getElementsByClassName('fruit')
for(const foll of fruit){
    // console.log(foll.innerText)
}


//Option-4: querySelectorAll
const quary = document.querySelectorAll('#items li')
// console.log(quary)
for(const li of quary){
    // console.log(li.innerText)
}

//Option-5: querySelector
document.querySelector('#items li')

//-----------------------------------------------

//Color
// document.getElementById('fruits').style.color = 'Red'
//inner Html
// document.getElementsByClassName('fruit-container')[0].innerHTML


//Add Section



