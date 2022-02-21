const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(arr) {
  
  const socksByColor = arr.reduce((acc, curr) => {
    
    if (acc[curr]) acc[curr] += 1
    else acc[curr] = 1

    return acc
  }, {})
  
  const pairs = Object.values(socksByColor).reduce((acc, curr) => acc += Math.floor(curr / 2), 0)

  return pairs
}