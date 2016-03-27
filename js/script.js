
// СОЗДАЕТСЯ УСЛОВНАЯ БАЗА ВОПРОСОВ И ВАРИАНТОВ ОТВЕТОВ (двумерный массив)

var QBase = [];

QBase.length=3;

	for (var i=0; i<QBase.length; i++ ){
		QBase[i]=[];
		QBase[i].length=3;
		QBase[i][0] = 'Вопрос № ' + (i+1);
			for (var k=1; k<QBase[i].length; k++){
				QBase[i][k] = 'Вариант ответа № ' + k;
			}
	}



// ОБЪЕКТ С МЕТОДАМИ ДЛЯ ПОСТРОЕНИЯ ТЕСТА


var test = {

	ancestor:document.body,
	wrapper:'',
	header:'',
	question:'',
	submit:'',
	all:'',


	CreateWrapper:function(){
		this.wrapper=document.createElement('form');
		this.wrapper.classList.add('wrapper');
		this.ancestor.appendChild(this.wrapper);
	},
	
	CreateHeader:function(){
		this.header=document.createElement('h1');
		this.header.classList.add('header');
		this.header.innerHTML = 'Тест по программированию';
		this.wrapper.appendChild(this.header);
	},

	CreateQuestionBlock:function(){
		for (var i = 0; i<QBase.length; i++){
			this.question=document.createElement('ul');
			this.question.classList.add('questionBlock');
			this.question.innerHTML = (i+1) + '. ' + QBase[i][0];
			this.wrapper.appendChild(this.question);
				for (k=1; k<QBase[i].length; k++){
					this.answersVariants=document.createElement('li');
					this.answer=document.createElement('label');
					this.answer.innerHTML = '<input type="checkbox" name="answerVariant#' + (i + 1) + '.' + k + '">' + QBase[i][k] ;
					this.answersVariants.appendChild(this.answer);
					this.question.appendChild(this.answersVariants);
				}
			}
	},

	CreateSubmitButton:function(){
		this.submit=document.createElement('p');
		this.submit.innerHTML = '<input class="submitButton" type="submit" value="Проверить мои результаты">';
		this.wrapper.appendChild(this.submit);
	},

	CreateAll:function(){
		this.CreateWrapper();
		this.CreateHeader();
		this.CreateQuestionBlock();
		this.CreateSubmitButton();
	}

}

test.CreateAll();
