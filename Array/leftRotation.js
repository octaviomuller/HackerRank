const a = [1, 2, 3, 4, 5]
const d = 4

function rotLeft(a, d) {

  const rotatedArray = [...a]

  const rotations = d > a.length ? d % a.length : d
  
  for (let i = 0; i < a.length; i++ ) {
    
    if (i - d < 0) rotatedArray[i + (a.length - rotations)] = a[i]
    else rotatedArray[i - rotations] = a[i]
  }

  return rotatedArray
}

console.log(rotLeft(a, d))