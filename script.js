'use strict';

// btn sel
const btn = document.querySelectorAll('.btn');
const btnFahrenheit = document.querySelector('.btn-fahrenheit');
const btnYugioh = document.querySelector('.btn-yugioh');
const closeBtnFahrenheit = document.querySelector('.close-modal-fahrenheit');
const closeBtnYugioh = document.querySelector('.close-modal-yugioh');

// inputs
const inputFahrenheit = document.getElementById('fahrenheit');
const inputYugioh = document.getElementById('yugioh');

// modal sel
const modal = document.querySelector('.modal');
const modalFahrenheit = document.querySelector('.modal-fahrenheit');
const modalYugioh = document.querySelector('.modal-yugioh');

// modal text
const modalTextFahrenheit = document.querySelector('.modal-text-fahrenheit');
const modalTextYugioh = document.querySelector('.modal-text-yugioh');

// overlay
const overlay = document.querySelector('.overlay');

// close modal
const closeModalFahrenheit = function () {
	modalFahrenheit.classList.add('hidden');
	overlay.classList.add('hidden');
};

const closeModalYugioh = function () {
	modalYugioh.classList.add('hidden');
	overlay.classList.add('hidden');
};

// open modal
const openModalFahrenheit = function () {
	modalFahrenheit.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const openModalYugioh = function () {
	modalYugioh.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

// fahrenheit to celsius conversion
const convertFahrToCelsius = function (fahrenheit) {
	fahrenheit = inputFahrenheit.value;
	if (isNaN(fahrenheit) == false) {
		fahrenheit = Number(inputFahrenheit.value);
		const x = fahrenheit - 32;
		const y = 5 / 9;
		const z = x * y;
		return z.toFixed(4) + '°C';
	} else {
		if (typeof fahrenheit == 'string') {
			return `${fahrenheit} is not a valid number but a ${'string'}`;
		} else {
			return `${fahrenheit} is not a valid number but a ${'boolean'}`;
		}
	}
	// if (typeof fahrenheit == 'number') {
	// 	const x = fahrenheit - 32;
	// 	const y = 5 / 9;
	// 	const z = x * y;
	// 	return z.toFixed(4) + '°C';
	// } else if (typeof fahrenheit == 'string') {
	// 	return `${fahrenheit} is not a valid number but a ${'string'}`;
	// } else {
	// 	return `${fahrenheit} is not a valid number but a ${'boolean'}`;
	// }
};

// display result for fahrenheit conversion
const resultFahrenheit = function () {
	modalTextFahrenheit.textContent = convertFahrToCelsius();
	inputFahrenheit.value = '';

	openModalFahrenheit();
	overlay.addEventListener('click', closeModalFahrenheit);
	closeBtnFahrenheit.addEventListener('click', closeModalFahrenheit);
};

// yugioh func
const checkYuGiOh = function (n) {
	n = inputYugioh.value;
	if (isNaN(n) == false) {
		n = Number(inputYugioh.value);

		const arr1 = Array.from({ length: n }, (_, i) => i + 1);
		const arr2 = [];

		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] % 2 === 0) {
				arr2[i] = `Yu`;
			}
			if (arr1[i] % 3 === 0) {
				arr2[i] = arr2[i] ? `${arr2[i]}-Gi` : 'Gi';
			}
			if (arr1[i] % 5 === 0) {
				arr2[i] = arr2[i] ? `${arr2[i]}-Oh` : 'Oh';
			}
			if (!arr2[i]) {
				arr2[i] = arr1[i];
			}
		}

		return arr2;
	} else {
		if (typeof n == 'string') {
			return `${n} is not a valid number but a ${'string'}`;
		} else {
			return `${n} is not a valid number but a ${'boolean'}`;
		}
	}
};

const resultYugioh = function () {
	modalTextYugioh.textContent = checkYuGiOh();
	inputYugioh.value = '';

	openModalYugioh();
	overlay.addEventListener('click', closeModalYugioh);
	closeBtnYugioh.addEventListener('click', closeModalYugioh);
};

// condition
const init = (function () {
	for (let i = 0; i < btn.length; i++) {
		if (btn[i].classList.contains('btn-fahrenheit')) {
			convertFahrToCelsius();
			btn[i].addEventListener('click', function () {
				resultFahrenheit();
			});
		}

		if (btn[i].classList.contains('btn-yugioh')) {
			// call yugioh func
			checkYuGiOh();
			btn[i].addEventListener('click', function () {
				resultYugioh();
			});
		}
	}
})();

// Execute function when the user releases a key on the keyboard
inputFahrenheit.addEventListener('keyup', function (event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.key === 'Enter') {
		// Cancel the default action, if needed
		event.preventDefault();

		convertFahrToCelsius();
		resultFahrenheit();
	}
});

// Execute function when the user releases a key on the keyboard
inputYugioh.addEventListener('keyup', function (event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.key === 'Enter') {
		// Cancel the default action, if needed
		event.preventDefault();

		checkYuGiOh();
		resultYugioh();
	}
});

// close modal with esc key
document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape' && !modalFahrenheit.classList.contains('hidden')) {
		closeModalFahrenheit();
	}
	if (event.key === 'Escape' && !modalYugioh.classList.contains('hidden')) {
		closeModalYugioh();
	}
});
