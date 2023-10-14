//if correct button clicked fade in -- correct answer
$('.answer3').on('click', function() {
  $('.feedback').text("You are correct. What do you expect a cookie?").css("background-color", "green");
  $('.feedback').fadeIn(1000)
  $('.button').attr("disabled",true)
})

//if correct button clicked fade in -- incorrect answers
$('.answer1, .answer2, .answer4').on('click', function() {
  $('.feedback').text("You are incorrect. How does it feel to be a loser?").css("background-color", "red");
  $('.feedback').fadeIn(1000)
  $('.button').attr("disabled",true)
})

//if reset button clicked fade in -- incorrect answers
$('.resetbutton').on('click', function() {
  $('.feedback').fadeOut(0)
  $('.button').attr("disabled",false)
})
