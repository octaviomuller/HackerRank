const path = 'UDDDUDUU'

function countingValleys(path) {
  
  let altitude = 0
  let valleys = 0
  let changing = false
  
  for (let step of path) {
    if (altitude === 0) changing = true
    
    if (step === 'U') altitude += 1
    else if (step === 'D') altitude -= 1

    if (altitude < 0 && changing) valleys += 1

    changing = false
  }

  return valleys
}

console.log(countingValleys(path))