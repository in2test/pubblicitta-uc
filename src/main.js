import "./style.css";

const systemTrigger = document.getElementById("SystemSwitch");
const darkTrigger = document.getElementById("DarkSwitch");
const lightTrigger = document.getElementById("LightSwitch");

systemTrigger.addEventListener("click", function () {
	localStorage.removeItem("theme");
	updateTheme(this);
});
darkTrigger.addEventListener("click", function () {
	localStorage.theme = "dark";
	updateTheme(this);
});
lightTrigger.addEventListener("click", function () {
	localStorage.theme = "light";
	updateTheme(this);
});
function updateTheme(trigger) {
	document.documentElement.classList.toggle(
		"dark",
		localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
	);
	systemTrigger.classList.remove("border-b");
	darkTrigger.classList.remove("border-b");
	lightTrigger.classList.remove("border-b");
	trigger.classList.toggle("border-b");
}
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (typeof localStorage.theme !== "undefined" && localStorage.theme !== null) {
	if (localStorage.theme === "dark") {
		updateTheme(darkTrigger);
	}
	if (localStorage.theme === "light") {
		updateTheme(lightTrigger);
	}
} else updateTheme(systemTrigger);
