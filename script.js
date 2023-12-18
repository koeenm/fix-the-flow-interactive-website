let helpBtn = document.querySelector('.help-button')
console.log(helpBtn)
let nextBtns = document.querySelectorAll('.next-step')
let stepGuide = document.querySelectorAll('.step-guide')
let closeBtns = document.querySelectorAll('.close-button')
let dialog = document.querySelector('dialog')

helpBtn.addEventListener('click', function() {
    stepGuide[0].showModal();
});

nextBtns.forEach((btn, index) => {
    btn.addEventListener('click', function(){
        stepGuide[index].close();

        if (index + 1 < stepGuide.length) {
            stepGuide[index + 1].showModal();
        }
    });
});

closeBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        stepGuide[index].close();
    });
});

dialog.addEventListener("click", onClick)

    function onClick(event) {
        if (event.target === dialog) {
            dialog.close();
        };
    };


