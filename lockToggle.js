import { tabManager } from './tabManager.js'
import { disableToggle, specialNamesToggles, tempLockPanels, modifyTemp } from "./main.js";


export function lockToggle() {
    console.log("lock toggle: templock panels", tempLockPanels)
	//here they are all set to flase and pushed to the array
	if (disableToggle) {
		for (var i = 0; i < specialNamesToggles.length; i++) {
			if (specialNamesToggles[i]) {
				tempLockPanels.push(i)
				specialNamesToggles[i] = false
			}
			tabManager()
		}
	} else {
		console.log('TRYING TO TURN THEM OFF')
		console.log(tempLockPanels)
		for (var i = 0; i < specialNamesToggles.length; i++) {
			//set visiblity to invisible
			//maybe this if statement is whats wrong
			// console.log("prob w if statement: ", ((tempLockPanels.indexOf(specialNamesToggles[i])) !== -1))
			//needs to convert to string somewhere.
			// if it converts it to a string will it push the variable name or the value of the variable
			//this should be printed twice every time lock controls exited.
			//this is always gonna come back to me. i think i need to push the index of the thing to temp lock and then use that index to change the ones in this if statement
			if (tempLockPanels.indexOf(i) !== -1) {
				specialNamesToggles[i] = true
				//it isnt actually setting them. it isnt actually modifying the special names toggles.
			}
		}
		console.log('special: ', specialNamesToggles)
		console.log('temp: ', tempLockPanels)
		modifyTemp( [] )
		//templock panels is ampty
		tabManager()
	}
}