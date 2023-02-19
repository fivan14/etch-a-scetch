const mainDiv = document.querySelector('#main-div')
const form = document.querySelector('#form')
const input = document.querySelector('#input-value')

//const gridNum = Number.parseInt(,10)


console.log(document.querySelectorAll('div').length)

function addDivs(gridSize) {
    mainDiv.innerHTML = ''
    let divHeight = 300 / gridSize
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            mainDiv.insertAdjacentHTML('beforeend', `<div id='grid' style='background-color: white; height: ${divHeight - 2}px; width: ${divHeight - 2}px; border: 1px solid black;margin:0px; padding: 0px;'></div>`)
        }
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()
    

    addDivs(input.value)
})