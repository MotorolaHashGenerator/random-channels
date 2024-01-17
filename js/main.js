function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandElement(elements) {
	const index = getRandomNumber(0, elements.length - 1);

	return elements[index];
}

function getRandHash(size, elements) {
	let hash = '';

	for (let i = 0; i < size; i++) {
		hash += getRandElement(elements);
	}

	return hash;
}

function generateHexadecimal(size) {
	const elements = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
	return getRandHash(size, elements);
}

function generateRAS(size) {
	const elements = [
		'-', '_', '$', '#', 'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 
		'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 
		'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 
		'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
	];
  
	return getRandHash(size, elements);
}

function setRandomNumber(element_id) {
	const element = document.getElementById(element_id);
	const min = parseInt(element.getAttribute('min'));
	const max = parseInt(element.getAttribute('max'));
	element.value = getRandomNumber(min, max);
}

function setRadomHexadecimal(element_id) {
	const element = document.getElementById(element_id);
	const maxlength = parseInt(element.getAttribute('maxlength'));
	element.value = generateHexadecimal(maxlength)
}

function setRadomRAS(element_id) {
	const element = document.getElementById(element_id);
	const maxlength = parseInt(element.getAttribute('maxlength'));
	element.value = generateRAS(maxlength)
}

function setRandomOption(element_id) {
	const element = document.getElementById(element_id);
	let values = [];
	for (const option of element.getElementsByTagName('option')) {
		values.push(option.value)
	}
	element.value = getRandElement(values)
}

function setRandomFrequency(element_id) {
	const random_number = getRandElement([9, 99, 999])
	const element = document.getElementById(element_id);
	const min = parseInt(element.getAttribute('data-min'));
	const max = parseInt(element.getAttribute('data-max'));
	element.value = getRandomNumber(min, max);
	element.value += "."
	element.value += getRandomNumber(0, random_number)
}

function dublicateValue(from_element_id, to_element_id) {
	const from_element = document.getElementById(from_element_id);
	const to_element = document.getElementById(to_element_id);
	to_element.value = from_element.value
}

function generateSimplexChanel() {
	setRandomNumber('first_key_id')
	setRadomHexadecimal('first_enhanzed_key')
	setRadomHexadecimal('first_symmetric_key')
	setRandomNumber('first_call_id')
	setRandomNumber('first_color_code')
	setRandomFrequency('first_rx_frequency')
	dublicateValue('first_rx_frequency', 'first_tx_frequency')
}

function generateRepeatedChanel() {
	setRandomNumber('second_key_id')
	setRadomHexadecimal('second_enhanzed_key')
	setRadomHexadecimal('second_symmetric_key')
	setRadomRAS('ras_id')
	setRandomNumber('second_call_id')
	setRandomNumber('second_color_code')
	setRandomOption('repeter_time_slot')
	setRandomFrequency('second_rx_frequency')
	setRandomFrequency('second_tx_frequency')
}
