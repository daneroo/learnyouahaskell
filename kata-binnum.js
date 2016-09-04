
// n'th binary digit from the end.
function d(bs, n) {
  return (n > bs.length) ? 0 : parseInt(bs.substr(-n, 1))
}

function add(a, b) {
  len = Math.max(a.length, b.length)
  let carry = 0
  let result = []
  for (let i = 1; i <= len; i++) {
    let s = d(a, i) + d(b, i) + carry
    result.unshift(s % 2)
    carry = s >> 1
  }
  result.unshift(carry)
  return result.join('').replace(/^0+/, '') || "0"
};


// add('111', '10') //,'1001');
// add('1101', '101') //,'10010');
// add('1101', '10111') //,'100100');
// add('000000001101', '10111') //,'100100');
add('0000000000', '00') //,'100100');