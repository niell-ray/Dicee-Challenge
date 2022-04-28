var randomNumber1 = Math.floor(Math.random() * 6 + 1);  /* will generate a random number from 1 - 6 */

var randomNumber2 = Math.floor(Math.random() * 6 + 1);  /* will generate a random number from 1 - 6 */

document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png"); /* will change the dice image according to the randomNumber generated */

document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png"); /* same as above */



if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "player 1 wins the game!";
}

else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "player 2 wins the game!";
}

else {
  document.querySelector("h1").innerHTML = "It's a draw!"
}
