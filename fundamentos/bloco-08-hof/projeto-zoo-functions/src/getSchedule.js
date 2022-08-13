const data = require('../data/zoo_data');

const { species, hours } = data;
const obj = {
  Friday: {
    exhibition: species.filter((elem) =>
      (elem.availability.includes('Friday'))).map((animalsNomes) => (animalsNomes.name)),
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
  },
  Monday: {
    exhibition: 'The zoo will be closed!',
    officeHour: 'CLOSED',
  },
  Saturday: {
    exhibition: species.filter((elem) =>
      (elem.availability.includes('Saturday'))).map((animalsNomes) => (animalsNomes.name)),
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
  },
  Sunday: {
    exhibition: species.filter((elem) =>
      (elem.availability.includes('Sunday'))).map((animalsNomes) => (animalsNomes.name)),
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
  },
  Thursday: {
    exhibition: species.filter((elem) =>
      (elem.availability.includes('Thursday'))).map((animalsNomes) => (animalsNomes.name)),
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
  },
  Tuesday: {
    exhibition: species.filter((elem) =>
      (elem.availability.includes('Tuesday'))).map((animalsNomes) => (animalsNomes.name)),
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
  },
  Wednesday: {
    exhibition: species.filter((elem) =>
      (elem.availability.includes('Wednesday'))).map((animalsNomes) => (animalsNomes.name)),
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
  },
};
const { Monday } = obj;

function getSchedule(scheduleTarget) {
  const nameAnimals = species.filter((elem) => elem.name.includes(scheduleTarget));
  const getDay = species.map((elem) =>
    (elem.name)).some((element) => (element.includes(scheduleTarget)));

  if (scheduleTarget === 'Monday') {
    return { Monday };
  }
  if (Object.keys(obj).includes(scheduleTarget)) {
    return { [scheduleTarget]: { exhibition: species.filter((elem) =>
      (elem.availability.includes(scheduleTarget))).map((animalsNomes) =>
      (animalsNomes.name)),
    officeHour:
     `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm` },
    };
  }
  if (!scheduleTarget || getDay === false) { return obj; }
  return nameAnimals[0].availability;
}
module.exports = getSchedule;
