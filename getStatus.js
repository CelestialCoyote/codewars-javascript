// From 8kyu Unexpected parsing challenge.

function getStatus(isBusy) {
	var msg = (isBusy ? "busy" : "available");
	
	return { status: msg};
};


console.log(getStatus(false));