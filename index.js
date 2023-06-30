'use strict'
let riddlesData = []
const riddles = document.querySelector('.riddles')
const question = document.querySelector('.question')

const response = fetch('./data.json')
response
    .then(data => data.json())
    .then(data => {
        for (let riddle of data) {
            const riddleNode = document.createElement('div')
            riddleNode.className = 'container-riddle'
            riddleNode.innerHTML = `
                    <h3 class="title">${riddle.question}</h3>
                    <p class="paragraph">${riddle.answer}</p>
                `
            riddles.appendChild(riddleNode)
        }
        riddlesData = data
    })

const filterData = () => {
    console.log(23);
    const query = question.value
    const filteredData = riddlesData.filter(riddle => riddle.question.includes(query))
    renderRiddles(filteredData)
}

const renderRiddles = data => {
    riddles.innerHTML = ''
  for (let riddle of data) {
    const riddleNode = document.createElement('div')
    riddleNode.className = 'container-riddle'
    riddleNode.innerHTML = `
            <h3 class="title">${riddle.question}</h3>
            <p class="paragraph">${riddle.answer}</p>
        `
    riddles.appendChild(riddleNode)
  }
}

question.addEventListener('keydown', filterData)
