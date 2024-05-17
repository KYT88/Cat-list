window.addEventListener("load" , () =>{
    const sounds = document.querySelectorAll(".sound");
    const board = document.querySelectorAll (".board div");


    board.forEach ((aa, index) => {
        aa.addEventListener("click",function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });
});