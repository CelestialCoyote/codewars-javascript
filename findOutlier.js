const array1 = [2, 4, 0, 100, 4, 11, 2602, 36];
const array2 = [160, 3, 1719, 19, 11, 13, -21];
const array3 = [0, 1, 2];
const array4 = [1, 2, 3];
const array5 = [2, 6, 8, 10, 3];
const array6 = [0, 0, 3, 0, 0];
const array7 = [1, 1, 0, 1, 1];

function findOutlier(integers) {
	const evens = integers.filter(num => num %2 === 0 || num === 0);
	const odds  = integers.filter(num => num %2 !== 0 || num === 1);
	let outlier;

	if (evens.length < odds.length) {
		outlier = integers.filter(num => num %2 === 0);
	} else {
		outlier = integers.filter(num => num %2 !== 0);
	}

	console.log(`evens = ${evens.length}`);
	console.log(`odds =  ${odds.length}`);
	console.log(outlier[0]);
};

findOutlier(array1);
findOutlier(array2);
findOutlier(array3);
findOutlier(array4);
findOutlier(array5);
findOutlier(array6);
findOutlier(array7);
