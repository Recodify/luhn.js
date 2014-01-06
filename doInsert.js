var calculateCheckDigit = function(number) {
	var sum = 0;
	var numberAsString = number.toString();	

	for (var i = numberAsString.length - 1; i >= 0 ; i--) {		
		var result = parseInt(numberAsString[i]);
		if (i % 2 == 0) {
			sum += result;
		}
		else {
			var sumOfDigits = parseInt(result) * 2;		
		    if (sumOfDigits < 10){
				sum += sumOfDigits;
			}
			else {
				var digitString = sumOfDigits.toString();
				sum += (parseInt(digitString[0]) + parseInt(digitString[1]));
			}
		}
	}
	
	var sumAsString = (sum * 9).toString();
	return sumAsString[sumAsString.length - 1];
}

module.exports = calculateCheckDigit;