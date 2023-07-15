function decimalToBinary(num) {
	let ans = "";
	while(num != 0) {
		let bit = num & 1;
		ans += bit;
		num = num >> 1;
	}
	let result = "";
	for(let i=ans.length-1; i>=0; i--) {
	    result += ans.charAt(i);
	}
	return result;
}

window.decimalToBinary = decimalToBinary;
