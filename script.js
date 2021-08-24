function getHistory() {
	return document.getElementById('history').innerText;
}
function printHistory(num) {
	document.getElementById("history").innerText = num;
}

function getOutput() {
	return document.getElementById('output').innerText;
}
function printOutput(num) {
	// if (num == "") {
	// 	//that  is why i used when no number is there so it show empty rather than 0.
	// 	document.getElementById('output').innerText = num;
	// } else {
	// 	document.getElementById('output').innerText = getFormattedNumber(num);
	// }
	document.getElementById('output').innerText = num;
}
// function getFormattedNumber(num) {
// 	let number = Number(num);
// 	let numberFormatted = new Intl.NumberFormat('en-us');
// 	value = numberFormatted.format(number);
// 	// 	value = number.toLocaleString('en');
// 	return value;

// }
/* getFomattedNumber() give a comma in no so we cannot manipulate it
for manupilation we use reverseFormattednumber() to remove comma from number.*/
// function reverseFormattedNumber(num) {
// 	return Number(num.replace(/,/g, ''));

// }
// printOutput('987654321');
// alert(reverseFormattedNumber(getOutput()));
let operators = document.getElementsByClassName('data-operator');
for (let i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', function () {
		// alert('Operators are : ' + this.id);
		if (this.id == "reset") {
			printOutput("");
			printHistory("");
		}
		else if (this.id == "del") {
			let output = getOutput();
			let history = getHistory();
			if (output == "") {
				history = history.slice(0, -1);
				printHistory(history);
			}
			output = output.slice(0, -1);
			printOutput(output);

		} else {
			let output = getOutput();
			let history = getHistory();
			if (output == "" && history != "") {
				// if(isNaN(history[history.length-1])){
				// 	history=history.slice(0,-1);
				// }
				history = history.slice(0, -1);
			}
			if (output != "" || history != "") {
				output = output == "" ? output : output;
				//console.log(output);
				history = history + output;
				console.log(history);
				if (this.id == "=") {
					let result = eval(history);
					if (Number.isFinite(result)) {
						// let numberFormat = result;
						// // let numberFormatted = new Intl.NumberFormat('en-us');
						// // printOutput(numberFormatted.format(numberFormat));
						// let numberFormatted = numberFormat.toLocaleString('en');
                        // printOutput(numberFormatted);
						printOutput(result);
						printHistory("");
					} else {
						
						result = " 😱 Error! Try another Valid Input. 😱";
						printOutput(result);
						printHistory("");
					}
				}
				else {
					history = history + this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
	});
}
let numbers = document.getElementsByClassName('data-number');
for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function () {
		//  alert('numbers are : ' +this.id);
		// let output = reverseFormattedNumber(getOutput());
		let output = getOutput();
		// if(output!=NaN){
		output = output + this.id;
		printOutput(output);
		// }
	});
}