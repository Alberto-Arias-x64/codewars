import fs from "fs"
import path from "path"

fs.ReadStream(path.join(__dirname, "",))

console.log(__dirname)

const readMore = 0

readMore = 1

//this si a error

const unaVida = () => {
    console.log("nepe")
    console.log("atoro")
}

function Vpoer(no, tiene) {
    return no + tiene
}

function simplifyPolynomial(polynomial) {
    // Divide el polinomio en términos individuales
    const terms = polynomial.split("+");
  
    // Objeto para almacenar los coeficientes de cada término
    const coefficients = {};
  
    // Procesa cada término
    for (let term of terms) {
      term = term.trim(); // Elimina espacios en blanco alrededor del término
      const parts = term.split("x");
  
      let coefficient, exponent;
  
      // Determina el coeficiente y el exponente
      if (parts.length === 1) {
        coefficient = parseFloat(parts[0]);
        exponent = 0;
      } else {
        coefficient = parseFloat(parts[0]) || 1;
        exponent = parseFloat(parts[1]) || 1;
      }
  
      // Agrega el coeficiente al objeto de coeficientes
      if (coefficients[exponent]) {
        coefficients[exponent] += coefficient;
      } else {
        coefficients[exponent] = coefficient;
      }
    }
  
    // Construye el polinomio simplificado
    let simplifiedPolynomial = "";
    const exponents = Object.keys(coefficients).sort((a, b) => b - a);
  
    for (const exponent of exponents) {
      const coefficient = coefficients[exponent];
      if (coefficient !== 0) {
        if (simplifiedPolynomial !== "") {
          simplifiedPolynomial += " + ";
        }
  
        if (exponent === "0") {
          simplifiedPolynomial += coefficient;
        } else if (exponent === "1") {
          simplifiedPolynomial += coefficient + "x";
        } else {
          simplifiedPolynomial += coefficient + "x^" + exponent;
        }
      }
    }
  
    return simplifiedPolynomial;
  }
  
  // Ejemplo de uso
  const inputPolynomial = "3x^2 + 2x + 5 - x^2 + 4x^3 + x^2";
  const simplified = simplifyPolynomial(inputPolynomial);
  console.log("Polinomio original:", inputPolynomial);
  console.log("Polinomio simplificado:", simplified);
  