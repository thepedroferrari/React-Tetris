export function rect(props) {
	const { ctx, x, y, width, height, color } = props;
	ctx.fillStyle = color;
	ctx.fillRect(x, y, width, height);
}

export function drawMatrix(rect, ctx, matrix, offset, color) {
	matrix.forEach((row, y) => {
		y = y + offset.y;
		row.forEach((value, x) => {
			x = x + offset.x;
			if (value) {
				rect({ ctx, x, y, width: 1, height: 1, color: color || '#f00' });
			}
		});
	});
}
