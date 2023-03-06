var cubeChecker = function (volume, side) {
	if (volume <= 0 || side <= 0)
		return false;
	else if (volume <= side && volume !== 1 && side !== 1)
		return false;
	else if (Math.cbrt(volume) === side)
		return true;
	else
		return false;
};


console.log(cubeChecker(56.3, 1));
console.log(cubeChecker(-1, 2));
console.log(cubeChecker(8, 3));
console.log(cubeChecker(8, 2));
console.log(cubeChecker(-8, -2));
console.log(cubeChecker(0, 0));
console.log(cubeChecker(1, 5));
console.log(cubeChecker(125, 5));
console.log(cubeChecker(125, -5));
console.log(cubeChecker(5819, 23));
console.log(cubeChecker(1, 1));
