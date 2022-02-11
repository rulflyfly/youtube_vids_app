import Sketch from "react-p5";
import Letter from './letter';

let letterSize = 30;

export default ({title, width, height}) => {
	
	//let letters = title.split('').reverse();
	let letters = title.split('')

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(width, height).parent(canvasParentRef);
		//let posission = p5.width;
		let posission = 0;

		letters = letters.map(letter => {
			//posission -= letterSize;
			posission += letterSize;
			let newLetter = new Letter(letter, posission, letterSize);
		
			return newLetter;
		})


	};

	const draw = (p5) => {
		p5.background(255);
		
		for (let letter of letters) {
			letter.moveLeft(p5, letters.length);
			letter.display(p5, p5.height / 2);
		}
		
	}

	return <Sketch setup={setup} draw={draw} />;
};