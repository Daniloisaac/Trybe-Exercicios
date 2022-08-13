const getOpeningHours = require('../src/getOpeningHours');

const expected = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {});

it('não recebendo nenhum argumento, a função retorna um objeto com todos  os horarios e dias', () => {
  expect(getOpeningHours()).toEqual(expected);
});
it('recebendo o argumento Monday e \'09:00-AM\', a função retorna uma string ', () => {
  expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
});
it('recebendo o argumento Tuesday e \'09:00-AM\', a função retorna uma string ', () => {
  expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
});
it('recebendo o argumento Wednesday e \'09:00-PM\', a função retorna uma string ', () => {
  expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
});
it('recebendo o argumento Thu e \'09:00-AM\', a função retorna uma string ', () => {
  expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
});
it('recebendo o argumento Friday e \'09:00-ZM\', a função retorna uma string ', () => {
  expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
});
it('recebendo o argumento Saturday e \'C9:00-AM\', a função retorna uma string ', () => {
  expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
});
it('recebendo o argumento Sunday e \'09:c0-AM\', a função retorna uma string ', () => {
  expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
});
it('recebendo o argumento Monday e \'13:00-AM\', a função retorna uma string ', () => {
  expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
});
it('recebendo o argumento Tuesday e \'09:60-AM\', a função retorna uma string ', () => {
  expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
});
