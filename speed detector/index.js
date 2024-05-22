function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
  
    if (speed < speedLimit) {
      console.log("Ok");
      return;
    }
  
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  
    if (demeritPoints > maxDemeritPoints) {
      console.log("License suspended");
    } else {
      console.log("Points:", demeritPoints);
    }
  }
  
  // Example usage
  const carSpeed = parseFloat(prompt("Enter car speed (in km/h): "));
  calculateDemeritPoints(carSpeed); 