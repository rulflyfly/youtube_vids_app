import Sketch from "react-p5";

export default (props) => {

	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)

        /* this will draw sick triengles 
		p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        p5.rectMode(p5.CENTER);
		p5.background(0);
*/


	};

	const draw = (p5) => {}

	return <Sketch setup={setup} draw={draw} />;
};