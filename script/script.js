document.addEventListener("DOMContentLoaded", () => {
	// document.getElementById('dark-mode-toggle').addEventListener('click', () => {
	// 	const htmlTag = document.getElementsByTagName("body")[0];
	//
	//
	// 	htmlTag.style.filter = !htmlTag.style.filter || htmlTag.style.filter === 'none'
	// 		? 'invert(100%)'
	// 		: 'none';
	// })


	document.getElementById('dark-mode-toggle').addEventListener("change", () => {
		document.body.classList.toggle("dark")
	})
});