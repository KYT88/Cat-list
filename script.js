window.addEventListener("load" , () =>{
    const sounds = document.querySelectorAll(".sound");
    const board = document.querySelectorAll (".board div");
    const board2 = document.querySelectorAll (".board2 div");


    board.forEach ((aa, index) => {
        aa.addEventListener("click",function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });

    board2.forEach ((bb, index1) => {
        bb.addEventListener("click",function() {
            sounds[index1].currentTime = 0;
            sounds[index1].play();
        });
    });
});