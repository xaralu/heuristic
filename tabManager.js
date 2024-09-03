import { specialNamesToggles, specialNames } from "./main.js";


export function tabManager() {
	for (var i = 0; i < specialNamesToggles.length; i++) {
		let visibilityToggle = specialNamesToggles[i]
		let ele = document.getElementById(specialNames[i])
		if (visibilityToggle) {
			ele.style.display = 'flex'
		} else {
			ele.style.display = 'none'
		}
	}
}