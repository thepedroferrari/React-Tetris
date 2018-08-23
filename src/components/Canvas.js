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
		console.log(this.state.time);
		const ctx = this.state.ctx;
		const { pos, matrix, time, lastTime, dropCounter, dropInterval } = this.state;
		const { x, y } = pos;

		//Forcing specific T
		const { shape, color } = this.state.matrix.t;
		// END FORCING

		const draw = () => {
			rect({ ctx, x: 0, y: 0, width: this.state.canvas.width, height: this.state.canvas.height });
			drawMatrix(rect, ctx, shape, { x, y }, color);
		};
		const update = () => {
			draw();
		};
		update();
	}

	render() {
		return <canvas id="tetris" ref="canvas" width={360} height={600} />;
	}
}
