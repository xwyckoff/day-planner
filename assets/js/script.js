let hourEl = $("#hoursContainer").children(); //jquery object that is list of each hour div
let today = dayjs();
let dateEl = $("#currentDay");

$(function () {
    hourEl.on('click', 'button', event =>{
      let buttonClicked = $(event.target);
      //save item to local storage, key is the name of the time slot, value is the text entered in the time slot
      localStorage.setItem(buttonClicked.parent().attr('id'), buttonClicked.siblings(".description").val());

  })

  hourEl.each(function() {
    elementHour = Number($(this).attr('id').split("-")[1]); //variable that has the element's hour number
    currentHour = Number(today.format('HH')); //variable that has the current hour number

    //if statement that adds the class to the time slot depending on what time of day it is
    if(currentHour == elementHour){
      $(this).addClass("present");
    } else if(currentHour > elementHour){
      $(this).addClass("past");
    } else if(currentHour < elementHour){
      $(this).addClass("future");
    }
  });

  //sets field value with whatever the text saved in localStorage is that corresponds to the given time slot
  hourEl.each(function() {
    $(this).children(".description").val(localStorage.getItem($(this).attr('id'))); 
  });

  dateEl.text(today.format("dddd, MMMM M"))
});
