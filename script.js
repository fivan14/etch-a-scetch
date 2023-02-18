const mainDiv = document.querySelector('#main-div')

const gridNum = Number.parseInt(prompt(),10)

let divHeight = 460 / gridNum
console.log(divHeight)

for (let i = 0; i < gridNum; i++) {
    for (let j = 0; j < gridNum; j++) {
        mainDiv.insertAdjacentHTML('beforeend', `<div id='grid' style='background-color: white; height: ${divHeight - 2}px; width: ${divHeight - 2}px; border: 1px solid black;margin:0px; padding: 0px;'></div>`)
    } 
}

console.log(document.querySelectorAll('div').length)