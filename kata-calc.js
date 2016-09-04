


function evaluate(op, value) {
  return op ? op(value) : value
}
function bind(f, right) {
  return (left) => f(left, right)
}

function zero(op) { return evaluate(op, 0) }
function one(op) { return evaluate(op, 1) }
function two(op) { return evaluate(op, 2) }
function three(op) { return evaluate(op, 3) }
function four(op) { return evaluate(op, 4) }
function five(op) { return evaluate(op, 5) }
function six(op) { return evaluate(op, 6) }
function seven(op) { return evaluate(op, 7) }
function eight(op) { return evaluate(op, 8) }
function nine(op) { return evaluate(op, 9) }

function plus(right) {
  return bind((left, right) => left + right, right)
}
function minus(right) {
  return bind((left, right) => left - right, right)
}
function times(right) {
  return bind((left, right) => left * right, right)
}
function dividedBy(right) {
  return bind((left, right) => left / right, right)
}
