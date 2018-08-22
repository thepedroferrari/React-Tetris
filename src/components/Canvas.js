import React, { Component } from 'react';

export default class Canvas extends Component {
	componentDidMount() {
		this.updateCanvas();
	}
	updateCanvas() {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = '#f00';
		ctx.fillRect(0, 0, 100, 100);
	}
	render() {
		return <canvas id="tetris" ref="canvas" width={240} height={400} />;
	}
}
