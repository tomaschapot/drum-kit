window.addEventListener("keydown", function (e) {
	const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
	const drumLetter = document.querySelector(
		`kbd[class ='drum-button ${e.keyCode}']`
	);
	const drumButton = document.querySelector(
		`div[class ='button ${e.keyCode}']`
	);

	audio.currentTime = 0;
	if (audio) {
		audio.play();
		drumLetter.classList.add("focus-letter");
		drumButton.classList.add("focus-div");
		setTimeout(() => {
			drumLetter.classList.remove("focus-letter");
		}, 140);
		setTimeout(() => {
			drumButton.classList.remove("focus-div");
		}, 70);
	}
	console.log(audio);
});
