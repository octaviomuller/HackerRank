const q = [1, 2, 5, 3, 7, 8, 6, 4]

function minimumBribes(q) {

  let totalBribes = 0

  for (let i = 0; i < q.length - 1; i++) {
    if (q[i] > q[i + 1] || q[i] > q[i + 2]){
      const bribes = Math.abs(q[i] - 1 - i)

      if (bribes > 2) {
        console.log('Too chaotic')
        return
      }

      totalBribes += bribes
    }
  }

  console.log(totalBribes)
}

minimumBribes(q)