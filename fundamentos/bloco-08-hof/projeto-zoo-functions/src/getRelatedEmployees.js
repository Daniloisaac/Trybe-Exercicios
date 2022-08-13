const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((maneger) => (maneger.managers.includes(id)));
}

function getRelatedEmployees(managerId) {
  const result = [];
  if (isManager(managerId) === true) {
    const employe = employees.filter((employee) => (employee.managers.includes(managerId)));
    for (let i = 0; i < employe.length; i += 1) {
      result.push(`${employe[i].firstName} ${employe[i].lastName}`);
    }
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
