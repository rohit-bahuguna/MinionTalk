const messageTextBox = document.getElementById('message');
const translateButton = document.getElementById('translate');
const translatedMessageTextBox = document.getElementById('translatedMessage');

let message;
let translatedMessage;

messageTextBox.addEventListener('change', e => {
	message = e.target.value;
});

const translateMessage = async message => {
	const url = `https://api.funtranslations.com/translate/minion.json?text=${message}`;

	try {
		const res = await fetch(url);
		return res;
	} catch (err) {
		console.log(err);
	}
};

translateButton.addEventListener('click', async () => {
	if (message !== undefined) {
		translatedMessage = await translateMessage(message);
		if (translateMessage.status === 400) {
			translatedMessageTextBox.innerText = translatedMessage;
		} else if (translatedMessage.status === 429) {
			alert('Too many attempt,  try after some time');
		} else {
			alert('something went wrong');
		}
	} else {
		alert('please provide a message');
	}
});
