const serviceList = document.querySelector(".service");
const serviceSection = document.querySelectorAll(".service section");
const hamBtn = document.querySelector(".nav-list");
const hamMenu = document.querySelector(".nav-list-ham");

const openMenu = (e) => {
	if (e.target.matches(".service-header")) {
		e.target.classList.toggle("active");
		e.target.nextElementSibling.classList.toggle("open");
		serviceSection.forEach((element) => {
			if (element != e.target && element != e.target.nextElementSibling) {
				element.classList.remove("open");
				element.classList.remove("active");
			}
		});
	} else {
		serviceSection.forEach((element) => {
			element.classList.remove("open");
			element.classList.remove("active");
		});
	}
};

serviceList.addEventListener("click", openMenu);
hamBtn.addEventListener("click", () => {
	hamMenu.classList.toggle("active");
});
document.addEventListener("click", (e) => {
	if (e.target.matches(".link-label")) {
		hamMenu.classList.remove("active");
	}
});
