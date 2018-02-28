function makeGrid(event) {
	event.preventDefault();
	const height = $("#inputHeight").val();
	const width = $("#inputWidth").val();
	const canvas = $("#pixelCanvas");

	canvas.empty();

	for (let row = 0; row <= height; row++) {
		canvas.append(`<tr class='row${row}'></tr>`);
		for (let col = 1; col <= width; col++) {
			$(`.row${row}`).append("<td class='grid'></td>");
		}
	}
}

let colorSelected = "#000";
function colorPick() {
	colorSelected = $("#colorPicker").val();
}

$("#pixelCanvas").mousemove(function drawGrid(e) {
		console.log(e.which);
	if (e.which === 1) {
			$(e.target).css("background-color", colorSelected);
		}
	}
);

$("#sizePicker").submit(makeGrid);
$("#colorPicker").change(colorPick);