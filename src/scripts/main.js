let score1 = 0; // score for quiz 1
const incorrectPenalty = 1;
const quiz1Elements = document.querySelectorAll("#quiz1"); // select elements for quiz 1
const comment = document.getElementById("comment")
const score = document.getElementById("score")

quiz1Elements.forEach(function(parentElement) { // loop through quiz 1 elements
const allChildren = parentElement.querySelectorAll("button");

allChildren.forEach(function (child) {
child.addEventListener('click', function() {
  if (child.hasAttribute('id') ) {
    child.style.border = "2px solid #22c55e";
    score1 += 1; // increment score for quiz 1 if answer is correct
    child.disabled = true
} 

else {
    child.style.border = "2px solid #f43f5e";
    score1 = Math.max(0, score1 - incorrectPenalty);
    child.disabled = true
  }

  if ( score1 == 0) {
    comment.innerHTML = "Rome wasn't built in a day 🗿, better luck next time my friend.";
  }

  else if (score1 < 0 || score1 <= 4){
    comment.innerHTML = "There is still room for improvement 👍. Keep pushing!";
  }

  else if (score1 < 5 || score1 <= 9){
    comment.innerHTML = "You performed really well 👌. Continue learning more!";
  }

  else {
        comment.innerHTML = "Perfectoin 🤌, as expected from  a Codeology.net user!";
  }
  score.innerHTML = score1.toString();
});
});
});