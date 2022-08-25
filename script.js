// const btnCriminal=document.querySelector('.service-criminal')
// const bodyCriminal=document.querySelector('#service .service-body')

// const openMenu=(e)=>{
// console.log(e.target)
// btnCriminal.classList.toggle('active')
// bodyCriminal.classList.toggle('open')
// }

// btnCriminal.addEventListener('click',openMenu)

const serviceList = document.querySelector(".service");
const serviceSection = document.querySelectorAll(".service section");
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
	}
};

serviceList.addEventListener("click", openMenu);
