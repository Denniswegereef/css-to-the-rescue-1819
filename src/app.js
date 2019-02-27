import './css/x-app.scss'

let colorWhite = '#fff'
let colorBlack = '#000'

let switchDay = document.getElementById('changeOne')
let switchNight = document.getElementById('changeTwo')

const night = () => {
  let root = document.body

  root.style.setProperty('--colorWhite', colorWhite)
  root.style.setProperty('--colorBlack', colorBlack)
}

const day = () => {
  let root = document.body

  root.style.setProperty('--colorWhite', colorBlack)
  root.style.setProperty('--colorBlack', colorWhite)
}

switchDay.addEventListener('click', day)
switchNight.addEventListener('click', night)
