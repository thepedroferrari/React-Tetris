import React, { Component } from 'react';

const rect = (props) => {
	const { ctx, x, y, width, height, color } = props;
	ctx.fillStyle = color;
	ctx.fillRect(x, y, width, height);
};

// prettier-ignore
const matrix = [
	[ 0, 0, 0 ],
  [ 1, 1, 1 ],
  [ 0, 1, 0 ]
];

export default class Canvas extends Component {
	componentDidMount() {
		this.updateCanvas();
	}
	componentDidUpdate() {
		this.updateCanvas();
	}
	updateCanvas() {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		ctx.scale(20, 20);

		// Draw Canvas Background
		rect({ ctx, x: 0, y: 0, width: canvas.width, height: canvas.height });
		matrix.forEach((row, y) => {
			row.forEach((value, x) => {
				console.log(value);
				if (value) {
					rect({ ctx, x, y, width: 1, height: 1, color: '#f00' });
				}
			});
		});
	}
	render() {
		return <canvas id="tetris" ref="canvas" width={360} height={600} />;
	}
}
