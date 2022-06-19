function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  function dezDay (){
  let ul = document.getElementById('days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for(let i in dezDaysList){
    const li= document.createElement('li')
      let days = dezDaysList[i]
      li.innerText = days
      li.className="day"
     
     if ((days == 24)||(days == 31)){
       li.className = 'day holiday'
     }else if ((days == 4)||(days ==11)||(days ==18)) {
        li.className = 'day friday'
     } else if ((days == 25)){
       li.className = 'day holiday friday '
     }
     ul.appendChild(li)
  }
}
dezDay()

const div = document.querySelector('.buttons-container')
function dayfriday (feriados){
const buttons =document.createElement('button');
feriados='feriados'
buttons.id='btn-holiday'
buttons.innerHTML=feriados
div.appendChild(buttons) 
}
dayfriday()

function evente (){
  let button =document.querySelector('#btn-holiday')
  let daysHoli =  document.querySelectorAll('.holiday')
  let background= 'rgb(238,238,238)'
  let wit =  'white'

  button.addEventListener('click', function(){
    for (let i=0;i<daysHoli.length;i+=1){
      if (daysHoli[i].style.background == wit){
         daysHoli[i].style.background = background        
      }else{
        daysHoli[i].style.background = wit
      }
    }

  })
}
evente()

function friday (sextaFeira){
  sextaFeira = 'sextou'
  const buttonSextou = document.createElement('button')
  buttonSextou.id = 'btn-friday'
  buttonSextou.innerHTML = sextaFeira
  div.appendChild(buttonSextou) 

}
friday()

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();
let taskDiv = document.querySelector('.task');
let taskColor = taskDiv.style.backgroundColor;
function setDayColor() {
  let selectedTask = document.getElementsByClassName('selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task ');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

