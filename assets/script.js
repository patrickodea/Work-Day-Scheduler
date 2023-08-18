// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
 // Function to handle the click event on the save button

 function SaveButtonClick(event) {
  var timeBlockId = event.target.parentElement.id;
  var userInput = event.target.parentElement.querySelector('.description').value; 

  // Save the user input in local storage using the time-block's ID as the key
  
  localStorage.setItem(timeBlockId, userInput);
} 

// Add click event listeners to all the save buttons

var saveButtons = document.querySelectorAll('.saveBtn');
saveButtons.forEach(button => {
  button.addEventListener('click', SaveButtonClick);
});


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    function updateTimeBlockColors() {
      var currentHour = dayjs().format('H'); // Get the current hour in 24-hour format

      const timeBlocks = document.querySelectorAll('.time-block');
      timeBlocks.forEach(block => {
        var blockHour = parseInt(block.id.split('-')[1]); // Extract the hour from the block ID

        if (blockHour < currentHour) {
          block.classList.add('past');
          block.classList.remove('present', 'future');
        } else if (blockHour === currentHour) {
          block.classList.add('present');
          block.classList.remove('past', 'future');
        } else {
          block.classList.add('future');
          block.classList.remove('past', 'present');
        }
      });
    }
    updateTimeBlockColors();
    setInterval(updateTimeBlockColors, 60000);


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    function setSavedUserInput() {
      const timeBlocks = document.querySelectorAll('.time-block');
      timeBlocks.forEach(block => {
        var blockId = block.id;
        var userInput = localStorage.getItem(blockId);
        if (userInput !== null) {
          block.querySelector('.description').value = userInput;
        }
      });
    }

    // Call the function to set saved user input when the page loads
    
    // TODO: Add code to display the current date in the header of the page.
   

    // Call the function to display the current date when the page loads
   
  
