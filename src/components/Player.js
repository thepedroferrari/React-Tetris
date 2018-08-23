import React, { Component } from 'react';
import Canvas from './Canvas';

export default class Player extends Component {
	state = {
		pos: { x: 0, y: 0 },
		matrix: [],
		time: new Date().getTime(),
		lastTime: 0,
		dropCounter: 0,
		dropInterval: 1000
	};
	render() {
		return (
			<Canvas
				pos={this.state.pos}
				matrix={this.state.matrix}
				time={this.state.time}
				lastTime={this.state.lastTime}
				dropCounter={this.state.dropCounter}
				dropInterval={this.state.dropInterval}
			/>
		);
	}
}
