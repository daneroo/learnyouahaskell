
const succ = (nat) => (()=>nat)
const zero = ()=>{}

const one = succ(zero)
var two = succ(one)
var three = succ(two)
var six = succ(succ(succ(three)))


function natToInt(nat) {
  return (nat == zero) ? 0 : 1 + natToInt(nat())
}

function intToNat(int) {
  return (int <= 0) ? zero : succ(intToNat(int - 1))
}

function add(nat1, nat2) {
  if (nat1 == zero) return nat2
  return (nat2 == zero) ? nat1 : add(succ(nat1), nat2())
}

function mul(nat1, nat2) {
  if (nat1 == zero || nat2 == zero) return zero
  if (compareTo(nat1, one)==0) return nat2
  if (compareTo(nat2, one)==0) return nat1
  return add(nat1, mul((nat1), nat2()))
}

function compareTo(nat1, nat2) {
  if (nat1 == zero && nat2 == zero) return 0
  if (nat1 == zero && nat2 != zero) return -1
  if (nat1 != zero && nat2 == zero) return 1
  return compareTo(nat1(), nat2())
}

function toString(nat) {
  return (nat == zero) ? 'zero' : 'succ(' + toString(nat()) + ')'
}


// NodeJS assert is also automatically required for you.
const assert = require('assert')
assert.equal(zero, zero)

assert.equal(toString(zero), 'zero')
assert.equal(toString(one()), 'zero')
assert.equal(toString(one), 'succ(zero)')
assert.equal(toString(two), 'succ(succ(zero))')

assert.equal(compareTo(zero, zero), 0)
assert.equal(compareTo(zero, one), -1)
assert.equal(compareTo(one, zero), 1)
assert.equal(compareTo(one, one), 0)
assert.equal(compareTo(succ(zero), succ(zero)), 0)
assert.equal(compareTo(zero, two), -1)
assert.equal(compareTo(one, two), -1)
assert.equal(compareTo(two, zero), 1)
assert.equal(compareTo(two, one), 1)

assert.equal(natToInt(zero), 0)
assert.equal(natToInt(one), 1)
assert.equal(natToInt(two), 2)

assert.equal(intToNat(0), zero)
assert.equal(compareTo(intToNat(1), one), 0)
assert.equal(compareTo(intToNat(2), two), 0)
assert.equal(compareTo(intToNat(3), three), 0)
assert.equal(compareTo(intToNat(6), six), 0)

assert.equal(compareTo(add(zero, zero), zero), 0)
assert.equal(compareTo(add(zero, one), one), 0)
assert.equal(compareTo(add(one, zero), one), 0)
assert.equal(compareTo(add(one, one), two), 0)

assert.equal(compareTo(mul(one, zero), zero), 0)
assert.equal(compareTo(mul(zero, one), zero), 0)
assert.equal(compareTo(mul(one, one), one), 0)

assert.equal(compareTo(mul(one, two), two), 0)
assert.equal(compareTo(mul(three, two), six), 0)
assert.equal(compareTo(mul(two, three), six), 0)
