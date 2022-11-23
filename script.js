let noteFinale = 0;

function reponse1(qst1) {
	if ((qst1.choix1.checked) === false &&
		(qst1.choix2.checked) === true &&  // Right Answer
		(qst1.choix3.checked) === false &&  
		(qst1.choix4.checked) === false) {
		noteFinale += 2;
	}
}

function reponse2(qst2) {
	if ((qst2.choix1.checked) === true &&  // Right Answer
		(qst2.choix2.checked) === false &&
		(qst2.choix3.checked) === false && 
		(qst2.choix4.checked) === false) {
		noteFinale += 2;
	}
}

function reponse3(qst3) {
	if ((qst3.choix1.checked) === true &&  // Right Answer
		(qst3.choix2.checked) === false &&
		(qst3.choix3.checked) === false && 
		(qst3.choix4.checked) === false) {
		noteFinale += 2;
	}
}
function reponse4(qst4) {
	if ((qst4.choix1.checked) === false &&  // Right Answer
		(qst4.choix2.checked) === false &&
		(qst4.choix3.checked) === true && 
		(qst4.choix4.checked) === false) {
		noteFinale += 2;
	} 
}
function reponse5(qst5) {
	if ((qst5.choix1.checked) ===false  &&  // Right Answer
		(qst5.choix2.checked) === false &&
		(qst5.choix3.checked) === false && 
		(qst5.choix4.checked) === true) {
		noteFinale += 2;
	}
}


function validQCM() {
	reponse1(qst1);
	reponse2(qst2);
    reponse3(qst3)
	reponse4(qst4)
	reponse5(qst5)
	alert("Votre score est de " + noteFinale + "/10");
}

