const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]

function hourglassSum(arr) {

  const hourglasses = []
  
  for (let i = 1; i < arr.length - 1; i++) {

    for (let j = 1; j < arr[0].length - 1; j++) {
      
      hourglasses.push([
        arr[i-1][j-1],
        arr[i-1][j],
        arr[i-1][j+1],
        
        arr[i][j],
        
        arr[i+1][j-1],
        arr[i+1][j],
        arr[i+1][j+1],
      ])
    }
  }

  const hourglassSum = hourglasses.map(hourglass => (
    hourglass.reduce((acc, curr) => acc += curr)
  ))

  return hourglassSum.sort((a, b) => a - b)[hourglassSum.length - 1]
}

console.log(hourglassSum(arr))