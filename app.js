// Search Bar Width
let input = document.getElementById('input')
let item = document.getElementsByClassName('nav-item')


input.onfocus = function(){
	for(let items of item ){
		items.style.display = 'none'
	}
	this.style.width = '100%'
}
input.onblur = function(){
	for(let items of item ){
		items.style.display = 'block'
	}
	this.style.width = '63px'
}
// Search Bar Width End

// Nav Bg Change
window.onscroll = function(){

	let nav = document.getElementById('nav')
	if (window.pageYOffset > 500) {
		nav.classList.add('bg')
	}else{
		nav.classList.remove('bg')
	}


	}




	

// Nav Bg Change End

// Show & Hide Bars
let bars = document.getElementById('bars')
let nav_menu = document.getElementById('nav-menu')
bars.onclick= function(){
	nav_menu.classList.toggle('active')
	if (this.innerHTML == '<i class="fa-solid fa-bars"></i>') {
		this.innerHTML = '<i class="fa-solid fa-xmark"></i>'
	}else{
		this.innerHTML = '<i class="fa-solid fa-bars"></i>'	
	}
}
// Show & Hide Bars End

// Slider 
let next_btn = document.getElementById('next_btn')
let prev_btn = document.getElementById('prev_btn')
let sliders = document.getElementsByClassName('slider')
let no = 1



function next(){
	document.getElementById('slider' + no).classList.remove('active')
	no ++
	if ( no > sliders.length) {
		no = 1
	}
	document.getElementById('slider' + no).classList.add('active')

}

 
function prev(){
	document.getElementById('slider' + no).classList.remove('active')
	no --
	if ( no < 1) {
		no = sliders.length
	}
	document.getElementById('slider' + no).classList.add('active')

}

next_btn.onclick = next
prev_btn.onclick = prev


setInterval( prev, '3500')
// Slider End



// Change Product Img
let all_btn = document.getElementById('all_btn')
let cloth_btn = document.getElementById('cloth_btn')
let watch_btn = document.getElementById('watch_btn')
let hat_btn = document.getElementById('hat_btn')
let shoe_btn = document.getElementById('shoe_btn')

let cloth_cards = document.getElementsByClassName('cloth')
let watch_cards= document.getElementsByClassName('watch')
let hat_cards  = document.getElementsByClassName('hat')
let shoe_cards = document.getElementsByClassName('shoe')



all_btn.onclick = function(){
	for( let cloth_card of cloth_cards){
		cloth_card.style.display = 'block'
		
	}
	for( let watch_card of watch_cards){
		watch_card.style.display = 'block'
	}
	for( let hat_card of hat_cards){
		hat_card.style.display = 'block'
		
	}
	for( let shoe_card of shoe_cards){
		shoe_card.style.display = 'block'
		
	}
	all_btn.classList.add('active')
	cloth_btn.classList.remove('active')
	watch_btn.classList.remove('active')
	hat_btn.classList.remove('active')
	shoe_btn.classList.remove('active')

}
cloth_btn.onclick = function(){

	for( let cloth_card of cloth_cards){
		cloth_card.style.display = 'block'
		
	}
	for( let watch_card of watch_cards){
		watch_card.style.display = 'none'
		
	}
	for( let hat_card of hat_cards){
		hat_card.style.display = 'none'
		
	}
	for( let shoe_card of shoe_cards){
		shoe_card.style.display = 'none'
		
	}
	all_btn.classList.remove('active')
	cloth_btn.classList.add('active')
	watch_btn.classList.remove('active')
	hat_btn.classList.remove('active')
	shoe_btn.classList.remove('active')
}
watch_btn.onclick = function(){
	for( let cloth_card of cloth_cards){
		cloth_card.style.display = 'none'
		
	}
	for( let watch_card of watch_cards){
		watch_card.style.display = 'block'
	}
	for( let hat_card of hat_cards){
		hat_card.style.display = 'none'
		
	}
	for( let shoe_card of shoe_cards){
		shoe_card.style.display = 'none'
		
	}
	all_btn.classList.remove('active')
	cloth_btn.classList.remove('active')
	watch_btn.classList.add('active')
	hat_btn.classList.remove('active')
	shoe_btn.classList.remove('active')
}
hat_btn.onclick = function(){
	for( let cloth_card of cloth_cards){
		cloth_card.style.display = 'none'
		
	}
	for( let watch_card of watch_cards){
		watch_card.style.display = 'none'
	}
	for( let hat_card of hat_cards){
		hat_card.style.display = 'block'
		
	}
	for( let shoe_card of shoe_cards){
		shoe_card.style.display = 'none'
		
	}
	all_btn.classList.remove('active')
	cloth_btn.classList.remove('active')
	watch_btn.classList.remove('active')
	hat_btn.classList.add('active')
	shoe_btn.classList.remove('active')
}
shoe_btn.onclick = function(){
	for( let cloth_card of cloth_cards){
		cloth_card.style.display = 'none'
		
	}
	for( let watch_card of watch_cards){
		watch_card.style.display = 'none'
	}
	for( let hat_card of hat_cards){
		hat_card.style.display = 'none'
		
	}
	for( let shoe_card of shoe_cards){
		shoe_card.style.display = 'block'
		
	}
	all_btn.classList.remove('active')
	cloth_btn.classList.remove('active')
	watch_btn.classList.remove('active')
	hat_btn.classList.remove('active')
	shoe_btn.classList.add('active')
}