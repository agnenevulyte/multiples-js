import drawClickableGrid from '../src/drawClickableGrid';
import findMultiples from '../src/findMultiples';
import clickedOnceOrTwice from '../src/clickedOnceOrTwice';

describe('Draw the grid', () => {
	const callback = () => {
		console.log('callback');
	};

	it('the grid is an object', () => {
		expect(typeof drawClickableGrid(20, callback())).toBe('object');
	});

	it('If the input is 20, then draw the grid out of 20', () => {
		expect(drawClickableGrid(20, callback()).rows.length).toEqual(20);
	});

	it('If the input is 144, then draw the grid out of 144', () => {
		expect(drawClickableGrid(144, callback()).rows.length).toEqual(144);
	});
});

describe('multiples of numbers', () => {
	it('multiples of 10 in the table of 20 rows', () => {
		let myArr = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
		let clickedNum = 10;
		expect(findMultiples(myArr, clickedNum)).toEqual([ 10, 20 ]);
	});

	it('multiples of 2 in the table of 20 rows', () => {
		let myArr = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
		let clickedNum = 2;
		expect(findMultiples(myArr, clickedNum)).toEqual([ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]);
	});
});
