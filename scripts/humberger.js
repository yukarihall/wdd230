let hamButton = document.querySelector('#menu');
let navigation = document.querySelector('#navMenu');

hamButton.addEventListener('click', () => {
	// let navigation = document.querySelector('.humbergerItems')
	// navigation.classList.toggle('open');
	// hamButton.classList.toggle('open');
	if (navigation.style.display==="flex"){
		navigation.style.display="none";
	}
	else{
		navigation.style.display="flex";
	}
});