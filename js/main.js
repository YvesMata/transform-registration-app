console.log("Hello World!")

const navBar = document.getElementById("nav-bar");
const navBarButton = document.getElementById("nav-bar-button");

let buttonStateMenu = 0;

navBarButton.addEventListener('click', () => {
	if (buttonStateMenu === 0) {
		navBar.classList.add('side-bar-hide');
		buttonStateMenu = 1;
		console.log(buttonStateMenu);
	}
	else {
		navBar.classList.remove('side-bar-hide');
		buttonStateMenu = 0;
		console.log(buttonStateMenu);
	}
});