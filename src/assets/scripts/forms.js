	var formsContent = document.getElementsByClassName("forms-content")[0];
	var tabHeadings = formsContent.getElementsByTagName("li");
	var logInForm = formsContent.getElementsByClassName("log-in-form")[0];
	var signInForm = formsContent.getElementsByClassName("sign-in-form")[0];


	function changeTab (enablingHeading, disablingHeading, showingTab, hidingTab) {
		if (!enablingHeading.classList.contains("tab--active")){
			enablingHeading.classList.add("tab--active");
		}
		if(disablingHeading.classList.contains("tab--active")){
		disablingHeading.classList.remove("tab--active");
	}

		showingTab.style.display = "flex";
		hidingTab.style.display = "none";
	};
