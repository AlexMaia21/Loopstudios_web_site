const body = document.querySelector('body')
const menu = document.querySelector('nav.menu')
const btn = document.querySelector('div.icon-hamburguer i.fas')
btn.onclick = function(){
	menu.classList.toggle('active')
	btn.classList.toggle('fa-times')
	body.classList.toggle('hidden')
}