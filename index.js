const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number){ 
  const fareMultiplier = function(fare){
    return fare * number;
  }
  return fareMultiplier;
}

const fareDoubler = (fare) => {
  return createFareMultiplier(2)(fare);
}

const fareTripler = (fare) => {
  return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers);
}

