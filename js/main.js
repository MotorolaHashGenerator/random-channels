function getInputValue(input_id) {
	const element = document.getElementById(input_id);
	const value = parseInt(element.value);
	const max = parseInt(element.getAttribute('max'));
	if (value > max)
		return max;

	const min = parseInt(element.getAttribute('min'));
	if (value < min)
		return min;

	return value
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandElement(elements) {
	const index = getRandomNumber(0, elements.length);

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

function generateChanel() {
	const key_id_element = document.getElementById('key_id');
	const key_id_min = parseInt(key_id_element.getAttribute('min'));
	const key_id_max = parseInt(key_id_element.getAttribute('max'));
	key_id_element.value = getRandomNumber(key_id_min, key_id_max);

	const enhanzed_key_element = document.getElementById('enhanzed_key');
	const enhanzed_key_maxlength = parseInt(enhanzed_key_element.getAttribute('maxlength'));
	enhanzed_key_element.value = generateHexadecimal(enhanzed_key_maxlength)

	const symmetric_key_element = document.getElementById('symmetric_key');
	const symmetric_key_maxlength = parseInt(symmetric_key_element.getAttribute('maxlength'));
	symmetric_key_element.value = generateHexadecimal(symmetric_key_maxlength)

	const ras_id_element = document.getElementById('ras_id');
	const ras_id_maxlength = parseInt(ras_id_element.getAttribute('maxlength'));
	ras_id_element.value = generateRAS(ras_id_maxlength)

	const call_id_element = document.getElementById('call_id');
	const call_id_min = parseInt(call_id_element.getAttribute('min'));
	const call_id_max = parseInt(call_id_element.getAttribute('max'));
	call_id_element.value = getRandomNumber(call_id_min, call_id_max);

	const color_code_element = document.getElementById('color_code');
	const color_code_min = parseInt(color_code_element.getAttribute('min'));
	const color_code_max = parseInt(color_code_element.getAttribute('max'));
	color_code_element.value = getRandomNumber(color_code_min, color_code_max);

	const repeter_time_slot_element = document.getElementById('repeter_time_slot');
	const repeter_time_slot_min = parseInt(repeter_time_slot_element.getAttribute('min'));
	const repeter_time_slot_max = parseInt(repeter_time_slot_element.getAttribute('max'));
	repeter_time_slot_element.value = getRandomNumber(repeter_time_slot_min, repeter_time_slot_max);

	const random_number = getRandElement([9, 99, 99])

	const tx_frequency_element = document.getElementById('tx_frequency');
	const tx_frequency_element_min = parseInt(tx_frequency_element.getAttribute('data-min'));
	const tx_frequency_element_max = parseInt(tx_frequency_element.getAttribute('data-max'));
	tx_frequency_element.value = getRandomNumber(tx_frequency_element_min, tx_frequency_element_max);
	tx_frequency_element.value += "."
	tx_frequency_element.value += getRandomNumber(0, random_number)

	const rx_frequency_element = document.getElementById('rx_frequency');
	const rx_frequency_element_min = parseInt(rx_frequency_element.getAttribute('data-min'));
	const rx_frequency_element_max = parseInt(rx_frequency_element.getAttribute('data-max'));
	rx_frequency_element.value = getRandomNumber(rx_frequency_element_min, rx_frequency_element_max);
	rx_frequency_element.value += "."
	rx_frequency_element.value += getRandomNumber(0, random_number)
}
