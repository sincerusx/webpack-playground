export var secret = {

	visible: false,
	text: document.getElementById('secret-paragraph'),
	button: document.getElementById('secret-button'),

	toggleState: () => {
		secret.visible = !secret.visible;
		secret.updateTxt();
		secret.updateBtn();
	},

	updateTxt: () => {
		secret.text.style.display = secret.visible ? 'block' : 'none';
	},

	updateBtn: () => {
		var hide, show;
		hide = 'Hide the Secret';
		show = 'Show the Secret';

		secret.button.textContent = (secret.visible ? hide : show);
	}

};