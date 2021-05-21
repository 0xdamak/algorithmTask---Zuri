'use strict';

// btn sel
const btn = document.querySelectorAll('.btn');
const btnFahrenheit = document.querySelector('.btn-fahrenheit');
const btnYugioh = document.querySelector('.btn-yugioh');
const closeBtnFahrenheit = document.querySelector('.close-modal-fahrenheit');
const closeBtnYugioh = document.querySelector('.close-modal-yugioh');

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

for (let i = 0; i < btn.length; i++) {
	if (btn[i].classList.contains('btn-fahrenheit')) {
		// fahrenheit to celsius conversion
		const convertFahrToCelsius = function (fahrenheit) {
			fahrenheit = Number(inputFahrenheit.value);
			if (typeof fahrenheit == 'number') {
				const x = fahrenheit - 32;
				const y = 5 / 9;
				const z = x * y;
				return z.toFixed(4) + '°C';
			} else if (typeof fahrenheit == 'string') {
				return `${fahrenheit} is not a valid number but a ${'string'}`;
			} else {
				return `${fahrenheit} is not a valid number but a ${'boolean'}`;
			}
		};

		btn[i].addEventListener('click', function () {
			console.log(convertFahrToCelsius());
			modalTextFahrenheit.textContent = convertFahrToCelsius();

			openModalFahrenheit();
			overlay.addEventListener('click', closeModalFahrenheit);
			closeBtnFahrenheit.addEventListener('click', closeModalFahrenheit);
		});
	}

	if (btn[i].classList.contains('btn-yugioh')) {
		// yugioh
		const checkYuGiOh = function (n) {
			n = Number(inputYugioh.value);
			if (typeof n == 'number') {
				const arr1 = Array.from({ length: n }, (_, i) => i + 1);
				const arr2 = [];

				for (let i = 0; i < arr1.length; i++) {
					if (arr1[i] % 2 === 0) {
						// arr2.push("-Yu");
						arr2[i] = `Yu`;
					}
					if (arr1[i] % 3 === 0) {
						// arr2.push('-Gi');
						arr2[i] = arr2[i] ? `${arr2[i]}-Gi` : 'Gi';
					}
					if (arr1[i] % 5 === 0) {
						// arr2.push('-Oh');
						arr2[i] = arr2[i] ? `${arr2[i]}-Oh` : 'Oh';
					}
					if (!arr2[i]) {
						arr2[i] = arr1[i];
					}
				}
				arr1.map(val => {});

				return arr2;
			} else if (typeof n == 'string') {
				return `${n} is not a valid number but a ${'string'}`;
			} else {
				return `${n} is not a valid number but a ${'boolean'}`;
			}
		};
		btn[i].addEventListener('click', function () {
			modalTextYugioh.textContent = checkYuGiOh();
			openModalYugioh();
			overlay.addEventListener('click', closeModalYugioh);
			closeBtnYugioh.addEventListener('click', closeModalYugioh);
		});
	}
}

// close modal with esc key
document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape' && !modalFahrenheit.classList.contains('hidden')) {
		closeModalFahrenheit();
	}
	if (event.key === 'Escape' && !modalYugioh.classList.contains('hidden')) {
		closeModalYugioh();
	}
});
