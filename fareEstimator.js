function fareEstimator(rideTime, rideDistance, costPerMinute, costPerMile) {
  let time = costPerMinute.map((cost) => cost * rideTime);
  let distance = costPerMile.map((mile) => mile * rideDistance);
  let solution = [];
  for (let index = 0; index < time.length; index++) {
    solution[index] = time[index] + distance[index];
  }
  console.log(solution);
}

fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]);

//[13.7, 23.1, 28.1, 38]
