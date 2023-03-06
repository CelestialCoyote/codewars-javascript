// From 8kyu Unexpected parsing challenge.

function getStatus(isBusy) {
	var msg = (isBusy ? "busy" : "available");

	let object = {
		status: msg
	};
	
	return object;
};


console.log(getStatus(true));