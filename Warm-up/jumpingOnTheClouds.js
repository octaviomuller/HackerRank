const c = [0, 0, 1, 0, 0, 1, 0]

function jumpingOnClouds (c) {

  let moves = 0
  
  let i = 0
  
  while (i < c.length) {
    
    if (c[i+2] === 0)  i += 2
    else i++

    if (i + 1 <= c.length) moves++
  }

  return moves
}

console.log(jumpingOnClouds(c))