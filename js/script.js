var test = document.createElement('div');
document.body.appendChild(test);
test.innerHTML= '<h1>Тест по программированию</h1>';


for (var i = 1; i < 4; i++) {
	var testQuestion = document.createElement('ul');
	test.appendChild(testQuestion);
	testQuestion.innerHTML = i + '. Вопрос по тесту № ' + i;

		for (var j = 1; j < 4; j++) {
			var testAnswer = document.createElement('label');//создаем лейбл
			testAnswer.innerHTML = ' <input type="checkbox"> Вариант ответа № ' + j;//добавляем текст в лейбл
			testQuestion.appendChild(testAnswer); //добавляем лейбл в уль
			}
}


var button = document.createElement('button');
button.innerHTML = 'Проверить мои результаты';
test.appendChild(button);
