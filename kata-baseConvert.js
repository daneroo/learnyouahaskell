
function parse(input, alphabet) {
  const base = alphabet.length
  return input.split('').reduce((acc, d) => {
    return acc * base + alphabet.indexOf(d);
  }, 0);
}
function render(value, alphabet) {
  const base = alphabet.length
  let output = [];
  while (value > 0) {
    let d = value % base
    value = Math.floor(value / base);
    output.unshift(alphabet[d])
  }
  return output.join('') || alphabet[0]
}
function convert(input, source, target) {
  return render(parse(input, source), target)
}

var Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

// convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
// convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
// convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

// other bases
// convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
// convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
// convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
// convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"

// convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
// convert("hello", Alphabet.ALPHA_LOWER, Alphabet.ALPHA_LOWER); // should return "320048"
// convert("987654321", Alphabet.DECIMAL, Alphabet.DECIMAL); // should return "1111"
