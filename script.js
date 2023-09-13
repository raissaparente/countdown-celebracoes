const iconNatal = document.getElementById('icone-natal')
const iconHalloween = document.getElementById('icone-halloween')
const root_theme = document.querySelector(':root')

iconNatal.addEventListener('click', () => {
    celebracao = natal
    document.getElementById('img-principal').setAttribute('src', 'images/natal2.png')
    root_theme.style.setProperty('--corprincipal', '#da505e')
    document.querySelector('div#info h1').textContent = 'COUNTDOWN PARA O NATAL'
    document.querySelector('body').style.backgroundImage = "url(images/top-image-green.png), url(images/bottom-image-green.png)"
})

iconHalloween.addEventListener('click', () => {
    celebracao = halloween
    document.getElementById('img-principal').setAttribute('src', 'images/undraw_halloween_re_2kq1.png')
    root_theme.style.setProperty('--corprincipal', '#f98826')
    document.querySelector('div#info h1').textContent = 'COUNTDOWN PARA O HALLOWEEN'
    document.querySelector('body').style.backgroundImage = "url(images/top-image-orange.png), url(images/bottom-image-orange.png)"
})

const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const anoAtual = new Date().getFullYear()
let natal = new Date(`${anoAtual}-12-25T00:00:00`)
let halloween = new Date(`${anoAtual}-10-31T00:00:00`)
let celebracao = natal


function contagem() {
const agora = new Date()
const tempo = celebracao - agora

const d = Math.floor(tempo / 1000 / 60 / 60 / 24)
const h = Math.floor(tempo / 1000 / 60 / 60 % 24)
const m = Math.floor(tempo / 1000 / 60 % 60)
const s = Math.floor(tempo / 1000 % 60)

dias.innerHTML = d
horas.innerHTML = h < 10 ? '0' + h : h
minutos.innerHTML = m < 10 ? '0' + m : m
segundos.innerHTML = s < 10 ? '0' + s : s 
}

setInterval(contagem, 1000)