document.addEventListener("DOMContentLoaded", () => {

	document.getElementById('dark-mode-toggle').addEventListener("change", () => {
		document.body.classList.toggle("dark")
	})
});