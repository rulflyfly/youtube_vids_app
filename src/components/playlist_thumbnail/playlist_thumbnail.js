import Sketch from "react-p5";
import Letter from './letter';

export default ({title, width, height}) => {
	
	let letterSize = 30;
	let letterSize_2 = 20;
	let letterSize_3 = 50;
	let letters = title.split('');
	let letters_2 = title.split('');
	let letters_3 = title.split('');

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(width, height).parent(canvasParentRef);
		let posission = 0;
		let posission_2 = 0;
		let posission_3 = 0;

		letters = letters.map(letter => {
			posission += letterSize;
			let newLetter = new Letter(letter, posission, letterSize);
		
			return newLetter;
		})

		letters_2 = letters_2.map(letter => {
			posission_2 += letterSize_2;
			let newLetter = new Letter(letter, posission_2, letterSize_2);
		
			return newLetter;
		})

		letters_3 = letters_3.map(letter => {
			posission_3 += letterSize_3;
			let newLetter = new Letter(letter, posission_3, letterSize_3);
		
			return newLetter;
		})


	};

	const draw = (p5) => {
		p5.background(255);
		
		for (let letter of letters) {
			letter.moveLeft(p5, letters.length);
			letter.display(p5, p5.height / 3);
		}

		for (let letter of letters_2) {
			letter.moveRight(p5, letters.length);
			letter.display(p5, p5.height / 2);
		}

		for (let letter of letters_3) {
			letter.moveLeft(p5, letters.length);
			letter.display(p5, p5.height - 10);
		}
		
	}

	return <Sketch setup={setup} draw={draw} />;
};