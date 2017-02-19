	var formsContent = document.getElementsByClassName("forms-content")[0];
	var tabHeadings = formsContent.getElementsByTagName("li");
	var logInForm = formsContent.getElementsByClassName("log-in-form")[0];
	var signInForm = formsContent.getElementsByClassName("sign-in-form")[0];


	function changeTab (enablingHeading, disablingHeading, showingTab, hidingTab) {
		if (!enablingHeading.classList.contains("active-tab")){
			enablingHeading.classList.add("active-tab");
		}
		if(disablingHeading.classList.contains("active-tab")){
		disablingHeading.classList.remove("active-tab");
	}

		showingTab.style.display = "flex";
		hidingTab.style.display = "none";
	};
