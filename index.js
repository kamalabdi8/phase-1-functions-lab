function distanceFromHqInBlocks(someValue) {
    if(someValue>42){
        return(someValue-42)
    }else  {
return(42-someValue)
    }
  }
  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  return distanceFromHqInBlocks(someValue) * 264
}
function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
 if(start>destination){
    return(start-destination)*264
 }else if (destination >start){
    return (destination-start) * 264
 }
  }
  function calculatesFarePrice(start, destination) {
    let distance=distanceTravelledInFeet(start, destination);
    if(distance<400){
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return .02 *(distance - 400)
    } else if (distance > 2000 && distance  < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
 }

