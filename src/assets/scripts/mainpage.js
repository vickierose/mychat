var aside = document.getElementsByTagName("aside")[0];
var menu = document.getElementsByClassName("menu")[0];
var arrowButton = document.getElementsByClassName("arrow-icon")[0];
var menuButton = document.getElementsByClassName("sandwich-icon")[0];

function resizeContactList () {
	aside.classList.toggle("aside--closed");

	if (menu.classList.contains("aside__menu--showed")) {
		menu.classList.remove("aside__menu--showed");
	};
}

arrowButton.addEventListener("click", resizeContactList);

function toggleMenu () {
	menu.classList.toggle("aside__menu--showed");
}

menuButton.addEventListener("click", toggleMenu);



