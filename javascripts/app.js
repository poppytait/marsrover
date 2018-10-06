// Rover Object Goes Here
// ======================
var rover = {
	direction: "N"
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
	switch (rover.direction) {
		case "N":
			rover.direction = "W"
			break;

		case "W":
			rover.direction = "S"
			break;

		case "S":
			rover.direction = "E"
			break;

		case "E":
			rover.direction = "N"
			break;

		default:
			rover.direction = "W"
	}

}

turnLeft(rover);
console.log(`The rover is now facing: ${rover.direction}`);


function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
		case "N":
			rover.direction = "E"
			break;

		case "W":
			rover.direction = "N"
			break;

		case "S":
			rover.direction = "W"
			break;

		case "E":
			rover.direction = "S"
			break;

		default:
			rover.direction = "E"
	}
}

turnRight(rover);
console.log(`The rover is now facing: ${rover.direction}`);

function moveForward(rover){
  console.log("moveForward was called")
}
