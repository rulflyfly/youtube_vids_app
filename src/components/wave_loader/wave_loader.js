import Sketch from "react-p5";

/** used wave code by Daniel Shiffman
 * https://p5js.jp/examples/math-sine-wave.html
 */

export default ({width, height}) => {

    let xspacing = 1; 
    let w; 
    let theta = 0.0; 
    let amplitude = 10.0; 
    let period = 50.0; 
    let dx; 
    let yvalues;
	
	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(width, height).parent(canvasParentRef);

        // wave
        w = p5.width + 16;
        dx = (p5.TWO_PI / period) * xspacing;
        yvalues = new Array(p5.floor(w / xspacing));
	};

	const draw = (p5) => {
		p5.background(0);
        

        // wave
        calcWave(p5);
        renderWave(p5);
	}

    function calcWave(p5) {
        theta -= 0.2;
      
        let x = theta;
        for (let i = 0; i < yvalues.length; i++) {
          yvalues[i] = p5.sin(x) * amplitude;
          x += dx;
        }
      }
      
      function renderWave(p5) {
        p5.noStroke();
        p5.fill(0, 180, 216);
        for (let x = 0; x < yvalues.length; x++) {
          p5.ellipse(x * xspacing, height - 20 + yvalues[x], 5, 5);
        }
      }

	return <Sketch setup={setup} draw={draw} />;
};