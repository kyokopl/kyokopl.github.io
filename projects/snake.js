
function start () {
  black()
  yellow()
  three()
  four()
}

function black () {
  var black = document.getElementsByClassName('black')
  black.addEventListener('click', makeBlue)
  black.addEventListener('dblclick', makeWhite)
  black.addEventListener('contextmenu', makeBlack)
}

function yellow () {
  var yellow = document.getElementById('yellow')
  black.addEventListener('click', makeBlue)
  black.addEventListener('dblclick', makeWhite)
}

// Changes the background color of event's target
function makeBlack (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green'
}

function makeOrange (evt) {
  evt.target.style.backgroundColor = 'orange'
}

function makeBlack (evt) {
  evt.target.style.backgroundColor = 'black'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}
