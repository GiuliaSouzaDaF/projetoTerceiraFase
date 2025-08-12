import { obterValorNoIndice } from '../src/obterValorNoIndice';

describe('obterValorNoIndice', () => {
  test('retorna o valor correto para um índice válido', () => {
    expect(obterValorNoIndice([1, 2, 3], 1)).toBe(2);
  });

  test('lança erro se o índice for negativo', () => {
    expect(() => obterValorNoIndice([1, 2, 3], -1)).toThrow("Índice fora do intervalo válido.");
  });

  test('lança erro se o índice for maior que o tamanho do array', () => {
    expect(() => obterValorNoIndice([1, 2, 3], 3)).toThrow("Índice fora do intervalo válido.");
  });

  test('lança erro se o índice não for um número inteiro', () => {
    expect(() => obterValorNoIndice([1, 2, 3], 1.5)).toThrow("O índice deve ser um número inteiro.");
  });

  test('lança erro se o primeiro argumento não for um array', () => {
    expect(() => obterValorNoIndice("não é um array", 0)).toThrow("O primeiro argumento deve ser um array.");
  });
});
