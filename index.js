
var drum = document.querySelectorAll("button");
for(i = 0; i < 7; i++)
{
drum[i].addEventListener("click", beats);
}

function beats(){
  var btht = this.innerHTML;
  sound(btht);
}

document.addEventListener("keypress", function(){ sound(event.key)});

function sound(key){

  switch (key) {
    case "w":
    var music = new Audio("sounds/tom-1.mp3");
    music.play();
    break;
    case "a":
    var music = new Audio("sounds/tom-2.mp3");
    music.play();
    break;
    case "s":
    var music = new Audio("sounds/tom-3.mp3");
    music.play();
    break;
    case "d":
    var music = new Audio("sounds/tom-4.mp3");
    music.play();
    break;
    case "j":
    var music = new Audio("sounds/kick-bass.mp3");
    music.play();
    break;
    case "k":
    var music = new Audio("sounds/snare.mp3");
    music.play();
    break;
    case "l":
    var music = new Audio("sounds/crash.mp3")
    music.play();
    break;
    default: console.log(this.innerHTML);
}
}
