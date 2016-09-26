	function $(id) {
		    return document.getElementById(id);
	}


	function renderResult(result) {
		   $("result").innerHTML = result;
	}

	console.log(isArray([12,34,56,78]));
	console.log(isFunction(isArray));