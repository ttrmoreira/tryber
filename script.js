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

    console.log(dayItem);
    daysList.appendChild(dayItem);
}


//Exercise 2
function buttonBuilder(nameButton){
    var button = document.createElement('button');
    const buttonContainer = document.querySelector('.buttons-container');
    if(nameButton == "Feriados"){
        button.id = "btn-holiday";
        button.innerText = "Feriados";
        buttonContainer.appendChild(button);
    }
}

buttonBuilder("Feriados");

function showHolidays() {
    let holidayButton = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday')
  
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
  
  showHolidays();