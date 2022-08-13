const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {});
it('Recebendo como argumento a string \'const\' retorna 4', () => {
  expect(handlerElephants('count')).toBe(4);
});
it('Recebendo como argumento a string \'names\' retorna um array que possui o nome \'Jefferson\'', () => {
  expect(handlerElephants('names').includes('Jefferson')).toBe(true);
});
it('Recebendo como argumento a string \'averageAge\' retorna um numero aproximado a 10.5', () => {
  expect(handlerElephants('averageAge')).toBe(10.5);
});
it('Recebendo como argumento a string \'location\' retorna uma sring \'NW\'', () => {
  expect(handlerElephants('location')).toBe('NW');
});
it('Recebendo como argumento a string \'availability\' retorna um array que não contém \'monday\'', () => {
  expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
});
it('Recebendo nenhum argumento, retorna undefined', () => {
  expect(handlerElephants()).toBe(undefined);
});
it('Recebendo como argumento um objeto vazio, retorna uma string \'Parâmetro inválido, é necessário uma string\'', () => {
  expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
});
it('Recebendo como argumento uma sting que não tem funcionalidade, retorna null', () => {
  expect(handlerElephants('availality')).toBe(null);
});
