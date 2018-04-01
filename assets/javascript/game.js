$(document).ready(function() {
  // Declare global variables
  let goalNumber = 0;
  let currValue = 0;
  let totalPay = 0;

  //Define functions for gameplay
  function RollValue(range, min) {
    return Math.floor(Math.random() * range) + min;
  }

  function InitGame() {
    // reset current values
    currValue = 0;
    $('#score').text(currValue);
    $('#score').attr('value', currValue);

    //create values for goal and crystals.
    goalNumber = RollValue(102, 19);

    // Show goal to user
    $('#goal').text(goalNumber);
    $('#goal').attr('value', goalNumber);

    // set values of each crystal
    $('#blue').attr('value', RollValue(12, 1));
    $('#red').attr('value', RollValue(12, 1));
    $('#yellow').attr('value', RollValue(12, 1));
    $('#green').attr('value', RollValue(12, 1));

  }

  // Win the game, collect your pay
  function WinGame() {
    // collect your pay
    totalPay += currValue * 100;
    $('#pay').text(totalPay);
    $('#pay').attr('value', totalPay);


    // restart the game
    InitGame();
  }

  // Lose the game, you lost your haul
  function LoseGame() {

    // Display a message indicating loss. maybe a graphic of a ripped bag.

    // restart the game
    InitGame();
  }

  // on click, add the crystal value to the score
  $('.crystal').on("click", function() {
    // add crystal to score
    currValue += +$(this).attr('value');

    // display new score
    $('#score').text(currValue);
    $('#score').attr('value', currValue);

    // compare current value to the goal
    if (currValue === goalNumber) {
      WinGame()
    } else if (currValue > goalNumber) {
      LoseGame()
    }

  });

  $('#instructButton').on('click', function() {

  });

  InitGame();

});
