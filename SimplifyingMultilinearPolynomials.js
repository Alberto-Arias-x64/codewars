// When we attended middle school were asked to simplify mathematical expressions like "3x-yx+2xy-x" (or usually bigger),
// and that was easy-peasy ("2x+xy"). But tell that to your pc and we'll see!

// Write a function: simplify, that takes a string in input,
// representing a multilinear non-constant polynomial in integers coefficients (like "3x-zx+2xy-x"),
// and returns another string as output where the same expression has been
// simplified in the following way ( -> means application of simplify):

// All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.:
// "cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab"

// All monomials appears in order of increasing number of variables, e.g.:
// "-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz"

// If two monomials have the same number of variables, they appears in lexicographic order, e.g.:
// "a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz"

// There is no leading + sign if the first coefficient is positive, e.g.:
// "-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y"

// N.B. to keep it simplest, the string in input is restricted to represent only
// multilinear non-constant polynomials, so you won't find something like `-3+yx^2'.
// Multilinear means in this context: of degree 1 on each variable.

// Warning: the string in input can contain arbitrary variables represented by lowercase characters in the english alphabet.

// Good Work :)

function simplify(poly = '') {
  const symbols = poly.replace(/[^\+\-]/gm, '').split('')
  const response = []
  let expressions = poly.split(/[\+\-]/gm)
  expressions = expressions.map((e) => e.split('').sort().join(''))
  if (expressions.length === symbols.length) {
    expressions = expressions.map((e, i) => (symbols[i] ??= '' + e))
  } else {
    expressions = expressions.map((e, i) => (symbols[i - 1] ??= '' + e))
  }
  /* for (let i = 0; i < expressions.length; i++) {
    let simplified = expressions[i]
    for (let j = i + 1; j < expressions.length; j++) {
      if (expressions[i].replace(/[0-9\+\-]/gm, '') === expressions[j].replace(/[0-9\+\-]/gm, '')) {
      }
    }
    response.push(simplified)
  } */
  return expressions
}

//console.log(simplify('dc+dcba'), 'cd+abcd')
console.log(simplify('2xy-yx'), 'xy')
console.log(simplify('-a+5ab+3a-c-2a'), '-c+5ab')
