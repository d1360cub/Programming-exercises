function carAfforded(rideDistance, fares) {
  const credit = 20;
  const cars = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
  let fareEstimator = fares
    //.map((fare) => fare * rideDistance)
    .filter((affordable) => affordable * rideDistance < credit);
  console.log(cars[fareEstimator.length - 1]);
}

carAfforded(30, [0.3, 0.5, 0.7, 1, 1.3]);

//UberXL
