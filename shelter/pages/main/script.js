// console.log('Проверка верстки +7\n Верстка соответствует макету +35\n Требования css +6\n Интерактивность элементов +12\n Итого: по странице main 60\n \n Проверка перстки (pets) +7\n Верстка соответствует макету +15\n Требования css +4\n Интерактивность элементов +14\n Итого: по странице pets 40\n\n Итого: 100')

var runLengthEncoding = function(str) {
	let obj = {}
	const arr = [...str]
	const res = [];
	let acc = 0;
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (res.length === 0) {
			res.push(element);
			acc = acc + 1;
		} else {
			if (arr[i] === arr[i - 1]) {
				acc = acc + 1;
			}
		}
	}
	console.log(acc)
}

runLengthEncoding("abc");

runLengthEncoding("ccaaabbb"); 
