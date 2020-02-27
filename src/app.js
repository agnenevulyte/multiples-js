// source goes here
import drawClickableGrid from './drawClickableGrid';
import clickedOnceOrTwice from './clickedOnceOrTwice';

const app = function() {
	// get the value from the result, and add as many rows
	const input = document.getElementById('myNumber');
	input.addEventListener(
		'change',
		(event) => {
			const result = document.getElementById('result');
			result.textContent = event.target.value;
			let rows = result.textContent;

			// draw the table
			const grid = drawClickableGrid(rows, function(el, i) {
				const clickedNum = i;
				clickedOnceOrTwice(rows, clickedNum, el);
			});

			// render the table in the front end
			document.body.appendChild(grid);
		},
		false
	);
};

export default app;
