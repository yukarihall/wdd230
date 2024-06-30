const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");
const body = document.querySelector("body");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		header.style.background = "#000";
		header.style.color = "#fff";
		body.style.background = "#000";
		body.style.color = "#fff";
		main.style.background = "#000";
		main.style.color = "#fff";
		footer.style.background = "#000";
		footer.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		header.style.background = "rgb(71, 180, 71)";
		header.style.color = "#000";
		body.style.background = "rgb(71, 180, 71)";
		body.style.color = "#000";
		main.style.background = "rgb(71, 180, 71)";
		main.style.color = "#000";
		footer.style.background = "rgb(71, 180, 71)";
		footer.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});