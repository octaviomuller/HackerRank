const s = 'aba'

function repeatedString (s, n) {

  const finalSubstring = s.slice(0, n % s.length)

  const aCountFinalSubstring = finalSubstring?.split(/a/)?.length - 1
  
  let aCount = ((s.split(/a/).length - 1) * Math.floor(n / s.length)) + aCountFinalSubstring

  return aCount
}

console.log(repeatedString(s, 10))
