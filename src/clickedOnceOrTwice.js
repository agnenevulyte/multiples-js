import colourMultiples from './colourMultiples';

let lastClicked;

const clickedOnceOrTwice = (rows, clickedNum, el) => {
	// add class name on the clicked element
	el.className = 'clicked';
	// if the lastClicked element is the same as the current clicked, remove the class
	if (lastClicked) {
		lastClicked.className = '';
	}
	lastClicked = el;

	// handling multiples
	// if clicked element, call colourMultiples
	// if clicked on the same element twice, remove class 'multiples' and so remove the colour
	if (el.classList.contains('clicked')) {
		colourMultiples(rows, clickedNum);
	} else {
		const tds = document.querySelectorAll('.grid td');
		for (let i = 0; i < rows; i++) {
			tds[i].classList.remove('multiples');
		}
	}
};

export default clickedOnceOrTwice;
