//======================NAVBAR==================================

const navBar = document.getElementById("nav-bar");
const navBarButton = document.getElementById("nav-bar-button");
const navOverlay = document.getElementById("nav-overlay");

let buttonStateMenu = 1;

navBarButton.addEventListener('click', () => {
	if (buttonStateMenu === 0) {
		navBar.classList.add('side-bar-hide');
		buttonStateMenu = 1;
		navOverlay.style.display = 'none';
		console.log(buttonStateMenu);
	}
	else {
		navBar.classList.remove('side-bar-hide');
		buttonStateMenu = 0;
		navOverlay.style.display = 'block';
		console.log(buttonStateMenu);
	}
});

navOverlay.addEventListener('click', () => {
	navBar.classList.add('side-bar-hide');
	buttonStateMenu = 1;
	navOverlay.style.display = 'none';
});

//======================FORM=================================
