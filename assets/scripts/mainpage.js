var aside = document.getElementsByTagName("aside")[0];
var menu = document.getElementsByClassName("menu")[0];
var arrowButton = document.getElementsByClassName("arrow-icon")[0];
var menuButton = document.getElementsByClassName("sandwich-icon")[0];

function resizeContactList () {
	aside.classList.toggle("closed-state");

	if (menu.classList.contains("showed-menu")) {
		menu.classList.remove("showed-menu");
	};
}

arrowButton.addEventListener("click", resizeContactList);

function toggleMenu () {
	menu.classList.toggle("showed-menu");
}

menuButton.addEventListener("click", toggleMenu);



