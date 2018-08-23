import React, { Component } from 'react';
import { rect, drawMatrix } from './CanvasHelper';

// prettier-ignore
const matrix = [
	[ 0, 0, 0 ],
  [ 1, 1, 1 ],
  [ 0, 1, 0 ]
];

export default class Canvas extends Component {
	componentDidMount() {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		ctx.scale(20, 20);
		rect({ ctx, x: 0, y: 0, width: canvas.width, height: canvas.height });
		drawMatrix(rect, ctx, matrix, { x: 2, y: 5 });
		this.updateCanvas();
	}
	componentDidUpdate() {
		this.updateCanvas();
	}
	updateCanvas() {
		const ctx = this.refs.canvas.getContext('2d');
		drawMatrix(rect, ctx, matrix, { x: 15, y: 15 });
	}
	render() {
		return <canvas id="tetris" ref="canvas" width={360} height={600} />;
	}
}
