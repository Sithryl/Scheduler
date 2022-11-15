var now = dayjs().hour();
var today = dayjs();
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");
var saveBtnel = $('.saveBtn');
var hourEl = $(".hour");
var todo = $(".description");


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  saveBtnel.on('click', function () {
    todo = $(this).siblings(".description").val();
      var hour = $(this).parent().attr("id");

      localStorage.setItem(hour, todo);

    });
  
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

    $(".time-block").each(function () {
    var hours = parseInt($(this).atttr('id').split("-")[1]);
    if (hours < now) {
      $(this).addClass('past');
      console.log(hours + "past")
    } else if (hours > now) {
      $(this).addClass('future');
    console.log(hours + "future")
    } else {
      $(this).addClass('present')
      console.log(now + "present")
    }
  });



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  hour9.children(".description").val(localStorage.getItem("hour-9"));
  hour10.children(".description").val(localStorage.getItem("hour-10"));
  hour11.children(".description").val(localStorage.getItem("hour-11"));
  hour12.children(".description").val(localStorage.getItem("hour-12"));
  hour13.children(".description").val(localStorage.getItem("hour-13"));
  hour14.children(".description").val(localStorage.getItem("hour-14"));
  hour15.children(".description").val(localStorage.getItem("hour-15"));
  hour16.children(".description").val(localStorage.getItem("hour-16"));
  hour17.children(".description").val(localStorage.getItem("hour-17"));
 
});
   // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format('MMM D, YYYY'));
