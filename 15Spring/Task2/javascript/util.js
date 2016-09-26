	function $(id) {
		    return document.getElementById(id);
	}


	function renderResult(result) {
		   $("result").innerHTML = result;
	}

	// 判断arr是否为一个数组，返回一个bool值
	function isArray(arr) {
	    // your implement
	    return Array.isArray(arr);
	}

	// 判断fn是否为一个函数，返回一个bool值
	function isFunction(fn) {
	    // your implement
	    if(typeof(fn)=="function") return true;
	    else return false;
	}

	var srcObj = {
	    a: 1,
	    b: {
	        b1: ["hello", "hi"],
	        b2: "JavaScript"
	    }
	};

	console.log(typeof(srcObj.b));

	// console.log(isArray([1,2,3,4]));
	// console.log(isFunction([1,2,3,4]));
	// console.log(isArray(isArray));
	// console.log(isFunction(isArray));