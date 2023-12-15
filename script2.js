// stap 1: link de variabelen met de html of css
const helpBtn = document.querySelector('#help-button');
const closeBtns = document.querySelectorAll('.close');
const nextBtns = document.querySelectorAll('.next');
const dialogs = document.querySelectorAll('.step-guide');

// stap 2: voeg een eventlistener toe
helpBtn.addEventListener('click', function () {
    dialogs[0].showModal(); // Show the first dialog initially
    // De [0] staat voor de eerste dialog. Als ik er [1] zet, word de  
    // tweede dialog getoond, als ik [2] zet komt de derde in beeld etc
});

closeBtns.forEach((closeBtn, index) => {
    closeBtn.addEventListener('click', function () {
        dialogs[index].close(); // Close the current dialog
        // [index] zorgt ervoor dat elke dialog die nu open staat 
        // gesloten kan worden, als ik er [0] in zet kan je alleen de
        // eerste dialog sluiten, met [1] alleen de tweede etc
    });
});

nextBtns.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        dialogs[index].close(); // Close the current dialog
        if (index + 1 < dialogs.length) {
            dialogs[index + 1].showModal(); // Show the next dialog
        }
    });
});

// DEZE CODE GA IK OPNIEUW TYPEN




