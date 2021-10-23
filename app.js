let questionBtns = Array.from(document.querySelectorAll('.questionBtn'));
let answerDivs = document.querySelectorAll('.answerDiv');
let answers = document.querySelectorAll('.answer');
let arrowIcons = document.querySelectorAll('.arrowIcon');

questionBtns.forEach((questionBtn, index) => {
	questionBtn.addEventListener('click', () => {
		let clickedButtonIndex = questionBtns.indexOf(questionBtn);
		answerDivs.forEach((answerDiv, index) => {
			if(answerDiv.classList.contains('opened')) {
				answerDiv.classList.remove('opened');
				answerDiv.classList.add('closed');
				answerDivs[index].style.height = '0';
				arrowIcons[index].style.transform = 'rotateZ(0deg)';
				questionBtns[index].style.fontWeight = '400';
			} else {
				arrowIcons[clickedButtonIndex].style.transform = 'rotateZ(180deg)';
				questionBtns[clickedButtonIndex].style.fontWeight = '700';
			}
		});

		if(answerDivs[index].classList.contains('opened')) {
			answerDivs[index].classList.add('closed');
			answerDivs[index].classList.remove('opened');
			answerDivs[index].style.height = '0';
			questionBtns[index].style.fontWeight = '400';
			arrowIcons[index].style.transform = 'rotateZ(0deg)';
		} else {
			answerDivs[index].classList.add('opened');
			answerDivs[index].classList.remove('closed');
			let height = `${answers[index].offsetHeight}px`;
			questionBtns[index].style.fontWeight = '700';
			answerDivs[index].style.height = height;
			arrowIcons[index].style.transform = 'rotateZ(180deg)';
		}
	});
});