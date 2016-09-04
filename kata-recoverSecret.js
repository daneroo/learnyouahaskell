
// WOW, found this answer:
var recoverSecretWOW = function(triplets) {
  for(var [first] of triplets)
  {
    if (triplets.every(tuple => tuple.indexOf(first) <= 0))
    {
      triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
      return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
    }
  }
  return '';
}
var recoverSecret = function(triplets) {
  const letters = new Set()
  let precedes = new Map()
  triplets.forEach((tr)=>{
    tr.forEach((l)=>letters.add(l));
  });
  letters.forEach((l)=>precedes.set(l,new Set()))

  const p = (a,b) => {
    precedes.get(a).add(b)
  }
  triplets.forEach((tr)=>{
    p(tr[0],tr[1])
    p(tr[1],tr[2])
  })
  let secret = ""
  while (letters.size>0) {
    for (let l of letters) {
      if (!precedes.get(l).size){
        secret = l + secret
        letters.delete(l)
        precedes.forEach((set)=>set.delete(l))
        break;
      }
    }
  }
  return secret
}

secret1 = "whatisup"
triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

console.log(recoverSecret(triplets1), secret1)