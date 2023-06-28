/* eslint-disable no-unused-vars */
function mapQuest(directions) {
  return directions.reduce((res, currentDirection) => {
    const oppositeDirection = getOppositeDirection(currentDirection);
    if (res[res.length - 1] === oppositeDirection) {
      res.pop();
    } else {
      res.push(currentDirection);
    }
    return res;
  }, []);
}

function getOppositeDirection(direction) {
  const oppositeDirections = {
    N: "S",
    S: "N",
    E: "W",
    W: "E",
  };
  return oppositeDirections[direction];
}
