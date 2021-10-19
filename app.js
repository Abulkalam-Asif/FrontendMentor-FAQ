const questionDivs = Array.from(document.querySelectorAll('.questionDiv'));

const answers = Array.from(document.querySelectorAll('.answer'));

const arrowIcons = Array.from(document.querySelectorAll('.arrow_icon'));

console.log(questionDivs, answers);

questionDivs.forEach(questionDiv => {
	questionDiv.addEventListener('click', () => {
		let correspondingAnswer = answers[questionDivs.indexOf(questionDiv)];
		let correspondingIcon = arrowIcons[questionDivs.indexOf(questionDiv)];

		if(correspondingAnswer.classList.contains('answerHidden')) {
			correspondingAnswer.classList.remove("answerHidden");
			correspondingAnswer.classList.add("answerVisible");

			correspondingIcon.classList.remove('arrowDown');
			correspondingIcon.classList.add('arrowUp');
		} else {
			correspondingAnswer.classList.remove("answerVisible");
			correspondingAnswer.classList.add("answerHidden");

			correspondingIcon.classList.remove('arrowUp');
			correspondingIcon.classList.add('arrowDown');
		}
		
	});
});