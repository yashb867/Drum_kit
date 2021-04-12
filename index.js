var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) { //for loop is for adding EventListeners to all btns

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var choice = (this.innerHTML);

    makeSound(choice);
    buttonAnnimation(choice);

  });

}

  document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnnimation(event.key);
  });

function makeSound(choice){
  switch (choice) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;

    case "a":
      var audio1 = new Audio("sounds/tom-2.mp3");
      audio1.play();
      break;

    case "s":
      var audio1 = new Audio("sounds/tom-3.mp3");
      audio1.play();
      break;

    case "d":
      var audio1 = new Audio("sounds/tom-4.mp3");
      audio1.play();
      break;

    case "j":
      var audio1 = new Audio("sounds/snare.mp3");
      audio1.play();
      break;

    case "k":
      var audio1 = new Audio("sounds/crash.mp3");
      audio1.play();
      break;

    case "l":
      var audio1 = new Audio("sounds/kick-bass.mp3");
      audio1.play();
      break;

    default:
    console.log(choice);


  }
}

 function buttonAnnimation(button){
  var activeButton =document.querySelector("."+ button);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
