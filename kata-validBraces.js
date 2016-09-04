
function validBraces(braces) {
  const qs = {
    '{': ['{', 1],
    '}': ['{', -1],
    '[': ['[', 1],
    ']': ['[', -1],
    '(': ['(', 1],
    ')': ['(', -1]
  }
  const stack=[]
  let balanced = braces.split('').every((b) => {
    let q = qs[b]
    if (q[1]>0){
      stack.push(q[0])
    } else {
      let pop = stack.pop()
      if (pop!=q[0]) {
        return false
      }
    }
    return true
  })
  return balanced && stack.length == 0
}



const assert = require('assert')
assert.equal(validBraces('()'), true)
assert.equal(validBraces('[(])'), false)