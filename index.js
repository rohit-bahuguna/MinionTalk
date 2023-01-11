const messageTextBox = document.getElementById('message');
const translateButton = document.getElementById('translate');
const translatedMessageTextBox = document.getElementById('translatedMessage');
const error_message = document.getElementById('error_message');
let message = '';
let translatedMessage = '';

messageTextBox.addEventListener('input', e => {
	error_message.innerText = '';
	message = e.target.value;
	translatedMessageTextBox.innerText = '';
});

const translateMessage = () => {};

translateButton.addEventListener('click', () => {
	if (message !== '') {
		const url = `https://api.funtranslations.com/translate/minion.json?text=${message}`;

		fetch(url).then(res => res.json()).then(result => {
			console.log(result.contents);
			if (result.contents === undefined) {
				error_message.innerText =
					'You can only translate 5 times in an hour please try after some time';
			}

			translatedMessageTextBox.innerText = result.contents.translated;
		});
	} else {
		alert('please provide a message');
	}
});
