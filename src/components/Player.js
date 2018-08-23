import React, { Component } from 'react';
import Canvas from './Canvas';

export default class Player extends Component {
	state = {
		pos: { x: 0, y: 0 },
		matrix: []
	};
	render() {
		return <Canvas pos={this.state.pos} matrix={this.state.matrix} />;
	}
}
