
const card = document.querySelector('.card'),
	cardInner = document.querySelector('.card-inner'),
	rush = document.querySelector('.rush');

function mouseEnterBlur(){
	card.classList.add("card1");
	cardInner.classList.add("blur2");
	rush.innerHTML = "RUSHER";
}
function mouseLeaveBlur(){
	card.classList.remove("card1");
	cardInner.classList.remove("blur2");
	rush.innerHTML = "";
}
