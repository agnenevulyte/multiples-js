import findMultiples from './findMultiples';

const colourMultiples = (rows, clickedNum) => {
	// the number of the input field saved in an array
	let arrOfNums = [];
	for (let m = clickedNum; m <= rows; m++) {
		arrOfNums.push(m);
	}

	// array starting from clicked number
	const myArr = findMultiples(arrOfNums, clickedNum);
	let tds = document.querySelectorAll('.grid td');
	//iterate over each td
	for (let i = 0; i < rows; i++) {
		const number = tds[i].innerText;
		tds[i].classList.remove('multiples');
		myArr.forEach(function(value) {
			if (number === value.toString()) {
				//add the class 'multiples' to the element containing this number
				tds[i].classList.add('multiples');
				tds[clickedNum - 1].classList.remove('multiples');
			}
		});
	}
};

export default colourMultiples;
