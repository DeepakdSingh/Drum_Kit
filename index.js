
let noOfButtons = document.querySelectorAll("button").length;

for(let i=0 ; i<noOfButtons ; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        makeSound(this.innerHTML);
        animation(this.innerHTML);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animation(event.key);
});


function makeSound(key){
    let sound;
    switch(key){

        case 'w': sound = "sounds/tom-1.mp3";
        break;

        case 'a': sound = "sounds/tom-2.mp3";
        break;

        case 's': sound = "sounds/tom-3.mp3";
        break;

        case 'd': sound = "sounds/tom-4.mp3";
        break;

        case 'j': sound = "sounds/crash.mp3";
        break;

        case 'k': sound = "sounds/snare.mp3";
        break;

        case 'l': sound = "sounds/kick-bass.mp3";
        break;

        default:
    }

    const producer = new Audio(sound);
    producer.play();
}

function animation(key){
    let obj = document.querySelector("."+key);
    obj.classList.add("pressed");
    setTimeout(function(){
        obj.classList.remove("pressed");
    },100);  
}