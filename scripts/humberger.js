// let hamButton = document.querySelector('#menu');
// let navigation = document.querySelector('#navMenu');

// hamburger.addEventListener('click', () => {
// 	// let navigation = document.querySelector('.humbergerItems')
// 	// navigation.classList.toggle('open');
// 	// hamButton.classList.toggle('open');
// 	if (navigation.style.display==="flex"){
// 		navigation.style.display="none";
// 	}
// 	else{
// 		navigation.style.display="flex";
// 	}
// });


// document.addEventListener('DOMContentLoaded', () => {
// 	const hamButton = document.querySelector('#menu');
//   const navigation = document.querySelector('#navMenu');
// 	hamButton.addEventListener('click', () => {
// 		navigation.classList.toggle('open');
// 	});

// const handleResize = () => {
// 	if (window.innerWidth >= 768) {
// 		navigation.style.display = 'flex';
// 		navigation.classList.remove('open')
// 	} else {
// 		navigation.style.display = 'none';
// 	}
// }
// window.addEventListener('resize', handleResize);
// handleResize();

// });


document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.getElementById('hamburger');
	const sidebar = document.getElementById('sidebar');

		hamburger.addEventListener('click', () => {
			if (sidebar.style.left === '0px') {
				sidebar.style.left = '-300px';
		} else {
				sidebar.style.left = '0px';
		}

			// if (sidebar.style.display === 'block') {
			// 		sidebar.style.display = 'none';
			// } else {
			// 		sidebar.style.display = 'block';
			// }
	});
});