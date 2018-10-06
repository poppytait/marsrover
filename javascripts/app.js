// Rover Object Goes Here
// ======================
var rover = {
	direction: "N",
	x: 0,
	y: 0
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
	console.log(`The rover is now facing: ${rover.direction}`);

}



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
	console.log(`The rover is now facing: ${rover.direction}`);
}



function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction) {
  		case "N":
  			rover.y --
  			break;

  		case "W":
  			rover.x --
  			break;

  		case "S":
  			rover.y ++
  			break;

  		case "E":
  			rover.x ++
  			break;

  		default:
  			rover.y --

  }
   console.log(`The new position is: [${rover.x} , ${rover.y}]`);
}

 
 

turnLeft(rover);
moveForward(rover);
turnLeft(rover);
moveForward(rover);
turnLeft(rover);
moveForward(rover);
turnLeft(rover);
moveForward(rover);



