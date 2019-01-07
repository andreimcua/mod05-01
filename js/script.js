let btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener("click", addition);


function addition(){
	let a = document.querySelector('#getResults').value;
	let b = document.querySelector('#getResults2').value;
	let result = Number(a) + Number(b);
	document.getElementById("h1Result").innerHTML = result;
	document.getElementById("h3Sub").innerHTML = "Addition";
}