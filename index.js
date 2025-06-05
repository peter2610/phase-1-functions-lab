// Code your solution in this file!
// 1. Returns number of blocks from 42nd Street
function distanceFromHqInBlocks(someValue) {
  const hq = 42;
  return Math.abs(someValue - hq);
}
// 2. Converts blocks to feet from HQ
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}
// 3. Calculates distance travelled in feet between any two blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}
// 4. Calculates fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}