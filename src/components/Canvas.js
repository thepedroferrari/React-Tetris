import React, { Component } from 'react';
import { rect, drawMatrix } from './CanvasHelper';
import { pieces } from './pieces';

export default class Canvas extends Component {
	state = {
		...this.props,
		canvas: null
	};

	componentDidMount() {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		ctx.scale(20, 20);
		rect({ ctx, x: 0, y: 0, width: canvas.width, height: canvas.height });
		this.setState({
			matrix: pieces,
			canvas: this.refs.canvas,
			ctx: this.refs.canvas.getContext('2d')
		});
	}

	componentDidUpdate() {
		this.updateGame();
	}

	updateGame() {
		const ctx = this.state.ctx;
		const pos = this.state.pos;
		let { x, y } = pos;

		//Forcing specific T
		const { shape, color } = this.state.matrix.t;
		// END FORCING

		const draw = () => {
			rect({ ctx, x: 0, y: 0, width: this.state.canvas.width, height: this.state.canvas.height });
			drawMatrix(rect, ctx, shape, { x, y }, color);
		};
		let lastTime = 0;
		let dropCounter = 0;
		let dropInterval = 1000;

		const update = (time = 0) => {
			const deltaTime = time - lastTime;
			lastTime = time;
			dropCounter += deltaTime;
			if (dropCounter > dropInterval) {
				y = y + 1;
				dropCounter = 0;
			}
			draw();
			requestAnimationFrame(update);
		};

		update();
	}

	handleKeyDown = (e) => {
		console.log('key: ', e.keyCode);
	};

	render() {
		return <canvas id="tetris" ref="canvas" width={360} height={600} onKeyDown={this.handleKeyDown} tabIndex="0" />;
	}
}
