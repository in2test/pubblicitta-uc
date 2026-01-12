let darkmode = localStorage.getItem("darkMode");
const systemTrigger = document.getElementById("SystemSwitch");
const darkTrigger = document.getElementById("DarkSwitch");
const lightTrigger = document.getElementById("LightSwitch");
function updateTheme(element, theme) {
	systemTrigger.classList.remove("border-b");
	darkTrigger.classList.remove("border-b");
	lightTrigger.classList.remove("border-b");
	let classList = document.documentElement.classList;
	element.classList.add("border-b");
	classList.remove("light", "dark", "system");
	classList.add(theme);
	localStorage.setItem("darkMode", theme);
}

if (darkmode === null) updateTheme(systemTrigger, "system");
if (darkmode === "light") updateTheme(lightTrigger, "light");
if (darkmode === "dark") updateTheme(darkTrigger, "dark");
if (darkmode === "system") updateTheme(systemTrigger, "system");

systemTrigger.addEventListener("click", function () {
	updateTheme(this, "system");
});
darkTrigger.addEventListener("click", function () {
	updateTheme(this, "dark");
});
lightTrigger.addEventListener("click", function () {
	updateTheme(this, "light");
});
