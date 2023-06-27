// import - react modules

// import - react hooks

// import - custom modules

// import - custom hooks

// import - components

// functions - data complete test
export function checkDataComplete( data) {
	if (Array.isArray(data)) {
		for (let item of data) {
			if (!checkDataComplete(item)) {
				return false;
			}
		}
	} else if (typeof data === 'object' && data !== null) {
		for (let key in data) {
			if (!checkDataComplete(data[key])) {
				return false;
			}
		}
	} else if (data === undefined) {
		return false;
	}

	return true;
}
