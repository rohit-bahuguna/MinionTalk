const messageTextBox = document.getElementById('message');
const translateButton = document.getElementById('translate');
const translatedMessageTextBox = document.getElementById('translatedMessage');

let message = '';
let translatedMessage = '';

messageTextBox.addEventListener('input', e => {
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
				alert(result.error.message);
			}

			translatedMessageTextBox.innerText = result.contents.translated;
		});
	} else {
		alert('please provide a message');
	}
});
