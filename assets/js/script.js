// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. //array of each hour div
let hourEl = $("#hoursContainer").children(); //jquery object that is list of each hour div
let today = dayjs();

$(function () {
    hourEl.on('click', 'button', event =>{
      let buttonClicked = $(event.target);

      //save item to local storage, key is the name of the time slot, value is the text entered in the time slot
      localStorage.setItem(buttonClicked.parent().attr('id'), buttonClicked.siblings(".description").val());

  })

  hourEl.each( function() {
    elementHour = $(this).attr('id').split("-")[1]; //variable that has the element's hour number
    currentHour = today.format('HH'); //variable that has the current hour number

    //if statement that adds the class to the time slot depending on what time of day it is
    if(currentHour == elementHour){
      $(this).addClass("present");
      console.log(currentHour + " and " + elementHour);
    } else if(currentHour > elementHour){
      $(this).addClass("past");
    } else if(currentHour < elementHour){
      $(this).addClass("future");
    }
  });
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
