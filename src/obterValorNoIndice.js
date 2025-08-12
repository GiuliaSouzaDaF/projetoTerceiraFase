export function obterValorNoIndice(array, indice) {
    if (!Array.isArray(array)) {
      throw new Error("O primeiro argumento deve ser um array.");
    }
  
    if (typeof indice !== 'number' || !Number.isInteger(indice)) {
      throw new Error("O índice deve ser um número inteiro.");
    }
  
    if (indice < 0 || indice >= array.length) {
      throw new Error("Índice fora do intervalo válido.");
    }
  
    return array[indice];
  }
  
  const numeros = [1, 3, 5, 7, 8];

try {
  const valor = obterValorNoIndice(numeros, 3);
  console.log(valor); // 7
} catch (error) {
  console.error("Erro:", error.message);
}


//essa função recebe um array e um índice, retornando o valor no índice
//especificado ou lançando um erro caso o índice seja inválido.

//exemplo: array = [1, 3, 5, 7, 8], índice = 3
//resultado esperado => 7

//return array [indice]