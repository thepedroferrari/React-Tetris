import React, { Component } from 'react';
import { rect, drawMatrix } from './CanvasHelper';
import { pieces } from './pieces';

export default class Canvas extends Component {
	state = { ...this.props };

	componentDidMount() {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		ctx.scale(20, 20);
		rect({ ctx, x: 0, y: 0, width: canvas.width, height: canvas.height });
		this.setState({ matrix: pieces });
	}

	componentDidUpdate() {
		this.updateCanvas();
	}

	updateCanvas() {
		const ctx = this.refs.canvas.getContext('2d');
		const currentPiece = this.state.matrix.t.shape;

		drawMatrix(rect, ctx, currentPiece, { x: 15, y: 25 }, '#0f0');
	}
	render() {
		return <canvas id="tetris" ref="canvas" width={360} height={600} />;
	}
}
