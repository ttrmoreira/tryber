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


function isHoliday(day){
    let arrayHoliday = [24, 25, 31];
    for(let index = 0; index < arrayHoliday.length; index += 1){
        if (day == arrayHoliday[index]){
            return true;
        }
    }
    return false;
}

function isFriday(day){
    let arrayHoliday = [4, 11, 18, 25];
    for(let index = 0; index < arrayHoliday.length; index += 1){
          if (day == arrayHoliday[index]){
              return true;
          }
      }
  return false;
}

  
//Exercise 1

function createCalendar (){

    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysList = document.getElementById('days');
    
    for (index = 0; index < dezDaysList.length; index +=1){
        let day = dezDaysList[index];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;
        dayItem.className = 'day';
        
        if(isHoliday(day)){
        dayItem.className += ' holiday';
        } 
        if(isFriday(day)){
        dayItem.className += ' friday'
        }
        daysList.appendChild(dayItem);
    }
}

function resetCalendar(){

    let fridays = [ 4, 11, 18, 25 ];
    const daysList = document.getElementById('days');
    console.log(daysList);
    for(var index = 0; index < daysList.length; index +=1){
        daysList.removeChild(daysList.childNodes[index]);
    }
    console.log(daysList);
}

//Exercise 2 and 4
function buttonBuilder(nameButton){
    var button = document.createElement('button');
    const buttonContainer = document.querySelector('.buttons-container');
    if(nameButton == "Feriados"){
        button.id = "btn-holiday";
        button.innerText = "Feriados";
        buttonContainer.appendChild(button);
    }else if(nameButton == "Sexta-feira"){
        button.id = "btn-friday";
        button.innerText = "Sexta-feira";
        buttonContainer.appendChild(button);
    }

}



//Exercise 3
function showHolidays() {
    let holidayButton = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');

    holidayButton.addEventListener('click', function() {
      for (let index = 0; index < holidays.length; index += 1) {
        if (holidays[index].style.backgroundColor === 'white') {
            holidays[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
            holidays[index].style.backgroundColor = 'white';
        }
      }
    })

  };

  //Exercise 5
function showFridays(fridaysArray) {

    let fridayButton = document.querySelector('#btn-friday');
    let fridays = document.querySelectorAll('.friday');

    fridayButton.addEventListener('click', function() {
        for (let index = 0; index < fridays.length; index += 1) {
          if (fridays[index].innerText === 'IHAAA') {
            fridays[index].innerText = fridaysArray[index];;
          } else {
            fridays[index].innerText = 'IHAAA';
          }
        }
      })
  };

  //Exercise 6
  function dayZoomIn() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function dayZoomOut() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    })
  };

  //Exercise 7
  function addTask(taskDescription){
    let task =  document.createElement('span');
    task.innerText = taskDescription;
    var taskList = document.querySelector('.my-tasks');
    taskList.appendChild(task);
  }

  //Exercise 8
  function addBackgroundColorTask(colorDescription){
    let task =  document.createElement('div');
    task.className = 'task';
    task.style.backgroundColor = colorDescription;
    var taskList = document.querySelector('.my-tasks');
    taskList.appendChild(task);
  }

  function setTask() {
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

  function addDayColor(){
      let selectedTask = document.getElementsByClassName('task selected');
      let days = document.querySelector('#days');
      let taskDiv = document.querySelector('.task');
      let taskColor = taskDiv.style.backgroundColor;

      days.addEventListener('click', function(event){
          let eventColored = event.target.style.color;
          if(selectedTask.length > 0 && eventColored !== taskColor){
              let color = selectedTask[0].style.backgroundColor;
              event.target.style.color = color;
          }else if(eventColored === taskColor && selectedTask.length !== 0){
            event.target.style.color = 'rgb(119,119,119)';
          }
      })

  }
  
  createDaysOfTheWeek();
  createCalendar();
  buttonBuilder("Feriados");
  buttonBuilder("Sexta-feira");
  showHolidays();
  let arrayFridays = [ 4, 11, 18, 25 ];
  showFridays(arrayFridays);
  dayZoomIn();
  dayZoomOut();
  addTask("Cozinhar");
  addBackgroundColorTask("blue");
  setTask();
  addDayColor();